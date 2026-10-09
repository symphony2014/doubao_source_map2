# Doubao/Samantha frontend architecture

This is an index. The recovered design is split by responsibility so an agent can investigate one implementation area at a time. Concrete exports are marked **recovered**; types reconstructed from object shapes are **logical**.

1. [01-runtime-ioc-and-stores.md](01-runtime-ioc-and-stores.md) — scenes, lazy resources, DI, and state.
2. [02-chat-domain-and-lifecycle.md](02-chat-domain-and-lifecycle.md) — conversations, messages, normalization, and draft promotion.
3. [03-input-and-attachments.md](03-input-and-attachments.md) — input payloads, files, upload state.
4. [04-sse-protocol-and-async-tasks.md](04-sse-protocol-and-async-tasks.md) — SSE completion, retries, and resume.
5. [05-rendering-and-artifacts.md](05-rendering-and-artifacts.md) — content blocks, thinking, artifacts, and React rendering.
6. [06-plugin-and-skill-platform.md](06-plugin-and-skill-platform.md) — matchers, lazy plugins, and skill families.
7. [07-cross-cutting-services.md](07-cross-cutting-services.md) — configuration, observability, error, and security boundaries.
8. [08-react-component-design.md](08-react-component-design.md) — component hierarchy, state ownership, props, and rendering decisions.
9. [09-plugin-catalog-and-activation.md](09-plugin-catalog-and-activation.md) — complete product plugin inventory and activation path.
10. [10-plugin-hooks-and-extension-points.md](10-plugin-hooks-and-extension-points.md) — matcher, loader, lifecycle, protocol, input, URL, and renderer contracts.
11. [11-plugin-source-recovery.md](11-plugin-source-recovery.md) — how to locate exact recovered plugin implementations.

For code-oriented reconstruction rather than diagrams, start with [readable-code/README.md](readable-code/README.md).

For the repository-wide deduplicated source mirror, see [readable-source/README.md](readable-source/README.md) after the recovery job completes.
