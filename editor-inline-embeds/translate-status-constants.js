// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'captionTranslateKey'
// - Renamed export 'T' to 'translateStatusKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 349844
         */
module.exports = function (module, exports, require) {
  let r = "clientside-translate-status";
  let o = "clientside-caption-translate-status";
  require.d(exports, {
    captionTranslateKey: function () {
      return o;
    },
    translateStatusKey: function () {
      return r;
    }
  });
}