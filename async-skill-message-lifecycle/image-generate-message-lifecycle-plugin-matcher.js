// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(598770) to 'chat-image-generate-symbol'
// - Updated imported property 'A' to 'imageGenerateSymbol' (module 598770)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 86351
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let a = {
    pluginIdentifier: require("chat-image-generate-symbol") /*id: 598770*/.imageGenerateSymbol,
    matchPlugin(e) {
      return e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillImageGen || (e == null ? undefined : e.ext?.loading_style) === "loading_generate_image" || !!messageContentTypeAndStatusChecker.qP0(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    ImageGenerateMessageLifeCyclePluginMatcher: function () {
      return a;
    }
  });
}