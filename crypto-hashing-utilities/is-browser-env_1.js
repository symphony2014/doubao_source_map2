// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 902231
         */
module.exports = function (module, exports, require) {
  function r() {
    return typeof window != "undefined" && !!window.document && !!window.document.createElement;
  }
  require.d(exports, {
    isBrowser: function () {
      return r;
    }
  });
}