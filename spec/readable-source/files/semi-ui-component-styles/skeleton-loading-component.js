// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'SkeletonLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 437338
         */
module.exports = function (module, exports, require) {
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var spaceWrapperComponent = require("space-wrapper-component") /*id: 546179*/;
  var s = {
    "skeleton-overlay": "skeleton-overlay-CuI2wh",
    skeletonOverlay: "skeleton-overlay-CuI2wh",
    entered: "entered-OqEH58",
    entering: "entering-fSIFUa",
    "skeleton-box": "skeleton-box-RztgYN",
    skeletonBox: "skeleton-box-RztgYN",
    gradient: "gradient-xVhYCb",
    loading: "loading-SUFbLa",
    inner: "inner-XyaDpy",
    rotate: "rotate-H29jfn",
    rotating: "rotating-rDcHM1"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      children: t,
      className: a,
      visible: r = true,
      mode: d = "box",
      type: u = "gradient"
    } = e;
    let p = reactJsxRuntimeCoreReexport.jsx(spaceWrapperComponent.SpaceWrapper, {
      className: a,
      containerClassName: i(s["skeleton-box"], s[u]),
      children: u === "loading" && reactJsxRuntimeCoreReexport.jsx("div", {
        className: s.inner,
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      })
    });
    if (d === "overlay") {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [t, reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
          in: !r,
          timeout: 300,
          children: e => reactJsxRuntimeCoreReexport.jsx("div", {
            className: i(s["skeleton-overlay"], s[e]),
            children: p
          })
        })]
      });
    } else if (d === "box") {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [r && p, " ", t]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SkeletonLoading: function () {
      return d;
    }
  });
}