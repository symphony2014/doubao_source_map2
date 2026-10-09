// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 360783
         */
module.exports = function (module, exports, require) {
  exports.Mask = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  function s(t, e, i) {
    var r = (i * t.width + e) * 4;
    var a = [];
    a.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]);
    return a;
  }
  function o(t, e) {
    return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
  }
  exports.Mask = function (t) {
    var e = function (t, e) {
      var i = s(t, 0, 0);
      var r = s(t, t.width - 1, 0);
      var a = s(t, 0, t.height - 1);
      var n = s(t, t.width - 1, t.height - 1);
      var h = e || 10;
      if (o(i, r) < h && o(r, n) < h && o(n, a) < h && o(a, i) < h) {
        var l = function (t) {
          var e = [0, 0, 0];
          var i = 0;
          for (; i < t.length; i++) {
            e[0] += t[i][0];
            e[1] += t[i][1];
            e[2] += t[i][2];
          }
          e[0] /= t.length;
          e[1] /= t.length;
          e[2] /= t.length;
          return e;
        }([r, i, n, a]);
        var d = [];
        var c = 0;
        for (; c < t.width * t.height; c++) {
          var u = o(l, [t.data[c * 4], t.data[c * 4 + 1], t.data[c * 4 + 2]]);
          d[c] = u < h ? 0 : 255;
        }
        return d;
      }
    }(t, this.threshold());
    if (e) {
      e = function (t, e, i) {
        var r = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
        var a = Math.round(Math.sqrt(r.length));
        var n = Math.floor(a / 2);
        var s = [];
        var o = 0;
        for (; o < i; o++) {
          for (var h = 0; h < e; h++) {
            var l = o * e + h;
            var d = 0;
            var c = 0;
            for (; c < a; c++) {
              for (var u = 0; u < a; u++) {
                var f = o + c - n;
                var g = h + u - n;
                if (f >= 0 && f < i && g >= 0 && g < e) {
                  var p = f * e + g;
                  var v = r[c * a + u];
                  d += t[p] * v;
                }
              }
            }
            s[l] = d;
          }
        }
        return s;
      }(e = function (t, e, i) {
        var r = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        var a = Math.round(Math.sqrt(r.length));
        var n = Math.floor(a / 2);
        var s = [];
        var o = 0;
        for (; o < i; o++) {
          for (var h = 0; h < e; h++) {
            var l = o * e + h;
            var d = 0;
            var c = 0;
            for (; c < a; c++) {
              for (var u = 0; u < a; u++) {
                var f = o + c - n;
                var g = h + u - n;
                if (f >= 0 && f < i && g >= 0 && g < e) {
                  var p = f * e + g;
                  var v = r[c * a + u];
                  d += t[p] * v;
                }
              }
            }
            s[l] = (d >= 1020) * 255;
          }
        }
        return s;
      }(e = function (t, e, i) {
        var r = [1, 1, 1, 1, 0, 1, 1, 1, 1];
        var a = Math.round(Math.sqrt(r.length));
        var n = Math.floor(a / 2);
        var s = [];
        var o = 0;
        for (; o < i; o++) {
          for (var h = 0; h < e; h++) {
            var l = o * e + h;
            var d = 0;
            var c = 0;
            for (; c < a; c++) {
              for (var u = 0; u < a; u++) {
                var f = o + c - n;
                var g = h + u - n;
                if (f >= 0 && f < i && g >= 0 && g < e) {
                  var p = f * e + g;
                  var v = r[c * a + u];
                  d += t[p] * v;
                }
              }
            }
            s[l] = (d === 2040) * 255;
          }
        }
        return s;
      }(e, t.width, t.height), t.width, t.height), t.width, t.height);
      (function (t, e) {
        for (var i = 0; i < t.width * t.height; i++) {
          t.data[i * 4 + 3] = e[i];
        }
      })(t, e);
    }
    return t;
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "threshold", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}