// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(834667) to 'infra-legacy-text-block-symbol'
// - Updated imported property 'U' to 'legacyTextBlockCmd' (module 834667)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 802457
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    pluginIdentifier: require("infra-legacy-text-block-symbol") /*id: 834667*/.legacyTextBlockCmd,
    matchContentBlock: e => e === aiAssistantSkillTypes.SamanthaTypes.SamanthaText
  };
  require.r(exports);
  require.d(exports, {
    receiveTextMessageContentBlockMatcher: function () {
      return r;
    }
  });
}