// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 497142
         */
module.exports = function (module, exports, require) {
  exports.FontCache = undefined;
  var Q = function () {
    function t(t) {
      this.cache = new Map();
      this.defs = null;
      this.localID = "";
      this.nextID = 0;
      this.jax = t;
    }
    t.prototype.cachePath = function (t, e, Q) {
      var r = "MJX-" + this.localID + (this.jax.font.getVariant(t).cacheID || "") + "-" + e;
      if (!this.cache.has(r)) {
        this.cache.set(r, Q);
        this.jax.adaptor.append(this.defs, this.jax.svg("path", {
          id: r,
          d: Q
        }));
      }
      return r;
    };
    t.prototype.clearLocalID = function () {
      this.localID = "";
    };
    t.prototype.useLocalID = function (t = null) {
      this.localID = (t == null ? ++this.nextID : t) + (t === "" ? "" : "-");
    };
    t.prototype.clearCache = function () {
      this.cache = new Map();
      this.defs = this.jax.svg("defs");
    };
    t.prototype.getCache = function () {
      return this.defs;
    };
    return t;
  }();
  exports.FontCache = Q;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}