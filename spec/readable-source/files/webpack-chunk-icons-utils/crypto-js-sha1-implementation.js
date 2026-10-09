// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 155967
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    var o;
    var a;
    r = (t = e.lib).WordArray;
    n = t.Hasher;
    i = e.algo;
    o = [];
    a = i.SHA1 = n.extend({
      _doReset: function () {
        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        var r = this._hash.words;
        var n = r[0];
        var i = r[1];
        var a = r[2];
        var s = r[3];
        var c = r[4];
        var u = 0;
        for (; u < 80; u++) {
          if (u < 16) {
            o[u] = e[t + u] | 0;
          } else {
            var f = o[u - 3] ^ o[u - 8] ^ o[u - 14] ^ o[u - 16];
            o[u] = f << 1 | f >>> 31;
          }
          var l = (n << 5 | n >>> 27) + c + o[u];
          if (u < 20) {
            l += (i & a | ~i & s) + 1518500249;
          } else if (u < 40) {
            l += (i ^ a ^ s) + 1859775393;
          } else if (u < 60) {
            l += (i & a | i & s | a & s) - 1894007588;
          } else {
            l += (i ^ a ^ s) - 899497514;
          }
          c = s;
          s = a;
          a = i << 30 | i >>> 2;
          i = n;
          n = l;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + i | 0;
        r[2] = r[2] + a | 0;
        r[3] = r[3] + s | 0;
        r[4] = r[4] + c | 0;
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
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}