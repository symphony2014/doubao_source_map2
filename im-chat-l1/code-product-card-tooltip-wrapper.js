// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'CodeProductCardTooltipWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 328958
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var r = {
    "code-product-card-container": "code-product-card-container-_Sw6wy",
    "code-product-card-tooltip": "code-product-card-tooltip-_shf7h"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      children: n,
      tooltipContent: i,
      dataTestId: a
    } = e;
    let s = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: r["code-product-card-container"],
      ref: t,
      "data-testid": a,
      children: n
    });
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: i,
        position: "top",
        trigger: "hover",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: r["code-product-card-tooltip"],
          children: s()
        })
      });
    } else {
      return s();
    }
  });
  require.d(exports, {
    CodeProductCardTooltipWrapper: function () {
      return a;
    }
  });
}