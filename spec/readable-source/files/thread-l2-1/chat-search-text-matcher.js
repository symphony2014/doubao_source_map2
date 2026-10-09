// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(193394) to 'chat-search-text-block-symbol'
// - Updated imported property 'h' to 'searchTextBlockSym' (module 193394)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 173217
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("chat-search-text-block-symbol") /*id: 193394*/.searchTextBlockSym,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText
  };
  require.r(exports);
  require.d(exports, {
    ReceiveSearchTextBlockContentMatcher: function () {
      return l;
    }
  });
}