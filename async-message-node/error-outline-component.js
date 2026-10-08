// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'ErrorOutline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 345768
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  let s = {
    skill_writing_outline_failure_retry_button_titile: "重新试试"
  };
  var c = {
    "error-outline": "error-outline-Eib3PT",
    "error-outline-main": "error-outline-main-A9OFyV",
    "error-outline-main-icon": "error-outline-main-icon-HS5HP3",
    "error-outline-main-tip": "error-outline-main-tip-tr_tou",
    "error-outline-btn": "error-outline-btn-IrlY5g"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = function (e) {
    let {
      tip: t,
      iconType: n = "warning",
      i18nConfig: u,
      onRetryClick: f,
      actionBarConfigStr: p
    } = e;
    let v = objectDefaultsUtil.defaults(u, s);
    let _ = reactCoreLibraryReexport.useMemo(() => safeJsonUtils.safeParse(p, {}), [p]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c["error-outline"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c["error-outline-main"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["error-outline-main-icon"],
          children: n === "warning" && reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {})
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["error-outline-main-tip"],
          children: t
        })]
      }), _.retry && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c["error-outline-btn"],
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "primary",
          size: "medium",
          disabled: !f,
          onClick: f,
          children: v.skill_writing_outline_failure_retry_button_titile
        })
      })]
    });
  };
  require.d(exports, {
    ErrorOutline: function () {
      return u;
    }
  });
}