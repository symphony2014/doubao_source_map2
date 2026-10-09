// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(241306) to 'chat-merge-search-symbol'
// - Updated imported property 'r' to 'mergeSearchBlock' (module 241306)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 456197
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let i = {
    pluginIdentifier: require("chat-merge-search-symbol") /*id: 241306*/.mergeSearchBlock,
    matchContentBlock: t => t === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText
  };
  require.r(exports);
  require.d(exports, {
    MergeSearchTextBlockPluginMatcher: function () {
      return i;
    }
  });
}