// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'isCodeSkillEnabled'
// - Renamed export 'pO' to 'isFileSendEnabled'
// - Renamed export 'vb' to 'isImageSendEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 780828
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let c = (e, t) => {
    var l;
    var c;
    let {
      launchData: u
    } = chatStoreManager.useStoreSelector("launcherRawSettingStore");
    let d = (c = u == null ? undefined : (l = u.feature_config) === null || l === undefined ? undefined : l.enable_send_file_message?.enabled) !== null && c !== undefined && c;
    let p = chatConversationSelectors.getConversationBase()?.conversationId;
    let h = chatConversationSelectors.getBotConfig(t === chatConversationTypes.ConversationTypes.NewThread ? p ?? "" : e, t);
    let f = chatConversationSelectors.selectConvLink(e, t);
    let m = reactCoreLibraryReexport.useMemo(() => h == null ? undefined : h.some(e => e.conf_group_key === "show_icon" && e.conf_key === "show_file_icon" && e.conf_value === "1"), [h]);
    return !!f || !!m && !!d;
  };
  let u = (e, t) => {
    let a = chatConversationSelectors.getConversationBase()?.conversationId;
    let l = chatConversationSelectors.getBotConfig(t === chatConversationTypes.ConversationTypes.NewThread ? a ?? "" : e, t);
    let s = chatConversationSelectors.selectConvLink(e, t);
    let c = reactCoreLibraryReexport.useMemo(() => l == null ? undefined : l.some(e => {
      let t = e.conf_group_key;
      let n = e.conf_key;
      let i = e.conf_value;
      return t === "show_icon" && n === "show_image_icon" && i === "1" || t === "show_icon" && n === "show_icon" && !!["album", "camera"].includes(i || "");
    }), [l]);
    return !!s || !!c;
  };
  let d = e => {
    let {
      chatId: t,
      chatType: n,
      skillType: i,
      exemptFromCodingReverse: r = false
    } = e;
    let c = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return chatConversationSelectors.selectConvLink(t || "", n) && !i && c && (chatStoreManager.getStoreState("chatInputStore").checkSupportSkill(chatAppEnums.SkillType.CodeAssistant) || r && true);
  };
  require.d(exports, {
    isCodeSkillEnabled: function () {
      return d;
    },
    isFileSendEnabled: function () {
      return c;
    },
    isImageSendEnabled: function () {
      return u;
    }
  });
}