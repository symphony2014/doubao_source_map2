// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(778759) to 'chat-message-block-symbol'
// - Updated imported property 'Q' to 'legacyTextBlockKey' (module 778759)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 566144
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("chat-message-block-symbol") /*id: 778759*/.legacyTextBlockKey,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaText
  };
  require.r(exports);
  require.d(exports, {
    receiveTextContentBlockPluginMatcher: function () {
      return l;
    }
  });
}