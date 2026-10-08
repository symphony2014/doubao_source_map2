# Third-Party / `node_modules`-Origin Code Summary

## What this repository appears to be

This is not a conventional source tree with a separate `node_modules/` directory.
It appears to be a webpack-bundled frontend application that was later unpacked/decompiled into folders and files.

Evidence:

- Files contain headers like `ModuleUnpack - Unpacked via Webcrack`
- Files include webpack chunk metadata such as `chunk file`, `chunkId`, and `moduleId`
- Many directories look like exploded package/module names rather than hand-written app domains

Example:

- `chat/chat-input-action-buttons.js`

## High-level split

The codebase looks roughly split into two categories:

1. Product/business code
2. Vendored or bundled third-party/library code

The second category is what most likely "belongs to node_modules".

## Likely third-party / vendored areas

These folders strongly resemble package code, reusable framework layers, or bundled vendor chunks.

### React and shared vendor runtime

- `vendor-react-core`
- `vendor-utils-dayjs-uuid`
- `react-component-utils`
- `react-form-fields`
- `react-icon-components`
- `react-imagex-utils`
- `react-ui-components`
- `react-ui-components-modals`

Typical role:

- React runtime wrappers
- date/uuid helpers
- generic component utilities

### Semi UI / component framework

- `semi-design-core`
- `semi-design-ui-core`
- `semi-ui-library-bundle`
- `semi-ui-core-foundation`
- `semi-ui-primitives`
- `semi-ui-modal-radix-utils`
- `semi-ui-image-component`
- `semi-ui-image-viewer`
- `semi-overlay-components`
- `semi-form-components`
- `semi-form-input-components`
- `semi-ui-tooltip-*`
- `semi-ui-upload-utils`

Typical role:

- design system primitives
- forms, modals, overlays, popovers, tooltips
- image/file upload and preview widgets

### Generic UI abstraction layers

- `ui-core-utilities`
- `ui-framework-utilities`
- `ui-menu-primitives`
- `ui-form-components`
- `ui-icon-library`
- `ui-image-component`
- `ui-dropdown-toast`
- `ui-tooltip-components`
- `ui-typography-modal-components`
- `ui-primitives-document-utils`

Typical role:

- framework wrappers
- low-level UI building blocks
- reusable icons, typography, dropdowns, scroll/focus helpers

### Diagram / rendering / visualization libraries

- `mermaid-*`
- `diagram-renderer`
- `diagram-renderer-export`
- `diagram-renderer-layout-engine`
- `flowchart-diagram-renderer`
- `c4-diagram`
- `sequence-diagram`
- `sankey-diagram`
- `sankey-diagram-renderer`
- `treemap-diagram-renderer`
- `vega-lite-renderer`
- `roughjs-shape-renderer`
- `svg-pan-zoom-library`

Typical role:

- Mermaid-based diagram parsing and rendering
- chart/graph export
- zoom/pan helpers

### Syntax highlighting / editor language packs

- `prism-code-block-components`
- `prism-syntax-highlighter`
- `code-editor-syntax-modes`
- `codemirror-*`
- `yaml-parser`
- `javascript-syntax-parser`
- `powershell-syntax-parser`
- many `*-syntax-*`, `*-syntax-highlighter`, and `*-language-*` folders

Typical role:

- CodeMirror/Prism grammars
- language tokenizers/parsers
- syntax mode registrations

### Media / player / terminal libraries

- `xgplayer-utils`
- `xgplayer-media-player`
- `video-player-xgplayer`
- `xg-video-player`
- `video-player-engine`
- `xterm-terminal`
- `xterm-fit-addon`

Typical role:

- media playback
- video UI plugins
- terminal rendering and fit addon

### Document / preview / viewer libraries

- `box-preview-box-archive`
- `box-preview-box-code`
- `box-preview-box-image`
- `box-preview-box-sheet`
- `box-preview-pdf-viewer`
- `box-preview-wps-office`
- `box-preview-lark-doc`
- `box-preview-i18n-*`
- `pdf-processing-lib`
- `pdf-scroll-view`
- `react-easy-crop`

Typical role:

- file preview
- PDF/document/image viewers
- i18n bundles for preview SDKs
- crop and editing helpers

### Utility packages

- `zod-validation-library`
- `qr-code-library`
- `styled-components-ui-library`
- `stylis-emotion-css`
- `puppeteer-core-browser`
- `puppeteer-websocket-transport`

Typical role:

- validation
- QR generation
- styling/runtime CSS support
- browser automation transport/runtime pieces

## Likely first-party / product-specific areas

These folders look much more specific to the actual application and are more likely the code worth focusing on first.

### Chat and app flows

- `chat`
- `chat-*`
- `app-*`
- `api-client-services`
- `app-runtime-foundation`
- `app-theme-provider`

### AI and product feature modules

- `ai-*`
- `ai-space-*`
- `ai-search-*`
- `ai-ppt-*`
- `ai-coding-*`

### Async message / skill / interaction pipeline

- `async-*`
- `skill-*`
- `thread-*`

### Canvas, doc, and editor product logic

- `canvas-*`
- `docx-*`
- `document-*`
- `ppt-*`
- `read-*`
- `write-*`

### Product-specific internal branding

- `samantha-*`
- `super-task-*`

## Practical heuristic

When deciding whether a folder is probably unpacked `node_modules` code:

- Treat it as likely third-party if the name sounds like a reusable library, parser, renderer, UI primitive, player, syntax mode, preview SDK, or generic utility.
- Treat it as likely first-party if the name matches a product feature, workflow, or business concept in this app.
- Treat `semi-*`, `ui-*`, `react-*`, `vendor-*`, `mermaid-*`, `box-preview-*`, `xgplayer-*`, `codemirror-*`, and most `*-syntax-*` directories as vendor/library-heavy by default.

## Recommended focus if you are reviewing the project

Start with:

- `chat`
- `chat-*`
- `ai-*`
- `async-*`
- `app-*`
- `canvas-*`
- `docx-*`
- `read-*`
- `write-*`
- `skill-*`

De-prioritize unless needed for dependency tracing:

- `semi-*`
- `ui-*`
- `vendor-*`
- `react-*`
- `mermaid-*`
- `box-preview-*`
- `xgplayer-*`
- `codemirror-*`
- `prism-*`
- `*-syntax-*`

## Important caveat

Because this repository was unpacked from bundles, some folders may be:

- true third-party package code
- internal shared libraries from the original company monorepo
- lightly wrapped vendor code with local modifications

So this document should be used as a triage guide, not as a strict ownership map.
