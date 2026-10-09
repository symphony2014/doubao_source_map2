// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(852527) to 'ci-assistant-symbol'
// - Updated imported property 'H' to 'ciAssistantSymbol' (module 852527)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 648022
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("ci-assistant-symbol") /*id: 852527*/.ciAssistantSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    CIAsisstantMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}