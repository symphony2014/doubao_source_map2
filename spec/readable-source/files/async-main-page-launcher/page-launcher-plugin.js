// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Renamed variable 'a' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'x9' to 'isCocoPlatform' (module 104471)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-main-page-launcher.5470b8e7.js
         * chunkId: 91414
         * moduleId: 140327
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function s(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class u {
    constructor() {
      s(this, "onEnter", (e, t) => {
        let r = chatFeedStoreFactory.useFeedStore.subscribe(e => {
          let t = e.conversationLinks.find(e => chatConversationCheckers.isCocoPlatform(e.conversationType));
          if (t) {
            chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
              if (e != null) {
                e.navigateToChatDetailPage({
                  conversationId: t.conversationId
                });
              }
            });
            if (r != null) {
              r();
            }
          }
        });
      });
      s(this, "onExit", () => {
        chatStoreManager.getStore("chatViewCoreStore").setState({
          currentChatViewConfig: undefined,
          currentLocalConversationId: undefined
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PageLauncherPlugin: function () {
      return u;
    }
  });
}