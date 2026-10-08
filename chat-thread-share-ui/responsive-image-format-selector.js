// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getFormatSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 205684
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return function (t = {}) {
      var n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth];
    };
  }
  require.d(exports, {
    getFormatSelector: function () {
      return i;
    }
  });
}