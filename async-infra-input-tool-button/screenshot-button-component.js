// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'ScreenshotButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 476377
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var c = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.042 1.706a1 1 0 0 0-1.392.245l-4.74 6.77-4.74-6.77A1 1 0 0 0 5.53 3.098l5.158 7.366-2.715 3.878a4.002 4.002 0 0 0-3.697 7.023 4 4 0 0 0 5.335-5.876l2.297-3.281 2.298 3.28a4.002 4.002 0 0 0 5.335 5.877 4 4 0 0 0-3.697-7.023l-2.715-3.878 5.158-7.366a1 1 0 0 0-.246-1.392M8.21 19.236a2 2 0 1 0-3.277-2.294 2 2 0 0 0 3.277 2.294m7.4 0a2 2 0 1 1 3.277-2.295 2 2 0 0 1-3.276 2.295",
      clipRule: "evenodd"
    })
  }), {}));
  let u = e => {
    let {
      className: t = "",
      onClickScreenshot: n,
      tooltipContent: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: r,
        className: o({
          "!hidden": isUndefinedCheck.isUndefined(r)
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            wrapper-OtpXBF
            ${t}
          `,
          onClick: n,
          "data-testid": "screenshot-button",
          children: reactJsxRuntimeCoreReexport.jsx(c, {
            className: "screenshotIcon-TwwYhV"
          })
        })
      })
    });
  };
  require.d(exports, {
    ScreenshotButton: function () {
      return u;
    }
  });
}