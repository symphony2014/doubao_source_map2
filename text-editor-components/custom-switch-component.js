// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'CustomSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 753298
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: n,
      ...o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
      className: r("custom-switch-lZzASC", n),
      ...o
    });
  };
  require.d(exports, {
    CustomSwitch: function () {
      return s;
    }
  });
}