```shell
pnpm install
pnpm dev
```

```
> react-router dev

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
1:09:01 PM [vite] (ssr) Error when evaluating SSR module virtual:react-router/server-build: Cannot find package '/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/@graphiql+react@0.35.1_@emotion+is-prop-valid@1.3.1_@types+node@22.15.33_@types+react-d_19133dc38c57c20abfdb28dc691bfc08/node_modules/monaco-editor/index.js' imported from /Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/@graphiql+react@0.35.1_@emotion+is-prop-valid@1.3.1_@types+node@22.15.33_@types+react-d_19133dc38c57c20abfdb28dc691bfc08/node_modules/@graphiql/react/dist/constants.js
      at legacyMainResolve (node:internal/modules/esm/resolve:204:26)
      at packageResolve (node:internal/modules/esm/resolve:778:12)
      at moduleResolve (node:internal/modules/esm/resolve:854:18)
      at defaultResolve (node:internal/modules/esm/resolve:984:11)
      at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:780:12)
      at ModuleLoader.#cachedDefaultResolve (node:internal/modules/esm/loader:704:25)
      at ModuleLoader.resolve (node:internal/modules/esm/loader:687:38)
      at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:305:38)
      at ModuleJob._link (node:internal/modules/esm/module_job:175:49)
```