// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'usePdfLinkExtract'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 873141
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pdfTextBlockLinkExtractor = require("pdf-text-block-link-extractor") /*id: 514874*/;
  let l = e => {
    let {
      pageChunks: t,
      ocrDataLoading: n
    } = e;
    return reactCoreLibraryReexport.useMemo(() => ({
      data: t && pdfTextBlockLinkExtractor.extractTextBlockLinks(t),
      loading: n
    }), [t, n]);
  };
  require.d(exports, {
    usePdfLinkExtract: function () {
      return l;
    }
  });
}