// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'FlashingIndicator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 552709
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      className: t,
      style: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: "container-hX4YvN",
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        className: l("indicator-FvJUEn", "flashing-RCjNnF", t),
        style: r,
        "data-testid": "indicator"
      })
    });
  };
  require.d(exports, {
    FlashingIndicator: function () {
      return a;
    }
  });
}