// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zm' to 'aiPptTemplateStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 698449
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  let a = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(aiPptTemplateStore.createPptStore));
  require.d(exports, {
    aiPptTemplateStore: function () {
      return a;
    }
  });
}