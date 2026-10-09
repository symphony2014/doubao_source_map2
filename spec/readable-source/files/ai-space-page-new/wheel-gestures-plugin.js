// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'wheelGesturesPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 346928
         */
module.exports = function (module, exports, require) {
  function i() {
    return (i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            e[i] = n[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function r(e, t) {
    if (e.length !== t.length) {
      throw Error("vectors must be same length");
    }
    return e.map(function (e, n) {
      return e + t[n];
    });
  }
  function a(e) {
    return Math.max.apply(Math, e.map(Math.abs));
  }
  function o(e) {
    Object.freeze(e);
    Object.values(e).forEach(function (e) {
      if (e !== null && typeof e == "object" && !Object.isFrozen(e)) {
        o(e);
      }
    });
    return e;
  }
  var l = [1, 18, typeof window != "undefined" && window.innerHeight || 800];
  var s = [-1, -1, -1];
  var c = o({
    preventWheelAction: true,
    reverseSign: [true, true, false]
  });
  function u() {
    return {
      isStarted: false,
      isStartPublished: false,
      isMomentum: false,
      startTime: 0,
      lastAbsDelta: Infinity,
      axisMovement: [0, 0, 0],
      axisVelocity: [0, 0, 0],
      accelerationFactors: [],
      scrollPoints: [],
      scrollPointsToMerge: [],
      willEndTimeout: 400
    };
  }
  function d(e = {}) {
    var t;
    var n;
    var d;
    var p;
    var h;
    var f = function () {
      var e = {};
      function t(t, n) {
        e[t] = (e[t] || []).filter(function (e) {
          return e !== n;
        });
      }
      return o({
        on: function (n, i) {
          e[n] = (e[n] || []).concat(i);
          return function () {
            return t(n, i);
          };
        },
        off: t,
        dispatch: function (t, n) {
          if (t in e) {
            e[t].forEach(function (e) {
              return e(n);
            });
          }
        }
      });
    }();
    var m = f.on;
    var g = f.off;
    var v = f.dispatch;
    var _ = c;
    var b = u();
    var y = false;
    function w(e) {
      if (Array.isArray(e)) {
        e.forEach(function (e) {
          return S(e);
        });
      } else {
        S(e);
      }
    }
    function x(e = {}) {
      if (Object.values(e).some(function (e) {
        return e == null;
      })) {
        return _;
      } else {
        return _ = o(i({}, c, _, e));
      }
    }
    function C(e) {
      var t = i({
        event: p,
        isStart: false,
        isEnding: false,
        isMomentumCancel: false,
        isMomentum: b.isMomentum,
        axisDelta: [0, 0, 0],
        axisVelocity: b.axisVelocity,
        axisMovement: b.axisMovement,
        get axisMovementProjection() {
          return r(t.axisMovement, t.axisVelocity.map(function (e) {
            var t;
            if (t === undefined) {
              t = 0.996;
            }
            return e * t / (1 - t);
          }));
        }
      }, e);
      v("wheel", i({}, t, {
        previous: h
      }));
      h = t;
    }
    function k(e, t) {
      var n = _.preventWheelAction;
      var i = t[0];
      var r = t[1];
      var a = t[2];
      if (typeof n == "boolean") {
        return n;
      }
      switch (n) {
        case "x":
          return Math.abs(i) >= e;
        case "y":
          return Math.abs(r) >= e;
        case "z":
          return Math.abs(a) >= e;
        default:
          return false;
      }
    }
    function S(e) {
      var t;
      var n;
      var o;
      var c;
      c = function (e, t) {
        if (!t) {
          return e;
        }
        var n = t === true ? s : t.map(function (e) {
          if (e) {
            return -1;
          } else {
            return 1;
          }
        });
        return i({}, e, {
          axisDelta: e.axisDelta.map(function (e, t) {
            return e * n[t];
          })
        });
      }((t = e.deltaX * l[e.deltaMode], n = e.deltaY * l[e.deltaMode], o = (e.deltaZ || 0) * l[e.deltaMode], {
        timeStamp: e.timeStamp,
        axisDelta: [t, n, o]
      }), _.reverseSign);
      var u = i({}, c, {
        axisDelta: c.axisDelta.map(function (e) {
          return Math.min(Math.max(-700, e), 700);
        })
      });
      var d = u.axisDelta;
      var h = u.timeStamp;
      var f = a(d);
      if (e.preventDefault && k(f, d)) {
        e.preventDefault();
      }
      if (b.isStarted) {
        if (b.isMomentum && f > Math.max(2, b.lastAbsDelta * 2)) {
          D(true);
          O();
        }
      } else {
        O();
      }
      if (f === 0 && Object.is && Object.is(e.deltaX, -0)) {
        y = true;
        return;
      }
      p = e;
      b.axisMovement = r(b.axisMovement, d);
      b.lastAbsDelta = f;
      b.scrollPointsToMerge.push({
        axisDelta: d,
        timeStamp: h
      });
      E();
      C({
        axisDelta: d,
        isStart: !b.isStartPublished
      });
      b.isStartPublished = true;
      M();
    }
    function E() {
      if (b.scrollPointsToMerge.length === 2) {
        var e;
        b.scrollPoints.unshift({
          axisDeltaSum: b.scrollPointsToMerge.map(function (e) {
            return e.axisDelta;
          }).reduce(r),
          timeStamp: (e = b.scrollPointsToMerge.map(function (e) {
            return e.timeStamp;
          })).reduce(function (e, t) {
            return e + t;
          }) / e.length
        });
        j();
        b.scrollPointsToMerge.length = 0;
        b.scrollPoints.length = 1;
        if (!b.isMomentum) {
          R();
        }
      } else if (!b.isStartPublished) {
        T();
      }
    }
    function T() {
      var e;
      b.axisVelocity = (e = b.scrollPointsToMerge)[e.length - 1].axisDelta.map(function (e) {
        return e / b.willEndTimeout;
      });
    }
    function j() {
      var e = b.scrollPoints;
      var t = e[0];
      var n = e[1];
      if (n && t) {
        var i = t.timeStamp - n.timeStamp;
        if (!(i <= 0)) {
          var r = t.axisDeltaSum.map(function (e) {
            return e / i;
          });
          var a = r.map(function (e, t) {
            return e / (b.axisVelocity[t] || 1);
          });
          b.axisVelocity = r;
          b.accelerationFactors.push(a);
          P(i);
        }
      }
    }
    function P(e) {
      var t = Math.ceil(e / 10) * 12;
      if (!b.isMomentum) {
        t = Math.max(100, t * 2);
      }
      b.willEndTimeout = Math.min(1000, Math.round(t));
    }
    function N(e) {
      return e === 0 || e <= 0.96 && e >= 0.6;
    }
    function R() {
      if (b.accelerationFactors.length >= 5) {
        if (y && (y = false, a(b.axisVelocity) >= 0.2)) {
          I();
          return;
        }
        var e = b.accelerationFactors.slice(-5);
        if (e.every(function (e) {
          var t = !!e.reduce(function (e, t) {
            if (e && e < 1 && e === t) {
              return 1;
            } else {
              return 0;
            }
          });
          var n = e.filter(N).length === e.length;
          return t || n;
        })) {
          I();
        }
        b.accelerationFactors = e;
      }
    }
    function I() {
      b.isMomentum = true;
    }
    function O() {
      (b = u()).isStarted = true;
      b.startTime = Date.now();
      h = undefined;
      y = false;
    }
    function M() {
      clearTimeout(t);
      t = setTimeout(D, b.willEndTimeout);
    }
    function D(e = false) {
      if (b.isStarted) {
        if (b.isMomentum && e) {
          C({
            isEnding: true,
            isMomentumCancel: true
          });
        } else {
          C({
            isEnding: true
          });
        }
        b.isMomentum = false;
        b.isStarted = false;
      }
    }
    n = [];
    var A = o({
      observe: function (e) {
        e.addEventListener("wheel", w, {
          passive: false
        });
        n.push(e);
        return function () {
          return d(e);
        };
      },
      unobserve: d = function (e) {
        e.removeEventListener("wheel", w);
        n = n.filter(function (t) {
          return t !== e;
        });
      },
      disconnect: function () {
        n.forEach(d);
      }
    });
    var $ = A.observe;
    var L = A.unobserve;
    var F = A.disconnect;
    x(e);
    return o({
      on: m,
      off: g,
      observe: $,
      unobserve: L,
      disconnect: F,
      feedWheel: w,
      updateOptions: x
    });
  }
  var p = {
    active: true,
    breakpoints: {},
    wheelDraggingClass: "is-wheel-dragging",
    forceWheelAxis: undefined,
    target: undefined
  };
  function h(e = {}) {
    var t;
    function n() {}
    return {
      name: "wheelGestures",
      options: e,
      init: function (i, r) {
        var l;
        var s = r.mergeOptions;
        var c = r.optionsAtMedia;
        var u = s(p, h.globalOptions);
        t = c(s(u, e));
        var f = i.internalEngine();
        var m = t.target ?? i.containerNode().parentNode;
        var g = t.forceWheelAxis ?? f.options.axis;
        var v = d({
          preventWheelAction: g,
          reverseSign: [true, true, false]
        });
        function _() {
          C = (g === "x" ? f.containerRect.width : f.containerRect.height) / 2;
        }
        var b = v.observe(m);
        var y = v.on("wheel", function (e) {
          var i = e.axisDelta;
          var r = i[0];
          var a = i[1];
          var o = g === "x" ? r : a;
          var s = g === "x" ? a : r;
          var c = e.isMomentum && e.previous && !e.previous.isMomentum;
          var u = e.isEnding && !e.isMomentum || c;
          if (!!(Math.abs(o) > Math.abs(s)) && !w && !e.isMomentum && !k) {
            (function (e) {
              try {
                l = new MouseEvent("mousedown", e.event);
                P(l);
              } catch (e) {
                return n();
              }
              w = true;
              x = 0;
              document.documentElement.addEventListener("mousemove", T, true);
              document.documentElement.addEventListener("mouseup", T, true);
              document.documentElement.addEventListener("mousedown", T, true);
              if (t.wheelDraggingClass) {
                m.classList.add(t.wheelDraggingClass);
              }
            })(e);
          }
          if (k && e.isEnding) {
            k = false;
          }
          if (w && !function (e) {
            var t = N(e);
            var n = t.isAtBoundary;
            var i = t.primaryAxisDelta;
            if (n && !e.isMomentum) {
              if ((x += Math.abs(i)) > C) {
                k = true;
                S(e);
                return true;
              }
            } else {
              x = 0;
            }
            return false;
          }(e)) {
            if (u) {
              S(e);
            } else {
              P(j("mousemove", e));
            }
          }
        });
        var w = false;
        var x = 0;
        var C = 0;
        var k = false;
        function S(e) {
          w = false;
          P(j("mouseup", e));
          E();
          if (t.wheelDraggingClass) {
            m.classList.remove(t.wheelDraggingClass);
          }
        }
        function E() {
          document.documentElement.removeEventListener("mousemove", T, true);
          document.documentElement.removeEventListener("mouseup", T, true);
          document.documentElement.removeEventListener("mousedown", T, true);
        }
        function T(e) {
          if (w && e.isTrusted) {
            e.stopImmediatePropagation();
          }
        }
        function j(e, t) {
          if (g === f.options.axis) {
            var n;
            var i;
            var r = t.axisMovement;
            n = r[0];
            i = r[1];
          } else {
            var a = t.axisMovement;
            i = a[0];
            n = a[1];
          }
          if (N(t).isAtBoundary) {
            var o = Math.min(x / C, 1);
            var s = x * (n > 0 ? -1 : 1) * (0.25 + o * 0.5);
            n += s;
            i += s;
          }
          if (!f.options.skipSnaps && !f.options.dragFree) {
            var c = f.containerRect.width;
            var u = f.containerRect.height;
            n = n < 0 ? Math.max(n, -c) : Math.min(n, c);
            i = i < 0 ? Math.max(i, -u) : Math.min(i, u);
          }
          return new MouseEvent(e, {
            clientX: l.clientX + n,
            clientY: l.clientY + i,
            screenX: l.screenX + n,
            screenY: l.screenY + i,
            movementX: n,
            movementY: i,
            button: 0,
            bubbles: true,
            cancelable: true,
            composed: true
          });
        }
        function P(e) {
          i.containerNode().dispatchEvent(e);
        }
        function N(e) {
          var t = e.axisDelta;
          var n = t[0];
          var r = t[1];
          var a = i.scrollProgress();
          var o = g === "x" ? n : r;
          return {
            isAtBoundary: o < 0 && !(a < 1) || o > 0 && !(a > 0),
            primaryAxisDelta: o
          };
        }
        _();
        i.on("resize", _);
        n = function () {
          b();
          y();
          i.off("resize", _);
          E();
        };
      },
      destroy: function () {
        return n();
      }
    };
  }
  h.globalOptions = undefined;
  require.d(exports, {
    wheelGesturesPlugin: function () {
      return h;
    }
  });
}