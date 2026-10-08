// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'ChatInputUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 850654
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codingSkillChatUtils = require("coding-skill-chat-utils") /*id: 881555*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var useChatFileExtensions = require("use-chat-file-extensions") /*id: 896476*/;
  let w = reactCoreLibraryReexport.createContext({
    supportedFileTypes: []
  });
  let y = w.Provider;
  w.Consumer;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = e => {
    let {
      onClickClose: t,
      onClickUpload: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let l = useLatestCallbackHook_1.useLatestCallback(() => {
      teaAnalyticsEventTracker.trackEvent("pin_button_popup_click", {
        button_name: i("skill_copliotreading_2M_acknowledge")
      });
      if (t != null) {
        t();
      }
    });
    let o = useLatestCallbackHook_1.useLatestCallback(() => {
      teaAnalyticsEventTracker.trackEvent("pin_button_popup_click", {
        button_name: i("skill_copliotreading_2M_upload_now")
      });
      if (n != null) {
        n();
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "wrapper-OwzrMh",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title-RXFd16",
        children: i("skill_copliotreading_3M_promotion_title")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "desc-BO3d5C",
        children: i("skill_copliotreading_3M_promotion_content")
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "buttonGroup-iDZJO1",
        children: [reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          className: "cancelButton-GojYt9",
          onClick: l,
          children: i("skill_copliotreading_2M_acknowledge")
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          theme: "solid",
          type: "tertiary",
          className: "uploadButton-Oh_Ez1",
          onClick: o,
          children: i("skill_copliotreading_2M_upload_now")
        })]
      })]
    });
  };
  var chatInputFileUploadButton = require("chat-input-file-upload-button") /*id: 333699*/;
  let T = e => {
    let {
      disabled: t,
      onSubmitFiles: n,
      ultraLongTextGuideCanActive: w,
      hideUltraLongTextGuide: k,
      enableCodeSkillRelate: C,
      onFileChange: T,
      renderCustomButton: P,
      reportParams: R,
      onClick: E,
      disableTooltip: I,
      enableDropUpload: D = true,
      ...A
    } = e;
    let {
      chatInputRef: O
    } = chatRefsContext.useChatRefs();
    let {
      chatId: F,
      chatType: M
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let L = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[F ?? ""]);
    let z = chatConversationBotId.getConversationBotId(F);
    let B = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let W = chatInputToolSupport.isFileSendEnabled(F ?? "", M);
    let V = chatConversationSelectors.selectConvLink(F || "", M);
    let {
      enabledSendMultiFileMessage: Z,
      uploadMultiEntityConf: {
        maxFileCount: U
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let $ = Z || codingSkillChatInput_1.codingSkillChatFlag;
    let G = V && $ || codingSkillChatUtils.isValidSkillId(z) ? U : 1;
    let H = useChatFileExtensions.useChatFileExt({
      chatId: F,
      chatType: M,
      activeSkillType: L
    });
    let K = H.filter(e => !!e).map(e => `.${e}`).join(", ");
    let {
      supportedCodeFileTypesInFree: Q
    } = codeAssistantFileValidator.validateFileName();
    let X = reactCoreLibraryReexport.useMemo(() => C ? Q.join(",") : "", [Q, C]);
    let J = (e, t) => {
      let i = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
      if (i && i.length !== 0) {
        n([...i], t);
      }
    };
    let {
      onClickGuestDisabled: q
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "unlog_click_upload",
      checkNewGuidanceAb: true
    });
    let Y = !!B && t;
    let ee = reactCoreLibraryReexport.useRef(null);
    let et = useLatestCallbackHook_1.useLatestCallback(() => {
      var e;
      if (k != null) {
        k();
      }
      if ((e = ee.current) !== null && e !== undefined) {
        e.click();
      }
    });
    let en = useLatestCallbackHook_1.useLatestCallback(e => {
      if (e) {
        teaAnalyticsEventTracker.trackEvent("pin_button_popup_show");
      } else if (k != null) {
        k();
      }
    });
    let ei = reactCoreLibraryReexport.useMemo(() => w ? {
      popoverContent: reactJsxRuntimeCoreReexport.jsx(S, {
        onClickClose: k,
        onClickUpload: et
      }),
      popoverProps: {
        showArrow: true,
        style: {
          padding: 0
        },
        onVisibleChange: en
      }
    } : {}, [w]);
    return reactJsxRuntimeCoreReexport.jsxs(y, {
      value: {
        uploadButtonControllerRef: ee,
        supportedFileTypes: H
      },
      children: [W && reactJsxRuntimeCoreReexport.jsx(chatInputFileUploadButton.ChatInputFileUpload, {
        ref: ee,
        ...ei,
        ...A,
        toolTip: null,
        renderIcon: () => reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {
          className: A.useV3 ? "size-18 text-dbx-text-primary" : "size-16 text-dbx-text-primary"
        }),
        accept: `${K},${X}`,
        multiple: G > 1,
        onOpenFileDialogInterceptor: q,
        disabled: Y,
        onClick: async () => {
          var e;
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            upload_id: await attachmentUploadStoreHooks.usePreGeneratedMessageId({
              chatId: F ?? "",
              skillType: L
            }),
            button_name: "upload_file",
            click_from: "chat_enter_bar",
            ...R
          });
          teaAnalyticsEventTracker.trackEvent("click_upload_file_entrance", {
            bot_id: chatConversationBotId.getConversationBotId(F),
            current_page: "chat"
          });
          if ((e = O.current) !== null && e !== undefined) {
            e.blur();
          }
          if (E != null) {
            E();
          }
        },
        onFileChange: e => {
          if (T != null) {
            T();
          }
          J(e, {
            from: "click",
            uploadWay: "browse_folder"
          });
        },
        renderCustomButton: P
      }), !Y && D && reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        onDrop: e => {
          if (T != null) {
            T();
          }
          J(e, {
            from: "drag",
            uploadWay: "drag_drop"
          });
        },
        maxFileCount: G
      })]
    });
  };
  require.d(exports, {
    ChatInputUpload: function () {
      return T;
    }
  });
}