// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'createAnimation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 905602
         */
module.exports = function (module, exports, require) {
  var exportResolveUtil = require("export-resolve-util") /*id: 809859*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  var functionalPipeUtil = require("functional-pipe-util") /*id: 251317*/;
  var clampNumber = require("clamp-number") /*id: 887362*/;
  var unitConversionUtils = require("unit-conversion-utils") /*id: 60508*/;
  var frameTimeCache = require("frame-time-cache") /*id: 33311*/;
  var threadLimitConfig = require("thread-limit-config") /*id: 437700*/;
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var cssCustomPropertyValidator = require("css-custom-property-validator") /*id: 257467*/;
  var colorParserAndTransformer = require("color-parser-and-transformer") /*id: 719203*/;
  var cssValueParser_2 = require("css-value-parser_2") /*id: 584871*/;
  var hexColorParserAndTransformer = require("hex-color-parser-and-transformer") /*id: 316398*/;
  var hslColorFormatter = require("hsl-color-formatter") /*id: 457430*/;
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
  var rgbColorTransformer = require("rgb-color-transformer") /*id: 453160*/;
  function y(t, e) {
    return i => i > 0 ? e : t;
  }
  var linearInterpolation = require("linear-interpolation") /*id: 745679*/;
  let w = (t, e, i) => {
    let n = t * t;
    let r = i * (e * e - n) + n;
    if (r < 0) {
      return 0;
    } else {
      return Math.sqrt(r);
    }
  };
  let b = [hexColorParserAndTransformer.hexColorParser, rgbColorTransformer.rgbColorTransformer, hslColorFormatter.hslColorFormatter];
  let A = t => b.find(e => e.test(t));
  function P(t) {
    let e = A(t);
    stubFunctions.stubHandler(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
    if (!e) {
      return false;
    }
    let i = e.parse(t);
    if (e === hslColorFormatter.hslColorFormatter) {
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
  let T = (t, e) => {
    let i = P(t);
    let n = P(e);
    if (!i || !n) {
      return y(t, e);
    }
    let r = {
      ...i
    };
    return t => {
      r.red = w(i.red, n.red, t);
      r.green = w(i.green, n.green, t);
      r.blue = w(i.blue, n.blue, t);
      r.alpha = linearInterpolation.linearInterpolate(i.alpha, n.alpha, t);
      return rgbColorTransformer.rgbColorTransformer.transform(r);
    };
  };
  let S = new Set(["none", "hidden"]);
  function E(t, e) {
    return i => linearInterpolation.linearInterpolate(t, e, i);
  }
  function k(t) {
    if (typeof t == "number") {
      return E;
    } else if (typeof t == "string") {
      if (cssCustomPropertyValidator.isValidVarSyntax(t)) {
        return y;
      } else if (colorParserAndTransformer.colorParser.test(t)) {
        return T;
      } else {
        return F;
      }
    } else if (Array.isArray(t)) {
      return M;
    } else if (typeof t == "object") {
      if (colorParserAndTransformer.colorParser.test(t)) {
        return T;
      } else {
        return C;
      }
    } else {
      return y;
    }
  }
  function M(t, e) {
    let i = [...t];
    let n = i.length;
    let r = t.map((t, i) => k(t)(t, e[i]));
    return t => {
      for (let e = 0; e < n; e++) {
        i[e] = r[e](t);
      }
      return i;
    };
  }
  function C(t, e) {
    let i = {
      ...t,
      ...e
    };
    let n = {};
    for (let r in i) {
      if (t[r] !== undefined && e[r] !== undefined) {
        n[r] = k(t[r])(t[r], e[r]);
      }
    }
    return t => {
      for (let e in n) {
        i[e] = n[e](t);
      }
      return i;
    };
  }
  let F = (t, e) => {
    let i = cssValueParser_2.cssValueHandler.createTransformer(e);
    let n = cssValueParser_2.parseStyleValues(t);
    let r = cssValueParser_2.parseStyleValues(e);
    if (n.indexes.var.length !== r.indexes.var.length || n.indexes.color.length !== r.indexes.color.length || !(n.indexes.number.length >= r.indexes.number.length)) {
      stubFunctions.stubHandler(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return y(t, e);
    }
    if (S.has(t) && !r.values.length || S.has(e) && !n.values.length) {
      if (S.has(t)) {
        return i => i <= 0 ? t : e;
      } else {
        return i => i >= 1 ? e : t;
      }
    }
    return functionalPipeUtil.pipeFunctions(M(function (t, e) {
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
      return linearInterpolation.linearInterpolate(t, e, i);
    } else {
      return k(t)(t, e);
    }
  }
  let V = t => {
    let e = e => {
      let {
        timestamp: i
      } = e;
      return t(i);
    };
    return {
      start: function () {
        let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        return frameloopSchedulerUtils_1.scheduleFrame.update(e, t);
      },
      stop: () => frameloopSchedulerUtils_1.cancelFrame(e),
      now: () => frameloopSchedulerUtils_1.frameState.isProcessing ? frameloopSchedulerUtils_1.frameState.timestamp : frameTimeCache.frameTimeCache.now()
    };
  };
  let D = function (t, e, i = 10) {
    let n = "";
    let r = Math.max(Math.round(e / i), 2);
    for (let e = 0; e < r; e++) {
      n += Math.round(t(e / (r - 1)) * 10000) / 10000 + ", ";
    }
    return `linear(${n.substring(0, n.length - 2)})`;
  };
  function j(t) {
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
  function $(t, e, i) {
    let n = Math.max(e - 5, 0);
    return calculateFpsFromFrameTime.calculateFps(i - t(n), e - n);
  }
  let O = {
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
  function B(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  let I = ["duration", "bounce"];
  let W = ["stiffness", "damping", "mass"];
  function U(t, e) {
    return e.some(e => t[e] !== undefined);
  }
  function _() {
    let t;
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : O.visualDuration;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : O.bounce;
    let n = typeof e != "object" ? {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: i
    } : e;
    let {
      restSpeed: r,
      restDelta: s
    } = n;
    let l = n.keyframes[0];
    let u = n.keyframes[n.keyframes.length - 1];
    let c = {
      done: false,
      value: l
    };
    let {
      stiffness: d,
      damping: p,
      mass: f,
      duration: m,
      velocity: g,
      isResolvedFromDuration: v
    } = function (t) {
      let e = {
        velocity: O.velocity,
        stiffness: O.stiffness,
        damping: O.damping,
        mass: O.mass,
        isResolvedFromDuration: false,
        ...t
      };
      if (!U(t, W) && U(t, I)) {
        if (t.visualDuration) {
          let i = Math.PI * 2 / (t.visualDuration * 1.2);
          let n = i * i;
          let r = clampNumber.clampNumber(0.05, 1, 1 - (t.bounce || 0)) * 2 * Math.sqrt(n);
          e = {
            ...e,
            mass: O.mass,
            stiffness: n,
            damping: r
          };
        } else {
          let i = function (t) {
            let e;
            let i;
            let {
              duration: n = O.duration,
              bounce: r = O.bounce,
              velocity: s = O.velocity,
              mass: l = O.mass
            } = t;
            stubFunctions.stubHandler(n <= unitConversionUtils.convertToMilliseconds(O.maxDuration), "Spring duration must be 10 seconds or less");
            let u = 1 - r;
            u = clampNumber.clampNumber(O.minDamping, O.maxDamping, u);
            n = clampNumber.clampNumber(O.minDuration, O.maxDuration, unitConversionUtils.convertToSeconds(n));
            if (u < 1) {
              e = t => {
                let e = t * u;
                let i = e * n;
                return 0.001 - (e - s) / B(t, u) * Math.exp(-i);
              };
              i = t => {
                let i = t * u * n;
                let r = Math.pow(u, 2) * Math.pow(t, 2) * n;
                let o = Math.exp(-i);
                let a = B(Math.pow(t, 2), u);
                return (i * s + s - r) * o * (-e(t) + 0.001 > 0 ? -1 : 1) / a;
              };
            } else {
              e = t => -0.001 + Math.exp(-t * n) * ((t - s) * n + 1);
              i = t => n * n * (s - t) * Math.exp(-t * n);
            }
            let c = function (t, e, i) {
              let n = i;
              for (let i = 1; i < 12; i++) {
                n -= t(n) / e(n);
              }
              return n;
            }(e, i, 5 / n);
            n = unitConversionUtils.convertToMilliseconds(n);
            if (isNaN(c)) {
              return {
                stiffness: O.stiffness,
                damping: O.damping,
                duration: n
              };
            }
            {
              let t = Math.pow(c, 2) * l;
              return {
                stiffness: t,
                damping: u * 2 * Math.sqrt(l * t),
                duration: n
              };
            }
          }(t);
          (e = {
            ...e,
            ...i,
            mass: O.mass
          }).isResolvedFromDuration = true;
        }
      }
      return e;
    }({
      ...n,
      velocity: -unitConversionUtils.convertToSeconds(n.velocity || 0)
    });
    let y = g || 0;
    let x = p / (Math.sqrt(d * f) * 2);
    let w = u - l;
    let b = unitConversionUtils.convertToSeconds(Math.sqrt(d / f));
    let A = Math.abs(w) < 5;
    r ||= A ? O.restSpeed.granular : O.restSpeed.default;
    s ||= A ? O.restDelta.granular : O.restDelta.default;
    if (x < 1) {
      let e = B(b, x);
      t = t => u - Math.exp(-x * b * t) * ((y + x * b * w) / e * Math.sin(e * t) + w * Math.cos(e * t));
    } else if (x === 1) {
      t = t => u - Math.exp(-b * t) * (w + (y + b * w) * t);
    } else {
      let e = b * Math.sqrt(x * x - 1);
      t = t => {
        let i = Math.exp(-x * b * t);
        let n = Math.min(e * t, 300);
        return u - i * ((y + x * b * w) * Math.sinh(n) + e * w * Math.cosh(n)) / e;
      };
    }
    let P = {
      calculatedDuration: v && m || null,
      next: e => {
        let i = t(e);
        if (v) {
          c.done = e >= m;
        } else {
          let n = e === 0 ? y : 0;
          if (x < 1) {
            n = e === 0 ? unitConversionUtils.convertToMilliseconds(y) : $(t, e, i);
          }
          let o = Math.abs(n) <= r;
          let l = Math.abs(u - i) <= s;
          c.done = o && l;
        }
        c.value = c.done ? u : i;
        return c;
      },
      toString: () => {
        let t = Math.min(j(P), 20000);
        let e = D(e => P.next(t * e).value, t, 30);
        return t + "ms " + e;
      },
      toTransition: () => {}
    };
    return P;
  }
  function N(t) {
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
    let f = n[0];
    let m = {
      done: false,
      value: f
    };
    let g = t => h !== undefined && t < h || c !== undefined && t > c;
    let v = t => h === undefined ? c : c === undefined ? h : Math.abs(h - t) < Math.abs(c - t) ? h : c;
    let y = s * r;
    let x = f + y;
    let w = u === undefined ? x : u(x);
    if (w !== x) {
      y = w - f;
    }
    let b = t => -y * Math.exp(-t / o);
    let A = t => w + b(t);
    let P = t => {
      let e = b(t);
      let i = A(t);
      m.done = Math.abs(e) <= d;
      m.value = m.done ? w : i;
    };
    let T = t => {
      if (g(m.value)) {
        e = t;
        i = _({
          keyframes: [m.value, v(m.value)],
          velocity: $(A, t, m.value),
          damping: a,
          stiffness: l,
          restDelta: d,
          restSpeed: p
        });
      }
    };
    T(0);
    return {
      calculatedDuration: null,
      next: t => {
        let n = false;
        if (!i && e === undefined) {
          n = true;
          P(t);
          T(t);
        }
        if (e !== undefined && t >= e) {
          return i.next(t - e);
        } else {
          if (!n) {
            P(t);
          }
          return m;
        }
      }
    };
  }
  _.applyToOptions = t => {
    let e = function (t, e = 100, i) {
      let n = i({
        ...t,
        keyframes: [0, e]
      });
      let r = Math.min(j(n), 20000);
      return {
        type: "keyframes",
        ease: t => n.next(r * t).value / e,
        duration: unitConversionUtils.convertToSeconds(r)
      };
    }(t, 100, _);
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
  function q(t) {
    let {
      duration: e = 300,
      keyframes: i,
      times: n,
      ease: r = "easeInOut"
    } = t;
    let a = nonNumericArrayCheck.isNonNumericArray(r) ? r.map(easingFunctionResolver.resolveEasing) : easingFunctionResolver.resolveEasing(r);
    let l = {
      done: false,
      value: i[0]
    };
    let u = function (t, e, {
      clamp: i = true,
      ease: n,
      mixer: r
    } = {}) {
      let a = t.length;
      stubFunctions.noopFunc(a === e.length, "Both input and output ranges must be the same length");
      if (a === 1) {
        return () => e[0];
      }
      if (a === 2 && e[0] === e[1]) {
        return () => e[1];
      }
      let l = t[0] === t[1];
      if (t[0] > t[a - 1]) {
        t = [...t].reverse();
        e = [...e].reverse();
      }
      let u = function (t, e, i) {
        let n = [];
        let r = i || emptyObjectExport_2.emptyObject.mix || R;
        let o = t.length - 1;
        for (let i = 0; i < o; i++) {
          let o = r(t[i], t[i + 1]);
          if (e) {
            let t = Array.isArray(e) ? e[i] || identityFunction.identity : e;
            o = functionalPipeUtil.pipeFunctions(t, o);
          }
          n.push(o);
        }
        return n;
      }(e, n, r);
      let c = u.length;
      let d = i => {
        if (l && i < t[0]) {
          return e[0];
        }
        let n = 0;
        if (c > 1) {
          for (; n < t.length - 2 && !(i < t[n + 1]); n++);
        }
        let r = normalizeValueRange.normalizeValue(t[n], t[n + 1], i);
        return u[n](r);
      };
      if (i) {
        return e => d(clampNumber.clampNumber(t[0], t[a - 1], e));
      } else {
        return d;
      }
    }((n && n.length === i.length ? n : function (t) {
      let e = [0];
      (function (t, e) {
        let i = t[t.length - 1];
        for (let n = 1; n <= e; n++) {
          let r = normalizeValueRange.normalizeValue(0, e, n);
          t.push(linearInterpolation.linearInterpolate(i, 1, r));
        }
      })(e, t.length - 1);
      return e;
    }(i)).map(t => t * e), i, {
      ease: Array.isArray(a) ? a : i.map(() => a || cubicBezierEasingPresets.easeInOutBezier).splice(0, i.length - 1)
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
  let G = t => t !== null;
  function J(t, e, i) {
    let {
      repeat: n,
      repeatType: r = "loop"
    } = e;
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    let o = t.filter(G);
    let a = s < 0 || n && r !== "loop" && n % 2 == 1 ? 0 : o.length - 1;
    if (a && i !== undefined) {
      return i;
    } else {
      return o[a];
    }
  }
  let Q = {
    decay: N,
    inertia: N,
    tween: q,
    keyframes: q,
    spring: _
  };
  function tt(t) {
    if (typeof t.type == "string") {
      t.type = Q[t.type];
    }
  }
  class te {
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
  let ti = t => t / 100;
  class tn extends te {
    initAnimation() {
      let {
        options: t
      } = this;
      tt(t);
      let {
        type: e = q,
        repeat: i = 0,
        repeatDelay: n = 0,
        repeatType: r,
        velocity: o = 0
      } = t;
      let {
        keyframes: a
      } = t;
      let l = e || q;
      if (l !== q && typeof a[0] != "number") {
        this.mixKeyframes = functionalPipeUtil.pipeFunctions(ti, R(a[0], a[1]));
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
          velocity: -o
        });
      }
      if (u.calculatedDuration === null) {
        u.calculatedDuration = j(u);
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
        resolvedDuration: a,
        calculatedDuration: l
      } = this;
      if (this.startTime === null) {
        return i.next(0);
      }
      let {
        delay: u = 0,
        keyframes: h,
        repeat: c,
        repeatType: d,
        repeatDelay: p,
        type: f,
        onUpdate: m,
        finalKeyframe: g
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
      let v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1);
      let y = this.playbackSpeed >= 0 ? v < 0 : v > n;
      this.currentTime = Math.max(v, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = n;
      }
      let x = this.currentTime;
      let w = i;
      if (c) {
        let t = Math.min(this.currentTime, n) / a;
        let e = Math.floor(t);
        let i = t % 1;
        if (!i && t >= 1) {
          i = 1;
        }
        if (i === 1) {
          e--;
        }
        if ((e = Math.min(e, c + 1)) % 2) {
          if (d === "reverse") {
            i = 1 - i;
            if (p) {
              i -= p / a;
            }
          } else if (d === "mirror") {
            w = s;
          }
        }
        x = clampNumber.clampNumber(0, 1, i) * a;
      }
      let b = y ? {
        done: false,
        value: h[0]
      } : w.next(x);
      if (r) {
        b.value = r(b.value);
      }
      let {
        done: A
      } = b;
      if (!y && l !== null) {
        A = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0;
      }
      let P = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
      if (P && f !== N) {
        b.value = J(h, this.options, g, this.speed);
      }
      if (m) {
        m(b.value);
      }
      if (P) {
        this.finish();
      }
      return b;
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
      this.updateTime(frameTimeCache.frameTimeCache.now());
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
        driver: i = V,
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
      this.updateTime(frameTimeCache.frameTimeCache.now());
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
      threadLimitConfig.threadLimitConfig.mainThread--;
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
        if (i && i.updatedAt !== frameTimeCache.frameTimeCache.now()) {
          this.tick(frameTimeCache.frameTimeCache.now());
        }
        this.isStopped = true;
        if (this.state !== "idle") {
          this.teardown();
          if ((t = (e = this.options).onStop) !== null && t !== undefined) {
            t.call(e);
          }
        }
      };
      threadLimitConfig.threadLimitConfig.mainThread++;
      this.options = t;
      this.initAnimation();
      this.play();
      if (t.autoplay === false) {
        this.pause();
      }
    }
  }
  var keyframeResolverCore = require("keyframe-resolver-core") /*id: 717903*/;
  let ts = t => t.startsWith("--");
  var lazyInitializerFactory = require("lazy-initializer-factory") /*id: 846121*/;
  let ta = lazyInitializerFactory.createLazyInitializer(() => window.ScrollTimeline !== undefined);
  var projectionMetrics = require("projection-metrics") /*id: 976578*/;
  var arrayNumberCheckUtil = require("array-number-check-util") /*id: 671127*/;
  let th = {};
  let tc = function (t, e) {
    let i = lazyInitializerFactory.createLazyInitializer(t);
    return () => {
      return th[e] ?? i();
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
  let td = t => {
    let [e, i, n, r] = t;
    return `cubic-bezier(${e}, ${i}, ${n}, ${r})`;
  };
  let tp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: td([0, 0.65, 0.55, 1]),
    circOut: td([0.55, 0, 1, 0.45]),
    backIn: td([0.31, 0.01, 0.66, -0.59]),
    backOut: td([0.33, 1.53, 0.69, 0.99])
  };
  function tf(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  class tm extends te {
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
      if (e && ta()) {
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
      stubFunctions.noopFunc(typeof t.type != "string", "animateMini doesn't support \"type\" as a string. Did you mean to import { spring } from \"motion\"?");
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
      } = {}, h = undefined) {
        let c = {
          [e]: i
        };
        if (l) {
          c.offset = l;
        }
        let d = function t(e, i) {
          if (e) {
            if (typeof e == "function") {
              if (tc()) {
                return D(e, i);
              } else {
                return "ease-out";
              }
            } else if (arrayNumberCheckUtil.isNumberArray(e)) {
              return td(e);
            } else if (Array.isArray(e)) {
              return e.map(e => t(e, i) || tp.easeOut);
            } else {
              return tp[e];
            }
          }
        }(a, r);
        if (Array.isArray(d)) {
          c.easing = d;
        }
        if (projectionMetrics.projectionMetrics.value) {
          threadLimitConfig.threadLimitConfig.waapi++;
        }
        let p = {
          delay: n,
          duration: r,
          easing: Array.isArray(d) ? "linear" : d,
          fill: "both",
          iterations: s + 1,
          direction: o === "reverse" ? "alternate" : "normal"
        };
        if (h) {
          p.pseudoElement = h;
        }
        let f = t.animate(c, p);
        if (projectionMetrics.projectionMetrics.value) {
          f.finished.finally(() => {
            threadLimitConfig.threadLimitConfig.waapi--;
          });
        }
        return f;
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
          } else if (ts(i)) {
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
  let tx = {
    anticipate: cubicBezierEasingUtil.cubicEasingFn,
    backInOut: cubicBezierEasingFns.easeInOutWrapper,
    circInOut: easingFunctionVariants.easeInOutVariant
  };
  class tw extends tm {
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
      let l = new tn({
        ...o,
        autoplay: false
      });
      let u = unitConversionUtils.convertToMilliseconds(this.finishedTime ?? this.time);
      i.setWithVelocity(l.sample(u - 10).value, l.sample(u).value, 10);
      l.stop();
    }
    constructor(t) {
      var e;
      if (typeof (e = t).ease == "string" && e.ease in tx) {
        e.ease = tx[e.ease];
      }
      tt(t);
      super(t);
      if (t.startTime) {
        this.startTime = t.startTime;
      }
      this.options = t;
    }
  }
  let tb = (t, e) => e !== "zIndex" && (typeof t == "number" || !!Array.isArray(t) || typeof t == "string" && (!!cssValueParser_2.cssValueHandler.test(t) || t === "0") && !t.startsWith("url("));
  var isDomElementChecker = require("is-dom-element-checker") /*id: 34457*/;
  let tP = new Set(["opacity", "clipPath", "filter", "transform"]);
  let tT = lazyInitializerFactory.createLazyInitializer(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  class tS extends te {
    onKeyframesResolved(t, e, i, n) {
      this.keyframeResolver = undefined;
      let {
        name: r,
        type: s,
        velocity: o,
        delay: a,
        isHandoff: u,
        onUpdate: c
      } = i;
      this.resolvedAt = frameTimeCache.frameTimeCache.now();
      if (!function (t, e, i, n) {
        let r = t[0];
        if (r === null) {
          return false;
        }
        if (e === "display" || e === "visibility") {
          return true;
        }
        let s = t[t.length - 1];
        let o = tb(r, e);
        let a = tb(s, e);
        stubFunctions.stubHandler(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`);
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
      }(t, r, s, o)) {
        if (emptyObjectExport_2.emptyObject.instantAnimations || !a) {
          if (c != null) {
            c(J(t, i, e));
          }
        }
        t[0] = t[t.length - 1];
        i.duration = 0;
        i.repeat = 0;
      }
      let d = {
        startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : undefined,
        finalKeyframe: e,
        ...i,
        keyframes: t
      };
      let p = !u && function (t) {
        let {
          motionValue: i,
          name: n,
          repeatDelay: r,
          repeatType: s,
          damping: o,
          type: a
        } = t;
        if (!isDomElementChecker.isDomElement(i == null ? undefined : i.owner?.current)) {
          return false;
        }
        let {
          onUpdate: l,
          transformTemplate: u
        } = i.owner.getProps();
        return tT() && n && tP.has(n) && (n !== "transform" || !u) && !l && !r && s !== "mirror" && o !== 0 && a !== "inertia";
      }(d) ? new tw({
        ...d,
        element: d.motionValue.owner.current
      }) : new tn(d);
      p.finished.then(() => this.notifyFinished()).catch(identityFunction.identity);
      if (this.pendingTimeline) {
        this.stopTimeline = p.attachTimeline(this.pendingTimeline);
        this.pendingTimeline = undefined;
      }
      this._animation = p;
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
        keyframeResolverCore.flushKeyframes();
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
      motionValue: u,
      element: h,
      ...c
    }) {
      var d;
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
      this.createdAt = frameTimeCache.frameTimeCache.now();
      let p = {
        autoplay: t,
        delay: e,
        type: i,
        repeat: n,
        repeatDelay: r,
        repeatType: s,
        name: a,
        motionValue: u,
        element: h,
        ...c
      };
      let f = (h == null ? undefined : h.KeyframeResolver) || keyframeResolverCore.KeyframeResolver;
      this.keyframeResolver = new f(o, (t, e, i) => this.onKeyframesResolved(t, e, p, !i), a, u, h);
      if ((d = this.keyframeResolver) !== null && d !== undefined) {
        d.scheduleResolve();
      }
    }
  }
  var timeUnitConverter = require("time-unit-converter") /*id: 707109*/;
  var emptyNamespaceStub = require("empty-namespace-stub") /*id: 720684*/;
  let tM = t => t !== null;
  var cssTransformProps = require("css-transform-props") /*id: 641552*/;
  let tF = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  let tR = t => ({
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
  let tj = (t, e) => {
    let {
      keyframes: i
    } = e;
    if (i.length > 2) {
      return tV;
    } else if (cssTransformProps.transformPropSet.has(t)) {
      if (t.startsWith("scale")) {
        return tR(i[1]);
      } else {
        return tF;
      }
    } else {
      return tD;
    }
  };
  let tL = function (t, e, i, s = {}, o, a) {
    return l => {
      let u = exportResolveUtil.getPropertyWithFallback(s, t) || {};
      let h = u.delay || s.delay || 0;
      let {
        elapsed: c = 0
      } = s;
      c -= timeUnitConverter.secToMs(h);
      let d = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...u,
        delay: -c,
        onUpdate: t => {
          e.set(t);
          if (u.onUpdate) {
            u.onUpdate(t);
          }
        },
        onComplete: () => {
          l();
          if (u.onComplete) {
            u.onComplete();
          }
        },
        name: t,
        motionValue: e,
        element: a ? undefined : o
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
      }(u)) {
        Object.assign(d, tj(t, d));
      }
      d.duration &&= timeUnitConverter.secToMs(d.duration);
      d.repeatDelay &&= timeUnitConverter.secToMs(d.repeatDelay);
      if (d.from !== undefined) {
        d.keyframes[0] = d.from;
      }
      let p = false;
      if (d.type === false || d.duration === 0 && !d.repeatDelay) {
        d.duration = 0;
        if (d.delay === 0) {
          p = true;
        }
      }
      if (emptyNamespaceStub.emptyNamespace.instantAnimations || emptyNamespaceStub.emptyNamespace.skipAnimations) {
        p = true;
        d.duration = 0;
        d.delay = 0;
      }
      d.allowFlatten = !u.type && !u.ease;
      if (p && !a && e.get() !== undefined) {
        let t = function (t, e, i) {
          let {
            repeat: n,
            repeatType: r = "loop"
          } = e;
          let s = t.filter(tM);
          let o = n && r !== "loop" && n % 2 == 1 ? 0 : s.length - 1;
          return s[o];
        }(d.keyframes, u);
        if (t !== undefined) {
          frameloopSchedulerUtils_1.scheduleFrame.update(() => {
            d.onUpdate(t);
            d.onComplete();
          });
          return;
        }
      }
      if (u.isSync) {
        return new tn(d);
      } else {
        return new tS(d);
      }
    };
  };
  require.d(exports, {
    createAnimation: function () {
      return tL;
    }
  });
}