// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'AiStatusIndicator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 811271
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var docxCommentUiSelectors = require("docx-comment-ui-selectors") /*id: 133504*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docLauncherStatus = require("doc-launcher-status") /*id: 126777*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      streaming: n,
      source: o
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let p = o && n && [docLauncherStatus.getLaunchStatus.Rewrite, docLauncherStatus.getLaunchStatus.Startup].includes(o);
    let _ = reactReduxExports.useSelector(docxCommentUiSelectors.isCommentPanelShown);
    let h = reactReduxExports.useSelector(docxCommentUiSelectors.isHelpPanelShown);
    let v = reactCoreLibraryReexport.useMemo(() => {
      let e = Math.max(_ ? docxEditorConstantsConfig.maxTooltipWidth : 0, h ? docxEditorConstantsConfig.minPanelWidth : 0);
      return {
        transform: `translateX(calc(-50% - ${e / 2}px))`
      };
    }, [_, h]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("container-GqCTja"),
      style: v,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("content-jfWwKU"),
        children: r(p ? "doc_canvas_status_AI_writing" : "doc_canvas_status_AI_thinking")
      })
    });
  };
  require.d(exports, {
    AiStatusIndicator: function () {
      return p;
    }
  });
}