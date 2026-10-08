// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useChatIdChangeHandler'
// - Renamed export 'k' to 'useSkillTypeChangeHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 378957
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var chatInputSkillSelectors = require("chat-input-skill-selectors") /*id: 627774*/;
  function u(e) {
    let t = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let n = reactCoreLibraryReexport.useRef("");
    reactCoreLibraryReexport.useEffect(() => {
      try {
        if (!t) {
          return;
        }
        let {
          localConversationMap: o,
          conversationMap: s
        } = chatFeedStoreFactory.useFeedStore.getState();
        let u = o[n.current || ""] || s[n.current || ""];
        if (chatFeedConversationUtil.isLocalConversation(n.current) && (u == null ? undefined : u.local?.createStatus) === chatStatusConstants_1.ChatStatus.Done) {
          n.current = t;
          return;
        }
        e(n.current || "", t);
        n.current = t;
      } catch {}
    }, [t]);
  }
  function c(e) {
    let t = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let n = chatInputSkillSelectors.useActiveSkillType(t || "");
    let r = reactCoreLibraryReexport.useRef(undefined);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && (r.current || n)) {
        if (r.current !== n) {
          e(r.current, n);
        }
        r.current = n;
      }
    }, [n]);
  }
  require.d(exports, {
    useChatIdChangeHandler: function () {
      return u;
    },
    useSkillTypeChangeHandler: function () {
      return c;
    }
  });
}