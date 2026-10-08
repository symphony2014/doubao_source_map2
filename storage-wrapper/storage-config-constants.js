// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E$' to 'storageTimeout'
// - Renamed export 'Jr' to 'storageDevKey'
// - Renamed export 'zy' to 'storageIndexedDbKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 837502
         */
module.exports = function (module, exports, require) {
  let n = "ccm_storage_dev";
  let o = 1000;
  let i = "lib-storage-expire-indexedDB";
  require.d(exports, {
    storageTimeout: function () {
      return o;
    },
    storageDevKey: function () {
      return n;
    },
    storageIndexedDbKey: function () {
      return i;
    }
  });
}