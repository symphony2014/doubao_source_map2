// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(800611) to 'chat-code-assistant-symbol'
// - Updated imported property 'H' to 'codeAssistantSymbol' (module 800611)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 323886
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-code-assistant-symbol") /*id: 800611*/.codeAssistantSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    CodeAsisstantMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}