// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(147600) to 'crypto-encoding-utils'
// - Resolved require(763479) to 'utf8-binary-utils'
// - Resolved require(315499) to 'buffer-type-check'
// - Resolved require(763479) to 'utf8-binary-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 204205
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var s;
  var l;
  i = require("crypto-encoding-utils") /*id: 147600*/;
  r = require("utf8-binary-utils") /*id: 763479*/.utf8;
  o = require("buffer-type-check") /*id: 315499*/;
  s = require("utf8-binary-utils") /*id: 763479*/.bin;
  (l = function (e, t) {
    if (e.constructor == String) {
      e = t && t.encoding === "binary" ? s.stringToBytes(e) : r.stringToBytes(e);
    } else if (o(e)) {
      e = Array.prototype.slice.call(e, 0);
    } else if (!Array.isArray(e) && e.constructor !== Uint8Array) {
      e = e.toString();
    }
    var n = i.bytesToWords(e);
    var a = e.length * 8;
    var c = 1732584193;
    var u = -271733879;
    var d = -1732584194;
    var p = 271733878;
    var _ = 0;
    for (; _ < n.length; _++) {
      n[_] = (n[_] << 8 | n[_] >>> 24) & 16711935 | (n[_] << 24 | n[_] >>> 8) & -16711936;
    }
    n[a >>> 5] |= 128 << a % 32;
    n[(a + 64 >>> 9 << 4) + 14] = a;
    var v = l._ff;
    var h = l._gg;
    var m = l._hh;
    var f = l._ii;
    var _ = 0;
    for (; _ < n.length; _ += 16) {
      var g = c;
      var y = u;
      var b = d;
      var S = p;
      c = v(c, u, d, p, n[_ + 0], 7, -680876936);
      p = v(p, c, u, d, n[_ + 1], 12, -389564586);
      d = v(d, p, c, u, n[_ + 2], 17, 606105819);
      u = v(u, d, p, c, n[_ + 3], 22, -1044525330);
      c = v(c, u, d, p, n[_ + 4], 7, -176418897);
      p = v(p, c, u, d, n[_ + 5], 12, 1200080426);
      d = v(d, p, c, u, n[_ + 6], 17, -1473231341);
      u = v(u, d, p, c, n[_ + 7], 22, -45705983);
      c = v(c, u, d, p, n[_ + 8], 7, 1770035416);
      p = v(p, c, u, d, n[_ + 9], 12, -1958414417);
      d = v(d, p, c, u, n[_ + 10], 17, -42063);
      u = v(u, d, p, c, n[_ + 11], 22, -1990404162);
      c = v(c, u, d, p, n[_ + 12], 7, 1804603682);
      p = v(p, c, u, d, n[_ + 13], 12, -40341101);
      d = v(d, p, c, u, n[_ + 14], 17, -1502002290);
      u = v(u, d, p, c, n[_ + 15], 22, 1236535329);
      c = h(c, u, d, p, n[_ + 1], 5, -165796510);
      p = h(p, c, u, d, n[_ + 6], 9, -1069501632);
      d = h(d, p, c, u, n[_ + 11], 14, 643717713);
      u = h(u, d, p, c, n[_ + 0], 20, -373897302);
      c = h(c, u, d, p, n[_ + 5], 5, -701558691);
      p = h(p, c, u, d, n[_ + 10], 9, 38016083);
      d = h(d, p, c, u, n[_ + 15], 14, -660478335);
      u = h(u, d, p, c, n[_ + 4], 20, -405537848);
      c = h(c, u, d, p, n[_ + 9], 5, 568446438);
      p = h(p, c, u, d, n[_ + 14], 9, -1019803690);
      d = h(d, p, c, u, n[_ + 3], 14, -187363961);
      u = h(u, d, p, c, n[_ + 8], 20, 1163531501);
      c = h(c, u, d, p, n[_ + 13], 5, -1444681467);
      p = h(p, c, u, d, n[_ + 2], 9, -51403784);
      d = h(d, p, c, u, n[_ + 7], 14, 1735328473);
      u = h(u, d, p, c, n[_ + 12], 20, -1926607734);
      c = m(c, u, d, p, n[_ + 5], 4, -378558);
      p = m(p, c, u, d, n[_ + 8], 11, -2022574463);
      d = m(d, p, c, u, n[_ + 11], 16, 1839030562);
      u = m(u, d, p, c, n[_ + 14], 23, -35309556);
      c = m(c, u, d, p, n[_ + 1], 4, -1530992060);
      p = m(p, c, u, d, n[_ + 4], 11, 1272893353);
      d = m(d, p, c, u, n[_ + 7], 16, -155497632);
      u = m(u, d, p, c, n[_ + 10], 23, -1094730640);
      c = m(c, u, d, p, n[_ + 13], 4, 681279174);
      p = m(p, c, u, d, n[_ + 0], 11, -358537222);
      d = m(d, p, c, u, n[_ + 3], 16, -722521979);
      u = m(u, d, p, c, n[_ + 6], 23, 76029189);
      c = m(c, u, d, p, n[_ + 9], 4, -640364487);
      p = m(p, c, u, d, n[_ + 12], 11, -421815835);
      d = m(d, p, c, u, n[_ + 15], 16, 530742520);
      u = m(u, d, p, c, n[_ + 2], 23, -995338651);
      c = f(c, u, d, p, n[_ + 0], 6, -198630844);
      p = f(p, c, u, d, n[_ + 7], 10, 1126891415);
      d = f(d, p, c, u, n[_ + 14], 15, -1416354905);
      u = f(u, d, p, c, n[_ + 5], 21, -57434055);
      c = f(c, u, d, p, n[_ + 12], 6, 1700485571);
      p = f(p, c, u, d, n[_ + 3], 10, -1894986606);
      d = f(d, p, c, u, n[_ + 10], 15, -1051523);
      u = f(u, d, p, c, n[_ + 1], 21, -2054922799);
      c = f(c, u, d, p, n[_ + 8], 6, 1873313359);
      p = f(p, c, u, d, n[_ + 15], 10, -30611744);
      d = f(d, p, c, u, n[_ + 6], 15, -1560198380);
      u = f(u, d, p, c, n[_ + 13], 21, 1309151649);
      c = f(c, u, d, p, n[_ + 4], 6, -145523070);
      p = f(p, c, u, d, n[_ + 11], 10, -1120210379);
      d = f(d, p, c, u, n[_ + 2], 15, 718787259);
      u = f(u, d, p, c, n[_ + 9], 21, -343485551);
      c = c + g >>> 0;
      u = u + y >>> 0;
      d = d + b >>> 0;
      p = p + S >>> 0;
    }
    return i.endian([c, u, d, p]);
  })._ff = function (e, t, n, i, r, o, s) {
    var l = e + (t & n | ~t & i) + (r >>> 0) + s;
    return (l << o | l >>> 32 - o) + t;
  };
  l._gg = function (e, t, n, i, r, o, s) {
    var l = e + (t & i | n & ~i) + (r >>> 0) + s;
    return (l << o | l >>> 32 - o) + t;
  };
  l._hh = function (e, t, n, i, r, o, s) {
    var l = e + (t ^ n ^ i) + (r >>> 0) + s;
    return (l << o | l >>> 32 - o) + t;
  };
  l._ii = function (e, t, n, i, r, o, s) {
    var l = e + (n ^ (t | ~i)) + (r >>> 0) + s;
    return (l << o | l >>> 32 - o) + t;
  };
  l._blocksize = 16;
  l._digestsize = 16;
  module.exports = function (e, t) {
    if (e == null) {
      throw Error("Illegal argument " + e);
    }
    var n = i.wordsToBytes(l(e, t));
    if (t && t.asBytes) {
      return n;
    } else if (t && t.asString) {
      return s.bytesToString(n);
    } else {
      return i.bytesToHex(n);
    }
  };
}