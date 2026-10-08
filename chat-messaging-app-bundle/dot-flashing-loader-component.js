// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'DotFlashingLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 920732
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var dotFlashingLoader = require("dot-flashing-loader") /*id: 887785*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      inlineEnd: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("flex items-baseline", {
        "flex justify-end": t
      }),
      children: reactJsxRuntimeCoreReexport.jsx(dotFlashingLoader.DotFlashing, {})
    });
  };
  require.d(exports, {
    DotFlashingLoader: function () {
      return s;
    }
  });
}