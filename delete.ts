import { existsSync, rmSync } from 'fs';
import { forEach } from 'ramda';
import { targets } from './types';
import { join as pathJoin } from 'path';

const log = (logLine: string) => console.log(`[delete] ${logLine}`);

forEach(target => {
  const outputPath = pathJoin(
    __dirname,
    'types',
    target.name,
    'versions',
    target.version,
    'index.ts'
  );

  if (!existsSync(outputPath)) {
    return;
  }
  rmSync(outputPath);
  
  log(`deleting file: ${outputPath}`)
}, targets);
