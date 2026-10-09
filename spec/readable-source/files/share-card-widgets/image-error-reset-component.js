// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'ImageErrorReset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 877507
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
        content: n("message_recieve_image_error")
      })
    });
  };
  require.d(exports, {
    ImageErrorReset: function () {
      return l;
    }
  });
}