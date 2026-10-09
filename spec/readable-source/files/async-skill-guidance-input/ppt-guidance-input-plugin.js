// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatAsrButtonHook'
// - Resolved require(370968) to 'chat-asr-button-hook'
// - Renamed variable 'l' to 'chatSkillPluginSymbols'
// - Resolved require(886094) to 'chat-skill-plugin-symbols'
// - Renamed variable 'a' to 'chatInputSkillKeydownHandler'
// - Resolved require(299053) to 'chat-input-skill-keydown-handler'
// - Renamed variable 'o' to 'skillGuidanceInputContainer'
// - Resolved require(216652) to 'skill-guidance-input-container'
// - Renamed variable 's' to 'selectSkillBtnPluginId'
// - Resolved require(730494) to 'select-skill-btn-plugin-id'
// - Renamed variable 'u' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Renamed variable 'd' to 'skillToolButtonRenderer'
// - Resolved require(812051) to 'skill-tool-button-renderer'
// - Renamed variable 'c' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'p' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'f' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'skillGuidanceChatSender'
// - Resolved require(964748) to 'skill-guidance-chat-sender'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'O' to 'trackSkillExitEvent' (module 466492)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// - Updated imported property 'q' to 'createSkillChatSender' (module 964748)
// - Updated imported property '_' to 'useChatInputSkillKeyHandler' (module 299053)
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'e' to 'useChatAsrButton' (module 370968)
// - Updated imported property 'XI' to 'SkillGuidanceInput' (module 216652)
// - Updated imported property 'kb' to 'SkillToolButtonList' (module 812051)
// - Updated imported property 'xv' to 'SkillToolButton' (module 812051)
// - Updated imported property 'uZ' to 'exitSkillPluginSym' (module 886094)
// - Updated imported property 'V' to 'selectSkillBtnId' (module 730494)
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 898910
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var skillGuidanceChatSender = require("skill-guidance-chat-sender") /*id: 964748*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = "ppt-send-msg-button";
  let g = e => {
    let {
      chatId: t,
      chatType: n,
      className: g,
      skill: y,
      trackParams: k,
      reportParams: w,
      sendMessageHoverText: b,
      isToolButtonSmall: x,
      onKeyDown: S,
      onAfterSendMessage: C,
      onBeforeSendMessage: E,
      ...T
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let P = reactCoreLibraryReexport.useRef(null);
    let [N, j] = reactCoreLibraryReexport.useState({
      data: []
    });
    let I = inputToolConverter.extractText(N.data);
    let M = I === "";
    let D = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: k
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = P.current) !== null && e !== undefined) {
        e.focus();
      }
    }, []);
    let Z = skillGuidanceChatSender.createSkillChatSender({
      skill: y,
      reportParams: w,
      closeEvent: D,
      clearInput: () => {
        var e;
        j({
          data: []
        });
        if ((e = P.current) !== null && e !== undefined) {
          e.blur();
        }
      },
      onAfterSendMessage: C,
      onBeforeSendMessage: E
    });
    let {
      handleKeyDown: $
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: N,
      onResetEditorValue: () => j({
        data: []
      }),
      onSubmit: () => Z(I),
      onCloseSkillEvent: () => D(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    let {
      skillToolUIV2: O
    } = chatLauncherConfigHooks.useSkillToolLayout(T == null ? undefined : T.scene);
    let A = {
      type: "editor",
      chatId: t,
      chatType: n,
      scene: T == null ? undefined : T.scene,
      isToolButtonSmall: x,
      skill: y,
      getValue: () => N,
      onUpdateValue: j,
      trackParams: k
    };
    let {
      customButton: B,
      disableRightTools: F
    } = chatAsrButtonHook.useChatAsrButton({
      scene: T == null ? undefined : T.scene,
      skill: y,
      temporaryShow: M,
      onUpdateValue: A.onUpdateValue,
      getValue: A.getValue,
      onStopSubmit: () => Z(I)
    });
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ref: P,
      ...T,
      className: g,
      editorProps: {
        value: N,
        placeholder: R("skill_aippt_input_placeholder"),
        onChange: e => {
          j(e);
        },
        onKeyDown: async e => {
          await (S == null ? undefined : S(e));
          $(e);
        }
      },
      leftTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
        list: [...(O ? [chatSkillPluginSymbols.exitSkillPluginSym] : []), selectSkillBtnPluginId.selectSkillBtnId],
        toolButtonProps: A,
        small: x
      }),
      rightTools: F ? null : reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: asrToolButtonSymbol.asrToolButtonSymbol,
        ...A
      }),
      sendBtnProps: {
        small: x,
        customButton: B,
        disableToSend: M,
        sendMessageClassName: _,
        sendMessageHoverText: b,
        onClickSendButton: () => {
          Z(I);
        }
      },
      onCheckLoadSuccess: () => !!document.querySelector(`.${_}`),
      loadSuccessReportParams: {
        skillType: y == null ? undefined : y.skill_type
      },
      onClickExitButton: () => D(chatSkillExitEventTracker.EventInputTypes.Click)
    });
  };
  class y {
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
          value: g,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = g;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PptGuidanceInputPlugin: function () {
      return y;
    }
  });
}