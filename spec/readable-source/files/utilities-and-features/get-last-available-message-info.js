// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'getLastAvailableMessageInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 368778
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let s = e => {
    let t = chatMessageStoreFactory.createMessageStore.getState();
    let {
      messageLinkList: r
    } = chatMessageStoreFactory.createMessageStore(t => {
      return {
        messageLinkList: t.messageLinkMap[e] ?? []
      };
    });
    let s = reactCoreLibraryReexport.useMemo(() => {
      for (let n = r.length - 1; n >= 0; n--) {
        let a = r[n];
        let s = conversationMessageUtils_1.getMessageFromLink(t, e, a);
        if (!s) {
          continue;
        }
        let u = r[n - 1];
        let c = conversationMessageUtils_1.getMessageFromLink(t, e, u);
        if (messageContentTypeAndStatusChecker.KQr(s) && messageContentTypeAndStatusChecker.KQr(c)) {
          if (messageContentTypeAndStatusChecker.v08(s)) {
            return c;
          } else {
            return s;
          }
        }
        if (chatMessageUtils_2.isVisibleStatus(s)) {
          return s;
        }
      }
    }, [r]);
    return {
      lastAvailableMessage: s,
      isDeepResearch: messageContentTypeAndStatusChecker.nmA(s),
      isDeepResearchClarify: messageContentTypeAndStatusChecker.ey$(s) && !messageContentTypeAndStatusChecker.vlk(s),
      isDeepResearchRestatement: messageContentTypeAndStatusChecker.Gg$(s),
      isBroken: messageContentTypeAndStatusChecker.vlk(s)
    };
  };
  require.d(exports, {
    getLastAvailableMessageInfo: function () {
      return s;
    }
  });
}