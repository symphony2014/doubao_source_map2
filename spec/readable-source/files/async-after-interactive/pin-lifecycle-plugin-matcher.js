// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(595961) to 'conversation-pin-lifecycle-symbol'
// - Updated imported property 'B' to 'pinLifecycleSymbol' (module 595961)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 632162
         */
module.exports = function (module, exports, require) {
  let r = {
    pluginIdentifier: require("conversation-pin-lifecycle-symbol") /*id: 595961*/.pinLifecycleSymbol,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    ConversationPinMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}