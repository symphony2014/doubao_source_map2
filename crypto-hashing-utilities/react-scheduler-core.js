// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 785706
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    var n = e.length;
    for (e.push(t); n > 0;) {
      var r = n - 1 >>> 1;
      var o = e[r];
      if (i(o, t) > 0) {
        e[r] = t;
        e[n] = o;
        n = r;
      } else {
        break;
      }
    }
  }
  function r(e) {
    if (e.length === 0) {
      return null;
    } else {
      return e[0];
    }
  }
  function o(e) {
    if (e.length === 0) {
      return null;
    }
    var t = e[0];
    var n = e.pop();
    if (n !== t) {
      e[0] = n;
      var r = 0;
      var o = e.length;
      var u = o >>> 1;
      while (r < u) {
        var a = (r + 1) * 2 - 1;
        var c = e[a];
        var s = a + 1;
        var l = e[s];
        if (i(c, n) < 0) {
          if (s < o && i(l, c) < 0) {
            e[r] = l;
            e[s] = n;
            r = s;
          } else {
            e[r] = c;
            e[a] = n;
            r = a;
          }
        } else if (s < o && i(l, n) < 0) {
          e[r] = l;
          e[s] = n;
          r = s;
        } else {
          break;
        }
      }
    }
    return t;
  }
  function i(e, t) {
    var n = e.sortIndex - t.sortIndex;
    if (n !== 0) {
      return n;
    } else {
      return e.id - t.id;
    }
  }
  exports.unstable_now = undefined;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u;
    var a = performance;
    exports.unstable_now = function () {
      return a.now();
    };
  } else {
    var c = Date;
    var s = c.now();
    exports.unstable_now = function () {
      return c.now() - s;
    };
  }
  var l = [];
  var f = [];
  var p = 1;
  var d = null;
  var h = 3;
  var v = false;
  var m = false;
  var g = false;
  var y = typeof setTimeout == "function" ? setTimeout : null;
  var w = typeof clearTimeout == "function" ? clearTimeout : null;
  var b = typeof setImmediate != "undefined" ? setImmediate : null;
  function x(e) {
    for (var t = r(f); t !== null;) {
      if (t.callback === null) {
        o(f);
      } else if (t.startTime <= e) {
        o(f);
        t.sortIndex = t.expirationTime;
        n(l, t);
      } else {
        break;
      }
      t = r(f);
    }
  }
  function E(e) {
    g = false;
    x(e);
    if (!m) {
      if (r(l) !== null) {
        m = true;
        L();
      } else {
        var t = r(f);
        if (t !== null) {
          D(E, t.startTime - e);
        }
      }
    }
  }
  var k = false;
  var Z = -1;
  var C = 5;
  var T = -1;
  function P() {
    return !(exports.unstable_now() - T < C);
  }
  function M() {
    if (k) {
      var e = exports.unstable_now();
      T = e;
      var n = true;
      try {
        e: {
          m = false;
          if (g) {
            g = false;
            w(Z);
            Z = -1;
          }
          v = true;
          var i = h;
          try {
            t: {
              x(e);
              d = r(l);
              while (d !== null && (!(d.expirationTime > e) || !P())) {
                var a = d.callback;
                if (typeof a == "function") {
                  d.callback = null;
                  h = d.priorityLevel;
                  var c = a(d.expirationTime <= e);
                  e = exports.unstable_now();
                  if (typeof c == "function") {
                    d.callback = c;
                    x(e);
                    n = true;
                    break t;
                  }
                  if (d === r(l)) {
                    o(l);
                  }
                  x(e);
                } else {
                  o(l);
                }
                d = r(l);
              }
              if (d !== null) {
                n = true;
              } else {
                var s = r(f);
                if (s !== null) {
                  D(E, s.startTime - e);
                }
                n = false;
              }
            }
            break e;
          } finally {
            d = null;
            h = i;
            v = false;
          }
          n = undefined;
        }
      } finally {
        if (n) {
          u();
        } else {
          k = false;
        }
      }
    }
  }
  if (typeof b == "function") {
    u = function () {
      b(M);
    };
  } else if (typeof MessageChannel != "undefined") {
    var O = new MessageChannel();
    var S = O.port2;
    O.port1.onmessage = M;
    u = function () {
      S.postMessage(null);
    };
  } else {
    u = function () {
      y(M, 0);
    };
  }
  function L() {
    if (!k) {
      k = true;
      u();
    }
  }
  function D(e, n) {
    Z = y(function () {
      e(exports.unstable_now());
    }, n);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  exports.unstable_continueExecution = function () {
    if (!m && !v) {
      m = true;
      L();
    }
  };
  exports.unstable_forceFrameRate = function (e) {
    if (!(e < 0) && !(e > 125)) {
      C = e > 0 ? Math.floor(1000 / e) : 5;
    }
  };
  exports.unstable_getCurrentPriorityLevel = function () {
    return h;
  };
  exports.unstable_getFirstCallbackNode = function () {
    return r(l);
  };
  exports.unstable_next = function (e) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = h;
    }
    var n = h;
    h = t;
    try {
      return e();
    } finally {
      h = n;
    }
  };
  exports.unstable_pauseExecution = function () {};
  exports.unstable_requestPaint = function () {};
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
    var n = h;
    h = e;
    try {
      return t();
    } finally {
      h = n;
    }
  };
  exports.unstable_scheduleCallback = function (e, o, i) {
    var u = exports.unstable_now();
    i = typeof i == "object" && i !== null && typeof (i = i.delay) == "number" && i > 0 ? u + i : u;
    switch (e) {
      case 1:
        var a = -1;
        break;
      case 2:
        a = 250;
        break;
      case 5:
        a = 1073741823;
        break;
      case 4:
        a = 10000;
        break;
      default:
        a = 5000;
    }
    a = i + a;
    e = {
      id: p++,
      callback: o,
      priorityLevel: e,
      startTime: i,
      expirationTime: a,
      sortIndex: -1
    };
    if (i > u) {
      e.sortIndex = i;
      n(f, e);
      if (r(l) === null && e === r(f)) {
        if (g) {
          w(Z);
          Z = -1;
        } else {
          g = true;
        }
        D(E, i - u);
      }
    } else {
      e.sortIndex = a;
      n(l, e);
      if (!m && !v) {
        m = true;
        L();
      }
    }
    return e;
  };
  exports.unstable_shouldYield = P;
  exports.unstable_wrapCallback = function (e) {
    var t = h;
    return function () {
      var n = h;
      h = t;
      try {
        return e.apply(this, arguments);
      } finally {
        h = n;
      }
    };
  };
}