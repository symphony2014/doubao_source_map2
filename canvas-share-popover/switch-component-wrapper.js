// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'SwitchComponentWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 571857
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
      className: l(t, "samantha-switch-c5AR6f"),
      ...n
    });
  };
  require.d(exports, {
    SwitchComponentWrapper: function () {
      return a;
    }
  });
}