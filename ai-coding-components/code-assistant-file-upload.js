// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'createUploadHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 155525
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let x = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatToastFactoryHook.useToastFactory();
    return n => {
      let {
        fileList: i,
        attachmentStates: r,
        toastImmediately: a = false,
        trackParams: o,
        maxFileCount: l,
        maxSingleFileSize: s
      } = n;
      let c = [];
      let u = [];
      let d = [];
      let p = [];
      let f = {
        abort: false,
        warningList: d,
        filterFileList: [],
        errorList: p
      };
      i = i.filter(e => {
        let t = true;
        if (e.size <= 0) {
          t = false;
          if (o) {
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...o,
              status: "0",
              error_code: "empty_file",
              collection_name: e.name,
              upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
              upload_file_size: String(e.size)
            });
          }
          c.push(e);
        } else if (e.size > s) {
          t = false;
          if (o) {
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...o,
              status: "0",
              error_code: "file_is_over_200kb",
              collection_name: e.name,
              upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
              upload_file_size: String(e.size)
            });
          }
          u.push(e);
        }
        return t;
      });
      if (c.length > 0) {
        let n = c.length === 1 ? e("cici_web_ai_coding_file_null_limit", {
          postProcess: "sprintf",
          sprintf: [c[0].name]
        }) : e("cici_web_ai_coding_file_null_limit_mutiple", {
          postProcess: "sprintf",
          sprintf: [c[0].name, c.length]
        });
        d.push(n);
        if (a) {
          t.warning(n);
        }
      }
      if (i.length + r.length > l) {
        let n = e("web_ai_coding_data_file_num_limit", {
          s_datafile_num: l
        });
        t.error(n);
        p.push(n);
        f.abort = true;
      }
      if (u.length >= 1) {
        let n = e("web_ai_coding_data_file_size_limit", {
          s_datafile_size: infraUtilFunctions.formatBytesSize(s)
        });
        d.push(n);
        if (a) {
          t.warning(n);
        }
      }
      if (!i.length) {
        f.abort = true;
      }
      f.filterFileList = i;
      return f;
    };
  };
  let C = e => {
    let {
      onAttachmentsChange: t,
      attachmentStates: n,
      addAttachment: d,
      getPreGeneratedLocalMessageId: h,
      codeScene: f
    } = e;
    let _ = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil.deepEqual);
    let b = _ == null ? undefined : _.chatId;
    let y = _ == null ? undefined : _.chatType;
    let w = chatFgStoreHooks.getSourceValue("code_assistant_config.data_analysis_config.max_file_count", {
      source: chatStorageKeys.chatStorageKeys.setting
    }) || 10;
    let C = chatFgStoreHooks.getSourceValue("code_assistant_config.data_analysis_config.max_single_file_size", {
      source: chatStorageKeys.chatStorageKeys.setting
    }) || 1073741824;
    let k = x();
    return {
      handleAddCiFiles: async (e, i) => {
        let {
          files: o
        } = e.target;
        if (!(o == null ? undefined : o.length)) {
          return;
        }
        let m = Array.from(o);
        let g = {
          conversation_id: b,
          conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), b) || 1,
          chat_type: y,
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.CodeAssistant),
          skill_id: String(chatAppEnums.SkillType.CodeAssistant),
          upload_id: await h(),
          duration: "0",
          uploadWay: "browse_folder",
          upload_type: "data_file",
          upload_from: i || skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
          upload_token_length: ""
        };
        let {
          filterFileList: _,
          abort: x
        } = await k({
          fileList: m,
          attachmentStates: n,
          trackParams: g,
          toastImmediately: true,
          maxFileCount: w,
          maxSingleFileSize: C
        });
        if (!x) {
          _.forEach(async e => {
            await (d == null ? undefined : d({
              file: e,
              type: "file",
              ctx: {
                conversationId: y === chatConversationTypes.ConversationTypes.NewThread ? "" : b ?? "",
                chatType: (y === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", b)) || "other_default",
                skillType: chatAppEnums.SkillType.CodeAssistant,
                skillId: String(chatAppEnums.SkillType.CodeAssistant),
                uploadFrom: i || skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()),
                uploadWay: "browse_folder",
                from: "click",
                uploadType: "data_file",
                uploadCollectionWay: o.length + n.length > 1 ? "multi" : "single",
                uploadId: await h(),
                extraParams: {
                  code_scene: f || "chat",
                  upload_file_type: "data_file"
                }
              }
            }));
          });
          if (t != null) {
            t();
          }
        }
      }
    };
  };
  require.d(exports, {
    createUploadHandler: function () {
      return C;
    }
  });
}