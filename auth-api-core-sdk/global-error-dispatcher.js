// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'go' to 'dispatchGlobalError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 663923
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let t = new CustomEvent("ud-biz:global-error", {
      detail: e
    });
    window.dispatchEvent(t);
  }
  require.d(exports, {
    dispatchGlobalError: function () {
      return n;
    }
  });
}