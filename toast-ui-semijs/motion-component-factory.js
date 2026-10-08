// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'motionComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 400749
         */
module.exports = function (module, exports, require) {
  let n;
  var r;
  var s;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let a = reactCoreLibraryReexport.createContext({
    transformPagePoint: t => t,
    isStatic: false,
    reducedMotion: "never"
  });
  let l = reactCoreLibraryReexport.createContext({});
  var appContextInstance = require("app-context-instance") /*id: 63821*/;
  var reactHookEnvironmentSelector = require("react-hook-environment-selector") /*id: 956112*/;
  let c = reactCoreLibraryReexport.createContext({
    strict: false
  });
  let d = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  let p = "data-" + d("framerAppearId");
  function m(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function f(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  function g(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  let v = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
  let y = ["initial", ...v];
  function x(t) {
    return g(t.animate) || y.some(e => f(t[e]));
  }
  function b(t) {
    return !!x(t) || !!t.variants;
  }
  function P(t) {
    if (Array.isArray(t)) {
      return t.join(" ");
    } else {
      return t;
    }
  }
  let w = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  let T = {};
  for (let t in w) {
    T[t] = {
      isEnabled: e => w[t].some(t => !!e[t])
    };
  }
  var browserEnvCheck = require("browser-env-check") /*id: 512008*/;
  var sharedUiContext = require("shared-ui-context") /*id: 10109*/;
  let S = reactCoreLibraryReexport.createContext({});
  let E = Symbol.for("motionComponentSymbol");
  let k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  function V(t) {
    if (typeof t != "string" || t.includes("-")) ;else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) {
      return true;
    }
    return false;
  }
  let M = {};
  let R = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
  let j = new Set(R);
  function O(t, e) {
    let {
      layout: i,
      layoutId: n
    } = e;
    return j.has(t) || t.startsWith("origin") || (i || n !== undefined) && (!!M[t] || t === "opacity");
  }
  let L = t => !!t && !!t.getVelocity;
  let D = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  let I = R.length;
  let F = t => e => typeof e == "string" && e.startsWith(t);
  let B = F("--");
  let W = F("var(--");
  let U = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  let $ = (t, e, i) => Math.min(Math.max(i, t), e);
  let Z = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  };
  let N = {
    ...Z,
    transform: t => $(0, 1, t)
  };
  let z = {
    ...Z,
    default: 1
  };
  let _ = t => Math.round(t * 100000) / 100000;
  let H = /(-)?([\d]*\.?[\d])+/g;
  let X = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
  let Y = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function q(t) {
    return typeof t == "string";
  }
  let G = t => ({
    test: e => q(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
  });
  let K = G("deg");
  let J = G("%");
  let Q = G("px");
  let tt = G("vh");
  let te = G("vw");
  let ti = {
    ...J,
    parse: t => J.parse(t) / 100,
    transform: t => J.transform(t * 100)
  };
  let tn = {
    ...Z,
    transform: Math.round
  };
  let tr = {
    borderWidth: Q,
    borderTopWidth: Q,
    borderRightWidth: Q,
    borderBottomWidth: Q,
    borderLeftWidth: Q,
    borderRadius: Q,
    radius: Q,
    borderTopLeftRadius: Q,
    borderTopRightRadius: Q,
    borderBottomRightRadius: Q,
    borderBottomLeftRadius: Q,
    width: Q,
    maxWidth: Q,
    height: Q,
    maxHeight: Q,
    size: Q,
    top: Q,
    right: Q,
    bottom: Q,
    left: Q,
    padding: Q,
    paddingTop: Q,
    paddingRight: Q,
    paddingBottom: Q,
    paddingLeft: Q,
    margin: Q,
    marginTop: Q,
    marginRight: Q,
    marginBottom: Q,
    marginLeft: Q,
    rotate: K,
    rotateX: K,
    rotateY: K,
    rotateZ: K,
    scale: z,
    scaleX: z,
    scaleY: z,
    scaleZ: z,
    skew: K,
    skewX: K,
    skewY: K,
    distance: Q,
    translateX: Q,
    translateY: Q,
    translateZ: Q,
    x: Q,
    y: Q,
    z: Q,
    perspective: Q,
    transformPerspective: Q,
    opacity: N,
    originX: ti,
    originY: ti,
    originZ: Q,
    zIndex: tn,
    fillOpacity: N,
    strokeOpacity: N,
    numOctaves: tn
  };
  function ts(t, e, i, n) {
    let {
      style: r,
      vars: s,
      transform: o,
      transformOrigin: a
    } = t;
    let l = false;
    let u = false;
    let h = true;
    for (let t in e) {
      let i = e[t];
      if (B(t)) {
        s[t] = i;
        continue;
      }
      let n = tr[t];
      let c = U(i, n);
      if (j.has(t)) {
        l = true;
        o[t] = c;
        if (!h) {
          continue;
        }
        if (i !== (n.default || 0)) {
          h = false;
        }
      } else if (t.startsWith("origin")) {
        u = true;
        a[t] = c;
      } else {
        r[t] = c;
      }
    }
    if (!e.transform) {
      if (l || n) {
        r.transform = function (t, e, i, n) {
          let {
            enableHardwareAcceleration: r = true,
            allowTransformNone: s = true
          } = e;
          let o = "";
          for (let e = 0; e < I; e++) {
            let i = R[e];
            if (t[i] !== undefined) {
              let e = D[i] || i;
              o += `${e}(${t[i]}) `;
            }
          }
          if (r && !t.z) {
            o += "translateZ(0)";
          }
          o = o.trim();
          if (n) {
            o = n(t, i ? "" : o);
          } else if (s && i) {
            o = "none";
          }
          return o;
        }(t.transform, i, h, n);
      } else {
        r.transform &&= "none";
      }
    }
    if (u) {
      let {
        originX: t = "50%",
        originY: e = "50%",
        originZ: i = 0
      } = a;
      r.transformOrigin = `${t} ${e} ${i}`;
    }
  }
  let to = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function ta(t, e, i) {
    for (let n in e) {
      if (!L(e[n]) && !O(n, i)) {
        t[n] = e[n];
      }
    }
  }
  let tl = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function tu(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tl.has(t);
  }
  let th = t => !tu(t);
  try {
    if (r = require("html-attribute-validator") /*id: 738698*/.isValidAttribute) {
      th = t => t.startsWith("on") ? !tu(t) : r(t);
    }
  } catch (t) {}
  function tc(t, e, i) {
    if (typeof t == "string") {
      return t;
    } else {
      return Q.transform(e + i * t);
    }
  }
  let td = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  let tp = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function tm(t, e, i, n, r) {
    let {
      attrX: s,
      attrY: o,
      attrScale: a,
      originX: l,
      originY: u,
      pathLength: h,
      pathSpacing: c = 1,
      pathOffset: d = 0,
      ...p
    } = e;
    ts(t, p, i, r);
    if (n) {
      if (t.style.viewBox) {
        t.attrs.viewBox = t.style.viewBox;
      }
      return;
    }
    t.attrs = t.style;
    t.style = {};
    let {
      attrs: m,
      style: f,
      dimensions: g
    } = t;
    if (m.transform) {
      if (g) {
        f.transform = m.transform;
      }
      delete m.transform;
    }
    if (g && (l !== undefined || u !== undefined || f.transform)) {
      f.transformOrigin = function (t, e, i) {
        let n = tc(e, t.x, t.width);
        let r = tc(i, t.y, t.height);
        return `${n} ${r}`;
      }(g, l !== undefined ? l : 0.5, u !== undefined ? u : 0.5);
    }
    if (s !== undefined) {
      m.x = s;
    }
    if (o !== undefined) {
      m.y = o;
    }
    if (a !== undefined) {
      m.scale = a;
    }
    if (h !== undefined) {
      (function (t, e, i = 1, n = 0) {
        let r = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        t.pathLength = 1;
        let s = r ? td : tp;
        t[s.offset] = Q.transform(-n);
        let o = Q.transform(e);
        let a = Q.transform(i);
        t[s.array] = `${o} ${a}`;
      })(m, h, c, d, false);
    }
  }
  let tf = () => ({
    ...to(),
    attrs: {}
  });
  let tg = t => typeof t == "string" && t.toLowerCase() === "svg";
  function tv(t, e, i, n) {
    let {
      style: r,
      vars: s
    } = e;
    Object.assign(t.style, r, n && n.getProjectionStyles(i));
    for (let e in s) {
      t.style.setProperty(e, s[e]);
    }
  }
  let ty = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  function tx(t, e, i, n) {
    tv(t, e, undefined, n);
    for (let i in e.attrs) {
      t.setAttribute(ty.has(i) ? i : d(i), e.attrs[i]);
    }
  }
  function tb(t, e) {
    let {
      style: i
    } = t;
    let n = {};
    for (let r in i) {
      if (L(i[r]) || e.style && L(e.style[r]) || O(r, t)) {
        n[r] = i[r];
      }
    }
    return n;
  }
  function tP(t, e) {
    let i = tb(t, e);
    for (let n in t) {
      if (L(t[n]) || L(e[n])) {
        i[R.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n];
      }
    }
    return i;
  }
  function tw(t, e, i, n = {}, r = {}) {
    if (typeof e == "function") {
      e = e(i !== undefined ? i : t.custom, n, r);
    }
    if (typeof e == "string") {
      e = t.variants && t.variants[e];
    }
    if (typeof e == "function") {
      e = e(i !== undefined ? i : t.custom, n, r);
    }
    return e;
  }
  var useConstant = require("use-constant") /*id: 712385*/;
  let tA = t => Array.isArray(t);
  let tC = t => !!t && typeof t == "object" && !!t.mix && !!t.toValue;
  let tS = t => tA(t) ? t[t.length - 1] || 0 : t;
  function tE(t) {
    let e = L(t) ? t.get() : t;
    if (tC(e)) {
      return e.toValue();
    } else {
      return e;
    }
  }
  let tk = t => (e, i) => {
    let n = reactCoreLibraryReexport.useContext(l);
    let r = reactCoreLibraryReexport.useContext(appContextInstance.appContext);
    let s = () => function (t, e, i, n) {
      let {
        scrapeMotionValuesFromProps: r,
        createRenderState: s,
        onMount: o
      } = t;
      let a = {
        latestValues: function (t, e, i, n) {
          let r = {};
          let s = n(t, {});
          for (let t in s) {
            r[t] = tE(s[t]);
          }
          let {
            initial: o,
            animate: a
          } = t;
          let l = x(t);
          let u = b(t);
          if (e && u && !l && t.inherit !== false) {
            if (o === undefined) {
              o = e.initial;
            }
            if (a === undefined) {
              a = e.animate;
            }
          }
          let h = !!i && i.initial === false;
          let c = (h = h || o === false) ? a : o;
          if (c && typeof c != "boolean" && !g(c)) {
            (Array.isArray(c) ? c : [c]).forEach(e => {
              let i = tw(t, e);
              if (!i) {
                return;
              }
              let {
                transitionEnd: n,
                transition: s,
                ...o
              } = i;
              for (let t in o) {
                let e = o[t];
                if (Array.isArray(e)) {
                  let t = h ? e.length - 1 : 0;
                  e = e[t];
                }
                if (e !== null) {
                  r[t] = e;
                }
              }
              for (let t in n) {
                r[t] = n[t];
              }
            });
          }
          return r;
        }(e, i, n, r),
        renderState: s()
      };
      if (o) {
        a.mount = t => o(e, t, a);
      }
      return a;
    }(t, e, n, r);
    if (i) {
      return s();
    } else {
      return useConstant.useConstant(s);
    }
  };
  var animationFrameScheduler = require("animation-frame-scheduler") /*id: 92608*/;
  let tM = {
    useVisualState: tk({
      scrapeMotionValuesFromProps: tP,
      createRenderState: tf,
      onMount: (t, e, i) => {
        let {
          renderState: n,
          latestValues: r
        } = i;
        animationFrameScheduler.frameScheduler.read(() => {
          try {
            n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
          } catch (t) {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
        });
        animationFrameScheduler.frameScheduler.render(() => {
          tm(n, r, {
            enableHardwareAcceleration: false
          }, tg(e.tagName), t.transformTemplate);
          tx(e, n);
        });
      }
    })
  };
  let tR = {
    useVisualState: tk({
      scrapeMotionValuesFromProps: tb,
      createRenderState: to
    })
  };
  function tj(t, e, i, n = {
    passive: true
  }) {
    t.addEventListener(e, i, n);
    return () => t.removeEventListener(e, i);
  }
  let tO = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
  function tL(t, e = "page") {
    return {
      point: {
        x: t[e + "X"],
        y: t[e + "Y"]
      }
    };
  }
  let tD = t => e => tO(e) && t(e, tL(e));
  function tI(t, e, i, n) {
    return tj(t, e, tD(i), n);
  }
  let tF = (t, e) => i => e(t(i));
  let tB = function () {
    var t = arguments.length;
    var e = Array(t);
    var i = 0;
    for (; i < t; i++) {
      e[i] = arguments[i];
    }
    return e.reduce(tF);
  };
  function tW(t) {
    let e = null;
    return () => e === null && (e = t, () => {
      e = null;
    });
  }
  let tU = tW("dragHorizontal");
  let t$ = tW("dragVertical");
  function tZ(t) {
    let e = false;
    if (t === "y") {
      e = t$();
    } else if (t === "x") {
      e = tU();
    } else {
      let t = tU();
      let i = t$();
      if (t && i) {
        e = () => {
          t();
          i();
        };
      } else {
        if (t) {
          t();
        }
        if (i) {
          i();
        }
      }
    }
    return e;
  }
  function tN() {
    let t = tZ(true);
    return !t || (t(), false);
  }
  class tz {
    update() {}
    constructor(t) {
      this.isMounted = false;
      this.node = t;
    }
  }
  function t_(t, e) {
    let i = "onHover" + (e ? "Start" : "End");
    return tI(t.current, "pointer" + (e ? "enter" : "leave"), (n, r) => {
      if (n.pointerType === "touch" || tN()) {
        return;
      }
      let s = t.getProps();
      if (t.animationState && s.whileHover) {
        t.animationState.setActive("whileHover", e);
      }
      if (s[i]) {
        animationFrameScheduler.frameScheduler.update(() => s[i](n, r));
      }
    }, {
      passive: !t.getProps()[i]
    });
  }
  let tH = (t, e) => !!e && (t === e || tH(t, e.parentElement));
  var identityFunction_1 = require("identity-function_1") /*id: 743792*/;
  function tY(t, e) {
    if (!e) {
      return;
    }
    let i = new PointerEvent("pointer" + t);
    e(i, tL(i));
  }
  let tq = new WeakMap();
  let tG = new WeakMap();
  let tK = t => {
    let e = tq.get(t.target);
    if (e) {
      e(t);
    }
  };
  let tJ = t => {
    t.forEach(tK);
  };
  let tQ = {
    some: 0,
    all: 1
  };
  function t0(t, e) {
    if (!Array.isArray(e)) {
      return false;
    }
    let i = e.length;
    if (i !== t.length) {
      return false;
    }
    for (let n = 0; n < i; n++) {
      if (e[n] !== t[n]) {
        return false;
      }
    }
    return true;
  }
  function t1(t, e, i) {
    let n = t.getProps();
    return tw(n, e, i !== undefined ? i : n.custom, function (t) {
      let e = {};
      t.values.forEach((t, i) => e[i] = t.get());
      return e;
    }(t), function (t) {
      let e = {};
      t.values.forEach((t, i) => e[i] = t.getVelocity());
      return e;
    }(t));
  }
  var identityFunctionExports = require("identity-function-exports") /*id: 183293*/;
  let t3 = t => t * 1000;
  let t5 = t => t / 1000;
  let t4 = {
    current: false
  };
  let t6 = t => Array.isArray(t) && typeof t[0] == "number";
  let t9 = t => {
    let [e, i, n, r] = t;
    return `cubic-bezier(${e}, ${i}, ${n}, ${r})`;
  };
  let t8 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: t9([0, 0.65, 0.55, 1]),
    circOut: t9([0.55, 0, 1, 0.45]),
    backIn: t9([0.31, 0.01, 0.66, -0.59]),
    backOut: t9([0.33, 1.53, 0.69, 0.99])
  };
  let t7 = (t, e, i) => (((1 - i * 3 + e * 3) * t + (i * 3 - e * 6)) * t + e * 3) * t;
  function et(t, e, i, n) {
    if (t === e && i === n) {
      return identityFunction_1.identity;
    }
    let r = e => function (t, e, i, n, r) {
      let s;
      let o;
      let a = 0;
      do {
        if ((s = t7(o = e + (i - e) / 2, n, r) - t) > 0) {
          i = o;
        } else {
          e = o;
        }
      } while (Math.abs(s) > 1e-7 && ++a < 12);
      return o;
    }(e, 0, 1, t, i);
    return t => t === 0 || t === 1 ? t : t7(r(t), e, n);
  }
  let ee = et(0.42, 0, 1, 1);
  let ei = et(0, 0, 0.58, 1);
  let en = et(0.42, 0, 0.58, 1);
  let er = t => Array.isArray(t) && typeof t[0] != "number";
  let es = t => e => e <= 0.5 ? t(e * 2) / 2 : (2 - t((1 - e) * 2)) / 2;
  let eo = t => e => 1 - t(1 - e);
  let ea = t => 1 - Math.sin(Math.acos(t));
  let el = eo(ea);
  let eu = es(ea);
  let eh = et(0.33, 1.53, 0.69, 0.99);
  let ec = eo(eh);
  let ed = es(ec);
  let ep = {
    linear: identityFunction_1.identity,
    easeIn: ee,
    easeInOut: en,
    easeOut: ei,
    circIn: ea,
    circInOut: eu,
    circOut: el,
    backIn: ec,
    backInOut: ed,
    backOut: eh,
    anticipate: t => (t *= 2) < 1 ? ec(t) * 0.5 : (2 - Math.pow(2, (t - 1) * -10)) * 0.5
  };
  let em = t => {
    if (Array.isArray(t)) {
      identityFunctionExports.identityFn(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
      let [e, i, n, r] = t;
      return et(e, i, n, r);
    }
    if (typeof t == "string") {
      identityFunctionExports.identityFn(ep[t] !== undefined, `Invalid easing type '${t}'`);
      return ep[t];
    } else {
      return t;
    }
  };
  let ef = (t, e) => i => !!q(i) && !!Y.test(i) && !!i.startsWith(t) || !!e && !!Object.prototype.hasOwnProperty.call(i, e);
  let eg = (t, e, i) => n => {
    if (!q(n)) {
      return n;
    }
    let [r, s, o, a] = n.match(H);
    return {
      [t]: parseFloat(r),
      [e]: parseFloat(s),
      [i]: parseFloat(o),
      alpha: a !== undefined ? parseFloat(a) : 1
    };
  };
  let ev = t => $(0, 255, t);
  let ey = {
    ...Z,
    transform: t => Math.round(ev(t))
  };
  let ex = {
    test: ef("rgb", "red"),
    parse: eg("red", "green", "blue"),
    transform: t => {
      let {
        red: e,
        green: i,
        blue: n,
        alpha: r = 1
      } = t;
      return "rgba(" + ey.transform(e) + ", " + ey.transform(i) + ", " + ey.transform(n) + ", " + _(N.transform(r)) + ")";
    }
  };
  let eb = {
    test: ef("#"),
    parse: function (t) {
      let e = "";
      let i = "";
      let n = "";
      let r = "";
      if (t.length > 5) {
        e = t.substring(1, 3);
        i = t.substring(3, 5);
        n = t.substring(5, 7);
        r = t.substring(7, 9);
      } else {
        e = t.substring(1, 2);
        i = t.substring(2, 3);
        n = t.substring(3, 4);
        r = t.substring(4, 5);
        e += e;
        i += i;
        n += n;
        r += r;
      }
      return {
        red: parseInt(e, 16),
        green: parseInt(i, 16),
        blue: parseInt(n, 16),
        alpha: r ? parseInt(r, 16) / 255 : 1
      };
    },
    transform: ex.transform
  };
  let eP = {
    test: ef("hsl", "hue"),
    parse: eg("hue", "saturation", "lightness"),
    transform: t => {
      let {
        hue: e,
        saturation: i,
        lightness: n,
        alpha: r = 1
      } = t;
      return "hsla(" + Math.round(e) + ", " + J.transform(_(i)) + ", " + J.transform(_(n)) + ", " + _(N.transform(r)) + ")";
    }
  };
  let ew = {
    test: t => ex.test(t) || eb.test(t) || eP.test(t),
    parse: t => ex.test(t) ? ex.parse(t) : eP.test(t) ? eP.parse(t) : eb.parse(t),
    transform: t => q(t) ? t : t.hasOwnProperty("red") ? ex.transform(t) : eP.transform(t)
  };
  let eT = (t, e, i) => -i * t + i * e + t;
  function eA(t, e, i) {
    if (i < 0) {
      i += 1;
    }
    if (i > 1) {
      i -= 1;
    }
    if (i < 1 / 6) {
      return t + (e - t) * 6 * i;
    } else if (i < 0.5) {
      return e;
    } else if (i < 2 / 3) {
      return t + (e - t) * (2 / 3 - i) * 6;
    } else {
      return t;
    }
  }
  let eC = (t, e, i) => {
    let n = t * t;
    return Math.sqrt(Math.max(0, i * (e * e - n) + n));
  };
  let eS = [eb, ex, eP];
  let eE = t => eS.find(e => e.test(t));
  function ek(t) {
    let e = eE(t);
    identityFunctionExports.identityFn(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
    let i = e.parse(t);
    if (e === eP) {
      i = function (t) {
        let {
          hue: e,
          saturation: i,
          lightness: n,
          alpha: r
        } = t;
        e /= 360;
        n /= 100;
        let s = 0;
        let o = 0;
        let a = 0;
        if (i /= 100) {
          let t = n < 0.5 ? n * (1 + i) : n + i - n * i;
          let r = n * 2 - t;
          s = eA(r, t, e + 1 / 3);
          o = eA(r, t, e);
          a = eA(r, t, e - 1 / 3);
        } else {
          s = o = a = n;
        }
        return {
          red: Math.round(s * 255),
          green: Math.round(o * 255),
          blue: Math.round(a * 255),
          alpha: r
        };
      }(i);
    }
    return i;
  }
  let eV = (t, e) => {
    let i = ek(t);
    let n = ek(e);
    let r = {
      ...i
    };
    return t => {
      r.red = eC(i.red, n.red, t);
      r.green = eC(i.green, n.green, t);
      r.blue = eC(i.blue, n.blue, t);
      r.alpha = eT(i.alpha, n.alpha, t);
      return ex.transform(r);
    };
  };
  let eM = {
    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    countKey: "Vars",
    token: "${v}",
    parse: identityFunction_1.identity
  };
  let eR = {
    regex: X,
    countKey: "Colors",
    token: "${c}",
    parse: ew.parse
  };
  let ej = {
    regex: H,
    countKey: "Numbers",
    token: "${n}",
    parse: Z.parse
  };
  function eO(t, e) {
    let {
      regex: i,
      countKey: n,
      token: r,
      parse: s
    } = e;
    let o = t.tokenised.match(i);
    if (o) {
      t["num" + n] = o.length;
      t.tokenised = t.tokenised.replace(i, r);
      t.values.push(...o.map(s));
    }
  }
  function eL(t) {
    let e = t.toString();
    let i = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0
    };
    if (i.value.includes("var(--")) {
      eO(i, eM);
    }
    eO(i, eR);
    eO(i, ej);
    return i;
  }
  function eD(t) {
    return eL(t).values;
  }
  function eI(t) {
    let {
      values: e,
      numColors: i,
      numVars: n,
      tokenised: r
    } = eL(t);
    let s = e.length;
    return t => {
      let e = r;
      for (let r = 0; r < s; r++) {
        e = r < n ? e.replace(eM.token, t[r]) : r < n + i ? e.replace(eR.token, ew.transform(t[r])) : e.replace(ej.token, _(t[r]));
      }
      return e;
    };
  }
  let eF = t => typeof t == "number" ? 0 : t;
  let eB = {
    test: function (t) {
      return isNaN(t) && q(t) && (t.match(H)?.length || 0) + (t.match(X)?.length || 0) > 0;
    },
    parse: eD,
    createTransformer: eI,
    getAnimatableNone: function (t) {
      let e = eD(t);
      return eI(t)(e.map(eF));
    }
  };
  let eW = (t, e) => i => `${i > 0 ? e : t}`;
  function eU(t, e) {
    if (typeof t == "number") {
      return i => eT(t, e, i);
    } else if (ew.test(t)) {
      return eV(t, e);
    } else if (t.startsWith("var(")) {
      return eW(t, e);
    } else {
      return eN(t, e);
    }
  }
  let e$ = (t, e) => {
    let i = [...t];
    let n = i.length;
    let r = t.map((t, i) => eU(t, e[i]));
    return t => {
      for (let e = 0; e < n; e++) {
        i[e] = r[e](t);
      }
      return i;
    };
  };
  let eZ = (t, e) => {
    let i = {
      ...t,
      ...e
    };
    let n = {};
    for (let r in i) {
      if (t[r] !== undefined && e[r] !== undefined) {
        n[r] = eU(t[r], e[r]);
      }
    }
    return t => {
      for (let e in n) {
        i[e] = n[e](t);
      }
      return i;
    };
  };
  let eN = (t, e) => {
    let i = eB.createTransformer(e);
    let n = eL(t);
    let r = eL(e);
    if (n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers) {
      return tB(e$(n.values, r.values), i);
    } else {
      identityFunctionExports.identity(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return eW(t, e);
    }
  };
  let ez = (t, e, i) => {
    let n = e - t;
    if (n === 0) {
      return 1;
    } else {
      return (i - t) / n;
    }
  };
  let e_ = (t, e) => i => eT(t, e, i);
  function eH(t, e, {
    clamp: i = true,
    ease: n,
    mixer: r
  } = {}) {
    let s = t.length;
    identityFunctionExports.identityFn(s === e.length, "Both input and output ranges must be the same length");
    if (s === 1) {
      return () => e[0];
    }
    if (t[0] > t[s - 1]) {
      t = [...t].reverse();
      e = [...e].reverse();
    }
    let o = function (t, e, i) {
      let n = [];
      let r = i || function (t) {
        if (typeof t == "number") ;else if (typeof t == "string") {
          if (ew.test(t)) {
            return eV;
          } else {
            return eN;
          }
        } else if (Array.isArray(t)) {
          return e$;
        } else if (typeof t == "object") {
          return eZ;
        }
        return e_;
      }(t[0]);
      let s = t.length - 1;
      for (let i = 0; i < s; i++) {
        let s = r(t[i], t[i + 1]);
        if (e) {
          s = tB(Array.isArray(e) ? e[i] || identityFunction_1.identity : e, s);
        }
        n.push(s);
      }
      return n;
    }(e, n, r);
    let a = o.length;
    let l = e => {
      let i = 0;
      if (a > 1) {
        for (; i < t.length - 2 && !(e < t[i + 1]); i++);
      }
      let n = ez(t[i], t[i + 1], e);
      return o[i](n);
    };
    if (i) {
      return e => l($(t[0], t[s - 1], e));
    } else {
      return l;
    }
  }
  function eX(t) {
    let {
      duration: e = 300,
      keyframes: i,
      times: n,
      ease: r = "easeInOut"
    } = t;
    let s = er(r) ? r.map(em) : em(r);
    let o = {
      done: false,
      value: i[0]
    };
    let a = eH((n && n.length === i.length ? n : function (t) {
      let e = [0];
      (function (t, e) {
        let i = t[t.length - 1];
        for (let n = 1; n <= e; n++) {
          let r = ez(0, e, n);
          t.push(eT(i, 1, r));
        }
      })(e, t.length - 1);
      return e;
    }(i)).map(t => t * e), i, {
      ease: Array.isArray(s) ? s : i.map(() => s || en).splice(0, i.length - 1)
    });
    return {
      calculatedDuration: e,
      next: t => {
        o.value = a(t);
        o.done = t >= e;
        return o;
      }
    };
  }
  function eY(t, e, i) {
    var n;
    var r;
    let s = Math.max(e - 5, 0);
    n = i - t(s);
    if (r = e - s) {
      return 1000 / r * n;
    } else {
      return 0;
    }
  }
  function eq(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  let eG = ["duration", "bounce"];
  let eK = ["stiffness", "damping", "mass"];
  function eJ(t, e) {
    return e.some(e => t[e] !== undefined);
  }
  function eQ(t) {
    let e;
    let {
      keyframes: i,
      restDelta: n,
      restSpeed: r,
      ...s
    } = t;
    let o = i[0];
    let a = i[i.length - 1];
    let l = {
      done: false,
      value: o
    };
    let {
      stiffness: u,
      damping: h,
      mass: c,
      duration: d,
      velocity: p,
      isResolvedFromDuration: m
    } = function (t) {
      let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: false,
        ...t
      };
      if (!eJ(t, eK) && eJ(t, eG)) {
        let i = function (t) {
          let e;
          let i;
          let {
            duration: n = 800,
            bounce: r = 0.25,
            velocity: s = 0,
            mass: o = 1
          } = t;
          identityFunctionExports.identity(n <= t3(10), "Spring duration must be 10 seconds or less");
          let a = 1 - r;
          a = $(0.05, 1, a);
          n = $(0.01, 10, t5(n));
          if (a < 1) {
            e = t => {
              let e = t * a;
              let i = e * n;
              return 0.001 - (e - s) / eq(t, a) * Math.exp(-i);
            };
            i = t => {
              let i = t * a * n;
              let r = Math.pow(a, 2) * Math.pow(t, 2) * n;
              let o = Math.exp(-i);
              let l = eq(Math.pow(t, 2), a);
              return (i * s + s - r) * o * (-e(t) + 0.001 > 0 ? -1 : 1) / l;
            };
          } else {
            e = t => -0.001 + Math.exp(-t * n) * ((t - s) * n + 1);
            i = t => n * n * (s - t) * Math.exp(-t * n);
          }
          let l = function (t, e, i) {
            let n = i;
            for (let i = 1; i < 12; i++) {
              n -= t(n) / e(n);
            }
            return n;
          }(e, i, 5 / n);
          n = t3(n);
          if (isNaN(l)) {
            return {
              stiffness: 100,
              damping: 10,
              duration: n
            };
          }
          {
            let t = Math.pow(l, 2) * o;
            return {
              stiffness: t,
              damping: a * 2 * Math.sqrt(o * t),
              duration: n
            };
          }
        }(t);
        (e = {
          ...e,
          ...i,
          mass: 1
        }).isResolvedFromDuration = true;
      }
      return e;
    }({
      ...s,
      velocity: -t5(s.velocity || 0)
    });
    let f = p || 0;
    let g = h / (Math.sqrt(u * c) * 2);
    let v = a - o;
    let y = t5(Math.sqrt(u / c));
    let x = Math.abs(v) < 5;
    r ||= x ? 0.01 : 2;
    n ||= x ? 0.005 : 0.5;
    if (g < 1) {
      let t = eq(y, g);
      e = e => a - Math.exp(-g * y * e) * ((f + g * y * v) / t * Math.sin(t * e) + v * Math.cos(t * e));
    } else if (g === 1) {
      e = t => a - Math.exp(-y * t) * (v + (f + y * v) * t);
    } else {
      let t = y * Math.sqrt(g * g - 1);
      e = e => {
        let i = Math.exp(-g * y * e);
        let n = Math.min(t * e, 300);
        return a - i * ((f + g * y * v) * Math.sinh(n) + t * v * Math.cosh(n)) / t;
      };
    }
    return {
      calculatedDuration: m && d || null,
      next: t => {
        let i = e(t);
        if (m) {
          l.done = t >= d;
        } else {
          let s = f;
          if (t !== 0) {
            s = g < 1 ? eY(e, t, i) : 0;
          }
          let o = Math.abs(s) <= r;
          let u = Math.abs(a - i) <= n;
          l.done = o && u;
        }
        l.value = l.done ? a : i;
        return l;
      }
    };
  }
  function e0(t) {
    let e;
    let i;
    let {
      keyframes: n,
      velocity: r = 0,
      power: s = 0.8,
      timeConstant: o = 325,
      bounceDamping: a = 10,
      bounceStiffness: l = 500,
      modifyTarget: u,
      min: h,
      max: c,
      restDelta: d = 0.5,
      restSpeed: p
    } = t;
    let m = n[0];
    let f = {
      done: false,
      value: m
    };
    let g = t => h !== undefined && t < h || c !== undefined && t > c;
    let v = t => h === undefined ? c : c === undefined ? h : Math.abs(h - t) < Math.abs(c - t) ? h : c;
    let y = s * r;
    let x = m + y;
    let b = u === undefined ? x : u(x);
    if (b !== x) {
      y = b - m;
    }
    let P = t => -y * Math.exp(-t / o);
    let w = t => b + P(t);
    let T = t => {
      let e = P(t);
      let i = w(t);
      f.done = Math.abs(e) <= d;
      f.value = f.done ? b : i;
    };
    let A = t => {
      if (g(f.value)) {
        e = t;
        i = eQ({
          keyframes: [f.value, v(f.value)],
          velocity: eY(w, t, f.value),
          damping: a,
          stiffness: l,
          restDelta: d,
          restSpeed: p
        });
      }
    };
    A(0);
    return {
      calculatedDuration: null,
      next: t => {
        let n = false;
        if (!i && e === undefined) {
          n = true;
          T(t);
          A(t);
        }
        if (e !== undefined && t > e) {
          return i.next(t - e);
        } else {
          if (!n) {
            T(t);
          }
          return f;
        }
      }
    };
  }
  let e1 = t => {
    let e = e => {
      let {
        timestamp: i
      } = e;
      return t(i);
    };
    return {
      start: () => animationFrameScheduler.frameScheduler.update(e, true),
      stop: () => animationFrameScheduler.cancelScheduler(e),
      now: () => animationFrameScheduler.schedulerState.isProcessing ? animationFrameScheduler.schedulerState.timestamp : performance.now()
    };
  };
  function e2(t) {
    let e = 0;
    let i = t.next(e);
    while (!i.done && e < 20000) {
      e += 50;
      i = t.next(e);
    }
    if (e >= 20000) {
      return Infinity;
    } else {
      return e;
    }
  }
  let e3 = {
    decay: e0,
    inertia: e0,
    tween: eX,
    keyframes: eX,
    spring: eQ
  };
  function e5(t) {
    let e;
    let i;
    let n;
    let r;
    let s;
    let {
      autoplay: o = true,
      delay: a = 0,
      driver: l = e1,
      keyframes: u,
      type: h = "keyframes",
      repeat: c = 0,
      repeatDelay: d = 0,
      repeatType: p = "loop",
      onPlay: m,
      onStop: f,
      onComplete: g,
      onUpdate: v,
      ...y
    } = t;
    let x = 1;
    let b = false;
    let P = () => {
      i = new Promise(t => {
        e = t;
      });
    };
    P();
    let w = e3[h] || eX;
    if (w !== eX && typeof u[0] != "number") {
      r = eH([0, 100], u, {
        clamp: false
      });
      u = [0, 100];
    }
    let T = w({
      ...y,
      keyframes: u
    });
    if (p === "mirror") {
      s = w({
        ...y,
        keyframes: [...u].reverse(),
        velocity: -(y.velocity || 0)
      });
    }
    let A = "idle";
    let C = null;
    let S = null;
    let E = null;
    if (T.calculatedDuration === null && c) {
      T.calculatedDuration = e2(T);
    }
    let {
      calculatedDuration: k
    } = T;
    let V = Infinity;
    let M = Infinity;
    if (k !== null) {
      M = (V = k + d) * (c + 1) - d;
    }
    let R = 0;
    let j = t => {
      if (S === null) {
        return;
      }
      if (x > 0) {
        S = Math.min(S, t);
      }
      if (x < 0) {
        S = Math.min(t - M / x, S);
      }
      let e = (R = C !== null ? C : Math.round(t - S) * x) - a * (x >= 0 ? 1 : -1);
      let i = x >= 0 ? e < 0 : e > M;
      R = Math.max(e, 0);
      if (A === "finished" && C === null) {
        R = M;
      }
      let n = R;
      let o = T;
      if (c) {
        let t = Math.min(R, M) / V;
        let e = Math.floor(t);
        let i = t % 1;
        if (!i && t >= 1) {
          i = 1;
        }
        if (i === 1) {
          e--;
        }
        if ((e = Math.min(e, c + 1)) % 2) {
          if (p === "reverse") {
            i = 1 - i;
            if (d) {
              i -= d / V;
            }
          } else if (p === "mirror") {
            o = s;
          }
        }
        n = $(0, 1, i) * V;
      }
      let l = i ? {
        done: false,
        value: u[0]
      } : o.next(n);
      if (r) {
        l.value = r(l.value);
      }
      let {
        done: h
      } = l;
      if (!i && k !== null) {
        h = x >= 0 ? R >= M : R <= 0;
      }
      let m = C === null && (A === "finished" || A === "running" && h);
      if (v) {
        v(l.value);
      }
      if (m) {
        D();
      }
      return l;
    };
    let O = () => {
      if (n) {
        n.stop();
      }
      n = undefined;
    };
    let L = () => {
      A = "idle";
      O();
      e();
      P();
      S = E = null;
    };
    let D = () => {
      A = "finished";
      if (g) {
        g();
      }
      O();
      e();
    };
    let I = () => {
      if (b) {
        return;
      }
      n ||= l(j);
      let t = n.now();
      if (m) {
        m();
      }
      if (C !== null) {
        S = t - C;
      } else if (!S || A === "finished") {
        S = t;
      }
      if (A === "finished") {
        P();
      }
      E = S;
      C = null;
      A = "running";
      n.start();
    };
    if (o) {
      I();
    }
    let F = {
      then: (t, e) => i.then(t, e),
      get time() {
        return t5(R);
      },
      set time(newTime) {
        R = newTime = t3(newTime);
        if (C === null && n && x !== 0) {
          S = n.now() - newTime / x;
        } else {
          C = newTime;
        }
      },
      get duration() {
        return t5(T.calculatedDuration === null ? e2(T) : T.calculatedDuration);
      },
      get speed() {
        return x;
      },
      set speed(newSpeed) {
        if (newSpeed === x || !n) {
          return;
        }
        x = newSpeed;
        F.time = t5(R);
      },
      get state() {
        return A;
      },
      play: I,
      pause: () => {
        A = "paused";
        C = R;
      },
      stop: () => {
        b = true;
        if (A !== "idle") {
          A = "idle";
          if (f) {
            f();
          }
          L();
        }
      },
      cancel: () => {
        if (E !== null) {
          j(E);
        }
        L();
      },
      complete: () => {
        A = "finished";
      },
      sample: t => {
        S = 0;
        return j(t);
      }
    };
    return F;
  }
  s = () => Object.hasOwnProperty.call(Element.prototype, "animate");
  let e4 = () => {
    if (n === undefined) {
      n = s();
    }
    return n;
  };
  let e6 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
  let e9 = (t, e) => e.type === "spring" || t === "backgroundColor" || !function t(e) {
    return !e || typeof e == "string" && !!t8[e] || !!t6(e) || !!Array.isArray(e) && !!e.every(t);
  }(e.ease);
  let e8 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  let e7 = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? Math.sqrt(550) * 2 : 30,
    restSpeed: 10
  });
  let it = {
    type: "keyframes",
    duration: 0.8
  };
  let ie = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  let ii = (t, e) => {
    let {
      keyframes: i
    } = e;
    if (i.length > 2) {
      return it;
    } else if (j.has(t)) {
      if (t.startsWith("scale")) {
        return e7(i[1]);
      } else {
        return e8;
      }
    } else {
      return ie;
    }
  };
  let ir = (t, e) => t !== "zIndex" && (typeof e == "number" || !!Array.isArray(e) || typeof e == "string" && (!!eB.test(e) || e === "0") && !e.startsWith("url("));
  let is = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function io(t) {
    let [e, i] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") {
      return t;
    }
    let [n] = i.match(H) || [];
    if (!n) {
      return t;
    }
    let r = i.replace(n, "");
    let s = +!!is.has(e);
    if (n !== i) {
      s *= 100;
    }
    return e + "(" + s + r + ")";
  }
  let ia = /([a-z-]*)\(.*?\)/g;
  let il = {
    ...eB,
    getAnimatableNone: t => {
      let e = t.match(ia);
      if (e) {
        return e.map(io).join(" ");
      } else {
        return t;
      }
    }
  };
  let iu = {
    ...tr,
    color: ew,
    backgroundColor: ew,
    outlineColor: ew,
    fill: ew,
    stroke: ew,
    borderColor: ew,
    borderTopColor: ew,
    borderRightColor: ew,
    borderBottomColor: ew,
    borderLeftColor: ew,
    filter: il,
    WebkitFilter: il
  };
  let ih = t => iu[t];
  function ic(t, e) {
    let i = ih(t);
    if (i !== il) {
      i = eB;
    }
    if (i.getAnimatableNone) {
      return i.getAnimatableNone(e);
    } else {
      return undefined;
    }
  }
  let id = t => /^0[^.\s]+$/.test(t);
  function ip(t, e) {
    return t[e] || t.default || t;
  }
  let im = {
    skipAnimations: false
  };
  let ig = function (t, e, i, n = {}) {
    return r => {
      let s = ip(n, t) || {};
      let o = s.delay || n.delay || 0;
      let {
        elapsed: a = 0
      } = n;
      a -= t3(o);
      let l = function (t, e, i, n) {
        let r;
        let s;
        let o = ir(e, i);
        r = Array.isArray(i) ? [...i] : [null, i];
        let a = n.from !== undefined ? n.from : t.get();
        let l = [];
        for (let t = 0; t < r.length; t++) {
          var u;
          if (r[t] === null) {
            r[t] = t === 0 ? a : r[t - 1];
          }
          if (typeof (u = r[t]) == "number" ? u === 0 : u !== null ? u === "none" || u === "0" || id(u) : undefined) {
            l.push(t);
          }
          if (typeof r[t] == "string" && r[t] !== "none" && r[t] !== "0") {
            s = r[t];
          }
        }
        if (o && l.length && s) {
          for (let t = 0; t < l.length; t++) {
            r[l[t]] = ic(e, s);
          }
        }
        return r;
      }(e, t, i, s);
      let u = l[0];
      let h = l[l.length - 1];
      let c = ir(t, u);
      let d = ir(t, h);
      identityFunctionExports.identity(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
      let p = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -a,
        onUpdate: t => {
          e.set(t);
          if (s.onUpdate) {
            s.onUpdate(t);
          }
        },
        onComplete: () => {
          r();
          if (s.onComplete) {
            s.onComplete();
          }
        }
      };
      if (!function (t) {
        let {
          when: e,
          delay: i,
          delayChildren: n,
          staggerChildren: r,
          staggerDirection: s,
          repeat: o,
          repeatType: a,
          repeatDelay: l,
          from: u,
          elapsed: h,
          ...c
        } = t;
        return !!Object.keys(c).length;
      }(s)) {
        p = {
          ...p,
          ...ii(t, p)
        };
      }
      p.duration &&= t3(p.duration);
      p.repeatDelay &&= t3(p.repeatDelay);
      if (!c || !d || t4.current || s.type === false || im.skipAnimations) {
        return function (t) {
          let {
            keyframes: e,
            delay: i,
            onUpdate: n,
            onComplete: r
          } = t;
          let s = () => {
            if (n) {
              n(e[e.length - 1]);
            }
            if (r) {
              r();
            }
            return {
              time: 0,
              speed: 1,
              duration: 0,
              play: identityFunction_1.identity,
              pause: identityFunction_1.identity,
              stop: identityFunction_1.identity,
              then: t => {
                t();
                return Promise.resolve();
              },
              cancel: identityFunction_1.identity,
              complete: identityFunction_1.identity
            };
          };
          if (i) {
            return e5({
              keyframes: [0, 1],
              duration: 0,
              delay: i,
              onComplete: s
            });
          } else {
            return s();
          }
        }(t4.current ? {
          ...p,
          delay: 0
        } : p);
      }
      if (!n.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        let i = function (t, e, i) {
          let n;
          let r;
          let {
            onUpdate: s,
            onComplete: o,
            ...a
          } = i;
          if (!e4() || !e6.has(e) || !!a.repeatDelay || a.repeatType === "mirror" || a.damping === 0 || a.type === "inertia") {
            return false;
          }
          let l = false;
          let u = false;
          let h = () => {
            r = new Promise(t => {
              n = t;
            });
          };
          h();
          let {
            keyframes: c,
            duration: d = 300,
            ease: p,
            times: m
          } = a;
          if (e9(e, a)) {
            let t = e5({
              ...a,
              repeat: 0,
              delay: 0
            });
            let e = {
              done: false,
              value: c[0]
            };
            let i = [];
            let n = 0;
            while (!e.done && n < 20000) {
              e = t.sample(n);
              i.push(e.value);
              n += 10;
            }
            m = undefined;
            c = i;
            d = n - 10;
            p = "linear";
          }
          let f = function (t, e, i, {
            delay: n = 0,
            duration: r,
            repeat: s = 0,
            repeatType: o = "loop",
            ease: a,
            times: l
          } = {}) {
            let u = {
              [e]: i
            };
            if (l) {
              u.offset = l;
            }
            let h = function t(e) {
              if (e) {
                if (t6(e)) {
                  return t9(e);
                } else if (Array.isArray(e)) {
                  return e.map(t);
                } else {
                  return t8[e];
                }
              }
            }(a);
            if (Array.isArray(h)) {
              u.easing = h;
            }
            return t.animate(u, {
              delay: n,
              duration: r,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: s + 1,
              direction: o === "reverse" ? "alternate" : "normal"
            });
          }(t.owner.current, e, c, {
            ...a,
            duration: d,
            ease: p,
            times: m
          });
          let g = () => {
            u = false;
            f.cancel();
          };
          let v = () => {
            u = true;
            animationFrameScheduler.frameScheduler.update(g);
            n();
            h();
          };
          f.onfinish = () => {
            if (!u) {
              t.set(function (t, e) {
                let {
                  repeat: i,
                  repeatType: n = "loop"
                } = e;
                let r = i && n !== "loop" && i % 2 == 1 ? 0 : t.length - 1;
                return t[r];
              }(c, a));
              if (o) {
                o();
              }
              v();
            }
          };
          return {
            then: (t, e) => r.then(t, e),
            attachTimeline: t => {
              f.timeline = t;
              f.onfinish = null;
              return identityFunction_1.identity;
            },
            get time() {
              return t5(f.currentTime || 0);
            },
            set time(newTime) {
              f.currentTime = t3(newTime);
            },
            get speed() {
              return f.playbackRate;
            },
            set speed(newSpeed) {
              f.playbackRate = newSpeed;
            },
            get duration() {
              return t5(d);
            },
            play: () => {
              if (!l) {
                f.play();
                animationFrameScheduler.cancelScheduler(g);
              }
            },
            pause: () => f.pause(),
            stop: () => {
              l = true;
              if (f.playState === "idle") {
                return;
              }
              let {
                currentTime: e
              } = f;
              if (e) {
                let i = e5({
                  ...a,
                  autoplay: false
                });
                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10);
              }
              v();
            },
            complete: () => {
              if (!u) {
                f.finish();
              }
            },
            cancel: v
          };
        }(e, t, p);
        if (i) {
          return i;
        }
      }
      return e5(p);
    };
  };
  function iv(t) {
    return !!L(t) && !!t.add;
  }
  let iy = t => /^\-?\d*\.?\d+$/.test(t);
  function ix(t, e) {
    if (t.indexOf(e) === -1) {
      t.push(e);
    }
  }
  function ib(t, e) {
    let i = t.indexOf(e);
    if (i > -1) {
      t.splice(i, 1);
    }
  }
  class iP {
    add(t) {
      ix(this.subscriptions, t);
      return () => ib(this.subscriptions, t);
    }
    notify(t, e, i) {
      let n = this.subscriptions.length;
      if (n) {
        if (n === 1) {
          this.subscriptions[0](t, e, i);
        } else {
          for (let r = 0; r < n; r++) {
            let n = this.subscriptions[r];
            if (n) {
              n(t, e, i);
            }
          }
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
    constructor() {
      this.subscriptions = [];
    }
  }
  let iw = t => !isNaN(parseFloat(t));
  let iT = {
    current: undefined
  };
  class iA {
    onChange(t) {
      return this.on("change", t);
    }
    on(t, e) {
      this.events[t] ||= new iP();
      let i = this.events[t].add(e);
      if (t === "change") {
        return () => {
          i();
          animationFrameScheduler.frameScheduler.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      } else {
        return i;
      }
    }
    clearListeners() {
      for (let t in this.events) {
        this.events[t].clear();
      }
    }
    attach(t, e) {
      this.passiveEffect = t;
      this.stopPassiveEffect = e;
    }
    set(t) {
      let e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (e && this.passiveEffect) {
        this.passiveEffect(t, this.updateAndNotify);
      } else {
        this.updateAndNotify(t, e);
      }
    }
    setWithVelocity(t, e, i) {
      this.set(e);
      this.prev = t;
      this.timeDelta = i;
    }
    jump(t) {
      this.updateAndNotify(t);
      this.prev = t;
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
    get() {
      if (iT.current) {
        iT.current.push(this);
      }
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      var t;
      var e;
      if (this.canTrackVelocity) {
        t = parseFloat(this.current) - parseFloat(this.prev);
        if (e = this.timeDelta) {
          return 1000 / e * t;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
    start(t) {
      this.stop();
      return new Promise(e => {
        this.hasAnimated = true;
        this.animation = t(e);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
    constructor(t, e = {}) {
      var i = this;
      this.version = "10.18.0";
      this.timeDelta = 0;
      this.lastUpdated = 0;
      this.canTrackVelocity = false;
      this.events = {};
      this.updateAndNotify = function (t) {
        let e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        i.prev = i.current;
        i.current = t;
        let {
          delta: n,
          timestamp: r
        } = animationFrameScheduler.schedulerState;
        if (i.lastUpdated !== r) {
          i.timeDelta = n;
          i.lastUpdated = r;
          animationFrameScheduler.frameScheduler.postRender(i.scheduleVelocityCheck);
        }
        if (i.prev !== i.current && i.events.change) {
          i.events.change.notify(i.current);
        }
        if (i.events.velocityChange) {
          i.events.velocityChange.notify(i.getVelocity());
        }
        if (e && i.events.renderRequest) {
          i.events.renderRequest.notify(i.current);
        }
      };
      this.scheduleVelocityCheck = () => animationFrameScheduler.frameScheduler.postRender(this.velocityCheck);
      this.velocityCheck = t => {
        let {
          timestamp: e
        } = t;
        if (e !== this.lastUpdated) {
          this.prev = this.current;
          if (this.events.velocityChange) {
            this.events.velocityChange.notify(this.getVelocity());
          }
        }
      };
      this.hasAnimated = false;
      this.prev = this.current = t;
      this.canTrackVelocity = iw(this.current);
      this.owner = e.owner;
    }
  }
  function iC(t, e) {
    return new iA(t, e);
  }
  let iS = t => e => e.test(t);
  let iE = [Z, Q, J, K, te, tt, {
    test: t => t === "auto",
    parse: t => t
  }];
  let ik = t => iE.find(iS(t));
  let iV = [...iE, ew, eB];
  let iM = t => iV.find(iS(t));
  function iR(t, e, {
    delay: i = 0,
    transitionOverride: n,
    type: r
  } = {}) {
    let {
      transition: s = t.getDefaultTransition(),
      transitionEnd: o,
      ...a
    } = t.makeTargetAnimatable(e);
    let l = t.getValue("willChange");
    if (n) {
      s = n;
    }
    let u = [];
    let h = r && t.animationState && t.animationState.getState()[r];
    for (let e in a) {
      let n = t.getValue(e);
      let r = a[e];
      if (!n || r === undefined || h && function (t, e) {
        let {
          protectedKeys: i,
          needsAnimating: n
        } = t;
        let r = i.hasOwnProperty(e) && n[e] !== true;
        n[e] = false;
        return r;
      }(h, e)) {
        continue;
      }
      let o = {
        delay: i,
        elapsed: 0,
        ...ip(s || {}, e)
      };
      if (window.HandoffAppearAnimations) {
        let i = t.getProps()[p];
        if (i) {
          let t = window.HandoffAppearAnimations(i, e, n, animationFrameScheduler.frameScheduler);
          if (t !== null) {
            o.elapsed = t;
            o.isHandoff = true;
          }
        }
      }
      let c = !o.isHandoff && !function (t, e) {
        let i = t.get();
        if (!Array.isArray(e)) {
          return i !== e;
        }
        for (let t = 0; t < e.length; t++) {
          if (e[t] !== i) {
            return true;
          }
        }
      }(n, r);
      if (o.type === "spring" && (n.getVelocity() || o.velocity)) {
        c = false;
      }
      if (n.animation) {
        c = false;
      }
      if (c) {
        continue;
      }
      n.start(ig(e, n, r, t.shouldReduceMotion && j.has(e) ? {
        type: false
      } : o));
      let d = n.animation;
      if (iv(l)) {
        l.add(e);
        d.then(() => l.remove(e));
      }
      u.push(d);
    }
    if (o) {
      Promise.all(u).then(() => {
        if (o) {
          (function (t, e) {
            let i = t1(t, e);
            let {
              transitionEnd: n = {},
              transition: r = {},
              ...s
            } = i ? t.makeTargetAnimatable(i, false) : {};
            for (let e in s = {
              ...s,
              ...n
            }) {
              let i = tS(s[e]);
              if (t.hasValue(e)) {
                t.getValue(e).set(i);
              } else {
                t.addValue(e, iC(i));
              }
            }
          })(t, o);
        }
      });
    }
    return u;
  }
  function ij(t, e, i = {}) {
    let n = t1(t, e, i.custom);
    let {
      transition: r = t.getDefaultTransition() || {}
    } = n || {};
    if (i.transitionOverride) {
      r = i.transitionOverride;
    }
    let s = n ? () => Promise.all(iR(t, n, i)) : () => Promise.resolve();
    let o = t.variantChildren && t.variantChildren.size ? function (n = 0) {
      let {
        delayChildren: s = 0,
        staggerChildren: o,
        staggerDirection: a
      } = r;
      return function (t, e, i = 0, n = 0, r = 1, s) {
        let o = [];
        let a = (t.variantChildren.size - 1) * n;
        let l = r === 1 ? function (t = 0) {
          return t * n;
        } : function (t = 0) {
          return a - t * n;
        };
        Array.from(t.variantChildren).sort(iO).forEach((t, n) => {
          t.notify("AnimationStart", e);
          o.push(ij(t, e, {
            ...s,
            delay: i + l(n)
          }).then(() => t.notify("AnimationComplete", e)));
        });
        return Promise.all(o);
      }(t, e, s + n, o, a, i);
    } : () => Promise.resolve();
    let {
      when: a
    } = r;
    if (!a) {
      return Promise.all([s(), o(i.delay)]);
    }
    {
      let [t, e] = a === "beforeChildren" ? [s, o] : [o, s];
      return t().then(() => e());
    }
  }
  function iO(t, e) {
    return t.sortNodePosition(e);
  }
  let iL = [...v].reverse();
  let iD = v.length;
  function iI(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  let iF = 0;
  let iB = (t, e) => Math.abs(t - e);
  class iW {
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      if (this.removeListeners) {
        this.removeListeners();
      }
      animationFrameScheduler.cancelScheduler(this.updatePoint);
    }
    constructor(t, e, {
      transformPagePoint: i,
      contextWindow: n,
      dragSnapToOrigin: r = false
    } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.updatePoint = () => {
        var t;
        var e;
        if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
          return;
        }
        let i = iZ(this.lastMoveEventInfo, this.history);
        let n = this.startEvent !== null;
        t = i.offset;
        e = {
          x: 0,
          y: 0
        };
        let r = Math.sqrt(iB(t.x, e.x) ** 2 + iB(t.y, e.y) ** 2) >= 3;
        if (!n && !r) {
          return;
        }
        let {
          point: s
        } = i;
        let {
          timestamp: o
        } = animationFrameScheduler.schedulerState;
        this.history.push({
          ...s,
          timestamp: o
        });
        let {
          onStart: a,
          onMove: l
        } = this.handlers;
        if (!n) {
          if (a) {
            a(this.lastMoveEvent, i);
          }
          this.startEvent = this.lastMoveEvent;
        }
        if (l) {
          l(this.lastMoveEvent, i);
        }
      };
      this.handlePointerMove = (t, e) => {
        this.lastMoveEvent = t;
        this.lastMoveEventInfo = iU(e, this.transformPagePoint);
        animationFrameScheduler.frameScheduler.update(this.updatePoint, true);
      };
      this.handlePointerUp = (t, e) => {
        this.end();
        let {
          onEnd: i,
          onSessionEnd: n,
          resumeAnimation: r
        } = this.handlers;
        if (this.dragSnapToOrigin && r) {
          r();
        }
        if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
          return;
        }
        let s = iZ(t.type === "pointercancel" ? this.lastMoveEventInfo : iU(e, this.transformPagePoint), this.history);
        if (this.startEvent && i) {
          i(t, s);
        }
        if (n) {
          n(t, s);
        }
      };
      if (!tO(t)) {
        return;
      }
      this.dragSnapToOrigin = r;
      this.handlers = e;
      this.transformPagePoint = i;
      this.contextWindow = n || window;
      let s = iU(tL(t), this.transformPagePoint);
      let {
        point: o
      } = s;
      let {
        timestamp: a
      } = animationFrameScheduler.schedulerState;
      this.history = [{
        ...o,
        timestamp: a
      }];
      let {
        onSessionStart: l
      } = e;
      if (l) {
        l(t, iZ(s, this.history));
      }
      this.removeListeners = tB(tI(this.contextWindow, "pointermove", this.handlePointerMove), tI(this.contextWindow, "pointerup", this.handlePointerUp), tI(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
  }
  function iU(t, e) {
    if (e) {
      return {
        point: e(t.point)
      };
    } else {
      return t;
    }
  }
  function i$(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function iZ(t, e) {
    let {
      point: i
    } = t;
    return {
      point: i,
      delta: i$(i, iN(e)),
      offset: i$(i, e[0]),
      velocity: function (t, e) {
        if (t.length < 2) {
          return {
            x: 0,
            y: 0
          };
        }
        let i = t.length - 1;
        let n = null;
        let r = iN(t);
        while (i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > t3(0.1)))) {
          i--;
        }
        if (!n) {
          return {
            x: 0,
            y: 0
          };
        }
        let s = t5(r.timestamp - n.timestamp);
        if (s === 0) {
          return {
            x: 0,
            y: 0
          };
        }
        let o = {
          x: (r.x - n.x) / s,
          y: (r.y - n.y) / s
        };
        if (o.x === Infinity) {
          o.x = 0;
        }
        if (o.y === Infinity) {
          o.y = 0;
        }
        return o;
      }(e, 0.1)
    };
  }
  function iN(t) {
    return t[t.length - 1];
  }
  function iz(t) {
    return t.max - t.min;
  }
  function i_(t, e = 0, i = 0.01) {
    return Math.abs(t - e) <= i;
  }
  function iH(t, e, i, n = 0.5) {
    t.origin = n;
    t.originPoint = eT(e.min, e.max, t.origin);
    t.scale = iz(i) / iz(e);
    if (i_(t.scale, 1, 0.0001) || isNaN(t.scale)) {
      t.scale = 1;
    }
    t.translate = eT(i.min, i.max, t.origin) - t.originPoint;
    if (i_(t.translate) || isNaN(t.translate)) {
      t.translate = 0;
    }
  }
  function iX(t, e, i, n) {
    iH(t.x, e.x, i.x, n ? n.originX : undefined);
    iH(t.y, e.y, i.y, n ? n.originY : undefined);
  }
  function iY(t, e, i) {
    t.min = i.min + e.min;
    t.max = t.min + iz(e);
  }
  function iq(t, e, i) {
    t.min = e.min - i.min;
    t.max = t.min + iz(e);
  }
  function iG(t, e, i) {
    iq(t.x, e.x, i.x);
    iq(t.y, e.y, i.y);
  }
  function iK(t, e, i) {
    return {
      min: e !== undefined ? t.min + e : undefined,
      max: i !== undefined ? t.max + i - (t.max - t.min) : undefined
    };
  }
  function iJ(t, e) {
    let i = e.min - t.min;
    let n = e.max - t.max;
    if (e.max - e.min < t.max - t.min) {
      [i, n] = [n, i];
    }
    return {
      min: i,
      max: n
    };
  }
  function iQ(t, e, i) {
    return {
      min: i0(t, e),
      max: i0(t, i)
    };
  }
  function i0(t, e) {
    if (typeof t == "number") {
      return t;
    } else {
      return t[e] || 0;
    }
  }
  let i1 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  let i2 = () => ({
    x: i1(),
    y: i1()
  });
  let i3 = () => ({
    min: 0,
    max: 0
  });
  let i5 = () => ({
    x: i3(),
    y: i3()
  });
  function i4(t) {
    return [t("x"), t("y")];
  }
  function i6(t) {
    let {
      top: e,
      left: i,
      right: n,
      bottom: r
    } = t;
    return {
      x: {
        min: i,
        max: n
      },
      y: {
        min: e,
        max: r
      }
    };
  }
  function i9(t) {
    return t === undefined || t === 1;
  }
  function i8(t) {
    let {
      scale: e,
      scaleX: i,
      scaleY: n
    } = t;
    return !i9(e) || !i9(i) || !i9(n);
  }
  function i7(t) {
    return i8(t) || nt(t) || t.z || t.rotate || t.rotateX || t.rotateY;
  }
  function nt(t) {
    var e;
    var i;
    return (e = t.x) && e !== "0%" || (i = t.y) && i !== "0%";
  }
  function ne(t, e, i, n, r) {
    if (r !== undefined) {
      t = n + r * (t - n);
    }
    return n + i * (t - n) + e;
  }
  function ni(t, e = 0, i = 1, n, r) {
    t.min = ne(t.min, e, i, n, r);
    t.max = ne(t.max, e, i, n, r);
  }
  function nn(t, e) {
    let {
      x: i,
      y: n
    } = e;
    ni(t.x, i.translate, i.scale, i.originPoint);
    ni(t.y, n.translate, n.scale, n.originPoint);
  }
  function nr(t) {
    if (Number.isInteger(t)) {
      return t;
    } else if (t > 1.0000000000001 || t < 0.999999999999) {
      return t;
    } else {
      return 1;
    }
  }
  function ns(t, e) {
    t.min = t.min + e;
    t.max = t.max + e;
  }
  function no(t, e, i) {
    let [n, r, s] = i;
    let o = e[s] !== undefined ? e[s] : 0.5;
    let a = eT(t.min, t.max, o);
    ni(t, e[n], e[r], a, e.scale);
  }
  let na = ["x", "scaleX", "originX"];
  let nl = ["y", "scaleY", "originY"];
  function nu(t, e) {
    no(t.x, e, na);
    no(t.y, e, nl);
  }
  function nh(t, e) {
    return i6(function (t, e) {
      if (!e) {
        return t;
      }
      let i = e({
        x: t.left,
        y: t.top
      });
      let n = e({
        x: t.right,
        y: t.bottom
      });
      return {
        top: i.y,
        left: i.x,
        bottom: n.y,
        right: n.x
      };
    }(t.getBoundingClientRect(), e));
  }
  let nc = t => {
    let {
      current: e
    } = t;
    if (e) {
      return e.ownerDocument.defaultView;
    } else {
      return null;
    }
  };
  let nd = new WeakMap();
  class np {
    start(t, {
      snapToCursor: e = false
    } = {}) {
      let {
        presenceContext: i
      } = this.visualElement;
      if (i && i.isPresent === false) {
        return;
      }
      let {
        dragSnapToOrigin: n
      } = this.getProps();
      this.panSession = new iW(t, {
        onSessionStart: t => {
          let {
            dragSnapToOrigin: i
          } = this.getProps();
          if (i) {
            this.pauseAnimation();
          } else {
            this.stopAnimation();
          }
          if (e) {
            this.snapToCursor(tL(t, "page").point);
          }
        },
        onStart: (t, e) => {
          let {
            drag: i,
            dragPropagation: n,
            onDragStart: r
          } = this.getProps();
          if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tZ(i), !this.openGlobalLock)) {
            return;
          }
          this.isDragging = true;
          this.currentDirection = null;
          this.resolveConstraints();
          if (this.visualElement.projection) {
            this.visualElement.projection.isAnimationBlocked = true;
            this.visualElement.projection.target = undefined;
          }
          i4(t => {
            let e = this.getAxisMotionValue(t).get() || 0;
            if (J.test(e)) {
              let {
                projection: i
              } = this.visualElement;
              if (i && i.layout) {
                let n = i.layout.layoutBox[t];
                if (n) {
                  e = iz(n) * (parseFloat(e) / 100);
                }
              }
            }
            this.originPoint[t] = e;
          });
          if (r) {
            animationFrameScheduler.frameScheduler.update(() => r(t, e), false, true);
          }
          let {
            animationState: s
          } = this.visualElement;
          if (s) {
            s.setActive("whileDrag", true);
          }
        },
        onMove: (t, e) => {
          let {
            dragPropagation: i,
            dragDirectionLock: n,
            onDirectionLock: r,
            onDrag: s
          } = this.getProps();
          if (!i && !this.openGlobalLock) {
            return;
          }
          let {
            offset: o
          } = e;
          if (n && this.currentDirection === null) {
            this.currentDirection = function (t, e = 10) {
              let i = null;
              if (Math.abs(t.y) > e) {
                i = "y";
              } else if (Math.abs(t.x) > e) {
                i = "x";
              }
              return i;
            }(o);
            if (this.currentDirection !== null && r) {
              r(this.currentDirection);
            }
            return;
          }
          this.updateAxis("x", e.point, o);
          this.updateAxis("y", e.point, o);
          this.visualElement.render();
          if (s) {
            s(t, e);
          }
        },
        onSessionEnd: (t, e) => this.stop(t, e),
        resumeAnimation: () => i4(t => {
          var e;
          return this.getAnimationState(t) === "paused" && ((e = this.getAxisMotionValue(t).animation) === null || e === undefined ? undefined : e.play());
        })
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: n,
        contextWindow: nc(this.visualElement)
      });
    }
    stop(t, e) {
      let i = this.isDragging;
      this.cancel();
      if (!i) {
        return;
      }
      let {
        velocity: n
      } = e;
      this.startAnimation(n);
      let {
        onDragEnd: r
      } = this.getProps();
      if (r) {
        animationFrameScheduler.frameScheduler.update(() => r(t, e));
      }
    }
    cancel() {
      this.isDragging = false;
      let {
        projection: t,
        animationState: e
      } = this.visualElement;
      if (t) {
        t.isAnimationBlocked = false;
      }
      if (this.panSession) {
        this.panSession.end();
      }
      this.panSession = undefined;
      let {
        dragPropagation: i
      } = this.getProps();
      if (!i && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      if (e) {
        e.setActive("whileDrag", false);
      }
    }
    updateAxis(t, e, i) {
      let {
        drag: n
      } = this.getProps();
      if (!i || !nm(t, n, this.currentDirection)) {
        return;
      }
      let r = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + i[t];
      if (this.constraints && this.constraints[t]) {
        s = function (t, e, i) {
          let {
            min: n,
            max: r
          } = e;
          if (n !== undefined && t < n) {
            t = i ? eT(n, t, i.min) : Math.max(t, n);
          } else if (r !== undefined && t > r) {
            t = i ? eT(r, t, i.max) : Math.min(t, r);
          }
          return t;
        }(s, this.constraints[t], this.elastic[t]);
      }
      r.set(s);
    }
    resolveConstraints() {
      let {
        dragConstraints: e,
        dragElastic: i
      } = this.getProps();
      let n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
      let r = this.constraints;
      if (e && m(e)) {
        this.constraints ||= this.resolveRefConstraints();
      } else if (e && n) {
        this.constraints = function (t, e) {
          let {
            top: i,
            left: n,
            bottom: r,
            right: s
          } = e;
          return {
            x: iK(t.x, n, s),
            y: iK(t.y, i, r)
          };
        }(n.layoutBox, e);
      } else {
        this.constraints = false;
      }
      this.elastic = function (t = 0.35) {
        if (t === false) {
          t = 0;
        } else if (t === true) {
          t = 0.35;
        }
        return {
          x: iQ(t, "left", "right"),
          y: iQ(t, "top", "bottom")
        };
      }(i);
      if (r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints) {
        i4(t => {
          if (this.getAxisMotionValue(t)) {
            this.constraints[t] = function (t, e) {
              let i = {};
              if (e.min !== undefined) {
                i.min = e.min - t.min;
              }
              if (e.max !== undefined) {
                i.max = e.max - t.min;
              }
              return i;
            }(n.layoutBox[t], this.constraints[t]);
          }
        });
      }
    }
    resolveRefConstraints() {
      var t;
      let {
        dragConstraints: e,
        onMeasureDragConstraints: i
      } = this.getProps();
      if (!e || !m(e)) {
        return false;
      }
      let n = e.current;
      identityFunctionExports.identityFn(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      let {
        projection: r
      } = this.visualElement;
      if (!r || !r.layout) {
        return false;
      }
      let s = function (t, e, i) {
        let n = nh(t, i);
        let {
          scroll: r
        } = e;
        if (r) {
          ns(n.x, r.offset.x);
          ns(n.y, r.offset.y);
        }
        return n;
      }(n, r.root, this.visualElement.getTransformPagePoint());
      let o = {
        x: iJ((t = r.layout.layoutBox).x, s.x),
        y: iJ(t.y, s.y)
      };
      if (i) {
        let t = i(function (t) {
          let {
            x: e,
            y: i
          } = t;
          return {
            top: i.min,
            right: e.max,
            bottom: i.max,
            left: e.min
          };
        }(o));
        this.hasMutatedConstraints = !!t;
        if (t) {
          o = i6(t);
        }
      }
      return o;
    }
    startAnimation(t) {
      let {
        drag: e,
        dragMomentum: i,
        dragElastic: n,
        dragTransition: r,
        dragSnapToOrigin: s,
        onDragTransitionEnd: o
      } = this.getProps();
      let a = this.constraints || {};
      return Promise.all(i4(o => {
        if (!nm(o, e, this.currentDirection)) {
          return;
        }
        let l = a && a[o] || {};
        if (s) {
          l = {
            min: 0,
            max: 0
          };
        }
        let u = {
          type: "inertia",
          velocity: i ? t[o] : 0,
          bounceStiffness: n ? 200 : 1000000,
          bounceDamping: n ? 40 : 10000000,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...r,
          ...l
        };
        return this.startAxisValueAnimation(o, u);
      })).then(o);
    }
    startAxisValueAnimation(t, e) {
      let i = this.getAxisMotionValue(t);
      return i.start(ig(t, i, 0, e));
    }
    stopAnimation() {
      i4(t => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      i4(t => {
        var e;
        if ((e = this.getAxisMotionValue(t).animation) === null || e === undefined) {
          return undefined;
        } else {
          return e.pause();
        }
      });
    }
    getAnimationState(t) {
      return this.getAxisMotionValue(t).animation?.state;
    }
    getAxisMotionValue(t) {
      let e = "_drag" + t.toUpperCase();
      let i = this.visualElement.getProps();
      return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : undefined) || 0);
    }
    snapToCursor(t) {
      i4(e => {
        let {
          drag: i
        } = this.getProps();
        if (!nm(e, i, this.currentDirection)) {
          return;
        }
        let {
          projection: n
        } = this.visualElement;
        let r = this.getAxisMotionValue(e);
        if (n && n.layout) {
          let {
            min: i,
            max: s
          } = n.layout.layoutBox[e];
          r.set(t[e] - eT(i, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) {
        return;
      }
      let {
        drag: t,
        dragConstraints: e
      } = this.getProps();
      let {
        projection: i
      } = this.visualElement;
      if (!m(e) || !i || !this.constraints) {
        return;
      }
      this.stopAnimation();
      let n = {
        x: 0,
        y: 0
      };
      i4(t => {
        let e = this.getAxisMotionValue(t);
        if (e) {
          let i = e.get();
          n[t] = function (t, e) {
            let i = 0.5;
            let n = iz(t);
            let r = iz(e);
            if (r > n) {
              i = ez(e.min, e.max - n, t.min);
            } else if (n > r) {
              i = ez(t.min, t.max - r, e.min);
            }
            return $(0, 1, i);
          }({
            min: i,
            max: i
          }, this.constraints[t]);
        }
      });
      let {
        transformTemplate: r
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = r ? r({}, "") : "none";
      if (i.root) {
        i.root.updateScroll();
      }
      i.updateLayout();
      this.resolveConstraints();
      i4(e => {
        if (!nm(e, t, null)) {
          return;
        }
        let i = this.getAxisMotionValue(e);
        let {
          min: r,
          max: s
        } = this.constraints[e];
        i.set(eT(r, s, n[e]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) {
        return;
      }
      nd.set(this.visualElement, this);
      let t = tI(this.visualElement.current, "pointerdown", t => {
        let {
          drag: e,
          dragListener: i = true
        } = this.getProps();
        if (e && i) {
          this.start(t);
        }
      });
      let e = () => {
        let {
          dragConstraints: t
        } = this.getProps();
        if (m(t)) {
          this.constraints = this.resolveRefConstraints();
        }
      };
      let {
        projection: i
      } = this.visualElement;
      let n = i.addEventListener("measure", e);
      if (i && !i.layout) {
        if (i.root) {
          i.root.updateScroll();
        }
        i.updateLayout();
      }
      e();
      let r = tj(window, "resize", () => this.scalePositionWithinConstraints());
      let s = i.addEventListener("didUpdate", t => {
        let {
          delta: e,
          hasLayoutChanged: i
        } = t;
        if (this.isDragging && i) {
          i4(t => {
            let i = this.getAxisMotionValue(t);
            if (i) {
              this.originPoint[t] += e[t].translate;
              i.set(i.get() + e[t].translate);
            }
          });
          this.visualElement.render();
        }
      });
      return () => {
        r();
        t();
        n();
        if (s) {
          s();
        }
      };
    }
    getProps() {
      let t = this.visualElement.getProps();
      let {
        drag: e = false,
        dragDirectionLock: i = false,
        dragPropagation: n = false,
        dragConstraints: r = false,
        dragElastic: s = 0.35,
        dragMomentum: o = true
      } = t;
      return {
        ...t,
        drag: e,
        dragDirectionLock: i,
        dragPropagation: n,
        dragConstraints: r,
        dragElastic: s,
        dragMomentum: o
      };
    }
    constructor(t) {
      this.openGlobalLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = {
        x: 0,
        y: 0
      };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = i5();
      this.visualElement = t;
    }
  }
  function nm(t, e, i) {
    return (e === true || e === t) && (i === null || i === t);
  }
  let nf = t => (e, i) => {
    if (t) {
      animationFrameScheduler.frameScheduler.update(() => t(e, i));
    }
  };
  let ng = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
  function nv(t, e) {
    if (e.max === e.min) {
      return 0;
    } else {
      return t / (e.max - e.min) * 100;
    }
  }
  let ny = {
    correct: (t, e) => {
      if (!e.target) {
        return t;
      }
      if (typeof t == "string") {
        if (!Q.test(t)) {
          return t;
        }
        t = parseFloat(t);
      }
      let i = nv(t, e.target.x);
      let n = nv(t, e.target.y);
      return `${i}% ${n}%`;
    }
  };
  class nx extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i,
        layoutId: n
      } = this.props;
      let {
        projection: r
      } = t;
      Object.assign(M, nP);
      if (r) {
        if (e.group) {
          e.group.add(r);
        }
        if (i && i.register && n) {
          i.register(r);
        }
        r.root.didUpdate();
        r.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        r.setOptions({
          ...r.options,
          onExitComplete: () => this.safeToRemove()
        });
      }
      ng.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t) {
      let {
        layoutDependency: e,
        visualElement: i,
        drag: n,
        isPresent: r
      } = this.props;
      let s = i.projection;
      if (s) {
        s.isPresent = r;
        if (n || t.layoutDependency !== e || e === undefined) {
          s.willUpdate();
        } else {
          this.safeToRemove();
        }
        if (t.isPresent !== r) {
          if (r) {
            s.promote();
          } else if (!s.relegate()) {
            animationFrameScheduler.frameScheduler.postRender(() => {
              let t = s.getStack();
              if (!t || !t.members.length) {
                this.safeToRemove();
              }
            });
          }
        }
      }
      return null;
    }
    componentDidUpdate() {
      let {
        projection: t
      } = this.props.visualElement;
      if (t) {
        t.root.didUpdate();
        queueMicrotask(() => {
          if (!t.currentAnimation && t.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i
      } = this.props;
      let {
        projection: n
      } = t;
      if (n) {
        n.scheduleCheckAfterUnmount();
        if (e && e.group) {
          e.group.remove(n);
        }
        if (i && i.deregister) {
          i.deregister(n);
        }
      }
    }
    safeToRemove() {
      let {
        safeToRemove: t
      } = this.props;
      if (t) {
        t();
      }
    }
    render() {
      return null;
    }
  }
  function nb(t) {
    let [e, i] = function () {
      let t = reactCoreLibraryReexport.useContext(appContextInstance.appContext);
      if (t === null) {
        return [true, null];
      }
      let {
        isPresent: e,
        onExitComplete: i,
        register: n
      } = t;
      let r = reactCoreLibraryReexport.useId();
      reactCoreLibraryReexport.useEffect(() => n(r), []);
      if (!e && i) {
        return [false, () => i && i(r)];
      } else {
        return [true];
      }
    }();
    let n = reactCoreLibraryReexport.useContext(sharedUiContext.uiContext);
    return reactCoreLibraryReexport.createElement(nx, {
      ...t,
      layoutGroup: n,
      switchLayoutGroup: reactCoreLibraryReexport.useContext(S),
      isPresent: e,
      safeToRemove: i
    });
  }
  let nP = {
    borderRadius: {
      ...ny,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ny,
    borderTopRightRadius: ny,
    borderBottomLeftRadius: ny,
    borderBottomRightRadius: ny,
    boxShadow: {
      correct: (t, e) => {
        let {
          treeScale: i,
          projectionDelta: n
        } = e;
        let r = eB.parse(t);
        if (r.length > 5) {
          return t;
        }
        let s = eB.createTransformer(t);
        let o = +(typeof r[0] != "number");
        let a = n.x.scale * i.x;
        let l = n.y.scale * i.y;
        r[0 + o] /= a;
        r[1 + o] /= l;
        let u = eT(a, l, 0.5);
        if (typeof r[2 + o] == "number") {
          r[2 + o] /= u;
        }
        if (typeof r[3 + o] == "number") {
          r[3 + o] /= u;
        }
        return s(r);
      }
    }
  };
  let nw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  let nT = nw.length;
  let nA = t => typeof t == "string" ? parseFloat(t) : t;
  let nC = t => typeof t == "number" || Q.test(t);
  function nS(t, e) {
    if (t[e] !== undefined) {
      return t[e];
    } else {
      return t.borderRadius;
    }
  }
  let nE = nV(0, 0.5, el);
  let nk = nV(0.5, 0.95, identityFunction_1.identity);
  function nV(t, e, i) {
    return n => n < t ? 0 : n > e ? 1 : i(ez(t, e, n));
  }
  function nM(t, e) {
    t.min = e.min;
    t.max = e.max;
  }
  function nR(t, e) {
    nM(t.x, e.x);
    nM(t.y, e.y);
  }
  function nj(t, e, i, n, r) {
    t -= e;
    t = n + 1 / i * (t - n);
    if (r !== undefined) {
      t = n + 1 / r * (t - n);
    }
    return t;
  }
  function nO(t, e, i, n, r) {
    let [s, o, a] = i;
    (function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
      if (J.test(e)) {
        e = parseFloat(e);
        e = eT(o.min, o.max, e / 100) - o.min;
      }
      if (typeof e != "number") {
        return;
      }
      let a = eT(s.min, s.max, n);
      if (t === s) {
        a -= e;
      }
      t.min = nj(t.min, e, i, a, r);
      t.max = nj(t.max, e, i, a, r);
    })(t, e[s], e[o], e[a], e.scale, n, r);
  }
  let nL = ["x", "scaleX", "originX"];
  let nD = ["y", "scaleY", "originY"];
  function nI(t, e, i, n) {
    nO(t.x, e, nL, i ? i.x : undefined, n ? n.x : undefined);
    nO(t.y, e, nD, i ? i.y : undefined, n ? n.y : undefined);
  }
  function nF(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function nB(t) {
    return nF(t.x) && nF(t.y);
  }
  function nW(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
  }
  function nU(t) {
    return iz(t.x) / iz(t.y);
  }
  class n$ {
    add(t) {
      ix(this.members, t);
      t.scheduleRender();
    }
    remove(t) {
      ib(this.members, t);
      if (t === this.prevLead) {
        this.prevLead = undefined;
      }
      if (t === this.lead) {
        let t = this.members[this.members.length - 1];
        if (t) {
          this.promote(t);
        }
      }
    }
    relegate(t) {
      let e;
      let i = this.members.findIndex(e => t === e);
      if (i === 0) {
        return false;
      }
      for (let t = i; t >= 0; t--) {
        let i = this.members[t];
        if (i.isPresent !== false) {
          e = i;
          break;
        }
      }
      return !!e && (this.promote(e), true);
    }
    promote(t, e) {
      let i = this.lead;
      if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
        if (i.instance) {
          i.scheduleRender();
        }
        t.scheduleRender();
        t.resumeFrom = i;
        if (e) {
          t.resumeFrom.preserveOpacity = true;
        }
        if (i.snapshot) {
          t.snapshot = i.snapshot;
          t.snapshot.latestValues = i.animationValues || i.latestValues;
        }
        if (t.root && t.root.isUpdating) {
          t.isLayoutDirty = true;
        }
        let {
          crossfade: n
        } = t.options;
        if (n === false) {
          i.hide();
        }
      }
    }
    exitAnimationComplete() {
      this.members.forEach(t => {
        let {
          options: e,
          resumingFrom: i
        } = t;
        if (e.onExitComplete) {
          e.onExitComplete();
        }
        if (i && i.options.onExitComplete) {
          i.options.onExitComplete();
        }
      });
    }
    scheduleRender() {
      this.members.forEach(t => {
        if (t.instance) {
          t.scheduleRender(false);
        }
      });
    }
    removeLeadSnapshot() {
      if (this.lead && this.lead.snapshot) {
        this.lead.snapshot = undefined;
      }
    }
    constructor() {
      this.members = [];
    }
  }
  function nZ(t, e, i) {
    let n = "";
    let r = t.x.translate / e.x;
    let s = t.y.translate / e.y;
    if (r || s) {
      n = `translate3d(${r}px, ${s}px, 0) `;
    }
    if (e.x !== 1 || e.y !== 1) {
      n += `scale(${1 / e.x}, ${1 / e.y}) `;
    }
    if (i) {
      let {
        rotate: t,
        rotateX: e,
        rotateY: r
      } = i;
      if (t) {
        n += `rotate(${t}deg) `;
      }
      if (e) {
        n += `rotateX(${e}deg) `;
      }
      if (r) {
        n += `rotateY(${r}deg) `;
      }
    }
    let o = t.x.scale * e.x;
    let a = t.y.scale * e.y;
    if (o !== 1 || a !== 1) {
      n += `scale(${o}, ${a})`;
    }
    return n || "none";
  }
  let nN = (t, e) => t.depth - e.depth;
  class nz {
    add(t) {
      ix(this.children, t);
      this.isDirty = true;
    }
    remove(t) {
      ib(this.children, t);
      this.isDirty = true;
    }
    forEach(t) {
      if (this.isDirty) {
        this.children.sort(nN);
      }
      this.isDirty = false;
      this.children.forEach(t);
    }
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
  }
  let n_ = ["", "X", "Y", "Z"];
  let nH = {
    visibility: "hidden"
  };
  let nX = 0;
  let nY = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function nq(t) {
    let {
      attachResizeListener: e,
      defaultParent: i,
      measureScroll: n,
      checkIsScrollRoot: r,
      resetTransform: s
    } = t;
    return class {
      addEventListener(t, e) {
        if (!this.eventHandlers.has(t)) {
          this.eventHandlers.set(t, new iP());
        }
        return this.eventHandlers.get(t).add(e);
      }
      notifyListeners(t) {
        var e = arguments.length;
        var i = Array(e > 1 ? e - 1 : 0);
        var n = 1;
        for (; n < e; n++) {
          i[n - 1] = arguments[n];
        }
        let r = this.eventHandlers.get(t);
        if (r) {
          r.notify(...i);
        }
      }
      hasListeners(t) {
        return this.eventHandlers.has(t);
      }
      mount(t, i = this.root.hasTreeAnimated) {
        if (this.instance) {
          return;
        }
        this.isSVG = t instanceof SVGElement && t.tagName !== "svg";
        this.instance = t;
        let {
          layoutId: n,
          layout: r,
          visualElement: s
        } = this.options;
        if (s && !s.current) {
          s.mount(t);
        }
        this.root.nodes.add(this);
        if (this.parent) {
          this.parent.children.add(this);
        }
        if (i && (r || n)) {
          this.isLayoutDirty = true;
        }
        if (e) {
          let i;
          let n = () => this.root.updateBlockedByResize = false;
          e(t, () => {
            this.root.updateBlockedByResize = true;
            if (i) {
              i();
            }
            i = function (t, e) {
              let i = performance.now();
              let n = e => {
                let {
                  timestamp: r
                } = e;
                let s = r - i;
                if (s >= 250) {
                  animationFrameScheduler.cancelScheduler(n);
                  t(s - 250);
                }
              };
              animationFrameScheduler.frameScheduler.read(n, true);
              return () => animationFrameScheduler.cancelScheduler(n);
            }(n, 250);
            if (ng.hasAnimatedSinceResize) {
              ng.hasAnimatedSinceResize = false;
              this.nodes.forEach(n5);
            }
          });
        }
        if (n) {
          this.root.registerSharedNode(n, this);
        }
        if (this.options.animate !== false && s && (n || r)) {
          this.addEventListener("didUpdate", t => {
            let {
              delta: e,
              hasLayoutChanged: i,
              hasRelativeTargetChanged: n,
              layout: r
            } = t;
            if (this.isTreeAnimationBlocked()) {
              this.target = undefined;
              this.relativeTarget = undefined;
              return;
            }
            let o = this.options.transition || s.getDefaultTransition() || ri;
            let {
              onLayoutAnimationStart: a,
              onLayoutAnimationComplete: l
            } = s.getProps();
            let u = !this.targetLayout || !nW(this.targetLayout, r) || n;
            let h = !i && n;
            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || i && (u || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = undefined;
              }
              this.setAnimationOrigin(e, h);
              let t = {
                ...ip(o, "layout"),
                onPlay: a,
                onComplete: l
              };
              if (s.shouldReduceMotion || this.options.layoutRoot) {
                t.delay = 0;
                t.type = false;
              }
              this.startAnimation(t);
            } else {
              if (!i) {
                n5(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = r;
          });
        }
      }
      unmount() {
        if (this.options.layoutId) {
          this.willUpdate();
        }
        this.root.nodes.remove(this);
        let t = this.getStack();
        if (t) {
          t.remove(this);
        }
        if (this.parent) {
          this.parent.children.delete(this);
        }
        this.instance = undefined;
        animationFrameScheduler.cancelScheduler(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        if (!this.isUpdateBlocked()) {
          this.isUpdating = true;
          if (this.nodes) {
            this.nodes.forEach(n9);
          }
          this.animationId++;
        }
      }
      getTransformTemplate() {
        let {
          visualElement: t
        } = this.options;
        return t && t.getProps().transformTemplate;
      }
      willUpdate() {
        let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          if (this.options.onExitComplete) {
            this.options.onExitComplete();
          }
          return;
        }
        if (!this.root.isUpdating) {
          this.root.startUpdate();
        }
        if (this.isLayoutDirty) {
          return;
        }
        this.isLayoutDirty = true;
        for (let t = 0; t < this.path.length; t++) {
          let e = this.path[t];
          e.shouldResetTransform = true;
          e.updateScroll("snapshot");
          if (e.options.layoutRoot) {
            e.willUpdate(false);
          }
        }
        let {
          layoutId: e,
          layout: i
        } = this.options;
        if (e === undefined && !i) {
          return;
        }
        let n = this.getTransformTemplate();
        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : undefined;
        this.updateSnapshot();
        if (t) {
          this.notifyListeners("willUpdate");
        }
      }
      update() {
        this.updateScheduled = false;
        if (this.isUpdateBlocked()) {
          this.unblockUpdate();
          this.clearAllSnapshots();
          this.nodes.forEach(n1);
          return;
        }
        if (!this.isUpdating) {
          this.nodes.forEach(n2);
        }
        this.isUpdating = false;
        this.nodes.forEach(n3);
        this.nodes.forEach(nG);
        this.nodes.forEach(nK);
        this.clearAllSnapshots();
        let t = performance.now();
        animationFrameScheduler.schedulerState.delta = $(0, 1000 / 60, t - animationFrameScheduler.schedulerState.timestamp);
        animationFrameScheduler.schedulerState.timestamp = t;
        animationFrameScheduler.schedulerState.isProcessing = true;
        animationFrameScheduler.frameSteps.update.process(animationFrameScheduler.schedulerState);
        animationFrameScheduler.frameSteps.preRender.process(animationFrameScheduler.schedulerState);
        animationFrameScheduler.frameSteps.render.process(animationFrameScheduler.schedulerState);
        animationFrameScheduler.schedulerState.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          queueMicrotask(() => this.update());
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(n0);
        this.sharedNodes.forEach(n8);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          animationFrameScheduler.frameScheduler.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        animationFrameScheduler.frameScheduler.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      updateSnapshot() {
        if (!this.snapshot && this.instance) {
          this.snapshot = this.measure();
        }
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let t = 0; t < this.path.length; t++) {
            this.path[t].updateScroll();
          }
        }
        let t = this.layout;
        this.layout = this.measure(false);
        this.layoutCorrected = i5();
        this.isLayoutDirty = false;
        this.projectionDelta = undefined;
        this.notifyListeners("measure", this.layout.layoutBox);
        let {
          visualElement: e
        } = this.options;
        if (e) {
          e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : undefined);
        }
      }
      updateScroll(t = "measure") {
        let e = !!this.options.layoutScroll && !!this.instance;
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t) {
          e = false;
        }
        if (e) {
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: r(this.instance),
            offset: n(this.instance)
          };
        }
      }
      resetTransform() {
        if (!s) {
          return;
        }
        let t = this.isLayoutDirty || this.shouldResetTransform;
        let e = this.projectionDelta && !nB(this.projectionDelta);
        let i = this.getTransformTemplate();
        let n = i ? i(this.latestValues, "") : undefined;
        let r = n !== this.prevTransformTemplateValue;
        if (t && (e || i7(this.latestValues) || r)) {
          s(this.instance, n);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure() {
        var t;
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let i = this.measurePageBox();
        let n = this.removeElementScroll(i);
        if (e) {
          n = this.removeTransform(n);
        }
        rs((t = n).x);
        rs(t.y);
        return {
          animationId: this.root.animationId,
          measuredBox: i,
          layoutBox: n,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        let {
          visualElement: t
        } = this.options;
        if (!t) {
          return i5();
        }
        let e = t.measureViewportBox();
        let {
          scroll: i
        } = this.root;
        if (i) {
          ns(e.x, i.offset.x);
          ns(e.y, i.offset.y);
        }
        return e;
      }
      removeElementScroll(t) {
        let e = i5();
        nR(e, t);
        for (let i = 0; i < this.path.length; i++) {
          let n = this.path[i];
          let {
            scroll: r,
            options: s
          } = n;
          if (n !== this.root && r && s.layoutScroll) {
            if (r.isRoot) {
              nR(e, t);
              let {
                scroll: i
              } = this.root;
              if (i) {
                ns(e.x, -i.offset.x);
                ns(e.y, -i.offset.y);
              }
            }
            ns(e.x, r.offset.x);
            ns(e.y, r.offset.y);
          }
        }
        return e;
      }
      applyTransform(t, e = false) {
        let i = i5();
        nR(i, t);
        for (let t = 0; t < this.path.length; t++) {
          let n = this.path[t];
          if (!e && n.options.layoutScroll && n.scroll && n !== n.root) {
            nu(i, {
              x: -n.scroll.offset.x,
              y: -n.scroll.offset.y
            });
          }
          if (i7(n.latestValues)) {
            nu(i, n.latestValues);
          }
        }
        if (i7(this.latestValues)) {
          nu(i, this.latestValues);
        }
        return i;
      }
      removeTransform(t) {
        let e = i5();
        nR(e, t);
        for (let t = 0; t < this.path.length; t++) {
          let i = this.path[t];
          if (!i.instance || !i7(i.latestValues)) {
            continue;
          }
          if (i8(i.latestValues)) {
            i.updateSnapshot();
          }
          let n = i5();
          nR(n, i.measurePageBox());
          nI(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : undefined, n);
        }
        if (i7(this.latestValues)) {
          nI(e, this.latestValues);
        }
        return e;
      }
      setTargetDelta(t) {
        this.targetDelta = t;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(t) {
        this.options = {
          ...this.options,
          ...t,
          crossfade: t.crossfade === undefined || t.crossfade
        };
      }
      clearMeasurements() {
        this.scroll = undefined;
        this.layout = undefined;
        this.snapshot = undefined;
        this.prevTransformTemplateValue = undefined;
        this.targetDelta = undefined;
        this.target = undefined;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== animationFrameScheduler.schedulerState.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta() {
        var e;
        var i;
        var n;
        let r = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        let s = this.getLead();
        this.isProjectionDirty ||= s.isProjectionDirty;
        this.isTransformDirty ||= s.isTransformDirty;
        this.isSharedProjectionDirty ||= s.isSharedProjectionDirty;
        let o = !!this.resumingFrom || this !== s;
        if (!r && (!o || !this.isSharedProjectionDirty) && !this.isProjectionDirty && !this.parent?.isProjectionDirty && !this.attemptToResolveRelativeTarget) {
          return;
        }
        let {
          layout: a,
          layoutId: l
        } = this.options;
        if (this.layout && (a || l)) {
          this.resolvedRelativeTargetAt = animationFrameScheduler.schedulerState.timestamp;
          if (!this.targetDelta && !this.relativeTarget) {
            let t = this.getClosestProjectingParent();
            if (t && t.layout && this.animationProgress !== 1) {
              this.relativeParent = t;
              this.forceRelativeParentToResolveTarget();
              this.relativeTarget = i5();
              this.relativeTargetOrigin = i5();
              iG(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox);
              nR(this.relativeTarget, this.relativeTargetOrigin);
            } else {
              this.relativeParent = this.relativeTarget = undefined;
            }
          }
          if (this.relativeTarget || this.targetDelta) {
            if (!this.target) {
              this.target = i5();
              this.targetWithTransforms = i5();
            }
            if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
              this.forceRelativeParentToResolveTarget();
              e = this.target;
              i = this.relativeTarget;
              n = this.relativeParent.target;
              iY(e.x, i.x, n.x);
              iY(e.y, i.y, n.y);
            } else if (this.targetDelta) {
              if (this.resumingFrom) {
                this.target = this.applyTransform(this.layout.layoutBox);
              } else {
                nR(this.target, this.layout.layoutBox);
              }
              nn(this.target, this.targetDelta);
            } else {
              nR(this.target, this.layout.layoutBox);
            }
            if (this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              let t = this.getClosestProjectingParent();
              if (t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && this.animationProgress !== 1) {
                this.relativeParent = t;
                this.forceRelativeParentToResolveTarget();
                this.relativeTarget = i5();
                this.relativeTargetOrigin = i5();
                iG(this.relativeTargetOrigin, this.target, t.target);
                nR(this.relativeTarget, this.relativeTargetOrigin);
              } else {
                this.relativeParent = this.relativeTarget = undefined;
              }
            }
            nY.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || i8(this.parent.latestValues) || nt(this.parent.latestValues)) {
          return undefined;
        } else if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return (!!this.relativeTarget || !!this.targetDelta || !!this.options.layoutRoot) && !!this.layout;
      }
      calcProjection() {
        let e = this.getLead();
        let i = !!this.resumingFrom || this !== e;
        let n = true;
        if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
          n = false;
        }
        if (i && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          n = false;
        }
        if (this.resolvedRelativeTargetAt === animationFrameScheduler.schedulerState.timestamp) {
          n = false;
        }
        if (n) {
          return;
        }
        let {
          layout: r,
          layoutId: s
        } = this.options;
        this.isTreeAnimating = !!this.parent && !!this.parent.isTreeAnimating || !!this.currentAnimation || !!this.pendingAnimation;
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = undefined;
        }
        if (!this.layout || !r && !s) {
          return;
        }
        nR(this.layoutCorrected, this.layout.layoutBox);
        let o = this.treeScale.x;
        let a = this.treeScale.y;
        (function (t, e, i) {
          let n;
          let r;
          let s = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
          let o = i.length;
          if (o) {
            e.x = e.y = 1;
            for (let a = 0; a < o; a++) {
              r = (n = i[a]).projectionDelta;
              let o = n.instance;
              if (!o || !o.style || o.style.display !== "contents") {
                if (s && n.options.layoutScroll && n.scroll && n !== n.root) {
                  nu(t, {
                    x: -n.scroll.offset.x,
                    y: -n.scroll.offset.y
                  });
                }
                if (r) {
                  e.x *= r.x.scale;
                  e.y *= r.y.scale;
                  nn(t, r);
                }
                if (s && i7(n.latestValues)) {
                  nu(t, n.latestValues);
                }
              }
            }
            e.x = nr(e.x);
            e.y = nr(e.y);
          }
        })(this.layoutCorrected, this.treeScale, this.path, i);
        if (e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          e.target = e.layout.layoutBox;
        }
        let {
          target: l
        } = e;
        if (!l) {
          if (this.projectionTransform) {
            this.projectionDelta = i2();
            this.projectionTransform = "none";
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta) {
          this.projectionDelta = i2();
          this.projectionDeltaWithTransform = i2();
        }
        let u = this.projectionTransform;
        iX(this.projectionDelta, this.layoutCorrected, l, this.latestValues);
        this.projectionTransform = nZ(this.projectionDelta, this.treeScale);
        if (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", l);
        }
        nY.recalculatedProjection++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender() {
        let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if (this.options.scheduleRender) {
          this.options.scheduleRender();
        }
        if (t) {
          let t = this.getStack();
          if (t) {
            t.scheduleRender();
          }
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = undefined;
        }
      }
      setAnimationOrigin(t) {
        let e;
        let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        let n = this.snapshot;
        let r = n ? n.latestValues : {};
        let s = {
          ...this.latestValues
        };
        let o = i2();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = undefined;
        }
        this.attemptToResolveRelativeTarget = !i;
        let a = i5();
        let l = (n ? n.source : undefined) !== (this.layout ? this.layout.source : undefined);
        let u = this.getStack();
        let h = !u || u.members.length <= 1;
        let c = !!l && !h && this.options.crossfade === true && !this.path.some(re);
        this.animationProgress = 0;
        this.mixTargetDelta = i => {
          let n = i / 1000;
          n7(o.x, t.x, n);
          n7(o.y, t.y, n);
          this.setTargetDelta(o);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var u;
            var d;
            var p;
            var m;
            var f;
            var g;
            iG(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
            p = this.relativeTarget;
            m = this.relativeTargetOrigin;
            f = a;
            g = n;
            rt(p.x, m.x, f.x, g);
            rt(p.y, m.y, f.y, g);
            if (e && (u = this.relativeTarget, d = e, u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max)) {
              this.isProjectionDirty = false;
            }
            e ||= i5();
            nR(e, this.relativeTarget);
          }
          if (l) {
            this.animationValues = s;
            (function (t, e, i, n, r, s) {
              if (r) {
                t.opacity = eT(0, i.opacity !== undefined ? i.opacity : 1, nE(n));
                t.opacityExit = eT(e.opacity !== undefined ? e.opacity : 1, 0, nk(n));
              } else if (s) {
                t.opacity = eT(e.opacity !== undefined ? e.opacity : 1, i.opacity !== undefined ? i.opacity : 1, n);
              }
              for (let r = 0; r < nT; r++) {
                let s = `border${nw[r]}Radius`;
                let o = nS(e, s);
                let a = nS(i, s);
                if (o !== undefined || a !== undefined) {
                  o ||= 0;
                  a ||= 0;
                  if (o === 0 || a === 0 || nC(o) === nC(a)) {
                    t[s] = Math.max(eT(nA(o), nA(a), n), 0);
                    if (J.test(a) || J.test(o)) {
                      t[s] += "%";
                    }
                  } else {
                    t[s] = a;
                  }
                }
              }
              if (e.rotate || i.rotate) {
                t.rotate = eT(e.rotate || 0, i.rotate || 0, n);
              }
            })(s, r, this.latestValues, n, c, h);
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = n;
        };
        this.mixTargetDelta(!!this.options.layoutRoot * 1000);
      }
      startAnimation(t) {
        this.notifyListeners("animationStart");
        if (this.currentAnimation) {
          this.currentAnimation.stop();
        }
        if (this.resumingFrom && this.resumingFrom.currentAnimation) {
          this.resumingFrom.currentAnimation.stop();
        }
        if (this.pendingAnimation) {
          animationFrameScheduler.cancelScheduler(this.pendingAnimation);
          this.pendingAnimation = undefined;
        }
        this.pendingAnimation = animationFrameScheduler.frameScheduler.update(() => {
          ng.hasAnimatedSinceResize = true;
          this.currentAnimation = function (t, e, i) {
            let n = L(0) ? 0 : iC(t);
            n.start(ig("", n, 1000, i));
            return n.animation;
          }(0, 0, {
            ...t,
            onUpdate: e => {
              this.mixTargetDelta(e);
              if (t.onUpdate) {
                t.onUpdate(e);
              }
            },
            onComplete: () => {
              if (t.onComplete) {
                t.onComplete();
              }
              this.completeAnimation();
            }
          });
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = undefined;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = undefined;
          this.resumingFrom.preserveOpacity = undefined;
        }
        let t = this.getStack();
        if (t) {
          t.exitAnimationComplete();
        }
        this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          if (this.mixTargetDelta) {
            this.mixTargetDelta(1000);
          }
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        let t = this.getLead();
        let {
          targetWithTransforms: e,
          target: i,
          layout: n,
          latestValues: r
        } = t;
        if (e && i && n) {
          if (this !== t && this.layout && n && ro(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
            i = this.target || i5();
            let e = iz(this.layout.layoutBox.x);
            i.x.min = t.target.x.min;
            i.x.max = i.x.min + e;
            let n = iz(this.layout.layoutBox.y);
            i.y.min = t.target.y.min;
            i.y.max = i.y.min + n;
          }
          nR(e, i);
          nu(e, r);
          iX(this.projectionDeltaWithTransform, this.layoutCorrected, e, r);
        }
      }
      registerSharedNode(t, e) {
        if (!this.sharedNodes.has(t)) {
          this.sharedNodes.set(t, new n$());
        }
        this.sharedNodes.get(t).add(e);
        let i = e.options.initialPromotionConfig;
        e.promote({
          transition: i ? i.transition : undefined,
          preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : undefined
        });
      }
      isLead() {
        let t = this.getStack();
        return !t || t.lead === this;
      }
      getLead() {
        let {
          layoutId: e
        } = this.options;
        return e && this.getStack()?.lead || this;
      }
      getPrevLead() {
        let {
          layoutId: e
        } = this.options;
        if (e) {
          return this.getStack()?.prevLead;
        } else {
          return undefined;
        }
      }
      getStack() {
        let {
          layoutId: t
        } = this.options;
        if (t) {
          return this.root.sharedNodes.get(t);
        }
      }
      promote({
        needsReset: t,
        transition: e,
        preserveFollowOpacity: i
      } = {}) {
        let n = this.getStack();
        if (n) {
          n.promote(this, i);
        }
        if (t) {
          this.projectionDelta = undefined;
          this.needsReset = true;
        }
        if (e) {
          this.setOptions({
            transition: e
          });
        }
      }
      relegate() {
        let t = this.getStack();
        return !!t && t.relegate(this);
      }
      resetRotation() {
        let {
          visualElement: t
        } = this.options;
        if (!t) {
          return;
        }
        let e = false;
        let {
          latestValues: i
        } = t;
        if (i.rotate || i.rotateX || i.rotateY || i.rotateZ) {
          e = true;
        }
        if (!e) {
          return;
        }
        let n = {};
        for (let e = 0; e < n_.length; e++) {
          let r = "rotate" + n_[e];
          if (i[r]) {
            n[r] = i[r];
            t.setStaticValue(r, 0);
          }
        }
        t.render();
        for (let e in n) {
          t.setStaticValue(e, n[e]);
        }
        t.scheduleRender();
      }
      getProjectionStyles(t) {
        if (!this.instance || this.isSVG) {
          return;
        }
        if (!this.isVisible) {
          return nH;
        }
        let n = {
          visibility: ""
        };
        let r = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          n.opacity = "";
          n.pointerEvents = tE(t == null ? undefined : t.pointerEvents) || "";
          n.transform = r ? r(this.latestValues, "") : "none";
          return n;
        }
        let s = this.getLead();
        if (!this.projectionDelta || !this.layout || !s.target) {
          let e = {};
          if (this.options.layoutId) {
            e.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
            e.pointerEvents = tE(t == null ? undefined : t.pointerEvents) || "";
          }
          if (this.hasProjected && !i7(this.latestValues)) {
            e.transform = r ? r({}, "") : "none";
            this.hasProjected = false;
          }
          return e;
        }
        let o = s.animationValues || s.latestValues;
        this.applyTransformsToTarget();
        n.transform = nZ(this.projectionDeltaWithTransform, this.treeScale, o);
        if (r) {
          n.transform = r(o, n.transform);
        }
        let {
          x: a,
          y: l
        } = this.projectionDelta;
        n.transformOrigin = `${a.origin * 100}% ${l.origin * 100}% 0`;
        if (s.animationValues) {
          n.opacity = s === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit;
        } else {
          n.opacity = s === this ? o.opacity !== undefined ? o.opacity : "" : o.opacityExit !== undefined ? o.opacityExit : 0;
        }
        for (let t in M) {
          if (o[t] === undefined) {
            continue;
          }
          let {
            correct: e,
            applyTo: i
          } = M[t];
          let r = n.transform === "none" ? o[t] : e(o[t], s);
          if (i) {
            let t = i.length;
            for (let e = 0; e < t; e++) {
              n[i[e]] = r;
            }
          } else {
            n[t] = r;
          }
        }
        if (this.options.layoutId) {
          n.pointerEvents = s === this ? tE(t == null ? undefined : t.pointerEvents) || "" : "none";
        }
        return n;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = undefined;
      }
      resetTree() {
        this.root.nodes.forEach(t => {
          var e;
          if ((e = t.currentAnimation) === null || e === undefined) {
            return undefined;
          } else {
            return e.stop();
          }
        });
        this.root.nodes.forEach(n1);
        this.root.sharedNodes.clear();
      }
      constructor(t = {}, e = i == null ? undefined : i()) {
        this.id = nX++;
        this.animationId = 0;
        this.children = new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.treeScale = {
          x: 1,
          y: 1
        };
        this.eventHandlers = new Map();
        this.hasTreeAnimated = false;
        this.updateScheduled = false;
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          nY.totalNodes = nY.resolvedTargetDeltas = nY.recalculatedProjection = 0;
          this.nodes.forEach(nJ);
          this.nodes.forEach(n4);
          this.nodes.forEach(n6);
          this.nodes.forEach(nQ);
          if (window.MotionDebug) {
            window.MotionDebug.record(nY);
          }
        };
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = new Map();
        this.latestValues = t;
        this.root = e ? e.root || e : this;
        this.path = e ? [...e.path, e] : [];
        this.parent = e;
        this.depth = e ? e.depth + 1 : 0;
        for (let t = 0; t < this.path.length; t++) {
          this.path[t].shouldResetTransform = true;
        }
        if (this.root === this) {
          this.nodes = new nz();
        }
      }
    };
  }
  function nG(t) {
    t.updateLayout();
  }
  function nK(t) {
    let i = t.resumeFrom?.snapshot || t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
      let {
        layoutBox: e,
        measuredBox: n
      } = t.layout;
      let {
        animationType: r
      } = t.options;
      let s = i.source !== t.layout.source;
      if (r === "size") {
        i4(t => {
          let n = s ? i.measuredBox[t] : i.layoutBox[t];
          let r = iz(n);
          n.min = e[t].min;
          n.max = n.min + r;
        });
      } else if (ro(r, i.layoutBox, e)) {
        i4(n => {
          let r = s ? i.measuredBox[n] : i.layoutBox[n];
          let o = iz(e[n]);
          r.max = r.min + o;
          if (t.relativeTarget && !t.currentAnimation) {
            t.isProjectionDirty = true;
            t.relativeTarget[n].max = t.relativeTarget[n].min + o;
          }
        });
      }
      let o = i2();
      iX(o, e, i.layoutBox);
      let a = i2();
      if (s) {
        iX(a, t.applyTransform(n, true), i.measuredBox);
      } else {
        iX(a, e, i.layoutBox);
      }
      let l = !nB(o);
      let u = false;
      if (!t.resumeFrom) {
        let n = t.getClosestProjectingParent();
        if (n && !n.resumeFrom) {
          let {
            snapshot: r,
            layout: s
          } = n;
          if (r && s) {
            let o = i5();
            iG(o, i.layoutBox, r.layoutBox);
            let a = i5();
            iG(a, e, s.layoutBox);
            if (!nW(o, a)) {
              u = true;
            }
            if (n.options.layoutRoot) {
              t.relativeTarget = a;
              t.relativeTargetOrigin = o;
              t.relativeParent = n;
            }
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: e,
        snapshot: i,
        delta: a,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeTargetChanged: u
      });
    } else if (t.isLead()) {
      let {
        onExitComplete: e
      } = t.options;
      if (e) {
        e();
      }
    }
    t.options.transition = undefined;
  }
  function nJ(t) {
    nY.totalNodes++;
    if (t.parent) {
      if (!t.isProjecting()) {
        t.isProjectionDirty = t.parent.isProjectionDirty;
      }
      t.isSharedProjectionDirty ||= !!t.isProjectionDirty || !!t.parent.isProjectionDirty || !!t.parent.isSharedProjectionDirty;
      t.isTransformDirty ||= t.parent.isTransformDirty;
    }
  }
  function nQ(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function n0(t) {
    t.clearSnapshot();
  }
  function n1(t) {
    t.clearMeasurements();
  }
  function n2(t) {
    t.isLayoutDirty = false;
  }
  function n3(t) {
    let {
      visualElement: e
    } = t.options;
    if (e && e.getProps().onBeforeLayoutMeasure) {
      e.notify("BeforeLayoutMeasure");
    }
    t.resetTransform();
  }
  function n5(t) {
    t.finishAnimation();
    t.targetDelta = t.relativeTarget = t.target = undefined;
    t.isProjectionDirty = true;
  }
  function n4(t) {
    t.resolveTargetDelta();
  }
  function n6(t) {
    t.calcProjection();
  }
  function n9(t) {
    t.resetRotation();
  }
  function n8(t) {
    t.removeLeadSnapshot();
  }
  function n7(t, e, i) {
    t.translate = eT(e.translate, 0, i);
    t.scale = eT(e.scale, 1, i);
    t.origin = e.origin;
    t.originPoint = e.originPoint;
  }
  function rt(t, e, i, n) {
    t.min = eT(e.min, i.min, n);
    t.max = eT(e.max, i.max, n);
  }
  function re(t) {
    return t.animationValues && t.animationValues.opacityExit !== undefined;
  }
  let ri = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  let rn = t => typeof navigator != "undefined" && navigator.userAgent.toLowerCase().includes(t);
  let rr = rn("applewebkit/") && !rn("chrome/") ? Math.round : identityFunction_1.identity;
  function rs(t) {
    t.min = rr(t.min);
    t.max = rr(t.max);
  }
  function ro(t, e, i) {
    return t === "position" || t === "preserve-aspect" && !i_(nU(e), nU(i), 0.2);
  }
  let ra = nq({
    attachResizeListener: (t, e) => tj(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => true
  });
  let rl = {
    current: undefined
  };
  let ru = nq({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!rl.current) {
        let t = new ra({});
        t.mount(window);
        t.setOptions({
          layoutScroll: true
        });
        rl.current = t;
      }
      return rl.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== undefined ? e : "none";
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  });
  let rh = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function rc(t, e, i = 1) {
    identityFunctionExports.identityFn(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
    let [n, r] = function (t) {
      let e = rh.exec(t);
      if (!e) {
        return [,];
      }
      let [, i, n] = e;
      return [i, n];
    }(t);
    if (!n) {
      return;
    }
    let s = window.getComputedStyle(e).getPropertyValue(n);
    if (s) {
      let t = s.trim();
      if (iy(t)) {
        return parseFloat(t);
      } else {
        return t;
      }
    }
    if (W(r)) {
      return rc(r, e, i + 1);
    } else {
      return r;
    }
  }
  let rd = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
  let rp = t => rd.has(t);
  let rm = t => Object.keys(t).some(rp);
  let rf = t => t === Z || t === Q;
  let rg = (t, e) => parseFloat(t.split(", ")[e]);
  let rv = (t, e) => (i, n) => {
    let {
      transform: r
    } = n;
    if (r === "none" || !r) {
      return 0;
    }
    let s = r.match(/^matrix3d\((.+)\)$/);
    if (s) {
      return rg(s[1], e);
    }
    {
      let e = r.match(/^matrix\((.+)\)$/);
      if (e) {
        return rg(e[1], t);
      } else {
        return 0;
      }
    }
  };
  let ry = new Set(["x", "y", "z"]);
  let rx = R.filter(t => !ry.has(t));
  let rb = {
    width: (t, e) => {
      let {
        x: i
      } = t;
      let {
        paddingLeft: n = "0",
        paddingRight: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    height: (t, e) => {
      let {
        y: i
      } = t;
      let {
        paddingTop: n = "0",
        paddingBottom: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    top: (t, e) => {
      let {
        top: i
      } = e;
      return parseFloat(i);
    },
    left: (t, e) => {
      let {
        left: i
      } = e;
      return parseFloat(i);
    },
    bottom: (t, e) => {
      let {
        y: i
      } = t;
      let {
        top: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    right: (t, e) => {
      let {
        x: i
      } = t;
      let {
        left: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    x: rv(4, 13),
    y: rv(5, 14)
  };
  rb.translateX = rb.x;
  rb.translateY = rb.y;
  let rP = (t, e, i) => {
    let n = e.measureViewportBox();
    let r = getComputedStyle(e.current);
    let {
      display: s
    } = r;
    let o = {};
    if (s === "none") {
      e.setStaticValue("display", t.display || "block");
    }
    i.forEach(t => {
      o[t] = rb[t](n, r);
    });
    e.render();
    let a = e.measureViewportBox();
    i.forEach(i => {
      let n = e.getValue(i);
      if (n) {
        n.jump(o[i]);
      }
      t[i] = rb[i](a, r);
    });
    return t;
  };
  let rw = function (t, e, i = {}, n = {}) {
    e = {
      ...e
    };
    n = {
      ...n
    };
    let r = Object.keys(e).filter(rp);
    let s = [];
    let o = false;
    let a = [];
    r.forEach(r => {
      let l;
      let u = t.getValue(r);
      if (!t.hasValue(r)) {
        return;
      }
      let h = i[r];
      let c = ik(h);
      let d = e[r];
      if (tA(d)) {
        let t = d.length;
        let e = +(d[0] === null);
        c = ik(h = d[e]);
        for (let i = e; i < t && d[i] !== null; i++) {
          if (l) {
            identityFunctionExports.identityFn(ik(d[i]) === l, "All keyframes must be of the same type");
          } else {
            l = ik(d[i]);
            identityFunctionExports.identityFn(l === c || rf(c) && rf(l), "Keyframes must be of the same dimension as the current value");
          }
        }
      } else {
        l = ik(d);
      }
      if (c !== l) {
        if (rf(c) && rf(l)) {
          let t = u.get();
          if (typeof t == "string") {
            u.set(parseFloat(t));
          }
          if (typeof d == "string") {
            e[r] = parseFloat(d);
          } else if (Array.isArray(d) && l === Q) {
            e[r] = d.map(parseFloat);
          }
        } else if ((c == null ? undefined : c.transform) && (l == null ? undefined : l.transform) && (h === 0 || d === 0)) {
          if (h === 0) {
            u.set(l.transform(h));
          } else {
            e[r] = c.transform(d);
          }
        } else {
          if (!o) {
            s = function (t) {
              let e = [];
              rx.forEach(i => {
                let n = t.getValue(i);
                if (n !== undefined) {
                  e.push([i, n.get()]);
                  n.set(+!!i.startsWith("scale"));
                }
              });
              if (e.length) {
                t.render();
              }
              return e;
            }(t);
            o = true;
          }
          a.push(r);
          n[r] = n[r] !== undefined ? n[r] : e[r];
          u.jump(d);
        }
      }
    });
    if (!a.length) {
      return {
        target: e,
        transitionEnd: n
      };
    }
    {
      let i = a.indexOf("height") >= 0 ? window.pageYOffset : null;
      let r = rP(e, t, a);
      if (s.length) {
        s.forEach(e => {
          let [i, n] = e;
          t.getValue(i).set(n);
        });
      }
      t.render();
      if (browserEnvCheck.isBrowser && i !== null) {
        window.scrollTo({
          top: i
        });
      }
      return {
        target: r,
        transitionEnd: n
      };
    }
  };
  let rT = (t, e, i, n) => {
    var r;
    var s;
    let o = function (t, e, i) {
      let {
        ...n
      } = e;
      let r = t.current;
      if (!(r instanceof Element)) {
        return {
          target: n,
          transitionEnd: i
        };
      }
      i &&= {
        ...i
      };
      t.values.forEach(t => {
        let e = t.get();
        if (!W(e)) {
          return;
        }
        let i = rc(e, r);
        if (i) {
          t.set(i);
        }
      });
      for (let e in n) {
        let t = n[e];
        if (!W(t)) {
          continue;
        }
        let s = rc(t, r);
        if (s) {
          n[e] = s;
          i ||= {};
          if (i[e] === undefined) {
            i[e] = t;
          }
        }
      }
      return {
        target: n,
        transitionEnd: i
      };
    }(t, e, n);
    e = o.target;
    n = o.transitionEnd;
    r = e;
    s = n;
    if (rm(r)) {
      return rw(t, r, i, s);
    } else {
      return {
        target: r,
        transitionEnd: s
      };
    }
  };
  let rA = {
    current: null
  };
  let rC = {
    current: false
  };
  let rS = new WeakMap();
  let rE = Object.keys(T);
  let rk = rE.length;
  let rV = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  let rM = y.length;
  class rR {
    scrapeMotionValuesFromProps(t, e) {
      return {};
    }
    mount(t) {
      this.current = t;
      rS.set(t, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(t);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((t, e) => this.bindToMotionValue(e, t));
      if (!rC.current) {
        (function () {
          rC.current = true;
          if (browserEnvCheck.isBrowser) {
            if (window.matchMedia) {
              let t = window.matchMedia("(prefers-reduced-motion)");
              let e = () => rA.current = t.matches;
              t.addListener(e);
              e();
            } else {
              rA.current = false;
            }
          }
        })();
      }
      this.shouldReduceMotion = this.reducedMotionConfig !== "never" && (this.reducedMotionConfig === "always" || rA.current);
      if (this.parent) {
        this.parent.children.add(this);
      }
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      rS.delete(this.current);
      if (this.projection) {
        this.projection.unmount();
      }
      animationFrameScheduler.cancelScheduler(this.notifyUpdate);
      animationFrameScheduler.cancelScheduler(this.render);
      this.valueSubscriptions.forEach(t => t());
      if (this.removeFromVariantTree) {
        this.removeFromVariantTree();
      }
      if (this.parent) {
        this.parent.children.delete(this);
      }
      for (let t in this.events) {
        this.events[t].clear();
      }
      for (let t in this.features) {
        this.features[t].unmount();
      }
      this.current = null;
    }
    bindToMotionValue(t, e) {
      let i = j.has(t);
      let n = e.on("change", e => {
        this.latestValues[t] = e;
        if (this.props.onUpdate) {
          animationFrameScheduler.frameScheduler.update(this.notifyUpdate, false, true);
        }
        if (i && this.projection) {
          this.projection.isTransformDirty = true;
        }
      });
      let r = e.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
        n();
        r();
      });
    }
    sortNodePosition(t) {
      if (this.current && this.sortInstanceNodePosition && this.type === t.type) {
        return this.sortInstanceNodePosition(this.current, t.current);
      } else {
        return 0;
      }
    }
    loadFeatures(t, e, i, n) {
      let r;
      let s;
      let {
        children: o,
        ...a
      } = t;
      for (let t = 0; t < rk; t++) {
        let e = rE[t];
        let {
          isEnabled: i,
          Feature: n,
          ProjectionNode: o,
          MeasureLayout: l
        } = T[e];
        if (o) {
          r = o;
        }
        if (i(a)) {
          if (!this.features[e] && n) {
            this.features[e] = new n(this);
          }
          if (l) {
            s = l;
          }
        }
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && r) {
        this.projection = new r(this.latestValues, this.parent && this.parent.projection);
        let {
          layoutId: t,
          layout: e,
          drag: i,
          dragConstraints: s,
          layoutScroll: o,
          layoutRoot: l
        } = a;
        this.projection.setOptions({
          layoutId: t,
          layout: e,
          alwaysMeasureLayout: !!i || s && m(s),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof e == "string" ? e : "both",
          initialPromotionConfig: n,
          layoutScroll: o,
          layoutRoot: l
        });
      }
      return s;
    }
    updateFeatures() {
      for (let t in this.features) {
        let e = this.features[t];
        if (e.isMounted) {
          e.update();
        } else {
          e.mount();
          e.isMounted = true;
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      if (this.current) {
        return this.measureInstanceViewportBox(this.current, this.props);
      } else {
        return i5();
      }
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    makeTargetAnimatable(t) {
      let e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      return this.makeTargetAnimatableFromInstance(t, this.props, e);
    }
    update(t, e) {
      if (t.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = t;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = e;
      for (let e = 0; e < rV.length; e++) {
        let i = rV[e];
        if (this.propEventSubscriptions[i]) {
          this.propEventSubscriptions[i]();
          delete this.propEventSubscriptions[i];
        }
        let n = t["on" + i];
        if (n) {
          this.propEventSubscriptions[i] = this.on(i, n);
        }
      }
      this.prevMotionValues = function (t, e, i) {
        let {
          willChange: n
        } = e;
        for (let r in e) {
          let s = e[r];
          let o = i[r];
          if (L(s)) {
            t.addValue(r, s);
            if (iv(n)) {
              n.add(r);
            }
          } else if (L(o)) {
            t.addValue(r, iC(s, {
              owner: t
            }));
            if (iv(n)) {
              n.remove(r);
            }
          } else if (o !== s) {
            if (t.hasValue(r)) {
              let e = t.getValue(r);
              if (!e.hasAnimated) {
                e.set(s);
              }
            } else {
              let e = t.getStaticValue(r);
              t.addValue(r, iC(e !== undefined ? e : s, {
                owner: t
              }));
            }
          }
        }
        for (let n in i) {
          if (e[n] === undefined) {
            t.removeValue(n);
          }
        }
        return e;
      }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      if (this.props.variants) {
        return this.props.variants[t];
      } else {
        return undefined;
      }
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      if (this.isVariantNode) {
        return this;
      } else if (this.parent) {
        return this.parent.getClosestVariantNode();
      } else {
        return undefined;
      }
    }
    getVariantContext(t = false) {
      if (t) {
        if (this.parent) {
          return this.parent.getVariantContext();
        } else {
          return undefined;
        }
      }
      if (!this.isControllingVariants) {
        let t = this.parent && this.parent.getVariantContext() || {};
        if (this.props.initial !== undefined) {
          t.initial = this.props.initial;
        }
        return t;
      }
      let e = {};
      for (let t = 0; t < rM; t++) {
        let i = y[t];
        let n = this.props[i];
        if (f(n) || n === false) {
          e[i] = n;
        }
      }
      return e;
    }
    addVariantChild(t) {
      let e = this.getClosestVariantNode();
      if (e) {
        if (e.variantChildren) {
          e.variantChildren.add(t);
        }
        return () => e.variantChildren.delete(t);
      }
    }
    addValue(t, e) {
      if (e !== this.values.get(t)) {
        this.removeValue(t);
        this.bindToMotionValue(t, e);
      }
      this.values.set(t, e);
      this.latestValues[t] = e.get();
    }
    removeValue(t) {
      this.values.delete(t);
      let e = this.valueSubscriptions.get(t);
      if (e) {
        e();
        this.valueSubscriptions.delete(t);
      }
      delete this.latestValues[t];
      this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, e) {
      if (this.props.values && this.props.values[t]) {
        return this.props.values[t];
      }
      let i = this.values.get(t);
      if (i === undefined && e !== undefined) {
        i = iC(e, {
          owner: this
        });
        this.addValue(t, i);
      }
      return i;
    }
    readValue(t) {
      if (this.latestValues[t] === undefined && this.current) {
        return this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
      } else {
        return this.latestValues[t];
      }
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      let {
        initial: i
      } = this.props;
      let n = typeof i == "string" || typeof i == "object" ? tw(this.props, i)?.[t] : undefined;
      if (i && n !== undefined) {
        return n;
      }
      let r = this.getBaseTargetFromProps(this.props, t);
      if (r === undefined || L(r)) {
        if (this.initialValues[t] !== undefined && n === undefined) {
          return undefined;
        } else {
          return this.baseTarget[t];
        }
      } else {
        return r;
      }
    }
    on(t, e) {
      this.events[t] ||= new iP();
      return this.events[t].add(e);
    }
    notify(t) {
      var e = arguments.length;
      var i = Array(e > 1 ? e - 1 : 0);
      var n = 1;
      for (; n < e; n++) {
        i[n - 1] = arguments[n];
      }
      if (this.events[t]) {
        this.events[t].notify(...i);
      }
    }
    constructor({
      parent: t,
      props: e,
      presenceContext: i,
      reducedMotionConfig: n,
      visualState: r
    }, s = {}) {
      this.current = null;
      this.children = new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = new Map();
      this.features = {};
      this.valueSubscriptions = new Map();
      this.prevMotionValues = {};
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (this.current) {
          this.triggerBuild();
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        }
      };
      this.scheduleRender = () => animationFrameScheduler.frameScheduler.render(this.render, false, true);
      let {
        latestValues: o,
        renderState: a
      } = r;
      this.latestValues = o;
      this.baseTarget = {
        ...o
      };
      this.initialValues = e.initial ? {
        ...o
      } : {};
      this.renderState = a;
      this.parent = t;
      this.props = e;
      this.presenceContext = i;
      this.depth = t ? t.depth + 1 : 0;
      this.reducedMotionConfig = n;
      this.options = s;
      this.isControllingVariants = x(e);
      this.isVariantNode = b(e);
      if (this.isVariantNode) {
        this.variantChildren = new Set();
      }
      this.manuallyAnimateOnMount = !!t && !!t.current;
      let {
        willChange: l,
        ...u
      } = this.scrapeMotionValuesFromProps(e, {});
      for (let t in u) {
        let e = u[t];
        if (o[t] !== undefined && L(e)) {
          e.set(o[t], false);
          if (iv(l)) {
            l.add(t);
          }
        }
      }
    }
  }
  class rj extends rR {
    sortInstanceNodePosition(t, e) {
      if (t.compareDocumentPosition(e) & 2) {
        return 1;
      } else {
        return -1;
      }
    }
    getBaseTargetFromProps(t, e) {
      if (t.style) {
        return t.style[e];
      } else {
        return undefined;
      }
    }
    removeValueFromRenderState(t, e) {
      let {
        vars: i,
        style: n
      } = e;
      delete i[t];
      delete n[t];
    }
    makeTargetAnimatableFromInstance(t, e, i) {
      let {
        transition: n,
        transitionEnd: r,
        ...s
      } = t;
      let {
        transformValues: o
      } = e;
      let a = function (t, e, i) {
        let n = {};
        for (let r in t) {
          let t = function (t, e) {
            if (e) {
              return (e[t] || e.default || e).from;
            }
          }(r, e);
          if (t !== undefined) {
            n[r] = t;
          } else {
            let t = i.getValue(r);
            if (t) {
              n[r] = t.get();
            }
          }
        }
        return n;
      }(s, n || {}, this);
      if (o) {
        r &&= o(r);
        s &&= o(s);
        a &&= o(a);
      }
      if (i) {
        (function (t, e, i) {
          let s = Object.keys(e).filter(e => !t.hasValue(e));
          let o = s.length;
          if (o) {
            for (let a = 0; a < o; a++) {
              let o = s[a];
              let l = e[o];
              let u = null;
              if (Array.isArray(l)) {
                u = l[0];
              }
              if (u === null) {
                u = i[o] ?? t.readValue(o) ?? e[o];
              }
              if (u != null) {
                if (typeof u == "string" && (iy(u) || id(u))) {
                  u = parseFloat(u);
                } else if (!iM(u) && eB.test(l)) {
                  u = ic(o, l);
                }
                t.addValue(o, iC(u, {
                  owner: t
                }));
                if (i[o] === undefined) {
                  i[o] = u;
                }
                if (u !== null) {
                  t.setBaseTarget(o, u);
                }
              }
            }
          }
        })(this, s, a);
        let t = rT(this, s, a, r);
        r = t.transitionEnd;
        s = t.target;
      }
      return {
        transition: n,
        transitionEnd: r,
        ...s
      };
    }
  }
  class rO extends rj {
    readValueFromInstance(t, e) {
      if (j.has(e)) {
        let t = ih(e);
        return t && t.default || 0;
      }
      {
        let i = window.getComputedStyle(t);
        let n = (B(e) ? i.getPropertyValue(e) : i[e]) || 0;
        if (typeof n == "string") {
          return n.trim();
        } else {
          return n;
        }
      }
    }
    measureInstanceViewportBox(t, e) {
      let {
        transformPagePoint: i
      } = e;
      return nh(t, i);
    }
    build(t, e, i, n) {
      ts(t, e, i, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e) {
      return tb(t, e);
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      let {
        children: t
      } = this.props;
      if (L(t)) {
        this.childSubscription = t.on("change", t => {
          if (this.current) {
            this.current.textContent = `${t}`;
          }
        });
      }
    }
    renderInstance(t, e, i, n) {
      tv(t, e, i, n);
    }
    constructor() {
      super(...arguments);
      this.type = "html";
    }
  }
  class rL extends rj {
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (j.has(e)) {
        let t = ih(e);
        return t && t.default || 0;
      }
      e = ty.has(e) ? e : d(e);
      return t.getAttribute(e);
    }
    measureInstanceViewportBox() {
      return i5();
    }
    scrapeMotionValuesFromProps(t, e) {
      return tP(t, e);
    }
    build(t, e, i, n) {
      tm(t, e, i, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(t, e, i, n) {
      tx(t, e, i, n);
    }
    mount(t) {
      this.isSVGTag = tg(t.tagName);
      super.mount(t);
    }
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
    }
  }
  let rD = (t, e) => V(t) ? new rL(e, {
    enableHardwareAcceleration: false
  }) : new rO(e, {
    enableHardwareAcceleration: true
  });
  let rI = {
    animation: {
      Feature: class extends tz {
        updateAnimationControlsSubscription() {
          let {
            animate: t
          } = this.node.getProps();
          this.unmount();
          if (g(t)) {
            this.unmount = t.subscribe(this.node);
          }
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let {
            animate: t
          } = this.node.getProps();
          let {
            animate: e
          } = this.node.prevProps || {};
          if (t !== e) {
            this.updateAnimationControlsSubscription();
          }
        }
        unmount() {}
        constructor(t) {
          super(t);
          t.animationState ||= function (t) {
            let e = e => Promise.all(e.map(e => {
              let {
                animation: i,
                options: n
              } = e;
              return function (t, e) {
                let i;
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                t.notify("AnimationStart", e);
                if (Array.isArray(e)) {
                  i = Promise.all(e.map(e => ij(t, e, n)));
                } else if (typeof e == "string") {
                  i = ij(t, e, n);
                } else {
                  let r = typeof e == "function" ? t1(t, e, n.custom) : e;
                  i = Promise.all(iR(t, r, n));
                }
                return i.then(() => t.notify("AnimationComplete", e));
              }(t, i, n);
            }));
            let i = {
              animate: iI(true),
              whileInView: iI(),
              whileHover: iI(),
              whileTap: iI(),
              whileDrag: iI(),
              whileFocus: iI(),
              exit: iI()
            };
            let n = true;
            let r = (e, i) => {
              let n = t1(t, i);
              if (n) {
                let {
                  transition: t,
                  transitionEnd: i,
                  ...r
                } = n;
                e = {
                  ...e,
                  ...r,
                  ...i
                };
              }
              return e;
            };
            function s(s, o) {
              let a = t.getProps();
              let l = t.getVariantContext(true) || {};
              let u = [];
              let h = new Set();
              let c = {};
              let d = Infinity;
              for (let e = 0; e < iD; e++) {
                var p;
                var m;
                let v = iL[e];
                let y = i[v];
                let x = a[v] !== undefined ? a[v] : l[v];
                let b = f(x);
                let P = v === o ? y.isActive : null;
                if (P === false) {
                  d = e;
                }
                let w = x === l[v] && x !== a[v] && b;
                if (w && n && t.manuallyAnimateOnMount) {
                  w = false;
                }
                y.protectedKeys = {
                  ...c
                };
                if (!y.isActive && P === null || !x && !y.prevProp || g(x) || typeof x == "boolean") {
                  continue;
                }
                p = y.prevProp;
                let T = (typeof (m = x) == "string" ? m !== p : !!Array.isArray(m) && !t0(m, p)) || v === o && y.isActive && !w && b || e > d && b;
                let A = false;
                let C = Array.isArray(x) ? x : [x];
                let S = C.reduce(r, {});
                if (P === false) {
                  S = {};
                }
                let {
                  prevResolvedValues: E = {}
                } = y;
                let k = {
                  ...E,
                  ...S
                };
                let V = t => {
                  T = true;
                  if (h.has(t)) {
                    A = true;
                    h.delete(t);
                  }
                  y.needsAnimating[t] = true;
                };
                for (let t in k) {
                  let e = S[t];
                  let i = E[t];
                  if (c.hasOwnProperty(t)) {
                    continue;
                  }
                  let n = false;
                  if (tA(e) && tA(i) ? t0(e, i) : e === i) {
                    if (e !== undefined && h.has(t)) {
                      V(t);
                    } else {
                      y.protectedKeys[t] = true;
                    }
                  } else if (e !== undefined) {
                    V(t);
                  } else {
                    h.add(t);
                  }
                }
                y.prevProp = x;
                y.prevResolvedValues = S;
                if (y.isActive) {
                  c = {
                    ...c,
                    ...S
                  };
                }
                if (n && t.blockInitialAnimation) {
                  T = false;
                }
                if (T && (!w || A)) {
                  u.push(...C.map(t => ({
                    animation: t,
                    options: {
                      type: v,
                      ...s
                    }
                  })));
                }
              }
              if (h.size) {
                let e = {};
                h.forEach(i => {
                  let n = t.getBaseTarget(i);
                  if (n !== undefined) {
                    e[i] = n;
                  }
                });
                u.push({
                  animation: e
                });
              }
              let v = !!u.length;
              if (n && (a.initial === false || a.initial === a.animate) && !t.manuallyAnimateOnMount) {
                v = false;
              }
              n = false;
              if (v) {
                return e(u);
              } else {
                return Promise.resolve();
              }
            }
            return {
              animateChanges: s,
              setActive: function (e, n, r) {
                var o;
                if (i[e].isActive === n) {
                  return Promise.resolve();
                }
                if ((o = t.variantChildren) !== null && o !== undefined) {
                  o.forEach(t => {
                    var i;
                    if ((i = t.animationState) === null || i === undefined) {
                      return undefined;
                    } else {
                      return i.setActive(e, n);
                    }
                  });
                }
                i[e].isActive = n;
                let a = s(r, e);
                for (let t in i) {
                  i[t].protectedKeys = {};
                }
                return a;
              },
              setAnimateFunction: function (i) {
                e = i(t);
              },
              getState: () => i
            };
          }(t);
        }
      }
    },
    exit: {
      Feature: class extends tz {
        update() {
          if (!this.node.presenceContext) {
            return;
          }
          let {
            isPresent: t,
            onExitComplete: e,
            custom: i
          } = this.node.presenceContext;
          let {
            isPresent: n
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) {
            return;
          }
          let r = this.node.animationState.setActive("exit", !t, {
            custom: i ?? this.node.getProps().custom
          });
          if (e && !t) {
            r.then(() => e(this.id));
          }
        }
        mount() {
          let {
            register: t
          } = this.node.presenceContext || {};
          if (t) {
            this.unmount = t(this.id);
          }
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.id = iF++;
        }
      }
    },
    inView: {
      Feature: class extends tz {
        startObserver() {
          this.unmount();
          let {
            viewport: t = {}
          } = this.node.getProps();
          let {
            root: e,
            margin: i,
            amount: n = "some",
            once: r
          } = t;
          let s = {
            root: e ? e.current : undefined,
            rootMargin: i,
            threshold: typeof n == "number" ? n : tQ[n]
          };
          return function (t, e, i) {
            let n = function (t) {
              let {
                root: e,
                ...i
              } = t;
              let n = e || document;
              if (!tG.has(n)) {
                tG.set(n, {});
              }
              let r = tG.get(n);
              let s = JSON.stringify(i);
              r[s] ||= new IntersectionObserver(tJ, {
                root: e,
                ...i
              });
              return r[s];
            }(e);
            tq.set(t, i);
            n.observe(t);
            return () => {
              tq.delete(t);
              n.unobserve(t);
            };
          }(this.node.current, s, t => {
            let {
              isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) {
              return;
            }
            if (e) {
              this.hasEnteredView = true;
            }
            if (this.node.animationState) {
              this.node.animationState.setActive("whileInView", e);
            }
            let {
              onViewportEnter: i,
              onViewportLeave: n
            } = this.node.getProps();
            let s = e ? i : n;
            if (s) {
              s(t);
            }
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver == "undefined") {
            return;
          }
          let {
            props: t,
            prevProps: e
          } = this.node;
          if (["amount", "margin", "root"].some(function (t) {
            let {
              viewport: e = {}
            } = t;
            let {
              viewport: i = {}
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return t => e[t] !== i[t];
          }(t, e))) {
            this.startObserver();
          }
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.hasEnteredView = false;
          this.isInView = false;
        }
      }
    },
    tap: {
      Feature: class extends tz {
        startPress(t, e) {
          this.isPressing = true;
          let {
            onTapStart: i,
            whileTap: n
          } = this.node.getProps();
          if (n && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
          }
          if (i) {
            animationFrameScheduler.frameScheduler.update(() => i(t, e));
          }
        }
        checkPressEnd() {
          this.removeEndListeners();
          this.isPressing = false;
          if (this.node.getProps().whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
          }
          return !tN();
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) {
            return;
          }
          let {
            onTapCancel: i
          } = this.node.getProps();
          if (i) {
            animationFrameScheduler.frameScheduler.update(() => i(t, e));
          }
        }
        mount() {
          let t = this.node.getProps();
          let e = tI(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !t.onTapStart && !t.onPointerStart
          });
          let i = tj(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = tB(e, i);
        }
        unmount() {
          this.removeStartListeners();
          this.removeEndListeners();
          this.removeAccessibleListeners();
        }
        constructor() {
          super(...arguments);
          this.removeStartListeners = identityFunction_1.identity;
          this.removeEndListeners = identityFunction_1.identity;
          this.removeAccessibleListeners = identityFunction_1.identity;
          this.startPointerPress = (t, e) => {
            if (this.isPressing) {
              return;
            }
            this.removeEndListeners();
            let i = this.node.getProps();
            let n = tI(window, "pointerup", (t, e) => {
              if (!this.checkPressEnd()) {
                return;
              }
              let {
                onTap: i,
                onTapCancel: n,
                globalTapTarget: r
              } = this.node.getProps();
              animationFrameScheduler.frameScheduler.update(() => {
                if (r || tH(this.node.current, t.target)) {
                  if (i) {
                    i(t, e);
                  }
                } else if (n) {
                  n(t, e);
                }
              });
            }, {
              passive: !i.onTap && !i.onPointerUp
            });
            let r = tI(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
              passive: !i.onTapCancel && !i.onPointerCancel
            });
            this.removeEndListeners = tB(n, r);
            this.startPress(t, e);
          };
          this.startAccessiblePress = () => {
            let t = tj(this.node.current, "keydown", t => {
              if (t.key === "Enter" && !this.isPressing) {
                this.removeEndListeners();
                this.removeEndListeners = tj(this.node.current, "keyup", t => {
                  if (t.key === "Enter" && this.checkPressEnd()) {
                    tY("up", (t, e) => {
                      let {
                        onTap: i
                      } = this.node.getProps();
                      if (i) {
                        animationFrameScheduler.frameScheduler.update(() => i(t, e));
                      }
                    });
                  }
                });
                tY("down", (t, e) => {
                  this.startPress(t, e);
                });
              }
            });
            let e = tj(this.node.current, "blur", () => {
              if (this.isPressing) {
                tY("cancel", (t, e) => this.cancelPress(t, e));
              }
            });
            this.removeAccessibleListeners = tB(t, e);
          };
        }
      }
    },
    focus: {
      Feature: class extends tz {
        onFocus() {
          let t = false;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = true;
          }
          if (t && this.node.animationState) {
            this.node.animationState.setActive("whileFocus", true);
            this.isActive = true;
          }
        }
        onBlur() {
          if (this.isActive && this.node.animationState) {
            this.node.animationState.setActive("whileFocus", false);
            this.isActive = false;
          }
        }
        mount() {
          this.unmount = tB(tj(this.node.current, "focus", () => this.onFocus()), tj(this.node.current, "blur", () => this.onBlur()));
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.isActive = false;
        }
      }
    },
    hover: {
      Feature: class extends tz {
        mount() {
          this.unmount = tB(t_(this.node, true), t_(this.node, false));
        }
        unmount() {}
      }
    },
    pan: {
      Feature: class extends tz {
        onPointerDown(t) {
          this.session = new iW(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nc(this.node)
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n
          } = this.node.getProps();
          return {
            onSessionStart: nf(t),
            onStart: nf(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session;
              if (n) {
                animationFrameScheduler.frameScheduler.update(() => n(t, e));
              }
            }
          };
        }
        mount() {
          this.removePointerDownListener = tI(this.node.current, "pointerdown", t => this.onPointerDown(t));
        }
        update() {
          if (this.session) {
            this.session.updateHandlers(this.createPanHandlers());
          }
        }
        unmount() {
          this.removePointerDownListener();
          if (this.session) {
            this.session.end();
          }
        }
        constructor() {
          super(...arguments);
          this.removePointerDownListener = identityFunction_1.identity;
        }
      }
    },
    drag: {
      Feature: class extends tz {
        mount() {
          let {
            dragControls: t
          } = this.node.getProps();
          if (t) {
            this.removeGroupControls = t.subscribe(this.controls);
          }
          this.removeListeners = this.controls.addListeners() || identityFunction_1.identity;
        }
        unmount() {
          this.removeGroupControls();
          this.removeListeners();
        }
        constructor(t) {
          super(t);
          this.removeGroupControls = identityFunction_1.identity;
          this.removeListeners = identityFunction_1.identity;
          this.controls = new np(t);
        }
      },
      ProjectionNode: ru,
      MeasureLayout: nb
    },
    layout: {
      ProjectionNode: ru,
      MeasureLayout: nb
    }
  };
  let rF = function (t) {
    function e(e, i = {}) {
      return function (t) {
        let {
          preloadedFeatures: e,
          createVisualElement: i,
          useRender: n,
          useVisualState: r,
          Component: s
        } = t;
        if (e) {
          (function (t) {
            for (let e in t) {
              T[e] = {
                ...T[e],
                ...t[e]
              };
            }
          })(e);
        }
        let d = reactCoreLibraryReexport.forwardRef(function (t, d) {
          var g;
          let v;
          let y = {
            ...reactCoreLibraryReexport.useContext(a),
            ...t,
            layoutId: function (t) {
              let {
                layoutId: e
              } = t;
              let i = reactCoreLibraryReexport.useContext(sharedUiContext.uiContext).id;
              if (i && e !== undefined) {
                return i + "-" + e;
              } else {
                return e;
              }
            }(t)
          };
          let {
            isStatic: b
          } = y;
          let w = function (t) {
            let {
              initial: e,
              animate: i
            } = function (t, e) {
              if (x(t)) {
                let {
                  initial: e,
                  animate: i
                } = t;
                return {
                  initial: e === false || f(e) ? e : undefined,
                  animate: f(i) ? i : undefined
                };
              }
              if (t.inherit !== false) {
                return e;
              } else {
                return {};
              }
            }(t, reactCoreLibraryReexport.useContext(l));
            return reactCoreLibraryReexport.useMemo(() => ({
              initial: e,
              animate: i
            }), [P(e), P(i)]);
          }(t);
          let T = r(t, b);
          if (!b && browserEnvCheck.isBrowser) {
            w.visualElement = function (t, e, i, n) {
              let {
                visualElement: r
              } = reactCoreLibraryReexport.useContext(l);
              let s = reactCoreLibraryReexport.useContext(c);
              let d = reactCoreLibraryReexport.useContext(appContextInstance.appContext);
              let m = reactCoreLibraryReexport.useContext(a).reducedMotion;
              let f = reactCoreLibraryReexport.useRef();
              n = n || s.renderer;
              if (!f.current && n) {
                f.current = n(t, {
                  visualState: e,
                  parent: r,
                  props: i,
                  presenceContext: d,
                  blockInitialAnimation: !!d && d.initial === false,
                  reducedMotionConfig: m
                });
              }
              let g = f.current;
              reactCoreLibraryReexport.useInsertionEffect(() => {
                if (g) {
                  g.update(i, d);
                }
              });
              let v = reactCoreLibraryReexport.useRef(!!i[p] && !window.HandoffComplete);
              reactHookEnvironmentSelector.useEnvironmentEffect(() => {
                if (g) {
                  g.render();
                  if (v.current && g.animationState) {
                    g.animationState.animateChanges();
                  }
                }
              });
              reactCoreLibraryReexport.useEffect(() => {
                if (g) {
                  g.updateFeatures();
                  if (!v.current && g.animationState) {
                    g.animationState.animateChanges();
                  }
                  if (v.current) {
                    v.current = false;
                    window.HandoffComplete = true;
                  }
                }
              });
              return g;
            }(s, T, y, i);
            let t = reactCoreLibraryReexport.useContext(S);
            let n = reactCoreLibraryReexport.useContext(c).strict;
            if (w.visualElement) {
              v = w.visualElement.loadFeatures(y, n, e, t);
            }
          }
          return reactCoreLibraryReexport.createElement(l.Provider, {
            value: w
          }, v && w.visualElement ? reactCoreLibraryReexport.createElement(v, {
            visualElement: w.visualElement,
            ...y
          }) : null, n(s, t, (g = w.visualElement, reactCoreLibraryReexport.useCallback(t => {
            if (t && T.mount) {
              T.mount(t);
            }
            if (g) {
              if (t) {
                g.mount(t);
              } else {
                g.unmount();
              }
            }
            if (d) {
              if (typeof d == "function") {
                d(t);
              } else if (m(d)) {
                d.current = t;
              }
            }
          }, [g])), T, b, w.visualElement));
        });
        d[E] = s;
        return d;
      }(t(e, i));
    }
    if (typeof Proxy == "undefined") {
      return e;
    }
    let i = new Map();
    return new Proxy(e, {
      get: (t, n) => {
        if (!i.has(n)) {
          i.set(n, e(n));
        }
        return i.get(n);
      }
    });
  }((t, e) => function (t, e, i, n) {
    let {
      forwardMotionProps: r = false
    } = e;
    return {
      ...(V(t) ? tM : tR),
      preloadedFeatures: i,
      useRender: function (t = false) {
        return (e, i, n, r, s) => {
          let {
            latestValues: a
          } = r;
          let l = (V(e) ? function (t, e, i, n) {
            let r = reactCoreLibraryReexport.useMemo(() => {
              let i = tf();
              tm(i, e, {
                enableHardwareAcceleration: false
              }, tg(n), t.transformTemplate);
              return {
                ...i.attrs,
                style: {
                  ...i.style
                }
              };
            }, [e]);
            if (t.style) {
              let e = {};
              ta(e, t.style, t);
              r.style = {
                ...e,
                ...r.style
              };
            }
            return r;
          } : function (t, e, i) {
            let n = {};
            let r = function (t, e, i) {
              let n = t.style || {};
              let r = {};
              ta(r, n, t);
              Object.assign(r, function (t, e, i) {
                let {
                  transformTemplate: n
                } = t;
                return reactCoreLibraryReexport.useMemo(() => {
                  let t = to();
                  ts(t, e, {
                    enableHardwareAcceleration: !i
                  }, n);
                  return Object.assign({}, t.vars, t.style);
                }, [e]);
              }(t, e, i));
              if (t.transformValues) {
                return t.transformValues(r);
              } else {
                return r;
              }
            }(t, e, i);
            if (t.drag && t.dragListener !== false) {
              n.draggable = false;
              r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none";
              r.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`;
            }
            if (t.tabIndex === undefined && (t.onTap || t.onTapStart || t.whileTap)) {
              n.tabIndex = 0;
            }
            n.style = r;
            return n;
          })(i, a, s, e);
          let u = {
            ...function (t, e, i) {
              let n = {};
              for (let r in t) {
                if ((r !== "values" || typeof t.values != "object") && (th(r) || i === true && tu(r) || !e && !tu(r) || t.draggable && r.startsWith("onDrag"))) {
                  n[r] = t[r];
                }
              }
              return n;
            }(i, typeof e == "string", t),
            ...l,
            ref: n
          };
          let {
            children: h
          } = i;
          let c = reactCoreLibraryReexport.useMemo(() => L(h) ? h.get() : h, [h]);
          return reactCoreLibraryReexport.createElement(e, {
            ...u,
            children: c
          });
        };
      }(r),
      createVisualElement: n,
      Component: t
    };
  }(t, e, rI, rD));
  require.d(exports, {
    motionComponent: function () {
      return rF;
    }
  });
}