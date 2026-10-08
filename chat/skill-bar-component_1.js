// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 773090
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatTargetTypes = require("chat-target-types") /*id: 909338*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let y = () => {
    let e = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let t = userInfoStatusSelectors.selectUserInfoLoading();
    let i = chatFgStoreHooks.getSourceValue("ab_config.ab_results.action_bar_need_login", {
      source: chatStorageKeys.chatStorageKeys.setting
    }) === "1";
    return {
      checkAndOpenLoginModal: reactFunctionMemoHook.useMemoizedCallback(async r => {
        let {
          skillId: o
        } = r;
        if ((o === chatAppEnums.SkillType.AIPPTSlides.toString() || i) && !e && !t) {
          let {
            openLoginModal: e,
            LoginOpenSource: t
          } = await asyncRetryUtils.retryWithFallback({
            fn: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("animation-date-ui-utilities") /*id: 50072*/, require.e("semi-ui-tooltip-button") /*id: 5568*/, require.e("semi-form-input-components") /*id: 40786*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-ui-components") /*id: 50418*/, require.e("authentication-login-age-gate") /*id: 64831*/]).then(require.bind(require, "auth-login-flow-manager") /*id: 912301*/).then(e => {
              let {
                openLoginModal: t
              } = e.useLoginModal();
              return {
                openLoginModal: t,
                LoginOpenSource: e.LoginOpenSource
              };
            })
          });
          return !!e && (e({
            trackInfo: {
              source: t.UNLOGIN_ACTIONBAR_SKILL,
              login_skill_id: o
            }
          }), true);
        }
        return false;
      })
    };
  };
  (i = {}).Skills = "skills";
  i.ChangeIndex = "change_index";
  let E = i;
  (r = {}).More = "more";
  r.Default = "default";
  r.KeyboardAt = "keyboard_at";
  let x = r;
  (o = {}).Landing = "landing";
  o.BottomBar = "bottom_bar";
  o.KeyboardAt = "keyboard_at";
  let T = o;
  (a = {}).NewSkill = "new_skill";
  a.SuggestedSkill = "suggested_skill";
  a.UpgradeSkill = "upgrade_skill";
  let k = a;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var chatBotStateConstants = require("chat-bot-state-constants") /*id: 924042*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let L = e => {
    if (e !== undefined) {
      return {
        [chatAiConstants.itemStatus.New]: k.NewSkill,
        [chatAiConstants.itemStatus.Recommend]: k.SuggestedSkill,
        [chatAiConstants.itemStatus.Upgrade]: k.UpgradeSkill
      }[e];
    }
  };
  let O = e => ({
    skill_id: e.skillType ? String(e.skillType) : undefined,
    skill_name: e.skillName || skillTypeMappings.getSkillName(e.skillType),
    show_position: e.showPosition,
    position: e.position,
    is_top: typeof e.sticky == "boolean" ? e.sticky ? "1" : "0" : undefined,
    show_scene: e.showScene,
    is_recommended: L(e.recommendTag),
    conversation_id: e.conversationId,
    conversation_type: e.conversationType,
    bot_id: e.botId,
    open_from: e.openFrom
  });
  let B = e => {
    teaAnalyticsEventTracker.trackEvent("chat_action_bar_show", O(e));
  };
  let G = e => {
    teaAnalyticsEventTracker.trackEvent("chat_action_bar_click", O(e));
  };
  let j = e => {
    teaAnalyticsEventTracker.trackEvent("chat_action_bar_close", O(e));
  };
  var eventTrackerInstance = require("event-tracker-instance") /*id: 176600*/;
  let U = "skill-bar-button";
  let F = () => document.querySelectorAll(`.${U}`).length > 0;
  let V = e => {
    let {
      visible: t,
      displaySkills: n,
      reportParams: i
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t && (n == null ? undefined : n.length) !== 0) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "skill_bar_show_start",
          meta: i
        });
        setTimeout(() => {
          if (F()) {
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "skill_bar_show_success",
              meta: i
            });
          }
        }, 300);
      }
    }, []);
  };
  let Z = e => {
    let t = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "guidance_page_show",
        meta: {
          success: "1",
          new_guidance: "1",
          is_skill_bar_bottom: "1"
        }
      });
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        setTimeout(() => {
          if (F()) {
            t();
          }
        }, 300);
      }
    }, [e]);
  };
  let z = e => {
    let {
      visibleCount: t,
      skillList: n,
      chatId: i,
      initialized: r
    } = e;
    let o = reactCoreLibraryReexport.useRef(t);
    o.current = t;
    let a = e => {
      let {
        skillType: t,
        skillName: r,
        showPosition: a,
        sticky: l,
        recommendTag: s,
        position: u,
        showScene: c,
        openFrom: d
      } = e;
      let h = isNumberUtil.isNumber(u) ? u : n.findIndex(e => e.skill_type === t);
      return {
        skillType: t,
        skillName: r,
        showPosition: a ?? (h < o.current ? x.Default : x.More),
        openFrom: d || "default",
        position: h === -1 ? undefined : h,
        sticky: l,
        showScene: c ?? T.Landing,
        recommendTag: s,
        conversationId: i,
        conversationType: chatBotStateConstants.botTypes.CocoSub,
        botId: chatConstantId.chatConstantId
      };
    };
    let s = (e, t) => {
      switch (e) {
        case "show":
          B(a(t));
          break;
        case "click":
          G(a(t));
          break;
        case "close":
          j(a(t));
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      eventTrackerInstance.eventTracker.on(s);
      eventTrackerInstance.eventTracker.stopCache();
      return () => {
        eventTrackerInstance.eventTracker.off(s);
      };
    }, []);
    Z(t > 0);
    V({
      visible: r,
      displaySkills: n,
      reportParams: {
        skill_count: n.length,
        visible_count: t
      }
    });
    return null;
  };
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var svgFaceIconComponent = require("svg-face-icon-component") /*id: 719541*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let q = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      disabled: n,
      className: i,
      children: r,
      leadingIcon: o,
      asTool: a,
      ...l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      color: "grey-outline",
      variant: "rectangle",
      leadingIcon: o,
      disabled: n,
      ...l,
      ref: t,
      className: d(a ? "h-32 !outline-transparent !px-8 !rounded-dbx-xl [&_svg:not([class*=\"size-\"])]:size-[18px]" : "h-34 !rounded-dbx-xl px-10", "flex text-14 gap-4 text-dbx-text-primary", i),
      children: r
    });
  });
  let Y = e => {
    let {
      skillMeta: t
    } = e;
    let n = reactCoreLibraryReexport.useMemo(() => (t == null ? undefined : t.Tag) || reactCoreLibraryReexport.Fragment, []);
    return reactJsxRuntimeCoreReexport.jsx(n, {
      type: "default"
    });
  };
  let J = e => {
    let {
      skillMeta: t,
      recommendTag: n,
      initialized: i,
      customNode: r,
      onShow: o,
      onClick: a,
      asTool: s
    } = e;
    let {
      skill_type: u,
      DBXIcon: c,
      Icon: d,
      show_name: h
    } = t;
    let {
      plugin: g
    } = chatPluginIocManager.skillBarItemHook(t.skill_type);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        if (o != null) {
          o();
        }
      }
    }, [i]);
    let f = n ? `recommend_skill_bar_button_${u}` : `skill_bar_button_${u}`;
    let p = {
      "data-component-type": "skill-item",
      "data-skill-id": f,
      "data-testid": f,
      onClick: a
    };
    let {
      LiteComponent: _
    } = g ?? {};
    let {
      pageInteractive: v
    } = chatStoreManager.useStoreSelector("flowWebLayoutStore");
    let b = reactJsxRuntimeCoreReexport.jsx(q, {
      ...p,
      className: `
        ${U}
        ${i ? "opacity-100" : "opacity-0"}
      `,
      leadingIcon: c ? reactJsxRuntimeCoreReexport.jsx(c, {}) : reactJsxRuntimeCoreReexport.jsx(d, {}),
      asTool: s,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center gap-4",
        children: [h, r]
      })
    });
    if (_ && v) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: b,
        children: reactJsxRuntimeCoreReexport.jsx(_, {
          skill: t,
          showName: h,
          onClick: a,
          className: i ? "opacity-100" : "opacity-0",
          renderContent: e => {
            let {
              onClick: t,
              customNode: n = r,
              showName: i = h
            } = e;
            return reactJsxRuntimeCoreReexport.jsxs(q, {
              ...p,
              onClick: t,
              leadingIcon: c ? reactJsxRuntimeCoreReexport.jsx(c, {}) : reactJsxRuntimeCoreReexport.jsx(d, {}),
              asTool: s,
              children: [i, n]
            });
          }
        })
      });
    } else {
      return b;
    }
  };
  let ee = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      onShow: n,
      onClick: i,
      asTool: r
    } = e;
    let o = i18nTranslationUtils.getTranslationFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (n != null) {
        n();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(q, {
      ref: t,
      "data-test-id": "skill_bar_button_more",
      onClick: i,
      leadingIcon: reactJsxRuntimeCoreReexport.jsx(svgFaceIconComponent.FaceIcon, {
        className: "block shrink-0"
      }),
      className: U,
      asTool: r,
      children: o("skills_more_button_title")
    });
  });
  let et = () => {
    let {
      recommendSkills: e,
      skillMap: t
    } = chatStoreManager.useStoreSelector("skillStore", e => ({
      skillMap: e.skillMap,
      recommendSkills: e.recommendSkills
    }), deepEqualityUtil.deepEqual);
    return reactCoreLibraryReexport.useMemo(() => (e ?? []).map(e => {
      if (!e.skill_type) {
        return;
      }
      let n = t[e.skill_type];
      if (n) {
        return {
          ...n,
          recommendTag: e.tag
        };
      }
    }), [e, t])[0];
  };
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  let er = e => {
    let {
      chatType: t,
      initialized: i,
      recommendSkill: r,
      onClick: o,
      asTool: a
    } = e;
    let s = reactCoreLibraryReexport.useMemo(() => {
      if (r) {
        if (Number(r == null ? undefined : r.recommendTag) === 4) {
          let e = (r == null ? undefined : r.Tag) || reactCoreLibraryReexport.Fragment;
          return function () {
            return reactJsxRuntimeCoreReexport.jsx(e, {
              type: "recommend",
              skill: r
            });
          };
        }
        return reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => ({
          default: (await require.e("ondemand-recommand-skill") /*id: 30198*/.then(require.bind(require, "recommend-tag-component") /*id: 478670*/)).RecommendTag
        })));
      }
      return null;
    }, [r]);
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(J, {
        skillMeta: r,
        chatType: t,
        recommendTag: r.recommendTag,
        initialized: i,
        asTool: a,
        customNode: s ? reactJsxRuntimeCoreReexport.jsx(s, {
          recommendTag: r.recommendTag,
          onClose: () => {
            if (r.skill_type) {
              chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
                if (e != null) {
                  e.disableRecommendSkill(r.skill_type);
                }
              });
              eventTrackerInstance.eventTracker.track("close", {
                skillType: r.skill_type,
                recommendTag: r.recommendTag,
                openFrom: "default"
              });
            }
          }
        }) : null,
        onShow: () => {
          eventTrackerInstance.eventTracker.track("show", {
            skillType: r.skill_type,
            recommendTag: r.recommendTag,
            showPosition: x.Default,
            openFrom: "default"
          });
        },
        onClick: () => {
          eventTrackerInstance.eventTracker.track("click", {
            skillType: r.skill_type,
            recommendTag: r.recommendTag,
            showPosition: x.Default,
            openFrom: "default"
          });
          o({
            skillType: r.skill_type
          });
        }
      });
    } else {
      return null;
    }
  };
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  let ea = e => {};
  let el = new Promise(e => ea = e);
  let es = e => {
    if (e.current) {
      clearTimeout(e.current);
      e.current = null;
    }
  };
  let eu = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    await el;
    return await require.e("ondemand-skill-bar") /*id: 84200*/.then(require.bind(require, "skill-bar-more-content-component") /*id: 44296*/).then(e => ({
      default: e.MoreSkillContent
    }));
  }), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "h-120 w-160"
  }));
  let ec = reactCoreLibraryReexport.lazy(async () => {
    await el;
    return await require.e("ondemand-skill-bar") /*id: 84200*/.then(require.bind(require, "dbx-popover-components") /*id: 457187*/).then(e => ({
      default: e.DbxPopover
    }));
  });
  let ed = e => {
    let {
      children: t,
      onVisibleChange: n,
      openFromRef: i,
      contentHovering: r,
      ...o
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let s = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (o.visible) {
        ea(true);
      }
    }, [o.visible]);
    let u = debounceUtil_1_1.debounce(() => {
      es(s);
      ea(true);
      if (n != null) {
        n(true);
      }
      i.current = "hover";
    }, 300, {
      leading: true,
      trailing: false
    });
    let c = reactJsxRuntimeCoreReexport.jsxs("div", {
      onMouseEnter: u,
      onMouseLeave: () => {
        s.current = setTimeout(() => {
          es(s);
          if (!r.current && n != null) {
            n(false);
          }
        }, 300);
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: d("w-0 h-0 *:!z-1"),
        ref: a
      }), t]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: c,
      children: reactJsxRuntimeCoreReexport.jsx(ec, {
        ...o,
        onVisibleChange: n,
        getPopupContainer: () => a.current,
        onClickOutSide: e => {
          var t;
          var i;
          if (!e.target || !((i = a.current) === null || i === undefined ? undefined : (t = i.parentNode) === null || t === undefined ? undefined : t.contains(e.target))) {
            if (n != null) {
              n(false);
            }
          }
        },
        children: c
      })
    });
  };
  let eh = e => {
    let [t, n] = reactCoreLibraryReexport.useState(false);
    let i = reactCoreLibraryReexport.useRef(false);
    let r = reactCoreLibraryReexport.useRef(null);
    let o = reactCoreLibraryReexport.useRef("hover");
    let a = {
      contentHovering: i,
      openFromRef: o,
      position: "topLeft",
      trigger: "custom",
      visible: t,
      onVisibleChange: e => {
        es(r);
        n(e);
        if (!e) {
          i.current = false;
        }
      },
      className: "p-4 min-w-150",
      content: reactJsxRuntimeCoreReexport.jsx(eu, {
        ...e,
        openFromRef: o,
        onMouseEnter: () => {
          es(r);
          i.current = true;
        },
        onMouseLeave: () => {
          r.current = setTimeout(() => {
            es(r);
            i.current = false;
            n(false);
          }, 300);
        },
        setVisible: n
      })
    };
    return {
      setShowMore: n,
      popoverProps: a
    };
  };
  let em = e => {
    let {
      resetTrigger: t,
      updateChildrenWidth: n,
      resetSkillBarArrangement: i
    } = e;
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (t > 0) {
        n();
        i();
      }
    }, [t]);
  };
  let eg = e => {
    let {
      mode: t,
      skillList: n,
      showRecommendSkill: i,
      skillBarVisible: r = true,
      gap: o = 12
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState(false);
    let [u, c] = reactCoreLibraryReexport.useState(0);
    let [d, h] = reactCoreLibraryReexport.useState(true);
    let [m, g] = reactCoreLibraryReexport.useState(0);
    let f = reactCoreLibraryReexport.useRef(null);
    let [p, _] = reactCoreLibraryReexport.useState(null);
    let v = reactCoreLibraryReexport.useRef([]);
    let b = reactCoreLibraryReexport.useRef(0);
    let S = reactCoreLibraryReexport.useRef(90);
    let P = t === "desktop" ? 1 : 2;
    let C = (t === "desktop" ? 88 : 36) + !!i * 140;
    em({
      childrenRef: v,
      resetTrigger: m,
      setResetTrigger: g,
      updateChildrenWidth: () => {
        if (!f.current) {
          return false;
        }
        let t = [...f.current.children].map(e => {
          var t;
          return {
            width: e.getBoundingClientRect().width,
            skillId: e.getAttribute("data-skill-id") || ((t = e.querySelector("[data-component-type=\"skill-item\"]")) === null || t === undefined ? undefined : t.getAttribute("data-skill-id")) || null
          };
        });
        if (!v.current.length) {
          v.current = t;
          return;
        }
        if (t.reduce((e, t) => e + t.width, 0) !== v.current.reduce((e, t) => e + t.width, 0)) {
          v.current = [...(v.current ?? [])].map(e => t.find(t => t.skillId === e.skillId) || e);
        }
      },
      resetSkillBarArrangement: () => {
        if (!f.current || a && d) {
          return;
        }
        let e = 0;
        let t = 0;
        let i = f.current.offsetWidth;
        S.current = f.current.clientHeight;
        for (let n of v.current) {
          let {
            width: r,
            skillId: a
          } = n;
          if (e + r + o <= (i - C) * P) {
            e += r + o;
            if (a && /^skill_bar_button_.+$/.test(a)) {
              t += 1;
            }
          } else {
            break;
          }
        }
        c(t);
        h(t === n.length);
        b.current = i;
        if (!a) {
          s(true);
        }
      }
    });
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (n.length && r) {
        g(e => e + 1);
      }
    }, [n.length, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (a && f.current && r) {
        g(e => e + 1);
      }
    }, [i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!a || !f.current) {
        return;
      }
      let e = new ResizeObserver(e => {
        let t = e[0];
        if ((t == null ? undefined : t.contentRect.width) && Math.abs(b.current - t.contentRect.width) > C * 0.5) {
          g(e => e + 1);
        }
      });
      e.observe(f.current);
      return () => e.disconnect();
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!a || !f.current || !p) {
        return;
      }
      let e = new IntersectionObserver(e => {
        let n = e[0];
        if ((n == null ? undefined : n.rootBounds) && n.target.getBoundingClientRect().right > n.rootBounds?.right) {
          g(e => e + 1);
        }
      }, {
        root: f.current,
        threshold: 0.99
      });
      e.observe(p);
      return () => e.disconnect();
    }, [a, p]);
    return {
      initialized: a,
      visibleCount: u,
      showAll: d,
      setShowAll: h,
      containerRef: f,
      containerHeight: S.current,
      containerWidth: b.current,
      setMoreButtonTarget: _
    };
  };
  let ef = () => {
    let e = et();
    let {
      inputSkills: t,
      skillMap: n
    } = chatStoreManager.useStoreSelector("skillStore", e => ({
      inputSkills: e.inputSkills,
      skillMap: e.skillMap
    }), deepEqualityUtil.deepEqual);
    return {
      inputSkillList: reactCoreLibraryReexport.useMemo(() => (t ?? []).map(e => {
        if (!e.skill_type) {
          return null;
        }
        let t = n[e.skill_type];
        if (t) {
          return {
            ...t
          };
        } else {
          return null;
        }
      }).filter(t => t !== null && (!(e == null ? undefined : e.skill_type) || t.skill_type !== (e == null ? undefined : e.skill_type))), [t, n]),
      recommendSkill: e
    };
  };
  let ep = e => {
    let {
      mode: t,
      className: n,
      chatId: i,
      chatType: r,
      isVisible: o,
      scene: a,
      asTool: s
    } = e;
    let {
      inputSkillList: c,
      recommendSkill: v
    } = ef();
    let b = chatStoreManager.useStoreSelector("chatInputStore", e => e.skillEngineConfig);
    let S = (b == null ? undefined : b.generic) ? "inputEngine" : "guidanceInput";
    let {
      initialized: P,
      visibleCount: C,
      containerRef: k,
      setMoreButtonTarget: R
    } = eg({
      mode: t,
      skillList: c,
      skillBarVisible: o,
      gap: 4
    });
    let {
      checkAndOpenLoginModal: w
    } = y();
    let I = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let {
        skillType: t,
        skillFrom: n
      } = e;
      if (!(await w({
        skillId: t.toString()
      }))) {
        chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(i, t, n ?? chatStatusActionTypes.chatActionTypes.ClickSkill);
      }
    });
    let M = P ? c.slice(0, C) : c;
    let {
      setShowMore: A,
      popoverProps: D
    } = eh({
      skillList: c,
      visibleCount: C,
      chatId: i,
      handleClickSkillItem: I
    });
    let N = e => {
      var t;
      return {
        skillType: e.skill_type,
        sticky: (t = objectPathGetDefault.getObjectPathDefault(e, "sticky")) !== null && t !== undefined && t,
        showScene: a === "bottom_bar" ? T.BottomBar : T.Landing,
        openFrom: "default"
      };
    };
    let L = () => ({
      skillName: E.Skills,
      showPosition: x.Default,
      showScene: a === "bottom_bar" ? T.BottomBar : T.Landing,
      openFrom: "default"
    });
    let O = reactCoreLibraryReexport.useRef(new Map());
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof performance != "undefined" && typeof performance.mark == "function") {
        performance.mark("TTV_skills", {
          detail: {
            version: S
          }
        });
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (P && typeof performance != "undefined" && typeof performance.mark == "function") {
        performance.mark("TTU_skills", {
          detail: {
            version: S
          }
        });
      }
    }, [P]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(z, {
        chatId: i,
        skillList: c,
        initialized: P,
        visibleCount: C
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d("flex flex-row justify-start !items-start w-full", s ? "gap-4" : "gap-6", "flex-nowrap", n),
        ref: k,
        "data-testid": "guidance-skill-bar",
        children: [reactJsxRuntimeCoreReexport.jsx(er, {
          chatType: r,
          asTool: s,
          initialized: P,
          recommendSkill: v ?? undefined,
          onClick: I
        }), !P && M.slice(0, 3).map(e => reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
          errorBoundaryName: "skill_item_error",
          logger: loggerServiceCore.defaultLogger,
          errorBoundaryScope: chatTargetTypes.chatTargetTypes.Component,
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: reactJsxRuntimeCoreReexport.jsx(J, {
            skillMeta: e,
            chatType: r,
            initialized: true,
            customNode: e.Tag ? reactJsxRuntimeCoreReexport.jsx(Y, {
              skillMeta: e
            }) : undefined,
            onShow: () => {},
            onClick: () => {
              I({
                skillType: e.skill_type
              });
              eventTrackerInstance.eventTracker.track("click", {
                ...N(e),
                showPosition: x.Default
              });
            },
            asTool: s
          }, e.skill_type)
        }, e.skill_type)), M.map(e => reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
          errorBoundaryName: "skill_item_error",
          logger: loggerServiceCore.defaultLogger,
          errorBoundaryScope: chatTargetTypes.chatTargetTypes.Component,
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: reactJsxRuntimeCoreReexport.jsx(J, {
            skillMeta: e,
            chatType: r,
            initialized: P,
            customNode: e.Tag ? reactJsxRuntimeCoreReexport.jsx(Y, {
              skillMeta: e
            }) : undefined,
            onShow: () => {
              if (!O.current.has(e.skill_type)) {
                O.current.set(e.skill_type, 1);
                eventTrackerInstance.eventTracker.track("show", N(e));
              }
            },
            onClick: () => {
              eventTrackerInstance.eventTracker.track("click", N(e));
              I({
                skillType: e.skill_type
              });
            },
            asTool: s
          }, e.skill_type)
        }, e.skill_type)), c.length > 0 && reactJsxRuntimeCoreReexport.jsx(ed, {
          ...D,
          children: reactJsxRuntimeCoreReexport.jsx(ee, {
            ref: R,
            onShow: () => {
              if (!O.current.has("skills")) {
                O.current.set("skills", 1);
                eventTrackerInstance.eventTracker.track("show", L());
              }
            },
            onClick: () => {
              eventTrackerInstance.eventTracker.track("click", L());
              D.openFromRef.current = "click";
              A(e => !e);
            },
            asTool: s
          })
        })]
      }, a)]
    });
  };
  require.d(exports, {
    SkillBar: function () {
      return ep;
    }
  });
}