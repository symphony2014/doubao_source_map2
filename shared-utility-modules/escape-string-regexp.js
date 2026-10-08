// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'escapeRegExp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 805727
         */
module.exports = function (module, exports, require) {
  function r(e) {
    if (typeof e != "string") {
      throw TypeError("Expected a string");
    }
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  require.d(exports, {
    escapeRegExp: function () {
      return r;
    }
  });
}