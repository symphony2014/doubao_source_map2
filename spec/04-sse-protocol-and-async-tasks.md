# SSE protocol and asynchronous tasks

## Evidence

Primary recovered module: `async-infra-message-alice/alice-chat-stream-protocol-plugin.js`.

## Class diagram

```mermaid
classDiagram
  class ChatProtocolPlugin {
    <<logical interface>>
    +sendMessage(messages, options)
    +cancelTask(localMessageId)
    +resumeTask(tasks)
  }
  class SamanthaChatProtocolPlugin {
    <<recovered class>>
    +from: ChatSourceType
    +eventEmitter: EventEmitter
    +_fetchEntriesMap: Map
    +_asyncTaskManager: AsyncTaskManager
    +sendMessage(messages, options)
    +cancelTask(localMessageId)
    +resumeTask(tasks)
    +createAsyncTask(message, taskId)
    +drop()
  }
  class StreamEntry {
    <<logical recovered shape>>
    +instance: SseClient
    +sentEvent: object
    +lastEventId: string
    +retryCounter: RetryCounter
    +pqueue: ConcurrencyQueue
    +pipeManager: MessagePipeManager
    +logId: string
    +traceId: string
  }
  class MessagePipeManager {
    +writeConversationId(id)
    +writeSentMessageId(id)
    +writeSentSectionId(id)
    +getMessagePipeByStreamId(streamId)
    +getAllMessagePipes()
  }
  class RetryCounter {
    +add()
    +matchMaxRetryAttempts() boolean
    +updateConnectingTimeoutTimer(callback)
    +clearConnectionHeartbeatTimeoutTimer()
  }
  ChatProtocolPlugin <|.. SamanthaChatProtocolPlugin
  SamanthaChatProtocolPlugin *-- StreamEntry
  StreamEntry *-- MessagePipeManager
  StreamEntry *-- RetryCounter
```

## Confirmed contract and flow

The plugin sends `POST /samantha/chat/completion` with same-origin credentials and expects `text/event-stream`. It keeps the last received event ID, validates the SSE response type, extracts `x-tt-logid` and `x-tt-trace-id`, and uses a one-concurrency queue to preserve chunk order.

```mermaid
stateDiagram-v2
  [*] --> Send
  Send --> AwaitAck
  AwaitAck --> Streaming: ACK
  Streaming --> Streaming: CMPL / VERBOSE
  Streaming --> AsyncTask: async_task
  Streaming --> Finished: FIN
  AwaitAck --> Failed: ERR / gateway error
  Streaming --> Failed: ERR / heartbeat timeout
  Failed --> Send: retry within budget
  Finished --> [*]
```

Visible event types are `ACK`, `CMPL`, `FIN`, `VERBOSE`, `ERR`, and `VERSION`. Preserve ordered processing, last-event checkpointing, and the no-retry cases for cancellation, diff-stage requests, and exhausted retry budget.
