// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(634541) to 'crypto-js-sha1-impl'
// - Resolved require(490044) to 'crypto-js-hmac-algo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 991453
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
        var r = this.cfg;
        var o = r.hasher.create();
        var i = n.create();
        var a = i.words;
        var c = r.keySize;
        var f = r.iterations;
        while (a.length < c) {
          if (s) {
            o.update(s);
          }
          var s = o.update(e).finalize(t);
          o.reset();
          for (var u = 1; u < f; u++) {
            s = o.finalize(s);
            o.reset();
          }
          i.concat(s);
        }
        i.sigBytes = c * 4;
        return i;
      }
    });
    e.EvpKDF = function (e, t, r) {
      return a.create(r).compute(e, t);
    };
    return e.EvpKDF;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-sha1-impl") /*id: 634541*/, require("crypto-js-hmac-algo") /*id: 490044*/);
}