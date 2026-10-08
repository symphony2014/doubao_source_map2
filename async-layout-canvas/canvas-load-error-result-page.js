// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'CanvasErrorResultPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 781022
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlWarningIcon = require("rtl-warning-icon") /*id: 317332*/;
  var canvasAiFixButton = require("canvas-ai-fix-button") /*id: 434021*/;
  var u = {
    "result-page": "result-page-FHcf1G",
    resultPage: "result-page-FHcf1G",
    "result-page-inner": "result-page-inner-DNDghc",
    resultPageInner: "result-page-inner-DNDghc",
    "warn-icon": "warn-icon-s4fFs2",
    warnIcon: "warn-icon-s4fFs2",
    "result-title": "result-title-B6teay",
    resultTitle: "result-title-B6teay",
    "result-description": "result-description-Uwzn6l",
    resultDescription: "result-description-Uwzn6l",
    "result-actions": "result-actions-D14PRW",
    resultActions: "result-actions-D14PRW",
    "ai-fix-btn": "ai-fix-btn-pTc9nF",
    aiFixBtn: "ai-fix-btn-pTc9nF"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      title: t,
      description: r,
      isRetrying: d,
      onRetry: p,
      showAIFix: f,
      handleAIFix: h,
      onAIFixShowTracker: m
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (r && f) {
        if (m != null) {
          m();
        }
      }
    }, [r, f]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u["result-page"],
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: u["result-page-inner"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: u["warn-icon"],
          children: reactJsxRuntimeCoreReexport.jsx(rtlWarningIcon.WarningOutlinedIcon, {})
        }), t && reactJsxRuntimeCoreReexport.jsx("div", {
          className: u["result-title"],
          children: t
        }), r && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Paragraph, {
            className: u["result-description"],
            ellipsis: {
              rows: 20,
              expandable: true,
              collapsible: true
            },
            children: r.trimEnd()
          }), f && reactJsxRuntimeCoreReexport.jsx(canvasAiFixButton.AiFixButton, {
            classNames: u["ai-fix-btn"],
            onClick: h
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: u.action,
          children: p && !f && reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "tertiary",
            onClick: p,
            loading: d,
            children: g("web_ai_coding_canvas_load_fail_retry")
          })
        })]
      })
    });
  };
  require.d(exports, {
    CanvasErrorResultPage: function () {
      return d;
    }
  });
}