// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'conversationModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 545465
         */
module.exports = function (module, exports, require) {
  var i = {
    GENERIC_START_PAGE_NEW_CONVERSATION: "generic_start_page_new_conversation",
    CLICK_GUIDANCE_NEW_CONVERSATION: "guidance_new_conversation",
    SKILL_START_PAGE_NEW_CONVERSATION: "skill_start_page_new_conversation",
    CLICK_SKILL_GUIDANCE_NEW_CONVERSATION: "click_skill_guidance_new_conversation",
    SUGGEST: "suggest",
    DOC_COPILOT: "doc_copilot",
    DEFAULT: "normal_conversation"
  };
  require.d(exports, {
    conversationModes: function () {
      return i;
    }
  });
}