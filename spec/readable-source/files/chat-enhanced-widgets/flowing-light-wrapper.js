// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'FlowingLight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 759491
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      children: t,
      className: n,
      style: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: l("flowing-light-bHF09z", n),
      style: o,
      children: t
    });
  };
  require.d(exports, {
    FlowingLight: function () {
      return i;
    }
  });
}