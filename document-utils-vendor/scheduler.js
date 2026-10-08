// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 819439
         */
module.exports = function (module, exports, require) {
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var r;
    var n;
    var i;
    var o;
    var a;
    var s = null;
    var l = null;
    function u() {
      if (s !== null) {
        try {
          var e = exports.unstable_now();
          s(true, e);
          s = null;
        } catch (e) {
          setTimeout(u, 0);
          throw e;
        }
      }
    }
    var c = Date.now();
    exports.unstable_now = function () {
      return Date.now() - c;
    };
    r = function (e) {
      if (s !== null) {
        setTimeout(r, 0, e);
      } else {
        s = e;
        setTimeout(u, 0);
      }
    };
    n = function (e, t) {
      l = setTimeout(e, t);
    };
    i = function () {
      clearTimeout(l);
    };
    o = function () {
      return false;
    };
    a = exports.unstable_forceFrameRate = function () {};
  } else {
    var h = window.performance;
    var d = window.Date;
    var f = window.setTimeout;
    var A = window.clearTimeout;
    window.requestAnimationFrame;
    window.cancelAnimationFrame;
    if (typeof h == "object" && typeof h.now == "function") {
      exports.unstable_now = function () {
        return h.now();
      };
    } else {
      var g = d.now();
      exports.unstable_now = function () {
        return d.now() - g;
      };
    }
    var p = false;
    var m = null;
    var y = -1;
    var v = 5;
    var b = 0;
    o = function () {
      return exports.unstable_now() >= b;
    };
    a = function () {};
    exports.unstable_forceFrameRate = function (e) {
      if (!(e < 0) && !(e > 125)) {
        v = e > 0 ? Math.floor(1000 / e) : 33.33;
      }
    };
    var w = new MessageChannel();
    var C = w.port2;
    w.port1.onmessage = function () {
      if (m !== null) {
        var e = exports.unstable_now();
        b = e + v;
        try {
          if (m(true, e)) {
            C.postMessage(null);
          } else {
            p = false;
            m = null;
          }
        } catch (e) {
          C.postMessage(null);
          throw e;
        }
      } else {
        p = false;
      }
    };
    r = function (e) {
      m = e;
      if (!p) {
        p = true;
        C.postMessage(null);
      }
    };
    n = function (e, r) {
      y = f(function () {
        e(exports.unstable_now());
      }, r);
    };
    i = function () {
      A(y);
      y = -1;
    };
  }
  function E(e, t) {
    var r = e.length;
    for (e.push(t);;) {
      var n = Math.floor((r - 1) / 2);
      var i = e[n];
      if (i !== undefined && x(i, t) > 0) {
        e[n] = t;
        e[r] = i;
        r = n;
      } else {
        break;
      }
    }
  }
  function I(e) {
    if ((e = e[0]) === undefined) {
      return null;
    } else {
      return e;
    }
  }
  function B(e) {
    var t = e[0];
    if (t !== undefined) {
      var r = e.pop();
      if (r !== t) {
        e[0] = r;
        var n = 0;
        var i = e.length;
        while (n < i) {
          var o = (n + 1) * 2 - 1;
          var a = e[o];
          var s = o + 1;
          var l = e[s];
          if (a !== undefined && x(a, r) < 0) {
            if (l !== undefined && x(l, a) < 0) {
              e[n] = l;
              e[s] = r;
              n = s;
            } else {
              e[n] = a;
              e[o] = r;
              n = o;
            }
          } else if (l !== undefined && x(l, r) < 0) {
            e[n] = l;
            e[s] = r;
            n = s;
          } else {
            break;
          }
        }
      }
      return t;
    }
    return null;
  }
  function x(e, t) {
    var r = e.sortIndex - t.sortIndex;
    if (r !== 0) {
      return r;
    } else {
      return e.id - t.id;
    }
  }
  var D = [];
  var S = [];
  var k = 1;
  var _ = null;
  var T = 3;
  var Q = false;
  var R = false;
  var F = false;
  function L(e) {
    for (var t = I(S); t !== null;) {
      if (t.callback === null) {
        B(S);
      } else if (t.startTime <= e) {
        B(S);
        t.sortIndex = t.expirationTime;
        E(D, t);
      } else {
        break;
      }
      t = I(S);
    }
  }
  function O(e) {
    F = false;
    L(e);
    if (!R) {
      if (I(D) !== null) {
        R = true;
        r(N);
      } else {
        var t = I(S);
        if (t !== null) {
          n(O, t.startTime - e);
        }
      }
    }
  }
  function N(e, r) {
    R = false;
    if (F) {
      F = false;
      i();
    }
    Q = true;
    var a = T;
    try {
      L(r);
      _ = I(D);
      while (_ !== null && (!(_.expirationTime > r) || e && !o())) {
        var s = _.callback;
        if (s !== null) {
          _.callback = null;
          T = _.priorityLevel;
          var l = s(_.expirationTime <= r);
          r = exports.unstable_now();
          if (typeof l == "function") {
            _.callback = l;
          } else if (_ === I(D)) {
            B(D);
          }
          L(r);
        } else {
          B(D);
        }
        _ = I(D);
      }
      if (_ !== null) {
        var u = true;
      } else {
        var c = I(S);
        if (c !== null) {
          n(O, c.startTime - r);
        }
        u = false;
      }
      return u;
    } finally {
      _ = null;
      T = a;
      Q = false;
    }
  }
  function M(e) {
    switch (e) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 10000;
      default:
        return 5000;
    }
  }
  var P = a;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_NormalPriority = 3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_LowPriority = 4;
  exports.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var r = T;
    T = e;
    try {
      return t();
    } finally {
      T = r;
    }
  };
  exports.unstable_next = function (e) {
    switch (T) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = T;
    }
    var r = T;
    T = t;
    try {
      return e();
    } finally {
      T = r;
    }
  };
  exports.unstable_scheduleCallback = function (e, o, a) {
    var s = exports.unstable_now();
    if (typeof a == "object" && a !== null) {
      var l = a.delay;
      l = typeof l == "number" && l > 0 ? s + l : s;
      a = typeof a.timeout == "number" ? a.timeout : M(e);
    } else {
      a = M(e);
      l = s;
    }
    a = l + a;
    e = {
      id: k++,
      callback: o,
      priorityLevel: e,
      startTime: l,
      expirationTime: a,
      sortIndex: -1
    };
    if (l > s) {
      e.sortIndex = l;
      E(S, e);
      if (I(D) === null && e === I(S)) {
        if (F) {
          i();
        } else {
          F = true;
        }
        n(O, l - s);
      }
    } else {
      e.sortIndex = a;
      E(D, e);
      if (!R && !Q) {
        R = true;
        r(N);
      }
    }
    return e;
  };
  exports.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  exports.unstable_wrapCallback = function (e) {
    var t = T;
    return function () {
      var r = T;
      T = t;
      try {
        return e.apply(this, arguments);
      } finally {
        T = r;
      }
    };
  };
  exports.unstable_getCurrentPriorityLevel = function () {
    return T;
  };
  exports.unstable_shouldYield = function () {
    var e = exports.unstable_now();
    L(e);
    var r = I(D);
    return r !== _ && _ !== null && r !== null && r.callback !== null && r.startTime <= e && r.expirationTime < _.expirationTime || o();
  };
  exports.unstable_requestPaint = P;
  exports.unstable_continueExecution = function () {
    if (!R && !Q) {
      R = true;
      r(N);
    }
  };
  exports.unstable_pauseExecution = function () {};
  exports.unstable_getFirstCallbackNode = function () {
    return I(D);
  };
  exports.unstable_Profiling = null;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}