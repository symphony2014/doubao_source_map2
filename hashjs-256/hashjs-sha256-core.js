// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'hashjs256Utils'
// - Resolved require(281108) to 'hashjs-256-utils'
// - Renamed variable 'i' to 'hashBlockBase'
// - Resolved require(553134) to 'hash-block-base'
// - Renamed variable 'h' to 'hashjs256Utilities'
// - Resolved require(186350) to 'hashjs-256-utilities'
// - Renamed variable 'o' to 'assertUtil'
// - Resolved require(728410) to 'assert-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hashjs-256.6917a130.js
         * chunkId: 62121
         * moduleId: 79830
         */
module.exports = function (module, exports, require) {
  var hashjs256Utils = require("hashjs-256-utils") /*id: 281108*/;
  var hashBlockBase = require("hash-block-base") /*id: 553134*/;
  var hashjs256Utilities = require("hashjs-256-utilities") /*id: 186350*/;
  var assertUtil = require("assert-util") /*id: 728410*/;
  var s = hashjs256Utils.sum32;
  var c = hashjs256Utils.sum32_4;
  var u = hashjs256Utils.sum32_5;
  var f = hashjs256Utilities.ch32;
  var a = hashjs256Utilities.maj32;
  var l = hashjs256Utilities.s0_256;
  var x = hashjs256Utilities.s1_256;
  var g = hashjs256Utilities.g0_256;
  var d = hashjs256Utilities.g1_256;
  var p = hashBlockBase.BlockHash;
  var b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  function _() {
    if (!(this instanceof _)) {
      return new _();
    }
    p.call(this);
    this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    this.k = b;
    this.W = Array(64);
  }
  hashjs256Utils.inherits(_, p);
  module.exports = _;
  _.blockSize = 512;
  _.outSize = 256;
  _.hmacStrength = 192;
  _.padLength = 64;
  _.prototype._update = function (t, n) {
    var e = this.W;
    var r = 0;
    for (; r < 16; r++) {
      e[r] = t[n + r];
    }
    for (; r < e.length; r++) {
      e[r] = c(d(e[r - 2]), e[r - 7], g(e[r - 15]), e[r - 16]);
    }
    var i = this.h[0];
    var h = this.h[1];
    var p = this.h[2];
    var b = this.h[3];
    var _ = this.h[4];
    var v = this.h[5];
    var y = this.h[6];
    var m = this.h[7];
    assertUtil(this.k.length === e.length);
    r = 0;
    for (; r < e.length; r++) {
      var A = u(m, x(_), f(_, v, y), this.k[r], e[r]);
      var S = s(l(i), a(i, h, p));
      m = y;
      y = v;
      v = _;
      _ = s(b, A);
      b = p;
      p = h;
      h = i;
      i = s(A, S);
    }
    this.h[0] = s(this.h[0], i);
    this.h[1] = s(this.h[1], h);
    this.h[2] = s(this.h[2], p);
    this.h[3] = s(this.h[3], b);
    this.h[4] = s(this.h[4], _);
    this.h[5] = s(this.h[5], v);
    this.h[6] = s(this.h[6], y);
    this.h[7] = s(this.h[7], m);
  };
  _.prototype._digest = function (t) {
    if (t === "hex") {
      return hashjs256Utils.toHex32(this.h, "big");
    } else {
      return hashjs256Utils.split32(this.h, "big");
    }
  };
}