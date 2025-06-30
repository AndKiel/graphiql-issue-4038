```shell
pnpm install
```

```shell
pnpm build

> graphiql-issue-4038@1.0.0 build /Users/AndKiel/graphiql-issue-4038
> pnpm prebuild && react-router build


> graphiql-issue-4038@1.0.0 prebuild /Users/AndKiel/graphiql-issue-4038
> rimraf .cache build

vite v7.0.0 building for production...
✓ 2144 modules transformed.
✘ [ERROR] Could not resolve "monaco-editor/esm/vs/editor/editor.worker"

✗ Build failed in 7.46s
[vite-plugin-moncao-editor-esm] Build failed with 1 error:
error: Could not resolve "monaco-editor/esm/vs/editor/editor.worker"
    at failureErrorWithLog (/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:1463:15)
    at /Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:924:25
    at /Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:876:52
    at buildResponseToResult (/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:922:7)
    at /Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:949:16
    at responseCallbacks.<computed> (/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:601:9)
    at handleIncomingPacket (/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:656:12)
    at Socket.readFromStdout (/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:579:7)
    at Socket.emit (node:events:518:28)
    at addChunk (node:internal/streams/readable:561:12) {
  errors: [
    {
      detail: undefined,
      id: '',
      location: null,
      notes: [],
      pluginName: '',
      text: 'Could not resolve "monaco-editor/esm/vs/editor/editor.worker"'
    }
  ],
  warnings: [],
  code: 'PLUGIN_ERROR',
  plugin: 'vite-plugin-moncao-editor-esm',
  hook: 'writeBundle'
}
 ELIFECYCLE  Command failed with exit code 1.
```

```shell
pnpm dev

> graphiql-issue-4038@1.0.0 dev /Users/AndKiel/graphiql-issue-4038
> react-router dev

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
8:33:24 AM [vite] (ssr) Error when evaluating SSR module virtual:react-router/server-build: Cannot find package '/Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/@graphiql+react@0.35.1_@emotion+is-prop-valid@1.3.1_@types+node@22.15.34_@types+react-d_ab41ef91f1590d5987c2e54135e53055/node_modules/monaco-editor/index.js' imported from /Users/AndKiel/graphiql-issue-4038/node_modules/.pnpm/@graphiql+react@0.35.1_@emotion+is-prop-valid@1.3.1_@types+node@22.15.34_@types+react-d_ab41ef91f1590d5987c2e54135e53055/node_modules/@graphiql/react/dist/constants.js
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