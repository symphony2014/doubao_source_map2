# Cross-cutting services and boundaries

## Evidence

Recovered references in the SSE plugin and lifecycle handler include `flow-api-config-manager`, `sse-client-factory`, `security-verify-sdk-loader`, logger services, event reporters, and the session lifecycle manager.

## Class diagram

```mermaid
classDiagram
  class FlowApiConfigManager {
    +getFlowApiOptions()
  }
  class SseClientFactory {
    +createSseClient(url, options) SseClient
  }
  class SecurityVerifier {
    +getFingerprint() Promise~string~
  }
  class Logger {
    +console.info(context)
    +console.warning(context)
    +persist.info(message)
    +persist.error(error)
  }
  class SessionLifecycleManager {
    +getSessionIdBySentMessageId(conversationId, messageId)
    +moveAllSessionLifeCycle(fromConversationId, toConversationId)
    +copySessionIdWithSentMessageId(...)
  }
  class LifecycleErrorUtils {
    +getErrorType(error)
  }
  SseClientFactory --> FlowApiConfigManager : headers and params
  SseClientFactory --> SecurityVerifier : fingerprint
  SessionLifecycleManager --> LifecycleErrorUtils
  Logger --> LifecycleErrorUtils
```

## Detailed behavior

The completion client reads common headers/parameters from the API config manager, adds a browser fingerprint, uses same-origin credentials, validates the response media type, and preserves log/trace IDs for error reporting.

Errors have two destinations: the message/session lifecycle must reach a terminal state, and observability receives context. A generic UI toast is insufficient because retries, rendering, and analytics depend on the message-store error update.

This frontend proves fingerprinting and URL sanitization use in message construction. It does not prove server authorization, storage encryption, scanning, or model-side safety enforcement.
