// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 17406
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
        var o = n * 4;
        if (t.sigBytes > o) {
          t = e.finalize(t);
        }
        t.clamp();
        var i = this._oKey = t.clone();
        var a = this._iKey = t.clone();
        var c = i.words;
        var f = a.words;
        var s = 0;
        for (; s < n; s++) {
          c[s] ^= 1549556828;
          f[s] ^= 909522486;
        }
        i.sigBytes = a.sigBytes = o;
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
  module.exports = n(require("crypto-core-utils") /*id: 805012*/);
}