// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getCocoConversationState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 425443
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var asyncBusinessLayoutHook = require("async-business-layout-hook") /*id: 924861*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  let c = function (e = "") {
    let t = chatConversationSelectors.selectConversation(e);
    let n = chatConversationCheckers.isCocoConversation(t);
    let c = asyncBusinessLayoutHook.useBusinessLayout(e);
    let {
      isLandingToMainCoco: d
    } = chatAbConfigSelectors.useChatAbSelectors();
    let u = Number((t == null ? undefined : t.message_index) || (t == null ? undefined : t.badge_count) || 0) < Number((t == null ? undefined : t.message_cursor) || 0);
    let h = chatMessageStoreFactory.createMessageStore(t => isEmptyUtil.isEmpty(t.messageLinkMap[e || ""]));
    if (n && d) {
      return {
        loading: !u && h,
        showConversationGuidancePage: u && h || c
      };
    } else {
      return {};
    }
  };
  require.d(exports, {
    getCocoConversationState: function () {
      return c;
    }
  });
}