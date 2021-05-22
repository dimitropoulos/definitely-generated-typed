# Definitely(Generated)Typed

Like DefinitelyTyped but generated from official OpenAPI and JSONSchema files.

> **Note**: This is a brand new project and absolutely not ready for production.

## Design Goals

### Overall
- adding new types is as easy as making one change to one file pointing to an openapi or jsonschema remote file
- use [dtslint](https://github.com/microsoft/dtslint) to make sure we are generating valid TypeScript types
- be friendly to opensource contributions and (ultimately) a place where people can add schemas for all kinds of things
- to _NOT_ generate or accept types for things that already have 1st party types (e.g. slack has both OpenAPI and TypeScript offered 1st party)
- autopilot.  For things like the kubernetes specs (maybe others) [other projects](https://github.com/garethr/kubernetes-json-schema) like this [have failed](https://github.com/instrumenta/kubernetes-json-schema) in the past because invariably they fall out of use.  It must be as easy as running the CI, which will search for and generate new versions.  That way, a process can be established where the CI will run periodically (say, daily or weekly) so no human intervention is needed for new types to be generated for new API versions.

### Insomnia
- get types that we can use in `openapi-2-kong` and `insomnia` to generate Kong configs and things

### Kubernetes
- generating _usable_ TypeScript types for (possibly) every release
- allow a mechanism for people to use this package to generate types for their own CRDs (and publish them here or not)

### Kong
- create TypeScript types from jsonschema or openapi from Kong configs

### Postman
- create TypeScript types that will work for transforming Postman configs to Insomnia configs (and vice versa! users come first.)

## How to use

`yarn install` before all else to download dependencies

- `yarn generate` to generate TypeScript types.  See [`./global.d.ts`](./global.d.ts) for options.
- `yarn delete:generated` to delete TypeScript types
- `yarn build` to generate and compile everything
- `yarn delete:build` to clean files from the build

## Resources/Prior Art

### Overall
- Parser used: https://github.com/touchifyapp/spec2ts

### Kubernetes

- [kube-openapi](https://github.com/kubernetes/kube-openapi) the code that generates the kubernetes OpenAPI specs
- [a pull request](https://github.com/kubernetes/enhancements/pull/1263) on the current state of Kubernetes OpenAPI v3
- [the latest Kubernetes OpenAPI spec](https://github.com/kubernetes/kubernetes/blob/master/api/openapi-spec/swagger.json)
- [what _seems like_ the most recent k8s schemas](https://github.com/instrumenta/kubernetes-json-schema)