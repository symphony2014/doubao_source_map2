// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'uG' to 'slidesPath'
// - Renamed export 'yf' to 'slidesBaseUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 857641
         */
module.exports = function (module, exports, require) {
  let r = "/partner/ccm-slides-v3/";
  let n = `${r}`;
  require.d(exports, {
    slidesPath: function () {
      return n;
    },
    slidesBaseUrl: function () {
      return r;
    }
  });
}