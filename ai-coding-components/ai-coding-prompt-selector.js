// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'AiPromptSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 973390
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAiSkillPrompts = require("chat-ai-skill-prompts") /*id: 156336*/;
  var aiCodePromptEventHooks = require("ai-code-prompt-event-hooks") /*id: 421580*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var useControlledStateHook_1_1 = require("use-controlled-state-hook_1_1") /*id: 756850*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var floatingUiReactHooks = require("floating-ui-react-hooks") /*id: 75894*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var f = {
    "selector-menu": "selector-menu-xC9Krz",
    "selector-menu-scroller": "selector-menu-scroller-AcF2Rl",
    "selector-menu-item": "selector-menu-item-DdL1Xw",
    "selector-menu-item-option": "selector-menu-item-option-ad6CV9",
    "temp-menu-subtitle": "temp-menu-subtitle-jib77G"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = reactCoreLibraryReexport.createContext({});
  function v(e) {
    let {
      children: t,
      value: n,
      visible: l,
      onVisibleChange: r,
      setPositionReference: o,
      renderLabel: s,
      className: u
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let [b, y] = reactCoreLibraryReexport.useState(null);
    let [x, w] = reactCoreLibraryReexport.useState(null);
    let [, k] = useControlledStateHook_1_1.useControlledState(e);
    let {
      refs: j,
      floatingStyles: C,
      context: N
    } = floatingUiReactHooks.useFloating({
      placement: "bottom-start",
      open: l,
      onOpenChange: r,
      whileElementsMounted: floatingUiPlatformUtils.observePosition,
      middleware: [floatingUiPositioningHook.offsetMiddleware(4), floatingUiPositioningHook.flipMiddleware(), floatingUiPositioningHook.sizeMiddleware({
        apply(e) {
          let {
            rects: t,
            elements: n
          } = e;
          n.floating.style.width = `${t.reference.width}px`;
        }
      })]
    });
    let S = reactCoreLibraryReexport.useRef([]);
    let T = reactCoreLibraryReexport.useRef([]);
    let R = reactCoreLibraryReexport.useCallback(e => {
      w(e);
      if (r != null) {
        r(false);
      }
      if (e !== null) {
        k(T.current[e]);
      }
    }, []);
    let I = floatingUiReactHooks.useFloatingTree(N, {
      listRef: S,
      activeIndex: b,
      selectedIndex: x,
      onNavigate: y,
      loop: true
    });
    let M = floatingUiReactHooks.useTypeahead(N, {
      listRef: T,
      activeIndex: b,
      selectedIndex: x,
      onMatch: function (e) {
        if (l) {
          y(e);
        } else {
          R(e);
        }
      }
    });
    let F = floatingUiReactHooks.FocusManager(N);
    let E = floatingUiReactHooks.useDismiss(N);
    let P = floatingUiReactHooks.useRole(N, {
      role: "listbox"
    });
    let {
      getFloatingProps: A,
      getItemProps: $
    } = floatingUiReactHooks.useHover([I, M, F, E, P]);
    let O = reactCoreLibraryReexport.useMemo(() => ({
      activeIndex: b,
      selectedIndex: x,
      getItemProps: $,
      handleSelect: R,
      renderLabel: s
    }), [b, x, $, R, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l) {
        let e = setTimeout(() => {
          w(T.current.indexOf(n ?? null));
        });
        return () => {
          clearTimeout(e);
        };
      }
    }, [l, n]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = o == null ? undefined : o();
      if (e) {
        j.setPositionReference(e);
      }
    }, [j.setReference, r]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(g.Provider, {
        value: O,
        children: l && reactJsxRuntimeCoreReexport.jsx(floatingUiReactHooks.useFloatingContext, {
          context: N,
          modal: false,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: j.setFloating,
            className: c(f["selector-menu"], u),
            style: C,
            ...A(),
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: f["selector-menu-scroller"],
              style: {
                maxHeight: 260
              },
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: f["temp-menu-subtitle"],
                children: v("web_ai_coding_prompt_list_title")
              }), reactJsxRuntimeCoreReexport.jsx(floatingUiReactHooks.useListNavigation, {
                elementsRef: S,
                labelsRef: T,
                children: t
              })]
            })
          })
        })
      })
    });
  }
  v.Option = function (e) {
    let {
      label: t,
      renderLabel: n
    } = e;
    let {
      activeIndex: l,
      selectedIndex: a,
      getItemProps: r,
      handleSelect: o,
      renderLabel: s
    } = reactCoreLibraryReexport.useContext(g);
    let {
      ref: c,
      index: d
    } = floatingUiReactHooks.useListItem({
      label: t
    });
    let p = l === d;
    let m = a === d;
    let v = reactCoreLibraryReexport.useMemo(() => {
      let e = n ?? s;
      if (e) {
        return e({
          label: t,
          isActive: p,
          isSelected: m
        });
      } else {
        return t;
      }
    }, [t, p, m, n, s, t]);
    return reactJsxRuntimeCoreReexport.jsxs("button", {
      ref: c,
      role: "option",
      "aria-selected": m,
      tabIndex: p ? 0 : -1,
      className: f["selector-menu-item"],
      style: {
        background: p ? "var(--s-color-bg-trans)" : undefined
      },
      ...r({
        onClick: () => o(d)
      }),
      children: [v, reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
        className: f["selector-menu-item-option"]
      })]
    });
  };
  let b = e => {
    let {
      template: n,
      onMount: l
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (l != null) {
        l();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "option-label-sDnCGS",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "option-label-icon-iHlRmz",
        children: (n == null ? undefined : n.icon_type) && chatAiSkillPrompts.skillIconSet[n.icon_type] && reactCoreLibraryReexport.createElement(chatAiSkillPrompts.skillIconSet[n.icon_type])
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "option-label-title-JDpuk3",
          children: o(n.key ?? "", n == null ? undefined : n.name)
        })
      })]
    });
  };
  let y = e => {
    let {
      templateList: t = [],
      trackParams: n,
      onChange: a,
      onVisibleChange: r,
      className: s,
      setPositionReference: c,
      ...d
    } = e;
    let {
      sendPromptShowEvent: u,
      sendPromptClickEvent: _,
      sendPromptBoardCollapseEvent: p
    } = aiCodePromptEventHooks.useAiCodePromptEventHooks({
      trackParams: {
        ...n,
        show_type: "prompt_list"
      }
    });
    let m = codeRouteUtils.isCodeChatRoot() || codeRouteUtils.isChatCodingRoute();
    let f = reactCoreLibraryReexport.useCallback(e => {
      let n = t.findIndex(t => t.key === e);
      if (n >= 0) {
        _(t[n], n);
      }
      if (a != null) {
        a(e);
      }
    }, [t]);
    let g = reactCoreLibraryReexport.useCallback(e => {
      if (!e) {
        p({
          total_prompt_cnt: t.length
        });
      }
      if (r != null) {
        r(e);
      }
    }, [r]);
    let y = reactCoreLibraryReexport.useCallback(e => {
      let {
        label: n
      } = e;
      let i = t.findIndex(e => e.key === n);
      if (i < 0) {
        return null;
      }
      let l = t[i];
      return reactJsxRuntimeCoreReexport.jsx(b, {
        template: l,
        onMount: () => u(l, i, {
          show_from: m ? "landing_page" : "code_chat"
        })
      });
    }, [t]);
    if (t.length) {
      return reactJsxRuntimeCoreReexport.jsx(v, {
        renderLabel: y,
        onChange: f,
        onVisibleChange: g,
        className: s,
        ...d,
        setPositionReference: () => c ? c() : document.querySelector("#skill-modal-coding-skill"),
        children: t.map(e => reactJsxRuntimeCoreReexport.jsx(v.Option, {
          label: e.key
        }, e.key))
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    AiPromptSelector: function () {
      return y;
    }
  });
}