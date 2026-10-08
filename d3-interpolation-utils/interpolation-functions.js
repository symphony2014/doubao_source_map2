// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'linearInterpolate'
// - Renamed export 'wx' to 'angleInterpolate'
// - Renamed export 'yi' to 'powerInterpolate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 974797
         */
module.exports = function (module, exports, require) {
  var constantFunctionFactory = require("constant-function-factory") /*id: 219843*/;
  function r(t, n) {
    return function (e) {
      return t + e * n;
    };
  }
  function o(t, n) {
    var e = n - t;
    if (e) {
      return r(t, e > 180 || e < -180 ? e - Math.round(e / 360) * 360 : e);
    } else {
      return constantFunctionFactory.constantFactory(isNaN(t) ? n : t);
    }
  }
  function u(t) {
    if ((t *= 1) == 1) {
      return a;
    } else {
      return function (n, e) {
        var r;
        var o;
        var u;
        if (e - n) {
          r = n;
          o = e;
          r = Math.pow(r, u = t);
          o = Math.pow(o, u) - r;
          u = 1 / u;
          return function (t) {
            return Math.pow(r + t * o, u);
          };
        } else {
          return constantFunctionFactory.constantFactory(isNaN(n) ? e : n);
        }
      };
    }
  }
  function a(t, n) {
    var e = n - t;
    if (e) {
      return r(t, e);
    } else {
      return constantFunctionFactory.constantFactory(isNaN(t) ? n : t);
    }
  }
  require.d(exports, {
    linearInterpolate: function () {
      return a;
    },
    angleInterpolate: function () {
      return o;
    },
    powerInterpolate: function () {
      return u;
    }
  });
}