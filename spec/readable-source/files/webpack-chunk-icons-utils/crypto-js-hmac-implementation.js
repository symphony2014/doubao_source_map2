// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 128449
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    t = e.lib.Base;
    r = e.enc.Utf8;
    e.algo.HMAC = t.extend({
      init: function (e, t) {
        e = this._hasher = new e.init();
        if (typeof t == "string") {
          t = r.parse(t);
        }
        var n = e.blockSize;
        var i = n * 4;
        if (t.sigBytes > i) {
          t = e.finalize(t);
        }
        t.clamp();
        var o = this._oKey = t.clone();
        var a = this._iKey = t.clone();
        var s = o.words;
        var c = a.words;
        var u = 0;
        for (; u < n; u++) {
          s[u] ^= 1549556828;
          c[u] ^= 909522486;
        }
        o.sigBytes = a.sigBytes = i;
        this.reset();
      },
      reset: function () {
        var e = this._hasher;
        e.reset();
        e.update(this._iKey);
      },
      update: function (e) {
        this._hasher.update(e);
        return this;
      },
      finalize: function (e) {
        var t = this._hasher;
        var r = t.finalize(e);
        t.reset();
        return t.finalize(this._oKey.clone().concat(r));
      }
    });
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}