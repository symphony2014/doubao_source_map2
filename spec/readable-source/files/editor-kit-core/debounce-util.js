// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'debounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 783084
         */
module.exports = function (module, exports, require) {
  function n(t, e, r) {
    var n;
    var o;
    var i;
    var u;
    var a;
    var s;
    var c = 0;
    var f = false;
    var l = false;
    var p = true;
    var d = !e && e !== 0 && typeof window.requestAnimationFrame == "function";
    if (typeof t != "function") {
      throw TypeError("Expected a function");
    }
    function h(e) {
      var r = n;
      var i = o;
      n = o = undefined;
      c = e;
      return u = t.apply(i, r);
    }
    function y(t, e) {
      if (d) {
        window.cancelAnimationFrame(a);
        return window.requestAnimationFrame(t);
      } else {
        return setTimeout(t, e);
      }
    }
    function b(t) {
      var r = t - s;
      var n = t - c;
      return s === undefined || r >= e || r < 0 || l && n >= i;
    }
    function g() {
      var t;
      var r;
      var n;
      var o = Date.now();
      if (b(o)) {
        return v(o);
      }
      a = y(g, (t = o - s, r = o - c, n = e - t, l ? Math.min(n, i - r) : n));
    }
    function v(t) {
      a = undefined;
      if (p && n) {
        return h(t);
      } else {
        n = o = undefined;
        return u;
      }
    }
    function m() {
      var t;
      var r = [];
      var i = 0;
      for (; i < arguments.length; i++) {
        r[i] = arguments[i];
      }
      var p = Date.now();
      var d = b(p);
      n = r;
      o = this;
      s = p;
      if (d) {
        if (a === undefined) {
          c = t = s;
          a = y(g, e);
          if (f) {
            return h(t);
          } else {
            return u;
          }
        }
        if (l) {
          a = y(g, e);
          return h(s);
        }
      }
      if (a === undefined) {
        a = y(g, e);
      }
      return u;
    }
    e = +e || 0;
    if (typeof r == "object") {
      f = !!r.leading;
      i = (l = "maxWait" in r) ? Math.max(+r.maxWait || 0, e) : i;
      p = "trailing" in r ? !!r.trailing : p;
    }
    m.cancel = function () {
      if (a !== undefined) {
        (function (t) {
          if (d) {
            return window.cancelAnimationFrame(t);
          }
          clearTimeout(t);
        })(a);
      }
      c = 0;
      n = s = o = a = undefined;
    };
    m.flush = function () {
      if (a === undefined) {
        return u;
      } else {
        return v(Date.now());
      }
    };
    m.pending = function () {
      return a !== undefined;
    };
    return m;
  }
  require.d(exports, {
    debounce: function () {
      return n;
    }
  });
}