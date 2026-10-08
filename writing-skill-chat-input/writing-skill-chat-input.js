// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'codingSkillChatInput'
// - Resolved require(989348) to 'coding-skill-chat-input'
// - Renamed variable 'a' to 'skillChatInputWrapper'
// - Resolved require(137475) to 'skill-chat-input-wrapper'
// - Renamed variable 's' to 'skillBarItemIcon'
// - Resolved require(276743) to 'skill-bar-item-icon'
// - Renamed variable 'c' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'u' to 'chatResponsiveSize'
// - Resolved require(836635) to 'chat-responsive-size'
// - Renamed variable 'd' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'p' to 'writeChatInputPanel'
// - Resolved require(7478) to 'write-chat-input-panel'
// - Renamed variable 'f' to 'asyncSkillGuidanceInputHandler_2'
// - Resolved require(343690) to 'async-skill-guidance-input-handler_2'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable '_' to 'writingChatInputController_1'
// - Resolved require(659572) to 'writing-chat-input-controller_1'
// - Renamed variable 'y' to 'chatAiTemplateParser'
// - Resolved require(635776) to 'chat-ai-template-parser'
// - Updated imported property 'Gj' to 'parseChatTemplate' (module 635776)
// - Updated imported property 'C' to 'writingChatInput' (module 659572)
// - Updated imported property 'o' to 'useAsyncSkillGuidanceInput' (module 343690)
// - Updated imported property 'z' to 'writingSendMsgButton' (module 343690)
// - Updated imported property 'y' to 'useChatScreenSize' (module 836635)
// - Updated imported property 'S' to 'SkillChatInput' (module 989348)
// - Updated imported property 'y' to 'SkillBarItemIcon' (module 276743)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'dr' to 'AttachmentFileAreaLazy' (module 22429)
// - Updated imported property 'b' to 'ChatInputWrapper' (module 137475)
// - Updated imported property 'S' to 'writeChatInputPanel' (module 7478)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: writing-skill-chat-input.e09279fd.js
         * chunkId: 73971
         * moduleId: 859879
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var codingSkillChatInput = require("coding-skill-chat-input") /*id: 989348*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var writeChatInputPanel = require("write-chat-input-panel") /*id: 7478*/;
  var asyncSkillGuidanceInputHandler_2 = require("async-skill-guidance-input-handler_2") /*id: 343690*/;
  var h = {
    "writing-skill-container": "writing-skill-container-FkuPWi",
    writingSkillContainer: "writing-skill-container-FkuPWi",
    right: "right-eHuDUL",
    bottom: "bottom-t0AIOg",
    left: "left-NJ8XVW",
    "overflow-popover": "overflow-popover-MTCVsP",
    overflowPopover: "overflow-popover-MTCVsP"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      chatId: n,
      chatType: r,
      className: v,
      editorClassName: g,
      disabled: _,
      sendMessageHoverText: y,
      skill: b,
      trackParams: T,
      reportParams: k,
      isToolButtonSmall: w,
      showHeader: S,
      showBanner: R,
      disableEditorModeSwitch: E,
      disableAsr: x,
      onKeyDown: $,
      onBeforeSendMessage: N,
      onAfterSendMessage: C,
      skillVariables: W,
      showStep: Z,
      showExitSkillButton: O,
      scene: P
    } = e;
    let j = reactCoreLibraryReexport.useRef(null);
    let {
      editorRefCallback: F,
      showHeader: I,
      skillHeaderProps: D,
      expandBtnText: M,
      popoverContainerProps: B,
      popoverProps: A,
      closeEvent: L,
      showAttachmentArea: H,
      attachmentStates: z,
      attachmentAreaRef: J,
      deleteAttachment: U,
      reuploadAttachment: K,
      leftTools: V,
      rightActions: X,
      editorProps: G,
      sendBtnProps: q
    } = asyncSkillGuidanceInputHandler_2.useAsyncSkillGuidanceInput({
      chatId: n,
      chatType: r,
      skill: b,
      disabled: _,
      showHeader: S,
      showBanner: R,
      reportParams: k,
      trackParams: T,
      isToolButtonSmall: w,
      sendMessageHoverText: y,
      disableEditorModeSwitch: E,
      disableAsr: x,
      showExitSkillButton: O,
      scene: P,
      onKeyDown: $,
      onAfterSendMessage: C,
      onBeforeSendMessage: N,
      showStep: Z,
      skillVariables: W,
      onHidePopover: e => {
        var t;
        if ((t = j.current) !== null && t !== undefined) {
          t.hidePopover(e);
        }
      }
    }, t);
    let Q = chatResponsiveSize.useChatScreenSize({
      sm: 419,
      md: 899
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      tabIndex: 0,
      "data-testid": "skill-modal-writing-skill",
      className: o(h["writing-skill-container"], h[Q], v),
      children: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInput.SkillChatInput, {
        ref: j,
        className: v,
        skillHeaderVisible: I,
        skillHeaderProps: {
          ...D,
          skill: b,
          icon: reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
            skill_type: chatAppEnums.SkillType.WriteAssistant
          }),
          closeEvent: L,
          background: "gray",
          expandBtnText: M
        },
        customArea: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: H && reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
              ref: J,
              showPresetPrompt: false,
              attachmentStates: z,
              onDeleteAttachment: e => U({
                index: e
              }),
              renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
                ...e
              }),
              onRetryAttachment: e => K({
                index: e
              })
            })
          })
        }),
        rightTools: !V && reactJsxRuntimeCoreReexport.jsx("div", {
          className: h.right,
          children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
            ...q,
            beforeNodes: X
          })
        }),
        ...B,
        popoverContent: reactJsxRuntimeCoreReexport.jsx(writeChatInputPanel.writeChatInputPanel, {
          ...A
        }),
        editorRef: F,
        editorProps: {
          className: g,
          ...G
        },
        onCheckLoadSuccess: () => !!document.querySelector(`.${asyncSkillGuidanceInputHandler_2.writingSendMsgButton}`),
        loadSuccessReportParams: {
          skillType: b == null ? undefined : b.skill_type
        },
        bottom: !!V && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: h.bottom,
          children: [V, reactJsxRuntimeCoreReexport.jsx("div", {
            className: h.right,
            children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
              ...q,
              beforeNodes: X
            })
          })]
        })
      })
    });
  });
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(v, {
      ref: t,
      ...e
    });
  });
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  var chatAiTemplateParser = require("chat-ai-template-parser") /*id: 635776*/;
  var b = g;
  require.r(exports);
  require.d(exports, {
    transformWritingTemplateIntoEditorValue: function () {
      return chatAiTemplateParser.parseChatTemplate;
    },
    default: function () {
      return b;
    },
    writingAssistantSkillFacade: function () {
      return writingChatInputController_1.writingChatInput;
    }
  });
}