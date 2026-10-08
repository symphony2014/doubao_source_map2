// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(804275) to 'chat-message-merge-thinking'
// - Updated imported property '_' to 'mergeThinkingSymbol' (module 804275)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 39562
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let i = {
    pluginIdentifier: require("chat-message-merge-thinking") /*id: 804275*/.mergeThinkingSymbol,
    matchContentBlock: t => t === aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockCreationLoading
  };
  require.r(exports);
  require.d(exports, {
    receiveCreationThinkingMessageContentBlockMatcher: function () {
      return i;
    }
  });
}