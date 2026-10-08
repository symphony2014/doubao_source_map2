// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(224496) to 'conversation-lifecycle-symbol'
// - Updated imported property 'F' to 'convLifecycleSymbol' (module 224496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 107315
         */
module.exports = function (module, exports, require) {
  let r = {
    pluginIdentifier: require("conversation-lifecycle-symbol") /*id: 224496*/.convLifecycleSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    NavigateConversationDetailMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}