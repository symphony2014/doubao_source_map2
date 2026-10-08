// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getIdbStoreManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 297530
         */
module.exports = function (module, exports, require) {
  var indexedDbStorageUtils = require("indexed-db-storage-utils") /*id: 408621*/;
  let i = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    return new indexedDbStorageUtils.IdbStoreManager({
      storeName: t.join("_")
    });
  };
  require.d(exports, {
    getIdbStoreManager: function () {
      return i;
    }
  });
}