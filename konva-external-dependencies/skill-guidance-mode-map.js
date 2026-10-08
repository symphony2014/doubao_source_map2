// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'getConversationMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 147623
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var conversationModeConstants = require("conversation-mode-constants") /*id: 545465*/;
  let r = e => {
    switch (e) {
      case skillConstantsEnum.GuidanceType.GUIDANCE_PAGE:
        return conversationModeConstants.conversationModes.GENERIC_START_PAGE_NEW_CONVERSATION;
      case skillConstantsEnum.GuidanceType.SKILL_GUIDANCE_PAGE:
        return conversationModeConstants.conversationModes.SKILL_START_PAGE_NEW_CONVERSATION;
      case skillConstantsEnum.GuidanceType.GUIDANCE_PAGE_CLICK:
        return conversationModeConstants.conversationModes.CLICK_GUIDANCE_NEW_CONVERSATION;
      case skillConstantsEnum.GuidanceType.SKILL_GUIDANCE_PAGE_CLICK:
        return conversationModeConstants.conversationModes.CLICK_SKILL_GUIDANCE_NEW_CONVERSATION;
      case skillConstantsEnum.GuidanceType.SUGGEST:
        return conversationModeConstants.conversationModes.SUGGEST;
      case skillConstantsEnum.GuidanceType.DOC_COPILOT:
        return conversationModeConstants.conversationModes.DOC_COPILOT;
      default:
        return conversationModeConstants.conversationModes.DEFAULT;
    }
  };
  require.d(exports, {
    getConversationMode: function () {
      return r;
    }
  });
}