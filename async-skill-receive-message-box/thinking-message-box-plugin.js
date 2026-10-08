// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'o' to 'chatConversationSelectorUtils'
// - Resolved require(166172) to 'chat-conversation-selector-utils'
// - Renamed variable 'a' to 'transitionGroupContext'
// - Resolved require(281556) to 'transition-group-context'
// - Renamed variable 'l' to 'cssTransitionComponent'
// - Resolved require(160074) to 'css-transition-component'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'searchSpinAnimationLazyComponent'
// - Resolved require(955234) to 'search-spin-animation-lazy-component'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'f' to 'chatReceiveThinkingSymbol'
// - Resolved require(545115) to 'chat-receive-thinking-symbol'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'w' to 'SearchSpinAnimationComponent' (module 955234)
// - Updated imported property 'Z' to 'TransitionContext' (module 281556)
// - Updated imported property 'Z' to 'CssTransition' (module 160074)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'n' to 'getConversationType' (module 166172)
// - Updated imported property 'q' to 'receiveThinkingSym' (module 545115)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 292269
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var transitionGroupContext = require("transition-group-context") /*id: 281556*/;
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var searchSpinAnimationLazyComponent = require("search-spin-animation-lazy-component") /*id: 955234*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var _ = {
    content: "content-_85fe8",
    icon: "icon-nrpyv5",
    text: "text-Aw_5oQ",
    stepText: "stepText-xMMIHy"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      isFailed: t,
      trackParams: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [r, o] = reactCoreLibraryReexport.useState();
    let v = reactCoreLibraryReexport.useMemo(() => ({
      stepTime: 3200,
      stepTexts: [i("skill_copliotreading_cot2"), i("skill_copliotreading_cot3"), i("skill_copliotreading_cot4")]
    }), [i]);
    let f = reactCoreLibraryReexport.useCallback(() => {
      let e = 0;
      setInterval(() => {
        o(v.stepTexts[e]);
        e = (e + 1) % v.stepTexts.length;
      }, v.stepTime);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      f();
      teaAnalyticsEventTracker.trackEvent("search_expand_show", {
        search_type: "long_file_summary_cot",
        ...n
      });
    }, []);
    if (t) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _.content,
        children: [reactJsxRuntimeCoreReexport.jsx(searchSpinAnimationLazyComponent.SearchSpinAnimationComponent, {
          className: _.icon,
          searchLoadingType: "ultra_long_text"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.text,
          children: i("skill_copliotreading_cot1")
        }), reactJsxRuntimeCoreReexport.jsx(transitionGroupContext.TransitionContext, {
          component: null,
          children: r ? reactJsxRuntimeCoreReexport.jsx(cssTransitionComponent.CssTransition, {
            in: true,
            classNames: "ult-thinking-step-text",
            timeout: 500,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: _.stepText,
              children: r
            })
          }, r) : null
        })]
      });
    }
  };
  var chatReceiveThinkingSymbol = require("chat-receive-thinking-symbol") /*id: 545115*/;
  function p(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let h = e => {
    let {
      message: t
    } = e;
    let n = messageContentTypeAndStatusChecker.FFC(t);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "w-full pb-40",
      children: reactJsxRuntimeCoreReexport.jsx(v, {
        isFailed: n,
        trackParams: {
          message_id: t.message_id || "",
          bot_id: chatConversationBotId.getConversationBotId(t.conversation_id || ""),
          conversation_id: t.conversation_id || "",
          conversation_type: chatConversationSelectorUtils.getConversationType(t.conversation_id || "")
        }
      })
    });
  };
  class g {
    constructor() {
      p(this, "pluginIdentifier", chatReceiveThinkingSymbol.receiveThinkingSym);
      p(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    ThinkingLongTextReceiveMessageBoxPlugin: function () {
      return g;
    }
  });
}