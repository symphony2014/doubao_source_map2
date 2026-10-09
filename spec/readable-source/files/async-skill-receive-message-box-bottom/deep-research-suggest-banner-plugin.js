// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 's' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'u' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'p' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable '_' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'g' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'v' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'h' to 'rtlNavigationIcon'
// - Resolved require(734266) to 'rtl-navigation-icon'
// - Renamed variable 'S' to 'arrowRightIconSvg'
// - Resolved require(623696) to 'arrow-right-icon-svg'
// - Renamed variable 'w' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'y' to 'useStableObjectHook'
// - Resolved require(141660) to 'use-stable-object-hook'
// - Renamed variable 'x' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'E' to 'chatDeepResearchAction'
// - Resolved require(486566) to 'chat-deep-research-action'
// - Updated imported property 'h' to 'useStableObject' (module 141660)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'GI' to 'isStringArray' (module 385226)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'Z' to 'RtlNavigationIcon' (module 734266)
// - Updated imported property 'Z' to 'ArrowRightIcon' (module 623696)
// - Updated imported property 'V' to 'deepResearchAction' (module 486566)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 988796
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var rtlNavigationIcon = require("rtl-navigation-icon") /*id: 734266*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let b = e => {
    let {
      message: t
    } = e;
    let n = () => ({
      conversation_id: t == null ? undefined : t.conversation_id,
      bot_id: t == null ? undefined : t.bot_id,
      message_id: t == null ? undefined : t.message_id
    });
    let r = function (e, t = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...n(),
          ...t
        });
      } catch (e) {}
    };
    return useStableObjectHook.useStableObject({
      trackSuggestBannerShow: function (e = {}) {
        r("show_suggest_deep_research_banner", {
          ...e
        });
      },
      trackClickSuggestBanner: function (e = {}) {
        r("click_suggest_deep_research_banner", {
          ...e
        });
      }
    });
  };
  var k = {
    container: "container-hmibyE",
    icon: "icon-nfvnHF",
    content: "content-jG0lQD",
    title: "title-IkAhBw",
    btn: "btn-Jn3bdU",
    btnText: "btnText-sBE7aM"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => {
    let {
      classname: t,
      message: n
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      conversation_id: w,
      message_id: y
    } = n ?? {};
    let [T, E] = reactCoreLibraryReexport.useState(true);
    let {
      sendMessage: R
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      trackClickSuggestBanner: L,
      trackSuggestBannerShow: I
    } = b({
      message: n
    });
    let C = chatMessageStatusCheck.isMessageFinished(n);
    let {
      ref: N
    } = reactIntersectionObserver_1.useInView({
      onChange: e => {
        if (e && e) {
          I();
        }
      }
    });
    let A = functionInvoker.invoke(() => {
      try {
        var e;
        let p = n == null ? undefined : (e = n.content_blocks) === null || e === undefined ? undefined : e.find(e => e.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
        if (p) {
          let e = (p == null ? undefined : p.content_obj?.suggest) ?? "";
          if (infraUtilFunctions.isStringArray(e)) {
            return e[0];
          } else {
            return e;
          }
        }
        if (n == null ? undefined : n.ext?.sp_v2) {
          let e = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.sp_v2, []);
          return (e == null ? undefined : e[0]?.content) ?? "";
        }
        if (n == null ? undefined : n.ext?.sp) {
          let e = safeJsonUtils.safeParse(n == null ? undefined : n.ext?.sp, []);
          return (e == null ? undefined : e[0]) ?? "";
        }
        return "";
      } catch (e) {
        return "";
      }
    });
    let M = async () => {
      E(false);
      let e = {
        skill_id: chatAppEnums.SkillType.SkillDeepResearch.toString(),
        skill_type: chatAppEnums.SkillType.SkillDeepResearch
      };
      await R([{
        text: A,
        direct_research: true,
        reportParams: {
          scene: "suggest_deep_research_banner",
          sec_scene: skillTypeMappings.getSkillActionClass(e == null ? undefined : e.skill_type),
          preset_prompt_type: "default_prompt"
        },
        extraExt: {
          input_skill: JSON.stringify(e)
        }
      }]);
      L();
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!w || !T || !y) {
        return;
      }
      let e = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        if (!conversationMessageUtils_1.checkMessageIdMatch(e, w, y)) {
          E(false);
          return;
        }
      });
      return () => {
        e();
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: C && T && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex justify-center",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: N,
          className: o(k.container, t),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: k.icon,
            children: reactJsxRuntimeCoreReexport.jsx(rtlNavigationIcon.RtlNavigationIcon, {
              className: "text-16 text-s-color-text-tertiary"
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: k.content,
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: k.title,
              children: a("deepResearch_chat_msg_tryResearch")
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: k.btn,
              onClick: M,
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: k.btnText,
                children: a("deepResearch_chat_msg_tryResearch_btn")
              }), reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
                className: "text-14"
              })]
            })]
          })]
        })
      })
    });
  };
  var chatDeepResearchAction = require("chat-deep-research-action") /*id: 486566*/;
  function R(e, t, n) {
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
  let L = e => {
    let {
      message: t,
      actionBarComponentNode: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [n, reactJsxRuntimeCoreReexport.jsx(T, {
        message: t,
        classname: "mt-20"
      })]
    });
  };
  class I {
    constructor() {
      R(this, "pluginIdentifier", chatDeepResearchAction.deepResearchAction);
      R(this, "Content", L);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveDeepResearchHardMessageBoxBottomPlugin: function () {
      return I;
    }
  });
}