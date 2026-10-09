// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 507022
         */
module.exports = function (module, exports, require) {
  exports.AbstractWrapper = undefined;
  var Q = function () {
    function t(t, e) {
      this.factory = t;
      this.node = e;
    }
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return this.node.kind;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.wrap = function (t) {
      return this.factory.wrap(t);
    };
    return t;
  }();
  exports.AbstractWrapper = Q;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}