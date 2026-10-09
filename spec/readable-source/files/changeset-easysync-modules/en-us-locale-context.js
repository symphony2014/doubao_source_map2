// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'EnUsLocaleContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 812811
         */
module.exports = function (module, exports, require) {
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var enUsLocaleConfig = require("en-us-locale-config") /*id: 743929*/;
  var o = reactContextSelector.createContext(enUsLocaleConfig.localeConfig);
  require.d(exports, {
    EnUsLocaleContext: function () {
      return o;
    }
  });
}