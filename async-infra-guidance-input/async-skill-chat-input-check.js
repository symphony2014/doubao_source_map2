// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'validateSkillInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 772791
         */
module.exports = function (module, exports, require) {
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var hasSpreadsheetOrCsvAttachments = require("has-spreadsheet-or-csv-attachments") /*id: 836052*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  let c = async (e, t, n, c, d) => {
    let f = hasSpreadsheetOrCsvAttachments.hasSpreadsheetOrCsvAttachments({
      attachments: c,
      refContents: d
    });
    let {
      isSuperTaskEnableByConvId: h,
      isSidebarModeEnable: m,
      taskAbConfig: v
    } = superTaskStore.getSuperTaskStore().getState();
    let g = !docPlaygroundCheck.isDocPlayground() && h(e || undefined) && v.enable && !m() && !t;
    let y = chatConversationSelectors_2.getLocalConversation(chatFeedStoreFactory.useFeedStore.getState(), e) ?? chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), e);
    return (await aiChatSkillConversationChecker.isValidSkillType(t)) && !g && !f && chatConversationCheckers.isSupportedConv(y, n);
  };
  require.d(exports, {
    validateSkillInput: function () {
      return c;
    }
  });
}