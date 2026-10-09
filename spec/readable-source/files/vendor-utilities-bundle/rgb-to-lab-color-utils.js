// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 644202
         */
module.exports = function (module, exports, require) {
  exports.rgb_to_lab = n;
  exports.rgba_to_lab = function (e, a) {
    e = o(e);
    var a = a !== undefined ? o(a) : {
      R: 255,
      G: 255,
      B: 255
    };
    return n({
      R: a.R + (e.R - a.R) * e.A,
      G: a.G + (e.G - a.G) * e.A,
      B: a.B + (e.B - a.B) * e.A
    });
  };
  exports.normalize_rgb = o;
  var i = Math.pow;
  function n(e) {
    var a;
    var n;
    var s;
    var t;
    var c;
    var r;
    var p;
    var l;
    r = (n = (a = o(a = e)).R / 255, s = a.G / 255, t = a.B / 255, n > 0.04045 ? n = i((n + 0.055) / 1.055, 2.4) : n /= 12.92, s > 0.04045 ? s = i((s + 0.055) / 1.055, 2.4) : s /= 12.92, t > 0.04045 ? t = i((t + 0.055) / 1.055, 2.4) : t /= 12.92, c = {
      X: (n *= 100) * 0.4124 + (s *= 100) * 0.3576 + (t *= 100) * 0.1805,
      Y: n * 0.2126 + s * 0.7152 + t * 0.0722,
      Z: n * 0.0193 + s * 0.1192 + t * 0.9505
    }).Y / 100;
    p = c.Z / 108.883;
    l = (l = c.X / 95.047) > 0.008856 ? i(l, 1 / 3) : l * 7.787 + 16 / 116;
    return {
      L: (r = r > 0.008856 ? i(r, 1 / 3) : r * 7.787 + 16 / 116) * 116 - 16,
      a: (l - r) * 500,
      b: (r - (p = p > 0.008856 ? i(p, 1 / 3) : p * 7.787 + 16 / 116)) * 200
    };
  }
  function o(e) {
    var a = {
      R: e.R || e.r || 0,
      G: e.G || e.g || 0,
      B: e.B || e.b || 0
    };
    if (e.a !== undefined || e.A !== undefined) {
      a.A = e.A || e.a || 0;
    }
    return a;
  }
}