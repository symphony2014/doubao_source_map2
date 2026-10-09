// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillGuidanceInputComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 70044
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var asyncSkillGuidanceInputHandler_2 = require("async-skill-guidance-input-handler_2") /*id: 343690*/;
  var writeChatInputPanel = require("write-chat-input-panel") /*id: 7478*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    var t;
    let {
      chatId: n,
      chatType: v,
      className: h,
      disabled: _,
      skill: g,
      trackParams: y,
      reportParams: k,
      sendMessageHoverText: w,
      isToolButtonSmall: b,
      showBanner: x,
      showHeader: S,
      onKeyDown: C,
      onAfterSendMessage: E,
      onBeforeSendMessage: T,
      showEditorModeSwitch: R,
      exitSkillAfterSendMessage: P,
      skillVariables: N,
      showStep: j,
      stepLabelText: I,
      disableEditorModeSwitch: M,
      removeRefContentEvent: D,
      ...Z
    } = e;
    let $ = reactCoreLibraryReexport.useRef(null);
    let {
      editorRefCallback: O,
      skillHeaderProps: A,
      expandBtnText: B,
      popoverContainerProps: F,
      popoverProps: W,
      closeEvent: L,
      showAttachmentArea: V,
      attachmentStates: U,
      attachmentAreaRef: z,
      deleteAttachment: K,
      reuploadAttachment: G,
      leftTools: H,
      rightActions: J,
      editorProps: X,
      sendBtnProps: q,
      toolButtonProps: Q
    } = asyncSkillGuidanceInputHandler_2.useAsyncSkillGuidanceInput({
      chatId: n,
      chatType: v,
      skill: g,
      disabled: _,
      reportParams: k,
      trackParams: y,
      isToolButtonSmall: b,
      sendMessageHoverText: w,
      showBanner: x,
      showHeader: S,
      onKeyDown: C,
      onAfterSendMessage: E,
      onBeforeSendMessage: T,
      isGuidanceInput: true,
      popoverRef: $,
      onHidePopover: e => {
        var t;
        if ((t = $.current) !== null && t !== undefined) {
          t.hidePopover(e);
        }
      },
      showEditorModeSwitch: R,
      exitSkillAfterSendMessage: P,
      skillVariables: N,
      showStep: j,
      stepLabelText: I,
      disableEditorModeSwitch: M,
      showExitSkillButton: Z.showExitSkillButton,
      scene: Z.scene
    });
    let Y = ((t = g.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let ee = chatRefContentSelectors.useRefContent(n || "");
    let et = (ee == null ? undefined : ee.channel) === `skill_${Y}` ? ee.refContents : [];
    let {
      handleKeyDown: en
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: X.value,
      onCloseSkillEvent: () => L(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    let {
      customButton: ei,
      disableRightTools: er
    } = chatAsrButtonHook.useChatAsrButton({
      scene: Z == null ? undefined : Z.scene,
      skill: g,
      temporaryShow: q.disableToSend && !_,
      onUpdateValue: Q.onUpdateValue,
      getValue: Q.getValue,
      onStopSubmit: () => q.onClickSendButton()
    });
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ref: O,
      ...Z,
      className: h,
      testId: "write_chat_input_panel",
      editorProps: {
        ...X,
        onKeyDown: e => {
          var t;
          if ((t = X.onKeyDown) !== null && t !== undefined) {
            t.call(X, e);
          }
          en(e);
        }
      },
      customArea: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [isEmptyUtil.isEmpty(et) ? null : reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
          refContents: et,
          removeRefContentEvent: D
        }), V && reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
            ref: z,
            showPresetPrompt: false,
            attachmentStates: U,
            onDeleteAttachment: e => K({
              index: e
            }),
            renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
              ...e
            }),
            onRetryAttachment: e => G({
              index: e
            })
          })
        })]
      }),
      rightTools: er ? null : J,
      rightSendBtn: ei,
      leftTools: H,
      popoverRef: $,
      ...F,
      popoverContent: F.popoverVisible !== false ? reactJsxRuntimeCoreReexport.jsx(writeChatInputPanel.writeChatInputPanel, {
        ...W
      }) : null,
      expandBtnText: B,
      onClickCollapseBtn: A.onClickCollapseBtn,
      onClickExpandBtn: A.onClickExpandBtn,
      sendBtnProps: q,
      onCheckLoadSuccess: () => !!document.querySelector(".writing-send-msg-button"),
      loadSuccessReportParams: {
        skillType: g == null ? undefined : g.skill_type
      },
      onClickExitButton: () => L(chatSkillExitEventTracker.EventInputTypes.Click)
    });
  };
  require.d(exports, {
    SkillGuidanceInputComponent: function () {
      return v;
    }
  });
}