// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 634541
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (t) {
    var e;
    var r;
    var n;
    var o;
    var a;
    var i;
    r = (e = t.lib).WordArray;
    n = e.Hasher;
    o = t.algo;
    a = [];
    i = o.SHA1 = n.extend({
      _doReset: function () {
        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (t, e) {
        var r = this._hash.words;
        var n = r[0];
        var o = r[1];
        var i = r[2];
        var c = r[3];
        var u = r[4];
        var l = 0;
        for (; l < 80; l++) {
          if (l < 16) {
            a[l] = t[e + l] | 0;
          } else {
            var s = a[l - 3] ^ a[l - 8] ^ a[l - 14] ^ a[l - 16];
            a[l] = s << 1 | s >>> 31;
          }
          var f = (n << 5 | n >>> 27) + u + a[l];
          if (l < 20) {
            f += (o & i | ~o & c) + 1518500249;
          } else if (l < 40) {
            f += (o ^ i ^ c) + 1859775393;
          } else if (l < 60) {
            f += (o & i | o & c | i & c) - 1894007588;
          } else {
            f += (o ^ i ^ c) - 899497514;
          }
          u = c;
          c = i;
          i = o << 30 | o >>> 2;
          o = n;
          n = f;
        }
        r[0] = r[0] + n | 0;
        r[1] = r[1] + o | 0;
        r[2] = r[2] + i | 0;
        r[3] = r[3] + c | 0;
        r[4] = r[4] + u | 0;
      },
      _doFinalize: function () {
        var t = this._data;
        var e = t.words;
        var r = this._nDataBytes * 8;
        var n = t.sigBytes * 8;
        e[n >>> 5] |= 128 << 24 - n % 32;
        e[(n + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296);
        e[(n + 64 >>> 9 << 4) + 15] = r;
        t.sigBytes = e.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var t = n.clone.call(this);
        t._hash = this._hash.clone();
        return t;
      }
    });
    t.SHA1 = n._createHelper(i);
    t.HmacSHA1 = n._createHmacHelper(i);
    return t.SHA1;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/);
}