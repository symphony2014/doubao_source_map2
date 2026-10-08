// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 227859
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t) {
    if (e == null) {
      throw TypeError("assign requires that input parameter not be null or undefined");
    }
    for (var n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    }
    return e;
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}