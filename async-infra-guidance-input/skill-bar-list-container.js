// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'SkillBarList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 786257
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var chatLauncherSettingsHook = require("chat-launcher-settings-hook") /*id: 440854*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      className: t,
      testid: n,
      customNode: o,
      onClick: l,
      onShow: a,
      children: c
    } = e;
    let {
      ref: u,
      inView: d
    } = reactIntersectionObserver_1.useInView();
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        if (a != null) {
          a();
        }
      }
    }, [d]);
    return reactJsxRuntimeCoreReexport.jsxs("button", {
      ref: u,
      className: s("py-8 px-6 rounded-s-radius-xxss hover:bg-s-color-bg-trans flex items-center gap-12 cursor-pointer border-none bg-transparent w-full justify-start text-left outline-none", t),
      "data-testid": n,
      onClick: l,
      children: [c, o]
    });
  };
  let h = e => {
    let {
      item: t,
      isNarrowMode: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
        className: "p-2 !text-16 text-s-color-text-primary",
        skill_type: t.skill_type
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        className: "text-s-color-text-secondary s-font-small-strong",
        children: (n ? t.show_name_short : t.show_name) || t.show_name
      })]
    });
  };
  let m = e => {
    let {
      item: t,
      className: n,
      isNarrowMode: i,
      testid: o,
      from: s = "more_skills",
      pluginOnClick: l,
      onClick: c,
      onShow: u
    } = e;
    let {
      plugin: d
    } = chatPluginIocManager.skillBarItemHook(t.skill_type);
    let p = {
      item: t,
      className: n,
      isNarrowMode: i,
      testid: o,
      onShow: u,
      onClick: () => c == null ? undefined : c({})
    };
    let m = reactJsxRuntimeCoreReexport.jsx(h, {
      item: t,
      isNarrowMode: i
    });
    let f = reactJsxRuntimeCoreReexport.jsx(v, {
      ...p,
      children: m
    });
    let g = (d == null ? undefined : d.Component) || (d == null ? undefined : d.LiteComponent);
    if (g) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: f,
        children: reactJsxRuntimeCoreReexport.jsx(g, {
          skill: t,
          from: s,
          onClick: l,
          renderContent: e => {
            let {
              onClick: t,
              keepMorePopover: n,
              customNode: i
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(v, {
              ...p,
              customNode: i,
              onClick: () => {
                if (c != null) {
                  c({
                    keepMorePopover: n,
                    onlyReportEvent: true
                  });
                }
                if (t != null) {
                  t();
                }
              },
              children: m
            });
          }
        })
      });
    } else {
      return f;
    }
  };
  let f = e => {
    let {
      className: t,
      items: n,
      activeIndex: o,
      activeItemClassName: a,
      itemClassName: p,
      isNarrowMode: v = false,
      from: h,
      enableSkillPin: f = true,
      onSelectSkill: g,
      onClickSkillPin: y,
      onSkillShow: b,
      onSkillPinShow: S,
      skillItemListRef: k
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let {
      ref: w,
      inView: E
    } = reactIntersectionObserver_1.useInView();
    let {
      trimSkills: C
    } = chatLauncherSettingsHook.useLauncherSettings();
    reactCoreLibraryReexport.useEffect(() => {
      if (E) {
        if (S != null) {
          S();
        }
      }
    }, [E]);
    let x = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: k,
      className: t,
      children: [n == null ? undefined : n.map((e, t) => {
        return reactJsxRuntimeCoreReexport.jsx(m, {
          item: e,
          className: s(p, t === o ? a : ""),
          isNarrowMode: v,
          from: h,
          testid: `skill_bar_button_${e.skill_type}`,
          onShow: () => b == null ? undefined : b(e),
          pluginOnClick: () => {
            if (g != null) {
              g(e.skill_type, chatStatusActionTypes.chatActionTypes.ClickSkill, {
                skipReport: true
              }, t, e == null ? undefined : e.sticky);
            }
          },
          onClick: n => g == null ? undefined : g(e.skill_type, chatStatusActionTypes.chatActionTypes.ClickSkill, n, t, e == null ? undefined : e.sticky)
        }, e.skill_type ?? t);
      }), x && f && !C && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
              mx-4 my-4 border-t-0 border-b-[0.5px] border-solid
              border-s-color-border-secondary
            `
        }), reactJsxRuntimeCoreReexport.jsx("button", {
          ref: w,
          className: s("py-8 px-12 text-s-color-text-secondary s-font-small-strong border-none hover:bg-s-color-bg-trans bg-transparent cursor-pointer rounded-s-radius-xxss w-full text-left outline-none", p, v ? "!text-12" : ""),
          onClick: y,
          children: T("web_chat_skill_menuOption_settings")
        })]
      })]
    });
  };
  require.d(exports, {
    SkillBarList: function () {
      return f;
    }
  });
}