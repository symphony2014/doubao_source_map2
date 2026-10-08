// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaAnimation'
// - Resolved require(294010) to 'konva-animation'
// - Renamed variable 'n' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 391836
         */
module.exports = function (module, exports, require) {
  exports.Easings = exports.Tween = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaAnimation = require("konva-animation") /*id: 294010*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var o = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  };
  var h = 0;
  var l = ["fill", "stroke", "shadowColor"];
  class d {
    constructor(t, e, i, r, a, n, s) {
      this.prop = t;
      this.propFunc = e;
      this.begin = r;
      this._pos = r;
      this.duration = n;
      this._change = 0;
      this.prevPos = 0;
      this.yoyo = s;
      this._time = 0;
      this._position = 0;
      this._startTime = 0;
      this._finish = 0;
      this.func = i;
      this._change = a - this.begin;
      this.pause();
    }
    fire(t) {
      var e = this[t];
      if (e) {
        e();
      }
    }
    setTime(t) {
      if (t > this.duration) {
        if (this.yoyo) {
          this._time = this.duration;
          this.reverse();
        } else {
          this.finish();
        }
      } else if (t < 0) {
        if (this.yoyo) {
          this._time = 0;
          this.play();
        } else {
          this.reset();
        }
      } else {
        this._time = t;
        this.update();
      }
    }
    getTime() {
      return this._time;
    }
    setPosition(t) {
      this.prevPos = this._pos;
      this.propFunc(t);
      this._pos = t;
    }
    getPosition(t = this._time) {
      return this.func(t, this.begin, this._change, this.duration);
    }
    play() {
      this.state = 2;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onPlay");
    }
    reverse() {
      this.state = 3;
      this._time = this.duration - this._time;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onReverse");
    }
    seek(t) {
      this.pause();
      this._time = t;
      this.update();
      this.fire("onSeek");
    }
    reset() {
      this.pause();
      this._time = 0;
      this.update();
      this.fire("onReset");
    }
    finish() {
      this.pause();
      this._time = this.duration;
      this.update();
      this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time));
      this.fire("onUpdate");
    }
    onEnterFrame() {
      var t = this.getTimer() - this._startTime;
      if (this.state === 2) {
        this.setTime(t);
      } else if (this.state === 3) {
        this.setTime(this.duration - t);
      }
    }
    pause() {
      this.state = 1;
      this.fire("onPause");
    }
    getTimer() {
      return new Date().getTime();
    }
  }
  class c {
    constructor(t) {
      var i;
      var n;
      var l = this;
      var u = t.node;
      var f = u._id;
      var g = t.easing || exports.Easings.Linear;
      var p = !!t.yoyo;
      i = t.duration === undefined ? 0.3 : t.duration === 0 ? 0.001 : t.duration;
      this.node = u;
      this._id = h++;
      var v = u.getLayer() || (u instanceof konvaCoreConfig.Konva.Stage ? u.getLayers() : null);
      if (!v) {
        konvaTransformUtil.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
      }
      this.anim = new konvaAnimation.Animation(function () {
        l.tween.onEnterFrame();
      }, v);
      this.tween = new d(n, function (t) {
        l._tweenFunc(t);
      }, g, 0, 1, i * 1000, p);
      this._addListeners();
      c.attrs[f] ||= {};
      c.attrs[f][this._id] ||= {};
      c.tweens[f] ||= {};
      for (n in t) {
        if (o[n] === undefined) {
          this._addAttr(n, t[n]);
        }
      }
      this.reset();
      this.onFinish = t.onFinish;
      this.onReset = t.onReset;
      this.onUpdate = t.onUpdate;
    }
    _addAttr(t, e) {
      var i;
      var a;
      var n;
      var s;
      var o;
      var h;
      var d;
      var u;
      var f = this.node;
      var g = f._id;
      if (n = c.tweens[g][t]) {
        delete c.attrs[g][n][t];
      }
      i = f.getAttr(t);
      if (konvaTransformUtil.Util._isArray(e)) {
        a = [];
        o = Math.max(e.length, i.length);
        if (t === "points" && e.length !== i.length) {
          if (e.length > i.length) {
            d = i;
            i = konvaTransformUtil.Util._prepareArrayForTween(i, e, f.closed());
          } else {
            h = e;
            e = konvaTransformUtil.Util._prepareArrayForTween(e, i, f.closed());
          }
        }
        if (t.indexOf("fill") === 0) {
          for (s = 0; s < o; s++) {
            if (s % 2 == 0) {
              a.push(e[s] - i[s]);
            } else {
              var p = konvaTransformUtil.Util.colorToRGBA(i[s]);
              u = konvaTransformUtil.Util.colorToRGBA(e[s]);
              i[s] = p;
              a.push({
                r: u.r - p.r,
                g: u.g - p.g,
                b: u.b - p.b,
                a: u.a - p.a
              });
            }
          }
        } else {
          for (s = 0; s < o; s++) {
            a.push(e[s] - i[s]);
          }
        }
      } else if (l.indexOf(t) !== -1) {
        i = konvaTransformUtil.Util.colorToRGBA(i);
        a = {
          r: (u = konvaTransformUtil.Util.colorToRGBA(e)).r - i.r,
          g: u.g - i.g,
          b: u.b - i.b,
          a: u.a - i.a
        };
      } else {
        a = e - i;
      }
      c.attrs[g][this._id][t] = {
        start: i,
        diff: a,
        end: e,
        trueEnd: h,
        trueStart: d
      };
      c.tweens[g][t] = this._id;
    }
    _tweenFunc(t) {
      var e;
      var i;
      var a;
      var n;
      var s;
      var o;
      var h;
      var d;
      var u = this.node;
      var f = c.attrs[u._id][this._id];
      for (e in f) {
        a = (i = f[e]).start;
        n = i.diff;
        d = i.end;
        if (konvaTransformUtil.Util._isArray(a)) {
          s = [];
          h = Math.max(a.length, d.length);
          if (e.indexOf("fill") === 0) {
            for (o = 0; o < h; o++) {
              if (o % 2 == 0) {
                s.push((a[o] || 0) + n[o] * t);
              } else {
                s.push("rgba(" + Math.round(a[o].r + n[o].r * t) + "," + Math.round(a[o].g + n[o].g * t) + "," + Math.round(a[o].b + n[o].b * t) + "," + (a[o].a + n[o].a * t) + ")");
              }
            }
          } else {
            for (o = 0; o < h; o++) {
              s.push((a[o] || 0) + n[o] * t);
            }
          }
        } else {
          s = l.indexOf(e) !== -1 ? "rgba(" + Math.round(a.r + n.r * t) + "," + Math.round(a.g + n.g * t) + "," + Math.round(a.b + n.b * t) + "," + (a.a + n.a * t) + ")" : a + n * t;
        }
        u.setAttr(e, s);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      };
      this.tween.onReverse = () => {
        this.anim.start();
      };
      this.tween.onPause = () => {
        this.anim.stop();
      };
      this.tween.onFinish = () => {
        var t = this.node;
        var e = c.attrs[t._id][this._id];
        if (e.points && e.points.trueEnd) {
          t.setAttr("points", e.points.trueEnd);
        }
        if (this.onFinish) {
          this.onFinish.call(this);
        }
      };
      this.tween.onReset = () => {
        var t = this.node;
        var e = c.attrs[t._id][this._id];
        if (e.points && e.points.trueStart) {
          t.points(e.points.trueStart);
        }
        if (this.onReset) {
          this.onReset();
        }
      };
      this.tween.onUpdate = () => {
        if (this.onUpdate) {
          this.onUpdate.call(this);
        }
      };
    }
    play() {
      this.tween.play();
      return this;
    }
    reverse() {
      this.tween.reverse();
      return this;
    }
    reset() {
      this.tween.reset();
      return this;
    }
    seek(t) {
      this.tween.seek(t * 1000);
      return this;
    }
    pause() {
      this.tween.pause();
      return this;
    }
    finish() {
      this.tween.finish();
      return this;
    }
    destroy() {
      var t;
      var e = this.node._id;
      var i = this._id;
      var r = c.tweens[e];
      this.pause();
      for (t in r) {
        delete c.tweens[e][t];
      }
      delete c.attrs[e][i];
    }
  }
  exports.Tween = c;
  c.attrs = {};
  c.tweens = {};
  konvaCoreNodeBase.Node.prototype.to = function (t) {
    var e = t.onFinish;
    t.node = this;
    t.onFinish = function () {
      this.destroy();
      if (e) {
        e();
      }
    };
    new c(t).play();
  };
  exports.Easings = {
    BackEaseIn: (t, e, i, r) => i * (t /= r) * t * (t * 2.70158 - 1.70158) + e,
    BackEaseOut: (t, e, i, r) => i * ((t = t / r - 1) * t * (t * 2.70158 + 1.70158) + 1) + e,
    BackEaseInOut(t, e, i, r) {
      var a = 1.70158;
      if ((t /= r / 2) < 1) {
        return i / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + e;
      } else {
        return i / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + e;
      }
    },
    ElasticEaseIn(t, e, i, r, a, n) {
      var s = 0;
      if (t === 0) {
        return e;
      } else if ((t /= r) == 1) {
        return e + i;
      } else {
        n ||= r * 0.3;
        if (!a || a < Math.abs(i)) {
          a = i;
          s = n / 4;
        } else {
          s = n / (Math.PI * 2) * Math.asin(i / a);
        }
        return -(a * Math.pow(2, (t -= 1) * 10) * Math.sin(Math.PI * 2 * (t * r - s) / n)) + e;
      }
    },
    ElasticEaseOut(t, e, i, r, a, n) {
      var s = 0;
      if (t === 0) {
        return e;
      } else if ((t /= r) == 1) {
        return e + i;
      } else {
        n ||= r * 0.3;
        if (!a || a < Math.abs(i)) {
          a = i;
          s = n / 4;
        } else {
          s = n / (Math.PI * 2) * Math.asin(i / a);
        }
        return a * Math.pow(2, t * -10) * Math.sin(Math.PI * 2 * (t * r - s) / n) + i + e;
      }
    },
    ElasticEaseInOut(t, e, i, r, a, n) {
      var s = 0;
      if (t === 0) {
        return e;
      } else if ((t /= r / 2) == 2) {
        return e + i;
      } else {
        n ||= r * 0.44999999999999996;
        if (!a || a < Math.abs(i)) {
          a = i;
          s = n / 4;
        } else {
          s = n / (Math.PI * 2) * Math.asin(i / a);
        }
        if (t < 1) {
          return a * Math.pow(2, (t -= 1) * 10) * Math.sin(Math.PI * 2 * (t * r - s) / n) * -0.5 + e;
        } else {
          return a * Math.pow(2, (t -= 1) * -10) * Math.sin(Math.PI * 2 * (t * r - s) / n) * 0.5 + i + e;
        }
      }
    },
    BounceEaseOut: (t, e, i, r) => (t /= r) < 1 / 2.75 ? t * 7.5625 * t * i + e : t < 2 / 2.75 ? i * ((t -= 1.5 / 2.75) * 7.5625 * t + 0.75) + e : t < 2.5 / 2.75 ? i * ((t -= 2.25 / 2.75) * 7.5625 * t + 0.9375) + e : i * ((t -= 2.625 / 2.75) * 7.5625 * t + 0.984375) + e,
    BounceEaseIn: (t, i, r, a) => r - exports.Easings.BounceEaseOut(a - t, 0, r, a) + i,
    BounceEaseInOut: (t, i, r, a) => t < a / 2 ? exports.Easings.BounceEaseIn(t * 2, 0, r, a) * 0.5 + i : exports.Easings.BounceEaseOut(t * 2 - a, 0, r, a) * 0.5 + r * 0.5 + i,
    EaseIn: (t, e, i, r) => i * (t /= r) * t + e,
    EaseOut: (t, e, i, r) => -i * (t /= r) * (t - 2) + e,
    EaseInOut: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e,
    StrongEaseIn: (t, e, i, r) => i * (t /= r) * t * t * t * t + e,
    StrongEaseOut: (t, e, i, r) => i * ((t = t / r - 1) * t * t * t * t + 1) + e,
    StrongEaseInOut: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e,
    Linear: (t, e, i, r) => i * t / r + e
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}