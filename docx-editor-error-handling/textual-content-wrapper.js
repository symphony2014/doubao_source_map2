// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'TextualContentWrap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 858631
         */
module.exports = function (module, exports, require) {
  var latexMathDetector = require("latex-math-detector") /*id: 803017*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => e.zoneState.getEntities([["equation"]]).some(e => latexMathDetector.isLatexMathEnv(e.attributes.equation));
  function c(e) {
    let {
      model: i
    } = e;
    if (syncedTranslationBlockUtils.hasTranslateSnapshot(i)) {
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...e
      });
    } else {
      return e.children;
    }
  }
  function d(e) {
    let {
      model: i
    } = e;
    let {
      align: r
    } = i.record.snapshot;
    let [n, l] = reactCoreLibraryReexport.useState(() => a(i));
    let c = reactCoreLibraryReexport.useCallback(() => l(a(i)), [i]);
    reactCoreLibraryReexport.useEffect(() => {
      i.struct.addDataListener(c);
      return () => {
        i.struct.removeDataListener(c);
      };
    }, [i, c]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `textual-content-outer-wrapper textual-content-outer-align-${r} ${n ? "is-full" : ""}`,
      contentEditable: false,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "textual-content-inner-wrapper",
        children: e.children
      })
    });
  }
  require.d(exports, {
    TextualContentWrap: function () {
      return c;
    }
  });
}