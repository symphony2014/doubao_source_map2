// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a4' to 'isApproxEqual'
// - Renamed export 'jT' to 'getPolarPoint'
// - Renamed export 'jr' to 'resolveValue'
// - Renamed export 'yo' to 'twoPi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 577989
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var r = Math.PI * 2;
  function o(t, e, n = 0.000001) {
    return Math.abs(t - e) <= n;
  }
  function a(t, e, n, i) {
    return {
      x: t + Math.cos(i) * n,
      y: e + Math.sin(i) * n
    };
  }
  function s(t, e) {
    if (isNumberUtil.isNumber(t)) {
      return t;
    } else {
      return e * parseInt(t, 10) / 100;
    }
  }
  require.d(exports, {
    isApproxEqual: function () {
      return o;
    },
    getPolarPoint: function () {
      return a;
    },
    resolveValue: function () {
      return s;
    },
    twoPi: function () {
      return r;
    }
  });
}