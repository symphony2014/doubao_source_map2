// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createDeepMergeFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 96904
         */
module.exports = function (module, exports, require) {
  var interpolatorFactory = require("interpolator-factory") /*id: 585471*/;
  function r(t, n) {
    var e;
    var r = {};
    var o = {};
    if (t === null || typeof t != "object") {
      t = {};
    }
    if (n === null || typeof n != "object") {
      n = {};
    }
    for (e in n) {
      if (e in t) {
        r[e] = interpolatorFactory.createInterpolator(t[e], n[e]);
      } else {
        o[e] = n[e];
      }
    }
    return function (t) {
      for (e in r) {
        o[e] = r[e](t);
      }
      return o;
    };
  }
  require.d(exports, {
    createDeepMergeFunction: function () {
      return r;
    }
  });
}