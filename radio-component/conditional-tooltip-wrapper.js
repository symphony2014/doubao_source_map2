// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'ConditionalTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44291.514b9aaa.js
         * chunkId: 44291
         * moduleId: 277603
         */
module.exports = function (module, exports, require) {
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      disabled: t,
      ...n
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: n.children
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        ...n
      });
    }
  };
  require.d(exports, {
    ConditionalTooltip: function () {
      return o;
    }
  });
}