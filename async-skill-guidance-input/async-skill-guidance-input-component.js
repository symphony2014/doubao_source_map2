// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'AsyncSkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 570915
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var chatDeepThinkingSwitch = require("chat-deep-thinking-switch") /*id: 458521*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var asyncSkillGuidanceInputHandler = require("async-skill-guidance-input-handler") /*id: 78769*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var uploadAttachmentAnalytics = require("upload-attachment-analytics") /*id: 324806*/;
  var asyncSkillChatWrapper = require("async-skill-chat-wrapper") /*id: 870474*/;
  var asyncSkillChatInputStore = require("async-skill-chat-input-store") /*id: 727801*/;
  let I = asyncSkillChatWrapper.wrapSkillChatInput(e => e.guidanceEditorValue);
  let M = e => {
    let {
      trySubmit: t,
      trackParams: n,
      attachmentStates: r,
      getPreGeneratedLocalMessageId: l,
      addLink: a
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let s = reactCoreLibraryReexport.useRef(null);
    let u = I();
    let d = uploadAttachmentAnalytics.getUploadAnalytics({
      attachmentStates: r
    });
    let c = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(async () => {
      teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
        upload_id: await l(),
        ...throttledPathFilterStringify.throttledPathStr(d, ["upload_file_size", "upload_collection_way", "upload_from"]),
        prompt_from: "keyboard"
      });
    }, 3000), [!!r]);
    let p = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: n
      });
    };
    let {
      handleKeyDown: f
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: u,
      onResetEditorValue: () => asyncSkillChatInputStore.chatInputStore.getState().updateGuidanceEditorValue({
        data: []
      }),
      onSubmit: () => t == null ? undefined : t(inputToolConverter.extractText(u.data)),
      onCloseSkillEvent: () => p(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    return {
      editorRef: s,
      editorProps: {
        value: u,
        placeholder: o("skill_dataAnalysis_input_placeholder"),
        onChange: e => {
          asyncSkillChatInputStore.chatInputStore.getState().updateGuidanceEditorValue(e);
        },
        onKeyDown: f,
        onPaste: e => {
          let t = e.clipboardData.getData("text");
          if (urlValidator.isValidUrl(t) && r.length === 0) {
            e.preventDefault();
            if (a != null) {
              a({
                url: t
              });
            }
            return;
          }
        },
        onInput: () => {
          c();
        }
      },
      closeEvent: p
    };
  };
  var asyncSkillGuidanceInputHook = require("async-skill-guidance-input-hook") /*id: 995921*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = "read-doc-send-msg-button";
  let O = e => {
    var t;
    let {
      chatId: n,
      chatType: S,
      className: C,
      sendMessageHoverText: E,
      skill: T,
      isToolButtonSmall: R,
      onBeforeSendMessage: P,
      onAfterSendMessage: N,
      trackParams: j,
      reportParams: O,
      removeRefContentEvent: A,
      ...B
    } = e;
    let F = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let W = reactCoreLibraryReexport.useRef(null);
    let {
      attachments: L,
      attachmentStates: V,
      deleteAttachment: U,
      reuploadAttachment: z,
      addLink: K,
      getPreGeneratedLocalMessageId: G,
      updatePreGeneratedLocalMessageId: H,
      handleFilesChange: J,
      clearAttachments: X,
      uploadWay: q
    } = asyncSkillGuidanceInputHook.useAsyncSkillGuidanceInput({
      onAttachmentsChange: () => {
        promiseDelayUtil.delayPromise(50).then(() => {
          var e;
          var t;
          if ((t = W.current) === null || t === undefined) {
            return undefined;
          } else if ((e = t.scrollToBottom) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t);
          }
        });
      }
    });
    let Q = ((t = T.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let Y = chatRefContentSelectors.useRefContent(n || "");
    let ee = (Y == null ? undefined : Y.channel) === `skill_${Q}` ? Y.refContents : [];
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...j
      });
    }, []);
    let et = I();
    let en = inputToolConverter.extractText(et.data);
    let {
      success: ei,
      tips: er
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: V,
      submitIgnoreUploadStatus: F
    });
    let {
      trySubmit: el,
      canSubmitWithAttachment: ea,
      canSubmitOnlyPrompt: eo
    } = asyncSkillGuidanceInputHandler.useSkillGuidanceInput({
      value: en,
      attachmentCanSend: ei,
      skill: T,
      attachmentStates: V,
      attachments: L,
      clearAttachments: X,
      getPreGeneratedLocalMessageId: G,
      updatePreGeneratedLocalMessageId: H,
      onBeforeSendMessage: P,
      onAfterSendMessage: N,
      trackParams: {
        ...j,
        upload_way: q
      },
      reportParams: O
    });
    let {
      editorRef: es,
      editorProps: eu,
      closeEvent: ed
    } = M({
      attachmentStates: V,
      trackParams: j,
      addLink: K,
      getPreGeneratedLocalMessageId: G,
      trySubmit: el
    });
    let ec = {
      sendMessageHoverText: er || E,
      sendMessageClassName: $,
      disableToSend: !ea && !eo,
      small: R,
      onClickSendButton: () => el(en)
    };
    let ep = isEmptyUtil.isEmpty(V) ? isEmptyUtil.isEmpty(ee) ? null : reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
      refContents: ee,
      removeRefContentEvent: A
    }) : reactJsxRuntimeCoreReexport.jsx("div", {
      children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        ref: W,
        showPresetPrompt: false,
        attachmentStates: V,
        onDeleteAttachment: e => U({
          index: e
        }),
        onRetryAttachment: e => z({
          index: e
        }),
        renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
          ...e
        })
      })
    });
    let ef = {
      type: "editor",
      chatId: n,
      chatType: S,
      getValue: () => et,
      isToolButtonSmall: R,
      onUpdateValue: eu.onChange,
      skill: T,
      trackParams: j
    };
    let {
      customButton: em,
      disableRightTools: ev
    } = chatAsrButtonHook.useChatAsrButton({
      scene: B == null ? undefined : B.scene,
      skill: T,
      temporaryShow: ec.disableToSend,
      onUpdateValue: ef.onUpdateValue,
      getValue: ef.getValue,
      onStopSubmit: () => ec.onClickSendButton()
    });
    let eh = () => ed(chatSkillExitEventTracker.EventInputTypes.Click);
    let e_ = {
      type: "editor",
      chatId: n,
      chatType: S,
      scene: B == null ? undefined : B.scene,
      skill: T,
      trackParams: j,
      onClickExitButton: eh,
      handleFilesChange: J,
      enableAiSpace: false
    };
    let {
      skillToolUIV2: eg
    } = chatLauncherConfigHooks.useSkillToolLayout(B == null ? undefined : B.scene);
    let ey = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (eg && B.showExitSkillButton) {
        e.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      e.push(chatDeepThinkingSwitch.deepThinkingSwitchKey);
      e.push(chatSkillPluginSymbols.simpleUploadFileSym);
      e.push(selectSkillBtnPluginId.selectSkillBtnId);
      return e;
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "skill-modal-read-doc-skill",
      children: reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
        ...B,
        enableDragUpload: true,
        customArea: ep,
        ref: es,
        className: C,
        editorProps: eu,
        dragUploadProps: {
          onDrop: e => {
            let {
              files: t
            } = e.dataTransfer || {};
            J([...t], {
              from: "drag",
              uploadWay: "drag_drop"
            });
          }
        },
        sendBtnProps: ec,
        leftTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
          toolButtonProps: e_,
          small: R,
          list: ey
        }),
        rightSendBtn: em,
        rightTools: ev ? null : reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
          identifier: asrToolButtonSymbol.asrToolButtonSymbol,
          ...ef
        }),
        onClickExitButton: eh,
        onCheckLoadSuccess: () => !!document.querySelector(`.${$}`),
        loadSuccessReportParams: {
          skillType: T.skill_type
        }
      })
    });
  };
  require.d(exports, {
    AsyncSkillGuidanceInput: function () {
      return O;
    }
  });
}