// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useAiSpaceUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55681.af5b0033.js
         * chunkId: 55681
         * moduleId: 683743
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var chatInputEventHandler = require("chat-input-event-handler") /*id: 144822*/;
  let c = () => {
    let {
      chatId: e,
      chatType: t
    } = chatViewCoreSelectors.useChatViewConfig() || {};
    let n = chatStoreManager.useStoreSelector("chatInputStore", t => e ? t.activeSkillTypeMap[e] : undefined);
    let c = chatConversationSelectors.selectConvLink(e || "", t);
    let h = chatFgStoreHooks.getSourceValue("ab_config.ab_results.aispace_revert", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.setting
    });
    let f = chatFgStoreHooks.getSourceValue("input_upload_aispace_enable", {
      defaultValue: false,
      source: chatStorageKeys.chatStorageKeys.tea
    });
    return {
      enableAISpaceUpload: userInfoStatusSelectors.selectUserInfoSuccess_1() && h !== "0" && f && c && (!n || n === chatAppEnums.SkillType.ReadPDF) && true,
      showAISpaceUploadModal: () => {
        chatInputEventHandler.onEmptySlash();
      }
    };
  };
  require.d(exports, {
    useAiSpaceUpload: function () {
      return c;
    }
  });
}