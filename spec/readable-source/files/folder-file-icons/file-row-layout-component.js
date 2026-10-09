// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'FileRowLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41522.84972134.js
         * chunkId: 41522
         * moduleId: 569650
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var t = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      left: s,
      right: l,
      wrapperClassName: i,
      leftClassName: a,
      rightClassName: n,
      wrapperStyle: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: t("file-row-wrapper-bQ5YmH", i),
      style: r,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: t("left-column-ZsQmSV", a),
        children: s
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: t("right-column-Ck3s3K", n),
        children: l
      })]
    });
  };
  require.d(exports, {
    FileRowLayout: function () {
      return a;
    }
  });
}