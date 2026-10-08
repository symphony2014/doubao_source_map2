// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'getGridLayout'
// - Renamed export 'a' to 'getImageGroupConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 270250
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let l = () => ({
    enableNewImageGroup: chatFgStoreHooks.getSourceValue("enable_new_image_group", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1"
  });
  let a = (e, i) => i ? e <= 3 ? {
    columns: e,
    rows: 1
  } : {
    columns: e === 4 ? 2 : 3,
    rows: 2
  } : {
    columns: 1,
    rows: 1
  };
  require.d(exports, {
    getGridLayout: function () {
      return a;
    },
    getImageGroupConfig: function () {
      return l;
    }
  });
}