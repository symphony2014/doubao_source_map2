// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'SearchReferenceEntry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55821.62d46e89.js
         * chunkId: 55821
         * moduleId: 986437
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var webSearchDeepThinkKey = require("web-search-deep-think-key") /*id: 202010*/;
  var uiStylesClassMap = require("ui-styles-class-map") /*id: 180891*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      sources: l,
      classname: i,
      style: n,
      title: g,
      richImagesResultsLength: p = 0,
      isThinkScene: m,
      onClick: h,
      ...f
    } = e;
    let M = i18nTranslationUtils.useTranslationWithFallback();
    let N = functionInvoker.invoke(() => l && l.length > 0 && p > 0 ? p + l.length : l && l.length > 0 ? l.length : p);
    if (l && l.length !== 0 || p !== 0) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": `search-reference-ui${m ? "-think" : ""}`,
        ref: t,
        ...f,
        style: n,
        className: a(uiStylesClassMap.stylesMap["entry-btn"], i),
        onClick: e => {
          e.stopPropagation();
          if (h != null) {
            h();
          }
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex items-center justify-center gap-8",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: a(uiStylesClassMap.stylesMap["entry-btn-title"], "entry-btn-title"),
            children: g || M(webSearchDeepThinkKey.webSearchCountLabel, {
              s_number: N,
              num: N
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
          className: a(uiStylesClassMap.stylesMap.arrow, "arrow")
        })]
      });
    } else {
      return null;
    }
  });
  require.d(exports, {
    SearchReferenceEntry: function () {
      return g;
    }
  });
}