export type URL = string;

/** version, _WITH_ the `v` (it matters for Go). */
export type Version = string;

export type SourceTypes = 'json' | 'yaml';

export type SourceURL = `${string}.${SourceTypes}`;

export type TargetType = 'jsonschema' | 'openapi';

export interface Target {
  name: string;

  /** source url by which the spec was originally downloaded */
  source: SourceURL;
  type: TargetType;

  /** version, _WITH_ the `v` (it matters for Go). */
  version: Version;
}
