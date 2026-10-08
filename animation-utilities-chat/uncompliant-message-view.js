// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'UncompliantMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 262443
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      text: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "failed-comp-ZFI9UI",
      "data-testid": "message_uncompliant",
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "failed-icon-ngJ7Wf"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: "failed-text-i9oUt0",
        children: t
      })]
    });
  };
  require.d(exports, {
    UncompliantMessage: function () {
      return s;
    }
  });
}