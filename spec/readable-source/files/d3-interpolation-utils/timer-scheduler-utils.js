// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B7' to 'Timer'
// - Renamed export 'HT' to 'timer'
// - Renamed export 'zO' to 'now'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 301426
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o = 0;
  var u = 0;
  var a = 0;
  var s = 0;
  var c = 0;
  var h = 0;
  var f = typeof performance == "object" && performance.now ? performance : Date;
  var l = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };
  function _() {
    return c || (l(p), c = f.now() + h);
  }
  function p() {
    c = 0;
  }
  function y() {
    this._call = this._time = this._next = null;
  }
  function d(t, n, e) {
    var i = new y();
    i.restart(t, n, e);
    return i;
  }
  function x() {
    c = (s = f.now()) + h;
    o = u = 0;
    try {
      (function () {
        _();
        ++o;
        var t;
        var n = i;
        while (n) {
          if ((t = c - n._time) >= 0) {
            n._call.call(undefined, t);
          }
          n = n._next;
        }
        --o;
      })();
    } finally {
      o = 0;
      (function () {
        var t;
        var n;
        var e = i;
        var o = Infinity;
        while (e) {
          if (e._call) {
            if (o > e._time) {
              o = e._time;
            }
            t = e;
            e = e._next;
          } else {
            n = e._next;
            e._next = null;
            e = t ? t._next = n : i = n;
          }
        }
        r = t;
        v(o);
      })();
      c = 0;
    }
  }
  function g() {
    var t = f.now();
    var n = t - s;
    if (n > 1000) {
      h -= n;
      s = t;
    }
  }
  function v(t) {
    if (!o) {
      u &&= clearTimeout(u);
      if (t - c > 24) {
        if (t < Infinity) {
          u = setTimeout(x, t - f.now() - h);
        }
        a &&= clearInterval(a);
      } else {
        if (!a) {
          s = f.now();
          a = setInterval(g, 1000);
        }
        o = 1;
        l(x);
      }
    }
  }
  y.prototype = d.prototype = {
    constructor: y,
    restart: function (t, n, e) {
      if (typeof t != "function") {
        throw TypeError("callback is not a function");
      }
      e = (e == null ? _() : +e) + (n == null ? 0 : +n);
      if (!this._next && r !== this) {
        if (r) {
          r._next = this;
        } else {
          i = this;
        }
        r = this;
      }
      this._call = t;
      this._time = e;
      v();
    },
    stop: function () {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        v();
      }
    }
  };
  require.d(exports, {
    Timer: function () {
      return y;
    },
    timer: function () {
      return d;
    },
    now: function () {
      return _;
    }
  });
}