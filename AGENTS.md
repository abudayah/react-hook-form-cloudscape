# Agent & Contributor Steering Guide (`react-hook-form-cloudscape`)

Follow these rules on every change to keep builds fast, exports consistent, TypeScript contracts intact, and `semantic-release` notes clean.

---

## 1. Component Authoring Rules

- **Always use Cloudscape subpath imports — never the barrel:**
  - Import components from `@cloudscape-design/components/<kebab-name>` (e.g., `import Input, { InputProps } from "@cloudscape-design/components/input"`).
  - Import shared event types from `@cloudscape-design/components/interfaces` (e.g., `import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces"`).
  - Never import from `"@cloudscape-design/components"` in `src/` — `scripts/verify-package-exports.mjs` fails the build if a barrel import lands in `dist/`.
- **Keep `"use client";` on all built component modules:**
  - `vite.config.ts` emits `"use client";` on every file in `dist/components/**` (except pure `utils.js` helpers), and `scripts/verify-package-exports.mjs` enforces it. Do not break or remove this banner.
- **Guard `undefined` initial values on string-valued inputs:**
  - Controlled string inputs (`CInput`, `CTextarea`, `CDatePicker`, `CDateInput`, `CTimeInput`, `CTextFilter`, etc.) must pass `value={value ?? ""}` (or equivalent) so optional fields omitted from `useForm({ defaultValues })` never trigger React uncontrolled-to-controlled warnings.
- **Preserve TypeScript backwards compatibility:**
  - Do not tighten existing `FieldPath<T>` generics on released wrappers (e.g., `CInput` intentionally supports numeric fields, verified in `src/type-tests/wrapper-field-types.tsx`) unless intentionally cutting a **Major** (`BREAKING CHANGE:`) release.
  - New boolean-only controls should use `FieldPathByValue<T, boolean | undefined>` (matching `CCheckbox` and `CToggle`).
- **Export every component from both subpath and package root:**
  - Every `src/components/<name>/index.ts` must also be re-exported (default component + props type) from `src/index.ts`.
  - Keep `src/index.ts` alphabetically ordered after `CFormField`.

---

## 2. Interactive Demos (`docs/source`)

Every component in `src/components/*` must have a working interactive demo in `docs/source`:

1. Add `docs/source/src/components/<PascalName>.tsx` importing from `"react-hook-form-cloudscape"`.
2. Wire the navigation link and `<Route>` in `docs/source/src/App.tsx`.
3. Wire the `?raw` import and `switch` case in `docs/source/src/SourceCodeView.tsx`.
4. Verify with `cd docs/source && npm run lint && npm run build`.

---

## 3. Testing & Verification Gates

Run **all** of these before opening or updating a PR:

```bash
npm run lint
npm run typecheck:tests
npm run build            # clean + unit coverage + tsc + vite build + verify:exports + verify-react-runtime
npm run verify:package   # npm pack + attw (esm-only) + publint
cd docs/source && npm run lint && npm run build
```

- Remove any local `react-hook-form-cloudscape-*.tgz` tarball created during `npm run verify:package` before committing.
- Add or update unit tests (including `src/components/wrappers.integration.test.tsx`) and type tests (`src/type-tests/wrapper-field-types.tsx`) for every new wrapper or behavior fix.

---

## 4. Git, PR & `semantic-release` Workflow

- **Never commit directly to `main`.** Always work on a feature branch and open a PR.
- **Use atomic Conventional Commits** (`feat:`, `fix:`, `perf:`, `docs:`, `chore:`) so `@semantic-release/release-notes-generator` automatically groups changes under **Features**, **Performance Improvements**, and **Bug Fixes** in `CHANGELOG.md` and GitHub Releases:
  - `feat:` → Minor bump (new component, new root export, new prop)
  - `fix:` / `perf:` → Patch bump (bug fix, runtime guard, bundle/import optimization)
  - `BREAKING CHANGE:` in commit footer → Major bump (breaking prop/type/runtime change)
  - `docs:` / `chore:` / `test:` → No release bump on its own
- **When a PR contains multiple conventional commit types**, merge with a **merge commit** (or rebase-merge) rather than squash-merging, so `semantic-release` preserves every categorized bullet in `CHANGELOG.md` and the GitHub Release.
- After a release publishes, enrich the GitHub Release notes (`gh release edit vX.Y.Z`) with a short **"What's New & Why It Matters"** section above the auto-generated changelog when user-facing highlights warrant extra context.
