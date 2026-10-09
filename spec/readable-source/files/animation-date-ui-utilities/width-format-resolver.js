// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 537388
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    return function (t = {}) {
      var n = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[n] || e.formats[e.defaultWidth];
    };
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}