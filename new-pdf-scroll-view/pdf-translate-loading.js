// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'PdfTranslateLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 914189
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = () => {
    let e = translationContextProvider.useTranslation();
    let t = reactCoreLibraryReexport.useRef(null);
    let n = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (t.current) {
        let e = new ResizeObserver(e => {
          var n;
          let {
            clientWidth: r
          } = e[0].target;
          if ((n = t.current) !== null && n !== undefined) {
            n.style.setProperty("--translate-loading-width", `${r}px`);
          }
        });
        e.observe(t.current);
        return () => {
          e.disconnect();
        };
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: "wrap-lvgUp2",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        wrapperClassName: l("spin-iwb_xX", "pdf-translate-page-loading")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: n,
        className: "text-wLvA1a",
        children: e("translate_in_progress")
      })]
    });
  };
  require.d(exports, {
    PdfTranslateLoading: function () {
      return c;
    }
  });
}