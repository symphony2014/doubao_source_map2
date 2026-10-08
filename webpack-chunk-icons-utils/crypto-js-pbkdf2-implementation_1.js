// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(155967) to 'crypto-js-sha1-implementation'
// - Resolved require(128449) to 'crypto-js-hmac-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 6258
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
    var s;
    r = (t = e.lib).Base;
    n = t.WordArray;
    o = (i = e.algo).SHA1;
    a = i.HMAC;
    s = i.PBKDF2 = r.extend({
      cfg: r.extend({
        keySize: 4,
        hasher: o,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var r = this.cfg;
        var i = a.create(r.hasher, e);
        var o = n.create();
        var s = n.create([1]);
        var c = o.words;
        var u = s.words;
        var f = r.keySize;
        var l = r.iterations;
        while (c.length < f) {
          var d = i.update(t).finalize(s);
          i.reset();
          var h = d.words;
          var g = h.length;
          var x = d;
          var M = 1;
          for (; M < l; M++) {
            x = i.finalize(x);
            i.reset();
            var p = x.words;
            var y = 0;
            for (; y < g; y++) {
              h[y] ^= p[y];
            }
          }
          o.concat(d);
          u[0]++;
        }
        o.sigBytes = f * 4;
        return o;
      }
    });
    e.PBKDF2 = function (e, t, r) {
      return s.create(r).compute(e, t);
    };
    return e.PBKDF2;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-sha1-implementation") /*id: 155967*/, require("crypto-js-hmac-implementation") /*id: 128449*/);
}