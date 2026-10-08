// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'usePasteHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 367899
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatInputMediaConfig = require("chat-input-media-config") /*id: 692098*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var gitRepoUrlValidator = require("git-repo-url-validator") /*id: 904797*/;
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  let _ = e => {
    let {
      validRemoteGithubUrl: t,
      editorValue: n,
      setEditorValue: _,
      attachmentStates: v,
      handleAddGithubLink: g,
      handleAddImages: b
    } = e;
    let y = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let {
      isDevMode: x
    } = codingSkillChatInput_3.useCodingChatInput();
    let C = y == null ? undefined : y.chatId;
    let w = y == null ? undefined : y.chatType;
    return {
      onPasteHandler: async e => {
        let l = e.clipboardData.getData("text").trim();
        let {
          files: f
        } = e.clipboardData;
        let y = gitRepoUrlValidator.isGithubUrl(l);
        let k = {
          from: "click",
          conversationId: w === chatConversationTypes.ConversationTypes.NewThread ? "" : C,
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
          botId: chatConversationBotId.getConversationBotId(C) || "",
          conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), C) || 1,
          skill_name: null,
          skill_id: "",
          chat_type: (w === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", C)) || "other_default",
          upload_way: "add_link",
          upload_collection_way: "single",
          upload_type: "github",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
          upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_LINK,
          collection_name: "",
          collection_id: "",
          code_scene: x ? "build" : "chat"
        };
        if (gitRepoUrlValidator.isChineseGitUrl(l)) {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...k,
            success: "false",
            error_code: "unsupport_repotype"
          });
        }
        if (gitRepoUrlValidator.isGitSshUrl(l)) {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...k,
            success: "false",
            error_code: "unsupport_repourl"
          });
        }
        if (y && v.length === 0) {
          e.preventDefault();
          let {
            valid: i,
            metaInfo: a
          } = await t(l);
          if (i) {
            g(l, JSON.stringify(a));
            return;
          }
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...k,
            meta_info: JSON.stringify(a),
            success: "false",
            error_code: "unsupport_repoprivate"
          });
          _({
            data: [...n.data, {
              type: chatFieldTypes.getFieldTypes.Text,
              text: l
            }]
          });
        }
        if (!isEmptyUtil.isEmpty(f)) {
          try {
            if (Array.from(f).map(e => e.type.split("/")[1]).every(e => chatInputMediaConfig.allowedImageTypes.includes(e))) {
              var E;
              if (e != null && (E = e.preventDefault) !== null && E !== undefined) {
                E.call(e);
              }
              b(e);
            }
          } catch (e) {}
        }
      }
    };
  };
  require.d(exports, {
    usePasteHandler: function () {
      return _;
    }
  });
}