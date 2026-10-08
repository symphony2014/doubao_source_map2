// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'removeCreationParam'
// - Renamed export 'Z' to 'validateCreationFlow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 287485
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let l = () => {
    let e = new URL(window.location.href);
    e.searchParams.delete("from_creation");
    window.history.replaceState({}, "", e.toString());
  };
  let a = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    if (!new URLSearchParams(window.location.search).get("from_creation")) {
      return false;
    }
    let n = chatMessageStatusCheck.isMessageFinished(e);
    let l = conversationMessageUtils_1.getValidMessageCount(chatMessageStoreFactory.createMessageStore.getState(), (e == null ? undefined : e.conversation_id) || "");
    if (Number(e == null ? undefined : e.index) >= l) {
      let e = new URL(window.location.href);
      ["key", "identifier", "status", "meta_list"].forEach(t => e.searchParams.delete(t));
      if (n || t) {
        e.searchParams.delete("from_creation");
      } else {
        e.searchParams.set("from_creation", "true");
      }
      window.history.replaceState({}, "", e.toString());
      return true;
    }
    return false;
  };
  require.d(exports, {
    removeCreationParam: function () {
      return l;
    },
    validateCreationFlow: function () {
      return a;
    }
  });
}