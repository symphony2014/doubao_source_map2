// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'pptEditorController'
// - Resolved require(523959) to 'ppt-editor-controller'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'skillChatInputHooks'
// - Resolved require(354217) to 'skill-chat-input-hooks'
// - Renamed variable 's' to 'codingSkillChatInput'
// - Resolved require(989348) to 'coding-skill-chat-input'
// - Renamed variable 'u' to 'skillChatInputWrapper'
// - Resolved require(137475) to 'skill-chat-input-wrapper'
// - Renamed variable 'c' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Renamed variable 'd' to 'skillToolButtonRenderer'
// - Resolved require(812051) to 'skill-tool-button-renderer'
// - Renamed variable 'p' to 'skillBarItemIcon'
// - Resolved require(276743) to 'skill-bar-item-icon'
// - Renamed variable 'f' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'x' to 'semiTooltipWrapper'
// - Resolved require(905177) to 'semi-tooltip-wrapper'
// - Renamed variable '_' to 'smartTextareaWithFormFieldWrapper'
// - Resolved require(126704) to 'smart-textarea-with-form-field-wrapper'
// - Renamed variable 'E' to 'rtlInfoIcon'
// - Resolved require(853560) to 'rtl-info-icon'
// - Renamed variable 'k' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 'y' to 'skillGuidanceChatSender'
// - Resolved require(964748) to 'skill-guidance-chat-sender'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'y' to 'PPTEditorController' (module 523959)
// - Updated imported property 'v' to 'getEventEmitter' (module 740547)
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'q' to 'createSkillChatSender' (module 964748)
// - Updated imported property 'z' to 'useSkillChatInput' (module 354217)
// - Updated imported property 'S' to 'SkillChatInput' (module 989348)
// - Updated imported property 'y' to 'SkillBarItemIcon' (module 276743)
// - Updated imported property 's' to 'SemiTooltip' (module 905177)
// - Updated imported property 'Z' to 'RtlInfoIcon' (module 853560)
// - Updated imported property 'N' to 'SmartTextArea' (module 126704)
// - Updated imported property 'b' to 'ChatInputWrapper' (module 137475)
// - Updated imported property 'mD' to 'ToolButtonList' (module 812051)
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-skill-chat-input.e0770ec9.js
         * chunkId: 59486
         * moduleId: 657766
         */
module.exports = function (module, exports, require) {
  var pptEditorController = require("ppt-editor-controller") /*id: 523959*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var codingSkillChatInput = require("coding-skill-chat-input") /*id: 989348*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function b(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class g extends eventEmitterWrapper_1.getEventEmitter {
    constructor(...e) {
      super(...e);
      b(this, "editorRef", null);
      b(this, "bindPptEditorRef", e => {
        this.editorRef = e;
      });
      b(this, "unbindPptEditorRef", () => {
        this.editorRef = null;
      });
      b(this, "focusOnPptEditor", () => {
        if (this.editorRef) {
          this.editorRef.focus();
        }
      });
    }
  }
  let w = new g();
  var skillGuidanceChatSender = require("skill-guidance-chat-sender") /*id: 964748*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = "ppt-send-msg-button";
  let N = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      sendMessageHoverText: r,
      skill: o,
      trackParams: k,
      reportParams: b,
      isToolButtonSmall: g,
      showHeader: w,
      disabled: N,
      onKeyDown: R,
      onBeforeSendMessage: j,
      onAfterSendMessage: P
    } = e;
    let T = chatGuidanceSelectors.hasActiveSkill();
    let Z = i18nTranslationUtils.useTranslationWithFallback();
    let [B, O] = reactCoreLibraryReexport.useState("");
    let D = reactCoreLibraryReexport.useRef(null);
    let W = reactCoreLibraryReexport.useRef(null);
    let F = () => {
      teaAnalyticsEventTracker.trackEvent("skill_module_close", {
        ...k,
        upload_collection_way: "",
        collection_name: "",
        upload_file_type: "",
        upload_token_length: ""
      });
    };
    let M = skillGuidanceChatSender.createSkillChatSender({
      skill: o,
      closeEvent: F,
      reportParams: b,
      clearInput: () => {
        var e;
        O("");
        if ((e = $.current) !== null && e !== undefined) {
          e.blur();
        }
      },
      onAfterSendMessage: P,
      onBeforeSendMessage: j
    });
    let {
      textAreaRef: $,
      textAreaProps: I,
      submit: H
    } = skillChatInputHooks.useSkillChatInput({
      disabled: N,
      onSubmit: M,
      allowEmpty: false,
      clearInputOnSubmit: true,
      onChange: e => {
        O(e);
      }
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        if ((e = D.current) !== null && e !== undefined) {
          e.focus();
        }
      },
      closeEvent: F
    }), []);
    let L = N || B.trim() === "";
    let z = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: z,
      className: l("ppt-container-SH3ytR"),
      id: "skill-modal-ppt-skill",
      "data-testid": "skill-modal-ppt-skill",
      children: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInput.SkillChatInput, {
        ref: W,
        className: n,
        skillHeaderVisible: w ?? !T,
        skillHeaderProps: {
          skill: o,
          icon: reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
            skill_type: chatAppEnums.SkillType.AiPPT
          }),
          closeEvent: F,
          background: "gray",
          beforeCloseBtn: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: Z("skill_aippt_info_tooltip"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex h-20 items-center justify-center",
              children: reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
                className: "text-16 text-s-color-text-tertiary"
              })
            })
          })
        },
        popoverVisible: false,
        editorVisible: false,
        editorProps: {
          disabled: N
        },
        bottom: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "skill-bottom-b04wM2",
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: l("tools-box-YsIa_a"),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "input-HChIBj",
              children: reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
                style: {
                  position: "relative"
                },
                ref: $,
                ...I,
                className: "no-focus-input",
                rows: 1,
                autosize: true,
                placeholder: Z("skill_aippt_input_placeholder"),
                "data-testid": "chat_input_input",
                autoComplete: "off",
                onKeyDown: async e => {
                  var t;
                  await (R == null ? undefined : R(e));
                  if ((t = I.onKeyDown) !== null && t !== undefined) {
                    t.call(I, e);
                  }
                },
                onInput: () => {
                  var e;
                  if ((e = W.current) !== null && e !== undefined) {
                    e.hidePopover();
                  }
                }
              })
            }), reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
              small: g,
              sendMessageHoverText: r,
              sendMessageClassName: C,
              disableToSend: L,
              onClickSendButton: () => {
                H();
              },
              beforeNodes: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.ToolButtonList, {
                list: [asrToolButtonSymbol.asrToolButtonSymbol],
                type: "textarea",
                isToolButtonSmall: g,
                getValue: () => {
                  return $.current?.value || "";
                },
                onUpdateValue: e => {
                  I.onChange(e);
                },
                skill: o,
                trackParams: k
              })
            })]
          })
        }),
        onCheckLoadSuccess: () => !!document.querySelector(`.${C}`),
        loadSuccessReportParams: {
          skillType: o == null ? undefined : o.skill_type
        }
      })
    });
  });
  var R = N;
  require.r(exports);
  require.d(exports, {
    pptCreationController: function () {
      return w;
    },
    PptAssistantChatInput: function () {
      return N;
    },
    default: function () {
      return R;
    },
    PptSkillService: function () {
      return pptEditorController.PPTEditorController;
    }
  });
}