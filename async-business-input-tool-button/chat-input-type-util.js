// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'getChatInputType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 237303
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  let o = e => {
    let {
      chatType: t
    } = e;
    let n = chatGuidanceSelectors.hasActiveSkill();
    let o = t === chatConversationTypes.ConversationTypes.NewThread && !n;
    let l = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    if (o) {
      return "new_chat_enter_chat_input";
    } else if (n) {
      return "side_bar_enter_chat_input";
    } else if (l) {
      return "canvas_chat_input";
    } else {
      return "regular_chat_input";
    }
  };
  require.d(exports, {
    getChatInputType: function () {
      return o;
    }
  });
}