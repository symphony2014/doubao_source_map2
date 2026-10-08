// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LS' to 'storageSetItem'
// - Renamed export 'rV' to 'storageGetItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 634020
         */
module.exports = function (module, exports, require) {
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  function r() {
    return storageWrapperWithFallback.LocalStorageWrapper;
  }
  async function o(e, t) {
    await storageWrapperWithFallback.LocalStorageWrapper.setItem(e, t);
  }
  async function a(e) {
    return await storageWrapperWithFallback.LocalStorageWrapper.getItem(e);
  }
  require.d(exports, {
    storageSetItem: function () {
      return o;
    },
    storageGetItem: function () {
      return a;
    }
  });
}