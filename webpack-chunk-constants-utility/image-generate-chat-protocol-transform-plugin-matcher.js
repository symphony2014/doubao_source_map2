// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'a' to 'checkImageContentType'
// - Resolved require(490356) to 'check-image-content-type'
// - Renamed variable 'c' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'isEducationSkillChecker'
// - Resolved require(965929) to 'is-education-skill-checker'
// - Resolved require(218951) to 'image-generate-symbol'
// - Updated imported property 'G' to 'imageGenerateSymbol' (module 218951)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 's' to 'isImageContentType' (module 490356)
// - Updated imported property 't' to 'isEducationSkill' (module 965929)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17026.2a2d803f.js
         * chunkId: 17026
         * moduleId: 561171
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var checkImageContentType = require("check-image-content-type") /*id: 490356*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var isEducationSkillChecker = require("is-education-skill-checker") /*id: 965929*/;
  let u = {
    pluginIdentifier: require("image-generate-symbol") /*id: 218951*/.imageGenerateSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (checkImageContentType.isImageContentType(e) || messageContentTypeAndStatusChecker.NB8(e) || messageContentTypeAndStatusChecker.RUP(e)) && !isEducationSkillChecker.isEducationSkill(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (checkImageContentType.isImageContentType(e) || messageContentTypeAndStatusChecker.NB8(e) || messageContentTypeAndStatusChecker.RUP(e)),
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillImageGen;
    },
    matchPluginForMessageToAliceChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillImageGen;
    }
  };
  require.r(exports);
  require.d(exports, {
    ImageGenerateChatProtocolransformPluginMatcher: function () {
      return u;
    }
  });
}