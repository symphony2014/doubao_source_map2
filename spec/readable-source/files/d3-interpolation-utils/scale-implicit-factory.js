// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'implicitSymbol'
// - Renamed export 'Z' to 'createImplicitScale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 436368
         */
module.exports = function (module, exports, require) {
  var internMapSetUtils = require("intern-map-set-utils") /*id: 636784*/;
  var scaleConfigHelpers = require("scale-config-helpers") /*id: 666730*/;
  let o = Symbol("implicit");
  require.d(exports, {
    implicitSymbol: function () {
      return o;
    },
    createImplicitScale: function () {
      return function t() {
        var n = new internMapSetUtils.InternMap();
        var e = [];
        var u = [];
        var a = o;
        function s(t) {
          let i = n.get(t);
          if (i === undefined) {
            if (a !== o) {
              return a;
            }
            n.set(t, i = e.push(t) - 1);
          }
          return u[i % u.length];
        }
        s.domain = function (t) {
          if (!arguments.length) {
            return e.slice();
          }
          e = [];
          n = new internMapSetUtils.InternMap();
          for (let r of t) {
            if (!n.has(r)) {
              n.set(r, e.push(r) - 1);
            }
          }
          return s;
        };
        s.range = function (t) {
          if (arguments.length) {
            u = Array.from(t);
            return s;
          } else {
            return u.slice();
          }
        };
        s.unknown = function (t) {
          if (arguments.length) {
            a = t;
            return s;
          } else {
            return a;
          }
        };
        s.copy = function () {
          return t(e, u).unknown(a);
        };
        scaleConfigHelpers.setRangeDomain.apply(s, arguments);
        return s;
      };
    }
  });
}