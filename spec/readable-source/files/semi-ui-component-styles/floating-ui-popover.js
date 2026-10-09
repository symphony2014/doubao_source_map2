// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'Popover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 275531
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var floatingUiReactHooks = require("floating-ui-react-hooks") /*id: 75894*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  function d(e) {
    return e != null;
  }
  let u = e => {
    switch (e) {
      case "top":
      case "topCenter":
        return "top";
      case "right":
      case "rightCenter":
        return "right";
      case "bottom":
      case "bottomCenter":
        return "bottom";
      case "left":
      case "leftCenter":
        return "left";
      case "bottomLeft":
        return "bottom-start";
      case "bottomRight":
        return "bottom-end";
      case "topLeft":
        return "top-start";
      case "topRight":
        return "top-end";
      case "leftTop":
        return "left-start";
      case "leftBottom":
        return "left-end";
      case "rightTop":
        return "right-start";
      case "rightBottom":
        return "right-end";
      default:
        throw Error(`Placement \`${e}\` is invalid.`);
    }
  };
  let p = e => {
    let {
      trigger: t,
      controlledOpen: a
    } = e;
    return reactCoreLibraryReexport.useMemo(() => {
      let e = {
        enableClick: false,
        enableHover: false,
        enableFocus: false
      };
      if (d(a)) {
        return e;
      }
      let n = [];
      if ((n = t ? Array.isArray(t) ? t : [t] : ["hover"]).includes("click")) {
        e.enableClick = true;
      }
      if (n.includes("hover")) {
        e.enableHover = true;
      }
      if (n.includes("focus")) {
        e.enableFocus = true;
      }
      return e;
    }, [t]);
  };
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  let v = reactCoreLibraryReexport.createContext(null);
  let h = () => {
    let e = reactCoreLibraryReexport.useContext(v);
    if (e === null) {
      throw Error("Popover components must be wrapped in <Popover />");
    }
    return e;
  };
  let _ = v.Provider;
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: a,
      ...r
    } = e;
    let i = h();
    let l = isObjectOrFunction_1_1.isObjectOrFunction(a) && "ref" in a ? a == null ? undefined : a.ref : undefined;
    let o = floatingUiReactHooks.useMergeRefs([i.refs.setReference, t, l]);
    if (reactCoreLibraryReexport.isValidElement(a)) {
      return reactCoreLibraryReexport.cloneElement(a, i.getReferenceProps({
        ref: o,
        ...r,
        ...a.props,
        "data-state": i.open ? "open" : "closed"
      }));
    } else {
      return null;
    }
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      context: {
        placement: a,
        elements: {
          floating: r
        },
        middlewareData: {
          arrow: i
        }
      },
      staticOffset: l,
      style: {
        transform: o,
        ...s
      } = {},
      ...c
    } = e;
    let [d, u] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (r && window.getComputedStyle(r).direction === "rtl") {
        u(true);
      }
    }, [r]);
    if (!r) {
      return null;
    }
    let [p, m] = a.split("-");
    let v = p === "top" || p === "bottom";
    let h = l && m === "end" ? "bottom" : "top";
    let _ = l && m === "end" ? "right" : "left";
    if (l && d) {
      _ = m === "end" ? "left" : "right";
    }
    let g = (i == null ? undefined : i.x) !== null ? l || (i == null ? undefined : i.x) : "";
    let w = (i == null ? undefined : i.y) !== null ? l || (i == null ? undefined : i.y) : "";
    let k = {
      top: "rotate(180deg)",
      left: "rotate(90deg)",
      bottom: "",
      right: "rotate(-90deg)"
    }[p];
    return reactJsxRuntimeCoreReexport.jsxs("svg", {
      ...c,
      "aria-hidden": true,
      ref: t,
      width: "24",
      height: "8",
      style: {
        position: "absolute",
        pointerEvents: "none",
        [_]: g,
        [h]: w,
        [p]: v ? "99.9%" : "calc(100% - 8px)",
        transform: `${k}${o ?? ""}`,
        ...s
      },
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        d: "m0,0.5l0,1c4,0 5.5,1.5 7.5,3.5s2.5,3 4.5,3s2.5,-1 4.5,-3s3.5,-3.5 7.5,-3.5l0,-1l-24,0z",
        fill: "rgba(28,31,35, 0.08)",
        transform: "rotate(180 12 4.2)"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        d: "m0,0l0,1c4,0 5.5,1 7.5,3s2.5,3 4.5,3s2.5,-1 4.5,-3s3.5,-3 7.5,-3l0,-1l-24,0z",
        fill: "rgba(255,255,255, 1)",
        transform: "rotate(180 12 4.2)"
      })]
    });
  });
  var k = {
    "popover-content-wrap": "popover-content-wrap-IKlYsG",
    "popover-content": "popover-content-r6TWID",
    "popover-content-with-arrow": "popover-content-with-arrow-J_TMhx",
    "floating-ui-semi-popover-zoomIn": "floating-ui-semi-popover-zoomIn-wFWnfp",
    "floating-ui-semi-popover-zoomOut": "floating-ui-semi-popover-zoomOut-jNJ8kK"
  };
  let b = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      style: a,
      className: r,
      showArrow: o,
      popupPortalContainer: c,
      clickToHide: d,
      ...u
    } = e;
    let {
      context: p,
      ...m
    } = h();
    let v = floatingUiReactHooks.useMergeRefs([m.refs.setFloating, t]);
    let {
      isMounted: _,
      styles: g
    } = floatingUiReactHooks.useInteractions(p, {
      open: () => ({
        animation: `${k["floating-ui-semi-popover-zoomIn"]} 100ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
        animationFillMode: "forwards"
      }),
      close: () => ({
        animation: `${k["floating-ui-semi-popover-zoomOut"]} 100ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
        animationFillMode: "forwards"
      })
    });
    let b = reactCoreLibraryReexport.useMemo(() => c === null ? null : isFunctionUtil_1.isFunction(c) ? c(m.refs.reference.current) : c ? c.current : null, [c]);
    let x = reactCoreLibraryReexport.useCallback(() => {
      if (d) {
        m.setOpen(false);
      }
    }, [d, m.setOpen]);
    if (p.open) {
      return reactJsxRuntimeCoreReexport.jsx(floatingUiReactHooks.Portal, {
        root: b,
        children: reactJsxRuntimeCoreReexport.jsx(floatingUiReactHooks.useFloatingContext, {
          context: p,
          modal: false,
          returnFocus: false,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: v,
            style: {
              ...m.floatingStyles
            },
            className: i(k["popover-content-wrap"]),
            ...m.getFloatingProps(u),
            children: _ ? reactJsxRuntimeCoreReexport.jsxs("div", {
              style: {
                ...a,
                ...g
              },
              className: i(r, k["popover-content"], o && k["popover-content-with-arrow"]),
              onClick: x,
              children: [u.children, o ? reactJsxRuntimeCoreReexport.jsx(w, {
                ref: m.arrowRef,
                context: p
              }) : null]
            }) : null
          })
        })
      });
    } else {
      return null;
    }
  });
  let x = function (e) {
    let {
      children: t,
      content: a,
      className: r,
      style: m,
      showArrow: v,
      popupPortalContainer: h,
      clickToHide: w,
      ...k
    } = e;
    let x = function ({
      trigger: e,
      initialVisible: t = false,
      position: a = "bottom",
      showArrow: r,
      boundary: i,
      boundaryPadding: m = 16,
      offset: v,
      spacing: h,
      flip: _ = true,
      shift: g = true,
      size: f = false,
      enableAutoHide: w = true,
      visible: k,
      onVisibleChange: b,
      onClickOutSide: x
    } = {}) {
      let [C, y] = reactCoreLibraryReexport.useState(t);
      let S = k ?? C;
      let A = reactCoreLibraryReexport.useCallback(e => {
        y(e);
        if (b != null) {
          b(e);
        }
      }, [b]);
      let E = reactCoreLibraryReexport.useRef(null);
      let R = reactCoreLibraryReexport.useMemo(() => {
        let t = {
          padding: m,
          boundary: i || "clippingAncestors",
          rootBoundary: "viewport"
        };
        let a = _ ? {
          fallbackStrategy: "bestFit",
          ...t,
          ...(_ === true ? {} : _)
        } : {};
        let n = g ? {
          ...t,
          crossAxis: true,
          ...(g === true ? {} : g)
        } : {};
        let l = f ? {
          ...t,
          ...(f === true ? {
            apply(e) {
              let {
                availableHeight: t,
                elements: a
              } = e;
              Object.assign(a.floating.style, {
                maxHeight: `${t}px`
              });
            }
          } : f)
        } : {};
        return [floatingUiPositioningHook.offsetMiddleware((v || h) ?? (r ? 4 : 10)), w ? floatingUiPositioningHook.hideMiddleware({
          ...t,
          padding: 0
        }) : undefined, _ ? floatingUiPositioningHook.flipMiddleware(a) : undefined, g ? floatingUiPositioningHook.shiftMiddleware(n) : undefined, f ? floatingUiPositioningHook.sizeMiddleware(l) : undefined, floatingUiPositioningHook.arrowMiddleware({
          element: E,
          padding: 8
        })].filter(d);
      }, [m, _, g, v, w]);
      let N = reactCoreLibraryReexport.useMemo(() => u(a), [a]);
      let T = floatingUiReactHooks.useFloating({
        placement: N,
        open: S,
        onOpenChange: A,
        whileElementsMounted: floatingUiPlatformUtils.observePosition,
        middleware: R
      });
      let {
        context: j
      } = T;
      let {
        enableClick: I,
        enableHover: M,
        enableFocus: P
      } = p({
        trigger: e,
        controlledOpen: k
      });
      let F = floatingUiReactHooks.FocusManager(j, {
        enabled: I
      });
      let L = floatingUiReactHooks.usePortal(j, {
        handleClose: floatingUiReactHooks.safePolygon(),
        enabled: M
      });
      let Z = floatingUiReactHooks.useClick(j, {
        enabled: P
      });
      let B = floatingUiReactHooks.useDismiss(j, {
        outsidePress(e) {
          if (!isFunctionUtil_1.isFunction(x)) {
            return true;
          }
          let t = x(e);
          return t === undefined || t;
        }
      });
      let W = floatingUiReactHooks.useRole(j);
      let D = floatingUiReactHooks.useHover([F, L, Z, B, W]);
      return reactCoreLibraryReexport.useMemo(() => ({
        open: S,
        setOpen: A,
        arrowRef: E,
        ...D,
        ...T
      }), [S, A, D, T]);
    }({
      ...k,
      showArrow: v
    });
    return reactJsxRuntimeCoreReexport.jsxs(_, {
      value: x,
      children: [reactJsxRuntimeCoreReexport.jsx(g, {
        children: t
      }), reactJsxRuntimeCoreReexport.jsx(b, {
        className: i(r),
        style: m,
        showArrow: v,
        popupPortalContainer: h,
        clickToHide: w,
        children: a
      })]
    });
  };
  require.d(exports, {
    Popover: function () {
      return x;
    }
  });
}