import { Target } from '../../entities';

export const targets: Target[] = [
  {
    name: 'kubernetes',
    source: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/swagger.json',
    type: 'openapi',
    version: 'v1.20.0',
  },
];
