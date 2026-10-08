// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'overflowTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14473.5ec9d82c.js
         * chunkId: 14473
         * moduleId: 969628
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var o = {
    "overflow-tooltip": "overflow-tooltip-Meuy1X"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = t => {
    let {
      text: e,
      textClassName: n,
      lang: l,
      ...a
    } = t;
    let u = reactCoreLibraryReexport.useRef(null);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (u.current) {
        if (u.current.scrollHeight > u.current.clientHeight) {
          d(true);
        } else {
          d(false);
        }
      }
    }, [e]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: c ? reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
        mouseEnterDelay: 500,
        mouseLeaveDelay: 500,
        position: "leftTop",
        motion: false,
        showArrow: true,
        arrowPointAtCenter: false,
        content: e,
        className: o["overflow-tooltip"],
        ...a,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          lang: l,
          className: n,
          ref: u,
          children: e
        })
      }) : reactJsxRuntimeCoreReexport.jsx("span", {
        lang: l,
        className: n,
        ref: u,
        children: e
      })
    });
  };
  require.d(exports, {
    overflowTooltip: function () {
      return l;
    }
  });
}