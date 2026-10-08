// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useReducedMotionConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 898006
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var r = require("global-config-context-provider") /*id: 601748*/.createGlobalConfigContext("reduced-motion", false);
  r.ConfigProvider;
  var i = r.useConfig;
  require.d(exports, {
    useReducedMotionConfig: function () {
      return i;
    }
  });
}