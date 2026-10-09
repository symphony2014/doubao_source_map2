// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'Container'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 237250
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      style: n,
      disabled: r,
      children: o,
      onClick: s,
      ...c
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: i("container-MjphRC", a, {
        "disabled-U7S_bN": r
      }),
      onClick: s,
      ref: t,
      ...c,
      children: o
    });
  });
  require.d(exports, {
    Container: function () {
      return o;
    }
  });
}