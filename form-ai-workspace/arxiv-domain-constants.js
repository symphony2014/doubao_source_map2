// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'arxivDomains'
// - Renamed export 'g' to 'arxivBaseUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 804607
         */
module.exports = function (module, exports, require) {
  let i = ["www.arxiv.org", "arxiv.org"];
  let a = ["https://arxiv.org/"];
  require.d(exports, {
    arxivDomains: function () {
      return i;
    },
    arxivBaseUrls: function () {
      return a;
    }
  });
}