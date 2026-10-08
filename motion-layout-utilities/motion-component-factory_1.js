// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'motionFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 57495
         */
module.exports = function (module, exports, require) {
  function n(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  var r;
  var s;
  var o;
  var animationVariantRunner = require("animation-variant-runner") /*id: 368852*/;
  var arrayTypeCheckUtility = require("array-type-check-utility") /*id: 208770*/;
  function u(t, e) {
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
  function h(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
  let d = ["initial", ...c];
  let p = d.length;
  var animationVariantResolver_1 = require("animation-variant-resolver_1") /*id: 816095*/;
  let m = [...c].reverse();
  let g = c.length;
  function v(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function y() {
    return {
      animate: v(true),
      whileInView: v(),
      whileHover: v(),
      whileTap: v(),
      whileDrag: v(),
      whileFocus: v(),
      exit: v()
    };
  }
  class x {
    update() {}
    constructor(t) {
      this.isMounted = false;
      this.node = t;
    }
  }
  let w = 0;
  var identityFunctionExport = require("identity-function-export") /*id: 107915*/;
  let A = {
    x: false,
    y: false
  };
  var cssUnitValueParserTransformers = require("css-unit-value-parser-transformers") /*id: 20534*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  var linearInterpolation = require("linear-interpolation") /*id: 745679*/;
  var noopFunction_2 = require("noop-function_2") /*id: 772282*/;
  var animationCoreFactory = require("animation-core-factory") /*id: 905602*/;
  function M(t, e, i, n = {
    passive: true
  }) {
    t.addEventListener(e, i, n);
    return () => t.removeEventListener(e, i);
  }
  let C = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
  function F(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  let R = t => e => C(e) && t(e, F(e));
  function V(t, e, i, n) {
    return M(t, e, R(i), n);
  }
  function D(t) {
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
  function j(t) {
    return t.max - t.min;
  }
  function L(t, e, i, n = 0.5) {
    t.origin = n;
    t.originPoint = linearInterpolation.linearInterpolate(e.min, e.max, t.origin);
    t.scale = j(i) / j(e);
    t.translate = linearInterpolation.linearInterpolate(i.min, i.max, t.origin) - t.originPoint;
    if (t.scale >= 0.9999 && t.scale <= 1.0001 || isNaN(t.scale)) {
      t.scale = 1;
    }
    if (t.translate >= -0.01 && t.translate <= 0.01 || isNaN(t.translate)) {
      t.translate = 0;
    }
  }
  function $(t, e, i, n) {
    L(t.x, e.x, i.x, n ? n.originX : undefined);
    L(t.y, e.y, i.y, n ? n.originY : undefined);
  }
  function O(t, e, i) {
    t.min = i.min + e.min;
    t.max = t.min + j(e);
  }
  function B(t, e, i) {
    t.min = e.min - i.min;
    t.max = t.min + j(e);
  }
  function I(t, e, i) {
    B(t.x, e.x, i.x);
    B(t.y, e.y, i.y);
  }
  let W = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  let U = () => ({
    x: W(),
    y: W()
  });
  let _ = () => ({
    min: 0,
    max: 0
  });
  let N = () => ({
    x: _(),
    y: _()
  });
  function z(t) {
    return [t("x"), t("y")];
  }
  function X(t) {
    return t === undefined || t === 1;
  }
  function K(t) {
    let {
      scale: e,
      scaleX: i,
      scaleY: n
    } = t;
    return !X(e) || !X(i) || !X(n);
  }
  function H(t) {
    return K(t) || Y(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function Y(t) {
    var e;
    var i;
    return (e = t.x) && e !== "0%" || (i = t.y) && i !== "0%";
  }
  function Z(t, e, i, n, r) {
    if (r !== undefined) {
      t = n + r * (t - n);
    }
    return n + i * (t - n) + e;
  }
  function q(t, e = 0, i = 1, n, r) {
    t.min = Z(t.min, e, i, n, r);
    t.max = Z(t.max, e, i, n, r);
  }
  function G(t, e) {
    let {
      x: i,
      y: n
    } = e;
    q(t.x, i.translate, i.scale, i.originPoint);
    q(t.y, n.translate, n.scale, n.originPoint);
  }
  function J(t, e) {
    t.min = t.min + e;
    t.max = t.max + e;
  }
  function Q(t, e, i, n, r = 0.5) {
    let s = linearInterpolation.linearInterpolate(t.min, t.max, r);
    q(t, e, i, s, n);
  }
  function tt(t, e) {
    Q(t.x, e.x, e.scaleX, e.scale, e.originX);
    Q(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function te(t, e) {
    return D(function (t, e) {
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
  let ti = t => {
    let {
      current: e
    } = t;
    if (e) {
      return e.ownerDocument.defaultView;
    } else {
      return null;
    }
  };
  function tn(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  var addWillChangeProperty = require("add-will-change-property") /*id: 118534*/;
  let ts = (t, e) => i => e(t(i));
  let to = (...t) => t.reduce(ts);
  var timeUnitConverter = require("time-unit-converter") /*id: 707109*/;
  let tl = (t, e) => Math.abs(t - e);
  class tu {
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      if (this.removeListeners) {
        this.removeListeners();
      }
      frameloopSchedulerUtils_1.cancelFrame(this.updatePoint);
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
        let i = td(this.lastMoveEventInfo, this.history);
        let n = this.startEvent !== null;
        t = i.offset;
        e = {
          x: 0,
          y: 0
        };
        let r = Math.sqrt(tl(t.x, e.x) ** 2 + tl(t.y, e.y) ** 2) >= 3;
        if (!n && !r) {
          return;
        }
        let {
          point: s
        } = i;
        let {
          timestamp: o
        } = frameloopSchedulerUtils_1.frameState;
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
        this.lastMoveEventInfo = th(e, this.transformPagePoint);
        frameloopSchedulerUtils_1.scheduleFrame.update(this.updatePoint, true);
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
        let s = td(t.type === "pointercancel" ? this.lastMoveEventInfo : th(e, this.transformPagePoint), this.history);
        if (this.startEvent && i) {
          i(t, s);
        }
        if (n) {
          n(t, s);
        }
      };
      if (!C(t)) {
        return;
      }
      this.dragSnapToOrigin = r;
      this.handlers = e;
      this.transformPagePoint = i;
      this.contextWindow = n || window;
      let s = th(F(t), this.transformPagePoint);
      let {
        point: o
      } = s;
      let {
        timestamp: a
      } = frameloopSchedulerUtils_1.frameState;
      this.history = [{
        ...o,
        timestamp: a
      }];
      let {
        onSessionStart: l
      } = e;
      if (l) {
        l(t, td(s, this.history));
      }
      this.removeListeners = to(V(this.contextWindow, "pointermove", this.handlePointerMove), V(this.contextWindow, "pointerup", this.handlePointerUp), V(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
  }
  function th(t, e) {
    if (e) {
      return {
        point: e(t.point)
      };
    } else {
      return t;
    }
  }
  function tc(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function td(t, e) {
    let {
      point: i
    } = t;
    return {
      point: i,
      delta: tc(i, tp(e)),
      offset: tc(i, e[0]),
      velocity: function (t, e) {
        if (t.length < 2) {
          return {
            x: 0,
            y: 0
          };
        }
        let i = t.length - 1;
        let n = null;
        let r = tp(t);
        while (i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > timeUnitConverter.secToMs(0.1)))) {
          i--;
        }
        if (!n) {
          return {
            x: 0,
            y: 0
          };
        }
        let s = timeUnitConverter.msToSec(r.timestamp - n.timestamp);
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
  function tp(t) {
    return t[t.length - 1];
  }
  let tf = (t, e, i) => {
    let n = e - t;
    if (n === 0) {
      return 1;
    } else {
      return (i - t) / n;
    }
  };
  let tm = (t, e, i) => i > e ? e : i < t ? t : i;
  function tg(t, e, i) {
    return {
      min: e !== undefined ? t.min + e : undefined,
      max: i !== undefined ? t.max + i - (t.max - t.min) : undefined
    };
  }
  function tv(t, e) {
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
  function ty(t, e, i) {
    return {
      min: tx(t, e),
      max: tx(t, i)
    };
  }
  function tx(t, e) {
    if (typeof t == "number") {
      return t;
    } else {
      return t[e] || 0;
    }
  }
  let tw = new WeakMap();
  class tb {
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
      this.panSession = new tu(t, {
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
            this.snapToCursor(F(t).point);
          }
        },
        onStart: (t, e) => {
          var i;
          let {
            drag: n,
            dragPropagation: r,
            onDragStart: s
          } = this.getProps();
          if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = (i = n) === "x" || i === "y" ? A[i] ? null : (A[i] = true, () => {
            A[i] = false;
          }) : A.x || A.y ? null : (A.x = A.y = true, () => {
            A.x = A.y = false;
          }), !this.openDragLock)) {
            return;
          }
          this.isDragging = true;
          this.currentDirection = null;
          this.resolveConstraints();
          if (this.visualElement.projection) {
            this.visualElement.projection.isAnimationBlocked = true;
            this.visualElement.projection.target = undefined;
          }
          z(t => {
            let e = this.getAxisMotionValue(t).get() || 0;
            if (cssUnitValueParserTransformers.percentUnit.test(e)) {
              let {
                projection: i
              } = this.visualElement;
              if (i && i.layout) {
                let n = i.layout.layoutBox[t];
                if (n) {
                  e = j(n) * (parseFloat(e) / 100);
                }
              }
            }
            this.originPoint[t] = e;
          });
          if (s) {
            frameloopSchedulerUtils_1.scheduleFrame.postRender(() => s(t, e));
          }
          addWillChangeProperty.addWillChangeProperty(this.visualElement, "transform");
          let {
            animationState: o
          } = this.visualElement;
          if (o) {
            o.setActive("whileDrag", true);
          }
        },
        onMove: (t, e) => {
          let {
            dragPropagation: i,
            dragDirectionLock: n,
            onDirectionLock: r,
            onDrag: s
          } = this.getProps();
          if (!i && !this.openDragLock) {
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
        resumeAnimation: () => z(t => {
          var e;
          return this.getAnimationState(t) === "paused" && ((e = this.getAxisMotionValue(t).animation) === null || e === undefined ? undefined : e.play());
        })
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: n,
        contextWindow: ti(this.visualElement)
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
        frameloopSchedulerUtils_1.scheduleFrame.postRender(() => r(t, e));
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
      if (!i && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      if (e) {
        e.setActive("whileDrag", false);
      }
    }
    updateAxis(t, e, i) {
      let {
        drag: n
      } = this.getProps();
      if (!i || !tA(t, n, this.currentDirection)) {
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
            t = i ? linearInterpolation.linearInterpolate(n, t, i.min) : Math.max(t, n);
          } else if (r !== undefined && t > r) {
            t = i ? linearInterpolation.linearInterpolate(r, t, i.max) : Math.min(t, r);
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
      if (e && tn(e)) {
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
            x: tg(t.x, n, s),
            y: tg(t.y, i, r)
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
          x: ty(t, "left", "right"),
          y: ty(t, "top", "bottom")
        };
      }(i);
      if (r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints) {
        z(t => {
          if (this.constraints !== false && this.getAxisMotionValue(t)) {
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
      if (!e || !tn(e)) {
        return false;
      }
      let n = e.current;
      noopFunction_2.noop(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      let {
        projection: r
      } = this.visualElement;
      if (!r || !r.layout) {
        return false;
      }
      let s = function (t, e, i) {
        let n = te(t, i);
        let {
          scroll: r
        } = e;
        if (r) {
          J(n.x, r.offset.x);
          J(n.y, r.offset.y);
        }
        return n;
      }(n, r.root, this.visualElement.getTransformPagePoint());
      let o = {
        x: tv((t = r.layout.layoutBox).x, s.x),
        y: tv(t.y, s.y)
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
          o = D(t);
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
      return Promise.all(z(o => {
        if (!tA(o, e, this.currentDirection)) {
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
      addWillChangeProperty.addWillChangeProperty(this.visualElement, t);
      return i.start(animationCoreFactory.createAnimation(t, i, 0, e, this.visualElement, false));
    }
    stopAnimation() {
      z(t => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      z(t => {
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
      let e = `_drag${t.toUpperCase()}`;
      let i = this.visualElement.getProps();
      return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : undefined) || 0);
    }
    snapToCursor(t) {
      z(e => {
        let {
          drag: i
        } = this.getProps();
        if (!tA(e, i, this.currentDirection)) {
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
          r.set(t[e] - linearInterpolation.linearInterpolate(i, s, 0.5));
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
      if (!tn(e) || !i || !this.constraints) {
        return;
      }
      this.stopAnimation();
      let n = {
        x: 0,
        y: 0
      };
      z(t => {
        let e = this.getAxisMotionValue(t);
        if (e && this.constraints !== false) {
          let i = e.get();
          n[t] = function (t, e) {
            let i = 0.5;
            let n = j(t);
            let r = j(e);
            if (r > n) {
              i = tf(e.min, e.max - n, t.min);
            } else if (n > r) {
              i = tf(t.min, t.max - r, e.min);
            }
            return tm(0, 1, i);
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
      z(e => {
        if (!tA(e, t, null)) {
          return;
        }
        let i = this.getAxisMotionValue(e);
        let {
          min: r,
          max: s
        } = this.constraints[e];
        i.set(linearInterpolation.linearInterpolate(r, s, n[e]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) {
        return;
      }
      tw.set(this.visualElement, this);
      let t = V(this.visualElement.current, "pointerdown", t => {
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
        if (tn(t) && t.current) {
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
      frameloopSchedulerUtils_1.scheduleFrame.read(e);
      let r = M(window, "resize", () => this.scalePositionWithinConstraints());
      let s = i.addEventListener("didUpdate", t => {
        let {
          delta: e,
          hasLayoutChanged: i
        } = t;
        if (this.isDragging && i) {
          z(t => {
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
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = {
        x: 0,
        y: 0
      };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = N();
      this.visualElement = t;
    }
  }
  function tA(t, e, i) {
    return (e === true || e === t) && (i === null || i === t);
  }
  let tP = t => (e, i) => {
    if (t) {
      frameloopSchedulerUtils_1.scheduleFrame.postRender(() => t(e, i));
    }
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    schedule: tS
  } = require("animation-frameloop-scheduler") /*id: 579177*/.createFrameloopScheduler(queueMicrotask, false);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imagePreviewRegistration = require("image-preview-registration") /*id: 188570*/;
  var createContextModule_1 = require("create-context-module_1") /*id: 324875*/;
  let tC = reactCoreLibraryReexport.createContext({});
  let tF = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  };
  function tR(t, e) {
    if (e.max === e.min) {
      return 0;
    } else {
      return t / (e.max - e.min) * 100;
    }
  }
  let tV = {
    correct: (t, e) => {
      if (!e.target) {
        return t;
      }
      if (typeof t == "string") {
        if (!cssUnitValueParserTransformers.pixelUnit.test(t)) {
          return t;
        }
        t = parseFloat(t);
      }
      let i = tR(t, e.target.x);
      let n = tR(t, e.target.y);
      return `${i}% ${n}%`;
    }
  };
  var cssValueParser_2 = require("css-value-parser_2") /*id: 584871*/;
  var cssCustomPropertyValidator = require("css-custom-property-validator") /*id: 257467*/;
  let tL = {};
  class t$ extends reactCoreLibraryReexport.Component {
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
      (function (t) {
        for (let e in t) {
          tL[e] = t[e];
          if (cssCustomPropertyValidator.isCustomProperty(e)) {
            tL[e].isCSSVariable = true;
          }
        }
      })(tB);
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
      tF.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t) {
      let {
        layoutDependency: e,
        visualElement: i,
        drag: n,
        isPresent: r
      } = this.props;
      let {
        projection: s
      } = i;
      if (s) {
        s.isPresent = r;
        if (n || t.layoutDependency !== e || e === undefined || t.isPresent !== r) {
          s.willUpdate();
        } else {
          this.safeToRemove();
        }
        if (t.isPresent !== r) {
          if (r) {
            s.promote();
          } else if (!s.relegate()) {
            frameloopSchedulerUtils_1.scheduleFrame.postRender(() => {
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
        tS.postRender(() => {
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
  function tO(t) {
    let [e, i] = imagePreviewRegistration.usePreviewRegister();
    let n = reactCoreLibraryReexport.useContext(createContextModule_1.createContext);
    return reactJsxRuntimeCoreReexport.jsx(t$, {
      ...t,
      layoutGroup: n,
      switchLayoutGroup: reactCoreLibraryReexport.useContext(tC),
      isPresent: e,
      safeToRemove: i
    });
  }
  let tB = {
    borderRadius: {
      ...tV,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: tV,
    borderTopRightRadius: tV,
    borderBottomLeftRadius: tV,
    borderBottomRightRadius: tV,
    boxShadow: {
      correct: (t, e) => {
        let {
          treeScale: i,
          projectionDelta: n
        } = e;
        let r = cssValueParser_2.cssValueHandler.parse(t);
        if (r.length > 5) {
          return t;
        }
        let s = cssValueParser_2.cssValueHandler.createTransformer(t);
        let o = +(typeof r[0] != "number");
        let a = n.x.scale * i.x;
        let l = n.y.scale * i.y;
        r[0 + o] /= a;
        r[1 + o] /= l;
        let u = linearInterpolation.linearInterpolate(a, l, 0.5);
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
  var isObjectUtil_1 = require("is-object-util_1") /*id: 688228*/;
  function tW(t) {
    return isObjectUtil_1.isObject(t) && "ownerSVGElement" in t;
  }
  var exportResolveUtil = require("export-resolve-util") /*id: 809859*/;
  var frameTimeCache = require("frame-time-cache") /*id: 33311*/;
  var projectionMetrics = require("projection-metrics") /*id: 976578*/;
  var threadLimitConfig = require("thread-limit-config") /*id: 437700*/;
  var animatedValueFactory = require("animated-value-factory") /*id: 556563*/;
  function tK(t, e) {
    if (t.indexOf(e) === -1) {
      t.push(e);
    }
  }
  function tH(t, e) {
    let i = t.indexOf(e);
    if (i > -1) {
      t.splice(i, 1);
    }
  }
  class tY {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      tK(this.subscriptions, t);
      return () => tH(this.subscriptions, t);
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
  }
  var hasVelocityMethodCheck = require("has-velocity-method-check") /*id: 862420*/;
  var extractFramerAppearDataAttribute = require("extract-framer-appear-data-attribute") /*id: 114896*/;
  let tG = (t, e) => t.depth - e.depth;
  class tJ {
    add(t) {
      tK(this.children, t);
      this.isDirty = true;
    }
    remove(t) {
      tH(this.children, t);
      this.isDirty = true;
    }
    forEach(t) {
      if (this.isDirty) {
        this.children.sort(tG);
      }
      this.isDirty = false;
      this.children.forEach(t);
    }
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
  }
  function tQ(t) {
    if (hasVelocityMethodCheck.hasVelocityMethod(t)) {
      return t.get();
    } else {
      return t;
    }
  }
  let t0 = t => 1 - Math.sin(Math.acos(t));
  let t1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
  let t2 = t1.length;
  let t5 = t => typeof t == "string" ? parseFloat(t) : t;
  let t3 = t => typeof t == "number" || cssUnitValueParserTransformers.pixelUnit.test(t);
  function t4(t, e) {
    if (t[e] !== undefined) {
      return t[e];
    } else {
      return t.borderRadius;
    }
  }
  let t7 = t9(0, 0.5, t => 1 - t0(1 - t));
  let t6 = t9(0.5, 0.95, identityFunctionExport.identity);
  function t9(t, e, i) {
    return n => n < t ? 0 : n > e ? 1 : i(tf(t, e, n));
  }
  function t8(t, e) {
    t.min = e.min;
    t.max = e.max;
  }
  function et(t, e) {
    t8(t.x, e.x);
    t8(t.y, e.y);
  }
  function ee(t, e) {
    t.translate = e.translate;
    t.scale = e.scale;
    t.originPoint = e.originPoint;
    t.origin = e.origin;
  }
  function ei(t, e, i, n, r) {
    t -= e;
    t = n + 1 / i * (t - n);
    if (r !== undefined) {
      t = n + 1 / r * (t - n);
    }
    return t;
  }
  function en(t, e, i, n, r) {
    let [s, o, a] = i;
    (function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
      if (cssUnitValueParserTransformers.percentUnit.test(e)) {
        e = parseFloat(e);
        e = linearInterpolation.linearInterpolate(o.min, o.max, e / 100) - o.min;
      }
      if (typeof e != "number") {
        return;
      }
      let a = linearInterpolation.linearInterpolate(s.min, s.max, n);
      if (t === s) {
        a -= e;
      }
      t.min = ei(t.min, e, i, a, r);
      t.max = ei(t.max, e, i, a, r);
    })(t, e[s], e[o], e[a], e.scale, n, r);
  }
  let er = ["x", "scaleX", "originX"];
  let es = ["y", "scaleY", "originY"];
  function eo(t, e, i, n) {
    en(t.x, e, er, i ? i.x : undefined, n ? n.x : undefined);
    en(t.y, e, es, i ? i.y : undefined, n ? n.y : undefined);
  }
  function ea(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function el(t) {
    return ea(t.x) && ea(t.y);
  }
  function eu(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function eh(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function ec(t, e) {
    return eh(t.x, e.x) && eh(t.y, e.y);
  }
  function ed(t) {
    return j(t.x) / j(t.y);
  }
  function ep(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  class ef {
    add(t) {
      tK(this.members, t);
      t.scheduleRender();
    }
    remove(t) {
      tH(this.members, t);
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
  let em = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  };
  let eg = ["", "X", "Y", "Z"];
  let ev = {
    visibility: "hidden"
  };
  let ey = 0;
  function ex(t, e, i, n) {
    let {
      latestValues: r
    } = e;
    if (r[t]) {
      i[t] = r[t];
      e.setStaticValue(t, 0);
      if (n) {
        n[t] = 0;
      }
    }
  }
  function ew(t) {
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
          this.eventHandlers.set(t, new tY());
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
      mount(t) {
        if (this.instance) {
          return;
        }
        this.isSVG = tW(t) && (!tW(t) || t.tagName !== "svg");
        this.instance = t;
        let {
          layoutId: i,
          layout: n,
          visualElement: r
        } = this.options;
        if (r && !r.current) {
          r.mount(t);
        }
        this.root.nodes.add(this);
        if (this.parent) {
          this.parent.children.add(this);
        }
        if (this.root.hasTreeAnimated && (n || i)) {
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
              let i = frameTimeCache.frameTimeCache.now();
              let n = e => {
                let {
                  timestamp: r
                } = e;
                let s = r - i;
                if (s >= 250) {
                  frameloopSchedulerUtils_1.cancelFrame(n);
                  t(s - 250);
                }
              };
              frameloopSchedulerUtils_1.scheduleFrame.setup(n, true);
              return () => frameloopSchedulerUtils_1.cancelFrame(n);
            }(n, 250);
            if (tF.hasAnimatedSinceResize) {
              tF.hasAnimatedSinceResize = false;
              this.nodes.forEach(eC);
            }
          });
        }
        if (i) {
          this.root.registerSharedNode(i, this);
        }
        if (this.options.animate !== false && r && (i || n)) {
          this.addEventListener("didUpdate", t => {
            let {
              delta: e,
              hasLayoutChanged: i,
              hasRelativeLayoutChanged: n,
              layout: s
            } = t;
            if (this.isTreeAnimationBlocked()) {
              this.target = undefined;
              this.relativeTarget = undefined;
              return;
            }
            let o = this.options.transition || r.getDefaultTransition() || eO;
            let {
              onLayoutAnimationStart: a,
              onLayoutAnimationComplete: l
            } = r.getProps();
            let u = !this.targetLayout || !ec(this.targetLayout, s);
            let h = !i && n;
            if (this.options.layoutRoot || this.resumeFrom || h || i && (u || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = undefined;
              }
              let t = {
                ...exportResolveUtil.getPropertyWithFallback(o, "layout"),
                onPlay: a,
                onComplete: l
              };
              if (r.shouldReduceMotion || this.options.layoutRoot) {
                t.delay = 0;
                t.type = false;
              }
              this.startAnimation(t);
              this.setAnimationOrigin(e, h);
            } else {
              if (!i) {
                eC(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = s;
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
        this.eventHandlers.clear();
        frameloopSchedulerUtils_1.cancelFrame(this.updateProjection);
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
            this.nodes.forEach(eV);
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
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          (function t(e) {
            e.hasCheckedOptimisedAppear = true;
            if (e.root === e) {
              return;
            }
            let {
              visualElement: i
            } = e.options;
            if (!i) {
              return;
            }
            let n = extractFramerAppearDataAttribute.extractFramerAppearData(i);
            if (window.MotionHasOptimisedAnimation(n, "transform")) {
              let {
                layout: t,
                layoutId: i
              } = e.options;
              window.MotionCancelOptimisedAnimation(n, "transform", frameloopSchedulerUtils_1.scheduleFrame, !t && !i);
            }
            let {
              parent: r
            } = e;
            if (r && !r.hasCheckedOptimisedAppear) {
              t(r);
            }
          })(this);
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
          this.nodes.forEach(eE);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(ek);
          return;
        }
        if (!this.isUpdating) {
          this.nodes.forEach(ek);
        }
        this.animationCommitId = this.animationId;
        this.isUpdating = false;
        this.nodes.forEach(eM);
        this.nodes.forEach(eb);
        this.nodes.forEach(eA);
        this.clearAllSnapshots();
        let t = frameTimeCache.frameTimeCache.now();
        frameloopSchedulerUtils_1.frameState.delta = tm(0, 1000 / 60, t - frameloopSchedulerUtils_1.frameState.timestamp);
        frameloopSchedulerUtils_1.frameState.timestamp = t;
        frameloopSchedulerUtils_1.frameState.isProcessing = true;
        frameloopSchedulerUtils_1.frameSteps.update.process(frameloopSchedulerUtils_1.frameState);
        frameloopSchedulerUtils_1.frameSteps.preRender.process(frameloopSchedulerUtils_1.frameState);
        frameloopSchedulerUtils_1.frameSteps.render.process(frameloopSchedulerUtils_1.frameState);
        frameloopSchedulerUtils_1.frameState.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          tS.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(eS);
        this.sharedNodes.forEach(eD);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frameloopSchedulerUtils_1.scheduleFrame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frameloopSchedulerUtils_1.scheduleFrame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      updateSnapshot() {
        if (!this.snapshot && !!this.instance) {
          this.snapshot = this.measure();
          if (!!this.snapshot && !j(this.snapshot.measuredBox.x) && !j(this.snapshot.measuredBox.y)) {
            this.snapshot = undefined;
          }
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
        this.layoutCorrected = N();
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
        if (e && this.instance) {
          let e = r(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: e,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e
          };
        }
      }
      resetTransform() {
        if (!s) {
          return;
        }
        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        let e = this.projectionDelta && !el(this.projectionDelta);
        let i = this.getTransformTemplate();
        let n = i ? i(this.latestValues, "") : undefined;
        let r = n !== this.prevTransformTemplateValue;
        if (t && this.instance && (e || H(this.latestValues) || r)) {
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
        eW((t = n).x);
        eW(t.y);
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
          visualElement: e
        } = this.options;
        if (!e) {
          return N();
        }
        let i = e.measureViewportBox();
        if (!this.scroll?.wasRoot && !this.path.some(e_)) {
          let {
            scroll: t
          } = this.root;
          if (t) {
            J(i.x, t.offset.x);
            J(i.y, t.offset.y);
          }
        }
        return i;
      }
      removeElementScroll(t) {
        let i = N();
        et(i, t);
        if (this.scroll?.wasRoot) {
          return i;
        }
        for (let e = 0; e < this.path.length; e++) {
          let n = this.path[e];
          let {
            scroll: r,
            options: s
          } = n;
          if (n !== this.root && r && s.layoutScroll) {
            if (r.wasRoot) {
              et(i, t);
            }
            J(i.x, r.offset.x);
            J(i.y, r.offset.y);
          }
        }
        return i;
      }
      applyTransform(t, e = false) {
        let i = N();
        et(i, t);
        for (let t = 0; t < this.path.length; t++) {
          let n = this.path[t];
          if (!e && n.options.layoutScroll && n.scroll && n !== n.root) {
            tt(i, {
              x: -n.scroll.offset.x,
              y: -n.scroll.offset.y
            });
          }
          if (H(n.latestValues)) {
            tt(i, n.latestValues);
          }
        }
        if (H(this.latestValues)) {
          tt(i, this.latestValues);
        }
        return i;
      }
      removeTransform(t) {
        let e = N();
        et(e, t);
        for (let t = 0; t < this.path.length; t++) {
          let i = this.path[t];
          if (!i.instance || !H(i.latestValues)) {
            continue;
          }
          if (K(i.latestValues)) {
            i.updateSnapshot();
          }
          let n = N();
          et(n, i.measurePageBox());
          eo(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : undefined, n);
        }
        if (H(this.latestValues)) {
          eo(e, this.latestValues);
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
        if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameloopSchedulerUtils_1.frameState.timestamp) {
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
        if (!r && (!o || !this.isSharedProjectionDirty) && !this.isProjectionDirty && !this.parent?.isProjectionDirty && !this.attemptToResolveRelativeTarget && !this.root.updateBlockedByResize) {
          return;
        }
        let {
          layout: a,
          layoutId: l
        } = this.options;
        if (this.layout && (a || l)) {
          this.resolvedRelativeTargetAt = frameloopSchedulerUtils_1.frameState.timestamp;
          if (!this.targetDelta && !this.relativeTarget) {
            let t = this.getClosestProjectingParent();
            if (t && t.layout && this.animationProgress !== 1) {
              this.relativeParent = t;
              this.forceRelativeParentToResolveTarget();
              this.relativeTarget = N();
              this.relativeTargetOrigin = N();
              I(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox);
              et(this.relativeTarget, this.relativeTargetOrigin);
            } else {
              this.relativeParent = this.relativeTarget = undefined;
            }
          }
          if (this.relativeTarget || this.targetDelta) {
            if (!this.target) {
              this.target = N();
              this.targetWithTransforms = N();
            }
            if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
              this.forceRelativeParentToResolveTarget();
              e = this.target;
              i = this.relativeTarget;
              n = this.relativeParent.target;
              O(e.x, i.x, n.x);
              O(e.y, i.y, n.y);
            } else if (this.targetDelta) {
              if (this.resumingFrom) {
                this.target = this.applyTransform(this.layout.layoutBox);
              } else {
                et(this.target, this.layout.layoutBox);
              }
              G(this.target, this.targetDelta);
            } else {
              et(this.target, this.layout.layoutBox);
            }
            if (this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              let t = this.getClosestProjectingParent();
              if (t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && this.animationProgress !== 1) {
                this.relativeParent = t;
                this.forceRelativeParentToResolveTarget();
                this.relativeTarget = N();
                this.relativeTargetOrigin = N();
                I(this.relativeTargetOrigin, this.target, t.target);
                et(this.relativeTarget, this.relativeTargetOrigin);
              } else {
                this.relativeParent = this.relativeTarget = undefined;
              }
            }
            if (projectionMetrics.projectionMetrics.value) {
              em.calculatedTargetDeltas++;
            }
          }
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || K(this.parent.latestValues) || Y(this.parent.latestValues)) {
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
        if (this.resolvedRelativeTargetAt === frameloopSchedulerUtils_1.frameState.timestamp) {
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
        et(this.layoutCorrected, this.layout.layoutBox);
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
              let {
                visualElement: o
              } = n.options;
              if (!o || !o.props.style || o.props.style.display !== "contents") {
                if (s && n.options.layoutScroll && n.scroll && n !== n.root) {
                  tt(t, {
                    x: -n.scroll.offset.x,
                    y: -n.scroll.offset.y
                  });
                }
                if (r) {
                  e.x *= r.x.scale;
                  e.y *= r.y.scale;
                  G(t, r);
                }
                if (s && H(n.latestValues)) {
                  tt(t, n.latestValues);
                }
              }
            }
            if (e.x < 1.0000000000001 && e.x > 0.999999999999) {
              e.x = 1;
            }
            if (e.y < 1.0000000000001 && e.y > 0.999999999999) {
              e.y = 1;
            }
          }
        })(this.layoutCorrected, this.treeScale, this.path, i);
        if (e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          e.target = e.layout.layoutBox;
          e.targetWithTransforms = N();
        }
        let {
          target: l
        } = e;
        if (!l) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (this.projectionDelta && this.prevProjectionDelta) {
          ee(this.prevProjectionDelta.x, this.projectionDelta.x);
          ee(this.prevProjectionDelta.y, this.projectionDelta.y);
        } else {
          this.createProjectionDeltas();
        }
        $(this.projectionDelta, this.layoutCorrected, l, this.latestValues);
        if (this.treeScale.x !== o || this.treeScale.y !== a || !ep(this.projectionDelta.x, this.prevProjectionDelta.x) || !ep(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", l);
        }
        if (projectionMetrics.projectionMetrics.value) {
          em.calculatedProjections++;
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender() {
        var t;
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if ((t = this.options.visualElement) !== null && t !== undefined) {
          t.scheduleRender();
        }
        if (e) {
          let t = this.getStack();
          if (t) {
            t.scheduleRender();
          }
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = undefined;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = U();
        this.projectionDelta = U();
        this.projectionDeltaWithTransform = U();
      }
      setAnimationOrigin(t) {
        let e;
        let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        let n = this.snapshot;
        let r = n ? n.latestValues : {};
        let s = {
          ...this.latestValues
        };
        let o = U();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = undefined;
        }
        this.attemptToResolveRelativeTarget = !i;
        let a = N();
        let l = (n ? n.source : undefined) !== (this.layout ? this.layout.source : undefined);
        let u = this.getStack();
        let h = !u || u.members.length <= 1;
        let c = !!l && !h && this.options.crossfade === true && !this.path.some(e$);
        this.animationProgress = 0;
        this.mixTargetDelta = i => {
          let n = i / 1000;
          ej(o.x, t.x, n);
          ej(o.y, t.y, n);
          this.setTargetDelta(o);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var u;
            var d;
            var p;
            var f;
            var m;
            var g;
            I(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
            p = this.relativeTarget;
            f = this.relativeTargetOrigin;
            m = a;
            g = n;
            eL(p.x, f.x, m.x, g);
            eL(p.y, f.y, m.y, g);
            if (e && (u = this.relativeTarget, d = e, eu(u.x, d.x) && eu(u.y, d.y))) {
              this.isProjectionDirty = false;
            }
            e ||= N();
            et(e, this.relativeTarget);
          }
          if (l) {
            this.animationValues = s;
            (function (t, e, i, n, r, s) {
              if (r) {
                t.opacity = linearInterpolation.linearInterpolate(0, i.opacity ?? 1, t7(n));
                t.opacityExit = linearInterpolation.linearInterpolate(e.opacity ?? 1, 0, t6(n));
              } else if (s) {
                t.opacity = linearInterpolation.linearInterpolate(e.opacity ?? 1, i.opacity ?? 1, n);
              }
              for (let r = 0; r < t2; r++) {
                let s = `border${t1[r]}Radius`;
                let o = t4(e, s);
                let a = t4(i, s);
                if (o !== undefined || a !== undefined) {
                  o ||= 0;
                  a ||= 0;
                  if (o === 0 || a === 0 || t3(o) === t3(a)) {
                    t[s] = Math.max(linearInterpolation.linearInterpolate(t5(o), t5(a), n), 0);
                    if (cssUnitValueParserTransformers.percentUnit.test(a) || cssUnitValueParserTransformers.percentUnit.test(o)) {
                      t[s] += "%";
                    }
                  } else {
                    t[s] = a;
                  }
                }
              }
              if (e.rotate || i.rotate) {
                t.rotate = linearInterpolation.linearInterpolate(e.rotate || 0, i.rotate || 0, n);
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
        var e;
        var i;
        var n;
        this.notifyListeners("animationStart");
        if ((e = this.currentAnimation) !== null && e !== undefined) {
          e.stop();
        }
        if ((n = this.resumingFrom) !== null && n !== undefined && (i = n.currentAnimation) !== null && i !== undefined) {
          i.stop();
        }
        if (this.pendingAnimation) {
          frameloopSchedulerUtils_1.cancelFrame(this.pendingAnimation);
          this.pendingAnimation = undefined;
        }
        this.pendingAnimation = frameloopSchedulerUtils_1.scheduleFrame.update(() => {
          tF.hasAnimatedSinceResize = true;
          threadLimitConfig.threadLimitConfig.layout++;
          this.motionValue ||= animatedValueFactory.createAnimatedValue(0);
          this.currentAnimation = function (t, e, i) {
            let n = hasVelocityMethodCheck.hasVelocityMethod(t) ? t : animatedValueFactory.createAnimatedValue(t);
            n.start(animationCoreFactory.createAnimation("", n, e, i));
            return n.animation;
          }(this.motionValue, [0, 1000], {
            ...t,
            velocity: 0,
            isSync: true,
            onUpdate: e => {
              this.mixTargetDelta(e);
              if (t.onUpdate) {
                t.onUpdate(e);
              }
            },
            onStop: () => {
              threadLimitConfig.threadLimitConfig.layout--;
            },
            onComplete: () => {
              threadLimitConfig.threadLimitConfig.layout--;
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
          if (this !== t && this.layout && n && eU(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
            i = this.target || N();
            let e = j(this.layout.layoutBox.x);
            i.x.min = t.target.x.min;
            i.x.max = i.x.min + e;
            let n = j(this.layout.layoutBox.y);
            i.y.min = t.target.y.min;
            i.y.max = i.y.min + n;
          }
          et(e, i);
          tt(e, r);
          $(this.projectionDeltaWithTransform, this.layoutCorrected, e, r);
        }
      }
      registerSharedNode(t, e) {
        if (!this.sharedNodes.has(t)) {
          this.sharedNodes.set(t, new ef());
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
      resetSkewAndRotation() {
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
        if (i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) {
          e = true;
        }
        if (!e) {
          return;
        }
        let n = {};
        if (i.z) {
          ex("z", t, n, this.animationValues);
        }
        for (let e = 0; e < eg.length; e++) {
          ex(`rotate${eg[e]}`, t, n, this.animationValues);
          ex(`skew${eg[e]}`, t, n, this.animationValues);
        }
        t.render();
        for (let e in n) {
          t.setStaticValue(e, n[e]);
          if (this.animationValues) {
            this.animationValues[e] = n[e];
          }
        }
        t.scheduleRender();
      }
      getProjectionStyles(t) {
        if (!this.instance || this.isSVG) {
          return;
        }
        if (!this.isVisible) {
          return ev;
        }
        let e = {
          visibility: ""
        };
        let i = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          e.opacity = "";
          e.pointerEvents = tQ(t == null ? undefined : t.pointerEvents) || "";
          e.transform = i ? i(this.latestValues, "") : "none";
          return e;
        }
        let n = this.getLead();
        if (!this.projectionDelta || !this.layout || !n.target) {
          let e = {};
          if (this.options.layoutId) {
            e.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
            e.pointerEvents = tQ(t == null ? undefined : t.pointerEvents) || "";
          }
          if (this.hasProjected && !H(this.latestValues)) {
            e.transform = i ? i({}, "") : "none";
            this.hasProjected = false;
          }
          return e;
        }
        let r = n.animationValues || n.latestValues;
        this.applyTransformsToTarget();
        e.transform = function (t, e, i) {
          let n = "";
          let r = t.x.translate / e.x;
          let s = t.y.translate / e.y;
          let o = (i == null ? undefined : i.z) || 0;
          if (r || s || o) {
            n = `translate3d(${r}px, ${s}px, ${o}px) `;
          }
          if (e.x !== 1 || e.y !== 1) {
            n += `scale(${1 / e.x}, ${1 / e.y}) `;
          }
          if (i) {
            let {
              transformPerspective: t,
              rotate: e,
              rotateX: r,
              rotateY: s,
              skewX: o,
              skewY: a
            } = i;
            if (t) {
              n = `perspective(${t}px) ${n}`;
            }
            if (e) {
              n += `rotate(${e}deg) `;
            }
            if (r) {
              n += `rotateX(${r}deg) `;
            }
            if (s) {
              n += `rotateY(${s}deg) `;
            }
            if (o) {
              n += `skewX(${o}deg) `;
            }
            if (a) {
              n += `skewY(${a}deg) `;
            }
          }
          let a = t.x.scale * e.x;
          let l = t.y.scale * e.y;
          if (a !== 1 || l !== 1) {
            n += `scale(${a}, ${l})`;
          }
          return n || "none";
        }(this.projectionDeltaWithTransform, this.treeScale, r);
        if (i) {
          e.transform = i(r, e.transform);
        }
        let {
          x: s,
          y: o
        } = this.projectionDelta;
        e.transformOrigin = `${s.origin * 100}% ${o.origin * 100}% 0`;
        if (n.animationValues) {
          e.opacity = n === this ? r.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit;
        } else {
          e.opacity = n === this ? r.opacity !== undefined ? r.opacity : "" : r.opacityExit !== undefined ? r.opacityExit : 0;
        }
        for (let t in tL) {
          if (r[t] === undefined) {
            continue;
          }
          let {
            correct: i,
            applyTo: s,
            isCSSVariable: o
          } = tL[t];
          let a = e.transform === "none" ? r[t] : i(r[t], n);
          if (s) {
            let t = s.length;
            for (let i = 0; i < t; i++) {
              e[s[i]] = a;
            }
          } else if (o) {
            this.options.visualElement.renderState.vars[t] = a;
          } else {
            e[t] = a;
          }
        }
        if (this.options.layoutId) {
          e.pointerEvents = n === this ? tQ(t == null ? undefined : t.pointerEvents) || "" : "none";
        }
        return e;
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
        this.root.nodes.forEach(eE);
        this.root.sharedNodes.clear();
      }
      constructor(t = {}, e = i == null ? undefined : i()) {
        this.id = ey++;
        this.animationId = 0;
        this.animationCommitId = 0;
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
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = {
          x: 1,
          y: 1
        };
        this.eventHandlers = new Map();
        this.hasTreeAnimated = false;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          if (projectionMetrics.projectionMetrics.value) {
            em.nodes = em.calculatedTargetDeltas = em.calculatedProjections = 0;
          }
          this.nodes.forEach(eP);
          this.nodes.forEach(eF);
          this.nodes.forEach(eR);
          this.nodes.forEach(eT);
          if (projectionMetrics.projectionMetrics.addProjectionMetrics) {
            projectionMetrics.projectionMetrics.addProjectionMetrics(em);
          }
        };
        this.resolvedRelativeTargetAt = 0;
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
          this.nodes = new tJ();
        }
      }
    };
  }
  function eb(t) {
    t.updateLayout();
  }
  function eA(t) {
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
        z(t => {
          let n = s ? i.measuredBox[t] : i.layoutBox[t];
          let r = j(n);
          n.min = e[t].min;
          n.max = n.min + r;
        });
      } else if (eU(r, i.layoutBox, e)) {
        z(n => {
          let r = s ? i.measuredBox[n] : i.layoutBox[n];
          let o = j(e[n]);
          r.max = r.min + o;
          if (t.relativeTarget && !t.currentAnimation) {
            t.isProjectionDirty = true;
            t.relativeTarget[n].max = t.relativeTarget[n].min + o;
          }
        });
      }
      let o = U();
      $(o, e, i.layoutBox);
      let a = U();
      if (s) {
        $(a, t.applyTransform(n, true), i.measuredBox);
      } else {
        $(a, e, i.layoutBox);
      }
      let l = !el(o);
      let u = false;
      if (!t.resumeFrom) {
        let n = t.getClosestProjectingParent();
        if (n && !n.resumeFrom) {
          let {
            snapshot: r,
            layout: s
          } = n;
          if (r && s) {
            let o = N();
            I(o, i.layoutBox, r.layoutBox);
            let a = N();
            I(a, e, s.layoutBox);
            if (!ec(o, a)) {
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
        hasRelativeLayoutChanged: u
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
  function eP(t) {
    if (projectionMetrics.projectionMetrics.value) {
      em.nodes++;
    }
    if (t.parent) {
      if (!t.isProjecting()) {
        t.isProjectionDirty = t.parent.isProjectionDirty;
      }
      t.isSharedProjectionDirty ||= !!t.isProjectionDirty || !!t.parent.isProjectionDirty || !!t.parent.isSharedProjectionDirty;
      t.isTransformDirty ||= t.parent.isTransformDirty;
    }
  }
  function eT(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function eS(t) {
    t.clearSnapshot();
  }
  function eE(t) {
    t.clearMeasurements();
  }
  function ek(t) {
    t.isLayoutDirty = false;
  }
  function eM(t) {
    let {
      visualElement: e
    } = t.options;
    if (e && e.getProps().onBeforeLayoutMeasure) {
      e.notify("BeforeLayoutMeasure");
    }
    t.resetTransform();
  }
  function eC(t) {
    t.finishAnimation();
    t.targetDelta = t.relativeTarget = t.target = undefined;
    t.isProjectionDirty = true;
  }
  function eF(t) {
    t.resolveTargetDelta();
  }
  function eR(t) {
    t.calcProjection();
  }
  function eV(t) {
    t.resetSkewAndRotation();
  }
  function eD(t) {
    t.removeLeadSnapshot();
  }
  function ej(t, e, i) {
    t.translate = linearInterpolation.linearInterpolate(e.translate, 0, i);
    t.scale = linearInterpolation.linearInterpolate(e.scale, 1, i);
    t.origin = e.origin;
    t.originPoint = e.originPoint;
  }
  function eL(t, e, i, n) {
    t.min = linearInterpolation.linearInterpolate(e.min, i.min, n);
    t.max = linearInterpolation.linearInterpolate(e.max, i.max, n);
  }
  function e$(t) {
    return t.animationValues && t.animationValues.opacityExit !== undefined;
  }
  let eO = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  let eB = t => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
  let eI = eB("applewebkit/") && !eB("chrome/") ? Math.round : identityFunctionExport.identity;
  function eW(t) {
    t.min = eI(t.min);
    t.max = eI(t.max);
  }
  function eU(t, e, i) {
    return t === "position" || t === "preserve-aspect" && !(Math.abs(ed(e) - ed(i)) <= 0.2);
  }
  function e_(t) {
    return t !== t.root && t.scroll?.wasRoot;
  }
  let eN = ew({
    attachResizeListener: (t, e) => M(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => true
  });
  let ez = {
    current: undefined
  };
  let eX = ew({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!ez.current) {
        let t = new eN({});
        t.mount(window);
        t.setOptions({
          layoutScroll: true
        });
        ez.current = t;
      }
      return ez.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== undefined ? e : "none";
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  });
  function eK(t, e) {
    let i = function (t, e, i) {
      if (t instanceof EventTarget) {
        return [t];
      }
      if (typeof t == "string") {
        var n;
        let e = document;
        n = undefined;
        let i = e.querySelectorAll(t);
        if (i) {
          return Array.from(i);
        } else {
          return [];
        }
      }
      return Array.from(t);
    }(t);
    let n = new AbortController();
    return [i, {
      passive: true,
      ...e,
      signal: n.signal
    }, () => n.abort()];
  }
  function eH(t) {
    return t.pointerType !== "touch" && !A.x && !A.y;
  }
  function eY(t, e, i) {
    let {
      props: n
    } = t;
    if (t.animationState && n.whileHover) {
      t.animationState.setActive("whileHover", i === "Start");
    }
    let r = n["onHover" + i];
    if (r) {
      frameloopSchedulerUtils_1.scheduleFrame.postRender(() => r(e, F(e)));
    }
  }
  var isDomElementChecker = require("is-dom-element-checker") /*id: 34457*/;
  let eq = (t, e) => !!e && (t === e || eq(t, e.parentElement));
  let eG = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  let eJ = new WeakSet();
  function eQ(t) {
    return e => {
      if (e.key === "Enter") {
        t(e);
      }
    };
  }
  function e0(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  let e1 = (t, e) => {
    let i = t.currentTarget;
    if (!i) {
      return;
    }
    let n = eQ(() => {
      if (eJ.has(i)) {
        return;
      }
      e0(i, "down");
      let t = eQ(() => {
        e0(i, "up");
      });
      i.addEventListener("keyup", t, e);
      i.addEventListener("blur", () => e0(i, "cancel"), e);
    });
    i.addEventListener("keydown", n, e);
    i.addEventListener("blur", () => i.removeEventListener("keydown", n), e);
  };
  function e2(t) {
    return C(t) && !A.x && !A.y;
  }
  function e5(t, e, i) {
    let {
      props: n
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) {
      return;
    }
    if (t.animationState && n.whileTap) {
      t.animationState.setActive("whileTap", i === "Start");
    }
    let r = n["onTap" + (i === "End" ? "" : i)];
    if (r) {
      frameloopSchedulerUtils_1.scheduleFrame.postRender(() => r(e, F(e)));
    }
  }
  let e3 = new WeakMap();
  let e4 = new WeakMap();
  let e7 = t => {
    let e = e3.get(t.target);
    if (e) {
      e(t);
    }
  };
  let e6 = t => {
    t.forEach(e7);
  };
  let e9 = {
    some: 0,
    all: 1
  };
  let e8 = reactCoreLibraryReexport.createContext({
    strict: false
  });
  var motionContextProvider = require("motion-context-provider") /*id: 271458*/;
  let ie = reactCoreLibraryReexport.createContext({});
  function ii(t) {
    return n(t.animate) || d.some(e => h(t[e]));
  }
  function ir(t) {
    return !!ii(t) || !!t.variants;
  }
  function is(t) {
    if (Array.isArray(t)) {
      return t.join(" ");
    } else {
      return t;
    }
  }
  var browserEnvCheck_1 = require("browser-env-check_1") /*id: 647758*/;
  let ia = {
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
  let il = {};
  for (let t in ia) {
    il[t] = {
      isEnabled: e => ia[t].some(t => !!e[t])
    };
  }
  let iu = Symbol.for("motionComponentSymbol");
  var generateFramerAppearDataAttribute = require("generate-framer-appear-data-attribute") /*id: 584464*/;
  var imagePreviewContext = require("image-preview-context") /*id: 61163*/;
  var useLayoutEffectSsr = require("use-layout-effect-ssr") /*id: 730770*/;
  var cssTransformProps = require("css-transform-props") /*id: 641552*/;
  function im(t, e) {
    let {
      layout: i,
      layoutId: n
    } = e;
    return cssTransformProps.transformPropSet.has(t) || t.startsWith("origin") || (i || n !== undefined) && (!!tL[t] || t === "opacity");
  }
  let ig = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  var numberTypeTransformers = require("number-type-transformers") /*id: 397219*/;
  let iy = {
    ...numberTypeTransformers.numberTransformer,
    transform: Math.round
  };
  let ix = {
    rotate: cssUnitValueParserTransformers.degreeUnit,
    rotateX: cssUnitValueParserTransformers.degreeUnit,
    rotateY: cssUnitValueParserTransformers.degreeUnit,
    rotateZ: cssUnitValueParserTransformers.degreeUnit,
    scale: numberTypeTransformers.defaultNumberTransformer,
    scaleX: numberTypeTransformers.defaultNumberTransformer,
    scaleY: numberTypeTransformers.defaultNumberTransformer,
    scaleZ: numberTypeTransformers.defaultNumberTransformer,
    skew: cssUnitValueParserTransformers.degreeUnit,
    skewX: cssUnitValueParserTransformers.degreeUnit,
    skewY: cssUnitValueParserTransformers.degreeUnit,
    distance: cssUnitValueParserTransformers.pixelUnit,
    translateX: cssUnitValueParserTransformers.pixelUnit,
    translateY: cssUnitValueParserTransformers.pixelUnit,
    translateZ: cssUnitValueParserTransformers.pixelUnit,
    x: cssUnitValueParserTransformers.pixelUnit,
    y: cssUnitValueParserTransformers.pixelUnit,
    z: cssUnitValueParserTransformers.pixelUnit,
    perspective: cssUnitValueParserTransformers.pixelUnit,
    transformPerspective: cssUnitValueParserTransformers.pixelUnit,
    opacity: numberTypeTransformers.clampedNumberTransformer,
    originX: cssUnitValueParserTransformers.percentUnitNormalized,
    originY: cssUnitValueParserTransformers.percentUnitNormalized,
    originZ: cssUnitValueParserTransformers.pixelUnit
  };
  let iw = {
    borderWidth: cssUnitValueParserTransformers.pixelUnit,
    borderTopWidth: cssUnitValueParserTransformers.pixelUnit,
    borderRightWidth: cssUnitValueParserTransformers.pixelUnit,
    borderBottomWidth: cssUnitValueParserTransformers.pixelUnit,
    borderLeftWidth: cssUnitValueParserTransformers.pixelUnit,
    borderRadius: cssUnitValueParserTransformers.pixelUnit,
    radius: cssUnitValueParserTransformers.pixelUnit,
    borderTopLeftRadius: cssUnitValueParserTransformers.pixelUnit,
    borderTopRightRadius: cssUnitValueParserTransformers.pixelUnit,
    borderBottomRightRadius: cssUnitValueParserTransformers.pixelUnit,
    borderBottomLeftRadius: cssUnitValueParserTransformers.pixelUnit,
    width: cssUnitValueParserTransformers.pixelUnit,
    maxWidth: cssUnitValueParserTransformers.pixelUnit,
    height: cssUnitValueParserTransformers.pixelUnit,
    maxHeight: cssUnitValueParserTransformers.pixelUnit,
    top: cssUnitValueParserTransformers.pixelUnit,
    right: cssUnitValueParserTransformers.pixelUnit,
    bottom: cssUnitValueParserTransformers.pixelUnit,
    left: cssUnitValueParserTransformers.pixelUnit,
    padding: cssUnitValueParserTransformers.pixelUnit,
    paddingTop: cssUnitValueParserTransformers.pixelUnit,
    paddingRight: cssUnitValueParserTransformers.pixelUnit,
    paddingBottom: cssUnitValueParserTransformers.pixelUnit,
    paddingLeft: cssUnitValueParserTransformers.pixelUnit,
    margin: cssUnitValueParserTransformers.pixelUnit,
    marginTop: cssUnitValueParserTransformers.pixelUnit,
    marginRight: cssUnitValueParserTransformers.pixelUnit,
    marginBottom: cssUnitValueParserTransformers.pixelUnit,
    marginLeft: cssUnitValueParserTransformers.pixelUnit,
    backgroundPositionX: cssUnitValueParserTransformers.pixelUnit,
    backgroundPositionY: cssUnitValueParserTransformers.pixelUnit,
    ...ix,
    zIndex: iy,
    fillOpacity: numberTypeTransformers.clampedNumberTransformer,
    strokeOpacity: numberTypeTransformers.clampedNumberTransformer,
    numOctaves: iy
  };
  let ib = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  let iA = cssTransformProps.transformPropList.length;
  function iP(t, e, i) {
    let {
      style: n,
      vars: r,
      transformOrigin: s
    } = t;
    let o = false;
    let a = false;
    for (let t in e) {
      let i = e[t];
      if (cssTransformProps.transformPropSet.has(t)) {
        o = true;
        continue;
      }
      if (cssCustomPropertyValidator.isCustomProperty(t)) {
        r[t] = i;
        continue;
      }
      {
        let e = ig(i, iw[t]);
        if (t.startsWith("origin")) {
          a = true;
          s[t] = e;
        } else {
          n[t] = e;
        }
      }
    }
    if (!e.transform) {
      if (o || i) {
        n.transform = function (t, e, i) {
          let n = "";
          let r = true;
          for (let s = 0; s < iA; s++) {
            let o = cssTransformProps.transformPropList[s];
            let a = t[o];
            if (a === undefined) {
              continue;
            }
            let l = true;
            if (!(l = typeof a == "number" ? a === +!!o.startsWith("scale") : parseFloat(a) === 0) || i) {
              let t = ig(a, iw[o]);
              if (!l) {
                r = false;
                let e = ib[o] || o;
                n += `${e}(${t}) `;
              }
              if (i) {
                e[o] = t;
              }
            }
          }
          n = n.trim();
          if (i) {
            n = i(e, r ? "" : n);
          } else if (r) {
            n = "none";
          }
          return n;
        }(e, t.transform, i);
      } else {
        n.transform &&= "none";
      }
    }
    if (a) {
      let {
        originX: t = "50%",
        originY: e = "50%",
        originZ: i = 0
      } = s;
      n.transformOrigin = `${t} ${e} ${i}`;
    }
  }
  let iT = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function iS(t, e, i) {
    for (let n in e) {
      if (!hasVelocityMethodCheck.hasVelocityMethod(e[n]) && !im(n, i)) {
        t[n] = e[n];
      }
    }
  }
  let iE = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  let ik = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function iM(t, e, i, n, r) {
    let {
      attrX: a,
      attrY: l,
      attrScale: u,
      pathLength: h,
      pathSpacing: c = 1,
      pathOffset: d = 0,
      ...p
    } = e;
    iP(t, p, n);
    if (i) {
      if (t.style.viewBox) {
        t.attrs.viewBox = t.style.viewBox;
      }
      return;
    }
    t.attrs = t.style;
    t.style = {};
    let {
      attrs: f,
      style: m
    } = t;
    if (f.transform) {
      m.transform = f.transform;
      delete f.transform;
    }
    if (m.transform || f.transformOrigin) {
      m.transformOrigin = f.transformOrigin ?? "50% 50%";
      delete f.transformOrigin;
    }
    if (m.transform) {
      m.transformBox = (r == null ? undefined : r.transformBox) ?? "fill-box";
      delete f.transformBox;
    }
    if (a !== undefined) {
      f.x = a;
    }
    if (l !== undefined) {
      f.y = l;
    }
    if (u !== undefined) {
      f.scale = u;
    }
    if (h !== undefined) {
      (function (t, e, i = 1, n = 0) {
        let r = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        t.pathLength = 1;
        let s = r ? iE : ik;
        t[s.offset] = cssUnitValueParserTransformers.pixelUnit.transform(-n);
        let o = cssUnitValueParserTransformers.pixelUnit.transform(e);
        let a = cssUnitValueParserTransformers.pixelUnit.transform(i);
        t[s.array] = `${o} ${a}`;
      })(f, h, c, d, false);
    }
  }
  let iC = () => ({
    ...iT(),
    attrs: {}
  });
  let iF = t => typeof t == "string" && t.toLowerCase() === "svg";
  let iR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function iV(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || iR.has(t);
  }
  let iD = t => !iV(t);
  try {
    r = require("react-dom-prop-validator") /*id: 742932*/.default;
    if (typeof r == "function") {
      iD = t => t.startsWith("on") ? !iV(t) : r(t);
    }
  } catch {}
  let ij = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  function iL(t) {
    if (typeof t != "string" || t.includes("-")) ;else if (ij.indexOf(t) > -1 || /[A-Z]/u.test(t)) {
      return true;
    }
    return false;
  }
  var animationVariantResolver = require("animation-variant-resolver") /*id: 126557*/;
  var useLazyRefHook_1 = require("use-lazy-ref-hook_1") /*id: 906944*/;
  let iB = t => (e, i) => {
    let r = reactCoreLibraryReexport.useContext(ie);
    let s = reactCoreLibraryReexport.useContext(imagePreviewContext.previewContext);
    let o = () => function (t, e, i, r) {
      let {
        scrapeMotionValuesFromProps: s,
        createRenderState: o
      } = t;
      return {
        latestValues: function (t, e, i, r) {
          let s = {};
          let o = r(t, {});
          for (let t in o) {
            s[t] = tQ(o[t]);
          }
          let {
            initial: a,
            animate: l
          } = t;
          let u = ii(t);
          let h = ir(t);
          if (e && h && !u && t.inherit !== false) {
            if (a === undefined) {
              a = e.initial;
            }
            if (l === undefined) {
              l = e.animate;
            }
          }
          let c = !!i && i.initial === false;
          let d = (c = c || a === false) ? l : a;
          if (d && typeof d != "boolean" && !n(d)) {
            let e = Array.isArray(d) ? d : [d];
            for (let i = 0; i < e.length; i++) {
              let n = animationVariantResolver.resolveVariant(t, e[i]);
              if (n) {
                let {
                  transitionEnd: t,
                  transition: e,
                  ...i
                } = n;
                for (let t in i) {
                  let e = i[t];
                  if (Array.isArray(e)) {
                    let t = c ? e.length - 1 : 0;
                    e = e[t];
                  }
                  if (e !== null) {
                    s[t] = e;
                  }
                }
                for (let e in t) {
                  s[e] = t[e];
                }
              }
            }
          }
          return s;
        }(e, i, r, s),
        renderState: o()
      };
    }(t, e, r, s);
    if (i) {
      return o();
    } else {
      return useLazyRefHook_1.useLazyRef(o);
    }
  };
  function iI(t, e, i) {
    let {
      style: n
    } = t;
    let r = {};
    for (let o in n) {
      if (hasVelocityMethodCheck.hasVelocityMethod(n[o]) || e.style && hasVelocityMethodCheck.hasVelocityMethod(e.style[o]) || im(o, t) || (i == null ? undefined : i.getValue(o)?.liveStyle) !== undefined) {
        r[o] = n[o];
      }
    }
    return r;
  }
  let iW = {
    useVisualState: iB({
      scrapeMotionValuesFromProps: iI,
      createRenderState: iT
    })
  };
  function iU(t, e, i) {
    let n = iI(t, e, i);
    for (let i in t) {
      if (hasVelocityMethodCheck.hasVelocityMethod(t[i]) || hasVelocityMethodCheck.hasVelocityMethod(e[i])) {
        n[cssTransformProps.transformPropList.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i];
      }
    }
    return n;
  }
  let i_ = {
    useVisualState: iB({
      scrapeMotionValuesFromProps: iU,
      createRenderState: iC
    })
  };
  var parseTransformMatrixValues = require("parse-transform-matrix-values") /*id: 704219*/;
  var cssLayoutPropsSet = require("css-layout-props-set") /*id: 549077*/;
  let iX = t => e => e.test(t);
  let iK = [numberTypeTransformers.numberTransformer, cssUnitValueParserTransformers.pixelUnit, cssUnitValueParserTransformers.percentUnit, cssUnitValueParserTransformers.degreeUnit, cssUnitValueParserTransformers.viewportWidthUnit, cssUnitValueParserTransformers.viewportHeightUnit, {
    test: t => t === "auto",
    parse: t => t
  }];
  let iH = t => iK.find(iX(t));
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var numericStringValidator = require("numeric-string-validator") /*id: 434453*/;
  let iq = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  var keyframeResolverCore = require("keyframe-resolver-core") /*id: 717903*/;
  var leadingZeroCheck = require("leading-zero-check") /*id: 952325*/;
  var numberRegexPattern = require("number-regex-pattern") /*id: 910589*/;
  let i0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function i1(t) {
    let [e, i] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") {
      return t;
    }
    let [n] = i.match(numberRegexPattern.numberRegex) || [];
    if (!n) {
      return t;
    }
    let r = i.replace(n, "");
    let s = +!!i0.has(e);
    if (n !== i) {
      s *= 100;
    }
    return e + "(" + s + r + ")";
  }
  let i2 = /\b([a-z-]*)\(.*?\)/gu;
  let i5 = {
    ...cssValueParser_2.cssValueHandler,
    getAnimatableNone: t => {
      let e = t.match(i2);
      if (e) {
        return e.map(i1).join(" ");
      } else {
        return t;
      }
    }
  };
  var colorParserAndTransformer = require("color-parser-and-transformer") /*id: 719203*/;
  let i4 = {
    ...iw,
    color: colorParserAndTransformer.colorParser,
    backgroundColor: colorParserAndTransformer.colorParser,
    outlineColor: colorParserAndTransformer.colorParser,
    fill: colorParserAndTransformer.colorParser,
    stroke: colorParserAndTransformer.colorParser,
    borderColor: colorParserAndTransformer.colorParser,
    borderTopColor: colorParserAndTransformer.colorParser,
    borderRightColor: colorParserAndTransformer.colorParser,
    borderBottomColor: colorParserAndTransformer.colorParser,
    borderLeftColor: colorParserAndTransformer.colorParser,
    filter: i5,
    WebkitFilter: i5
  };
  let i7 = t => i4[t];
  function i6(t, e) {
    let i = i7(t);
    if (i !== i5) {
      i = cssValueParser_2.cssValueHandler;
    }
    if (i.getAnimatableNone) {
      return i.getAnimatableNone(e);
    } else {
      return undefined;
    }
  }
  let i9 = new Set(["auto", "none", "0"]);
  var cssTransformCalculators = require("css-transform-calculators") /*id: 271813*/;
  class nt extends keyframeResolverCore.KeyframeResolver {
    readKeyframes() {
      let {
        unresolvedKeyframes: t,
        element: e,
        name: i
      } = this;
      if (!e || !e.current) {
        return;
      }
      super.readKeyframes();
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (typeof n == "string" && (n = n.trim(), cssCustomPropertyValidator.isValidVarSyntax(n))) {
          let r = function t(e, i, n = 1) {
            stubFunctions.noopFunc(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
            let [r, s] = function (t) {
              let e = iq.exec(t);
              if (!e) {
                return [,];
              }
              let [, i, n, r] = e;
              return [`--${i ?? n}`, r];
            }(e);
            if (!r) {
              return;
            }
            let o = window.getComputedStyle(i).getPropertyValue(r);
            if (o) {
              let t = o.trim();
              if (numericStringValidator.isNumericString(t)) {
                return parseFloat(t);
              } else {
                return t;
              }
            }
            if (cssCustomPropertyValidator.isValidVarSyntax(s)) {
              return t(s, i, n + 1);
            } else {
              return s;
            }
          }(n, e.current);
          if (r !== undefined) {
            t[i] = r;
          }
          if (i === t.length - 1) {
            this.finalKeyframe = n;
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!cssLayoutPropsSet.layoutAndTransformProps.has(i) || t.length !== 2) {
        return;
      }
      let [n, r] = t;
      let s = iH(n);
      let o = iH(r);
      if (s !== o) {
        if (cssTransformCalculators.isTransformType(s) && cssTransformCalculators.isTransformType(o)) {
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (typeof i == "string") {
              t[e] = parseFloat(i);
            }
          }
        } else if (cssTransformCalculators.transformCalculators[i]) {
          this.needsMeasurement = true;
        }
      }
    }
    resolveNoneKeyframes() {
      let {
        unresolvedKeyframes: t,
        name: e
      } = this;
      let i = [];
      for (let e = 0; e < t.length; e++) {
        var n;
        if (t[e] === null || (typeof (n = t[e]) == "number" ? n === 0 : n === null || n === "none" || n === "0" || leadingZeroCheck.hasLeadingZero(n))) {
          i.push(e);
        }
      }
      if (i.length) {
        (function (t, e, i) {
          let n;
          let r = 0;
          while (r < t.length && !n) {
            let e = t[r];
            if (typeof e == "string" && !i9.has(e) && cssValueParser_2.parseStyleValues(e).values.length) {
              n = t[r];
            }
            r++;
          }
          if (n && i) {
            for (let r of e) {
              t[r] = i6(i, n);
            }
          }
        })(t, i, e);
      }
    }
    measureInitialState() {
      let {
        element: t,
        unresolvedKeyframes: e,
        name: i
      } = this;
      if (!t || !t.current) {
        return;
      }
      if (i === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = cssTransformCalculators.transformCalculators[i](t.measureViewportBox(), window.getComputedStyle(t.current));
      e[0] = this.measuredOrigin;
      let n = e[e.length - 1];
      if (n !== undefined) {
        t.getValue(i, n).jump(n, false);
      }
    }
    measureEndState() {
      let {
        element: e,
        name: i,
        unresolvedKeyframes: n
      } = this;
      if (!e || !e.current) {
        return;
      }
      let r = e.getValue(i);
      if (r) {
        r.jump(this.measuredOrigin, false);
      }
      let s = n.length - 1;
      let o = n[s];
      n[s] = cssTransformCalculators.transformCalculators[i](e.measureViewportBox(), window.getComputedStyle(e.current));
      if (o !== null && this.finalKeyframe === undefined) {
        this.finalKeyframe = o;
      }
      if (this.removedTransforms?.length) {
        this.removedTransforms.forEach(t => {
          let [i, n] = t;
          e.getValue(i).set(n);
        });
      }
      this.resolveNoneKeyframes();
    }
    constructor(t, e, i, n, r) {
      super(t, e, i, n, r, true);
    }
  }
  let ne = [...iK, colorParserAndTransformer.colorParser, cssValueParser_2.cssValueHandler];
  let ni = t => ne.find(iX(t));
  let nn = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
  let nr = t => /^0[^.\s]+$/u.test(t);
  let ns = {
    current: null
  };
  let no = {
    current: false
  };
  let na = new WeakMap();
  let nl = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  class nu {
    scrapeMotionValuesFromProps(t, e, i) {
      return {};
    }
    mount(t) {
      this.current = t;
      na.set(t, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(t);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((t, e) => this.bindToMotionValue(e, t));
      if (!no.current) {
        (function () {
          no.current = true;
          if (browserEnvCheck_1.isBrowser) {
            if (window.matchMedia) {
              let t = window.matchMedia("(prefers-reduced-motion)");
              let e = () => ns.current = t.matches;
              t.addListener(e);
              e();
            } else {
              ns.current = false;
            }
          }
        })();
      }
      this.shouldReduceMotion = this.reducedMotionConfig !== "never" && (this.reducedMotionConfig === "always" || ns.current);
      if (this.parent) {
        this.parent.children.add(this);
      }
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      if (this.projection) {
        this.projection.unmount();
      }
      frameloopSchedulerUtils_1.cancelFrame(this.notifyUpdate);
      frameloopSchedulerUtils_1.cancelFrame(this.render);
      this.valueSubscriptions.forEach(t => t());
      this.valueSubscriptions.clear();
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
        let e = this.features[t];
        if (e) {
          e.unmount();
          e.isMounted = false;
        }
      }
      this.current = null;
    }
    bindToMotionValue(t, e) {
      let i;
      if (this.valueSubscriptions.has(t)) {
        this.valueSubscriptions.get(t)();
      }
      let n = cssTransformProps.transformPropSet.has(t);
      if (n && this.onBindTransform) {
        this.onBindTransform();
      }
      let r = e.on("change", e => {
        this.latestValues[t] = e;
        if (this.props.onUpdate) {
          frameloopSchedulerUtils_1.scheduleFrame.preRender(this.notifyUpdate);
        }
        if (n && this.projection) {
          this.projection.isTransformDirty = true;
        }
      });
      let s = e.on("renderRequest", this.scheduleRender);
      if (window.MotionCheckAppearSync) {
        i = window.MotionCheckAppearSync(this, t, e);
      }
      this.valueSubscriptions.set(t, () => {
        r();
        s();
        if (i) {
          i();
        }
        if (e.owner) {
          e.stop();
        }
      });
    }
    sortNodePosition(t) {
      if (this.current && this.sortInstanceNodePosition && this.type === t.type) {
        return this.sortInstanceNodePosition(this.current, t.current);
      } else {
        return 0;
      }
    }
    updateFeatures() {
      let t = "animation";
      for (t in il) {
        let e = il[t];
        if (!e) {
          continue;
        }
        let {
          isEnabled: i,
          Feature: n
        } = e;
        if (!this.features[t] && n && i(this.props)) {
          this.features[t] = new n(this);
        }
        if (this.features[t]) {
          let e = this.features[t];
          if (e.isMounted) {
            e.update();
          } else {
            e.mount();
            e.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      if (this.current) {
        return this.measureInstanceViewportBox(this.current, this.props);
      } else {
        return N();
      }
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    update(t, e) {
      if (t.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = t;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = e;
      for (let e = 0; e < nl.length; e++) {
        let i = nl[e];
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
        for (let n in e) {
          let r = e[n];
          let s = i[n];
          if (hasVelocityMethodCheck.hasVelocityMethod(r)) {
            t.addValue(n, r);
          } else if (hasVelocityMethodCheck.hasVelocityMethod(s)) {
            t.addValue(n, animatedValueFactory.createAnimatedValue(r, {
              owner: t
            }));
          } else if (s !== r) {
            if (t.hasValue(n)) {
              let e = t.getValue(n);
              if (e.liveStyle === true) {
                e.jump(r);
              } else if (!e.hasAnimated) {
                e.set(r);
              }
            } else {
              let e = t.getStaticValue(n);
              t.addValue(n, animatedValueFactory.createAnimatedValue(e !== undefined ? e : r, {
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
      }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues);
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
      let i = this.values.get(t);
      if (e !== i) {
        if (i) {
          this.removeValue(t);
        }
        this.bindToMotionValue(t, e);
        this.values.set(t, e);
        this.latestValues[t] = e.get();
      }
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
        i = animatedValueFactory.createAnimatedValue(e === null ? undefined : e, {
          owner: this
        });
        this.addValue(t, i);
      }
      return i;
    }
    readValue(t, e) {
      let n = this.latestValues[t] === undefined && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
      if (n != null) {
        if (typeof n == "string" && (nn(n) || nr(n))) {
          n = parseFloat(n);
        } else if (!ni(n) && cssValueParser_2.cssValueHandler.test(e)) {
          n = i6(t, e);
        }
        this.setBaseTarget(t, hasVelocityMethodCheck.hasVelocityMethod(n) ? n.get() : n);
      }
      if (hasVelocityMethodCheck.hasVelocityMethod(n)) {
        return n.get();
      } else {
        return n;
      }
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      let e;
      let {
        initial: i
      } = this.props;
      if (typeof i == "string" || typeof i == "object") {
        let r = animationVariantResolver.resolveVariant(this.props, i, this.presenceContext?.custom);
        if (r) {
          e = r[t];
        }
      }
      if (i && e !== undefined) {
        return e;
      }
      let r = this.getBaseTargetFromProps(this.props, t);
      if (r === undefined || hasVelocityMethodCheck.hasVelocityMethod(r)) {
        if (this.initialValues[t] !== undefined && e === undefined) {
          return undefined;
        } else {
          return this.baseTarget[t];
        }
      } else {
        return r;
      }
    }
    on(t, e) {
      this.events[t] ||= new tY();
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
      blockInitialAnimation: r,
      visualState: s
    }, o = {}) {
      this.current = null;
      this.children = new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = new Map();
      this.KeyframeResolver = keyframeResolverCore.KeyframeResolver;
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
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        let t = frameTimeCache.frameTimeCache.now();
        if (this.renderScheduledAt < t) {
          this.renderScheduledAt = t;
          frameloopSchedulerUtils_1.scheduleFrame.render(this.render, false, true);
        }
      };
      let {
        latestValues: a,
        renderState: l
      } = s;
      this.latestValues = a;
      this.baseTarget = {
        ...a
      };
      this.initialValues = e.initial ? {
        ...a
      } : {};
      this.renderState = l;
      this.parent = t;
      this.props = e;
      this.presenceContext = i;
      this.depth = t ? t.depth + 1 : 0;
      this.reducedMotionConfig = n;
      this.options = o;
      this.blockInitialAnimation = !!r;
      this.isControllingVariants = ii(e);
      this.isVariantNode = ir(e);
      if (this.isVariantNode) {
        this.variantChildren = new Set();
      }
      this.manuallyAnimateOnMount = !!t && !!t.current;
      let {
        willChange: u,
        ...h
      } = this.scrapeMotionValuesFromProps(e, {}, this);
      for (let t in h) {
        let e = h[t];
        if (a[t] !== undefined && hasVelocityMethodCheck.hasVelocityMethod(e)) {
          e.set(a[t], false);
        }
      }
    }
  }
  class nh extends nu {
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
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      let {
        children: t
      } = this.props;
      if (hasVelocityMethodCheck.hasVelocityMethod(t)) {
        this.childSubscription = t.on("change", t => {
          if (this.current) {
            this.current.textContent = `${t}`;
          }
        });
      }
    }
    constructor() {
      super(...arguments);
      this.KeyframeResolver = nt;
    }
  }
  function nc(t, e, i, n) {
    let {
      style: r,
      vars: s
    } = e;
    Object.assign(t.style, r, n && n.getProjectionStyles(i));
    for (let e in s) {
      t.style.setProperty(e, s[e]);
    }
  }
  class nd extends nh {
    readValueFromInstance(t, e) {
      if (cssTransformProps.transformPropSet.has(e)) {
        if (this.projection?.isProjecting) {
          return parseTransformMatrixValues.hasScaleTransform(e);
        } else {
          return parseTransformMatrixValues.getComputedTransformValue(t, e);
        }
      }
      {
        let i = window.getComputedStyle(t);
        let n = (cssCustomPropertyValidator.isCustomProperty(e) ? i.getPropertyValue(e) : i[e]) || 0;
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
      return te(t, i);
    }
    build(t, e, i) {
      iP(t, e, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return iI(t, e, i);
    }
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = nc;
    }
  }
  var camelCaseToKebabCase = require("camel-case-to-kebab-case") /*id: 869509*/;
  let nf = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  class nm extends nh {
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (cssTransformProps.transformPropSet.has(e)) {
        let t = i7(e);
        return t && t.default || 0;
      }
      e = nf.has(e) ? e : camelCaseToKebabCase.camelToKebabCase(e);
      return t.getAttribute(e);
    }
    scrapeMotionValuesFromProps(t, e, i) {
      return iU(t, e, i);
    }
    build(t, e, i) {
      iM(t, e, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(t, e, i, n) {
      (function (t, e, i, n) {
        nc(t, e, undefined, n);
        for (let i in e.attrs) {
          t.setAttribute(nf.has(i) ? i : camelCaseToKebabCase.camelToKebabCase(i), e.attrs[i]);
        }
      })(t, e, 0, n);
    }
    mount(t) {
      this.isSVGTag = iF(t.tagName);
      super.mount(t);
    }
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = N;
    }
  }
  let ng = function (t) {
    if (typeof Proxy == "undefined") {
      return t;
    }
    let e = new Map();
    return new Proxy(function () {
      var e = arguments.length;
      var i = Array(e);
      var n = 0;
      for (; n < e; n++) {
        i[n] = arguments[n];
      }
      return t(...i);
    }, {
      get: (i, n) => n === "create" ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
    });
  }((s = {
    animation: {
      Feature: class extends x {
        updateAnimationControlsSubscription() {
          let {
            animate: t
          } = this.node.getProps();
          if (n(t)) {
            this.unmountControls = t.subscribe(this.node);
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
        unmount() {
          var t;
          this.node.animationState.reset();
          if ((t = this.unmountControls) !== null && t !== undefined) {
            t.call(this);
          }
        }
        constructor(t) {
          super(t);
          t.animationState ||= function (t) {
            let e = e => Promise.all(e.map(e => {
              let {
                animation: i,
                options: n
              } = e;
              return animationVariantRunner.animate(t, i, n);
            }));
            let i = y();
            let r = true;
            let s = e => (i, n) => {
              let s = animationVariantResolver_1.resolveAnimationVariant(t, n, e === "exit" ? t.presenceContext?.custom : undefined);
              if (s) {
                let {
                  transition: t,
                  transitionEnd: e,
                  ...n
                } = s;
                i = {
                  ...i,
                  ...n,
                  ...e
                };
              }
              return i;
            };
            function o(o) {
              let {
                props: a
              } = t;
              let c = function t(e) {
                if (!e) {
                  return;
                }
                if (!e.isControllingVariants) {
                  let i = e.parent && t(e.parent) || {};
                  if (e.props.initial !== undefined) {
                    i.initial = e.props.initial;
                  }
                  return i;
                }
                let i = {};
                for (let t = 0; t < p; t++) {
                  let n = d[t];
                  let r = e.props[n];
                  if (h(r) || r === false) {
                    i[n] = r;
                  }
                }
                return i;
              }(t.parent) || {};
              let v = [];
              let y = new Set();
              let x = {};
              let w = Infinity;
              for (let e = 0; e < g; e++) {
                var b;
                var A;
                let d = m[e];
                let p = i[d];
                let f = a[d] !== undefined ? a[d] : c[d];
                let g = h(f);
                let P = d === o ? p.isActive : null;
                if (P === false) {
                  w = e;
                }
                let T = f === c[d] && f !== a[d] && g;
                if (T && r && t.manuallyAnimateOnMount) {
                  T = false;
                }
                p.protectedKeys = {
                  ...x
                };
                if (!p.isActive && P === null || !f && !p.prevProp || n(f) || typeof f == "boolean") {
                  continue;
                }
                b = p.prevProp;
                let S = typeof (A = f) == "string" ? A !== b : !!Array.isArray(A) && !u(A, b);
                let E = S || d === o && p.isActive && !T && g || e > w && g;
                let k = false;
                let M = Array.isArray(f) ? f : [f];
                let C = M.reduce(s(d), {});
                if (P === false) {
                  C = {};
                }
                let {
                  prevResolvedValues: F = {}
                } = p;
                let R = {
                  ...F,
                  ...C
                };
                let V = e => {
                  E = true;
                  if (y.has(e)) {
                    k = true;
                    y.delete(e);
                  }
                  p.needsAnimating[e] = true;
                  let i = t.getValue(e);
                  if (i) {
                    i.liveStyle = false;
                  }
                };
                for (let t in R) {
                  let e = C[t];
                  let i = F[t];
                  if (x.hasOwnProperty(t)) {
                    continue;
                  }
                  let n = false;
                  if (arrayTypeCheckUtility.isArray(e) && arrayTypeCheckUtility.isArray(i) ? u(e, i) : e === i) {
                    if (e !== undefined && y.has(t)) {
                      V(t);
                    } else {
                      p.protectedKeys[t] = true;
                    }
                  } else if (e != null) {
                    V(t);
                  } else {
                    y.add(t);
                  }
                }
                p.prevProp = f;
                p.prevResolvedValues = C;
                if (p.isActive) {
                  x = {
                    ...x,
                    ...C
                  };
                }
                if (r && t.blockInitialAnimation) {
                  E = false;
                }
                let D = !T || !S || k;
                if (E && D) {
                  v.push(...M.map(t => ({
                    animation: t,
                    options: {
                      type: d
                    }
                  })));
                }
              }
              if (y.size) {
                let e = {};
                if (typeof a.initial != "boolean") {
                  let i = animationVariantResolver_1.resolveAnimationVariant(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                  if (i && i.transition) {
                    e.transition = i.transition;
                  }
                }
                y.forEach(i => {
                  let n = t.getBaseTarget(i);
                  let r = t.getValue(i);
                  if (r) {
                    r.liveStyle = true;
                  }
                  e[i] = n ?? null;
                });
                v.push({
                  animation: e
                });
              }
              let P = !!v.length;
              if (r && (a.initial === false || a.initial === a.animate) && !t.manuallyAnimateOnMount) {
                P = false;
              }
              r = false;
              if (P) {
                return e(v);
              } else {
                return Promise.resolve();
              }
            }
            return {
              animateChanges: o,
              setActive: function (e, n) {
                var r;
                if (i[e].isActive === n) {
                  return Promise.resolve();
                }
                if ((r = t.variantChildren) !== null && r !== undefined) {
                  r.forEach(t => {
                    var i;
                    if ((i = t.animationState) === null || i === undefined) {
                      return undefined;
                    } else {
                      return i.setActive(e, n);
                    }
                  });
                }
                i[e].isActive = n;
                let s = o(e);
                for (let t in i) {
                  i[t].protectedKeys = {};
                }
                return s;
              },
              setAnimateFunction: function (i) {
                e = i(t);
              },
              getState: () => i,
              reset: () => {
                i = y();
                r = true;
              }
            };
          }(t);
        }
      }
    },
    exit: {
      Feature: class extends x {
        update() {
          if (!this.node.presenceContext) {
            return;
          }
          let {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext;
          let {
            isPresent: i
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) {
            return;
          }
          let n = this.node.animationState.setActive("exit", !t);
          if (e && !t) {
            n.then(() => {
              e(this.id);
            });
          }
        }
        mount() {
          let {
            register: t,
            onExitComplete: e
          } = this.node.presenceContext || {};
          if (e) {
            e(this.id);
          }
          if (t) {
            this.unmount = t(this.id);
          }
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.id = w++;
        }
      }
    },
    inView: {
      Feature: class extends x {
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
            threshold: typeof n == "number" ? n : e9[n]
          };
          return function (t, e, i) {
            let n = function (t) {
              let {
                root: e,
                ...i
              } = t;
              let n = e || document;
              if (!e4.has(n)) {
                e4.set(n, {});
              }
              let r = e4.get(n);
              let s = JSON.stringify(i);
              r[s] ||= new IntersectionObserver(e6, {
                root: e,
                ...i
              });
              return r[s];
            }(e);
            e3.set(t, i);
            n.observe(t);
            return () => {
              e3.delete(t);
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
      Feature: class extends x {
        mount() {
          let {
            current: t
          } = this.node;
          if (t) {
            this.unmount = function (t, e, i = {}) {
              let [n, r, s] = eK(t, i);
              let o = t => {
                let n = t.currentTarget;
                if (!e2(t)) {
                  return;
                }
                eJ.add(n);
                let s = e(n, t);
                let o = (t, e) => {
                  window.removeEventListener("pointerup", a);
                  window.removeEventListener("pointercancel", l);
                  if (eJ.has(n)) {
                    eJ.delete(n);
                  }
                  if (e2(t) && typeof s == "function") {
                    s(t, {
                      success: e
                    });
                  }
                };
                let a = t => {
                  o(t, n === window || n === document || i.useGlobalTarget || eq(n, t.target));
                };
                let l = t => {
                  o(t, false);
                };
                window.addEventListener("pointerup", a, r);
                window.addEventListener("pointercancel", l, r);
              };
              n.forEach(t => {
                (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r);
                if (isDomElementChecker.isDomElement(t)) {
                  t.addEventListener("focus", t => e1(t, r));
                  if (!eG.has(t.tagName) && t.tabIndex === -1 && !t.hasAttribute("tabindex")) {
                    t.tabIndex = 0;
                  }
                }
              });
              return s;
            }(t, (t, e) => {
              e5(this.node, e, "Start");
              return (t, e) => {
                let {
                  success: i
                } = e;
                return e5(this.node, t, i ? "End" : "Cancel");
              };
            }, {
              useGlobalTarget: this.node.props.globalTapTarget
            });
          }
        }
        unmount() {}
      }
    },
    focus: {
      Feature: class extends x {
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
          this.unmount = to(M(this.node.current, "focus", () => this.onFocus()), M(this.node.current, "blur", () => this.onBlur()));
        }
        unmount() {}
        constructor() {
          super(...arguments);
          this.isActive = false;
        }
      }
    },
    hover: {
      Feature: class extends x {
        mount() {
          let {
            current: t
          } = this.node;
          if (t) {
            this.unmount = function (t, e, i = {}) {
              let [n, r, s] = eK(t, i);
              let o = t => {
                if (!eH(t)) {
                  return;
                }
                let {
                  target: i
                } = t;
                let n = e(i, t);
                if (typeof n != "function" || !i) {
                  return;
                }
                let s = t => {
                  if (eH(t)) {
                    n(t);
                    i.removeEventListener("pointerleave", s);
                  }
                };
                i.addEventListener("pointerleave", s, r);
              };
              n.forEach(t => {
                t.addEventListener("pointerenter", o, r);
              });
              return s;
            }(t, (t, e) => {
              eY(this.node, e, "Start");
              return t => eY(this.node, t, "End");
            });
          }
        }
        unmount() {}
      }
    },
    pan: {
      Feature: class extends x {
        onPointerDown(t) {
          this.session = new tu(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ti(this.node)
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
            onSessionStart: tP(t),
            onStart: tP(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session;
              if (n) {
                frameloopSchedulerUtils_1.scheduleFrame.postRender(() => n(t, e));
              }
            }
          };
        }
        mount() {
          this.removePointerDownListener = V(this.node.current, "pointerdown", t => this.onPointerDown(t));
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
          this.removePointerDownListener = identityFunctionExport.identity;
        }
      }
    },
    drag: {
      Feature: class extends x {
        mount() {
          let {
            dragControls: t
          } = this.node.getProps();
          if (t) {
            this.removeGroupControls = t.subscribe(this.controls);
          }
          this.removeListeners = this.controls.addListeners() || identityFunctionExport.identity;
        }
        unmount() {
          this.removeGroupControls();
          this.removeListeners();
        }
        constructor(t) {
          super(t);
          this.removeGroupControls = identityFunctionExport.identity;
          this.removeListeners = identityFunctionExport.identity;
          this.controls = new tb(t);
        }
      },
      ProjectionNode: eX,
      MeasureLayout: tO
    },
    layout: {
      ProjectionNode: eX,
      MeasureLayout: tO
    }
  }, o = (t, e) => iL(t) ? new nm(e) : new nd(e, {
    allowProjection: t !== reactCoreLibraryReexport.Fragment
  }), function (t, {
    forwardMotionProps: e
  } = {
    forwardMotionProps: false
  }) {
    return function (t) {
      let {
        preloadedFeatures: n,
        createVisualElement: r,
        useRender: s,
        useVisualState: o,
        Component: a
      } = t;
      function l(t, e) {
        var i;
        var n;
        var l;
        let u;
        let c = {
          ...reactCoreLibraryReexport.useContext(motionContextProvider.motionContext),
          ...t,
          layoutId: function (t) {
            let {
              layoutId: e
            } = t;
            let i = reactCoreLibraryReexport.useContext(createContextModule_1.createContext).id;
            if (i && e !== undefined) {
              return i + "-" + e;
            } else {
              return e;
            }
          }(t)
        };
        let {
          isStatic: d
        } = c;
        let p = function (t) {
          let {
            initial: e,
            animate: i
          } = function (t, e) {
            if (ii(t)) {
              let {
                initial: e,
                animate: i
              } = t;
              return {
                initial: e === false || h(e) ? e : undefined,
                animate: h(i) ? i : undefined
              };
            }
            if (t.inherit !== false) {
              return e;
            } else {
              return {};
            }
          }(t, reactCoreLibraryReexport.useContext(ie));
          return reactCoreLibraryReexport.useMemo(() => ({
            initial: e,
            animate: i
          }), [is(e), is(i)]);
        }(t);
        let f = o(t, d);
        if (!d && browserEnvCheck_1.isBrowser) {
          n = 0;
          l = 0;
          reactCoreLibraryReexport.useContext(e8).strict;
          let t = function (t) {
            let {
              drag: e,
              layout: i
            } = il;
            if (!e && !i) {
              return {};
            }
            let n = {
              ...e,
              ...i
            };
            return {
              MeasureLayout: (e == null ? undefined : e.isEnabled(t)) || (i == null ? undefined : i.isEnabled(t)) ? n.MeasureLayout : undefined,
              ProjectionNode: n.ProjectionNode
            };
          }(c);
          u = t.MeasureLayout;
          p.visualElement = function (t, e, i, n, r) {
            var s;
            var o;
            var a;
            var l;
            let {
              visualElement: u
            } = reactCoreLibraryReexport.useContext(ie);
            let h = reactCoreLibraryReexport.useContext(e8);
            let c = reactCoreLibraryReexport.useContext(imagePreviewContext.previewContext);
            let d = reactCoreLibraryReexport.useContext(motionContextProvider.motionContext).reducedMotion;
            let p = reactCoreLibraryReexport.useRef(null);
            n = n || h.renderer;
            if (!p.current && n) {
              p.current = n(t, {
                visualState: e,
                parent: u,
                props: i,
                presenceContext: c,
                blockInitialAnimation: !!c && c.initial === false,
                reducedMotionConfig: d
              });
            }
            let f = p.current;
            let m = reactCoreLibraryReexport.useContext(tC);
            if (f && !f.projection && r && (f.type === "html" || f.type === "svg")) {
              (function (t, e, i, n) {
                let {
                  layoutId: r,
                  layout: s,
                  drag: o,
                  dragConstraints: a,
                  layoutScroll: l,
                  layoutRoot: u,
                  layoutCrossfade: h
                } = e;
                t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? undefined : function t(e) {
                  if (e) {
                    if (e.options.allowProjection !== false) {
                      return e.projection;
                    } else {
                      return t(e.parent);
                    }
                  }
                }(t.parent));
                t.projection.setOptions({
                  layoutId: r,
                  layout: s,
                  alwaysMeasureLayout: !!o || a && tn(a),
                  visualElement: t,
                  animationType: typeof s == "string" ? s : "both",
                  initialPromotionConfig: n,
                  crossfade: h,
                  layoutScroll: l,
                  layoutRoot: u
                });
              })(p.current, i, r, m);
            }
            let g = reactCoreLibraryReexport.useRef(false);
            reactCoreLibraryReexport.useInsertionEffect(() => {
              if (f && g.current) {
                f.update(i, c);
              }
            });
            let v = i[generateFramerAppearDataAttribute.framerAppearDataAttribute];
            let y = reactCoreLibraryReexport.useRef(!!v && !((s = (o = window).MotionHandoffIsComplete) === null || s === undefined ? undefined : s.call(o, v)) && ((a = (l = window).MotionHasOptimisedAnimation) === null || a === undefined ? undefined : a.call(l, v)));
            useLayoutEffectSsr.useSafeLayoutEffect(() => {
              if (f) {
                g.current = true;
                window.MotionIsMounted = true;
                f.updateFeatures();
                tS.render(f.render);
                if (y.current && f.animationState) {
                  f.animationState.animateChanges();
                }
              }
            });
            reactCoreLibraryReexport.useEffect(() => {
              if (f) {
                if (!y.current && f.animationState) {
                  f.animationState.animateChanges();
                }
                if (y.current) {
                  queueMicrotask(() => {
                    var t;
                    var e;
                    if ((t = (e = window).MotionHandoffMarkAsComplete) !== null && t !== undefined) {
                      t.call(e, v);
                    }
                  });
                  y.current = false;
                }
              }
            });
            return f;
          }(a, f, c, r, t.ProjectionNode);
        }
        return reactJsxRuntimeCoreReexport.jsxs(ie.Provider, {
          value: p,
          children: [u && p.visualElement ? reactJsxRuntimeCoreReexport.jsx(u, {
            visualElement: p.visualElement,
            ...c
          }) : null, s(a, t, (i = p.visualElement, reactCoreLibraryReexport.useCallback(t => {
            if (t && f.onMount) {
              f.onMount(t);
            }
            if (i) {
              if (t) {
                i.mount(t);
              } else {
                i.unmount();
              }
            }
            if (e) {
              if (typeof e == "function") {
                e(t);
              } else if (tn(e)) {
                e.current = t;
              }
            }
          }, [i])), f, d, p.visualElement)]
        });
      }
      if (n) {
        (function (t) {
          for (let e in t) {
            il[e] = {
              ...il[e],
              ...t[e]
            };
          }
        })(n);
      }
      l.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
      let u = reactCoreLibraryReexport.forwardRef(l);
      u[iu] = a;
      return u;
    }({
      ...(iL(t) ? i_ : iW),
      preloadedFeatures: s,
      useRender: function (t = false) {
        return (e, i, n, r, s) => {
          let {
            latestValues: o
          } = r;
          let a = (iL(e) ? function (t, e, i, n) {
            let r = reactCoreLibraryReexport.useMemo(() => {
              let i = iC();
              iM(i, e, iF(n), t.transformTemplate, t.style);
              return {
                ...i.attrs,
                style: {
                  ...i.style
                }
              };
            }, [e]);
            if (t.style) {
              let e = {};
              iS(e, t.style, t);
              r.style = {
                ...e,
                ...r.style
              };
            }
            return r;
          } : function (t, e) {
            let i = {};
            let n = function (t, e) {
              let i = t.style || {};
              let n = {};
              iS(n, i, t);
              Object.assign(n, function (t, e) {
                let {
                  transformTemplate: i
                } = t;
                return reactCoreLibraryReexport.useMemo(() => {
                  let t = iT();
                  iP(t, e, i);
                  return Object.assign({}, t.vars, t.style);
                }, [e]);
              }(t, e));
              return n;
            }(t, e);
            if (t.drag && t.dragListener !== false) {
              i.draggable = false;
              n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none";
              n.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`;
            }
            if (t.tabIndex === undefined && (t.onTap || t.onTapStart || t.whileTap)) {
              i.tabIndex = 0;
            }
            i.style = n;
            return i;
          })(i, o, s, e);
          let l = function (t, e, i) {
            let n = {};
            for (let r in t) {
              if ((r !== "values" || typeof t.values != "object") && (iD(r) || i === true && iV(r) || !e && !iV(r) || t.draggable && r.startsWith("onDrag"))) {
                n[r] = t[r];
              }
            }
            return n;
          }(i, typeof e == "string", t);
          let u = e !== reactCoreLibraryReexport.Fragment ? {
            ...l,
            ...a,
            ref: n
          } : {};
          let {
            children: h
          } = i;
          let c = reactCoreLibraryReexport.useMemo(() => hasVelocityMethodCheck.hasVelocityMethod(h) ? h.get() : h, [h]);
          return reactCoreLibraryReexport.createElement(e, {
            ...u,
            children: c
          });
        };
      }(e),
      createVisualElement: o,
      Component: t
    });
  }));
  require.d(exports, {
    motionFactory: function () {
      return ng;
    }
  });
}