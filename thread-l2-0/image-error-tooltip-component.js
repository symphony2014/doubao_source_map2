// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'ImageErrorTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 233288
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: t,
      content: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
      content: n,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("h-250 w-250 rounded-12 flex items-center justify-center", "image-error-f2uRwJ", t),
        children: reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: "text-28 text-s-color-text-quaternary"
        })
      })
    });
  };
  require.d(exports, {
    ImageErrorTooltip: function () {
      return s;
    }
  });
}