// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C3' to 'getViewTypeName'
// - Renamed export 'Uw' to 'mapViewToEvent'
// - Renamed export 'nb' to 'getEntrySource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 556409
         */
module.exports = function (module, exports, require) {
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  let r = e => {
    if (e) {
      return {
        [chatViewConstants.chatViewConstants.GUIDANCE_PAGE]: "landing",
        [chatViewConstants.chatViewConstants.GUIDANCE_SUGGESTIONS]: "input_bar_entrance",
        [chatViewConstants.chatViewConstants.SIDEBAR]: "sidebar_skill",
        [chatViewConstants.chatViewConstants.DEFAULT]: "direct_enter",
        [chatViewConstants.chatViewConstants.NEW_USER_TASK]: "new_user_task",
        [chatViewConstants.chatViewConstants.CHAT_ACTION_BAR]: "chat_action_bar"
      }[e];
    }
  };
  let o = e => {
    if (e) {
      return {
        [chatViewConstants.chatViewConstants.GUIDANCE_PAGE]: "landing",
        [chatViewConstants.chatViewConstants.GUIDANCE_SUGGESTIONS]: "landing",
        [chatViewConstants.chatViewConstants.SIDEBAR]: "sidebar_skill",
        [chatViewConstants.chatViewConstants.DEFAULT]: "direct_enter",
        [chatViewConstants.chatViewConstants.NEW_USER_TASK]: "new_user_task",
        [chatViewConstants.chatViewConstants.CHAT_ACTION_BAR]: "chat_action_bar"
      }[e];
    }
  };
  let a = e => {
    if (e) {
      return {
        [chatViewConstants.chatViewConstants.GUIDANCE_PAGE]: "chat_action_bar_landing",
        [chatViewConstants.chatViewConstants.GUIDANCE_SUGGESTIONS]: "chat_action_bar_landing",
        [chatViewConstants.chatViewConstants.SIDEBAR]: "sidebar_skill_click",
        [chatViewConstants.chatViewConstants.DEFAULT]: "direct_enter",
        [chatViewConstants.chatViewConstants.NEW_USER_TASK]: "new_user_task",
        [chatViewConstants.chatViewConstants.CHAT_ACTION_BAR]: "chat_action_bar_click"
      }[e];
    }
  };
  require.d(exports, {
    getViewTypeName: function () {
      return o;
    },
    mapViewToEvent: function () {
      return a;
    },
    getEntrySource: function () {
      return r;
    }
  });
}