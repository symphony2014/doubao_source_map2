// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$B' to 'isSamanthaSkillType'
// - Renamed export 'Jm' to 'isValidMessageForSamantha'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 19807
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = e => [aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoListSummary, aiAssistantSkillTypes.SamanthaTypes.SamanthaCommentAnalyze, aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoDeepAnalyze, aiAssistantSkillTypes.SamanthaTypes.SamanthaTopicTrendAnalyze].some(t => {
    return `${t}` == `${e == null ? undefined : e.ext?.input_content_type}`;
  });
  let l = e => (!!messageContentTypeAndStatusChecker.esE(e) || !!o(e)) && !messageContentTypeAndStatusChecker.pEk(e);
  require.d(exports, {
    isSamanthaSkillType: function () {
      return o;
    },
    isValidMessageForSamantha: function () {
      return l;
    }
  });
}