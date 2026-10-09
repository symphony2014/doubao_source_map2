// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'SkillBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-guidance-input.f8202b74.js
         * chunkId: 48684
         * moduleId: 215451
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var gridLayoutIcon = require("grid-layout-icon") /*id: 686240*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      skill_type: t,
      colorful: n = false,
      ...r
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      try {
        e = chatStoreManager.getStore("skillStore").subscribe(e => e.skillMap, e => {
          l(e);
        }, {
          fireImmediately: true
        });
      } catch {}
      return () => {
        if (e != null) {
          e();
        }
      };
    }, []);
    let s = t ? o[t] : undefined;
    let {
      plugin: p
    } = chatPluginIocManager.skillBarItemHook(t);
    let h = !!n && (s == null ? undefined : s.ColorfulIcon) || !!n && (p == null ? undefined : p.ColorfulIcon) || (s == null ? undefined : s.DBXIcon) || (p == null ? undefined : p.icon) || gridLayoutIcon.GridLayoutIcon;
    return reactJsxRuntimeCoreReexport.jsx(h, {
      ...r
    });
  };
  let h = e => {
    let {
      className: t,
      testid: n,
      customNode: r,
      onClick: l,
      onShow: a,
      children: u
    } = e;
    let {
      ref: c,
      inView: p
    } = reactIntersectionObserver_1.useInView();
    reactCoreLibraryReexport.useEffect(() => {
      if (p) {
        if (a != null) {
          a();
        }
      }
    }, [p]);
    return reactJsxRuntimeCoreReexport.jsxs("button", {
      ref: c,
      className: o("py-8 px-10 rounded-6 hover:bg-s-color-bg-trans flex items-center gap-8 cursor-pointer border-none bg-transparent w-full justify-start text-left outline-none", t),
      "data-testid": n,
      onClick: l,
      children: [u, r]
    });
  };
  let f = e => {
    let {
      item: t,
      isNarrowMode: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(p, {
        className: `
          flex !size-16 items-center justify-center text-s-color-text-primary
        `,
        skill_type: t.skill_type
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        className: "text-14 leading-22 font-normal text-dbx-text-primary",
        children: (n ? t.show_name_short : t.show_name) || t.show_name
      })]
    });
  };
  let m = e => {
    let {
      item: t,
      className: n,
      isNarrowMode: r,
      testid: o,
      from: l = "more_skills",
      pluginOnClick: s,
      onClick: u,
      onShow: c
    } = e;
    let {
      plugin: p
    } = chatPluginIocManager.skillBarItemHook(t.skill_type);
    let m = {
      item: t,
      className: n,
      isNarrowMode: r,
      testid: o,
      onShow: c,
      onClick: () => u == null ? undefined : u({})
    };
    let v = reactJsxRuntimeCoreReexport.jsx(f, {
      item: t,
      isNarrowMode: r
    });
    let g = reactJsxRuntimeCoreReexport.jsx(h, {
      ...m,
      children: v
    });
    let _ = (p == null ? undefined : p.Component) || (p == null ? undefined : p.LiteComponent);
    if (_) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: g,
        children: reactJsxRuntimeCoreReexport.jsx(_, {
          skill: t,
          from: l,
          onClick: s,
          renderContent: e => {
            let {
              onClick: t,
              keepMorePopover: n,
              customNode: i
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(h, {
              ...m,
              customNode: i,
              onClick: () => {
                if (u != null) {
                  u({
                    keepMorePopover: n,
                    onlyReportEvent: true
                  });
                }
                if (t != null) {
                  t();
                }
              },
              children: v
            });
          }
        })
      });
    } else {
      return g;
    }
  };
  let v = e => {
    let {
      className: t,
      items: n,
      activeIndex: i,
      activeItemClassName: r,
      itemClassName: a,
      isNarrowMode: s = false,
      from: u,
      onSelectSkill: c,
      onSkillShow: p,
      skillItemListRef: h,
      onMouseEnter: f,
      onMouseLeave: v
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: h,
      onMouseEnter: f,
      onMouseLeave: v,
      className: t,
      children: n == null ? undefined : n.map((e, t) => {
        return reactJsxRuntimeCoreReexport.jsx(m, {
          item: e,
          className: o(a, t === i ? r : ""),
          isNarrowMode: s,
          from: u,
          testid: `skill_bar_button_${e.skill_type}`,
          onShow: () => p == null ? undefined : p(e),
          pluginOnClick: () => {
            if (c != null) {
              c(e.skill_type, chatStatusActionTypes.chatActionTypes.ClickSkill, {
                skipReport: true
              }, t, e == null ? undefined : e.sticky);
            }
          },
          onClick: n => c == null ? undefined : c(e.skill_type, chatStatusActionTypes.chatActionTypes.ClickSkill, n, t, e == null ? undefined : e.sticky)
        }, e.skill_type ?? t);
      })
    });
  };
  require.d(exports, {
    SkillBar: function () {
      return v;
    }
  });
}