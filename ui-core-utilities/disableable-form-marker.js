// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'disableableMarker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 33990
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return Object.defineProperty(e, "__DISABLEDABLE_FORM_COMP", {
      value: true,
      configurable: false,
      writable: false
    });
  }
  require.d(exports, {
    disableableMarker: function () {
      return i;
    }
  });
}