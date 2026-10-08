// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'removeSuggestion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 624562
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function i(e) {
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(t => {
      if (t.suggestMessageMap[e]) {
        delete t.suggestMessageMap[e];
      }
    }));
  }
  require.d(exports, {
    removeSuggestion: function () {
      return i;
    }
  });
}