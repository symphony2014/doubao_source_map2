// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 101282
         */
module.exports = function (module, exports, require) {
  function t(e, t) {
    this.left = e;
    this.right = t;
    this.match = function (r) {
      return e.match(r) && t.match(r);
    };
  }
  function r(e, t) {
    this.left = e;
    this.right = t;
    this.match = function (r) {
      return e.match(r) || t.match(r);
    };
  }
  module.exports = function (e, n, i) {
    switch (e) {
      case "and":
        return new t(n, i);
      case ",":
        return new r(n, i);
      default:
        throw Error(value);
    }
  };
}