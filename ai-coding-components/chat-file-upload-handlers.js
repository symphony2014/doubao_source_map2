// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useUploadHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 936472
         */
module.exports = function (module, exports, require) {
  var skillChatFileUpload = require("skill-chat-file-upload") /*id: 492056*/;
  var codingSkillDirectoryUpload = require("coding-skill-directory-upload") /*id: 954181*/;
  var codingSkillGithubLinkHandler = require("coding-skill-github-link-handler") /*id: 714583*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var chatInputMediaConfig = require("chat-input-media-config") /*id: 692098*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  let S = e => {
    var t;
    return !!e && (e == null ? undefined : (t = e.type) === null || t === undefined ? undefined : t.indexOf("image")) !== -1;
  };
  let E = e => {
    let {
      attachmentStates: t,
      addAttachment: n,
      isNewThread: i,
      chatId: r,
      conversationId: a,
      skillType: E,
      skillId: T,
      getPreGeneratedLocalMessageId: j,
      clearRefContent: P,
      setUploadedFileType: N,
      trackExtraParams: R
    } = e;
    let I = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let O = function (e, t) {
      let n = i18nTranslationUtils.useTranslationWithFallback();
      let i = chatToastFactoryHook.useToastFactory();
      let r = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
        return e.currentChatViewConfig?.chatId;
      });
      let {
        enableImageVlm: a,
        uploadMultiEntityConf: {
          maxImageCount: u,
          maxImageSize: d
        }
      } = attachmentUploadStoreHooks.getUploadConfig();
      let p = codingChatFileUpload.getUploadValidator(r, false);
      let h = reactCoreLibraryReexport.useCallback(t => {
        let n = getFileExtension.getFileExtension(t.name);
        return e.includes(n);
      }, [e]);
      return (e, r, o) => {
        let {
          trackParams: l
        } = o;
        if (!p(e, r, {
          maxFileCount: t || u,
          maxImageCount: t || u,
          trackParams: l,
          enableImageVlm: a
        })) {
          return [];
        }
        let s = e.filter(e => !h(e));
        let c = e.filter(e => !s.includes(e));
        let f = c.filter(e => e.size > d);
        let m = c.filter(e => !f.includes(e));
        s.forEach(e => {
          i.error(n("read_file_type_error", {
            postProcess: "sprintf",
            sprintf: [e.name]
          }));
        });
        f.forEach(e => {
          if (a) {
            S(e);
          }
          let t = d;
          i.error(n("file_size_over_limit", {
            postProcess: "sprintf",
            sprintf: [e.name, infraUtilFunctions.formatBytesSize(t)]
          }));
        });
        f.forEach(e => {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...l,
            status: "0",
            error_code: a && S(e) ? `image_is_over_${d}` : "file_is_over_50mb",
            collection_name: e.name,
            upload_type: S(e) ? "pic" : "pdf",
            upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
            upload_file_size: String(e.size)
          });
        });
        return m;
      };
    }(chatInputMediaConfig.allowedImageTypes, chatInputMediaConfig.fileLimit);
    let M = {
      conversation_id: i ? "" : r ?? "",
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), a) || 1,
      chat_type: (i ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", r)) || "other_default",
      skill_name: E ? skillTypeMappings.getSkillName(E) : "",
      skill_id: T,
      uploadWay: "browse_folder",
      upload_type: "file",
      upload_token_length: "",
      upload_from: "upload_pinbutton",
      click_from: "click",
      botId: chatConversationBotId.getConversationBotId(a) || I || "",
      ...R
    };
    return {
      handleAddImages: async e => {
        let s = "browse_folder";
        let c = null;
        if (e.type === "change") {
          c = Array.from(e.target.files || []);
        } else if (e.type === "drop") {
          c = Array.from(e.dataTransfer?.files || []);
          s = "drag_drop";
        } else if (e.type === "paste") {
          c = Array.from(e.clipboardData?.files || []);
          s = "paste";
        }
        if (c) {
          let o = await O(c, t, {
            trackParams: M
          });
          if (!(o == null ? undefined : o.length)) {
            return;
          }
          for (let l of o) {
            await n({
              file: l,
              type: "image",
              ctx: {
                conversationId: i ? "" : r ?? "",
                chatType: (i ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", r)) || "other_default",
                skillType: E || 0,
                skillId: T || "",
                uploadFrom: "upload_pinbutton",
                botId: chatConversationBotId.getConversationBotId(a) || I || "",
                uploadWay: s,
                from: "click",
                uploadCollectionWay: c.length + t.length > 1 ? "multi" : "single",
                uploadId: await j(),
                extraParams: {
                  code_scene: (R == null ? undefined : R.code_scene) || "chat",
                  upload_file_type: "fileType" in e ? e.fileType : "image"
                }
              }
            });
            if (N != null) {
              N(skillMessageTypes.resourceTypes.FILE);
            }
          }
          if (P != null) {
            P();
          }
        }
      }
    };
  };
  let T = e => {
    let {
      handleAddFiles: t
    } = skillChatFileUpload.chatFileUpload(e);
    let {
      handleAddDir: n
    } = codingSkillDirectoryUpload.useDirectoryUpload(e);
    let {
      handleAddGithubLink: o
    } = codingSkillGithubLinkHandler.githubLinkHandler(e);
    let {
      handleAddImages: l
    } = E(e);
    return {
      handleAddFiles: t,
      handleAddDir: n,
      handleAddGithubLink: o,
      handleAddImages: l
    };
  };
  require.d(exports, {
    useUploadHandlers: function () {
      return T;
    }
  });
}