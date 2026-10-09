// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'l' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 's' to 'suggestMessageList'
// - Resolved require(447868) to 'suggest-message-list'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable '_' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'g' to 'useStableObjectHook'
// - Resolved require(141660) to 'use-stable-object-hook'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'w' to 'chatDeepResearchSymbol'
// - Resolved require(460051) to 'chat-deep-research-symbol'
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'h' to 'useStableObject' (module 141660)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'u' to 'SuggestMessageItem' (module 447868)
// - Updated imported property 'U' to 'deepResearchSymbol' (module 460051)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 354596
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var suggestMessageList = require("suggest-message-list") /*id: 447868*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let v = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: t == null ? undefined : t.bot_id,
        message_id: t == null ? undefined : t.message_id,
        current_page: "chat"
      };
    };
    let r = function (e, t = {}) {
      teaAnalyticsEventTracker.trackEvent(e, {
        ...n(),
        ...t
      });
    };
    return useStableObjectHook.useStableObject({
      trackSuggestedPromptShow: function (e = {}) {
        r("show_suggested_prompt", {
          ...e
        });
      },
      trackSuggestedPromptSingleQuestionShow: function (e = {}) {
        r("show_suggested_prompt_single_question", {
          ...e
        });
      },
      trackClickSuggestedPrompt: function (e = {}) {
        r("click_suggested_prompt", {
          ...e
        });
      }
    });
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = e => {
    let {
      classname: t,
      message: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      conversation_id: _,
      message_id: g
    } = n ?? {};
    let [S, w] = reactCoreLibraryReexport.useState(true);
    let {
      sendMessage: y
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      trackClickSuggestedPrompt: b,
      trackSuggestedPromptShow: k,
      trackSuggestedPromptSingleQuestionShow: x
    } = v({
      message: n
    });
    let T = chatMessageStatusCheck.isMessageFinished(n);
    let E = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let R = () => {
      if (E) {
        chatStoreManager.getStore("chatInputStore").getState().closeSkillPanel(E);
      }
    };
    let L = i("deepResearch_chat_btn_startResearch");
    let I = {
      prompt_position: "1",
      suggested_type: "deep_research"
    };
    let C = async () => {
      var t;
      w(false);
      let r = {
        skill_id: chatAppEnums.SkillType.SkillDeepResearch.toString(),
        skill_type: chatAppEnums.SkillType.SkillDeepResearch,
        variables: {}
      };
      await y([{
        text: L,
        reportParams: {
          scene: "suggested_prompt",
          sec_scene: skillTypeMappings.getSkillActionClass(r == null ? undefined : r.skill_type),
          preset_prompt_type: "default_prompt",
          deep_research_id: (t = n.verbose) === null || t === undefined ? undefined : t.deep_research?.deep_research_id
        },
        extraExt: {
          input_skill: JSON.stringify(r)
        }
      }]);
      b(I);
      R();
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!_ || !g || !S) {
        return;
      }
      let e = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        if (!conversationMessageUtils_1.checkMessageIdMatch(e, _, g)) {
          w(false);
          return;
        }
      });
      return () => {
        e();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      k(I);
      x(I);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: T && S && reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(t),
        children: reactJsxRuntimeCoreReexport.jsx(suggestMessageList.SuggestMessageItem, {
          onClick: C,
          children: L
        })
      })
    });
  };
  var chatDeepResearchSymbol = require("chat-deep-research-symbol") /*id: 460051*/;
  function y(e, t, n) {
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
  let b = e => {
    let {
      message: t,
      suggestList: n,
      actionBarComponentNode: r
    } = e;
    let {
      suggestListComponentNode: i
    } = n || {};
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [r, i, reactJsxRuntimeCoreReexport.jsx(S, {
        message: t,
        classname: "mt-20"
      })]
    });
  };
  class k {
    constructor() {
      y(this, "pluginIdentifier", chatDeepResearchSymbol.deepResearchSymbol);
      y(this, "Content", b);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveDeepResearchClarifyMessageBoxBottomPlugin: function () {
      return k;
    }
  });
}