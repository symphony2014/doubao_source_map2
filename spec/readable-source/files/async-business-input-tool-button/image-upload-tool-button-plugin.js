// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'codingSkillChatUtils'
// - Resolved require(881555) to 'coding-skill-chat-utils'
// - Renamed variable 's' to 'chatGuestAccessControlHooks'
// - Resolved require(874237) to 'chat-guest-access-control-hooks'
// - Renamed variable 'c' to 'chatInputToolSupport'
// - Resolved require(780828) to 'chat-input-tool-support'
// - Renamed variable 'u' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'd' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'p' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'h' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'f' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'm' to 'codingSkillChatInput_1'
// - Resolved require(965068) to 'coding-skill-chat-input_1'
// - Renamed variable 'g' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'rtlSkillMessageIcon'
// - Resolved require(696859) to 'rtl-skill-message-icon'
// - Renamed variable 'b' to 'chatInputFileUploadButton'
// - Resolved require(333699) to 'chat-input-file-upload-button'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'x' to 'chatFileUploadHook'
// - Resolved require(541666) to 'chat-file-upload-hook'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'jw' to 'selectConvLink' (module 783144)
// - Updated imported property 'E5' to 'getUploadConfig' (module 793484)
// - Updated imported property 'AP' to 'usePreGeneratedMessageId' (module 793484)
// - Updated imported property 'S' to 'codingSkillChatFlag' (module 965068)
// - Updated imported property 'LW' to 'isValidSkillId' (module 881555)
// - Updated imported property 'vb' to 'isImageSendEnabled' (module 780828)
// - Updated imported property 'ri' to 'createGuestDisabledHandler' (module 874237)
// - Updated imported property 'p' to 'ChatInputFileUpload' (module 333699)
// - Updated imported property 'Z' to 'SkillMessageIcon' (module 696859)
// - Updated imported property 'EQ' to 'useFileUploadHook' (module 541666)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 322912
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codingSkillChatUtils = require("coding-skill-chat-utils") /*id: 881555*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlSkillMessageIcon = require("rtl-skill-message-icon") /*id: 696859*/;
  var chatInputFileUploadButton = require("chat-input-file-upload-button") /*id: 333699*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      className: t,
      onSubmitFiles: n,
      disabled: r
    } = e;
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatInputRef: x
    } = chatRefsContext.useChatRefs();
    let {
      chatId: C,
      chatType: k
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let S = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[C ?? ""]);
    let E = {
      skill_id: S,
      skill_name: skillTypeMappings.getSkillName(S)
    };
    let T = chatConversationBotId.getConversationBotId(C);
    let j = chatConversationSelectors.selectConvLink(C || "", k);
    let {
      enabledSendMultiFileMessage: P,
      enableImageVlm: N,
      uploadMultiEntityConf: {
        maxFileCount: R
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let I = P || codingSkillChatInput_1.codingSkillChatFlag;
    let O = j && I || codingSkillChatUtils.isValidSkillId(T) ? R : 1;
    let M = chatInputToolSupport.isImageSendEnabled(C ?? "", k);
    let {
      onClickGuestDisabled: D
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "unlog_click_upload",
      checkNewGuidanceAb: true
    });
    let A = (e, t) => {
      let i = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
      if (i && i.length !== 0) {
        n([...i], t);
      }
    };
    if (M && (!j || N)) {
      return reactJsxRuntimeCoreReexport.jsx(chatInputFileUploadButton.ChatInputFileUpload, {
        className: t,
        toolTip: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-11 leading-14",
          children: w("add_image")
        }),
        renderIcon: function ({
          className: e
        } = {}) {
          return reactJsxRuntimeCoreReexport.jsx(rtlSkillMessageIcon.SkillMessageIcon, {
            className: a("block", e)
          });
        },
        disableFocusListener: true,
        accept: ".png,.jpg,.jpeg",
        onOpenFileDialogInterceptor: D,
        disabled: r,
        borderlessTheme: true,
        onClick: async () => {
          var e;
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            upload_id: await attachmentUploadStoreHooks.usePreGeneratedMessageId({
              chatId: C ?? "",
              skillType: S
            }),
            button_name: "upload_pic",
            click_from: "chat_enter_bar"
          });
          teaAnalyticsEventTracker.trackEvent("click_upload_entrance", {
            bot_id: chatConversationBotId.getConversationBotId(C),
            ...E
          });
          if ((e = x.current) !== null && e !== undefined) {
            e.blur();
          }
        },
        multiple: O > 1,
        onFileChange: e => A(e, {
          from: "click",
          uploadWay: "browse_folder"
        })
      });
    } else {
      return null;
    }
  };
  var chatFileUploadHook = require("chat-file-upload-hook") /*id: 541666*/;
  let C = e => {
    let {
      className: t,
      enableUpload: n,
      disabled: i,
      onAfterSendMessage: r,
      beforeUpload: a
    } = e;
    let {
      uploadFiles: o
    } = chatFileUploadHook.useFileUploadHook({
      enableUpload: n,
      onAfterSendMessage: r,
      beforeUpload: a
    });
    return reactJsxRuntimeCoreReexport.jsx(w, {
      className: t,
      onSubmitFiles: o,
      disabled: i
    });
  };
  class k {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: C,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = C;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageUploadToolButtonPlugin: function () {
      return k;
    }
  });
}