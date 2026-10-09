# Runtime, IoC, and stores

## Evidence

Primary recovered modules: `chat/chat-ioc-manager.js`, `chat/chat-store-manager.js`, `chat/chat-feed-store-factory.js`, and `chat/chat-message-store-factory.js`.

## Class diagram

```mermaid
classDiagram
  class ChatIocManager {
    <<recovered module singleton>>
    +setActiveScene(scene, config)
    +initSceneCtrl(scene, config)
    +getResourceCtrl(scene) ResourceController
    +getGlobalStore() ResourceController
  }
  class ResourceController {
    <<recovered class>>
    +resourceStore: StoreHook
    +storeContainer: BindingManager
    +serviceContainer: BindingManager
    +pluginMatcherContainer: BindingManager
    +configContainer: BindingManager
    +pluginContainerMap: object
  }
  class BindingManager {
    +bind(key, instance)
    +unbind(key)
    +isBound(key) boolean
    +get(key) object
  }
  class ChatStoreManager {
    <<recovered module facade>>
    +getStore(key) Store
    +getAsyncStore(key) Promise~Store~
    +getStoreState(key) State
    +useStore(key) Store
    +useStoreSelector(key, selector, equality)
  }
  class FeedStore {
    <<logical store>>
    +conversationMap
    +localConversationMap
    +lastMessageIndexMap
    +actionBarTemplateMap
    +currentActiveConversationId
  }
  class MessageStore {
    <<logical store>>
    +draftLocalMessageMap
    +draftMessageMap
    +getState()
    +setState()
  }
  ChatIocManager --> ResourceController : global and per scene
  ResourceController *-- BindingManager
  ResourceController --> FeedStore : resolves
  ResourceController --> MessageStore : resolves
  ChatStoreManager --> ChatIocManager
  ChatStoreManager --> BindingManager : bind / resolve
```

## Detailed behavior

`ResourceController` separates lazy store resources, instantiated stores, services, plugin matchers, and configuration into distinct registries. Preserve that separation: a store can be loaded later while a service is immediately available.

`ChatStoreManager.getStore` rejects an async store loader; callers must use `getAsyncStore`. Both instantiate the resolved factory once and cache it in `storeContainer`. This is a real invariant, not a convenience API.

The default active scene is `PC_MAIN_BOT_WEB`. Core registered store keys include `chatMessageStore`, `samanthaChatProtocolStore`, `chatInputStore`, `attachmentsStore`, `attachmentUploadStore`, `refContentStore`, and `skillStore`.
