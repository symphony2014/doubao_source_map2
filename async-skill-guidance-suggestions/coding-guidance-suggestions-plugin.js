// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 's' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'd' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'p' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'v' to 'chatAiSkillPrompts'
// - Resolved require(156336) to 'chat-ai-skill-prompts'
// - Renamed variable 'f' to 'useGithubEventTracker'
// - Resolved require(212929) to 'use-github-event-tracker'
// - Renamed variable 'g' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'h' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'y' to 'aiCodePromptEventHooks'
// - Resolved require(421580) to 'ai-code-prompt-event-hooks'
// - Renamed variable 'k' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'w' to 'arrowLeftIconComponent'
// - Resolved require(901793) to 'arrow-left-icon-component'
// - Renamed variable 'b' to 'rtlChevronRightIcon'
// - Resolved require(946692) to 'rtl-chevron-right-icon'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'Z' to 'ArrowLeftIcon' (module 901793)
// - Updated imported property 'Z' to 'ChevronRightIcon' (module 946692)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'j' to 'useAiCodePromptEventHooks' (module 421580)
// - Updated imported property 'jp' to 'extendedSkillIcons' (module 156336)
// - Updated imported property 'EW' to 'parsePromptTemplate' (module 156336)
// - Updated imported property 'Ze' to 'focusTemplateInput' (module 156336)
// - Updated imported property 'Un' to 'skillPromptKeys' (module 156336)
// - Updated imported property 'mQ' to 'isCodeChatRoot' (module 983618)
// - Updated imported property 'v' to 'useGithubTracker' (module 212929)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'Z' to 'isEqual' (module 249434)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'Ax' to 'useLauncherConfig' (module 317711)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 539881
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatAiSkillPrompts = require("chat-ai-skill-prompts") /*id: 156336*/;
  var useGithubEventTracker = require("use-github-event-tracker") /*id: 212929*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var aiCodePromptEventHooks = require("ai-code-prompt-event-hooks") /*id: 421580*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var arrowLeftIconComponent = require("arrow-left-icon-component") /*id: 901793*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var x = {
    "scroll-toolbar-wrapper": "scroll-toolbar-wrapper-jaDawd",
    "scroll-toolbar": "scroll-toolbar-V5CAnN",
    "scroll-fade": "scroll-fade-ukC_ov",
    "scroll-fade-right": "scroll-fade-right-P6bRWT",
    "scroll-fade-left": "scroll-fade-left-OS2Jm0",
    "scroll-arrow": "scroll-arrow-ShoYqB",
    "scroll-arrow-left": "scroll-arrow-left-eO78OZ",
    "scroll-arrow-right": "scroll-arrow-right-F9bVIx"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function C(e) {
    let {
      children: t,
      classNames: i,
      wrapperClassName: n
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    let [o, s] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = l.current;
      if (!e) {
        return;
      }
      let t = () => {
        let t = e.scrollWidth > e.clientWidth;
        if (!t) {
          u(false);
        }
        s(t);
      };
      let i = new ResizeObserver(() => {
        t();
      });
      i.observe(e);
      requestAnimationFrame(() => t());
      return () => {
        i.disconnect();
      };
    }, []);
    let [c, u] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = l.current;
      if (!e) {
        return;
      }
      let t = () => {
        if (o) {
          u(e.scrollLeft + e.clientWidth >= e.scrollWidth - 1);
        }
      };
      let i = debounceUtil_1_1.debounce(t, 100);
      e.addEventListener("scroll", i);
      t();
      return () => {
        e.removeEventListener("scroll", i);
        i.cancel();
      };
    }, [o, l]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(x["scroll-toolbar-wrapper"], n),
      children: [c && o && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(x["scroll-fade"], x["scroll-fade-left"])
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(x["scroll-arrow"], x["scroll-arrow-left"]),
          onClick: () => {
            let e = l.current;
            if (e) {
              e.scrollTo({
                left: 0,
                behavior: "smooth"
              });
              u(false);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(arrowLeftIconComponent.ArrowLeftIcon, {})
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(x["scroll-toolbar"], i),
        ref: l,
        children: t
      }), !c && o && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(x["scroll-fade"], x["scroll-fade-right"])
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(x["scroll-arrow"], x["scroll-arrow-right"]),
          onClick: () => {
            let e = l.current;
            if (e) {
              e.scrollTo({
                left: e.scrollWidth,
                behavior: "smooth"
              });
              u(true);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {})
        })]
      })]
    });
  }
  var P = {
    "code-prompt-btn": "code-prompt-btn-HAnn4y",
    codePromptBtn: "code-prompt-btn-HAnn4y",
    "code-prompt-item-new": "code-prompt-item-new-e7ggXx",
    codePromptItemNew: "code-prompt-item-new-e7ggXx",
    "code-prompt-item-new-tag": "code-prompt-item-new-tag-d_s5ct",
    codePromptItemNewTag: "code-prompt-item-new-tag-d_s5ct",
    "code-prompt-btn-code": "code-prompt-btn-code-ASDDFH",
    codePromptBtnCode: "code-prompt-btn-code-ASDDFH",
    "code-prompt-item-new-code": "code-prompt-item-new-code-G3tKRi",
    codePromptItemNewCode: "code-prompt-item-new-code-G3tKRi"
  };
  let j = e => {
    let {
      item: t,
      onClick: i,
      isNew: n,
      isCodeHomepage: l,
      trackParams: o,
      index: s,
      recommendCodePromptsTemplates: c
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendPromptShowEvent: d
    } = aiCodePromptEventHooks.useAiCodePromptEventHooks({
      trackParams: {
        ...o,
        current_page: "code_assistant_detail_page",
        show_type: "banner_cell",
        show_from: "landing_page"
      }
    });
    let p = c == null ? undefined : c.find(e => e.key === t.key);
    reactCoreLibraryReexport.useEffect(() => {
      d(p || {
        ...t,
        template: "",
        variable_list: []
      }, s);
    }, [t.key]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(P[`code-prompt-btn${l ? "-code" : ""}`], "inline-flex items-center relative shrink-0 whitespace-nowrap gap-4 cursor-pointer hover:bg-[var(--s-color-bg-trans)]"),
        "data-testid": `prompt-template-${t.key}`,
        onClick: i,
        children: [reactCoreLibraryReexport.createElement(chatAiSkillPrompts.extendedSkillIcons[t.icon_type]), reactJsxRuntimeCoreReexport.jsx("span", {
          children: t.name
        }), n && reactJsxRuntimeCoreReexport.jsx("div", {
          className: P[`code-prompt-item-new${l ? "-code" : ""}`],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: P["code-prompt-item-new-tag"],
            children: u("web_ai_coding_prompt_tag")
          })
        })]
      })
    });
  };
  let T = e => {
    let {
      recommendItems: t,
      recommendCodePromptsTemplates: i,
      onClickTemplate: r,
      onOpenDataAnalysis: l,
      trackParams: a,
      inputRef: o
    } = e;
    let s = codeRouteUtils.isCodeChatRoot();
    let {
      sendPromptClickEvent: c
    } = aiCodePromptEventHooks.useAiCodePromptEventHooks({
      trackParams: {
        ...a,
        current_page: "code_assistant_detail_page",
        show_type: "banner_cell"
      }
    });
    let {
      sendGithubPopoverShowEvent: u
    } = useGithubEventTracker.useGithubTracker({
      trackParams: {
        current_page: "code_assistant_detail_page",
        enter_method: "chat_action_bar"
      }
    });
    let [d, p] = codingSkillStoreModule.codingSkillStore(e => [e.updateEditorValue, e.toggleGithubModalVisible], deepEqualityUtil.deepEqual);
    let m = (e, t) => {
      let n = i == null ? undefined : i.find(t => t.key === e.key);
      if (n) {
        if (r != null) {
          r(n);
        }
        let e = chatAiSkillPrompts.parsePromptTemplate(n.template, n.variable_list);
        codingSkillStoreModule.codingSkillStore.setState({
          editorValue: e
        });
        chatAiSkillPrompts.focusTemplateInput(e, o);
        c(n, t);
      } else if (e.key === chatAiSkillPrompts.skillPromptKeys.github) {
        p(true, "chat_action_bar");
        d({
          data: []
        });
        c({
          ...e,
          template: "",
          variable_list: []
        }, t);
        u();
      } else if (e.key === chatAiSkillPrompts.skillPromptKeys.data_analysis) {
        if (l != null) {
          l();
        }
        c({
          ...e,
          template: "",
          variable_list: []
        }, t);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: P["code-prompt-template-dialog-body"],
      children: reactJsxRuntimeCoreReexport.jsx(C, {
        wrapperClassName: "relative z-0",
        classNames: s ? "!gap-12" : "",
        children: t == null ? undefined : t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(j, {
          recommendCodePromptsTemplates: i,
          item: e,
          index: t,
          onClick: () => {
            m(e, t);
          },
          isNew: e.key === chatAiSkillPrompts.skillPromptKeys.data_analysis,
          isCodeHomepage: s
        }))
      })
    });
  };
  var R = {
    icon: "icon-PBSBQ3",
    "artifacts-template-mainbot": "artifacts-template-mainbot-dQkt_S",
    artifactsTemplateMainbot: "artifacts-template-mainbot-dQkt_S",
    "artifacts-template-v1": "artifacts-template-v1-vey7df",
    artifactsTemplateV1: "artifacts-template-v1-vey7df",
    "check-more": "check-more-LLPqKv",
    checkMore: "check-more-LLPqKv"
  };
  let N = e => {
    let {
      trackParams: t
    } = e;
    i18nTranslationUtils.useTranslationWithFallback();
    let i = reactCoreLibraryReexport.useRef(null);
    let {
      chatInputRef: l
    } = chatRefsContext.useChatRefs();
    let [a, f] = codingSkillStoreModule.codingSkillStore(e => [e.recommendCodePromptsTemplates, e.recommendItems], deepEqualityUtil.isEqual);
    let {
      inputAggregateList: g
    } = chatLauncherConfigHooks.useLauncherConfig();
    let y = g == null ? undefined : g.includes(String(chatAppEnums.SkillType.CodeAssistant));
    let k = reactCoreLibraryReexport.useCallback(e => {
      if (y) {
        let t = chatAiSkillPrompts.parsePromptTemplate(e.template, e.variable_list);
        chatInputStoreHelpers.setEditorValue(t);
      } else {
        initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.clickPromptTemplate, e);
      }
    }, [y]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.clickDataAnalysis, "ai_code_template");
    }, []);
    chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!!a.length && reactJsxRuntimeCoreReexport.jsx("div", {
        className: R.recommendContainer,
        style: {
          paddingBottom: 12,
          paddingTop: 4
        },
        children: reactJsxRuntimeCoreReexport.jsx(T, {
          recommendItems: f,
          recommendCodePromptsTemplates: a,
          onClickTemplate: k,
          onOpenDataAnalysis: w,
          trackParams: t,
          inputRef: y ? l : i
        })
      }), null]
    });
  };
  function E(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class A {
    constructor() {
      E(this, "titleKey", "newChat_skill_triggered_title_for_coding");
      E(this, "Content", N);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingGuidanceSuggestionsPlugin: function () {
      return A;
    }
  });
}