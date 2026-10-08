// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useVipFeatureConf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 534257
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  let r = require("react-store-hook-factory") /*id: 65636*/.createStoreHook(reduxDevtoolsPersistIntegration.enhanceSubscribe(() => ({
    vipFeatureConf: {}
  })));
  require.d(exports, {
    useVipFeatureConf: function () {
      return r;
    }
  });
}