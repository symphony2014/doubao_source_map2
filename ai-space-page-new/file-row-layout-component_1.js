// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'FileRowLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 718094
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var r = {
    "file-row-wrapper": "file-row-wrapper-clnh7a",
    "left-column": "left-column-q9YKKQ",
    "middle-column": "middle-column-wUKDNM",
    "right-column": "right-column-VMR1jA"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      colCount: t,
      left: n,
      middle1: i,
      middle2: l,
      right: s,
      wrapperClassName: d,
      leftClassName: c,
      middle1ClassName: u,
      middle2ClassName: p,
      rightClassName: m,
      wrapperStyle: h
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(r["file-row-wrapper"], d),
      style: h,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(r["left-column"], c),
        children: n
      }), t && t >= 4 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(r["middle-column"], u),
        children: i
      }), t && t >= 3 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(r["middle-column"], p),
        children: l
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(r["right-column"], m),
        children: s
      })]
    });
  };
  require.d(exports, {
    FileRowLayout: function () {
      return l;
    }
  });
}