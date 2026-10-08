// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatInputSkillKeydownHandler'
// - Resolved require(299053) to 'chat-input-skill-keydown-handler'
// - Renamed variable 'l' to 'skillGuidanceInputContainer'
// - Resolved require(216652) to 'skill-guidance-input-container'
// - Renamed variable 'a' to 'selectSkillBtnPluginId'
// - Resolved require(730494) to 'select-skill-btn-plugin-id'
// - Renamed variable 'o' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Renamed variable 's' to 'skillToolButtonRenderer'
// - Resolved require(812051) to 'skill-tool-button-renderer'
// - Renamed variable 'u' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'academicSearchSkillChatInput'
// - Resolved require(210919) to 'academic-search-skill-chat-input'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'O' to 'trackSkillExitEvent' (module 466492)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// - Updated imported property 'q' to 'getSkillChatInput' (module 210919)
// - Updated imported property '_' to 'useChatInputSkillKeyHandler' (module 299053)
// - Updated imported property 'XI' to 'SkillGuidanceInput' (module 216652)
// - Updated imported property 'xv' to 'SkillToolButton' (module 812051)
// - Updated imported property 'V' to 'selectSkillBtnId' (module 730494)
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 12205
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var academicSearchSkillChatInput = require("academic-search-skill-chat-input") /*id: 210919*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = "academic-search-send-msg-button";
  let h = e => {
    let {
      chatId: t,
      chatType: n,
      className: h,
      skill: _,
      trackParams: g,
      reportParams: y,
      sendMessageHoverText: k,
      isToolButtonSmall: w,
      onKeyDown: b,
      onAfterSendMessage: x,
      onBeforeSendMessage: S,
      ...C
    } = e;
    let E = i18nTranslationUtils.useTranslationWithFallback();
    let T = reactCoreLibraryReexport.useRef(null);
    let [R, P] = reactCoreLibraryReexport.useState({
      data: []
    });
    let N = inputToolConverter.extractText(R.data);
    let j = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: g
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = T.current) !== null && e !== undefined) {
        e.focus();
      }
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...g
      });
    }, []);
    let I = academicSearchSkillChatInput.getSkillChatInput({
      skill: _,
      trackParams: g,
      reportParams: y,
      closeEvent: j,
      clearInput: () => {
        var e;
        P({
          data: []
        });
        if ((e = T.current) !== null && e !== undefined) {
          e.blur();
        }
      },
      onAfterSendMessage: x,
      onBeforeSendMessage: S
    });
    let {
      handleKeyDown: M
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: R,
      onResetEditorValue: () => P({
        data: []
      }),
      onSubmit: () => I(N),
      onCloseSkillEvent: () => j(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    let D = {
      type: "editor",
      chatId: t,
      chatType: n,
      isToolButtonSmall: w,
      getValue: () => R,
      onUpdateValue: P
    };
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ref: T,
      ...C,
      className: h,
      testId: "skill-modal-academic-search",
      editorProps: {
        value: R,
        placeholder: E("deepsearchsupplement"),
        onChange: e => {
          P(e);
        },
        onKeyDown: async e => {
          await (b == null ? undefined : b(e));
          M(e);
        }
      },
      leftTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: selectSkillBtnPluginId.selectSkillBtnId,
        ...D
      }),
      rightTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: asrToolButtonSymbol.asrToolButtonSymbol,
        ...D
      }),
      sendBtnProps: {
        small: w,
        disableToSend: N === "",
        sendMessageClassName: v,
        sendMessageHoverText: k,
        onClickSendButton: () => {
          I(N);
        }
      },
      onCheckLoadSuccess: () => !!document.querySelector(`.${v}`),
      loadSuccessReportParams: {
        skillType: _ == null ? undefined : _.skill_type
      },
      onClickExitButton: () => j(chatSkillExitEventTracker.EventInputTypes.Click)
    });
  };
  class _ {
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
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AcademicSearchGuidanceInputPlugin: function () {
      return _;
    }
  });
}