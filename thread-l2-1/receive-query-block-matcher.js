// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(926229) to 'receive-query-block-symbol'
// - Updated imported property 'q' to 'receiveQuerySymbol' (module 926229)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 182633
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("receive-query-block-symbol") /*id: 926229*/.receiveQuerySymbol,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineOutput
  };
  require.r(exports);
  require.d(exports, {
    ReceiveQueryBlockContentMatcher: function () {
      return l;
    }
  });
}