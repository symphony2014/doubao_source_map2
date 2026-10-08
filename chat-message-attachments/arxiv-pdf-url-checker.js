// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cZ' to 'isArxivPdfUrl'
// - Renamed export 'yH' to 'isPdfUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 560444
         */
module.exports = function (module, exports, require) {
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  let r = /^https:\/\/(www\.)?arxiv\.org\/pdf\/.+$/i;
  let a = e => {
    let t = arxivUrlNormalizer.normalizeArxivUrl(e);
    return r.test(t);
  };
  let l = e => /^https:\/\/.*\.pdf$/i.test(e);
  let o = e => a(e) || l(e);
  require.d(exports, {
    isArxivPdfUrl: function () {
      return a;
    },
    isPdfUrl: function () {
      return o;
    }
  });
}