// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'shouldShowUpgrade'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 279230
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = () => chatFgStoreHooks.getSourceValue("show_upgrade", {
    defaultValue: "0",
    source: chatStorageKeys.chatStorageKeys.serverAB
  }) === "1";
  require.d(exports, {
    shouldShowUpgrade: function () {
      return a;
    }
  });
}