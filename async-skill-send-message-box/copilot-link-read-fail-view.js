// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'LinkReadFailView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 303262
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r("container-An59XW", t),
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "icon-WzoTdd"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-Vvde5b",
        children: n("copilot_linkread_failed")
      })]
    });
  };
  require.d(exports, {
    LinkReadFailView: function () {
      return s;
    }
  });
}