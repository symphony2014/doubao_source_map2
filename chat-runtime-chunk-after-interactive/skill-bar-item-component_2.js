// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$t' to 'SkillBarItemWithPlugin'
// - Renamed export 'Gm' to 'SkillBarItem'
// - Renamed export '_E' to 'SkillBarItemWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 611695
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var e2eTestUtils = require("e2e-test-utils") /*id: 874338*/;
  var useClickOutside = require("use-click-outside") /*id: 87494*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var skillBarItemIcon = require("skill-bar-item-icon") /*id: 276743*/;
  var skillBarTrackingUtils = require("skill-bar-tracking-utils") /*id: 660682*/;
  var m = {
    "skill-bar-item": "skill-bar-item-raUMqz",
    skillBarItem: "skill-bar-item-raUMqz",
    "hover-highlight": "hover-highlight-G5QFmp",
    hoverHighlight: "hover-highlight-G5QFmp",
    disabled: "disabled-CtXIby",
    text: "text-cHrarB",
    icon: "icon-DE3eTg",
    "skill-bar-item__primary": "skill-bar-item__primary-EQmcz2",
    skillBarItemPrimary: "skill-bar-item__primary-EQmcz2",
    hoverable: "hoverable-Jtz67V",
    hoverable__primary: "hoverable__primary-HTnfaL",
    hoverablePrimary: "hoverable__primary-HTnfaL",
    "activable__primary-active-back": "activable__primary-active-back-da7Tg8",
    activablePrimaryActiveBack: "activable__primary-active-back-da7Tg8",
    "activable__primary-active": "activable__primary-active-eCx6mf",
    activablePrimaryActive: "activable__primary-active-eCx6mf",
    activable: "activable-L3c01o",
    activable__primary: "activable__primary-g5Fk8w",
    activablePrimary: "activable__primary-g5Fk8w"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      text: n = "",
      tooltip: o,
      className: l,
      itemClassName: d,
      icon: h,
      onShow: p,
      onClick: g,
      type: b = "default",
      testId: y,
      onMouseUp: v,
      disabled: w = false,
      hoverHighlight: _ = true,
      hoverable: x = true,
      activable: k = true,
      customNode: E
    } = e;
    let {
      ref: C,
      inView: O
    } = reactIntersectionObserver_1.useInView();
    let j = reactCoreLibraryReexport.useRef(null);
    let [P, T] = reactCoreLibraryReexport.useState(true);
    let S = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (O) {
        if (p != null) {
          p();
        }
      }
    }, [O]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (P) {
        let e = setTimeout(() => T(false), 150);
        return () => clearTimeout(e);
      }
    }, [P]);
    useClickOutside.useClickOutside(() => S.current = false, j, ["mousedown", "click"]);
    let N = reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: s("skill-bar-item-wrap", l),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: e => {
          j.current = e;
          return C(e);
        },
        className: s(m["skill-bar-item"], {
          [m["skill-bar-item__primary"]]: b === "primary",
          [m["skill-bar-item__primary-active-back"]]: b === "primary" && P,
          [m["skill-bar-item__primary-active"]]: b === "primary-active",
          [m.disabled]: w,
          [m["hover-highlight"]]: _,
          [m.hoverable]: x,
          [m.activable]: k
        }, d),
        onClick: () => {
          T(true);
          if (g != null) {
            g();
          }
        },
        onMouseDown: () => S.current = true,
        onMouseUp: () => S.current && (v == null ? undefined : v()),
        ...e2eTestUtils.getTestIdProp(y),
        children: [h && reactJsxRuntimeCoreReexport.jsx("div", {
          className: m.icon,
          children: h
        }), !!n && reactJsxRuntimeCoreReexport.jsx("div", {
          className: m.text,
          children: n
        }), E]
      })
    });
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        children: N
      });
    } else {
      return N;
    }
  });
  let b = e => {
    let {
      className: n,
      isNarrowMode: i,
      skill: o,
      index: l,
      colorful: a,
      hasTestId: c = false
    } = e;
    return reactCoreLibraryReexport.createElement(g, {
      ...e,
      className: s("pr-6", skillBarTrackingUtils.SKILL_BAR_BTN_CLASS, n),
      key: o.skill_type ?? l,
      text: (i ? o.show_name_short : o.show_name) || o.show_name,
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarItemIcon.SkillBarItemIcon, {
        colorful: a,
        skill_type: o.skill_type
      }),
      testId: c ? `skill_bar_button_${o.skill_type}` : undefined
    });
  };
  let y = e => {
    let {
      skill: n,
      index: i,
      onPluginMouseUp: o,
      onMouseUp: s,
      from: a = "input",
      pluginOnClick: c
    } = e;
    let {
      plugin: u
    } = chatPluginIocManager.skillBarItemHook(n.skill_type);
    let h = reactUseChangedRef.useChangedRef(u, (e, t) => (e == null ? undefined : e.skillType) === (t == null ? undefined : t.skillType));
    let p = reactCoreLibraryReexport.useMemo(() => h == null ? undefined : h.Component, [h]);
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        skill: n,
        from: a,
        onClick: c ?? s,
        renderContent: t => {
          let {
            onClick: l,
            keepMorePopover: a,
            customNode: c = e.customNode
          } = t;
          return reactCoreLibraryReexport.createElement(b, {
            ...e,
            customNode: c,
            key: n.skill_type ?? i,
            onMouseUp: () => {
              o({
                onClick: l,
                keepMorePopover: a,
                customNode: c
              });
            }
          });
        }
      });
    } else {
      return reactCoreLibraryReexport.createElement(b, {
        ...e,
        key: n.skill_type ?? i
      });
    }
  };
  require.d(exports, {
    SkillBarItemWithPlugin: function () {
      return y;
    },
    SkillBarItem: function () {
      return g;
    },
    SkillBarItemWrapper: function () {
      return b;
    }
  });
}