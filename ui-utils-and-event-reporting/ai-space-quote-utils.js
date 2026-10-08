// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'formatQuoteInfo'
// - Renamed export 'V' to 'isImageBlob'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 577173
         */
module.exports = function (module, exports, require) {
  let n = e => {
    var t;
    return !!e && e instanceof Blob && ((t = e.type) === null || t === undefined ? undefined : t.startsWith("image"));
  };
  let r = e => ({
    is_quote: +!!e,
    quote_type: e ? e.type === "attachment" ? "file" : "url" : undefined,
    collection_id: (e == null ? undefined : e.type) === "attachment" ? e == null ? undefined : e.fileKey : (e == null ? undefined : e.type) === "link" ? e == null ? undefined : e.link : undefined
  });
  require.d(exports, {
    formatQuoteInfo: function () {
      return r;
    },
    isImageBlob: function () {
      return n;
    }
  });
}