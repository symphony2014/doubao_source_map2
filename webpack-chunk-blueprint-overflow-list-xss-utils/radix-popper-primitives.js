// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ee' to 'PopperAnchor'
// - Renamed export 'D7' to 'createPopperScope'
// - Renamed export 'VY' to 'PopperContent'
// - Renamed export 'Eh' to 'PopperArrow'
// - Renamed export 'fC' to 'Popper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 947189
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      children: n,
      width: r = 10,
      height: i = 5,
      ...o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : reactJsxRuntimeCoreReexport.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  u.displayName = "Arrow";
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var reactUseLatestCallback = require("react-use-latest-callback") /*id: 440027*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  var useElementSizeHook = require("use-element-size-hook") /*id: 956289*/;
  var p = "Popper";
  var [g, v] = reactContextUtils.createContextScope(p);
  var [m, y] = g(p);
  var b = e => {
    let {
      __scopePopper: t,
      children: n
    } = e;
    let [i, o] = reactCoreLibraryReexport.useState(null);
    return reactJsxRuntimeCoreReexport.jsx(m, {
      scope: t,
      anchor: i,
      onAnchorChange: o,
      children: n
    });
  };
  b.displayName = p;
  var _ = "PopperAnchor";
  var w = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopper: n,
      virtualRef: i,
      ...o
    } = e;
    let u = y(_, n);
    let l = reactCoreLibraryReexport.useRef(null);
    let f = reactMergeRefs.useMergeRefs(t, l);
    let h = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = h.current;
      h.current = (i == null ? undefined : i.current) || l.current;
      if (e !== h.current) {
        u.onAnchorChange(h.current);
      }
    });
    if (i) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        ...o,
        ref: f
      });
    }
  });
  w.displayName = _;
  var E = "PopperContent";
  var [S, x] = g(E);
  var k = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopePopper: _,
      side: w = "bottom",
      sideOffset: x = 0,
      align: k = "center",
      alignOffset: O = 0,
      arrowPadding: A = 0,
      avoidCollisions: T = true,
      collisionBoundary: P = [],
      collisionPadding: D = 0,
      sticky: j = "partial",
      hideWhenDetached: I = false,
      updatePositionStrategy: N = "optimized",
      onPlaced: L,
      ...B
    } = e;
    let Z = y(E, _);
    let [U, z] = reactCoreLibraryReexport.useState(null);
    let F = reactMergeRefs.useMergeRefs(t, e => z(e));
    let [H, G] = reactCoreLibraryReexport.useState(null);
    let V = useElementSizeHook.useElementSize(H);
    let $ = (V == null ? undefined : V.width) ?? 0;
    let W = (V == null ? undefined : V.height) ?? 0;
    let q = typeof D == "number" ? D : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...D
    };
    let K = Array.isArray(P) ? P : [P];
    let J = K.length > 0;
    let X = {
      padding: q,
      boundary: K.filter(R),
      altBoundary: J
    };
    let {
      refs: Y,
      floatingStyles: Q,
      placement: ee,
      isPositioned: et,
      middlewareData: en
    } = floatingUiPositioningHook.useFloating({
      strategy: "fixed",
      placement: w + (k !== "center" ? "-" + k : ""),
      whileElementsMounted: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return floatingUiPlatformUtils.observePosition(...t, {
          animationFrame: N === "always"
        });
      },
      elements: {
        reference: Z.anchor
      },
      middleware: [floatingUiPositioningHook.offsetMiddleware({
        mainAxis: x + W,
        alignmentAxis: O
      }), T && floatingUiPositioningHook.shiftMiddleware({
        mainAxis: true,
        crossAxis: false,
        limiter: j === "partial" ? floatingUiPositioningHook.innerMiddleware() : undefined,
        ...X
      }), T && floatingUiPositioningHook.flipMiddleware({
        ...X
      }), floatingUiPositioningHook.sizeMiddleware({
        ...X,
        apply: e => {
          let {
            elements: t,
            rects: n,
            availableWidth: r,
            availableHeight: i
          } = e;
          let {
            width: o,
            height: a
          } = n.reference;
          let s = t.floating.style;
          s.setProperty("--radix-popper-available-width", `${r}px`);
          s.setProperty("--radix-popper-available-height", `${i}px`);
          s.setProperty("--radix-popper-anchor-width", `${o}px`);
          s.setProperty("--radix-popper-anchor-height", `${a}px`);
        }
      }), H && floatingUiPositioningHook.arrowMiddleware({
        element: H,
        padding: A
      }), C({
        arrowWidth: $,
        arrowHeight: W
      }), I && floatingUiPositioningHook.hideMiddleware({
        strategy: "referenceHidden",
        ...X
      })]
    });
    let [er, ei] = M(ee);
    let eo = reactUseLatestCallback.useLatestCallback(L);
    reactUseLayoutEffectSafe.useLayoutEffect(() => {
      if (et) {
        if (eo != null) {
          eo();
        }
      }
    }, [et, eo]);
    let ea = en.arrow?.x;
    let es = en.arrow?.y;
    let eu = en.arrow?.centerOffset !== 0;
    let [ec, el] = reactCoreLibraryReexport.useState();
    reactUseLayoutEffectSafe.useLayoutEffect(() => {
      if (U) {
        el(window.getComputedStyle(U).zIndex);
      }
    }, [U]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: Y.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...Q,
        transform: et ? Q.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: ec,
        "--radix-popper-transform-origin": [en.transformOrigin?.x, en.transformOrigin?.y].join(" "),
        ...(en.hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        })
      },
      dir: e.dir,
      children: reactJsxRuntimeCoreReexport.jsx(S, {
        scope: _,
        placedSide: er,
        onArrowChange: G,
        arrowX: ea,
        arrowY: es,
        shouldHideArrow: eu,
        children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
          "data-side": er,
          "data-align": ei,
          ...B,
          ref: F,
          style: {
            ...B.style,
            animation: et ? undefined : "none"
          }
        })
      })
    });
  });
  k.displayName = E;
  var O = "PopperArrow";
  var A = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  var T = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      __scopePopper: n,
      ...r
    } = e;
    let i = x(O, n);
    let o = A[i.placedSide];
    return reactJsxRuntimeCoreReexport.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : undefined
      },
      children: reactJsxRuntimeCoreReexport.jsx(u, {
        ...r,
        ref: t,
        style: {
          ...r.style,
          display: "block"
        }
      })
    });
  });
  function R(e) {
    return e !== null;
  }
  T.displayName = O;
  var C = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      let {
        placement: s,
        rects: u,
        middlewareData: c
      } = t;
      let l = c.arrow?.centerOffset !== 0;
      let f = l ? 0 : e.arrowWidth;
      let h = l ? 0 : e.arrowHeight;
      let [d, p] = M(s);
      let g = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[p];
      let v = (c.arrow?.x ?? 0) + f / 2;
      let m = (c.arrow?.y ?? 0) + h / 2;
      let y = "";
      let b = "";
      if (d === "bottom") {
        y = l ? g : `${v}px`;
        b = `${-h}px`;
      } else if (d === "top") {
        y = l ? g : `${v}px`;
        b = `${u.floating.height + h}px`;
      } else if (d === "right") {
        y = `${-h}px`;
        b = l ? g : `${m}px`;
      } else if (d === "left") {
        y = `${u.floating.width + h}px`;
        b = l ? g : `${m}px`;
      }
      return {
        data: {
          x: y,
          y: b
        }
      };
    }
  });
  function M(e) {
    let [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var P = b;
  var D = w;
  var j = k;
  var I = T;
  require.d(exports, {
    PopperAnchor: function () {
      return D;
    },
    createPopperScope: function () {
      return v;
    },
    PopperContent: function () {
      return j;
    },
    PopperArrow: function () {
      return I;
    },
    Popper: function () {
      return P;
    }
  });
}