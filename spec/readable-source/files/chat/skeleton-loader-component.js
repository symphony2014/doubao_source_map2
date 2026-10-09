// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'SkeletonLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 876073
         */
module.exports = function (module, exports, require) {
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      loading: t = true,
      active: n = true,
      placeholder: o,
      children: a,
      className: l,
      ...s
    } = e;
    if (t) {
      if (o) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          "data-slot": "skeleton",
          className: classNamesMergeUtil.mergeClassNames(l),
          ...s,
          children: o
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          "data-slot": "skeleton",
          className: classNamesMergeUtil.mergeClassNames(`
          rounded-full
          bg-[linear-gradient(90deg,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.04)_100%)]
        `, n && "animate-pulse", l),
          ...s
        });
      }
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: a
      });
    }
  };
  require.d(exports, {
    SkeletonLoader: function () {
      return o;
    }
  });
}