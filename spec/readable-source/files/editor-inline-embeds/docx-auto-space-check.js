// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'checkDocxAutoSpace'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 47206
         */
module.exports = function (module, exports, require) {
  function r() {
    return window.clientFeatures?.["ccm.docx.auto_space_enabled"] || false;
  }
  require.d(exports, {
    checkDocxAutoSpace: function () {
      return r;
    }
  });
}