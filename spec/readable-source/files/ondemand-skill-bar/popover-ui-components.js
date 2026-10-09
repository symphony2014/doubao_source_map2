// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Eh' to 'PopoverArrow'
// - Renamed export 'VY' to 'PopoverContent'
// - Renamed export 'fC' to 'Popover'
// - Renamed export 'h_' to 'PopoverPortal'
// - Renamed export 'xz' to 'PopoverTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 125882
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var dismissableLayer = require("dismissable-layer") /*id: 749383*/;
  var useRadixFocusGuard = require("use-radix-focus-guard") /*id: 441896*/;
  var focusScopeComponent = require("focus-scope-component") /*id: 664921*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var radixPopperPrimitives = require("radix-popper-primitives") /*id: 947189*/;
  var reactPortalComponent = require("react-portal-component") /*id: 535442*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var domInertPolyfill = require("dom-inert-polyfill") /*id: 21928*/;
  var reactScrollLock = require("react-scroll-lock") /*id: 184007*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var y = "Popover";
  var [x, C] = reactContextUtils.createContextScope(y, [radixPopperPrimitives.createPopperScope]);
  var w = radixPopperPrimitives.createPopperScope();
  var [k, E] = x(y);
  var S = e => {
    let {
      __scopePopover: t,
      children: n,
      open: a,
      defaultOpen: o,
      onOpenChange: r,
      modal: l = false
    } = e;
    let s = w(t);
    let d = reactCoreLibraryReexport.useRef(null);
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let [m, f] = useControllableState.useControllableState({
      prop: a,
      defaultProp: o != null && o,
      onChange: r,
      caller: y
    });
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.Popper, {
      ...s,
      children: reactJsxRuntimeCoreReexport.jsx(k, {
        scope: t,
        contentId: useIdHook.useId(),
        triggerRef: d,
        open: m,
        onOpenChange: f,
        onOpenToggle: reactCoreLibraryReexport.useCallback(() => f(e => !e), [f]),
        hasCustomAnchor: p,
        onCustomAnchorAdd: reactCoreLibraryReexport.useCallback(() => h(true), []),
        onCustomAnchorRemove: reactCoreLibraryReexport.useCallback(() => h(false), []),
        modal: l,
        children: n
      })
    });
  };
  S.displayName = y;
  var N = "PopoverAnchor";
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopover: n,
      ...a
    } = e;
    let o = E(N, n);
    let r = w(n);
    let {
      onCustomAnchorAdd: l,
      onCustomAnchorRemove: s
    } = o;
    reactCoreLibraryReexport.useEffect(() => {
      l();
      return () => s();
    }, [l, s]);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperAnchor, {
      ...r,
      ...a,
      ref: t
    });
  }).displayName = N;
  var j = "PopoverTrigger";
  var T = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopover: n,
      ...i
    } = e;
    let r = E(j, n);
    let l = w(n);
    let s = reactMergeRefs.useMergeRefs(t, r.triggerRef);
    let d = reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": r.open,
      "aria-controls": r.contentId,
      "data-state": z(r.open),
      ...i,
      ref: s,
      onClick: composeHandlers.composeHandlers(e.onClick, r.onOpenToggle)
    });
    if (r.hasCustomAnchor) {
      return d;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperAnchor, {
        asChild: true,
        ...l,
        children: d
      });
    }
  });
  T.displayName = j;
  var P = "PopoverPortal";
  var [O, I] = x(P, {
    forceMount: undefined
  });
  var R = e => {
    let {
      __scopePopover: t,
      forceMount: n,
      children: i,
      container: a
    } = e;
    let o = E(P, t);
    return reactJsxRuntimeCoreReexport.jsx(O, {
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
  R.displayName = P;
  var D = "PopoverContent";
  var A = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = I(D, e.__scopePopover);
    let {
      forceMount: i = n.forceMount,
      ...a
    } = e;
    let o = E(D, e.__scopePopover);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: i || o.open,
      children: o.modal ? reactJsxRuntimeCoreReexport.jsx(Z, {
        ...a,
        ref: t
      }) : reactJsxRuntimeCoreReexport.jsx(L, {
        ...a,
        ref: t
      })
    });
  });
  A.displayName = D;
  var M = reactSlotUtils.createSlot("PopoverContent.RemoveScroll");
  var Z = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = E(D, e.__scopePopover);
    let r = reactCoreLibraryReexport.useRef(null);
    let l = reactMergeRefs.useMergeRefs(t, r);
    let s = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = r.current;
      if (e) {
        return domInertPolyfill.manageAriaHidden(e);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactScrollLock.BodyScrollLock, {
      as: M,
      allowPinchZoom: true,
      children: reactJsxRuntimeCoreReexport.jsx(F, {
        ...e,
        ref: l,
        trapFocus: n.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeHandlers.composeHandlers(e.onCloseAutoFocus, e => {
          var t;
          e.preventDefault();
          if (!s.current && (t = n.triggerRef.current) !== null && t !== undefined) {
            t.focus();
          }
        }),
        onPointerDownOutside: composeHandlers.composeHandlers(e.onPointerDownOutside, e => {
          let t = e.detail.originalEvent;
          let n = t.button === 0 && t.ctrlKey === true;
          let i = t.button === 2 || n;
          s.current = i;
        }, {
          checkForDefaultPrevented: false
        }),
        onFocusOutside: composeHandlers.composeHandlers(e.onFocusOutside, e => e.preventDefault(), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  var L = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = E(D, e.__scopePopover);
    let a = reactCoreLibraryReexport.useRef(false);
    let o = reactCoreLibraryReexport.useRef(false);
    return reactJsxRuntimeCoreReexport.jsx(F, {
      ...e,
      ref: t,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: t => {
        var i;
        var r;
        if ((i = e.onCloseAutoFocus) !== null && i !== undefined) {
          i.call(e, t);
        }
        if (!t.defaultPrevented) {
          if (!a.current && (r = n.triggerRef.current) !== null && r !== undefined) {
            r.focus();
          }
          t.preventDefault();
        }
        a.current = false;
        o.current = false;
      },
      onInteractOutside: t => {
        var i;
        var r;
        if ((i = e.onInteractOutside) !== null && i !== undefined) {
          i.call(e, t);
        }
        if (!t.defaultPrevented) {
          a.current = true;
          if (t.detail.originalEvent.type === "pointerdown") {
            o.current = true;
          }
        }
        let l = t.target;
        if ((r = n.triggerRef.current) === null || r === undefined ? undefined : r.contains(l)) {
          t.preventDefault();
        }
        if (t.detail.originalEvent.type === "focusin" && o.current) {
          t.preventDefault();
        }
      }
    });
  });
  var F = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopover: n,
      trapFocus: i,
      onOpenAutoFocus: a,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: r,
      onEscapeKeyDown: c,
      onPointerDownOutside: p,
      onFocusOutside: h,
      onInteractOutside: m,
      ...f
    } = e;
    let _ = E(D, n);
    let v = w(n);
    useRadixFocusGuard.useFocusGuard();
    return reactJsxRuntimeCoreReexport.jsx(focusScopeComponent.FocusScope, {
      asChild: true,
      loop: true,
      trapped: i,
      onMountAutoFocus: a,
      onUnmountAutoFocus: o,
      children: reactJsxRuntimeCoreReexport.jsx(dismissableLayer.DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents: r,
        onInteractOutside: m,
        onEscapeKeyDown: c,
        onPointerDownOutside: p,
        onFocusOutside: h,
        onDismiss: () => _.onOpenChange(false),
        children: reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperContent, {
          "data-state": z(_.open),
          role: "dialog",
          id: _.contentId,
          ...v,
          ...f,
          ref: t,
          style: {
            ...f.style,
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      })
    });
  });
  var $ = "PopoverClose";
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopover: n,
      ...i
    } = e;
    let o = E($, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
      type: "button",
      ...i,
      ref: t,
      onClick: composeHandlers.composeHandlers(e.onClick, () => o.onOpenChange(false))
    });
  }).displayName = $;
  var B = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopover: n,
      ...i
    } = e;
    let a = w(n);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperArrow, {
      ...a,
      ...i,
      ref: t
    });
  });
  function z(e) {
    if (e) {
      return "open";
    } else {
      return "closed";
    }
  }
  B.displayName = "PopoverArrow";
  var W = S;
  var G = T;
  var U = R;
  var V = A;
  var H = B;
  require.d(exports, {
    PopoverArrow: function () {
      return H;
    },
    PopoverContent: function () {
      return V;
    },
    Popover: function () {
      return W;
    },
    PopoverPortal: function () {
      return U;
    },
    PopoverTrigger: function () {
      return G;
    }
  });
}