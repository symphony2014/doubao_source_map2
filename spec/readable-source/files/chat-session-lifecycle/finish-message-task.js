// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'finishMessageTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 989964
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function t(e) {
    var s;
    if (e) {
      if ((s = chatMessageStoreFactory.createMessageStore.getState().sendMessagePromiseTasks[e]) !== null && s !== undefined) {
        s.finish();
      }
    }
  }
  require.d(exports, {
    finishMessageTask: function () {
      return t;
    }
  });
}