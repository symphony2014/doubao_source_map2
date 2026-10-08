// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'AttachImgTag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 371964
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require("react-core-library-reexport") /*id: 634663*/;
  let l = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 98,
    height: 40,
    fill: "none",
    preserveAspectRatio: "none",
    viewBox: "0 0 98 40",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: "100%",
      height: "100%",
      fill: "url(#attach-img-tag_svg__a)"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "attach-img-tag_svg__a",
        x1: 83.417,
        x2: 93.913,
        y1: 5.5,
        y2: 37.766,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.489,
          stopOpacity: 0.1
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopOpacity: 0.4
        })]
      })
    })]
  });
  let a = e => {
    let {
      tag: t,
      className: n,
      ...i
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("tag-GEHnLO", n),
        ...i,
        children: [reactJsxRuntimeCoreReexport.jsx(l, {
          className: "bg-NsZIWq"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-jJj2uO",
          children: t
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    AttachImgTag: function () {
      return a;
    }
  });
}