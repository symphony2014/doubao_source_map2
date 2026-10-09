# Readable-code recovery index

These files are human-readable TypeScript-style reconstructions of the most important **distinct** client behaviors. They are not claimed to be buildable replacements: imports, exact enum values, SDK types, and server schemas were lost during bundle extraction. They are intended to give another coding agent a reliable implementation map.

## Dedupe policy

Files with the same Git blob SHA are represented once. For example, `chat-message-builders.js` has SHA `327e2e3c56e2b3319fd513c842730eb49afd0704` in these extracted paths, so it is recovered only in one file:

- `async-business-input-engine-submit/`
- `async-business-input-tool-button/`
- `async-infra-input-engine-submit/`
- `async-init-business/`
- `chat-input-components/`
- `chat-messaging-app-bundle/`
- `flow-doc_doc-launcher/`
- `inline-next-docx-panel/`
- `ondemand-submit/`
- `semi-ui-component-styles/`
- `utilities-and-features/`
- `writing-skill-chat-input/`

The content renderer is also duplicated byte-for-byte between `chat-message-components/` and `thread-l2-1/`; it is recovered once.

## Recovered files

| Readable reconstruction | Canonical extracted source | Role |
|---|---|---|
| [01-chat-ioc-manager.ts](01-chat-ioc-manager.ts) | `chat/chat-ioc-manager.js` | Scene controller, dependency injection, lazy plugin resources |
| [02-chat-stores.ts](02-chat-stores.ts) | `chat/chat-store-manager.js`, store factories | Lazy store resolution and singleton store factories |
| [03-chat-message-transformer.ts](03-chat-message-transformer.ts) | `chat/chat-message-transformer.js` | Wire message normalization and plugin handoff |
| [04-message-lifecycle-handler.ts](04-message-lifecycle-handler.ts) | `webpack-bundle-runtime-chunks/message-lifecycle-handler.js` | ACK, streaming, suggestion, and final-message routing |
| [05-samantha-chat-protocol.ts](05-samantha-chat-protocol.ts) | `async-infra-message-alice/alice-chat-stream-protocol-plugin.js` | POST + SSE transport, retries, checkpoints, async tasks |
| [06-react-chat-components.tsx](06-react-chat-components.tsx) | input and content-rendering modules | Input shell, attachment hook, and typed content rendering |
| [07-chat-message-builders.ts](07-chat-message-builders.ts) | duplicate `chat-message-builders.js` blob | Text/image/file payload construction |

## Recovery constraints

- Never collapse `local_message_id` into remote `message_id`.
- Preserve single-threaded processing of SSE chunks per request.
- Keep attachment `localKey` stable across preprocess, upload state, retry, and message submission.
- Keep URL validation/sanitization at the rendering and navigation edge.
- Treat plugin transforms as a first-class extension point, not an afterthought.
