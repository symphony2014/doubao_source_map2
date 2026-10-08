// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxBlockLoadRetry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 607364
         */
module.exports = function (module, exports, require) {
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      clipPath: "url(#icon_warning_colorful_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#F80",
        d: "M9 17.25A8.25 8.25 0 1 0 9 .75a8.25 8.25 0 0 0 0 16.5"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#fff",
        d: "M9 5.25a.75.75 0 0 0-.75.75v3.75a.75.75 0 0 0 1.5 0V6A.75.75 0 0 0 9 5.25M9 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "icon_warning_colorful_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 0h18v18H0z"
        })
      })
    })]
  });
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let u = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  function h(e) {
    let {
      blockError: i
    } = e;
    let [r, n] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && (r === null || r !== i.id)) {
        n(i.id);
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadError(i);
      }
    }, [i]);
    let a = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "docx-retry-content",
      children: [e.displayMode === docBlockTypeConstants.blockDisplayConstants.INLINE ? reactJsxRuntimeCoreReexport.jsx(s, {
        className: "docx-inline-block-warning-icon"
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-retry-placeholder-img",
        children: reactJsxRuntimeCoreReexport.jsx(u, {
          style: {
            maxHeight: "88px",
            maxWidth: "88px"
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "retry-tips",
        children: reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "retry-text",
          children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
            type: "button",
            onClick: e.onClickRetry,
            className: "retry-btn",
            children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
          })]
        })
      })]
    }), [e.displayMode, e.onClickRetry]);
    if (e && e.displayMode === docBlockTypeConstants.blockDisplayConstants.INLINE) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-block-loading-retryable-inline",
        style: e.style,
        children: a()
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-block-loading-retryable docx-block-loading",
        style: e.style,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "docx-block-mode",
          contentEditable: false,
          suppressContentEditableWarning: true,
          children: a()
        })
      });
    }
  }
  require.d(exports, {
    DocxBlockLoadRetry: function () {
      return h;
    }
  });
}