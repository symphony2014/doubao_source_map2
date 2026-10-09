// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(155967) to 'crypto-js-sha1-implementation'
// - Resolved require(128449) to 'crypto-js-hmac-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 420793
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
    r = (t = e.lib).Base;
    n = t.WordArray;
    o = (i = e.algo).MD5;
    a = i.EvpKDF = r.extend({
      cfg: r.extend({
        keySize: 4,
        hasher: o,
        iterations: 1
      }),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
      },
      compute: function (e, t) {
        var r;
        var i = this.cfg;
        var o = i.hasher.create();
        var a = n.create();
        var s = a.words;
        var c = i.keySize;
        var u = i.iterations;
        while (s.length < c) {
          if (r) {
            o.update(r);
          }
          r = o.update(e).finalize(t);
          o.reset();
          for (var f = 1; f < u; f++) {
            r = o.finalize(r);
            o.reset();
          }
          a.concat(r);
        }
        a.sigBytes = c * 4;
        return a;
      }
    });
    e.EvpKDF = function (e, t, r) {
      return a.create(r).compute(e, t);
    };
    return e.EvpKDF;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-sha1-implementation") /*id: 155967*/, require("crypto-js-hmac-implementation") /*id: 128449*/);
}