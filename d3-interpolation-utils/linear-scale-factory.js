// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l4' to 'linearScaleFactory'
// - Renamed export 'ZP' to 'identityScale'
// - Renamed export 'yR' to 'identityFunction'
// - Renamed export 'JG' to 'copyScaleProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 481534
         */
module.exports = function (module, exports, require) {
  var binarySearchUtils = require("binary-search-utils") /*id: 295350*/;
  var interpolatorFactory = require("interpolator-factory") /*id: 585471*/;
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var mathLerpInt = require("math-lerp-int") /*id: 471062*/;
  var toNumberUtil = require("to-number-util") /*id: 508411*/;
  var s = [0, 1];
  function c(t) {
    return t;
  }
  function h(t, n) {
    var e;
    if (n -= t *= 1) {
      return function (e) {
        return (e - t) / n;
      };
    } else {
      e = isNaN(n) ? NaN : 0.5;
      return function () {
        return e;
      };
    }
  }
  function f(t, n, e) {
    var i = t[0];
    var r = t[1];
    var o = n[0];
    var u = n[1];
    if (r < i) {
      i = h(r, i);
      o = e(u, o);
    } else {
      i = h(i, r);
      o = e(o, u);
    }
    return function (t) {
      return o(i(t));
    };
  }
  function l(t, n, e) {
    var r = Math.min(t.length, n.length) - 1;
    var o = Array(r);
    var u = Array(r);
    var a = -1;
    for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r;) {
      o[a] = h(t[a], t[a + 1]);
      u[a] = e(n[a], n[a + 1]);
    }
    return function (n) {
      var e = binarySearchUtils.binarySearchRight_1(t, n, 1, r) - 1;
      return u[e](o[e](n));
    };
  }
  function _(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
  }
  function p() {
    var t;
    var n;
    var e;
    var i;
    var h;
    var _;
    var p = s;
    var y = s;
    var d = interpolatorFactory.createInterpolator;
    var x = c;
    function g() {
      var t;
      var n;
      var e;
      var r = Math.min(p.length, y.length);
      if (x !== c) {
        t = p[0];
        n = p[r - 1];
        if (t > n) {
          e = t;
          t = n;
          n = e;
        }
        x = function (e) {
          return Math.max(t, Math.min(n, e));
        };
      }
      i = r > 2 ? l : f;
      h = _ = null;
      return v;
    }
    function v(n) {
      if (n == null || isNaN(n *= 1)) {
        return e;
      } else {
        return (h ||= i(p.map(t), y, d))(t(x(n)));
      }
    }
    v.invert = function (e) {
      return x(n((_ ||= i(y, p.map(t), linearInterpolation_2.createLerp))(e)));
    };
    v.domain = function (t) {
      if (arguments.length) {
        p = Array.from(t, toNumberUtil.toNumber);
        return g();
      } else {
        return p.slice();
      }
    };
    v.range = function (t) {
      if (arguments.length) {
        y = Array.from(t);
        return g();
      } else {
        return y.slice();
      }
    };
    v.rangeRound = function (t) {
      y = Array.from(t);
      d = mathLerpInt.createLerp;
      return g();
    };
    v.clamp = function (t) {
      if (arguments.length) {
        x = !!t || c;
        return g();
      } else {
        return x !== c;
      }
    };
    v.interpolate = function (t) {
      if (arguments.length) {
        d = t;
        return g();
      } else {
        return d;
      }
    };
    v.unknown = function (t) {
      if (arguments.length) {
        e = t;
        return v;
      } else {
        return e;
      }
    };
    return function (e, i) {
      t = e;
      n = i;
      return g();
    };
  }
  function y() {
    return p()(c, c);
  }
  require.d(exports, {
    linearScaleFactory: function () {
      return p;
    },
    identityScale: function () {
      return y;
    },
    identityFunction: function () {
      return c;
    },
    copyScaleProperties: function () {
      return _;
    }
  });
}