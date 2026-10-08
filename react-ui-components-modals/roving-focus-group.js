// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pc' to 'rovingFocusGroupScope'
// - Renamed export 'ck' to 'RovingFocusGroupItem'
// - Renamed export 'fC' to 'RovingFocusGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 477483
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactCollectionProviderFactory = require("react-collection-provider-factory") /*id: 680586*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactUseLatestCallback = require("react-use-latest-callback") /*id: 440027*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var useTextDirectionHook = require("use-text-direction-hook") /*id: 833962*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = "rovingFocusGroup.onEntryFocus";
  var v = {
    bubbles: false,
    cancelable: true
  };
  var D = "RovingFocusGroup";
  var [g, C, m] = reactCollectionProviderFactory.createCollectionProvider(D);
  var [B, E] = reactContextUtils.createContextScope(D, [m]);
  var [y, b] = B(D);
  var A = reactCoreLibraryReexport.forwardRef((e, t) => reactJsxRuntimeCoreReexport.jsx(g.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: reactJsxRuntimeCoreReexport.jsx(g.Slot, {
      scope: e.__scopeRovingFocusGroup,
      children: reactJsxRuntimeCoreReexport.jsx(F, {
        ...e,
        ref: t
      })
    })
  }));
  A.displayName = D;
  var F = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeRovingFocusGroup: r,
      orientation: o,
      loop: i = false,
      dir: s,
      currentTabStopId: g,
      defaultCurrentTabStopId: m,
      onCurrentTabStopIdChange: B,
      onEntryFocus: E,
      preventScrollOnEntryFocus: b = false,
      ...A
    } = e;
    let F = reactCoreLibraryReexport.useRef(null);
    let w = reactMergeRefs.useMergeRefs(t, F);
    let x = useTextDirectionHook.useTextDirection(s);
    let [O, M] = useControllableState.useControllableState({
      prop: g,
      defaultProp: m ?? null,
      onChange: B,
      caller: D
    });
    let [P, S] = reactCoreLibraryReexport.useState(false);
    let R = reactUseLatestCallback.useLatestCallback(E);
    let j = C(r);
    let T = reactCoreLibraryReexport.useRef(false);
    let [N, L] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      let e = F.current;
      if (e) {
        e.addEventListener(h, R);
        return () => e.removeEventListener(h, R);
      }
    }, [R]);
    return reactJsxRuntimeCoreReexport.jsx(y, {
      scope: r,
      orientation: o,
      dir: x,
      loop: i,
      currentTabStopId: O,
      onItemFocus: reactCoreLibraryReexport.useCallback(e => M(e), [M]),
      onItemShiftTab: reactCoreLibraryReexport.useCallback(() => S(true), []),
      onFocusableItemAdd: reactCoreLibraryReexport.useCallback(() => L(e => e + 1), []),
      onFocusableItemRemove: reactCoreLibraryReexport.useCallback(() => L(e => e - 1), []),
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        tabIndex: P || N === 0 ? -1 : 0,
        "data-orientation": o,
        ...A,
        ref: w,
        style: {
          outline: "none",
          ...e.style
        },
        onMouseDown: composeHandlers.composeHandlers(e.onMouseDown, () => {
          T.current = true;
        }),
        onFocus: composeHandlers.composeHandlers(e.onFocus, e => {
          let t = !T.current;
          if (e.target === e.currentTarget && t && !P) {
            let t = new CustomEvent(h, v);
            e.currentTarget.dispatchEvent(t);
            if (!t.defaultPrevented) {
              let e = j().filter(e => e.focusable);
              k([e.find(e => e.active), e.find(e => e.id === O), ...e].filter(Boolean).map(e => e.ref.current), b);
            }
          }
          T.current = false;
        }),
        onBlur: composeHandlers.composeHandlers(e.onBlur, () => S(false))
      })
    });
  });
  var w = "RovingFocusGroupItem";
  var x = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeRovingFocusGroup: r,
      focusable: o = true,
      active: a = false,
      tabStopId: i,
      children: c,
      ...d
    } = e;
    let f = useIdHook.useId();
    let h = i || f;
    let v = b(w, r);
    let D = v.currentTabStopId === h;
    let m = C(r);
    let {
      onFocusableItemAdd: B,
      onFocusableItemRemove: E,
      currentTabStopId: y
    } = v;
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        B();
        return () => E();
      }
    }, [o, B, E]);
    return reactJsxRuntimeCoreReexport.jsx(g.ItemSlot, {
      scope: r,
      id: h,
      focusable: o,
      active: a,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.span, {
        tabIndex: D ? 0 : -1,
        "data-orientation": v.orientation,
        ...d,
        ref: t,
        onMouseDown: composeHandlers.composeHandlers(e.onMouseDown, e => {
          if (o) {
            v.onItemFocus(h);
          } else {
            e.preventDefault();
          }
        }),
        onFocus: composeHandlers.composeHandlers(e.onFocus, () => v.onItemFocus(h)),
        onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, e => {
          if (e.key === "Tab" && e.shiftKey) {
            v.onItemShiftTab();
            return;
          }
          if (e.target !== e.currentTarget) {
            return;
          }
          let t = function (e, t, r) {
            var n;
            n = e.key;
            let u = r !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
            if ((t !== "vertical" || !["ArrowLeft", "ArrowRight"].includes(u)) && (t !== "horizontal" || !["ArrowUp", "ArrowDown"].includes(u))) {
              return O[u];
            }
          }(e, v.orientation, v.dir);
          if (t !== undefined) {
            if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
              return;
            }
            e.preventDefault();
            let u = m().filter(e => e.focusable).map(e => e.ref.current);
            if (t === "last") {
              u.reverse();
            } else if (t === "prev" || t === "next") {
              var r;
              var n;
              if (t === "prev") {
                u.reverse();
              }
              let o = u.indexOf(e.currentTarget);
              u = v.loop ? (r = u, n = o + 1, r.map((e, t) => r[(n + t) % r.length])) : u.slice(o + 1);
            }
            setTimeout(() => k(u));
          }
        }),
        children: typeof c == "function" ? c({
          isCurrentTabStop: D,
          hasTabStop: y != null
        }) : c
      })
    });
  });
  x.displayName = w;
  var O = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function k(e, t = false) {
    let r = document.activeElement;
    for (let n of e) {
      if (n === r || (n.focus({
        preventScroll: t
      }), document.activeElement !== r)) {
        return;
      }
    }
  }
  var M = A;
  var P = x;
  require.d(exports, {
    rovingFocusGroupScope: function () {
      return E;
    },
    RovingFocusGroupItem: function () {
      return P;
    },
    RovingFocusGroup: function () {
      return M;
    }
  });
}