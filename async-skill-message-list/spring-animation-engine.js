// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fw' to 'SpringAnimator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 968898
         */
module.exports = function (module, exports, require) {
  var cubicBezierEasing = require("cubic-bezier-easing") /*id: 585312*/;
  var r = cubicBezierEasing;
  function s(e, t, n) {
    return Math.min(Math.max(e, t), n);
  }
  function a(e = 1, t = 0.5) {
    let n = s(e, 1, 10);
    let i = s(t, 0.1, 2);
    return e => e === 0 || e === 1 ? e : -n * Math.pow(2, (e - 1) * 10) * Math.sin(Math.PI * 2 * (e - 1 - i / (Math.PI * 2) * Math.asin(1 / n)) / i);
  }
  let o = (() => {
    let e = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"];
    let t = {
      In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], a],
      Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], (e, t) => n => 1 - a(e, t)(1 - n)],
      InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], (e, t) => n => n < 0.5 ? a(e, t)(n * 2) / 2 : 1 - a(e, t)(n * -2 + 2) / 2]
    };
    let n = {
      linear: [0.25, 0.25, 0.75, 0.75]
    };
    for (let i of Object.keys(t)) {
      t[i].forEach((t, r) => {
        n["ease" + i + e[r]] = t;
      });
    }
    return n;
  })();
  function l(e) {
    let t;
    if (typeof e == "function") {
      return e;
    }
    let n = (e = e && typeof e == "string" ? e.trim() : "linear").split("(")[0];
    let i = function (e) {
      let t = /\(([^)]+)\)/.exec(e);
      if (t) {
        return t[1].split(",").map(e => parseFloat(e));
      } else {
        return [];
      }
    }(e);
    if (n === "cubic-bezier" || n === "cubicBezier") {
      return r(...(i.length ? i : o.linear));
    } else {
      if (!n || typeof n != "string" || typeof n == "string" && o[n] == null) {
        n = "linear";
      }
      if (typeof (t = o[n]) == "function") {
        return t(...i);
      } else if (i.length) {
        return r(...i);
      } else {
        return r(...t);
      }
    }
  }
  class u {
    constructor() {
      this._eventMap = new Map();
    }
    on(e, t) {
      if (e && typeof t == "function") {
        if (!this._eventMap.has(e)) {
          this._eventMap.set(e, []);
        }
        this._eventMap.get(e).push(t);
      }
      return this;
    }
    once(e, t) {
      var n = this;
      if (e && typeof t == "function") {
        let i = function () {
          t(...arguments);
          n.off(e, i);
        };
        this.on(e, i);
      }
    }
    off(e, t) {
      if (e) {
        if (typeof t == "function") {
          let n = this._eventMap.get(e);
          if (Array.isArray(n) && n.length) {
            let e = -1;
            while ((e = n.findIndex(e => e === t)) > -1) {
              n.splice(e, 1);
            }
          }
        } else if (t == null) {
          this._eventMap.delete(e);
        }
      }
      return this;
    }
    emit(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        n[i - 1] = arguments[i];
      }
      return !!this._eventMap.has(e) && (this._eventMap.get(e).forEach(e => e(...n)), true);
    }
  }
  function c(e) {
    return !!e && typeof e == "object" && (!!(e.duration > 0) || typeof e.easing == "string" || typeof e.easing == "function");
  }
  function d(e) {
    let t = {};
    for (let n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = typeof e[n] == "number" ? e[n] : e[n].val;
      }
    }
    return t;
  }
  let f = [0, 0];
  function h(e, t, n, i, r, s, a) {
    let o = n + (-r * (t - i) + -s * n) * e;
    let l = t + o * e;
    if (Math.abs(o) < a && Math.abs(l - i) < a) {
      f[0] = i;
      f[1] = 0;
    } else {
      f[0] = l;
      f[1] = o;
    }
    return f;
  }
  let p = Object.assign(Object.assign({}, {
    tension: 170,
    friction: 26
  }), {
    precision: 0.01
  });
  let m = () => Date.now();
  let g = 1000 / 60;
  class _ extends u {
    constructor(e = {}, t = {}) {
      super();
      this._props = Object.assign({}, e);
      this._config = Object.assign({}, t);
      this.initStates();
    }
    _wrapConfig(e, t) {
      t = t && typeof t == "object" ? t : this._config;
      let n = {};
      for (let i of Object.keys(e)) {
        n[i] = function (e, t = {}) {
          if (c(t)) {
            let e = l(t.easing);
            let n = typeof t.duration == "number" && t.duration > 0 ? t.duration : 1000;
            t = Object.assign(Object.assign({}, t), {
              easing: e,
              duration: n
            });
          }
          let n = Object.assign(Object.assign(Object.assign({}, p), t), {
            done: false
          });
          if (e && typeof e == "object" && "val" in e) {
            if (c(e)) {
              let n = l(e.easing);
              let i = typeof e.duration == "number" && e.duration > 0 ? e.duration : parseInt(t.duration) || 1000;
              e = Object.assign(Object.assign({}, e), {
                easing: n,
                duration: i
              });
            }
            n = Object.assign(Object.assign({}, n), e);
          } else {
            n = Object.assign(Object.assign({}, n), {
              val: e
            });
          }
          return n;
        }(e[i], t);
      }
      return n;
    }
    initStates(e, t) {
      e = e && typeof e == "object" ? e : this._props;
      t = t && typeof t == "object" ? t : this._config;
      let {
        from: n,
        to: i
      } = e;
      this._from = {};
      if (n) {
        for (let e of Object.keys(n)) {
          this._from[e] = typeof n[e] == "object" && n[e].val ? n[e].val : n[e];
        }
      }
      this._to = this._wrapConfig(i, t);
      this._delay = parseInt(t.delay) || 0;
      let r = this._from && d(this._from) || d(this._to);
      let s = function (e) {
        let t = {};
        for (let n of e && Object.keys(e) || []) {
          t[n] = 0;
        }
        return t;
      }(r);
      this._currentStyle = Object.assign({}, r);
      this._currentVelocity = Object.assign({}, s);
      this._lastIdealStyle = Object.assign({}, r);
      this._lastIdealVelocity = Object.assign({}, s);
      this.resetPlayStates();
      this._frameCount = 0;
      this._prevTime = 0;
    }
    animate() {
      if (this._timer == null) {
        this._timer = requestAnimationFrame(e => {
          let t = m();
          if (function (e, t, n, i, r) {
            for (let s of Object.keys(t)) {
              let a = t[s];
              let o = typeof a == "number" ? a : a.val;
              if (typeof a != "object" || !a.done) {
                if (c(a) && i && r && a.duration) {
                  if (a.duration + i <= r || o !== e[s]) {
                    return false;
                  }
                } else if (typeof n[s] == "number" && n[s] !== 0) {
                  return false;
                }
                if (e[s] !== o) {
                  return false;
                }
              }
            }
            return true;
          }(this._currentStyle, this._to, this._currentVelocity, this._startedTime || t, t) || this._ended || this._stopped) {
            if (!!this._wasAnimating && !this._ended && !this._stopped) {
              this._timer = setTimeout(() => {
                clearTimeout(this._timer);
                this._timer = null;
                this._ended = true;
                this.emit("rest", this.getCurrentStates());
              }, g);
            }
            this.resetPlayStates();
            return;
          }
          if (!this._started) {
            this._started = true;
            this.emit("start", this.getCurrentStates());
          }
          this._stopped = false;
          this._paused = false;
          this._wasAnimating = true;
          if (this._startedTime === 0) {
            this._startedTime = t;
          }
          let n = t - this._prevTime;
          this._prevTime = t;
          if (t - this._startedTime < this._delay) {
            this._timer = null;
            this.animate();
          }
          let i = {};
          let r = {};
          let s = {};
          let a = {};
          for (let e of this._to && Object.keys(this._to) || []) {
            let o = this._to[e];
            this._accumulatedTime[e] = typeof this._accumulatedTime[e] != "number" ? n : this._accumulatedTime[e] + n;
            let l = this._from[e] != null && typeof this._from[e] == "object" ? this._from[e].val : this._from[e];
            let u = o.val;
            if (typeof o == "number") {
              s[e] = o;
              a[e] = 0;
              i[e] = o;
              r[e] = 0;
            } else {
              let n = this._lastIdealStyle[e];
              let d = this._lastIdealVelocity[e];
              if (c(this._config) || c(o)) {
                let {
                  easing: r,
                  duration: a
                } = o;
                n = l + r((t - this._startedTime) / a) * (u - l);
                if (t >= this._startedTime + a) {
                  n = u;
                  o.done = true;
                }
                i[e] = n;
                s[e] = n;
              } else if (u != null && u === this._currentStyle[e]) {
                s[e] = u;
                a[e] = 0;
                i[e] = u;
                r[e] = 0;
              } else {
                let t = (this._accumulatedTime[e] - Math.floor(this._accumulatedTime[e] / g) * g) / g;
                let l = Math.floor(this._accumulatedTime[e] / g);
                for (let e = 0; e < l; e++) {
                  [n, d] = h(g / 1000, n, d, o.val, o.tension, o.friction, o.precision);
                }
                let [u, c] = h(g / 1000, n, d, o.val, o.tension, o.friction, o.precision);
                s[e] = n + (u - n) * t;
                a[e] = d + (c - d) * t;
                i[e] = n;
                r[e] = d;
                this._accumulatedTime[e] -= l * g;
              }
            }
          }
          this._timer = null;
          this._currentStyle = Object.assign({}, s);
          this._currentVelocity = Object.assign({}, a);
          this._lastIdealStyle = Object.assign({}, i);
          this._lastIdealVelocity = Object.assign({}, r);
          if (!this._destroyed) {
            this.emit("frame", this.getCurrentStates());
            this.animate();
          }
        });
      }
    }
    start() {
      this._prevTime = m();
      this._startedTime = m();
      this.animate();
    }
    end() {
      if (!this._ended) {
        this._ended = true;
        this._currentStyle = this.getFinalStates();
        this.emit("frame", this.getFinalStates());
        this.emit("rest", this.getFinalStates());
      }
      this.destroy();
    }
    pause() {
      if (!this._paused) {
        this._pausedTime = m();
        this._paused = true;
        this.emit("pause", this.getCurrentStates());
        this.destroy();
        this._destroyed = false;
      }
    }
    resume() {
      if (this._started && this._paused) {
        let e = m() - this._pausedTime;
        this._paused = false;
        this._startedTime += e;
        this._prevTime += e;
        this._pausedTime = 0;
        this.emit("resume", this.getCurrentStates());
        this.animate();
      }
    }
    stop() {
      this.destroy();
      if (!this._stopped) {
        this._stopped = true;
        this.emit("stop", this.getInitialStates());
        this.initStates();
      }
    }
    destroy() {
      cancelAnimationFrame(this._timer);
      clearTimeout(this._timer);
      this._timer = null;
      this._destroyed = true;
    }
    resetPlayStates() {
      this._started = false;
      this._stopped = false;
      this._ended = false;
      this._paused = false;
      this._destroyed = false;
      this._timer = null;
      this._wasAnimating = false;
      this._accumulatedTime = {};
      this._startedTime = 0;
      this._pausedTime = 0;
    }
    reset() {
      this.destroy();
      this.initStates();
    }
    reverse() {
      this.destroy();
      let e = Object.assign({}, this._props);
      let [t, n] = [e.to, e.from];
      e.from = t;
      e.to = n;
      this._props = Object.assign({}, e);
      this.initStates();
    }
    getCurrentStates() {
      return Object.assign({}, this._currentStyle);
    }
    getInitialStates() {
      return Object.assign({}, d(this._props.from));
    }
    getFinalStates() {
      return Object.assign({}, d(this._props.to));
    }
  }
  require.d(exports, {
    SpringAnimator: function () {
      return _;
    }
  });
}