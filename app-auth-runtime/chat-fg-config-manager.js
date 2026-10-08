// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getFgConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 994655
         */
module.exports = function (module, exports, require) {
  var featureFlagsConfiguration = require("feature-flags-configuration") /*id: 220736*/;
  var chatRuntimeSdkKeys = require("chat-runtime-sdk-keys") /*id: 165630*/;
  var chatFgStoreManager = require("chat-fg-store-manager") /*id: 284583*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let a = () => {
    chatFgStoreManager.ChatFgStore.instance().loadSource(chatStorageKeys.chatStorageKeys.serverAB, true);
    window[chatRuntimeSdkKeys.sdkPromiseKeys.GuestLayoutMode] &&= apiServicesCollection.SamanthaApiService.GetSetting({
      ab_param: {
        ab_request: featureFlagsConfiguration.featureFlags
      }
    });
  };
  require.d(exports, {
    getFgConfig: function () {
      return a;
    }
  });
}