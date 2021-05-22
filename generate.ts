import { existsSync, promises } from 'fs';
import { chain, map } from 'ramda';
import { targets } from './types';
import { join as pathJoin } from 'path';
import fetch, { Headers, Response } from 'node-fetch';
import { Target } from './entities';
import * as YAML from 'js-yaml';
import { printer } from "@spec2ts/core";
import { parseSchemaFile } from "@spec2ts/jsonschema";
import { parseOpenApiFile } from '@spec2ts/openapi';

const { writeFile } = promises;

const log = (logLine: string) => console.log(`[generate] ${logLine}`);

const DASH_DASH_FORCE = Boolean(process.env.DASH_DASH_FORCE === 'true');
const FORCE_GENERATE = DASH_DASH_FORCE || Boolean(process.env.FORCE_GENERATE === 'true');
const FORCE_FETCH = DASH_DASH_FORCE || Boolean(process.env.FORCE_FETCH === 'true');

const pathRoot = ({ name, version }: Pick<Target, 'name' | 'version'>) => [
  __dirname,
  'types',
  name,
  'versions',
  version
];

const requestSource = ({ source }: Pick<Target, 'source'>) => {
  const isJson = sourceIsJson({ source })
  log(`fetching ${source}`)
  return fetch(source, {
    headers: new Headers({
      'Content-Type': isJson ? 'application/json' : 'application/yaml',
    }),
  })
};

const stringify = async (target: Target, response: Response) => sourceIsJson(target) ? (
  JSON.stringify(await response.json(), null, 2)
) : (
  String(YAML.load(await response.text()))
);

const sourceIsJson = ({ source }: Pick<Target, 'source'>) => source.endsWith('json');

const getSourcePath = (target: Target) => {
  const isJson = sourceIsJson(target)
  const sourceFile = `source.${isJson ? 'json' : 'yaml'}`;
  return pathJoin(...pathRoot(target), sourceFile)
}

const writeSourceFile = async (target: Target) => {
  const sourcePath = getSourcePath(target);
  if (existsSync(sourcePath) && !FORCE_FETCH) {
    log(`skipping fetching and writing source file because it already exists: ${sourcePath}`)
  } else {
    const response = await requestSource(target);
    const sourceData = await stringify(target, response);
    log(`writing file: ${sourcePath}`);
    await writeFile(sourcePath, sourceData);
  }
}

const transform = async (target: Target) => {
  const sourcePath = getSourcePath(target);
  switch (target.type) {
    case 'jsonschema': {
      const schema = await parseSchemaFile(sourcePath);
      return printer.printNodes(schema);
    }

    case 'openapi': {
      const schema = await parseOpenApiFile(sourcePath);
      return printer.printNodes(Object.values(schema).flat());
    }

    default:
      throw new Error(`target of type ${target.type} is not supported`)
  }
}

const writeOutputFile = async (target: Target) => {
  const outputPath = pathJoin(...pathRoot(target), 'index.ts');
  if (existsSync(outputPath) && !FORCE_GENERATE) {
    log(`skipping generating types file because it already exists: ${outputPath}`)
  } else {
    log(`writing types file: ${outputPath}`)
    const outputData = await transform(target);
    await writeFile(outputPath, outputData);
  }
}

const generate = async () => (
  Promise.all(map(async target => {
    await writeSourceFile(target);
    await writeOutputFile(target);
  }, targets))
);

generate()
  .then()
  .catch(console.error);