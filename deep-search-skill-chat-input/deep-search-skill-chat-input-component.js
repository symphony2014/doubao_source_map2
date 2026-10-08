// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'skillChatInputHooks'
// - Resolved require(354217) to 'skill-chat-input-hooks'
// - Renamed variable 'c' to 'codingSkillChatInput'
// - Resolved require(989348) to 'coding-skill-chat-input'
// - Renamed variable 'u' to 'skillChatInputWrapper'
// - Resolved require(137475) to 'skill-chat-input-wrapper'
// - Renamed variable 'd' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'p' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'smartTextareaWithFormFieldWrapper'
// - Resolved require(126704) to 'smart-textarea-with-form-field-wrapper'
// - Renamed variable 'v' to 'deepSearchSkillChatInputStore'
// - Resolved require(679775) to 'deep-search-skill-chat-input-store'
// - Renamed variable 'm' to 'suggestedContentLoadingPlaceholder'
// - Resolved require(38443) to 'suggested-content-loading-placeholder'
// - Renamed variable 'g' to 'suggestedContentSearchItem'
// - Resolved require(708810) to 'suggested-content-search-item'
// - Renamed variable 'x' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'uq' to 'deepSearchChatInputStore' (module 679775)
// - Updated imported property 'Z' to 'isEqual' (module 550444)
// - Updated imported property 'z' to 'useSkillChatInput' (module 354217)
// - Updated imported property 'S' to 'SkillChatInput' (module 989348)
// - Updated imported property '_' to 'suggestedContentLoadingPlaceholder' (module 38443)
// - Updated imported property 'F' to 'SuggestedSearchItem' (module 708810)
// - Updated imported property 'N' to 'SmartTextArea' (module 126704)
// - Updated imported property 'b' to 'ChatInputWrapper' (module 137475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 550913
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var codingSkillChatInput = require("coding-skill-chat-input") /*id: 989348*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var suggestedContentLoadingPlaceholder = require("suggested-content-loading-placeholder") /*id: 38443*/;
  var suggestedContentSearchItem = require("suggested-content-search-item") /*id: 708810*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = "deep-search-send-msg-button";
  let S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      skill: n,
      sendMessageHoverText: a,
      trackParams: S,
      showHeader: b,
      showBanner: y,
      onBeforeSendMessage: E,
      onAfterSendMessage: C
    } = e;
    let k = chatGuidanceSelectors.hasActiveSkill();
    let w = y ?? !k;
    let N = i18nTranslationUtils.useTranslationWithFallback();
    let [j, R] = reactCoreLibraryReexport.useState("");
    let T = reactCoreLibraryReexport.useRef(null);
    let {
      sendMessage: P
    } = chatServiceContext.useChatService("chatMessageService");
    let [I, O, Z] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.deepSearchConfigLoading, e.deepSearchConfig, e.initDeepSearchConfigList], deepEqualityUtil_1.isEqual);
    let B = () => {
      teaAnalyticsEventTracker.trackEvent("skill_module_close", {
        ...S,
        is_deepsearch_show: 1,
        is_deepsearch: 1
      });
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        if ((e = $.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = $.current) !== null && e !== undefined) {
        e.focus();
      }
    }, []);
    let F = async e => {
      var t;
      var r;
      var i;
      if ((await (E == null ? undefined : E())) === false) {
        return;
      }
      let a = {
        skill_id: n == null ? undefined : (t = n.skill_type) === null || t === undefined ? undefined : t.toString(),
        skill_type: n == null ? undefined : n.skill_type
      };
      await P([{
        text: e,
        reportParams: {
          scene: "chat_action_bar"
        },
        extraExt: {
          answer_with_suggest: "1",
          input_skill: JSON.stringify(a)
        }
      }]);
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...S,
        is_deepsearch_show: 1,
        is_deepsearch: 1
      });
      R("");
      B();
      if ((r = $.current) !== null && r !== undefined) {
        r.blur();
      }
      if ((i = T.current) !== null && i !== undefined) {
        i.hidePopover();
      }
      if (C != null) {
        C();
      }
    };
    let {
      textAreaRef: $,
      textAreaProps: L,
      submit: D
    } = skillChatInputHooks.useSkillChatInput({
      onSubmit: F,
      allowEmpty: false,
      clearInputOnSubmit: true,
      onChange: e => {
        R(e);
      }
    });
    let W = e => {
      F(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        Z();
      }
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...S,
        origin_content_type: "message",
        is_deepsearch_show: 1
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "deep-search-inner-XRDa26",
      "data-testid": "skill-modal-ai-search",
      children: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInput.SkillChatInput, {
        ref: T,
        skillHeaderVisible: b ?? !k,
        skillHeaderProps: {
          skill: n,
          closeEvent: B,
          background: "gray",
          expandBtnText: N("chat_input_popover_toggle_button_trending")
        },
        popoverVisible: !!w && undefined,
        popoverContent: reactJsxRuntimeCoreReexport.jsx("div", {
          className: l("banner-wrapper-IIbEwt"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "px-10 py-12",
            children: I ? reactJsxRuntimeCoreReexport.jsx(suggestedContentLoadingPlaceholder.suggestedContentLoadingPlaceholder, {}) : O.slice(0, 3).map(e => {
              return e.title && ((e == null ? undefined : e.prompt_title) || (e == null ? undefined : e.title)) && reactJsxRuntimeCoreReexport.jsx(suggestedContentSearchItem.SuggestedSearchItem, {
                title: e.title,
                value: (e == null ? undefined : e.prompt_title) ? e.prompt_title : (e == null ? undefined : e.title) ?? "",
                trackParams: S,
                onClick: W
              }, e.title);
            })
          })
        }),
        editorVisible: false,
        bottom: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l("footer-ORMQP0", "!items-end"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "input-g9q0al",
            onKeyDown: e => {
              if (e.key === "Escape" && !e.shiftKey && !e.altKey) {
                B();
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
              style: {
                position: "relative"
              },
              ref: $,
              ...L,
              className: "no-focus-input",
              rows: 1,
              autosize: true,
              placeholder: N("deepsearchsupplement"),
              "data-testid": "chat_input_input",
              autoComplete: "off",
              onInput: () => {
                var e;
                if ((e = T.current) !== null && e !== undefined) {
                  e.hidePopover();
                }
              }
            })
          }), reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
            sendMessageHoverText: a,
            sendMessageClassName: _,
            disableToSend: j.trim() === "",
            onClickSendButton: D,
            beforeNodes: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex gap-8"
            })
          })]
        }),
        onCheckLoadSuccess: () => !!document.querySelector(`.${_}`),
        loadSuccessReportParams: {
          skillType: n == null ? undefined : n.skill_type
        }
      })
    });
  });
  var b = S;
  require.r(exports);
  require.d(exports, {
    DeepSearchChatInput: function () {
      return S;
    },
    default: function () {
      return b;
    }
  });
}