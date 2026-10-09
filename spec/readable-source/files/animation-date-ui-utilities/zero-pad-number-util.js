// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 872797
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t) {
    for (var n = Math.abs(e).toString(); n.length < t;) {
      n = "0" + n;
    }
    return (e < 0 ? "-" : "") + n;
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}