// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAsrStoreHook'
// - Resolved require(176317) to 'chat-asr-store-hook'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// - Updated imported property 'j' to 'useChatAsrStore' (module 176317)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 679445
         */
module.exports = function (module, exports, require) {
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  let r = {
    pluginIdentifier: require("asr-tool-button-symbol") /*id: 100129*/.asrToolButtonSymbol,
    matchPluginWithPayload: () => chatAsrStoreHook.useChatAsrStore.getState().hasUsedAsr,
    matchPlugin: () => chatAsrStoreHook.useChatAsrStore.getState().hasUsedAsr
  };
  require.r(exports);
  require.d(exports, {
    GenericAsrBtnMessageLifeCycleMatcher: function () {
      return r;
    }
  });
}