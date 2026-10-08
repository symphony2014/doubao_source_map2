// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'AiFixButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 434021
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var notificationSettingsIcon = require("notification-settings-icon") /*id: 712107*/;
  var canvasSamanthaButtonTooltip = require("canvas-samantha-button-tooltip") /*id: 908098*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.memo(e => {
    let {
      onClick: t,
      classNames: r
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("ai-fix-btn-g7yfUd", r),
      "data-testid": "ai-fix-btn",
      children: reactJsxRuntimeCoreReexport.jsx(canvasSamanthaButtonTooltip.SamanthaTooltipBtn, {
        size: "small",
        icon: reactJsxRuntimeCoreReexport.jsx(notificationSettingsIcon.NotificationSettingsIcon, {}),
        onClick: t,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "ai-fix-text-NMidqC",
          children: n("web_ai_coding_canvas_ai_fix_btn")
        })
      })
    });
  });
  require.d(exports, {
    AiFixButton: function () {
      return c;
    }
  });
}