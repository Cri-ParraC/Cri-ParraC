# node-ts-template

Minimal Node.js + TypeScript starter. Node (v22.18+) runs `.ts` files **directly** by stripping the types, so there is no build step, `ts-node` or `tsx`. TypeScript is only used for type checking.

## Usage

```bash
npm install
npm start -- --name Ada --excited   # run src/index.ts
npm run dev                         # re-run on file changes
npm test                            # node:test runner, finds test/**/*.test.ts
npm run check                       # typecheck + tests (what CI runs)
```

## How it works

| Piece | Tool |
|---|---|
| Run TypeScript | `node file.ts` (native type stripping) |
| Type checking | `tsc --noEmit` |
| Tests | built-in `node:test` + `node:assert` |
| Watch mode | `node --watch` |
| CLI args | built-in `node:util` `parseArgs` |
| CI | GitHub Actions (`.github/workflows/ci.yml`) |

There are no runtime dependencies. The only dev dependencies are `typescript` and `@types/node`.

## Rules imposed by type stripping

Node only *removes* types and does not transform code, so `tsconfig.json` enforces:

- **Import with the `.ts` extension:** `import { greet } from "./greet.ts"` (`allowImportingTsExtensions`).
- **Use `import type` for type-only imports** (`verbatimModuleSyntax`).
- **No TS-only runtime syntax:** no `enum`, `namespace`, or constructor parameter properties (`erasableSyntaxOnly`). Use `as const` objects and union types instead.
