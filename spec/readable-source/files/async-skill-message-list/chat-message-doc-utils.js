// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useChatDocState'
// - Renamed export 'W' to 'findLastReplyMsg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 775705
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var asyncSkillMessageListMatcher = require("async-skill-message-list-matcher") /*id: 533639*/;
  let l = (e, t) => moduleReExportWrapper.wrappedModule(t, t => {
    if (t.type === "single") {
      let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, t.data);
      return !!Number(n == null ? undefined : n.reply_id);
    }
    if (t.type === "block") {
      var n;
      if ((n = t.data) === null || n === undefined) {
        return undefined;
      } else {
        return n.some(t => {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, t);
          return !!Number(n == null ? undefined : n.reply_id);
        });
      }
    }
    return false;
  });
  let c = e => {
    let {
      conversationId: t
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState();
    let l = chatMessageStoreFactory.createMessageStore(e => {
      let r = e.messageLinkMap[t];
      if (!r) {
        return {
          enableToGenerateDoc: false,
          message: null
        };
      }
      let i = r.find(e => e.messageId === n);
      if (!i) {
        return {
          enableToGenerateDoc: false,
          message: null
        };
      }
      let o = conversationMessageUtils_1.getMessageFromLink(e, t, i);
      return {
        enableToGenerateDoc: asyncSkillMessageListMatcher.isLastSectionMessage(t, o),
        message: o
      };
    });
    return {
      genre: reactCoreLibraryReexport.useMemo(() => {
        var t;
        return ((t = l.message) === null || t === undefined ? undefined : t.content_obj?.genre) ?? "paper";
      }, [l.message]),
      pptMessageId: n,
      setPptMessageId: i,
      enableToGenerateDoc: l == null ? undefined : l.enableToGenerateDoc
    };
  };
  require.d(exports, {
    useChatDocState: function () {
      return c;
    },
    findLastReplyMsg: function () {
      return l;
    }
  });
}