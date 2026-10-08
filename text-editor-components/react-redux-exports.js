// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v9' to 'useSelector'
// - Renamed export 'zt' to 'Provider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 426907
         */
module.exports = function (module, exports, require) {
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  require.d(exports, {
    useSelector: function () {
      return reactReduxCore.useSelector;
    },
    Provider: function () {
      return reactReduxCore.Provider;
    }
  });
}