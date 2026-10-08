// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isInternalEnv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 30256
         */
module.exports = function (module, exports, require) {
  let i = require("once-function-factory") /*id: 80532*/.createOnce(() => window.location.hostname === "inhouse.doubao.com" || !!window.localStorage.getItem("superTaskDebug"));
  require.d(exports, {
    isInternalEnv: function () {
      return i;
    }
  });
}