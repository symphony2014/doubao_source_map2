// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rh' to 'aiPptPerfKey'
// - Renamed export 'lp' to 'aiPptMemKey'
// - Renamed export 'w8' to 'aiPptAppEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 533090
         */
module.exports = function (module, exports, require) {
  let r = "ai_ppt_perf";
  let n = "ai_ppt_mem";
  var a = {
    SandBoxReady: "sandbox-ready",
    AppReady: "app-ready",
    AppReady30S: "app-ready-30s",
    DownloadProduct: "download-product",
    DoubaoSlideApp: "doubao-slide-app",
    SlidesAppRenderComplete: "doubao-slides-app-render-complete"
  };
  require.d(exports, {
    aiPptPerfKey: function () {
      return r;
    },
    aiPptMemKey: function () {
      return n;
    },
    aiPptAppEvents: function () {
      return a;
    }
  });
}