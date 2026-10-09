// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'stringNumericLerp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 296338
         */
module.exports = function (module, exports, require) {
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var o = RegExp(r.source, "g");
  function u(t, n) {
    var e;
    var u;
    var a;
    var s;
    var c;
    var h = r.lastIndex = o.lastIndex = 0;
    var f = -1;
    var l = [];
    var _ = [];
    t += "";
    n += "";
    while ((a = r.exec(t)) && (s = o.exec(n))) {
      if ((c = s.index) > h) {
        c = n.slice(h, c);
        if (l[f]) {
          l[f] += c;
        } else {
          l[++f] = c;
        }
      }
      if ((a = a[0]) === (s = s[0])) {
        if (l[f]) {
          l[f] += s;
        } else {
          l[++f] = s;
        }
      } else {
        l[++f] = null;
        _.push({
          i: f,
          x: linearInterpolation_2.createLerp(a, s)
        });
      }
      h = o.lastIndex;
    }
    if (h < n.length) {
      c = n.slice(h);
      if (l[f]) {
        l[f] += c;
      } else {
        l[++f] = c;
      }
    }
    if (l.length < 2) {
      if (_[0]) {
        e = _[0].x;
        return function (t) {
          return e(t) + "";
        };
      } else {
        u = n;
        return function () {
          return u;
        };
      }
    } else {
      n = _.length;
      return function (t) {
        var e;
        var i = 0;
        for (; i < n; ++i) {
          l[(e = _[i]).i] = e.x(t);
        }
        return l.join("");
      };
    }
  }
  require.d(exports, {
    stringNumericLerp: function () {
      return u;
    }
  });
}