// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'SpaceWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 546179
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      containerClassName: n,
      style: r,
      children: o,
      scale: s = 1.414
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: i("space-wrapper-ieiRco", a),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: i("container-Gujvsu", n),
        style: r,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "scale-wrapper-d4nOnA",
          style: {
            paddingTop: `${s * 100}%`
          },
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "inner-wrapper-ks__bl",
            children: o
          })
        })
      })
    });
  });
  require.d(exports, {
    SpaceWrapper: function () {
      return o;
    }
  });
}