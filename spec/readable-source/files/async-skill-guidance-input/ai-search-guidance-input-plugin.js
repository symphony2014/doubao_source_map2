// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatDeepThinkingSwitch'
// - Resolved require(458521) to 'chat-deep-thinking-switch'
// - Renamed variable 'l' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'a' to 'chatInputSkillKeydownHandler'
// - Resolved require(299053) to 'chat-input-skill-keydown-handler'
// - Renamed variable 'o' to 'skillChatInputHooks'
// - Resolved require(354217) to 'skill-chat-input-hooks'
// - Renamed variable 's' to 'skillGuidanceInputContainer'
// - Resolved require(216652) to 'skill-guidance-input-container'
// - Renamed variable 'u' to 'searchSkillOverflowList'
// - Resolved require(412695) to 'search-skill-overflow-list'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'selectSkillBtnPluginId'
// - Resolved require(730494) to 'select-skill-btn-plugin-id'
// - Renamed variable 'p' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Renamed variable 'f' to 'skillToolButtonRenderer'
// - Resolved require(812051) to 'skill-tool-button-renderer'
// - Renamed variable 'm' to 'chatGuestAccessControlHooks'
// - Resolved require(874237) to 'chat-guest-access-control-hooks'
// - Renamed variable 'v' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable '_' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'g' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'y' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'k' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'w' to 'searchSkillTypeSelector'
// - Resolved require(718556) to 'search-skill-type-selector'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'ri' to 'createGuestDisabledHandler' (module 874237)
// - Updated imported property 'O' to 'trackSkillExitEvent' (module 466492)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// - Updated imported property '_' to 'useChatInputSkillKeyHandler' (module 299053)
// - Updated imported property 'z' to 'useSkillChatInput' (module 354217)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'xv' to 'SkillToolButton' (module 812051)
// - Updated imported property 'C' to 'deepThinkingSwitchKey' (module 458521)
// - Updated imported property 'r' to 'SearchSkillTypeSelector' (module 718556)
// - Updated imported property 'V' to 'selectSkillBtnId' (module 730494)
// - Updated imported property 'XI' to 'SkillGuidanceInput' (module 216652)
// - Updated imported property 'f' to 'SkillOverflowList' (module 412695)
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 362852
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatDeepThinkingSwitch = require("chat-deep-thinking-switch") /*id: 458521*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var searchSkillOverflowList = require("search-skill-overflow-list") /*id: 412695*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var searchSkillTypeSelector = require("search-skill-type-selector") /*id: 718556*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = "ai-search-send-msg-button";
  var S = e => {
    let {
      chatId: n,
      chatType: S,
      className: C,
      skill: E,
      sendMessageHoverText: T,
      trackParams: R,
      reportParams: P,
      isToolButtonSmall: N,
      onKeyDown: j,
      onBeforeSendMessage: I,
      onAfterSendMessage: M,
      ...D
    } = e;
    let Z = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: $
    } = chatServiceContext.useChatService("chatMessageService");
    let O = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => e.enableDeepThinkingSwitch);
    let [A, B] = reactCoreLibraryReexport.useState({
      data: []
    });
    let [F, W] = reactCoreLibraryReexport.useState((E == null ? undefined : E.skill_type) ?? chatAppEnums.SkillType.Search);
    let L = inputToolConverter.extractText(A.data);
    let {
      onClickGuestDisabled: V
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "deep_search",
      checkNewGuidanceAb: true
    });
    let U = async e => {
      if (!(await V())) {
        return false;
      }
      W(e);
    };
    let z = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        ...R
      });
    };
    let {
      handleKeyDown: K
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: A,
      onResetEditorValue: () => B({
        data: []
      }),
      onSubmit: () => G(L),
      onCloseSkillEvent: () => z(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = H.current) !== null && e !== undefined) {
        e.focus();
      }
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...R,
        origin_content_type: "message",
        is_deepsearch_show: 1
      });
    }, []);
    let G = async e => {
      var t;
      if ((await (I == null ? undefined : I({
        checkNewGuidanceAb: false
      }))) === false) {
        return;
      }
      let n = {
        skill_id: F == null ? undefined : F.toString(),
        skill_type: F
      };
      await $([{
        text: e,
        reportParams: {
          scene: "chat_action_bar",
          ...P
        },
        extraExt: {
          answer_with_suggest: "1",
          input_skill: JSON.stringify(n)
        }
      }]);
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...R
      });
      B({
        data: []
      });
      z();
      if ((t = H.current) !== null && t !== undefined) {
        t.blur();
      }
      if (M != null) {
        M({
          exitSkill: false
        });
      }
    };
    let {
      textAreaRef: H
    } = skillChatInputHooks.useSkillChatInput({
      onSubmit: G,
      allowEmpty: false,
      clearInputOnSubmit: true,
      onChange: e => {
        B({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        });
      }
    });
    let J = {
      type: "editor",
      chatId: n,
      chatType: S,
      isToolButtonSmall: N,
      getValue: () => A,
      onUpdateValue: B,
      activeSkillType: F
    };
    let X = [e => O ? reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
      identifier: chatDeepThinkingSwitch.deepThinkingSwitchKey,
      ...J,
      disabled: F === chatAppEnums.SkillType.AcademicSearch,
      disabledTooltip: Z("chat_input_tool_deepThink_conflictWithAcademicSearch_tooltip"),
      ...e,
      isToolButtonSmall: e.small
    }) : null, e => reactJsxRuntimeCoreReexport.jsx(searchSkillTypeSelector.SearchSkillTypeSelector, {
      classname: "!ml-0 !py-6",
      currentActiveSkill: F,
      updateActiveSkillType: U,
      ...e
    }), e => reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
      identifier: selectSkillBtnPluginId.selectSkillBtnId,
      ...J,
      ...e,
      isToolButtonSmall: e.small
    })];
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ...D,
      className: C,
      testId: "skill-modal-ai-search",
      editorProps: {
        value: A,
        placeholder: Z("deepsearchsupplement"),
        onChange: e => {
          B(e);
        },
        onKeyDown: async e => {
          await (j == null ? undefined : j(e));
          K(e);
        }
      },
      leftTools: reactJsxRuntimeCoreReexport.jsx(searchSkillOverflowList.SkillOverflowList, {
        small: N,
        list: X
      }),
      rightTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: asrToolButtonSymbol.asrToolButtonSymbol,
        ...J
      }),
      sendBtnProps: {
        small: N,
        disableToSend: L === "",
        sendMessageClassName: x,
        sendMessageHoverText: T,
        onClickSendButton: () => {
          G(L);
        }
      },
      onCheckLoadSuccess: () => !!document.querySelector(`.${x}`),
      loadSuccessReportParams: {
        skillType: E == null ? undefined : E.skill_type
      },
      onClickExitButton: () => z(chatSkillExitEventTracker.EventInputTypes.Click)
    });
  };
  class C {
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
          value: S,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = S;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AISearchGuidanceInputPlugin: function () {
      return C;
    }
  });
}