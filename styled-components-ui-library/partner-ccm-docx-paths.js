// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CY' to 'getApiPagePath'
// - Renamed export 'V4' to 'getDocxPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 383740
         */
module.exports = function (module, exports, require) {
  let i = "/partner/ccm-docx/";
  let a = `${i}docx/`;
  let r = `${i}api-page/`;
  require.d(exports, {
    getApiPagePath: function () {
      return r;
    },
    getDocxPath: function () {
      return a;
    }
  });
}