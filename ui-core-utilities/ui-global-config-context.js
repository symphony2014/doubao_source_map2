// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'UiGlobalConfigContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 698735
         */
module.exports = function (module, exports, require) {
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var globalUiConfig = require("global-ui-config") /*id: 946058*/;
  var a = reactContextSelector.createContext(globalUiConfig.uiGlobalConfig);
  require.d(exports, {
    UiGlobalConfigContext: function () {
      return a;
    }
  });
}