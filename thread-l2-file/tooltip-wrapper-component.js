// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'TooltipWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 379673
         */
module.exports = function (module, exports, require) {
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      content: t,
      children: i
    } = e;
    let r = !!t && !!i;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: t,
        trigger: r ? "hover" : "custom",
        visible: !!r && undefined,
        getPopupContainer: () => document.body,
        children: i
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: i
      });
    }
  };
  require.d(exports, {
    TooltipWrapper: function () {
      return r;
    }
  });
}