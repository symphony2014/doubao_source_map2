// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'VideoErrorFallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 608647
         */
module.exports = function (module, exports, require) {
  var imageErrorTooltipComponent = require("image-error-tooltip-component") /*id: 233288*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      resetErrorBoundary: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      onClick: () => t(),
      children: reactJsxRuntimeCoreReexport.jsx(imageErrorTooltipComponent.ImageErrorTooltip, {
        content: n("skill_video_generation_failed_info")
      })
    });
  };
  require.d(exports, {
    VideoErrorFallback: function () {
      return l;
    }
  });
}