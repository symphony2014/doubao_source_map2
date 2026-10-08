// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VY' to 'HoverCardContent'
// - Renamed export 'fC' to 'HoverCard'
// - Renamed export 'h_' to 'HoverCardPortal'
// - Renamed export 'xz' to 'HoverCardTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 551137
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var radixPopperPrimitives = require("radix-popper-primitives") /*id: 947189*/;
  var reactPortalComponent = require("react-portal-component") /*id: 535442*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var dismissableLayer = require("dismissable-layer") /*id: 749383*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var f = "HoverCard";
  var [_, v] = reactContextUtils.createContextScope(f, [radixPopperPrimitives.createPopperScope]);
  var g = radixPopperPrimitives.createPopperScope();
  var [b, y] = _(f);
  var x = e => {
    let {
      __scopeHoverCard: t,
      children: n,
      open: i,
      defaultOpen: o,
      onOpenChange: r,
      openDelay: s = 700,
      closeDelay: c = 300
    } = e;
    let u = g(t);
    let p = reactCoreLibraryReexport.useRef(0);
    let h = reactCoreLibraryReexport.useRef(0);
    let _ = reactCoreLibraryReexport.useRef(false);
    let v = reactCoreLibraryReexport.useRef(false);
    let [y, x] = useControllableState.useControllableState({
      prop: i,
      defaultProp: o != null && o,
      onChange: r,
      caller: f
    });
    let C = reactCoreLibraryReexport.useCallback(() => {
      clearTimeout(h.current);
      p.current = window.setTimeout(() => x(true), s);
    }, [s, x]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      clearTimeout(p.current);
      if (!_.current && !v.current) {
        h.current = window.setTimeout(() => x(false), c);
      }
    }, [c, x]);
    let k = reactCoreLibraryReexport.useCallback(() => x(false), [x]);
    reactCoreLibraryReexport.useEffect(() => () => {
      clearTimeout(p.current);
      clearTimeout(h.current);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(b, {
      scope: t,
      open: y,
      onOpenChange: x,
      onOpen: C,
      onClose: w,
      onDismiss: k,
      hasSelectionRef: _,
      isPointerDownOnContentRef: v,
      children: reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.Popper, {
        ...u,
        children: n
      })
    });
  };
  x.displayName = f;
  var C = "HoverCardTrigger";
  var w = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeHoverCard: n,
      ...i
    } = e;
    let a = y(C, n);
    let r = g(n);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperAnchor, {
      asChild: true,
      ...r,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.a, {
        "data-state": a.open ? "open" : "closed",
        ...i,
        ref: t,
        onPointerEnter: composeHandlers.composeHandlers(e.onPointerEnter, O(a.onOpen)),
        onPointerLeave: composeHandlers.composeHandlers(e.onPointerLeave, O(a.onClose)),
        onFocus: composeHandlers.composeHandlers(e.onFocus, a.onOpen),
        onBlur: composeHandlers.composeHandlers(e.onBlur, a.onClose),
        onTouchStart: composeHandlers.composeHandlers(e.onTouchStart, e => e.preventDefault())
      })
    });
  });
  w.displayName = C;
  var k = "HoverCardPortal";
  var [E, S] = _(k, {
    forceMount: undefined
  });
  var N = e => {
    let {
      __scopeHoverCard: t,
      forceMount: n,
      children: i,
      container: a
    } = e;
    let o = y(k, t);
    return reactJsxRuntimeCoreReexport.jsx(E, {
      scope: t,
      forceMount: n,
      children: reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: n || o.open,
        children: reactJsxRuntimeCoreReexport.jsx(reactPortalComponent.Portal, {
          asChild: true,
          container: a,
          children: i
        })
      })
    });
  };
  N.displayName = k;
  var j = "HoverCardContent";
  var T = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = S(j, e.__scopeHoverCard);
    let {
      forceMount: i = n.forceMount,
      ...a
    } = e;
    let r = y(j, e.__scopeHoverCard);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: i || r.open,
      children: reactJsxRuntimeCoreReexport.jsx(P, {
        "data-state": r.open ? "open" : "closed",
        ...a,
        onPointerEnter: composeHandlers.composeHandlers(e.onPointerEnter, O(r.onOpen)),
        onPointerLeave: composeHandlers.composeHandlers(e.onPointerLeave, O(r.onClose)),
        ref: t
      })
    });
  });
  T.displayName = j;
  var P = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeHoverCard: n,
      onEscapeKeyDown: r,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: u,
      ...p
    } = e;
    let f = y(j, n);
    let _ = g(n);
    let v = reactCoreLibraryReexport.useRef(null);
    let b = reactMergeRefs.useMergeRefs(t, v);
    let [x, C] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (x) {
        let e = document.body;
        i = e.style.userSelect || e.style.webkitUserSelect;
        e.style.userSelect = "none";
        e.style.webkitUserSelect = "none";
        return () => {
          e.style.userSelect = i;
          e.style.webkitUserSelect = i;
        };
      }
    }, [x]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v.current) {
        let e = () => {
          C(false);
          f.isPointerDownOnContentRef.current = false;
          setTimeout(() => {
            var e;
            if (((e = document.getSelection()) === null || e === undefined ? undefined : e.toString()) !== "") {
              f.hasSelectionRef.current = true;
            }
          });
        };
        document.addEventListener("pointerup", e);
        return () => {
          document.removeEventListener("pointerup", e);
          f.hasSelectionRef.current = false;
          f.isPointerDownOnContentRef.current = false;
        };
      }
    }, [f.isPointerDownOnContentRef, f.hasSelectionRef]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v.current) {
        (function (e) {
          let t = [];
          let n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
          });
          while (n.nextNode()) {
            t.push(n.currentNode);
          }
          return t;
        })(v.current).forEach(e => e.setAttribute("tabindex", "-1"));
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(dismissableLayer.DismissableLayer, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onInteractOutside: u,
      onEscapeKeyDown: r,
      onPointerDownOutside: l,
      onFocusOutside: composeHandlers.composeHandlers(c, e => {
        e.preventDefault();
      }),
      onDismiss: f.onDismiss,
      children: reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperContent, {
        ..._,
        ...p,
        onPointerDown: composeHandlers.composeHandlers(p.onPointerDown, e => {
          if (e.currentTarget.contains(e.target)) {
            C(true);
          }
          f.hasSelectionRef.current = false;
          f.isPointerDownOnContentRef.current = true;
        }),
        ref: b,
        style: {
          ...p.style,
          userSelect: x ? "text" : undefined,
          WebkitUserSelect: x ? "text" : undefined,
          "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
          "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
          "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
        }
      })
    });
  });
  function O(e) {
    return t => t.pointerType === "touch" ? undefined : e();
  }
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeHoverCard: n,
      ...i
    } = e;
    let a = g(n);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperArrow, {
      ...a,
      ...i,
      ref: t
    });
  }).displayName = "HoverCardArrow";
  var I = x;
  var R = w;
  var D = N;
  var A = T;
  require.d(exports, {
    HoverCardContent: function () {
      return A;
    },
    HoverCard: function () {
      return I;
    },
    HoverCardPortal: function () {
      return D;
    },
    HoverCardTrigger: function () {
      return R;
    }
  });
}