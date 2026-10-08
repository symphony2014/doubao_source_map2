// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'MathInlineDisplay'
// - Renamed export 'Z' to 'MathInlineDisplay_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 762075
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      tex: t,
      mode: r,
      className: n,
      style: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: l("math-inline", n),
      style: a,
      children: t
    });
  };
  exports.MathInlineDisplay_1 = a;
  require.d(exports, {
    MathInlineDisplay: function () {
      return a;
    }
  });
}