// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'defineDisableForm'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 563439
         */
module.exports = function (module, exports, require) {
  function r(t) {
    return Object.defineProperty(t, "__DISABLEDABLE_FORM_COMP", {
      value: true,
      configurable: false,
      writable: false
    });
  }
  require.d(exports, {
    defineDisableForm: function () {
      return r;
    }
  });
}