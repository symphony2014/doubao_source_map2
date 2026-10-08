// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 623126
         */
module.exports = function (module, exports, require) {
  exports.default = function () {
    var t = arguments.length;
    var e = Array(t);
    var n = 0;
    for (; n < t; n++) {
      e[n] = arguments[n];
    }
    return function (t, n) {
      return e.reduce(function (t, e) {
        return e(t, n);
      }, t);
    };
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}