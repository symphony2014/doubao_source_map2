// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 451491
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = Math.hypot;
  var i = Math.abs;
  var a = Math.sqrt;
  polyfillPropertyDefiner({
    target: "Math",
    stat: true,
    arity: 2,
    forced: !!o && o(Infinity, NaN) !== Infinity
  }, {
    hypot: function (t, r) {
      var e;
      var n;
      var o = 0;
      var u = 0;
      var c = arguments.length;
      var f = 0;
      while (u < c) {
        e = i(arguments[u++]);
        if (f < e) {
          o = o * (n = f / e) * n + 1;
          f = e;
        } else if (e > 0) {
          o += (n = e / f) * n;
        } else {
          o += e;
        }
      }
      if (f === Infinity) {
        return Infinity;
      } else {
        return f * a(o);
      }
    }
  });
}