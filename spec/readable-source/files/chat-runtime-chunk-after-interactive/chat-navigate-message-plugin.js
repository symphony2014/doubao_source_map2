// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'r' to 'chatStatusConstants_1'
// - Resolved require(558074) to 'chat-status-constants_1'
// - Renamed variable 'o' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 's' to 'validateConversationId'
// - Resolved require(913490) to 'validate-conversation-id'
// - Renamed variable 'l' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'u' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'd' to 'navigatePageLifecycleSymbol'
// - Resolved require(240007) to 'navigate-page-lifecycle-symbol'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'G' to 'isValidConversation' (module 913490)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'dg' to 'getLocalConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'ns' to 'ChatStatus' (module 558074)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'B' to 'pageLifecycleSymbol' (module 240007)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 756768
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var validateConversationId = require("validate-conversation-id") /*id: 913490*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var navigatePageLifecycleSymbol = require("navigate-page-lifecycle-symbol") /*id: 240007*/;
  class p {
    beforeMessageSending(e, t) {
      let {
        local_conversation_id: n,
        ext: i = {}
      } = t;
      if (typeof n == "string" && i.autoNavigate !== "0") {
        chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
          if (e != null) {
            e.navigateToChatDetailPage({
              conversationId: n
            });
          }
        });
      }
      return t;
    }
    async onMessageSendingEnd(e, t) {
      let {
        local_conversation_id: n = "",
        conversation_id: d = ""
      } = t;
      let {
        currentChatViewConfig: p
      } = chatStoreManager.getStoreState("chatViewCoreStore");
      if (!validateConversationId.isValidConversation(t)) {
        return t;
      }
      let _ = (p == null ? undefined : p.chatType) === chatConversationTypes.ConversationTypes.Bot || (p == null ? undefined : p.chatType) === chatConversationTypes.ConversationTypes.ProfileBot;
      let v = chatConversationSelectors_2.getLocalConversation(chatFeedStoreFactory.useFeedStore.getState(), n);
      if (!_ && n) {
        if (n === (p == null ? undefined : p.chatId) && (v == null ? undefined : v.local?.createStatus) === chatStatusConstants_1.ChatStatus.Done || location.href.includes(n)) {
          chatStoreManager.getStore("chatViewCoreStore").setState({
            needSkipChatKey: n
          });
          chatStoreManager.getStore("chatViewCoreStore").setState({
            currentChatViewConfig: {
              ...p,
              chatId: d,
              chatKey: p == null ? undefined : p.chatId,
              chatType: chatConversationTypes.ConversationTypes.Conversation
            }
          });
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatDetailPage({
            conversationId: d,
            replace: true
          }));
        }
      }
      let m = await chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService");
      if (m != null) {
        m.moveRefContents(n, d);
      }
      let f = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[n];
      let g = chatStoreManager.getStoreState("chatInputStore").activeSkillFromMap[n];
      let y = (g == null ? undefined : g.skillType) === f ? g == null ? undefined : g.skillFrom : undefined;
      if (f) {
        chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(d, f, y ?? chatStatusActionTypes.chatActionTypes.AfterSkill);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = navigatePageLifecycleSymbol.pageLifecycleSymbol;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    NavigatePageMessageLifeCyclePlugin: function () {
      return p;
    }
  });
}