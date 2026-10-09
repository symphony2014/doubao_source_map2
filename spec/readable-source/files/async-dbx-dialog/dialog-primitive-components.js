// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dx' to 'DialogTitle'
// - Renamed export 'VY' to 'DialogContent'
// - Renamed export 'aV' to 'DialogOverlay'
// - Renamed export 'dk' to 'DialogDescription'
// - Renamed export 'fC' to 'Dialog'
// - Renamed export 'h_' to 'DialogPortal'
// - Renamed export 'jm' to 'DialogTitleWarning'
// - Renamed export 'p8' to 'createDialogScope'
// - Renamed export 'x8' to 'DialogClose'
// - Renamed export 'xz' to 'DialogTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 11308
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var dismissableLayer = require("dismissable-layer") /*id: 749383*/;
  var focusScopeComponent = require("focus-scope-component") /*id: 664921*/;
  var reactPortalComponent = require("react-portal-component") /*id: 535442*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var useRadixFocusGuard = require("use-radix-focus-guard") /*id: 441896*/;
  var reactScrollLock = require("react-scroll-lock") /*id: 184007*/;
  var domInertPolyfill = require("dom-inert-polyfill") /*id: 21928*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var b = "Dialog";
  var [E, O] = reactContextUtils.createContextScope(b);
  var [w, C] = E(b);
  var x = e => {
    let {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: s,
      modal: c = true
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef(null);
    let [p, f] = useControllableState.useControllableState({
      prop: r,
      defaultProp: i != null && i,
      onChange: s,
      caller: b
    });
    return reactJsxRuntimeCoreReexport.jsx(w, {
      scope: t,
      triggerRef: u,
      contentRef: d,
      contentId: useIdHook.useId(),
      titleId: useIdHook.useId(),
      descriptionId: useIdHook.useId(),
      open: p,
      onOpenChange: f,
      onOpenToggle: reactCoreLibraryReexport.useCallback(() => f(e => !e), [f]),
      modal: c,
      children: n
    });
  };
  x.displayName = b;
  var j = "DialogTrigger";
  var S = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      ...o
    } = e;
    let s = C(j, n);
    let l = reactMergeRefs.useMergeRefs(t, s.triggerRef);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": H(s.open),
      ...o,
      ref: l,
      onClick: composeHandlers.composeHandlers(e.onClick, s.onOpenToggle)
    });
  });
  S.displayName = j;
  var D = "DialogPortal";
  var [N, k] = E(D, {
    forceMount: undefined
  });
  var R = e => {
    let {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: i
    } = e;
    let s = C(D, t);
    return reactJsxRuntimeCoreReexport.jsx(N, {
      scope: t,
      forceMount: n,
      children: reactCoreLibraryReexport.Children.map(r, e => reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: n || s.open,
        children: reactJsxRuntimeCoreReexport.jsx(reactPortalComponent.Portal, {
          asChild: true,
          container: i,
          children: e
        })
      }))
    });
  };
  R.displayName = D;
  var T = "DialogOverlay";
  var A = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = k(T, e.__scopeDialog);
    let {
      forceMount: o = n.forceMount,
      ...r
    } = e;
    let i = C(T, e.__scopeDialog);
    if (i.modal) {
      return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: o || i.open,
        children: reactJsxRuntimeCoreReexport.jsx(I, {
          ...r,
          ref: t
        })
      });
    } else {
      return null;
    }
  });
  A.displayName = T;
  var P = reactSlotUtils.createSlot("DialogOverlay.RemoveScroll");
  var I = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      ...o
    } = e;
    let r = C(T, n);
    return reactJsxRuntimeCoreReexport.jsx(reactScrollLock.BodyScrollLock, {
      as: P,
      allowPinchZoom: true,
      shards: [r.contentRef],
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        "data-state": H(r.open),
        ...o,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...o.style
        }
      })
    });
  });
  var M = "DialogContent";
  var L = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = k(M, e.__scopeDialog);
    let {
      forceMount: o = n.forceMount,
      ...r
    } = e;
    let i = C(M, e.__scopeDialog);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: o || i.open,
      children: i.modal ? reactJsxRuntimeCoreReexport.jsx(Z, {
        ...r,
        ref: t
      }) : reactJsxRuntimeCoreReexport.jsx(F, {
        ...r,
        ref: t
      })
    });
  });
  L.displayName = M;
  var Z = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = C(M, e.__scopeDialog);
    let s = reactCoreLibraryReexport.useRef(null);
    let l = reactMergeRefs.useMergeRefs(t, n.contentRef, s);
    reactCoreLibraryReexport.useEffect(() => {
      let e = s.current;
      if (e) {
        return domInertPolyfill.manageAriaHidden(e);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx($, {
      ...e,
      ref: l,
      trapFocus: n.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: composeHandlers.composeHandlers(e.onCloseAutoFocus, e => {
        var t;
        e.preventDefault();
        if ((t = n.triggerRef.current) !== null && t !== undefined) {
          t.focus();
        }
      }),
      onPointerDownOutside: composeHandlers.composeHandlers(e.onPointerDownOutside, e => {
        let t = e.detail.originalEvent;
        let n = t.button === 0 && t.ctrlKey === true;
        if (t.button === 2 || n) {
          e.preventDefault();
        }
      }),
      onFocusOutside: composeHandlers.composeHandlers(e.onFocusOutside, e => e.preventDefault())
    });
  });
  var F = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = C(M, e.__scopeDialog);
    let r = reactCoreLibraryReexport.useRef(false);
    let i = reactCoreLibraryReexport.useRef(false);
    return reactJsxRuntimeCoreReexport.jsx($, {
      ...e,
      ref: t,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: t => {
        var o;
        var s;
        if ((o = e.onCloseAutoFocus) !== null && o !== undefined) {
          o.call(e, t);
        }
        if (!t.defaultPrevented) {
          if (!r.current && (s = n.triggerRef.current) !== null && s !== undefined) {
            s.focus();
          }
          t.preventDefault();
        }
        r.current = false;
        i.current = false;
      },
      onInteractOutside: t => {
        var o;
        var s;
        if ((o = e.onInteractOutside) !== null && o !== undefined) {
          o.call(e, t);
        }
        if (!t.defaultPrevented) {
          r.current = true;
          if (t.detail.originalEvent.type === "pointerdown") {
            i.current = true;
          }
        }
        let l = t.target;
        if ((s = n.triggerRef.current) === null || s === undefined ? undefined : s.contains(l)) {
          t.preventDefault();
        }
        if (t.detail.originalEvent.type === "focusin" && i.current) {
          t.preventDefault();
        }
      }
    });
  });
  var $ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: l,
      ...a
    } = e;
    let d = C(M, n);
    let p = reactCoreLibraryReexport.useRef(null);
    let f = reactMergeRefs.useMergeRefs(t, p);
    useRadixFocusGuard.useFocusGuard();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(focusScopeComponent.FocusScope, {
        asChild: true,
        loop: true,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: l,
        children: reactJsxRuntimeCoreReexport.jsx(dismissableLayer.DismissableLayer, {
          role: "dialog",
          id: d.contentId,
          "aria-describedby": d.descriptionId,
          "aria-labelledby": d.titleId,
          "data-state": H(d.open),
          ...a,
          ref: f,
          onDismiss: () => d.onOpenChange(false)
        })
      }), reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(X, {
          titleId: d.titleId
        }), reactJsxRuntimeCoreReexport.jsx(q, {
          contentRef: p,
          descriptionId: d.descriptionId
        })]
      })]
    });
  });
  var _ = "DialogTitle";
  var B = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      ...o
    } = e;
    let r = C(_, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.h2, {
      id: r.titleId,
      ...o,
      ref: t
    });
  });
  B.displayName = _;
  var W = "DialogDescription";
  var G = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      ...o
    } = e;
    let r = C(W, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.p, {
      id: r.descriptionId,
      ...o,
      ref: t
    });
  });
  G.displayName = W;
  var z = "DialogClose";
  var K = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDialog: n,
      ...o
    } = e;
    let i = C(z, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: composeHandlers.composeHandlers(e.onClick, () => i.onOpenChange(false))
    });
  });
  function H(e) {
    if (e) {
      return "open";
    } else {
      return "closed";
    }
  }
  K.displayName = z;
  var U = "DialogTitleWarning";
  var [V, Y] = reactContextUtils.createContext(U, {
    contentName: M,
    titleName: _,
    docsSlug: "dialog"
  });
  var X = e => {
    let {
      titleId: t
    } = e;
    let n = Y(U);
    let r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        document.getElementById(t);
      }
    }, [r, t]);
    return null;
  };
  var q = e => {
    let {
      contentRef: t,
      descriptionId: n
    } = e;
    let r = Y("DialogDescriptionWarning");
    let i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let o = (e = t.current) === null || e === undefined ? undefined : e.getAttribute("aria-describedby");
      if (n && o) {
        document.getElementById(n);
      }
    }, [i, t, n]);
    return null;
  };
  var J = x;
  var Q = S;
  var ee = R;
  var et = A;
  var en = L;
  var eo = B;
  var er = G;
  var ei = K;
  require.d(exports, {
    DialogTitle: function () {
      return eo;
    },
    DialogContent: function () {
      return en;
    },
    DialogOverlay: function () {
      return et;
    },
    DialogDescription: function () {
      return er;
    },
    Dialog: function () {
      return J;
    },
    DialogPortal: function () {
      return ee;
    },
    DialogTitleWarning: function () {
      return V;
    },
    createDialogScope: function () {
      return O;
    },
    DialogClose: function () {
      return ei;
    },
    DialogTrigger: function () {
      return Q;
    }
  });
}