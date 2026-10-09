// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(140058) to 'chat-block-content-symbol'
// - Updated imported property 'p' to 'creationBlockSymbol' (module 140058)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 81137
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let l = {
    pluginIdentifier: require("chat-block-content-symbol") /*id: 140058*/.creationBlockSymbol,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput
  };
  require.r(exports);
  require.d(exports, {
    receiveCreationMessageContentBlockMatcher: function () {
      return l;
    }
  });
}