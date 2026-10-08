// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'normalizeArxivUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 461857
         */
module.exports = function (module, exports, require) {
  let i = /\.pdf$/i;
  let r = e => {
    if (!(e = e.trim()).startsWith("https://arxiv.org/")) {
      return e;
    }
    let t = e;
    if (t.startsWith("https://arxiv.org/abs")) {
      t = t.replace("https://arxiv.org/abs", "https://arxiv.org/pdf");
    }
    if (i.test(t)) {
      t = t.replace(i, "");
    }
    return t;
  };
  require.d(exports, {
    normalizeArxivUrl: function () {
      return r;
    }
  });
}