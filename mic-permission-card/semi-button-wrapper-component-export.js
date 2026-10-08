// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'SemiButtonWrapperComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 659091
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      theme: t = "flow",
      type: a = "secondary",
      className: n,
      ...o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
      ...o,
      type: a,
      className: r({
        "flow-x7T7Tx": t === "flow"
      }, n),
      children: e.children
    });
  };
  require.d(exports, {
    SemiButtonWrapperComponent: function () {
      return o;
    }
  });
}