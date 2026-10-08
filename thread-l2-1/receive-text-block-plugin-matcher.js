// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(147461) to 'chat-receive-text-block-symbol'
// - Updated imported property 'A' to 'receiveTextBlockSym' (module 147461)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 647204
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("chat-receive-text-block-symbol") /*id: 147461*/.receiveTextBlockSym,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockText
  };
  require.r(exports);
  require.d(exports, {
    receiveTextContentBlockPluginMatcher: function () {
      return l;
    }
  });
}