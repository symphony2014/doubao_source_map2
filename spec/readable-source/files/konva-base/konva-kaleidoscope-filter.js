// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 420801
         */
module.exports = function (module, exports, require) {
  exports.Kaleidoscope = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  function o(t, e, i) {
    var r;
    var a;
    var n;
    var s;
    var o = t.data;
    var h = e.data;
    var l = t.width;
    var d = t.height;
    var c = i.polarCenterX || l / 2;
    var u = i.polarCenterY || d / 2;
    var f = 0;
    var g = 0;
    var p = 0;
    var v = 0;
    var m = Math.sqrt(c * c + u * u);
    m = (s = Math.sqrt((a = l - c) * a + (n = d - u) * n)) > m ? s : m;
    var y;
    var _;
    var b;
    var x;
    var S = 360 / l * Math.PI / 180;
    for (_ = 0; _ < l; _ += 1) {
      y = 0;
      b = Math.sin(_ * S);
      x = Math.cos(_ * S);
      for (; y < d; y += 1) {
        a = Math.floor(c + m * y / d * x);
        f = o[(r = ((n = Math.floor(u + m * y / d * b)) * l + a) * 4) + 0];
        g = o[r + 1];
        p = o[r + 2];
        v = o[r + 3];
        h[(r = (_ + y * l) * 4) + 0] = f;
        h[r + 1] = g;
        h[r + 2] = p;
        h[r + 3] = v;
      }
    }
  }
  function h(t, e, i) {
    var r;
    var a;
    var n;
    var s;
    var o;
    var h;
    var l;
    var d = t.data;
    var c = e.data;
    var u = t.width;
    var f = t.height;
    var g = i.polarCenterX || u / 2;
    var p = i.polarCenterY || f / 2;
    var v = 0;
    var m = 0;
    var y = 0;
    var _ = 0;
    var b = Math.sqrt(g * g + p * p);
    b = (l = Math.sqrt((n = u - g) * n + (s = f - p) * s)) > b ? l : b;
    var x;
    var S;
    var C = i.polarRotation || 0;
    for (n = 0; n < u; n += 1) {
      for (s = 0; s < f; s += 1) {
        x = Math.sqrt((o = n - g) * o + (h = s - p) * h) * f / b;
        r = Math.floor((Math.atan2(h, o) * 180 / Math.PI + 360 + C) % 360 * u / 360);
        v = d[(a = (Math.floor(x) * u + r) * 4) + 0];
        m = d[a + 1];
        y = d[a + 2];
        _ = d[a + 3];
        c[(a = (s * u + n) * 4) + 0] = v;
        c[a + 1] = m;
        c[a + 2] = y;
        c[a + 3] = _;
      }
    }
  }
  exports.Kaleidoscope = function (t) {
    var e;
    var i;
    var r;
    var a;
    var s;
    var l;
    var d;
    var c;
    var u;
    var f;
    var g = t.width;
    var p = t.height;
    var v = Math.round(this.kaleidoscopePower());
    var m = Math.floor(Math.round(this.kaleidoscopeAngle()) % 360 * g / 360);
    if (!(v < 1)) {
      var y = konvaTransformUtil.Util.createCanvasElement();
      y.width = g;
      y.height = p;
      var _ = y.getContext("2d").getImageData(0, 0, g, p);
      konvaTransformUtil.Util.releaseCanvas(y);
      o(t, _, {
        polarCenterX: g / 2,
        polarCenterY: p / 2
      });
      for (var b = g / Math.pow(2, v); b <= 8;) {
        b *= 2;
        v -= 1;
      }
      var x = b = Math.ceil(b);
      var S = 0;
      var C = x;
      var w = 1;
      if (m + b > g) {
        S = x;
        C = 0;
        w = -1;
      }
      i = 0;
      for (; i < p; i += 1) {
        for (e = S; e !== C; e += w) {
          r = Math.round(e + m) % g;
          u = (g * i + r) * 4;
          s = _.data[u + 0];
          l = _.data[u + 1];
          d = _.data[u + 2];
          c = _.data[u + 3];
          f = (g * i + e) * 4;
          _.data[f + 0] = s;
          _.data[f + 1] = l;
          _.data[f + 2] = d;
          _.data[f + 3] = c;
        }
      }
      for (i = 0; i < p; i += 1) {
        a = 0;
        x = Math.floor(b);
        for (; a < v; a += 1) {
          for (e = 0; e < x + 1; e += 1) {
            u = (g * i + e) * 4;
            s = _.data[u + 0];
            l = _.data[u + 1];
            d = _.data[u + 2];
            c = _.data[u + 3];
            f = (g * i + x * 2 - e - 1) * 4;
            _.data[f + 0] = s;
            _.data[f + 1] = l;
            _.data[f + 2] = d;
            _.data[f + 3] = c;
          }
          x *= 2;
        }
      }
      h(_, t, {
        polarRotation: 0
      });
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "kaleidoscopePower", 2, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "kaleidoscopeAngle", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}