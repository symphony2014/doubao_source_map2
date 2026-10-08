// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$T' to 'calculateAngle'
// - Renamed export 'Id' to 'degToRad'
// - Renamed export 'LW' to 'normalizeAngle'
// - Renamed export 'MZ' to 'normalizeArraySum'
// - Renamed export 'OY' to 'calcPercentage'
// - Renamed export 'Oq' to 'adjustArrayValues'
// - Renamed export 'Z2' to 'isValueInRange'
// - Renamed export 'ZY' to 'radToDeg'
// - Renamed export '_n' to 'createPolarMapper'
// - Renamed export 'cM' to 'calcLogBase'
// - Renamed export 'h2' to 'parsePercentRatio'
// - Renamed export 'hU' to 'isPercentString'
// - Renamed export 'jr' to 'parsePercentValue'
// - Renamed export 'k4' to 'mapRangeValue'
// - Renamed export 'mv' to 'calcLog10'
// - Renamed export 'tj' to 'distributeValues'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 51318
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  function h(t) {
    return t * Math.PI / 180;
  }
  function l(t) {
    return t * 180 / Math.PI;
  }
  function u(t) {
    if (t < 0) {
      return t + 360;
    } else {
      return t;
    }
  }
  function c(t, e) {
    if (t <= 0) {
      return 0;
    } else {
      return Math.log(t) * Math.log(Math.E) / Math.log(e);
    }
  }
  function p(t) {
    if (t <= 0) {
      return 0;
    } else {
      return Math.log(t) * Math.log(Math.E) / Math.log(10);
    }
  }
  function d(t, e) {
    if (isNumberUtil.isNumber(t)) {
      return t;
    } else {
      return e * parseInt(t, 10) / 100;
    }
  }
  function f(t) {
    return isStringTypeCheck.isString(t) && /\d+(\.\d+)?%/.test(t);
  }
  function g(t, e) {
    if (f(t)) {
      return parseFloat(t) / 100;
    }
    if (isNumberUtil.isNumber(t)) {
      return t / e;
    }
    throw Error(t + " is not a percent string of number");
  }
  function y(t, e) {
    var n = findMaxByUtilValue.findMaxByUtilValue(e);
    var i = arrayMaxByUtilWrapper.getMaxBy(e);
    return t >= n && t <= i;
  }
  function v(t, e) {
    if (t === e && t === 0) {
      return 0;
    }
    if (t === 0) {
      if (e > 0) {
        return 90;
      } else {
        return -90;
      }
    }
    if (e === 0) {
      if (t > 0) {
        return 0;
      } else {
        return 180;
      }
    }
    var n = Math.atan(e / t) * 180 / Math.PI;
    if (t > 0 && e > 0 || t > 0 && e < 0) {
      return n;
    } else if (t < 0 && e > 0 || t < 0 && e < 0) {
      return n + 180;
    } else {
      return undefined;
    }
  }
  function m(t) {
    var e = t.cx;
    var n = t.cy;
    return function (t, i) {
      return {
        x: e + Math.cos(h(t)) * i,
        y: n + Math.sin(h(t)) * i
      };
    };
  }
  function x(t, e, n = [0], i = -1) {
    if (t === 0 && e === 0) {
      if (i === -1) {
        return 1 / n.length * 100;
      } else {
        return i / n.length * 100;
      }
    } else {
      return t / e * 100;
    }
  }
  function _(t, e, n) {
    var i = e[0];
    var r = e[1];
    if (i === r) {
      return (n[0] + n[1]) / 2;
    } else {
      return n[0] + (t - i) / (r - i) * (n[1] - n[0]);
    }
  }
  function b(t, e) {
    if (!t.length) {
      return [];
    }
    var n = arraySumHelper.sumArray(t);
    var i = Math.pow(10, e);
    var r = t.map(function (t) {
      return t / n * i * 100;
    });
    var o = i * 100;
    var a = r.map(function (t) {
      return Math.floor(t);
    });
    var h = arraySumHelper.sumArray(a);
    var l = r.map(function (t, e) {
      return t - a[e];
    });
    while (h < o) {
      var u = Number.NEGATIVE_INFINITY;
      var c = null;
      var p = l.length;
      var d = 0;
      for (; d < p; ++d) {
        if (l[d] > u) {
          u = l[d];
          c = d;
        }
      }
      ++a[c];
      l[c] = 0;
      ++h;
    }
    return a.map(function (t) {
      return t / i;
    });
  }
  function w(t, e = 0) {
    var n = t.slice();
    if (e === 0) {
      return n;
    }
    if (!n.length) {
      return [];
    }
    var i = arrayMaxByUtilWrapper.getMaxBy(n);
    var r = findMaxByUtilValue.findMaxByUtilValue(n);
    if (r < i * e && e > 0) {
      var s = (i - 1 / e * r) / (1 / e - 1);
      n.forEach(function (t, e) {
        n[e] += s;
      });
    }
    return n;
  }
  function S(t, e = 0) {
    var n = w(t, e);
    var i = arraySumHelper.sumArray(n);
    return n.map(function (t) {
      return t / i;
    });
  }
  require.d(exports, {
    calculateAngle: function () {
      return v;
    },
    degToRad: function () {
      return h;
    },
    normalizeAngle: function () {
      return u;
    },
    normalizeArraySum: function () {
      return S;
    },
    calcPercentage: function () {
      return x;
    },
    adjustArrayValues: function () {
      return w;
    },
    isValueInRange: function () {
      return y;
    },
    radToDeg: function () {
      return l;
    },
    createPolarMapper: function () {
      return m;
    },
    calcLogBase: function () {
      return c;
    },
    parsePercentRatio: function () {
      return g;
    },
    isPercentString: function () {
      return f;
    },
    parsePercentValue: function () {
      return d;
    },
    mapRangeValue: function () {
      return _;
    },
    calcLog10: function () {
      return p;
    },
    distributeValues: function () {
      return b;
    }
  });
}