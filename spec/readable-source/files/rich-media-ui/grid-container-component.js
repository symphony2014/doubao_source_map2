// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'GridContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 329811
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var l = {
    container: "container-fQqhNk",
    containerSm: "containerSm-gEWHe0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      classname: i,
      children: t,
      appSize: n = "lg",
      columns: o = 1,
      rows: d = 1
    } = e;
    if (n === "sm") {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(l.containerSm, i, `grid-cols-${o}`, `grid-rows-${d}`),
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(l.container, i, "gap-4"),
        children: t
      });
    }
  };
  require.d(exports, {
    GridContainer: function () {
      return o;
    }
  });
}