// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 51324
         */
module.exports = function (module, exports, require) {
  var n = Array;
  var F = Math.abs;
  var Q = Math.pow;
  var l = Math.floor;
  var i = Math.log;
  var a = Math.LN2;
  module.exports = {
    pack: function (U, d, r) {
      var o;
      var B;
      var R;
      var c = n(r);
      var s = r * 8 - d - 1;
      var V = (1 << s) - 1;
      var Z = V >> 1;
      var h = d === 23 ? Q(2, -24) - Q(2, -77) : 0;
      var u = +(U < 0 || U === 0 && 1 / U < 0);
      var S = 0;
      for ((U = F(U)) != U || U === Infinity ? (B = +(U != U), o = V) : (R = Q(2, -(o = l(i(U) / a))), U * R < 1 && (o--, R *= 2), o + Z >= 1 ? U += h / R : U += h * Q(2, 1 - Z), U * R >= 2 && (o++, R /= 2), o + Z >= V ? (B = 0, o = V) : o + Z >= 1 ? (B = (U * R - 1) * Q(2, d), o += Z) : (B = U * Q(2, Z - 1) * Q(2, d), o = 0)); d >= 8;) {
        c[S++] = B & 255;
        B /= 256;
        d -= 8;
      }
      o = o << d | B;
      s += d;
      while (s > 0) {
        c[S++] = o & 255;
        o /= 256;
        s -= 8;
      }
      c[S - 1] |= u * 128;
      return c;
    },
    unpack: function (U, n) {
      var F;
      var l = U.length;
      var i = l * 8 - n - 1;
      var a = (1 << i) - 1;
      var d = a >> 1;
      var r = i - 7;
      var o = l - 1;
      var B = U[o--];
      var R = B & 127;
      for (B >>= 7; r > 0;) {
        R = R * 256 + U[o--];
        r -= 8;
      }
      F = R & (1 << -r) - 1;
      R >>= -r;
      r += n;
      while (r > 0) {
        F = F * 256 + U[o--];
        r -= 8;
      }
      if (R === 0) {
        R = 1 - d;
      } else {
        if (R === a) {
          if (F) {
            return NaN;
          } else if (B) {
            return -Infinity;
          } else {
            return Infinity;
          }
        }
        F += Q(2, n);
        R -= d;
      }
      return (B ? -1 : 1) * F * Q(2, R - n);
    }
  };
}