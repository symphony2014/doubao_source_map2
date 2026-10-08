// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'generateUuid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 466890
         */
module.exports = function (module, exports, require) {
  function n() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
  }
  require.d(exports, {
    generateUuid: function () {
      return n;
    }
  });
}