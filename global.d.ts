declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * force all.
     * 
     * The same as specifying `FORCE_GENERATE=true` and `FORCE_FETCH=true`
     */
    DASH_DASH_FORCE: string;

    /** Forces re-generation of all TypeScript types */
    FORCE_GENERATE: string;

    /** Forces re-downloading of all source files (openapi and jsonschema) */
    FORCE_FETCH: string;
  }
}
