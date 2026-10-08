// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// - Resolved require(764290) to 'crypto-sha1-implementation'
// - Resolved require(17406) to 'crypto-hmac-algo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 321536
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
    r = (t = e.lib).Base;
    n = t.WordArray;
    i = (o = e.algo).MD5;
    a = o.EvpKDF = r.extend({
      cfg: r.extend({
        keySize: 4,
        hasher: i,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var r;
        var o = this.cfg;
        var i = o.hasher.create();
        var a = n.create();
        var c = a.words;
        var f = o.keySize;
        var s = o.iterations;
        while (c.length < f) {
          if (r) {
            i.update(r);
          }
          r = i.update(e).finalize(t);
          i.reset();
          for (var u = 1; u < s; u++) {
            r = i.finalize(r);
            i.reset();
          }
          a.concat(r);
        }
        a.sigBytes = f * 4;
        return a;
      }
    });
    e.EvpKDF = function (e, t, r) {
      return a.create(r).compute(e, t);
    };
    return e.EvpKDF;
  };
  module.exports = n(require("crypto-core-utils") /*id: 805012*/, require("crypto-sha1-implementation") /*id: 764290*/, require("crypto-hmac-algo") /*id: 17406*/);
}