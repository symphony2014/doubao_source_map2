// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'r' to 'chatRuntimeFeatureConfig'
// - Resolved require(89004) to 'chat-runtime-feature-config'
// - Renamed variable 'o' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 's' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'l' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Updated imported property 'gD' to 'initChatSymbols' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'zG' to 'getTccConfig' (module 89004)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 22067
         */
module.exports = function (module, exports, require) {
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var chatRuntimeFeatureConfig = require("chat-runtime-feature-config") /*id: 89004*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  function a(e) {
    chatFgStoreHooks.initChatSymbols({
      [chatStorageKeys.chatStorageKeys.serverAB]: {
        load: onceFunctionFactory.createOnce(async () => {
          let i = await apiServicesCollection.SamanthaApiService.GetAB({
            ab_request: e
          });
          return (i == null ? undefined : i.data?.ab_results) ?? {};
        })
      },
      [chatStorageKeys.chatStorageKeys.tcc]: {
        load: chatRuntimeFeatureConfig.getTccConfig
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    initServerAB: function () {
      return a;
    }
  });
}