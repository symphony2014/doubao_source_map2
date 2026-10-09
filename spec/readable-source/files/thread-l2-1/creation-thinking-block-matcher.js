// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(432273) to 'chat-thinking-block-symbol_1'
// - Updated imported property 'S' to 'thinkingBlockSymbol' (module 432273)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 82340
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("chat-thinking-block-symbol_1") /*id: 432273*/.thinkingBlockSymbol,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockCreationLoading
  };
  require.r(exports);
  require.d(exports, {
    receiveCreationThinkingContentBlockPluginMatcher: function () {
      return l;
    }
  });
}