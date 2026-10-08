// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 764290
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    r = (t = e.lib).WordArray;
    n = t.Hasher;
    o = e.algo;
    i = [];
    a = o.SHA1 = n.extend({
      _doReset: function () {
        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var o = r[1];
        var a = r[2];
        var c = r[3];
        var f = r[4];
        var s = 0;
        for (; s < 80; s++) {
          if (s < 16) {
            i[s] = e[t + s] | 0;
          } else {
            var u = i[s - 3] ^ i[s - 8] ^ i[s - 14] ^ i[s - 16];
            i[s] = u << 1 | u >>> 31;
          }
          var h = (n << 5 | n >>> 27) + f + i[s];
          if (s < 20) {
            h += (o & a | ~o & c) + 1518500249;
          } else if (s < 40) {
            h += (o ^ a ^ c) + 1859775393;
          } else if (s < 60) {
            h += (o & a | o & c | a & c) - 1894007588;
          } else {
            h += (o ^ a ^ c) - 899497514;
          }
          f = c;
          c = a;
          a = o << 30 | o >>> 2;
          o = n;
          n = h;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + o | 0;
        r[2] = r[2] + a | 0;
        r[3] = r[3] + c | 0;
        r[4] = r[4] + f | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var t = e.words;
        var r = this._nDataBytes * 8;
        var n = e.sigBytes * 8;
        t[n >>> 5] |= 128 << 24 - n % 32;
        t[(n + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296);
        t[(n + 64 >>> 9 << 4) + 15] = r;
        e.sigBytes = t.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var e = n.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
    e.SHA1 = n._createHelper(a);
    e.HmacSHA1 = n._createHmacHelper(a);
    return e.SHA1;
  };
  module.exports = n(require("crypto-core-utils") /*id: 805012*/);
}