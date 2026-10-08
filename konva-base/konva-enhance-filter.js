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
         * moduleId: 466819
         */
module.exports = function (module, exports, require) {
  exports.Enhance = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  function s(t, e, i, r, a) {
    var n;
    var s = i - e;
    var o = a - r;
    if (s === 0) {
      return r + o / 2;
    } else if (o === 0) {
      return r;
    } else {
      return (t - e) / s * o + r;
    }
  }
  exports.Enhance = function (t) {
    var e;
    var i;
    var r;
    var a;
    var n;
    var o;
    var h;
    var l;
    var d;
    var c;
    var u;
    var f;
    var g;
    var p = t.data;
    var v = p.length;
    var m = p[0];
    var y = m;
    var _ = p[1];
    var b = _;
    var x = p[2];
    var S = x;
    var C = this.enhance();
    if (C !== 0) {
      for (g = 0; g < v; g += 4) {
        if ((c = p[g + 0]) < m) {
          m = c;
        } else if (c > y) {
          y = c;
        }
        if ((u = p[g + 1]) < _) {
          _ = u;
        } else if (u > b) {
          b = u;
        }
        if ((f = p[g + 2]) < x) {
          x = f;
        } else if (f > S) {
          S = f;
        }
      }
      if (y === m) {
        y = 255;
        m = 0;
      }
      if (b === _) {
        b = 255;
        _ = 0;
      }
      if (S === x) {
        S = 255;
        x = 0;
      }
      if (C > 0) {
        i = y + C * (255 - y);
        r = m - C * (m - 0);
        n = b + C * (255 - b);
        o = _ - C * (_ - 0);
        l = S + C * (255 - S);
        d = x - C * (x - 0);
      } else {
        e = (y + m) * 0.5;
        i = y + C * (y - e);
        r = m + C * (m - e);
        a = (b + _) * 0.5;
        n = b + C * (b - a);
        o = _ + C * (_ - a);
        h = (S + x) * 0.5;
        l = S + C * (S - h);
        d = x + C * (x - h);
      }
      g = 0;
      for (; g < v; g += 4) {
        p[g + 0] = s(p[g + 0], m, y, r, i);
        p[g + 1] = s(p[g + 1], _, b, o, n);
        p[g + 2] = s(p[g + 2], x, S, d, l);
      }
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "enhance", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}