// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'ReadDocSkillInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 392848
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var fileUploadHandlerHook = require("file-upload-handler-hook") /*id: 249388*/;
  var aiSpaceAttachmentPopoverButton = require("ai-space-attachment-popover-button") /*id: 769458*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatInputButtonContext = require("chat-input-button-context") /*id: 414026*/;
  var searchSkillOverflowList = require("search-skill-overflow-list") /*id: 412695*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var skillPinIcon_1 = require("skill-pin-icon_1") /*id: 646133*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var textLinkParser = require("text-link-parser") /*id: 266843*/;
  var attachmentUploadMetadataExtractor = require("attachment-upload-metadata-extractor") /*id: 826432*/;
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  var skillEditorSelectors = require("skill-editor-selectors") /*id: 505497*/;
  let O = e => {
    let {
      attachmentStates: t,
      trackParams: n,
      getPreGeneratedLocalMessageId: r,
      trySubmit: l,
      addLink: a,
      onKeyDown: o
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let u = skillEditorSelectors.selectGuidanceValue();
    let d = attachmentUploadMetadataExtractor.extractUploadMetadata({
      attachmentStates: t
    });
    let c = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(async () => {
      teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
        upload_id: await r(),
        ...throttledPathFilterStringify.throttledPathStr(d, ["upload_file_size", "upload_collection_way", "upload_from"]),
        prompt_from: "keyboard"
      });
    }, 3000), [!!t]);
    let p = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        ...n
      });
    };
    let f = reactCoreLibraryReexport.useRef(null);
    let {
      handleKeyDown: m
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: u,
      onResetEditorValue: () => skillEditorStateStores.skillEditorStore.getState().updateGuidanceEditorValue({
        data: []
      }),
      onSubmit: () => l == null ? undefined : l(inputToolConverter.extractText(u.data)),
      onCloseSkillEvent: () => p(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    return {
      editorRef: f,
      editorProps: {
        value: u,
        placeholder: s("landing_creation_inputmessage_pdf"),
        onChange: e => {
          skillEditorStateStores.skillEditorStore.getState().updateGuidanceEditorValue(e);
        },
        onKeyDown: async e => {
          await (o == null ? undefined : o(e));
          m(e);
        },
        onPaste: e => {
          let n = e.clipboardData.getData("text");
          let i = textLinkParser.parseTextLinks(n.trim());
          if (i.length === 1 && i[0].type === textLinkParser.tokenTypes.link && (t == null ? undefined : t.length) === 0) {
            e.preventDefault();
            if (a != null) {
              a(n.trim());
            }
            return;
          }
        },
        onInput: () => {
          c();
        },
        autoComplete: "off"
      },
      closeEvent: p
    };
  };
  var pdfLinkInputModalHook = require("pdf-link-input-modal-hook") /*id: 212354*/;
  var skillEntranceClickTrack = require("skill-entrance-click-track") /*id: 111111*/;
  var chatSkillMessageSendHook = require("chat-skill-message-send-hook") /*id: 216848*/;
  var usePdfSkillAttachmentHandler = require("use-pdf-skill-attachment-handler") /*id: 66476*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let V = "read-doc-send-msg-button";
  let U = e => {
    var t;
    let {
      className: n,
      chatId: N,
      chatType: j,
      skill: I,
      trackParams: M,
      reportParams: D,
      isToolButtonSmall: Z,
      removeRefContentEvent: U,
      onKeyDown: z,
      onBeforeSendMessage: K,
      onAfterSendMessage: G,
      defaultSendValue: H = "",
      ...J
    } = e;
    let X = i18nTranslationUtils.useTranslationWithFallback();
    let q = ((t = I.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let Q = I.skill_type || 0;
    let Y = reactCoreLibraryReexport.useRef(null);
    let {
      handleFilesChange: ee,
      handleFileLinkChange: et,
      getPreGeneratedLocalMessageId: en,
      updatePreGeneratedLocalMessageId: ei,
      attachments: er,
      attachmentKeys: el,
      attachmentStates: ea,
      deleteAttachment: eo,
      reuploadAttachment: es,
      clearAttachments: eu,
      uploadWay: ed,
      addLink: ec
    } = usePdfSkillAttachmentHandler.usePdfSkillAttachmentHandler({
      skill: I,
      onAttachmentChange: () => {
        promiseDelayUtil.delayPromise(50).then(() => {
          var e;
          var t;
          if ((t = Y.current) === null || t === undefined) {
            return undefined;
          } else if ((e = t.scrollToBottom) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t);
          }
        });
      }
    });
    let ep = chatRefContentSelectors.useRefContent(N || "");
    let ef = (ep == null ? undefined : ep.channel) === `skill_${q}` ? ep.refContents : [];
    let {
      success: em,
      tips: ev
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: ea,
      scene: "sendMessageButton"
    });
    let eh = skillEditorSelectors.selectGuidanceValue();
    let e_ = inputToolConverter.extractText(eh.data);
    let {
      trySubmit: eg,
      disableToSend: ey
    } = chatSkillMessageSendHook.useChatSkillMessageSend({
      value: e_,
      skill: I,
      clearAttachments: eu,
      getPreGeneratedLocalMessageId: en,
      attachmentStates: ea,
      attachments: er,
      attachmentKeys: el,
      attachmentCanSend: em,
      onBeforeSendMessage: K,
      onAfterSendMessage: G,
      trackParams: {
        ...M,
        upload_way: ed
      },
      reportParams: D,
      onAfterSubmit: () => {
        ei();
        eu({});
        ei();
      },
      scene: "read_guidance_chat_input"
    });
    let {
      editorRef: ek,
      editorProps: ew,
      closeEvent: eb
    } = O({
      attachmentStates: ea,
      trackParams: M,
      getPreGeneratedLocalMessageId: en,
      trySubmit: eg,
      addLink: e => ec({
        url: e
      }),
      onKeyDown: z
    });
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...M
      });
    }, []);
    if (!I) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[ReadDocSkillInput]: skill_not_found",
        error: Error("[ReadDocSkillInput]: skill_not_found")
      });
      return null;
    }
    let ex = async (e, t) => {
      let n = chatInputAiFeatureConstants.featureActionNameMap[t] || e;
      let i = ea.reduce((e, t) => e + (t.size || 0), 0);
      let l = isEmptyUtil.isEmpty(ea) ? "" : ea.length === 1 ? "single" : "multi";
      let a = isEmptyUtil.isEmpty(ea) ? undefined : skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE;
      teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
        upload_id: await en(),
        upload_file_size: String(i),
        upload_collection_way: l,
        upload_from: isEmptyUtil.isEmpty(ea) ? undefined : a,
        prompt_content: n,
        prompt_from: "quick_actions",
        file_type: ea.map(e => getFileExtension.getFileExtension(e.fileName)).join(",")
      });
      eg(e, t);
    };
    let eS = isEmptyUtil.isEmpty(ea) ? isEmptyUtil.isEmpty(ef) ? null : reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
      refContents: ef,
      removeRefContentEvent: U
    }) : reactJsxRuntimeCoreReexport.jsx("div", {
      children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        ref: Y,
        attachmentStates: ea,
        onDeleteAttachment: e => eo({
          index: e
        }),
        onRetryAttachment: e => es({
          index: e
        }),
        onClickPresetPrompt: ex,
        renderArea: e => e.attachmentStates.every(e => e.type === "image") ? reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
          ...e
        }) : reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e
        }),
        trackParams: {
          ...M,
          skill_id: q,
          skill_name: skillTypeMappings.getSkillName(Q)
        }
      })
    });
    let eC = {
      small: Z,
      sendMessageHoverText: ev || X("send_button_hover_text"),
      sendMessageClassName: V,
      disableToSend: ey,
      onClickSendButton: () => eg(e_ || H)
    };
    let {
      handleClickButton: eE,
      inputElement: eT
    } = fileUploadHandlerHook.useFileUpload({
      onClickTrack: skillEntranceClickTrack.trackSkillEntrance,
      onFilesChange: e => {
        ee(e, {
          from: "click",
          uploadWay: "browse_folder"
        });
      },
      testId: "read-doc-guidance-file-input"
    });
    let {
      handleClickButton: eR,
      inputModalElement: eP
    } = pdfLinkInputModalHook.usePdfLinkInputModal({
      onSubmit: et
    });
    let eN = {
      type: "editor",
      chatId: N,
      chatType: j,
      isToolButtonSmall: Z,
      getValue: () => ew.value,
      onUpdateValue: ew.onChange
    };
    let ej = [e => reactJsxRuntimeCoreReexport.jsxs(semiTooltipWrapper.SemiTooltip, {
      content: X("chat_inputBox_tooltip_uploadFile"),
      disableFocusListener: true,
      children: [reactJsxRuntimeCoreReexport.jsx(chatInputButtonContext.ChatInputButton, {
        ...e,
        renderIcon: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(skillPinIcon_1.SkillPinIcon, {
            className: t
          });
        },
        title: undefined,
        buttonProps: {
          "data-testid": "upload_file_button"
        },
        onMouseUp: () => {
          eE();
        }
      }), eT]
    }), e => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(chatInputButtonContext.ChatInputButton, {
        ...e,
        renderIcon: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: t
          });
        },
        title: X("skill_pdf_label_file_link"),
        buttonProps: {
          "data-testid": "ai_reading_add_link_btn"
        },
        onMouseUp: () => eR()
      }), eP]
    }), e => reactJsxRuntimeCoreReexport.jsx(aiSpaceAttachmentPopoverButton.AiSpaceAttachmentPopoverButton, {
      size: e.small ? "small" : "medium",
      scene: "toolbtn"
    }), e => reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
      identifier: selectSkillBtnPluginId.selectSkillBtnId,
      ...eN,
      ...e,
      isToolButtonSmall: e.small
    })];
    let eI = reactJsxRuntimeCoreReexport.jsx(searchSkillOverflowList.SkillOverflowList, {
      small: Z,
      list: ej
    });
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ...J,
      className: n,
      testId: "skill-modal-read-and-summarize",
      enableDragUpload: true,
      customArea: eS,
      ref: ek,
      dragUploadProps: {
        onDrop: e => {
          let {
            files: t
          } = e.dataTransfer || {};
          ee([...t], {
            from: "drag",
            uploadWay: "drag_drop"
          });
        }
      },
      sendBtnProps: eC,
      editorProps: ew,
      leftTools: eI,
      rightTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: asrToolButtonSymbol.asrToolButtonSymbol,
        ...eN
      }),
      onClickExitButton: () => eb(chatSkillExitEventTracker.EventInputTypes.Click),
      onCheckLoadSuccess: () => !!document.querySelector(`.${V}`),
      loadSuccessReportParams: {
        skillType: I.skill_type
      }
    });
  };
  require.d(exports, {
    ReadDocSkillInput: function () {
      return U;
    }
  });
}