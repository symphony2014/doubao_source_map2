// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'createLinearScale'
// - Renamed export 'Z' to 'createLinearScaleFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 611418
         */
module.exports = function (module, exports, require) {
  var arrayTicksUtils = require("array-ticks-utils") /*id: 536202*/;
  var linearScaleFactory = require("linear-scale-factory") /*id: 481534*/;
  var scaleConfigHelpers = require("scale-config-helpers") /*id: 666730*/;
  var numberFormatConfig = require("number-format-config") /*id: 835886*/;
  function a(t) {
    var n = t.domain;
    t.ticks = function (t) {
      var e = n();
      return arrayTicksUtils.generateTicks(e[0], e[e.length - 1], t == null ? 10 : t);
    };
    t.tickFormat = function (t, e) {
      var i = n();
      return numberFormatConfig.createNumberFormat(i[0], i[i.length - 1], t == null ? 10 : t, e);
    };
    t.nice = function (e) {
      if (e == null) {
        e = 10;
      }
      var r;
      var o;
      var u = n();
      var a = 0;
      var s = u.length - 1;
      var c = u[a];
      var h = u[s];
      var f = 10;
      for (h < c && (o = c, c = h, h = o, o = a, a = s, s = o); f-- > 0;) {
        if ((o = arrayTicksUtils.tickStep(c, h, e)) === r) {
          u[a] = c;
          u[s] = h;
          return n(u);
        }
        if (o > 0) {
          c = Math.floor(c / o) * o;
          h = Math.ceil(h / o) * o;
        } else if (o < 0) {
          c = Math.ceil(c * o) / o;
          h = Math.floor(h * o) / o;
        } else {
          break;
        }
        r = o;
      }
      return t;
    };
    return t;
  }
  require.d(exports, {
    createLinearScale: function () {
      return a;
    },
    createLinearScaleFactory: function () {
      return function t() {
        var n = linearScaleFactory.identityScale();
        n.copy = function () {
          return linearScaleFactory.copyScaleProperties(n, t());
        };
        scaleConfigHelpers.setRangeDomain.apply(n, arguments);
        return a(n);
      };
    }
  });
}