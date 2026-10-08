// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VY' to 'TooltipContent'
// - Renamed export 'h_' to 'TooltipPortal'
// - Renamed export 'fC' to 'Tooltip'
// - Renamed export 'xz' to 'TooltipTrigger'
// - Renamed export 'zt' to 'TooltipProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 272045
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var dismissableLayer = require("dismissable-layer") /*id: 749383*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var radixPopperPrimitives = require("radix-popper-primitives") /*id: 947189*/;
  var reactPortalComponent = require("react-portal-component") /*id: 535442*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var v = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  });
  var m = reactCoreLibraryReexport.forwardRef((e, t) => reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.span, {
    ...e,
    ref: t,
    style: {
      ...v,
      ...e.style
    }
  }));
  m.displayName = "VisuallyHidden";
  var [y, b] = reactContextUtils.createContextScope("Tooltip", [radixPopperPrimitives.createPopperScope]);
  var _ = radixPopperPrimitives.createPopperScope();
  var w = "TooltipProvider";
  var E = "tooltip.open";
  var [S, x] = y(w);
  var k = e => {
    let {
      __scopeTooltip: t,
      delayDuration: n = 700,
      skipDelayDuration: i = 300,
      disableHoverableContent: o = false,
      children: a
    } = e;
    let s = reactCoreLibraryReexport.useRef(true);
    let u = reactCoreLibraryReexport.useRef(false);
    let c = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useEffect(() => {
      let e = c.current;
      return () => window.clearTimeout(e);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(S, {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: reactCoreLibraryReexport.useCallback(() => {
        window.clearTimeout(c.current);
        s.current = false;
      }, []),
      onClose: reactCoreLibraryReexport.useCallback(() => {
        window.clearTimeout(c.current);
        c.current = window.setTimeout(() => s.current = true, i);
      }, [i]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: reactCoreLibraryReexport.useCallback(e => {
        u.current = e;
      }, []),
      disableHoverableContent: o,
      children: a
    });
  };
  k.displayName = w;
  var O = "Tooltip";
  var [A, T] = y(O);
  var R = e => {
    let {
      __scopeTooltip: t,
      children: n,
      open: i,
      defaultOpen: o,
      onOpenChange: a,
      disableHoverableContent: s,
      delayDuration: l
    } = e;
    let f = x(O, e.__scopeTooltip);
    let h = _(t);
    let [d, v] = reactCoreLibraryReexport.useState(null);
    let m = useIdHook.useId();
    let y = reactCoreLibraryReexport.useRef(0);
    let b = s ?? f.disableHoverableContent;
    let w = l ?? f.delayDuration;
    let S = reactCoreLibraryReexport.useRef(false);
    let [k, T] = useControllableState.useControllableState({
      prop: i,
      defaultProp: o != null && o,
      onChange: e => {
        if (e) {
          f.onOpen();
          document.dispatchEvent(new CustomEvent(E));
        } else {
          f.onClose();
        }
        if (a != null) {
          a(e);
        }
      },
      caller: O
    });
    let R = reactCoreLibraryReexport.useMemo(() => k ? S.current ? "delayed-open" : "instant-open" : "closed", [k]);
    let C = reactCoreLibraryReexport.useCallback(() => {
      window.clearTimeout(y.current);
      y.current = 0;
      S.current = false;
      T(true);
    }, [T]);
    let M = reactCoreLibraryReexport.useCallback(() => {
      window.clearTimeout(y.current);
      y.current = 0;
      T(false);
    }, [T]);
    let P = reactCoreLibraryReexport.useCallback(() => {
      window.clearTimeout(y.current);
      y.current = window.setTimeout(() => {
        S.current = true;
        T(true);
        y.current = 0;
      }, w);
    }, [w, T]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (y.current) {
        window.clearTimeout(y.current);
        y.current = 0;
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.Popper, {
      ...h,
      children: reactJsxRuntimeCoreReexport.jsx(A, {
        scope: t,
        contentId: m,
        open: k,
        stateAttribute: R,
        trigger: d,
        onTriggerChange: v,
        onTriggerEnter: reactCoreLibraryReexport.useCallback(() => {
          if (f.isOpenDelayedRef.current) {
            P();
          } else {
            C();
          }
        }, [f.isOpenDelayedRef, P, C]),
        onTriggerLeave: reactCoreLibraryReexport.useCallback(() => {
          if (b) {
            M();
          } else {
            window.clearTimeout(y.current);
            y.current = 0;
          }
        }, [M, b]),
        onOpen: C,
        onClose: M,
        disableHoverableContent: b,
        children: n
      })
    });
  };
  R.displayName = O;
  var C = "TooltipTrigger";
  var M = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTooltip: n,
      ...a
    } = e;
    let s = T(C, n);
    let u = x(C, n);
    let l = _(n);
    let f = reactCoreLibraryReexport.useRef(null);
    let d = reactMergeRefs.useMergeRefs(t, f, s.onTriggerChange);
    let p = reactCoreLibraryReexport.useRef(false);
    let v = reactCoreLibraryReexport.useRef(false);
    let m = reactCoreLibraryReexport.useCallback(() => p.current = false, []);
    reactCoreLibraryReexport.useEffect(() => () => document.removeEventListener("pointerup", m), [m]);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperAnchor, {
      asChild: true,
      ...l,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
        "aria-describedby": s.open ? s.contentId : undefined,
        "data-state": s.stateAttribute,
        ...a,
        ref: d,
        onPointerMove: composeHandlers.composeHandlers(e.onPointerMove, e => {
          if (e.pointerType !== "touch" && !v.current && !u.isPointerInTransitRef.current) {
            s.onTriggerEnter();
            v.current = true;
          }
        }),
        onPointerLeave: composeHandlers.composeHandlers(e.onPointerLeave, () => {
          s.onTriggerLeave();
          v.current = false;
        }),
        onPointerDown: composeHandlers.composeHandlers(e.onPointerDown, () => {
          if (s.open) {
            s.onClose();
          }
          p.current = true;
          document.addEventListener("pointerup", m, {
            once: true
          });
        }),
        onFocus: composeHandlers.composeHandlers(e.onFocus, () => {
          if (!p.current) {
            s.onOpen();
          }
        }),
        onBlur: composeHandlers.composeHandlers(e.onBlur, s.onClose),
        onClick: composeHandlers.composeHandlers(e.onClick, s.onClose)
      })
    });
  });
  M.displayName = C;
  var P = "TooltipPortal";
  var [D, j] = y(P, {
    forceMount: undefined
  });
  var I = e => {
    let {
      __scopeTooltip: t,
      forceMount: n,
      children: r,
      container: i
    } = e;
    let o = T(P, t);
    return reactJsxRuntimeCoreReexport.jsx(D, {
      scope: t,
      forceMount: n,
      children: reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: n || o.open,
        children: reactJsxRuntimeCoreReexport.jsx(reactPortalComponent.Portal, {
          asChild: true,
          container: i,
          children: r
        })
      })
    });
  };
  I.displayName = P;
  var N = "TooltipContent";
  var L = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = j(N, e.__scopeTooltip);
    let {
      forceMount: r = n.forceMount,
      side: i = "top",
      ...o
    } = e;
    let a = T(N, e.__scopeTooltip);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: r || a.open,
      children: a.disableHoverableContent ? reactJsxRuntimeCoreReexport.jsx(F, {
        side: i,
        ...o,
        ref: t
      }) : reactJsxRuntimeCoreReexport.jsx(B, {
        side: i,
        ...o,
        ref: t
      })
    });
  });
  var B = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = T(N, e.__scopeTooltip);
    let i = x(N, e.__scopeTooltip);
    let a = reactCoreLibraryReexport.useRef(null);
    let s = reactMergeRefs.useMergeRefs(t, a);
    let [u, c] = reactCoreLibraryReexport.useState(null);
    let {
      trigger: l,
      onClose: f
    } = n;
    let h = a.current;
    let {
      onPointerInTransitChange: d
    } = i;
    let p = reactCoreLibraryReexport.useCallback(() => {
      c(null);
      d(false);
    }, [d]);
    let v = reactCoreLibraryReexport.useCallback((e, t) => {
      let n = e.currentTarget;
      let r = {
        x: e.clientX,
        y: e.clientY
      };
      let i = function (e, t) {
        let n = Math.abs(t.top - e.y);
        let r = Math.abs(t.bottom - e.y);
        let i = Math.abs(t.right - e.x);
        let o = Math.abs(t.left - e.x);
        switch (Math.min(n, r, i, o)) {
          case o:
            return "left";
          case i:
            return "right";
          case n:
            return "top";
          case r:
            return "bottom";
          default:
            throw Error("unreachable");
        }
      }(r, n.getBoundingClientRect());
      c(function (e) {
        let t = e.slice();
        t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +!!(e.y > t.y));
        return function (e) {
          if (e.length <= 1) {
            return e.slice();
          }
          let t = [];
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            while (t.length >= 2) {
              let e = t[t.length - 1];
              let n = t[t.length - 2];
              if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) {
                t.pop();
              } else {
                break;
              }
            }
            t.push(r);
          }
          t.pop();
          let n = [];
          for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            while (n.length >= 2) {
              let e = n[n.length - 1];
              let t = n[n.length - 2];
              if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) {
                n.pop();
              } else {
                break;
              }
            }
            n.push(r);
          }
          n.pop();
          if (t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y) {
            return t;
          } else {
            return t.concat(n);
          }
        }(t);
      }([...function (e, t, n = 5) {
        let r = [];
        switch (t) {
          case "top":
            r.push({
              x: e.x - n,
              y: e.y + n
            }, {
              x: e.x + n,
              y: e.y + n
            });
            break;
          case "bottom":
            r.push({
              x: e.x - n,
              y: e.y - n
            }, {
              x: e.x + n,
              y: e.y - n
            });
            break;
          case "left":
            r.push({
              x: e.x + n,
              y: e.y - n
            }, {
              x: e.x + n,
              y: e.y + n
            });
            break;
          case "right":
            r.push({
              x: e.x - n,
              y: e.y - n
            }, {
              x: e.x - n,
              y: e.y + n
            });
        }
        return r;
      }(r, i), ...function (e) {
        let {
          top: t,
          right: n,
          bottom: r,
          left: i
        } = e;
        return [{
          x: i,
          y: t
        }, {
          x: n,
          y: t
        }, {
          x: n,
          y: r
        }, {
          x: i,
          y: r
        }];
      }(t.getBoundingClientRect())]));
      d(true);
    }, [d]);
    reactCoreLibraryReexport.useEffect(() => () => p(), [p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l && h) {
        let e = e => v(e, h);
        let t = e => v(e, l);
        l.addEventListener("pointerleave", e);
        h.addEventListener("pointerleave", t);
        return () => {
          l.removeEventListener("pointerleave", e);
          h.removeEventListener("pointerleave", t);
        };
      }
    }, [l, h, v, p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        let e = e => {
          let t = e.target;
          let n = {
            x: e.clientX,
            y: e.clientY
          };
          let r = (l == null ? undefined : l.contains(t)) || (h == null ? undefined : h.contains(t));
          let i = !function (e, t) {
            let {
              x: n,
              y: r
            } = e;
            let i = false;
            for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
              let a = t[e];
              let s = t[o];
              let u = a.x;
              let c = a.y;
              let l = s.x;
              let f = s.y;
              if (c > r != f > r && n < (l - u) * (r - c) / (f - c) + u) {
                i = !i;
              }
            }
            return i;
          }(n, u);
          if (r) {
            p();
          } else if (i) {
            p();
            f();
          }
        };
        document.addEventListener("pointermove", e);
        return () => document.removeEventListener("pointermove", e);
      }
    }, [l, h, u, f, p]);
    return reactJsxRuntimeCoreReexport.jsx(F, {
      ...e,
      ref: s
    });
  });
  var [Z, U] = y(O, {
    isInside: false
  });
  var z = reactSlotUtils.createSlottable("TooltipContent");
  var F = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTooltip: n,
      children: i,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      ...l
    } = e;
    let f = T(N, n);
    let h = _(n);
    let {
      onClose: d
    } = f;
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener(E, d);
      return () => document.removeEventListener(E, d);
    }, [d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f.trigger) {
        let e = e => {
          let t = e.target;
          if (t == null ? undefined : t.contains(f.trigger)) {
            d();
          }
        };
        window.addEventListener("scroll", e, {
          capture: true
        });
        return () => window.removeEventListener("scroll", e, {
          capture: true
        });
      }
    }, [f.trigger, d]);
    return reactJsxRuntimeCoreReexport.jsx(dismissableLayer.DismissableLayer, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      onFocusOutside: e => e.preventDefault(),
      onDismiss: d,
      children: reactJsxRuntimeCoreReexport.jsxs(radixPopperPrimitives.PopperContent, {
        "data-state": f.stateAttribute,
        ...h,
        ...l,
        ref: t,
        style: {
          ...l.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [reactJsxRuntimeCoreReexport.jsx(z, {
          children: i
        }), reactJsxRuntimeCoreReexport.jsx(Z, {
          scope: n,
          isInside: true,
          children: reactJsxRuntimeCoreReexport.jsx(m, {
            id: f.contentId,
            role: "tooltip",
            children: o || i
          })
        })]
      })
    });
  });
  L.displayName = N;
  var H = "TooltipArrow";
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTooltip: n,
      ...r
    } = e;
    let i = _(n);
    if (U(H, n).isInside) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperArrow, {
        ...i,
        ...r,
        ref: t
      });
    }
  }).displayName = H;
  var G = k;
  var V = R;
  var $ = M;
  var W = I;
  var q = L;
  require.d(exports, {
    TooltipContent: function () {
      return q;
    },
    TooltipPortal: function () {
      return W;
    },
    Tooltip: function () {
      return V;
    },
    TooltipTrigger: function () {
      return $;
    },
    TooltipProvider: function () {
      return G;
    }
  });
}