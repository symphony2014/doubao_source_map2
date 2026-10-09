// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DD' to 'diceStackLayout'
// - Renamed export 'Sk' to 'goldenRatio'
// - Renamed export 'ZP' to 'createTreemap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 86958
         */
module.exports = function (module, exports, require) {
  var partitionLayout = require("partition-layout") /*id: 297825*/;
  var stackLayoutProcessor = require("stack-layout-processor") /*id: 926461*/;
  var o = (1 + Math.sqrt(5)) / 2;
  function u(t, n, e, o, u, a) {
    var s;
    var c;
    var h;
    var f;
    var l;
    var _;
    var p;
    var y;
    var d;
    var x;
    var g;
    var v = [];
    var m = n.children;
    var b = 0;
    var M = 0;
    var w = m.length;
    var Z = n.value;
    while (b < w) {
      h = u - e;
      f = a - o;
      do {
        l = m[M++].value;
      } while (!l && M < w);
      _ = p = l;
      d = Math.max(p / (g = l * l * (x = Math.max(f / h, h / f) / (Z * t))), g / _);
      for (; M < w; ++M) {
        l += c = m[M].value;
        if (c < _) {
          _ = c;
        }
        if (c > p) {
          p = c;
        }
        if ((y = Math.max(p / (g = l * l * x), g / _)) > d) {
          l -= c;
          break;
        }
        d = y;
      }
      v.push(s = {
        value: l,
        dice: h < f,
        children: m.slice(b, M)
      });
      if (s.dice) {
        partitionLayout.partitionLayout(s, e, o, u, Z ? o += f * l / Z : a);
      } else {
        stackLayoutProcessor.stackLayout(s, e, o, Z ? e += h * l / Z : u, a);
      }
      Z -= l;
      b = M;
    }
    return v;
  }
  exports.createTreemap = function t(n) {
    function e(t, e, i, r, o) {
      u(n, t, e, i, r, o);
    }
    e.ratio = function (n) {
      return t((n *= 1) > 1 ? n : 1);
    };
    return e;
  }(o);
  require.d(exports, {
    diceStackLayout: function () {
      return u;
    },
    goldenRatio: function () {
      return o;
    }
  });
}