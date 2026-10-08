// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hf' to 'MessageSkeleton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.2dd70858.js
         * chunkId: 51606
         * moduleId: 449904
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var skeletonLoaderExport = require("skeleton-loader-export") /*id: 766114*/;
  var o = "message-area-flPDkB";
  var s = "title-caOsgg";
  var l = "skeleton-Qsh6Xl";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: o,
    children: [reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "top-area-wt4My3",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("rounded-60 mr-20 ml-10", l, "avatar-fihGlH")
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a("w-212 rounded-8 mb-6 ", l, s)
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a("w-360 rounded-8 ", l, s)
        })]
      })]
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: "bottom-area-vgvWeK",
      children: Array(9).fill(0).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("h-64 rounded-10 mb-10", l, "item-TSpSIt"),
        style: {
          opacity: 1 - (t + 1) / 10
        }
      }, t))
    })]
  });
  let c = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: a(o),
    children: [reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("h-36 rounded-8 mb-22 mt-6", l),
      style: {
        width: "66%"
      }
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("h-36 rounded-8 mb-22", l),
      style: {
        width: "100%"
      }
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("h-36 rounded-8 mb-22", l),
      style: {
        width: "33%"
      }
    })]
  });
  let v = () => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
    children: [reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
      className: "mb-[24px] h-[24px] w-full"
    }), reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
      className: "mb-[24px] h-[24px] w-full"
    }), reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
      className: "h-[24px] w-[460px]"
    })]
  });
  let _ = e => {
    let {
      type: t = "default",
      useNewUI: n
    } = e;
    let i = {
      thread: reactJsxRuntimeCoreReexport.jsx(u, {}),
      default: reactJsxRuntimeCoreReexport.jsx(c, {})
    };
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(v, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "message-container-H7B_AA",
        children: i[t]
      });
    }
  };
  require.d(exports, {
    MessageSkeleton: function () {
      return _;
    }
  });
}