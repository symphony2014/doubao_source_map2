// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isHtmlElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 287357
         */
module.exports = function (module, exports, require) {
  function i(e) {
    try {
      return e instanceof HTMLElement;
    } catch (t) {
      return typeof e == "object" && e.nodeType === 1 && typeof e.style == "object" && typeof e.ownerDocument == "object";
    }
  }
  require.d(exports, {
    isHtmlElement: function () {
      return i;
    }
  });
}