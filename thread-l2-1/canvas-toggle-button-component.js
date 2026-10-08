// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'CanvasToggleButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 756694
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var useControlledStateHook_1_1 = require("use-controlled-state-hook_1_1") /*id: 756850*/;
  var canvasSamanthaButtonComponent = require("canvas-samantha-button-component") /*id: 353355*/;
  var l = {
    "canvas-toggle--active": "canvas-toggle--active-ff26el",
    canvasToggleActive: "canvas-toggle--active-ff26el"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = {
    ghost: "quartary",
    outline: "tertiary"
  };
  let d = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      className: n,
      type: r = "ghost",
      ...i
    } = e;
    let [d, p] = useControlledStateHook_1_1.useControlledState(e, {
      defaultValuePropName: "defaultActive",
      valuePropName: "active",
      trigger: "onActiveChange"
    });
    return reactJsxRuntimeCoreReexport.jsx(canvasSamanthaButtonComponent.CanvasSamanthaButton, {
      ref: t,
      className: a(l["canvas-toggle"], {
        [l["canvas-toggle--active"]]: d
      }, n),
      type: u[r],
      onClick: () => {
        p(!d);
      },
      ...i
    });
  });
  require.d(exports, {
    CanvasToggleButton: function () {
      return d;
    }
  });
}