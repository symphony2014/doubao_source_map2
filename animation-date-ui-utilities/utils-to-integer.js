// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 546552
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    if (e === null || e === true || e === false) {
      return NaN;
    }
    var t = Number(e);
    if (isNaN(t)) {
      return t;
    } else if (t < 0) {
      return Math.ceil(t);
    } else {
      return Math.floor(t);
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}