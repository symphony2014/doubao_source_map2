// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useSkillSelection'
// - Renamed export 'c' to 'useSkillPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 325887
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillStatusMapper = require("skill-status-mapper") /*id: 808463*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var b = classnamesUtils;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var highlightSearchTextComponent = require("highlight-search-text-component") /*id: 236025*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var skillPinIcon = require("skill-pin-icon") /*id: 962515*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var chatInputSkillSelectors = require("chat-input-skill-selectors") /*id: 627774*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let P = e => {
    let {
      skill: t,
      isSelected: n,
      onClick: r,
      onShow: a,
      keydownDirection: o,
      "data-testid": l
    } = e;
    let {
      ref: s,
      inView: c
    } = reactIntersectionObserver_1.useInView({
      initialInView: false,
      threshold: 1
    });
    let u = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useCallback(e => {
      u.current = e;
      s(e);
    }, [s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n && !c) {
        var e;
        var t;
        var i;
        var r;
        if (o === "ArrowDown") {
          if (u != null && (t = u.current) !== null && t !== undefined && (e = t.scrollIntoView) !== null && e !== undefined) {
            e.call(t, {
              block: "end",
              inline: "nearest",
              behavior: "smooth"
            });
          }
        } else if (o === "ArrowUp") {
          if (u != null && (r = u.current) !== null && r !== undefined && (i = r.scrollIntoView) !== null && i !== undefined) {
            i.call(r, {
              block: "start",
              inline: "nearest",
              behavior: "smooth"
            });
          }
        }
      }
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c) {
        if (a != null) {
          a();
        }
      }
    }, [c]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: d,
      className: b("skill-item-Yt_Ld2", {
        "skill-item-selected-VYAEyH": n
      }),
      "data-testid": l,
      onClick: () => r == null ? undefined : r(),
      children: e.children
    }, t.skill_type);
  };
  let N = e => {
    let {
      skill: t,
      keyword: n,
      isNarrowMode: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
        skill_type: t.skill_type,
        className: "skill-item-icon-DHTLdA"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "skill-item-name-v3qPmS",
        children: reactJsxRuntimeCoreReexport.jsx(highlightSearchTextComponent.HighlightSearchTextComponent, {
          sourceString: (i ? t.show_name_short : t.show_name) || t.show_name,
          searchWords: n ? [n] : [],
          highlightStyle: {
            color: "var(--s-color-text-primary, #000)",
            background: "transparent"
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "skill-item-desc-nzeZGG",
        children: reactJsxRuntimeCoreReexport.jsx(highlightSearchTextComponent.HighlightSearchTextComponent, {
          sourceString: t.description,
          searchWords: n ? [n] : [],
          highlightStyle: {
            fontWeight: "400",
            color: "var(--s-color-text-tertiary, rgba(0, 0, 0, 0.4))",
            background: "transparent"
          }
        })
      }), t.sticky && reactJsxRuntimeCoreReexport.jsx(skillPinIcon.SkillPinIcon, {
        className: "p-2 !text-16 text-s-color-accents-blue"
      })]
    });
  };
  let R = e => {
    let {
      plugin: t
    } = chatPluginIocManager.skillBarItemHook(e.skill.skill_type);
    let n = reactJsxRuntimeCoreReexport.jsx(N, {
      ...e
    });
    let r = reactJsxRuntimeCoreReexport.jsx(P, {
      ...e,
      onClick: () => {
        var t;
        if ((t = e.onClick) !== null && t !== undefined) {
          t.call(e, {});
        }
      },
      children: n
    });
    let a = (t == null ? undefined : t.Component) || (t == null ? undefined : t.LiteComponent);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: r,
        children: reactJsxRuntimeCoreReexport.jsx(a, {
          skill: e.skill,
          from: e.from,
          onClick: e.pluginOnClick,
          renderContent: t => {
            let {
              onClick: i,
              keepMorePopover: r
            } = t;
            return reactJsxRuntimeCoreReexport.jsx(P, {
              ...e,
              onClick: () => {
                var t;
                if ((t = e.onClick) !== null && t !== undefined) {
                  t.call(e, {
                    keepMorePopover: r,
                    onlyReportEvent: true
                  });
                }
                if (i != null) {
                  i();
                }
              },
              children: n
            });
          }
        })
      });
    } else {
      return r;
    }
  };
  let I = e => {
    var t;
    let {
      width: n,
      from: o = "more_skills",
      onSelectSkill: s,
      initialFocusRef: u,
      scene: p,
      trackParams: h,
      bottomSlot: f
    } = e;
    let m = chatInputSkillSelectors.useInputSkillsSelector();
    let g = chatResponsiveSize.useChatScreenSize() === "sm";
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let y = chatViewCoreSelectors.useChatType();
    let [C, S] = reactCoreLibraryReexport.useState("");
    let E = reactCoreLibraryReexport.useRef("");
    let P = reactCoreLibraryReexport.useRef(true);
    let N = reactCoreLibraryReexport.useRef(false);
    let I = reactCoreLibraryReexport.useRef(false);
    let [O, M] = reactCoreLibraryReexport.useState("");
    let D = reactCoreLibraryReexport.useMemo(() => {
      return (m == null ? undefined : m.filter(e => {
        var t;
        var n;
        if (!C) {
          return true;
        }
        let i = g ? e.show_name_short : e.show_name;
        let {
          description: r
        } = e;
        return (i == null ? undefined : (t = i.toLocaleLowerCase()) === null || t === undefined ? undefined : t.includes(C.toLocaleLowerCase())) || (r == null ? undefined : (n = r.toLocaleLowerCase()) === null || n === undefined ? undefined : n.includes(C.toLocaleLowerCase()));
      })) ?? [];
    }, [m, C, g]);
    let [A, $] = reactCoreLibraryReexport.useState(p === "skills_menu" ? 0 : -1);
    let L = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (e != null) {
          e.updateSkillDropDownVisible(p);
        }
      });
      return () => {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
          if (e != null) {
            e.updateSkillDropDownVisible(undefined);
          }
        });
      };
    }, []);
    let F = reactCoreLibraryReexport.useRef({});
    let Z = (e, t, n) => {
      if (e && !F.current[e]) {
        F.current[e] = true;
        teaAnalyticsEventTracker.trackEvent("chat_action_bar_show", {
          show_scene: "keyboard_at",
          show_position: "keyboard_at",
          position: t,
          ...h,
          skill_name: skillTypeMappings.getSkillName(e),
          is_top: n ? "1" : "0",
          skill_id: e.toString()
        });
      }
    };
    let W = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
      click_scene: "skills_search_bar",
      chat_type: y,
      ...h
    }), 1000, {
      leading: true,
      trailing: false
    }), [h]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "more-skills-content-container-utq532",
      style: {
        width: `${n}px`
      },
      onClick: () => {
        var e;
        if (u == null) {
          return undefined;
        } else if ((e = u.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.focus();
        }
      },
      "data-testid": "chat_input_more_skill_menu",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "more-skill-input-w2yZJ_",
        children: reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
          onFocus: W,
          onChange: e => {
            E.current = e;
            if (E.current !== "") {
              P.current = false;
            }
            if (!N.current) {
              S(e);
              $(0);
            }
          },
          onCompositionStart: () => N.current = true,
          onCompositionEnd: e => {
            N.current = false;
            return S(e.currentTarget.value);
          },
          onKeyDown: e => {
            if (e.key === "Enter") {
              I.current = N.current;
            }
          },
          onKeyUp: e => {
            switch (e.key) {
              case "ArrowDown":
                M("ArrowDown");
                $(e => (e + 1) % (D == null ? undefined : D.length));
                break;
              case "ArrowUp":
                M("ArrowUp");
                $(e => (e - 1 + (D == null ? undefined : D.length)) % (D == null ? undefined : D.length));
                break;
              case "Enter":
                if (!N.current && A > -1 && (D == null ? undefined : D[A])) {
                  var t;
                  let e = (t = L.current) === null || t === undefined ? undefined : t.children[A];
                  if ((e == null ? undefined : e.tagName.toLowerCase()) === "div") {
                    e.click();
                  }
                }
                break;
              case "Escape":
              case "Tab":
                if (s != null) {
                  s();
                }
                break;
              case "Backspace":
                if (P.current && E.current === "") {
                  if (s != null) {
                    s();
                  }
                  return;
                }
                if (E.current === "") {
                  P.current = true;
                }
            }
          },
          ref: u,
          placeholder: _("search_skills_input_placeholder"),
          borderless: true
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "py-8",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: L,
          className: b("skill-item-list-l5xNxP", "flow-scrollbar"),
          "data-testid": "chat_footer_skill_bar",
          children: [(D == null ? undefined : D.length) ? D == null ? undefined : (t = D.map) === null || t === undefined ? undefined : t.call(D, (e, t) => {
            if (e == null ? undefined : e.skill_type) {
              return reactJsxRuntimeCoreReexport.jsx(R, {
                skill: e,
                isSelected: t === A,
                keyword: C,
                isNarrowMode: g,
                keydownDirection: O,
                from: o,
                pluginOnClick: () => s == null ? undefined : s(e.skill_type, chatStatusActionTypes.chatActionTypes.KeyboardAt, {
                  skipReport: true
                }, t, e.sticky),
                onClick: n => s == null ? undefined : s(e.skill_type, chatStatusActionTypes.chatActionTypes.KeyboardAt, n, t, e.sticky),
                onShow: () => Z(e.skill_type, t, e.sticky),
                "data-testid": `skill_bar_button_${e.skill_type}`
              }, e.skill_type ?? t);
            } else {
              return null;
            }
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                flex items-center justify-center bg-s-color-bg-trans-primary
                p-10 text-s-color-text-quaternary select-none
              `,
            children: _("search_skills_empty_info")
          }), f == null ? undefined : f()]
        })
      })]
    });
  };
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  let M = e => e === chatStatusActionTypes.chatActionTypes.ClickSkill ? "bottom_bar" : e === chatStatusActionTypes.chatActionTypes.KeyboardAt ? "keyboard_at" : undefined;
  let D = e => {
    let {
      activeSkillType: t,
      trackParams: n
    } = e;
    let i = chatViewCoreSelectors.useChatId();
    let {
      onClickGuestDisabled: r
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "unlog_click_skills",
      checkNewGuidanceAb: true
    });
    let s = useLatestCallbackHook_1.useLatestCallback(function ({
      skillType: e,
      skillFrom: i,
      sticky: r,
      recommendTag: o,
      showPosition: l,
      position: s
    } = {}) {
      let u = M(i);
      if (e) {
        teaAnalyticsEventTracker.trackEvent("chat_action_bar_click", {
          is_recommended: skillStatusMapper.getSkillType(o),
          show_scene: u,
          show_position: l,
          position: s,
          is_top: r ? "1" : "0",
          ...n,
          skill_name: skillTypeMappings.getSkillName(e),
          skill_id: e.toString()
        });
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(t => {
          if (t != null) {
            t.createSkillReportEvent({
              skillType: e,
              eventName: "skill_bar_open_input",
              meta: {
                skill_type: e,
                skill_type_str: skillTypeMappings.formatSkillId(e),
                skill_id: skillTypeMappings.formatSkillId(e),
                recommend_tag: o,
                click_scene: u,
                show_position: l,
                position: s
              }
            });
          }
        });
      } else {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "skill_bar_button_click_close",
          meta: {
            skill_type: String(t),
            is_guest: !userInfoStatusSelectors.selectUserInfoSuccess(),
            recommend_tag: o,
            click_scene: u
          }
        });
        teaAnalyticsEventTracker.trackEvent("skill_module_close", {
          show_scene: u,
          ...n,
          skill_name: skillTypeMappings.getSkillName(t),
          skill_id: t == null ? undefined : t.toString()
        });
      }
    });
    let u = useLatestCallbackHook_1.useLatestCallback(async function (e = {}) {
      if (!(await r())) {
        return;
      }
      let {
        recommendTag: t,
        skillType: n,
        skillFrom: l,
        skipReport: c = false
      } = e;
      if (!c) {
        s(e);
      }
      chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (e != null) {
          e.updateSelectedRecommendSkill(t ? {
            skill_type: n,
            tag: t
          } : undefined);
        }
      });
      if (n) {
        chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(i ?? "", n, l);
      } else {
        chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(i ?? "");
      }
    });
    return {
      onClickGuestDisabled: r,
      reportSelectSkill: s,
      selectSkill: u
    };
  };
  let A = e => {
    let {
      selectSkill: n,
      reportSelectSkill: r,
      ...a
    } = e;
    let {
      chatInputRef: o
    } = chatRefsContext.useChatRefs();
    let {
      chatId: c,
      chatType: d
    } = chatViewCoreSelectors.useChatViewConfig() ?? {};
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let f = async function () {
      var e;
      var t;
      var i;
      var r;
      var a;
      var l = arguments.length;
      var s = Array(l);
      var c = 0;
      for (; c < l; c++) {
        s[c] = arguments[c];
      }
      h(false);
      await n(...s);
      if (((t = o.current) === null || t === undefined ? undefined : (e = t.getText) === null || e === undefined ? undefined : e.call(t)) === "@") {
        if ((a = o.current) !== null && a !== undefined) {
          a.clear();
        }
      }
      if (o != null && (r = o.current) !== null && r !== undefined && (i = r.focus) !== null && i !== undefined) {
        i.call(r);
      }
    };
    let m = chatConversationSelectors.selectConvLink(c || "", d);
    let g = (e, t, n, i, a) => {
      if (n == null ? undefined : n.onlyReportEvent) {
        r({
          skillType: e,
          skillFrom: t,
          showPosition: "keyboard_at",
          position: i,
          sticky: a
        });
      } else {
        f({
          skillType: e,
          skillFrom: t,
          showPosition: "keyboard_at",
          position: i,
          skipReport: n == null ? undefined : n.skipReport
        });
      }
      if (!(n == null ? undefined : n.keepMorePopover)) {
        h(false);
      }
    };
    return {
      moreVis: p,
      setMoreVis: h,
      enabled: m,
      popoverProps: {
        spacing: 0,
        visible: p,
        onVisibleChange: h,
        content: e => {
          let {
            initialFocusRef: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(I, {
            ...a,
            initialFocusRef: t,
            onSelectSkill: g
          });
        },
        onClickOutSide: () => f(),
        onEscKeyDown: () => f(),
        trigger: "custom",
        position: "topLeft",
        style: {
          borderRadius: "16px",
          boxShadow: "0px 30px 100px 0px rgba(0, 0, 0, 0.15)"
        }
      }
    };
  };
  require.d(exports, {
    useSkillSelection: function () {
      return D;
    },
    useSkillPopover: function () {
      return A;
    }
  });
}