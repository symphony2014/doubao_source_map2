// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'go' to 'dispatchGlobalError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 439316
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