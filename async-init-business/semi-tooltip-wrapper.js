// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'SemiTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 905177
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var samanthaTooltipStyles = require("samantha-tooltip-styles") /*id: 815392*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = () => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: "6",
    height: "16",
    viewBox: "0 0 6 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "semi-tooltip-icon-arrow",
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M1.99309 11.5617L5.15916 8.74741C5.60668 8.34962 5.60668 7.65038 5.15916 7.25259L1.99309 4.4383C0.725344 3.31142 -6.25239e-07 1.69619 -6.99382e-07 0L-3.49691e-07 8L0 16C-7.41428e-08 14.3038 0.725345 12.6886 1.99309 11.5617Z",
      fill: "currentColor"
    })
  });
  let d = () => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: "17",
    height: "6",
    viewBox: "0 0 17 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "semi-tooltip-icon-arrow",
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M4.9383 1.99309L7.75259 5.15916C8.15038 5.60668 8.84962 5.60668 9.24741 5.15916L12.0617 1.99309C13.1886 0.725344 14.8038 0 16.5 0L8.5 0L0.5 0C2.19619 0 3.81142 0.725345 4.9383 1.99309Z",
      fill: "currentColor"
    })
  });
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      position: n = "top",
      showArrow: i = true
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
      ref: t,
      ...e,
      className: o(samanthaTooltipStyles.samanthaStyles["samantha-tooltip"], e.className),
      showArrow: !!i && (n.includes("left") || n.includes("right") ? reactJsxRuntimeCoreReexport.jsx(c, {}) : reactJsxRuntimeCoreReexport.jsx(d, {})),
      children: e.children
    });
  });
  require.d(exports, {
    SemiTooltip: function () {
      return u;
    }
  });
}