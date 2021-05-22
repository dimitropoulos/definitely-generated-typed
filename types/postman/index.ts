import { Target } from '../../entities';

export const targets: Target[] = [
  {
    name: 'postman',
    source: 'https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json',
    type: 'jsonschema',
    version: 'v1.0.0',
  },
  {
    name: 'postman',
    source: 'https://schema.postman.com/collection/json/v2.0.0/draft-07/collection.json',
    type: 'jsonschema',
    version: 'v2.0.0',
  },
  {
    name: 'postman',
    source: 'https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json',
    type: 'jsonschema',
    version: 'v2.1.0',
  }
];
