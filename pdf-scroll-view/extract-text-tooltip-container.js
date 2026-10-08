// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'ExtractTextTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 17207
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiButtonWrapperComponentExport = require("semi-button-wrapper-component-export") /*id: 659091*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      extractedText: n,
      onClickCopyButton: r
    } = e;
    let o = translationContextProvider.useTranslation();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: "extract-text-tooltip-container-RcjV5s",
      onClick: e => {
        e.stopPropagation();
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title-l6iWF_",
        children: o("hover_toolbar_extract")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "body-FuJC7s overflow-y-scroll flow-scrollbar",
        children: n
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "footer-egx497",
        children: reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponentExport.SemiButtonWrapperComponent, {
          type: "primary",
          onClick: r,
          children: o("hover_toolbar_copy")
        })
      })]
    });
  });
  require.d(exports, {
    ExtractTextTooltip: function () {
      return o;
    }
  });
}