// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'c' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'd' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'p' to 'chatIcon_1'
// - Resolved require(336160) to 'chat-icon_1'
// - Renamed variable 'm' to 'rightOutlinedIcon'
// - Resolved require(831095) to 'right-outlined-icon'
// - Renamed variable 'f' to 'chatConstants'
// - Resolved require(777970) to 'chat-constants'
// - Renamed variable '_' to 'superTaskChatInputModeSwitchHook'
// - Resolved require(830021) to 'super-task-chat-input-mode-switch-hook'
// - Renamed variable 'g' to 'superTaskPayloadPlugin'
// - Resolved require(651299) to 'super-task-payload-plugin'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'S' to 'superTaskGuidanceSymbol'
// - Resolved require(415117) to 'super-task-guidance-symbol'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'B' to 'useSuperTaskChatInputMode' (module 830021)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'GI' to 'isStringArray' (module 385226)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'CH' to 'taskTypes' (module 777970)
// - Updated imported property 'V' to 'processTaskPayload' (module 651299)
// - Updated imported property 'c' to 'ChatIcon' (module 336160)
// - Updated imported property 'U' to 'RightOutlinedIcon' (module 831095)
// - Updated imported property 'j' to 'superTaskGuidance' (module 415117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 327250
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var chatIcon_1 = require("chat-icon_1") /*id: 336160*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var superTaskChatInputModeSwitchHook = require("super-task-chat-input-mode-switch-hook") /*id: 830021*/;
  var superTaskPayloadPlugin = require("super-task-payload-plugin") /*id: 651299*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      message: t,
      classname: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      conversation_id: h
    } = t ?? {};
    let [S, w] = reactCoreLibraryReexport.useState(true);
    let {
      sendMessage: y
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      currentChatInputMode: b,
      handleSwitchMode: k
    } = superTaskChatInputModeSwitchHook.useSuperTaskChatInputMode(h, false);
    let x = functionInvoker.invoke(() => {
      try {
        var e;
        let s = t == null ? undefined : (e = t.content_blocks) === null || e === undefined ? undefined : e.find(e => e.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
        if (s) {
          let e = (s == null ? undefined : s.content_obj?.suggest) ?? "";
          if (infraUtilFunctions.isStringArray(e)) {
            return e[0];
          } else {
            return e;
          }
        }
        if (t == null ? undefined : t.ext?.sp) {
          let e = safeJsonUtils.safeParse(t == null ? undefined : t.ext?.sp, []);
          return (e == null ? undefined : e[0]) ?? "";
        }
        return "";
      } catch (e) {
        return "";
      }
    });
    let T = async () => {
      w(false);
      if (b !== chatConstants.taskTypes.SuperTask) {
        k(chatConstants.taskTypes.SuperTask);
      }
      let e = {
        text: x,
        reportParams: {
          scene: "suggest_super_task_banner"
        }
      };
      e = await superTaskPayloadPlugin.processTaskPayload(e);
      await y([e]);
    };
    if (S) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex justify-center",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a("container-NnBLCt", n),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "icon-wlAWZW",
            children: reactJsxRuntimeCoreReexport.jsx(chatIcon_1.ChatIcon, {
              className: "size-16 text-s-color-text-tertiary"
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "content-EyIBJ9",
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: "title-Gbhcst",
              children: i("superAgent_chat_msg_tryAgent")
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "btn-RhLmFL",
              onClick: T,
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: "btnText-IkVhkV",
                children: i("superAgent_chat_msg_tryAgent_btn")
              }), reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
                className: "size-14"
              })]
            })]
          })]
        })
      });
    } else {
      return null;
    }
  };
  var superTaskGuidanceSymbol = require("super-task-guidance-symbol") /*id: 415117*/;
  function w(e, t, n) {
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
  let y = e => {
    let {
      message: t,
      actionBarComponentNode: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [n, reactJsxRuntimeCoreReexport.jsx(h, {
        message: t,
        classname: "mt-20"
      })]
    });
  };
  class b {
    constructor() {
      w(this, "pluginIdentifier", superTaskGuidanceSymbol.superTaskGuidance);
      w(this, "Content", y);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskMessageListBottomGuidancePlugin: function () {
      return b;
    }
  });
}