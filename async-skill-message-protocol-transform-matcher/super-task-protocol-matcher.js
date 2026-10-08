// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(859678) to 'chat-protocol-transform-symbol'
// - Updated imported property 'i' to 'protocolTransform' (module 859678)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 345249
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let n = {
    pluginIdentifier: require("chat-protocol-transform-symbol") /*id: 859678*/.protocolTransform,
    matchPluginForMessageToSamanthaChatMessage(e) {
      return [aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask].includes(e == null ? undefined : e.skill?.skill_type);
    }
  };
  require.r(exports);
  require.d(exports, {
    SuperTaskProtocolTransformPluginMatcher: function () {
      return n;
    }
  });
}