// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 416304
         */
module.exports = function (module, exports, require) {
  function n(t) {
    if (t && typeof Symbol != "undefined" && t.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof t;
    }
  }
  require.d(exports, {
    getType: function () {
      return n;
    }
  });
}