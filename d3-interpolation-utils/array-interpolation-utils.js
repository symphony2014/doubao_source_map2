// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'interpolateArray'
// - Renamed export 'Z' to 'interpolateArrayOrTypedArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 913249
         */
module.exports = function (module, exports, require) {
  var interpolatorFactory = require("interpolator-factory") /*id: 585471*/;
  var arrayLerpUtils = require("array-lerp-utils") /*id: 708919*/;
  function o(t, n) {
    return (arrayLerpUtils.isTypedArray(n) ? arrayLerpUtils.arrayLerp : u)(t, n);
  }
  function u(t, n) {
    var e;
    var r = n ? n.length : 0;
    var o = t ? Math.min(r, t.length) : 0;
    var u = Array(o);
    var a = Array(r);
    for (e = 0; e < o; ++e) {
      u[e] = interpolatorFactory.createInterpolator(t[e], n[e]);
    }
    for (; e < r; ++e) {
      a[e] = n[e];
    }
    return function (t) {
      for (e = 0; e < o; ++e) {
        a[e] = u[e](t);
      }
      return a;
    };
  }
  require.d(exports, {
    interpolateArray: function () {
      return u;
    },
    interpolateArrayOrTypedArray: function () {
      return o;
    }
  });
}