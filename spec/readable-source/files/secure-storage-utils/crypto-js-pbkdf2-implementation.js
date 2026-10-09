// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(634541) to 'crypto-js-sha1-impl'
// - Resolved require(490044) to 'crypto-js-hmac-algo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 322633
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
    var c;
    r = (t = e.lib).Base;
    n = t.WordArray;
    i = (o = e.algo).SHA1;
    a = o.HMAC;
    c = o.PBKDF2 = r.extend({
      cfg: r.extend({
        keySize: 4,
        hasher: i,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var r = this.cfg;
        var o = a.create(r.hasher, e);
        var i = n.create();
        var c = n.create([1]);
        var f = i.words;
        var s = c.words;
        var u = r.keySize;
        var h = r.iterations;
        while (f.length < u) {
          var l = o.update(t).finalize(c);
          o.reset();
          var d = l.words;
          var x = d.length;
          var v = l;
          var p = 1;
          for (; p < h; p++) {
            v = o.finalize(v);
            o.reset();
            var y = v.words;
            var _ = 0;
            for (; _ < x; _++) {
              d[_] ^= y[_];
            }
          }
          i.concat(l);
          s[0]++;
        }
        i.sigBytes = u * 4;
        return i;
      }
    });
    e.PBKDF2 = function (e, t, r) {
      return c.create(r).compute(e, t);
    };
    return e.PBKDF2;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-sha1-impl") /*id: 634541*/, require("crypto-js-hmac-algo") /*id: 490044*/);
}