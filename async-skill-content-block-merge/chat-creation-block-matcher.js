// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(110442) to 'chat-receive-block-merge'
// - Updated imported property 'M' to 'receiveBlockMerge' (module 110442)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 976194
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let i = {
    pluginIdentifier: require("chat-receive-block-merge") /*id: 110442*/.receiveBlockMerge,
    matchContentBlock: t => t === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput
  };
  require.r(exports);
  require.d(exports, {
    receiveCreationMessageContentBlockMatcher: function () {
      return i;
    }
  });
}