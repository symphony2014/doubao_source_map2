// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'validateOcrPages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 436912
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let l = e => {
    let {
      url: t,
      pageChunks: n,
      totalPage: l
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t && n && l && n.length !== l && (!(l > 300) || n.length !== 300)) {
        loggerServiceCore.defaultLogger.persist.error({
          error: Error("ocr_missing_pages"),
          meta: {
            url: t || "missing_url",
            totalPage: l,
            pageChunksLength: n.length
          }
        });
      }
    }, [n, l]);
  };
  require.d(exports, {
    validateOcrPages: function () {
      return l;
    }
  });
}