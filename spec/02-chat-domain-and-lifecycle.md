# Chat domain and message lifecycle

## Evidence

Primary recovered modules: `chat/chat-message-transformer.js`, `webpack-bundle-runtime-chunks/message-lifecycle-handler.js`, and `chat/chat-conversation-update-handler.js`.

## Class diagram

```mermaid
classDiagram
  class Conversation {
    <<logical>>
    +conversation_id: string
    +local_conversation_id: string
    +conversation_type: string
    +name: string
    +last_section_id: string
    +latest_artifact: object
  }
  class ChatMessage {
    <<logical normalized message>>
    +message_id: string
    +local_message_id: string
    +reply_id: string
    +conversation_id: string
    +section_id: string
    +content_obj: ContentObject
    +content_blocks_v2: ContentBlock[]
    +ext: object
    +local_info: LocalInfo
    +is_finish: boolean
    +final_status: FinalStatus
  }
  class DraftMessage {
    +local_message_id: string
    +reply_id: string
    +messageKey: string
    +messageStreamStage: MessageState
  }
  class ContentObject {
    +text: string
    +think: string
    +suggest: string[]
  }
  class ContentBlock {
    +id: string
    +parent_id: string
    +block_type: string
    +content_obj: object
    +meta_infos: MetaInfo[]
    +is_finish: boolean
  }
  class MessageTransformer {
    <<recovered module>>
    +transformMessage(serverMessage, localInfo) Promise~ChatMessage~
  }
  class MessageLifecycleHandler {
    <<recovered module>>
    +handleMessageUpdate(message)
    +createDraftMessage(...)
    +getDraftMessage(...)
    +getLocalMessage(...)
  }
  Conversation "1" o-- "*" ChatMessage
  ChatMessage --> DraftMessage : promotes / updates
  ChatMessage *-- ContentObject
  ChatMessage *-- "*" ContentBlock
  MessageTransformer ..> ChatMessage
  MessageLifecycleHandler ..> ChatMessage
```

## `transformMessage` detail

It parses wire `content`, derives conversation and bot identity, converts `ext` into completion/regeneration/suggestion/security fields, derives a flat block collection and a parent-child block tree, parses async-task and thinking data, then delegates to a matching skill-specific transformer when one exists. The default result removes bulky wire-only content fields before storage.

## `handleMessageUpdate` detail

The router recognizes ACK/send updates, loading chunks, suggestion messages, and final received messages. It compares chunk sequence values before merging, so an old stream event cannot overwrite newer content. ACK promotes a local draft to a server-correlated message and creates the reply draft that receives the stream.

**Recovery rule:** keep `local_message_id` and `message_id` distinct. The first powers optimistic UI, retries, and stream correlation; the second is assigned by the server.
