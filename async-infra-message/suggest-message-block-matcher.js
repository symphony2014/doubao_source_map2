// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(193463) to 'chat-infra-suggest-block-symbol'
// - Updated imported property 'P' to 'suggestBlockSymbol' (module 193463)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 920229
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    pluginIdentifier: require("chat-infra-suggest-block-symbol") /*id: 193463*/.suggestBlockSymbol,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest
  };
  require.r(exports);
  require.d(exports, {
    suggestsMessageBlockMergePluginMatcher: function () {
      return r;
    }
  });
}