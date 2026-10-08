// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'returnArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 39392
         */
module.exports = function (module, exports, require) {
  function r(e) {
    if (Array.isArray(e)) {
      return e;
    }
  }
  require.d(exports, {
    returnArray: function () {
      return r;
    }
  });
}