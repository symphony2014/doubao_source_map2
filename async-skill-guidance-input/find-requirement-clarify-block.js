// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DK' to 'findRequirementClarifyBlock'
// - Renamed export 'WR' to 'isLastSectionMessage'
// - Renamed export 'oH' to 'findRequirementClarifyBlockInConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 458064
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function s(e) {
    var t;
    if (e == null) {
      return undefined;
    } else if ((t = e.content_blocks) === null || t === undefined) {
      return undefined;
    } else {
      return t.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY);
    }
  }
  function u(e) {
    return s(e) !== undefined;
  }
  let d = (e, t) => {
    for (let n of e) {
      if (n.type === "block") {
        for (let e of n.data) {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, e);
          if (u(n)) {
            return n;
          }
        }
      } else if (n.type === "single") {
        let e = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, n.data);
        if (u(e)) {
          return e;
        }
      }
    }
    return null;
  };
  let c = (e, t) => {
    if (!t || !messageContentTypeAndStatusChecker.$bh(t)) {
      return false;
    }
    let a = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e]?.last_section_id ?? "";
    return !a || t.section_id === a && !(t == null ? undefined : t.ext?.samantha_code);
  };
  require.d(exports, {
    findRequirementClarifyBlock: function () {
      return s;
    },
    isLastSectionMessage: function () {
      return c;
    },
    findRequirementClarifyBlockInConversation: function () {
      return d;
    }
  });
}