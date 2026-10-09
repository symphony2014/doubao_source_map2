// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'setMusicAutoPlay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 90452
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function r(e) {
    chatMessageStoreFactory.createMessageStore.setState(() => ({
      musicAutoPlay: e
    }));
  }
  require.d(exports, {
    setMusicAutoPlay: function () {
      return r;
    }
  });
}