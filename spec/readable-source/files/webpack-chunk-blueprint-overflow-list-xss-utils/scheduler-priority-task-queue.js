// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 949703
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    var n = e.length;
    for (e.push(t); n > 0;) {
      var r = n - 1 >>> 1;
      var i = e[r];
      if (o(i, t) > 0) {
        e[r] = t;
        e[n] = i;
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
  function i(e) {
    if (e.length === 0) {
      return null;
    }
    var t = e[0];
    var n = e.pop();
    if (n !== t) {
      e[0] = n;
      var r = 0;
      var i = e.length;
      var a = i >>> 1;
      while (r < a) {
        var s = (r + 1) * 2 - 1;
        var u = e[s];
        var c = s + 1;
        var l = e[c];
        if (o(u, n) < 0) {
          if (c < i && o(l, u) < 0) {
            e[r] = l;
            e[c] = n;
            r = c;
          } else {
            e[r] = u;
            e[s] = n;
            r = s;
          }
        } else if (c < i && o(l, n) < 0) {
          e[r] = l;
          e[c] = n;
          r = c;
        } else {
          break;
        }
      }
    }
    return t;
  }
  function o(e, t) {
    var n = e.sortIndex - t.sortIndex;
    if (n !== 0) {
      return n;
    } else {
      return e.id - t.id;
    }
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a;
    var s = performance;
    exports.unstable_now = function () {
      return s.now();
    };
  } else {
    var u = Date;
    var c = u.now();
    exports.unstable_now = function () {
      return u.now() - c;
    };
  }
  var l = [];
  var f = [];
  var h = 1;
  var d = null;
  var p = 3;
  var g = false;
  var v = false;
  var m = false;
  var y = typeof setTimeout == "function" ? setTimeout : null;
  var b = typeof clearTimeout == "function" ? clearTimeout : null;
  var _ = typeof setImmediate != "undefined" ? setImmediate : null;
  function w(e) {
    for (var t = r(f); t !== null;) {
      if (t.callback === null) {
        i(f);
      } else if (t.startTime <= e) {
        i(f);
        t.sortIndex = t.expirationTime;
        n(l, t);
      } else {
        break;
      }
      t = r(f);
    }
  }
  function E(e) {
    m = false;
    w(e);
    if (!v) {
      if (r(l) !== null) {
        v = true;
        D(S);
      } else {
        var t = r(f);
        if (t !== null) {
          j(E, t.startTime - e);
        }
      }
    }
  }
  function S(e, n) {
    v = false;
    if (m) {
      m = false;
      b(O);
      O = -1;
    }
    g = true;
    var o = p;
    try {
      w(n);
      d = r(l);
      while (d !== null && (!(d.expirationTime > n) || e && !R())) {
        var a = d.callback;
        if (typeof a == "function") {
          d.callback = null;
          p = d.priorityLevel;
          var s = a(d.expirationTime <= n);
          n = exports.unstable_now();
          if (typeof s == "function") {
            d.callback = s;
          } else if (d === r(l)) {
            i(l);
          }
          w(n);
        } else {
          i(l);
        }
        d = r(l);
      }
      if (d !== null) {
        var u = true;
      } else {
        var c = r(f);
        if (c !== null) {
          j(E, c.startTime - n);
        }
        u = false;
      }
      return u;
    } finally {
      d = null;
      p = o;
      g = false;
    }
  }
  if (typeof navigator != "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  }
  var x = false;
  var k = null;
  var O = -1;
  var A = 5;
  var T = -1;
  function R() {
    return !(exports.unstable_now() - T < A);
  }
  function C() {
    if (k !== null) {
      var e = exports.unstable_now();
      T = e;
      var n = true;
      try {
        n = k(true, e);
      } finally {
        if (n) {
          a();
        } else {
          x = false;
          k = null;
        }
      }
    } else {
      x = false;
    }
  }
  if (typeof _ == "function") {
    a = function () {
      _(C);
    };
  } else if (typeof MessageChannel != "undefined") {
    var M = new MessageChannel();
    var P = M.port2;
    M.port1.onmessage = C;
    a = function () {
      P.postMessage(null);
    };
  } else {
    a = function () {
      y(C, 0);
    };
  }
  function D(e) {
    k = e;
    if (!x) {
      x = true;
      a();
    }
  }
  function j(e, n) {
    O = y(function () {
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
    if (!v && !g) {
      v = true;
      D(S);
    }
  };
  exports.unstable_forceFrameRate = function (e) {
    if (!(e < 0) && !(e > 125)) {
      A = e > 0 ? Math.floor(1000 / e) : 5;
    }
  };
  exports.unstable_getCurrentPriorityLevel = function () {
    return p;
  };
  exports.unstable_getFirstCallbackNode = function () {
    return r(l);
  };
  exports.unstable_next = function (e) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = p;
    }
    var n = p;
    p = t;
    try {
      return e();
    } finally {
      p = n;
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
    var n = p;
    p = e;
    try {
      return t();
    } finally {
      p = n;
    }
  };
  exports.unstable_scheduleCallback = function (e, i, o) {
    var a = exports.unstable_now();
    o = typeof o == "object" && o !== null && typeof (o = o.delay) == "number" && o > 0 ? a + o : a;
    switch (e) {
      case 1:
        var s = -1;
        break;
      case 2:
        s = 250;
        break;
      case 5:
        s = 1073741823;
        break;
      case 4:
        s = 10000;
        break;
      default:
        s = 5000;
    }
    s = o + s;
    e = {
      id: h++,
      callback: i,
      priorityLevel: e,
      startTime: o,
      expirationTime: s,
      sortIndex: -1
    };
    if (o > a) {
      e.sortIndex = o;
      n(f, e);
      if (r(l) === null && e === r(f)) {
        if (m) {
          b(O);
          O = -1;
        } else {
          m = true;
        }
        j(E, o - a);
      }
    } else {
      e.sortIndex = s;
      n(l, e);
      if (!v && !g) {
        v = true;
        D(S);
      }
    }
    return e;
  };
  exports.unstable_shouldYield = R;
  exports.unstable_wrapCallback = function (e) {
    var t = p;
    return function () {
      var n = p;
      p = t;
      try {
        return e.apply(this, arguments);
      } finally {
        p = n;
      }
    };
  };
}