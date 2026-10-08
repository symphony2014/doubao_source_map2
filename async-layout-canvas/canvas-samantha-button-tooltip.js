// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'SamanthaTooltipBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 908098
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var canvasSamanthaButtonComponent = require("canvas-samantha-button-component") /*id: 353355*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      tooltipContent: r,
      tooltipVisible: n,
      onTooltipVisibleChange: s,
      ...l
    } = e;
    let u = reactJsxRuntimeCoreReexport.jsx(canvasSamanthaButtonComponent.CanvasSamanthaButton, {
      ref: t,
      ...l
    });
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: r,
        visible: n ?? (!!r && undefined),
        onVisibleChange: s,
        spacing: {
          y: 10,
          x: 0
        },
        children: u
      });
    } else {
      return u;
    }
  });
  require.d(exports, {
    SamanthaTooltipBtn: function () {
      return s;
    }
  });
}