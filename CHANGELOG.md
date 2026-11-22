## [2.1.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v2.1.0...v2.1.1) (2026-11-22)


### Bug Fixes

* **forms:** track touched state on actual blur ([debe578](https://github.com/abudayah/react-hook-form-cloudscape/commit/debe5789a780e40dd4ff59a775394074d8114582))

# [2.1.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v2.0.0...v2.1.0) (2026-11-22)


### Bug Fixes

* **package:** align exports and peer ranges with published artifacts ([7f96ace](https://github.com/abudayah/react-hook-form-cloudscape/commit/7f96ace7bb663215c548d1084639f113083b23d3))
* **property-filter:** make onChange optional ([b86b79a](https://github.com/abudayah/react-hook-form-cloudscape/commit/b86b79a304c5274de08b16448e263b016f85bf94))
* **release:** restore permissions and publish provenance ([3b8f944](https://github.com/abudayah/react-hook-form-cloudscape/commit/3b8f9440e4e7c6e1eef0dbaf64252b1634522573))


### Features

* **form-field:** connect React Hook Form errors to Cloudscape ([3611f4a](https://github.com/abudayah/react-hook-form-cloudscape/commit/3611f4a7853be6ef8ca86b1f8e63b7ba4f8c5bef))

# [2.0.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.15...v2.0.0) (2026-11-22)


* feat(attribute-editor)!: type definitions against field-array rows ([8e01707](https://github.com/abudayah/react-hook-form-cloudscape/commit/8e017074a13f36e25a2e4e59f319c60a68f9de0b))


### Bug Fixes

* **attribute-editor:** narrow field-array subscription path ([20a4bf8](https://github.com/abudayah/react-hook-form-cloudscape/commit/20a4bf803cb07613b0e5fb8bc9ba9ca196f056c3))
* **forms:** preserve controlled selection values ([9dd4893](https://github.com/abudayah/react-hook-form-cloudscape/commit/9dd4893c54de060caef19fa7b30b5c7133f81be6))
* **forms:** prevent property filter crash when field is uninitialized ([2f890a4](https://github.com/abudayah/react-hook-form-cloudscape/commit/2f890a4fcac34ba1c9b361f6d519c66c40c963db))
* **forms:** restore focus and blur behavior for filter and editor ([c218717](https://github.com/abudayah/react-hook-form-cloudscape/commit/c218717296c079cfea8fe6da3f8ace0d47f58ad6))
* **types:** bind remaining wrapper props to field names ([ffe1497](https://github.com/abudayah/react-hook-form-cloudscape/commit/ffe14970f7927f5601e9a7a0b26185b44da6c496))
* **types:** bind wrapper defaults and rules to field names ([8724f10](https://github.com/abudayah/react-hook-form-cloudscape/commit/8724f10ba2b7db5acd5d218a60fafb312c14aa7d))
* **types:** constrain boolean and card fields by name ([fc2c071](https://github.com/abudayah/react-hook-form-cloudscape/commit/fc2c071b5fd01cf054b7866a3fed45b7321ab7f4))


### BREAKING CHANGES

* CAttributeEditorProps now types definition callbacks and defaultValue against the row type selected by its field-array name. Consumers that explicitly annotate Definition with the whole form type should update it to the row type. Use the new key property for validation error lookup instead of deriving paths from the visible label.

## [1.7.15](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.14...v1.7.15) (2026-11-19)


### Bug Fixes

* make prepare lifecycle safe for npm ci dry run ([a9dfbfa](https://github.com/abudayah/react-hook-form-cloudscape/commit/a9dfbfa4918cc18fac6743e47d33ac114b65acf8))
* skip Husky setup during npm dry run ([495a1d0](https://github.com/abudayah/react-hook-form-cloudscape/commit/495a1d01398844bceda93134fb23ee8439a70407))

## [1.7.14](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.13...v1.7.14) (2026-11-19)


### Bug Fixes

* include optional platform packages in lockfile ([0c80fe4](https://github.com/abudayah/react-hook-form-cloudscape/commit/0c80fe4a69224b9c125a27f65c6a50a38f52ef52))
* release 1.7.14 with RHF blur and disabled-state fixes ([7e0c488](https://github.com/abudayah/react-hook-form-cloudscape/commit/7e0c488208bb8b5569401c1895e46577001b8ed3)), closes [#162](https://github.com/abudayah/react-hook-form-cloudscape/issues/162) [#165](https://github.com/abudayah/react-hook-form-cloudscape/issues/165) [#169](https://github.com/abudayah/react-hook-form-cloudscape/issues/169) [#166](https://github.com/abudayah/react-hook-form-cloudscape/issues/166)
* resolve build and test dependency issues ([f71aba4](https://github.com/abudayah/react-hook-form-cloudscape/commit/f71aba4a4bad5dfb0ea09c52f0d31d0e4391aafd))
* restore npm lockfile for clean installs ([63ab1e1](https://github.com/abudayah/react-hook-form-cloudscape/commit/63ab1e147be92bc3d3ff788d0831473845e0d84f))
* run package export verification only after build ([4abc937](https://github.com/abudayah/react-hook-form-cloudscape/commit/4abc9377ec0e67688c7a0c97cd821020e7823ab3))

## [1.7.13](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.12...v1.7.13) (2026-11-18)


### Bug Fixes

* externalize React runtime subpaths ([213a169](https://github.com/abudayah/react-hook-form-cloudscape/commit/213a169b46a60edadf1ab5cd852ed53af0d82615))

## [1.7.12](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.11...v1.7.12) (2026-08-26)


### Bug Fixes

* handle edge cases in CAttributeEditor, CSelect and CDateRangePicker ([5b98d6e](https://github.com/abudayah/react-hook-form-cloudscape/commit/5b98d6e7b7414e19b612830ab49eaaf44084342b))
* **multiselect:** correct onBlur handler never being called due to incorrect .bind usage ([da6089a](https://github.com/abudayah/react-hook-form-cloudscape/commit/da6089a20ece6e17ca5d6d6e6fa1aa7603b4d1c3))
* **types:** unify control prop to optional and fix type inconsistencies ([bea5b96](https://github.com/abudayah/react-hook-form-cloudscape/commit/bea5b96bc696a0e55a31bb2a2ae44997fade1b61))
* wire formOnBlur across all components missing RHF blur tracking ([c04c7ef](https://github.com/abudayah/react-hook-form-cloudscape/commit/c04c7efcfa43606fabf986f8324d437a51627d4f))

## [1.7.11](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.10...v1.7.11) (2025-06-23)


### Bug Fixes

* **bug:** bug fixes ([2987160](https://github.com/abudayah/react-hook-form-cloudscape/commit/298716004500faeaf7eca1a9cdcfc6dea15072ed))

## [1.7.10](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.9...v1.7.10) (2025-06-22)


### Bug Fixes

* **exports:** update component imports pattern ([a11970b](https://github.com/abudayah/react-hook-form-cloudscape/commit/a11970b402571856bd9377be423633aa536ec3b5))

## [1.7.9](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.8...v1.7.9) (2025-06-21)


### Bug Fixes

* **Exports:** correcting the components export paths ([393071c](https://github.com/abudayah/react-hook-form-cloudscape/commit/393071c642296cf10b987cbe4db8e92d2fbf34af))

## [1.7.9-dev.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.8...v1.7.9-dev.1) (2025-06-21)


### Bug Fixes

* **Exports:** correcting the components export paths ([393071c](https://github.com/abudayah/react-hook-form-cloudscape/commit/393071c642296cf10b987cbe4db8e92d2fbf34af))

## [1.7.8](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.7...v1.7.8) (2025-06-18)


### Bug Fixes

* package-lock.json conflict ([ac9f3bf](https://github.com/abudayah/react-hook-form-cloudscape/commit/ac9f3bf70aa4c08eb67dfec17a7e003d82653fc4))

## [1.7.7](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.6...v1.7.7) (2025-05-27)


### Bug Fixes

* **components:** standardize component index exports ([74901d4](https://github.com/abudayah/react-hook-form-cloudscape/commit/74901d4769bcc6c46771999cdebfc914ab7205d9))

## [1.7.6](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.5...v1.7.6) (2025-05-25)


### Bug Fixes

* **Import:** prevent direct component file imports ([c305174](https://github.com/abudayah/react-hook-form-cloudscape/commit/c305174d80c2a3634bab39831e0aa70fb937ef21))
* **Refactor:** prevent direct component file imports and add CSP headers ([d77453f](https://github.com/abudayah/react-hook-form-cloudscape/commit/d77453fcc268e7e5f04f9567ec7ff2380971c44d))

## [1.7.5](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.4...v1.7.5) (2025-05-25)


### Bug Fixes

* **Refactor:** standardize component exports with barrel files ([19b8af2](https://github.com/abudayah/react-hook-form-cloudscape/commit/19b8af2f5989956a83d088a7a29e02b5553e7571))

## [1.7.4](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.3...v1.7.4) (2025-05-21)


### Bug Fixes

* **build:** update prettier configs ([b30b7b3](https://github.com/abudayah/react-hook-form-cloudscape/commit/b30b7b3d00866a4180d06bfdf4ed7ef21ecb3058))

## [1.7.3](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.2...v1.7.3) (2025-05-21)


### Bug Fixes

* **build:** update eslint configs ([5a08921](https://github.com/abudayah/react-hook-form-cloudscape/commit/5a08921efd38fa460c507c06ea5b811815b02bb5))

## [1.7.2](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.1...v1.7.2) (2025-05-20)


### Bug Fixes

* **docs:** bump rhfc version ([bef2178](https://github.com/abudayah/react-hook-form-cloudscape/commit/bef2178c0699906471ffbe55a2b5d50fd6190e38))

## [1.7.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.7.0...v1.7.1) (2025-05-20)


### Bug Fixes

* **linting:** fix linting issues ([c11b328](https://github.com/abudayah/react-hook-form-cloudscape/commit/c11b3285a07a7d2cdef622835e3ca8097ba2d3cc))

# [1.7.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.6.0...v1.7.0) (2025-05-20)


### Features

* **features:** Extend react-hook-form features support for controlled components ([72b52e9](https://github.com/abudayah/react-hook-form-cloudscape/commit/72b52e911d4919587dcb8aae1ea61568e8ecd1fe))

# [1.6.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.5.1...v1.6.0) (2025-05-10)


### Features

* **features:** updating cards, autosuggest and attribute-editor ([e37e892](https://github.com/abudayah/react-hook-form-cloudscape/commit/e37e892fe52327d51c2716a465d6b4f3ea21aa64))

## [1.5.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.5.0...v1.5.1) (2025-04-30)


### Bug Fixes

* **dependencies:** bump dependencies minor version ([0278378](https://github.com/abudayah/react-hook-form-cloudscape/commit/0278378315736e21275033f2191889dc15623a30))

# [1.5.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.5...v1.5.0) (2025-04-20)


### Features

* **update:** Support React 19 ([13376a2](https://github.com/abudayah/react-hook-form-cloudscape/commit/13376a2ac16746ed11d09a3f656425a5f44ab376))

## [1.4.5](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.4...v1.4.5) (2025-02-01)


### Bug Fixes

* **docs:** update readme and remove demo file ([70a8607](https://github.com/abudayah/react-hook-form-cloudscape/commit/70a8607722ad191c983887d771d6e9f660617f20))

## [1.4.4](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.3...v1.4.4) (2025-02-01)


### Bug Fixes

* **fix:** missing file pathes ([05d75c4](https://github.com/abudayah/react-hook-form-cloudscape/commit/05d75c44e6f3dac028ef3e38db00cf62cb5285b7))

## [1.4.3](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.2...v1.4.3) (2025-01-27)


### Bug Fixes

* **attribute-editor:** make defaultValue required ([9d4373b](https://github.com/abudayah/react-hook-form-cloudscape/commit/9d4373b3519339e95422bd07c0e5b49634936b30))
* **CAttributeEditor:** make control required ([8676055](https://github.com/abudayah/react-hook-form-cloudscape/commit/86760552e04710e9710c9ea673534395f2a095e6))

## [1.4.3-dev.2](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.3-dev.1...v1.4.3-dev.2) (2025-01-27)


### Bug Fixes

* **attribute-editor:** make defaultValue required ([9d4373b](https://github.com/abudayah/react-hook-form-cloudscape/commit/9d4373b3519339e95422bd07c0e5b49634936b30))

## [1.4.3-dev.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.2...v1.4.3-dev.1) (2025-01-26)


### Bug Fixes

* **CAttributeEditor:** make control required ([8676055](https://github.com/abudayah/react-hook-form-cloudscape/commit/86760552e04710e9710c9ea673534395f2a095e6))

## [1.4.2](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.1...v1.4.2) (2025-01-26)


### Bug Fixes

* **attribute-editor:** fix attribute-editor ([464bed3](https://github.com/abudayah/react-hook-form-cloudscape/commit/464bed388519a4b8fce26a62cb9e64e759d605df))

## [1.4.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.4.0...v1.4.1) (2025-01-26)


### Bug Fixes

* **Fix:** attribute editor ([c58c6ff](https://github.com/abudayah/react-hook-form-cloudscape/commit/c58c6ff555d6cdf1ab37e2db3b383f594f4899cb))

# [1.4.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.3.2...v1.4.0) (2025-01-20)


### Features

* **new:** adding support to slider input ([6af4f22](https://github.com/abudayah/react-hook-form-cloudscape/commit/6af4f2243da8b8bdcc7ad232a3bc2853d34324a3))

## [1.3.2](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.3.1...v1.3.2) (2025-01-13)


### Bug Fixes

* **Readme:** Update README.md ([8a8856d](https://github.com/abudayah/react-hook-form-cloudscape/commit/8a8856dc31583ea10b282d42f83988836cff81d6))

## [1.3.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.3.0...v1.3.1) (2025-01-03)


### Bug Fixes

* **multiselect:** Selected options with options mapping ([62e1369](https://github.com/abudayah/react-hook-form-cloudscape/commit/62e1369260a6d6c1529623d2bbabef481a234ffc))

# [1.3.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.2.0...v1.3.0) (2024-12-28)


### Features

* **new:** property filter component ([1abb76d](https://github.com/abudayah/react-hook-form-cloudscape/commit/1abb76df0b2d5cd8a7e15558880acdf4eb8bd7c9))
* **new:** s3-resource-selector component ([d94b96e](https://github.com/abudayah/react-hook-form-cloudscape/commit/d94b96e0827c898bc4a333a01fd9eed7e959ca06))

# [1.2.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.1.2...v1.2.0) (2024-12-26)


### Features

* **new:** file upload component ([bb20316](https://github.com/abudayah/react-hook-form-cloudscape/commit/bb20316f7e73bfd93f8f59c18cf3d9982aaf11d1))

## [1.1.2](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.1.1...v1.1.2) (2024-12-26)


### Bug Fixes

* **docs:** update readme ([ebedc90](https://github.com/abudayah/react-hook-form-cloudscape/commit/ebedc9020774a9c875a4a1f0a967eb4f148f06fe))

## [1.1.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.1.0...v1.1.1) (2024-12-26)


### Bug Fixes

* **docs:** update readme ([ea1f0f8](https://github.com/abudayah/react-hook-form-cloudscape/commit/ea1f0f8ce63154dfcd7786f9975101e86bb940f1))

# [1.1.0](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.0.1...v1.1.0) (2024-12-26)


### Features

* **new:** cards component ([36f5fef](https://github.com/abudayah/react-hook-form-cloudscape/commit/36f5fef02ec18a2d34f0a10f4dbdabc0848454a5))

# [1.1.0-dev.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.0.1-dev.1...v1.1.0-dev.1) (2024-12-26)


### Features

* **new:** cards component ([36f5fef](https://github.com/abudayah/react-hook-form-cloudscape/commit/36f5fef02ec18a2d34f0a10f4dbdabc0848454a5))


## [1.0.1-dev.1](https://github.com/abudayah/react-hook-form-cloudscape/compare/v1.0.0...v1.0.1-dev.1) (2024-12-26)


### Bug Fixes

* **enhancements:** setup vitest ([f17c47b](https://github.com/abudayah/react-hook-form-cloudscape/commit/f17c47bf2102be61526df415fb6b0a91a105c904))

# 1.0.0 (2024-12-25)


### Features

* setup ci ([567a779](https://github.com/abudayah/react-hook-form-cloudscape/commit/567a77907e91bee73e4e2b530ded6b6c8c228735))
