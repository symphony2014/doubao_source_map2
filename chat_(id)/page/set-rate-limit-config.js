// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'setRateLimitConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 730897
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function r(e) {
    chatMessageStoreFactory.createMessageStore.setState(() => ({
      rateLimitConfig: e
    }));
  }
  require.d(exports, {
    setRateLimitConfig: function () {
      return r;
    }
  });
}