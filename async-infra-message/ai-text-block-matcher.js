// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(662413) to 'receive-message-block-symbol'
// - Updated imported property 'z' to 'messageBlockSymbol' (module 662413)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 122587
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    pluginIdentifier: require("receive-message-block-symbol") /*id: 662413*/.messageBlockSymbol,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockText
  };
  require.r(exports);
  require.d(exports, {
    receiveTextContentBlockMergePluginMatcher: function () {
      return r;
    }
  });
}