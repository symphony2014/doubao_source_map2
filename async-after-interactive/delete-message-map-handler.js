// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'deleteMessageMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: app-chat-l0.9f4aaf6a.js
         * chunkId: 62317
         * moduleId: 278067
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var deleteMessageMaps = require("delete-message-maps") /*id: 574149*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function o(e) {
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(t => deleteMessageMaps.deleteMessageMaps(t, e)));
  }
  require.d(exports, {
    deleteMessageMap: function () {
      return o;
    }
  });
}