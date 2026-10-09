// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'createAnimation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 421013
         */
module.exports = function (module, exports, require) {
  var safePropertyAccess = require("safe-property-access") /*id: 945701*/;
  function r(t) {
    t.duration = 0;
    t.type;
  }
  var frameloopSchedulerUtils = require("frameloop-scheduler-utils") /*id: 232060*/;
  var functionalPipeUtil = require("functional-pipe-util") /*id: 251317*/;
  var clampNumber = require("clamp-number") /*id: 887362*/;
  var unitConversionUtils = require("unit-conversion-utils") /*id: 60508*/;
  var performanceTimingUtility = require("performance-timing-utility") /*id: 602145*/;
  var animationFeatureFlags = require("animation-feature-flags") /*id: 452980*/;
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var cssCustomPropertyValidator_1 = require("css-custom-property-validator_1") /*id: 777347*/;
  var colorValidationUtils_1 = require("color-validation-utils_1") /*id: 485358*/;
  var cssValueParser_1 = require("css-value-parser_1") /*id: 208273*/;
  var hexColorValidator = require("hex-color-validator") /*id: 750715*/;
  var hslColorValidator = require("hsl-color-validator") /*id: 468321*/;
  function g(t, e, i) {
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
  var rgbColorValidator = require("rgb-color-validator") /*id: 579754*/;
  function x(t, e) {
    return i => i > 0 ? e : t;
  }
  var interpolationHelper = require("interpolation-helper") /*id: 710097*/;
  let T = (t, e, i) => {
    let n = t * t;
    let r = i * (e * e - n) + n;
    if (r < 0) {
      return 0;
    } else {
      return Math.sqrt(r);
    }
  };
  let P = [hexColorValidator.hexColorValidator, rgbColorValidator.rgbColorValidator, hslColorValidator.hslColorValidator];
  let b = t => P.find(e => e.test(t));
  function S(t) {
    let e = b(t);
    stubFunctions.stubHandler(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    if (!e) {
      return false;
    }
    let i = e.parse(t);
    if (e === hslColorValidator.hslColorValidator) {
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
          s = g(r, t, e + 1 / 3);
          o = g(r, t, e);
          a = g(r, t, e - 1 / 3);
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
  let A = (t, e) => {
    let i = S(t);
    let n = S(e);
    if (!i || !n) {
      return x(t, e);
    }
    let r = {
      ...i
    };
    return t => {
      r.red = T(i.red, n.red, t);
      r.green = T(i.green, n.green, t);
      r.blue = T(i.blue, n.blue, t);
      r.alpha = interpolationHelper.interpolate(i.alpha, n.alpha, t);
      return rgbColorValidator.rgbColorValidator.transform(r);
    };
  };
  let M = new Set(["none", "hidden"]);
  function k(t, e) {
    return i => interpolationHelper.interpolate(t, e, i);
  }
  function C(t) {
    if (typeof t == "number") {
      return k;
    } else if (typeof t == "string") {
      if (cssCustomPropertyValidator_1.isValidVarFunction(t)) {
        return x;
      } else if (colorValidationUtils_1.colorValidator.test(t)) {
        return A;
      } else {
        return D;
      }
    } else if (Array.isArray(t)) {
      return E;
    } else if (typeof t == "object") {
      if (colorValidationUtils_1.colorValidator.test(t)) {
        return A;
      } else {
        return V;
      }
    } else {
      return x;
    }
  }
  function E(t, e) {
    let i = [...t];
    let n = i.length;
    let r = t.map((t, i) => C(t)(t, e[i]));
    return t => {
      for (let e = 0; e < n; e++) {
        i[e] = r[e](t);
      }
      return i;
    };
  }
  function V(t, e) {
    let i = {
      ...t,
      ...e
    };
    let n = {};
    for (let r in i) {
      if (t[r] !== undefined && e[r] !== undefined) {
        n[r] = C(t[r])(t[r], e[r]);
      }
    }
    return t => {
      for (let e in n) {
        i[e] = n[e](t);
      }
      return i;
    };
  }
  let D = (t, e) => {
    let i = cssValueParser_1.cssValueTransformer.createTransformer(e);
    let n = cssValueParser_1.parseCssValues(t);
    let r = cssValueParser_1.parseCssValues(e);
    if (n.indexes.var.length !== r.indexes.var.length || n.indexes.color.length !== r.indexes.color.length || !(n.indexes.number.length >= r.indexes.number.length)) {
      stubFunctions.stubHandler(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
      return x(t, e);
    }
    if (M.has(t) && !r.values.length || M.has(e) && !n.values.length) {
      if (M.has(t)) {
        return i => i <= 0 ? t : e;
      } else {
        return i => i >= 1 ? e : t;
      }
    }
    return functionalPipeUtil.pipeFunctions(E(function (t, e) {
      let i = [];
      let n = {
        color: 0,
        var: 0,
        number: 0
      };
      for (let s = 0; s < e.values.length; s++) {
        let o = e.types[s];
        let a = t.indexes[o][n[o]];
        let l = t.values[a] ?? 0;
        i[s] = l;
        n[o]++;
      }
      return i;
    }(n, r), r.values), i);
  };
  function R(t, e, i) {
    if (typeof t == "number" && typeof e == "number" && typeof i == "number") {
      return interpolationHelper.interpolate(t, e, i);
    } else {
      return C(t)(t, e);
    }
  }
  let L = t => {
    let e = e => {
      let {
        timestamp: i
      } = e;
      return t(i);
    };
    return {
      start: function () {
        let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        return frameloopSchedulerUtils.scheduleFrame.update(e, t);
      },
      stop: () => frameloopSchedulerUtils.cancelFrame(e),
      now: () => frameloopSchedulerUtils.frameState.isProcessing ? frameloopSchedulerUtils.frameState.timestamp : performanceTimingUtility.performanceTimer.now()
    };
  };
  let j = function (t, e, i = 10) {
    let n = "";
    let r = Math.max(Math.round(e / i), 2);
    for (let e = 0; e < r; e++) {
      n += Math.round(t(e / (r - 1)) * 10000) / 10000 + ", ";
    }
    return `linear(${n.substring(0, n.length - 2)})`;
  };
  function F(t) {
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
  var calculateFpsFromFrameTime = require("calculate-fps-from-frame-time") /*id: 810590*/;
  function O(t, e, i) {
    let n = Math.max(e - 5, 0);
    return calculateFpsFromFrameTime.calculateFps(i - t(n), e - n);
  }
  let I = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 0.005,
      default: 0.5
    },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1
  };
  function W(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  let U = ["duration", "bounce"];
  let $ = ["stiffness", "damping", "mass"];
  function X(t, e) {
    return e.some(e => t[e] !== undefined);
  }
  function N() {
    let t;
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : I.visualDuration;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : I.bounce;
    let n = typeof e != "object" ? {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: i
    } : e;
    let {
      restSpeed: r,
      restDelta: s
    } = n;
    let o = n.keyframes[0];
    let u = n.keyframes[n.keyframes.length - 1];
    let h = {
      done: false,
      value: o
    };
    let {
      stiffness: c,
      damping: p,
      mass: m,
      duration: f,
      velocity: v,
      isResolvedFromDuration: g
    } = function (t) {
      let e = {
        velocity: I.velocity,
        stiffness: I.stiffness,
        damping: I.damping,
        mass: I.mass,
        isResolvedFromDuration: false,
        ...t
      };
      if (!X(t, $) && X(t, U)) {
        if (t.visualDuration) {
          let i = Math.PI * 2 / (t.visualDuration * 1.2);
          let n = i * i;
          let r = clampNumber.clampNumber(0.05, 1, 1 - (t.bounce || 0)) * 2 * Math.sqrt(n);
          e = {
            ...e,
            mass: I.mass,
            stiffness: n,
            damping: r
          };
        } else {
          let i = function (t) {
            let e;
            let i;
            let {
              duration: n = I.duration,
              bounce: r = I.bounce,
              velocity: s = I.velocity,
              mass: o = I.mass
            } = t;
            stubFunctions.stubHandler(n <= unitConversionUtils.convertToMilliseconds(I.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
            let u = 1 - r;
            u = clampNumber.clampNumber(I.minDamping, I.maxDamping, u);
            n = clampNumber.clampNumber(I.minDuration, I.maxDuration, unitConversionUtils.convertToSeconds(n));
            if (u < 1) {
              e = t => {
                let e = t * u;
                let i = e * n;
                return 0.001 - (e - s) / W(t, u) * Math.exp(-i);
              };
              i = t => {
                let i = t * u * n;
                let r = Math.pow(u, 2) * Math.pow(t, 2) * n;
                let o = Math.exp(-i);
                let a = W(Math.pow(t, 2), u);
                return (i * s + s - r) * o * (-e(t) + 0.001 > 0 ? -1 : 1) / a;
              };
            } else {
              e = t => -0.001 + Math.exp(-t * n) * ((t - s) * n + 1);
              i = t => n * n * (s - t) * Math.exp(-t * n);
            }
            let h = function (t, e, i) {
              let n = i;
              for (let i = 1; i < 12; i++) {
                n -= t(n) / e(n);
              }
              return n;
            }(e, i, 5 / n);
            n = unitConversionUtils.convertToMilliseconds(n);
            if (isNaN(h)) {
              return {
                stiffness: I.stiffness,
                damping: I.damping,
                duration: n
              };
            }
            {
              let t = Math.pow(h, 2) * o;
              return {
                stiffness: t,
                damping: u * 2 * Math.sqrt(o * t),
                duration: n
              };
            }
          }(t);
          (e = {
            ...e,
            ...i,
            mass: I.mass
          }).isResolvedFromDuration = true;
        }
      }
      return e;
    }({
      ...n,
      velocity: -unitConversionUtils.convertToSeconds(n.velocity || 0)
    });
    let y = v || 0;
    let x = p / (Math.sqrt(c * m) * 2);
    let w = u - o;
    let T = unitConversionUtils.convertToSeconds(Math.sqrt(c / m));
    let P = Math.abs(w) < 5;
    r ||= P ? I.restSpeed.granular : I.restSpeed.default;
    s ||= P ? I.restDelta.granular : I.restDelta.default;
    if (x < 1) {
      let e = W(T, x);
      t = t => u - Math.exp(-x * T * t) * ((y + x * T * w) / e * Math.sin(e * t) + w * Math.cos(e * t));
    } else if (x === 1) {
      t = t => u - Math.exp(-T * t) * (w + (y + T * w) * t);
    } else {
      let e = T * Math.sqrt(x * x - 1);
      t = t => {
        let i = Math.exp(-x * T * t);
        let n = Math.min(e * t, 300);
        return u - i * ((y + x * T * w) * Math.sinh(n) + e * w * Math.cosh(n)) / e;
      };
    }
    let b = {
      calculatedDuration: g && f || null,
      next: e => {
        let i = t(e);
        if (g) {
          h.done = e >= f;
        } else {
          let n = e === 0 ? y : 0;
          if (x < 1) {
            n = e === 0 ? unitConversionUtils.convertToMilliseconds(y) : O(t, e, i);
          }
          let o = Math.abs(n) <= r;
          let a = Math.abs(u - i) <= s;
          h.done = o && a;
        }
        h.value = h.done ? u : i;
        return h;
      },
      toString: () => {
        let t = Math.min(F(b), 20000);
        let e = j(e => b.next(t * e).value, t, 30);
        return t + "ms " + e;
      },
      toTransition: () => {}
    };
    return b;
  }
  function z(t) {
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
      max: d,
      restDelta: c = 0.5,
      restSpeed: p
    } = t;
    let m = n[0];
    let f = {
      done: false,
      value: m
    };
    let v = t => h !== undefined && t < h || d !== undefined && t > d;
    let g = t => h === undefined ? d : d === undefined ? h : Math.abs(h - t) < Math.abs(d - t) ? h : d;
    let y = s * r;
    let x = m + y;
    let w = u === undefined ? x : u(x);
    if (w !== x) {
      y = w - m;
    }
    let T = t => -y * Math.exp(-t / o);
    let P = t => w + T(t);
    let b = t => {
      let e = T(t);
      let i = P(t);
      f.done = Math.abs(e) <= c;
      f.value = f.done ? w : i;
    };
    let S = t => {
      if (v(f.value)) {
        e = t;
        i = N({
          keyframes: [f.value, g(f.value)],
          velocity: O(P, t, f.value),
          damping: a,
          stiffness: l,
          restDelta: c,
          restSpeed: p
        });
      }
    };
    S(0);
    return {
      calculatedDuration: null,
      next: t => {
        let n = false;
        if (!i && e === undefined) {
          n = true;
          b(t);
          S(t);
        }
        if (e !== undefined && t >= e) {
          return i.next(t - e);
        } else {
          if (!n) {
            b(t);
          }
          return f;
        }
      }
    };
  }
  N.applyToOptions = t => {
    let e = function (t, e = 100, i) {
      let n = i({
        ...t,
        keyframes: [0, e]
      });
      let r = Math.min(F(n), 20000);
      return {
        type: "keyframes",
        ease: t => n.next(r * t).value / e,
        duration: unitConversionUtils.convertToSeconds(r)
      };
    }(t, 100, N);
    t.ease = e.ease;
    t.duration = unitConversionUtils.convertToMilliseconds(e.duration);
    t.type = "keyframes";
    return t;
  };
  var cubicBezierEasingPresets = require("cubic-bezier-easing-presets") /*id: 13122*/;
  var nonNumericArrayCheck = require("non-numeric-array-check") /*id: 737446*/;
  var easingFunctionResolver = require("easing-function-resolver") /*id: 898748*/;
  var emptyObjectExport_2 = require("empty-object-export_2") /*id: 824789*/;
  var identityFunction = require("identity-function") /*id: 482695*/;
  var normalizeValueRange = require("normalize-value-range") /*id: 854139*/;
  function G(t) {
    let {
      duration: e = 300,
      keyframes: i,
      times: n,
      ease: r = "easeInOut"
    } = t;
    let s = nonNumericArrayCheck.isNonNumericArray(r) ? r.map(easingFunctionResolver.resolveEasing) : easingFunctionResolver.resolveEasing(r);
    let l = {
      done: false,
      value: i[0]
    };
    let u = function (t, e, {
      clamp: i = true,
      ease: n,
      mixer: r
    } = {}) {
      let s = t.length;
      stubFunctions.noopFunc(s === e.length, "Both input and output ranges must be the same length", "range-length");
      if (s === 1) {
        return () => e[0];
      }
      if (s === 2 && e[0] === e[1]) {
        return () => e[1];
      }
      let l = t[0] === t[1];
      if (t[0] > t[s - 1]) {
        t = [...t].reverse();
        e = [...e].reverse();
      }
      let u = function (t, e, i) {
        let n = [];
        let r = i || emptyObjectExport_2.emptyObject.mix || R;
        let s = t.length - 1;
        for (let i = 0; i < s; i++) {
          let s = r(t[i], t[i + 1]);
          if (e) {
            let t = Array.isArray(e) ? e[i] || identityFunction.identity : e;
            s = functionalPipeUtil.pipeFunctions(t, s);
          }
          n.push(s);
        }
        return n;
      }(e, n, r);
      let h = u.length;
      let c = i => {
        if (l && i < t[0]) {
          return e[0];
        }
        let n = 0;
        if (h > 1) {
          for (; n < t.length - 2 && !(i < t[n + 1]); n++);
        }
        let r = normalizeValueRange.normalizeValue(t[n], t[n + 1], i);
        return u[n](r);
      };
      if (i) {
        return e => c(clampNumber.clampNumber(t[0], t[s - 1], e));
      } else {
        return c;
      }
    }((n && n.length === i.length ? n : function (t) {
      let e = [0];
      (function (t, e) {
        let i = t[t.length - 1];
        for (let n = 1; n <= e; n++) {
          let r = normalizeValueRange.normalizeValue(0, e, n);
          t.push(interpolationHelper.interpolate(i, 1, r));
        }
      })(e, t.length - 1);
      return e;
    }(i)).map(t => t * e), i, {
      ease: Array.isArray(s) ? s : i.map(() => s || cubicBezierEasingPresets.easeInOutBezier).splice(0, i.length - 1)
    });
    return {
      calculatedDuration: e,
      next: t => {
        l.value = u(t);
        l.done = t >= e;
        return l;
      }
    };
  }
  let Q = t => t !== null;
  function J(t, e, i) {
    let {
      repeat: n,
      repeatType: r = "loop"
    } = e;
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    let o = t.filter(Q);
    let a = s < 0 || n && r !== "loop" && n % 2 == 1 ? 0 : o.length - 1;
    if (a && i !== undefined) {
      return i;
    } else {
      return o[a];
    }
  }
  let tt = {
    decay: z,
    inertia: z,
    tween: G,
    keyframes: G,
    spring: N
  };
  function te(t) {
    if (typeof t.type == "string") {
      t.type = tt[t.type];
    }
  }
  class ti {
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise(t => {
        this.resolve = t;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
    constructor() {
      this.updateFinished();
    }
  }
  let tn = t => t / 100;
  class tr extends ti {
    initAnimation() {
      let {
        options: t
      } = this;
      te(t);
      let {
        type: e = G,
        repeat: i = 0,
        repeatDelay: n = 0,
        repeatType: r,
        velocity: s = 0
      } = t;
      let {
        keyframes: a
      } = t;
      let l = e || G;
      if (l !== G && typeof a[0] != "number") {
        this.mixKeyframes = functionalPipeUtil.pipeFunctions(tn, R(a[0], a[1]));
        a = [0, 100];
      }
      let u = l({
        ...t,
        keyframes: a
      });
      if (r === "mirror") {
        this.mirroredGenerator = l({
          ...t,
          keyframes: [...a].reverse(),
          velocity: -s
        });
      }
      if (u.calculatedDuration === null) {
        u.calculatedDuration = F(u);
      }
      let {
        calculatedDuration: h
      } = u;
      this.calculatedDuration = h;
      this.resolvedDuration = h + n;
      this.totalDuration = this.resolvedDuration * (i + 1) - n;
      this.generator = u;
    }
    updateTime(t) {
      let e = Math.round(t - this.startTime) * this.playbackSpeed;
      if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = e;
      }
    }
    tick(t, e = false) {
      let {
        generator: i,
        totalDuration: n,
        mixKeyframes: r,
        mirroredGenerator: s,
        resolvedDuration: o,
        calculatedDuration: l
      } = this;
      if (this.startTime === null) {
        return i.next(0);
      }
      let {
        delay: u = 0,
        keyframes: h,
        repeat: d,
        repeatType: c,
        repeatDelay: p,
        type: m,
        onUpdate: f,
        finalKeyframe: v
      } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, t);
      } else if (this.speed < 0) {
        this.startTime = Math.min(t - n / this.speed, this.startTime);
      }
      if (e) {
        this.currentTime = t;
      } else {
        this.updateTime(t);
      }
      let g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1);
      let y = this.playbackSpeed >= 0 ? g < 0 : g > n;
      this.currentTime = Math.max(g, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = n;
      }
      let x = this.currentTime;
      let w = i;
      if (d) {
        let t = Math.min(this.currentTime, n) / o;
        let e = Math.floor(t);
        let i = t % 1;
        if (!i && t >= 1) {
          i = 1;
        }
        if (i === 1) {
          e--;
        }
        if ((e = Math.min(e, d + 1)) % 2) {
          if (c === "reverse") {
            i = 1 - i;
            if (p) {
              i -= p / o;
            }
          } else if (c === "mirror") {
            w = s;
          }
        }
        x = clampNumber.clampNumber(0, 1, i) * o;
      }
      let T = y ? {
        done: false,
        value: h[0]
      } : w.next(x);
      if (r) {
        T.value = r(T.value);
      }
      let {
        done: P
      } = T;
      if (!y && l !== null) {
        P = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0;
      }
      let b = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
      if (b && m !== z) {
        T.value = J(h, this.options, v, this.speed);
      }
      if (f) {
        f(T.value);
      }
      if (b) {
        this.finish();
      }
      return T;
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
    get duration() {
      return unitConversionUtils.convertToSeconds(this.calculatedDuration);
    }
    get time() {
      return unitConversionUtils.convertToSeconds(this.currentTime);
    }
    set time(t) {
      var e;
      t = unitConversionUtils.convertToMilliseconds(t);
      this.currentTime = t;
      if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
        this.holdTime = t;
      } else if (this.driver) {
        this.startTime = this.driver.now() - t / this.playbackSpeed;
      }
      if ((e = this.driver) !== null && e !== undefined) {
        e.start(false);
      }
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      this.updateTime(performanceTimingUtility.performanceTimer.now());
      let e = this.playbackSpeed !== t;
      this.playbackSpeed = t;
      if (e) {
        this.time = unitConversionUtils.convertToSeconds(this.currentTime);
      }
    }
    play() {
      var t;
      var e;
      if (this.isStopped) {
        return;
      }
      let {
        driver: i = L,
        startTime: n
      } = this.options;
      this.driver ||= i(t => this.tick(t));
      if ((t = (e = this.options).onPlay) !== null && t !== undefined) {
        t.call(e);
      }
      let r = this.driver.now();
      if (this.state === "finished") {
        this.updateFinished();
        this.startTime = r;
      } else if (this.holdTime !== null) {
        this.startTime = r - this.holdTime;
      } else {
        this.startTime ||= n ?? r;
      }
      if (this.state === "finished" && this.speed < 0) {
        this.startTime += this.calculatedDuration;
      }
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      this.state = "paused";
      this.updateTime(performanceTimingUtility.performanceTimer.now());
      this.holdTime = this.currentTime;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      var t;
      var e;
      this.notifyFinished();
      this.teardown();
      this.state = "finished";
      if ((t = (e = this.options).onComplete) !== null && t !== undefined) {
        t.call(e);
      }
    }
    cancel() {
      var t;
      var e;
      this.holdTime = null;
      this.startTime = 0;
      this.tick(0);
      this.teardown();
      if ((t = (e = this.options).onCancel) !== null && t !== undefined) {
        t.call(e);
      }
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.startTime = this.holdTime = null;
      animationFeatureFlags.animationFlags.mainThread--;
    }
    stopDriver() {
      if (this.driver) {
        this.driver.stop();
        this.driver = undefined;
      }
    }
    sample(t) {
      this.startTime = 0;
      return this.tick(t, true);
    }
    attachTimeline(t) {
      var e;
      if (this.options.allowFlatten) {
        this.options.type = "keyframes";
        this.options.ease = "linear";
        this.initAnimation();
      }
      if ((e = this.driver) !== null && e !== undefined) {
        e.stop();
      }
      return t.observe(this);
    }
    constructor(t) {
      super();
      this.state = "idle";
      this.startTime = null;
      this.isStopped = false;
      this.currentTime = 0;
      this.holdTime = null;
      this.playbackSpeed = 1;
      this.stop = () => {
        var t;
        var e;
        let {
          motionValue: i
        } = this.options;
        if (i && i.updatedAt !== performanceTimingUtility.performanceTimer.now()) {
          this.tick(performanceTimingUtility.performanceTimer.now());
        }
        this.isStopped = true;
        if (this.state !== "idle") {
          this.teardown();
          if ((t = (e = this.options).onStop) !== null && t !== undefined) {
            t.call(e);
          }
        }
      };
      animationFeatureFlags.animationFlags.mainThread++;
      this.options = t;
      this.initAnimation();
      this.play();
      if (t.autoplay === false) {
        this.pause();
      }
    }
  }
  var keyframeResolutionScheduler = require("keyframe-resolution-scheduler") /*id: 115131*/;
  let to = t => t.startsWith("--");
  var lazyInitializerFactory = require("lazy-initializer-factory") /*id: 846121*/;
  let tl = lazyInitializerFactory.createLazyInitializer(() => window.ScrollTimeline !== undefined);
  var projectionMetricsState = require("projection-metrics-state") /*id: 7808*/;
  var arrayNumberCheckUtil = require("array-number-check-util") /*id: 671127*/;
  let td = {};
  let tc = function (t, e) {
    let i = lazyInitializerFactory.createLazyInitializer(t);
    return () => {
      return td[e] ?? i();
    };
  }(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (t) {
      return false;
    }
    return true;
  }, "linearEasing");
  let tp = t => {
    let [e, i, n, r] = t;
    return `cubic-bezier(${e}, ${i}, ${n}, ${r})`;
  };
  let tm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: tp([0, 0.65, 0.55, 1]),
    circOut: tp([0.55, 0, 1, 0.45]),
    backIn: tp([0.31, 0.01, 0.66, -0.59]),
    backOut: tp([0.33, 1.53, 0.69, 0.99])
  };
  function tf(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  class tv extends ti {
    play() {
      if (!this.isStopped) {
        this.animation.play();
        if (this.state === "finished") {
          this.updateFinished();
        }
      }
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      var t;
      var e;
      if ((t = (e = this.animation).finish) !== null && t !== undefined) {
        t.call(e);
      }
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (t) {}
    }
    stop() {
      if (this.isStopped) {
        return;
      }
      this.isStopped = true;
      let {
        state: t
      } = this;
      if (t !== "idle" && t !== "finished") {
        if (this.updateMotionValue) {
          this.updateMotionValue();
        } else {
          this.commitStyles();
        }
        if (!this.isPseudoElement) {
          this.cancel();
        }
      }
    }
    commitStyles() {
      if (!this.isPseudoElement) {
        var t;
        var e;
        if ((t = (e = this.animation).commitStyles) !== null && t !== undefined) {
          t.call(e);
        }
      }
    }
    get duration() {
      var t;
      var e;
      let i = ((e = this.animation.effect) === null || e === undefined ? undefined : (t = e.getComputedTiming) === null || t === undefined ? undefined : t.call(e).duration) || 0;
      return unitConversionUtils.convertToSeconds(Number(i));
    }
    get time() {
      return unitConversionUtils.convertToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
      this.finishedTime = null;
      this.animation.currentTime = unitConversionUtils.convertToMilliseconds(t);
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(t) {
      if (t < 0) {
        this.finishedTime = null;
      }
      this.animation.playbackRate = t;
    }
    get state() {
      if (this.finishedTime !== null) {
        return "finished";
      } else {
        return this.animation.playState;
      }
    }
    get startTime() {
      return Number(this.animation.startTime);
    }
    set startTime(t) {
      this.animation.startTime = t;
    }
    attachTimeline(t) {
      let {
        timeline: e,
        observe: i
      } = t;
      if (this.allowFlatten) {
        var n;
        if ((n = this.animation.effect) !== null && n !== undefined) {
          n.updateTiming({
            easing: "linear"
          });
        }
      }
      this.animation.onfinish = null;
      if (e && tl()) {
        this.animation.timeline = e;
        return identityFunction.identity;
      } else {
        return i(this);
      }
    }
    constructor(t) {
      super();
      this.finishedTime = null;
      this.isStopped = false;
      if (!t) {
        return;
      }
      let {
        element: e,
        name: i,
        keyframes: n,
        pseudoElement: r,
        allowFlatten: s = false,
        finalKeyframe: o,
        onComplete: a
      } = t;
      this.isPseudoElement = !!r;
      this.allowFlatten = s;
      this.options = t;
      stubFunctions.noopFunc(typeof t.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
      let l = function (t) {
        var e;
        var i;
        let {
          type: n,
          ...r
        } = t;
        if (tf(n) && tc()) {
          return n.applyToOptions(r);
        } else {
          if ((e = r.duration) === null || e === undefined) {
            r.duration = 300;
          }
          if ((i = r.ease) === null || i === undefined) {
            r.ease = "easeOut";
          }
          return r;
        }
      }(t);
      this.animation = function (t, e, i, {
        delay: n = 0,
        duration: r = 300,
        repeat: s = 0,
        repeatType: o = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, u = undefined) {
        let d = {
          [e]: i
        };
        if (l) {
          d.offset = l;
        }
        let c = function t(e, i) {
          if (e) {
            if (typeof e == "function") {
              if (tc()) {
                return j(e, i);
              } else {
                return "ease-out";
              }
            } else if (arrayNumberCheckUtil.isNumberArray(e)) {
              return tp(e);
            } else if (Array.isArray(e)) {
              return e.map(e => t(e, i) || tm.easeOut);
            } else {
              return tm[e];
            }
          }
        }(a, r);
        if (Array.isArray(c)) {
          d.easing = c;
        }
        if (projectionMetricsState.getProjectionMetrics.value) {
          animationFeatureFlags.animationFlags.waapi++;
        }
        let p = {
          delay: n,
          duration: r,
          easing: Array.isArray(c) ? "linear" : c,
          fill: "both",
          iterations: s + 1,
          direction: o === "reverse" ? "alternate" : "normal"
        };
        if (u) {
          p.pseudoElement = u;
        }
        let m = t.animate(d, p);
        if (projectionMetricsState.getProjectionMetrics.value) {
          m.finished.finally(() => {
            animationFeatureFlags.animationFlags.waapi--;
          });
        }
        return m;
      }(e, i, n, l, r);
      if (l.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = () => {
        this.finishedTime = this.time;
        if (!r) {
          let t = J(n, this.options, o, this.speed);
          if (this.updateMotionValue) {
            this.updateMotionValue(t);
          } else if (to(i)) {
            e.style.setProperty(i, t);
          } else {
            e.style[i] = t;
          }
          this.animation.cancel();
        }
        if (a != null) {
          a();
        }
        this.notifyFinished();
      };
    }
  }
  var cubicBezierEasingUtil = require("cubic-bezier-easing-util") /*id: 750010*/;
  var cubicBezierEasingFns = require("cubic-bezier-easing-fns") /*id: 348834*/;
  var easingFunctionVariants = require("easing-function-variants") /*id: 74618*/;
  let tw = {
    anticipate: cubicBezierEasingUtil.cubicEasingFn,
    backInOut: cubicBezierEasingFns.easeInOutWrapper,
    circInOut: easingFunctionVariants.easeInOutVariant
  };
  class tT extends tv {
    updateMotionValue(t) {
      let {
        motionValue: i,
        onUpdate: n,
        onComplete: r,
        element: s,
        ...o
      } = this.options;
      if (!i) {
        return;
      }
      if (t !== undefined) {
        i.set(t);
        return;
      }
      let a = new tr({
        ...o,
        autoplay: false
      });
      let u = unitConversionUtils.convertToMilliseconds(this.finishedTime ?? this.time);
      i.setWithVelocity(a.sample(u - 10).value, a.sample(u).value, 10);
      a.stop();
    }
    constructor(t) {
      var e;
      if (typeof (e = t).ease == "string" && e.ease in tw) {
        e.ease = tw[e.ease];
      }
      te(t);
      super(t);
      if (t.startTime) {
        this.startTime = t.startTime;
      }
      this.options = t;
    }
  }
  let tP = (t, e) => e !== "zIndex" && (typeof t == "number" || !!Array.isArray(t) || typeof t == "string" && (!!cssValueParser_1.cssValueTransformer.test(t) || t === "0") && !t.startsWith("url("));
  let tb = new Set(["opacity", "clipPath", "filter", "transform"]);
  let tS = lazyInitializerFactory.createLazyInitializer(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  class tA extends ti {
    onKeyframesResolved(t, e, i, n) {
      this.keyframeResolver = undefined;
      let {
        name: s,
        type: o,
        velocity: a,
        delay: l,
        isHandoff: h,
        onUpdate: c
      } = i;
      this.resolvedAt = performanceTimingUtility.performanceTimer.now();
      if (!function (t, e, i, n) {
        let r = t[0];
        if (r === null) {
          return false;
        }
        if (e === "display" || e === "visibility") {
          return true;
        }
        let s = t[t.length - 1];
        let o = tP(r, e);
        let a = tP(s, e);
        stubFunctions.stubHandler(o === a, `You are trying to animate ${e} from "${r}" to "${s}". "${o ? s : r}" is not an animatable value.`, "value-not-animatable");
        return !!o && !!a && (function (t) {
          let e = t[0];
          if (t.length === 1) {
            return true;
          }
          for (let i = 0; i < t.length; i++) {
            if (t[i] !== e) {
              return true;
            }
          }
        }(t) || (i === "spring" || tf(i)) && n);
      }(t, s, o, a)) {
        if (emptyObjectExport_2.emptyObject.instantAnimations || !l) {
          if (c != null) {
            c(J(t, i, e));
          }
        }
        t[0] = t[t.length - 1];
        r(i);
        i.repeat = 0;
      }
      let p = {
        startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : undefined,
        finalKeyframe: e,
        ...i,
        keyframes: t
      };
      let m = !h && function (t) {
        let {
          motionValue: i,
          name: n,
          repeatDelay: r,
          repeatType: s,
          damping: o,
          type: a
        } = t;
        if (!((i == null ? undefined : i.owner?.current) instanceof HTMLElement)) {
          return false;
        }
        let {
          onUpdate: l,
          transformTemplate: u
        } = i.owner.getProps();
        return tS() && n && tb.has(n) && (n !== "transform" || !u) && !l && !r && s !== "mirror" && o !== 0 && a !== "inertia";
      }(p) ? new tT({
        ...p,
        element: p.motionValue.owner.current
      }) : new tr(p);
      m.finished.then(() => this.notifyFinished()).catch(identityFunction.identity);
      if (this.pendingTimeline) {
        this.stopTimeline = m.attachTimeline(this.pendingTimeline);
        this.pendingTimeline = undefined;
      }
      this._animation = m;
    }
    get finished() {
      if (this._animation) {
        return this.animation.finished;
      } else {
        return this._finished;
      }
    }
    then(t, e) {
      return this.finished.finally(t).then(() => {});
    }
    get animation() {
      if (!this._animation) {
        var t;
        if ((t = this.keyframeResolver) !== null && t !== undefined) {
          t.resume();
        }
        keyframeResolutionScheduler.resolveKeyframesImmediately();
      }
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t) {
      this.animation.time = t;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t) {
      this.animation.speed = t;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t) {
      if (this._animation) {
        this.stopTimeline = this.animation.attachTimeline(t);
      } else {
        this.pendingTimeline = t;
      }
      return () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      var t;
      if (this._animation) {
        this.animation.cancel();
      }
      if ((t = this.keyframeResolver) !== null && t !== undefined) {
        t.cancel();
      }
    }
    constructor({
      autoplay: t = true,
      delay: e = 0,
      type: i = "keyframes",
      repeat: n = 0,
      repeatDelay: r = 0,
      repeatType: s = "loop",
      keyframes: o,
      name: a,
      motionValue: l,
      element: h,
      ...d
    }) {
      var c;
      super();
      this.stop = () => {
        var t;
        var e;
        if (this._animation) {
          this._animation.stop();
          if ((e = this.stopTimeline) !== null && e !== undefined) {
            e.call(this);
          }
        }
        if ((t = this.keyframeResolver) !== null && t !== undefined) {
          t.cancel();
        }
      };
      this.createdAt = performanceTimingUtility.performanceTimer.now();
      let p = {
        autoplay: t,
        delay: e,
        type: i,
        repeat: n,
        repeatDelay: r,
        repeatType: s,
        name: a,
        motionValue: l,
        element: h,
        ...d
      };
      let m = (h == null ? undefined : h.KeyframeResolver) || keyframeResolutionScheduler.KeyframeResolver;
      this.keyframeResolver = new m(o, (t, e, i) => this.onKeyframesResolved(t, e, p, !i), a, l, h);
      if ((c = this.keyframeResolver) !== null && c !== undefined) {
        c.scheduleResolve();
      }
    }
  }
  let tM = t => t !== null;
  var cssTransformProps_1 = require("css-transform-props_1") /*id: 736118*/;
  let tC = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  let tE = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? Math.sqrt(550) * 2 : 30,
    restSpeed: 10
  });
  let tV = {
    type: "keyframes",
    duration: 0.8
  };
  let tD = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  let tR = (t, e) => {
    let {
      keyframes: i
    } = e;
    if (i.length > 2) {
      return tV;
    } else if (cssTransformProps_1.transformSet.has(t)) {
      if (t.startsWith("scale")) {
        return tE(i[1]);
      } else {
        return tC;
      }
    } else {
      return tD;
    }
  };
  let tL = function (t, e, i, o = {}, a, u) {
    return h => {
      let d = safePropertyAccess.resolveValue(o, t) || {};
      let c = d.delay || o.delay || 0;
      let {
        elapsed: p = 0
      } = o;
      p -= unitConversionUtils.convertToMilliseconds(c);
      let m = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: t => {
          e.set(t);
          if (d.onUpdate) {
            d.onUpdate(t);
          }
        },
        onComplete: () => {
          h();
          if (d.onComplete) {
            d.onComplete();
          }
        },
        name: t,
        motionValue: e,
        element: u ? undefined : a
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
          ...d
        } = t;
        return !!Object.keys(d).length;
      }(d)) {
        Object.assign(m, tR(t, m));
      }
      m.duration &&= unitConversionUtils.convertToMilliseconds(m.duration);
      m.repeatDelay &&= unitConversionUtils.convertToMilliseconds(m.repeatDelay);
      if (m.from !== undefined) {
        m.keyframes[0] = m.from;
      }
      let f = false;
      if (m.type === false || m.duration === 0 && !m.repeatDelay) {
        r(m);
        if (m.delay === 0) {
          f = true;
        }
      }
      if (emptyObjectExport_2.emptyObject.instantAnimations || emptyObjectExport_2.emptyObject.skipAnimations) {
        f = true;
        r(m);
        m.delay = 0;
      }
      m.allowFlatten = !d.type && !d.ease;
      if (f && !u && e.get() !== undefined) {
        let t = function (t, e, i) {
          let {
            repeat: n,
            repeatType: r = "loop"
          } = e;
          let s = t.filter(tM);
          let o = n && r !== "loop" && n % 2 == 1 ? 0 : s.length - 1;
          return s[o];
        }(m.keyframes, d);
        if (t !== undefined) {
          frameloopSchedulerUtils.scheduleFrame.update(() => {
            m.onUpdate(t);
            m.onComplete();
          });
          return;
        }
      }
      if (d.isSync) {
        return new tr(m);
      } else {
        return new tA(m);
      }
    };
  };
  require.d(exports, {
    createAnimation: function () {
      return tL;
    }
  });
}