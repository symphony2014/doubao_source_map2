// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DL' to 'debugInfo'
// - Renamed export 'Is' to 'fastPdf'
// - Renamed export 'LH' to 'boxPreviewTrigger'
// - Renamed export 'pg' to 'boxPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41268.462a5cda.js
         * chunkId: 41268
         * moduleId: 434952
         */
module.exports = function (module, exports, require) {
  let r = "BOX_PREVIEW";
  let i = "BOX_PREVIEW_TRIGGER";
  let o = "FAST_PDF";
  let l = "DEBUG_INFO";
  require.d(exports, {
    debugInfo: function () {
      return l;
    },
    fastPdf: function () {
      return o;
    },
    boxPreviewTrigger: function () {
      return i;
    },
    boxPreview: function () {
      return r;
    }
  });
}