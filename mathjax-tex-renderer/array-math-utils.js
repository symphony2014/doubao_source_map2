// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 83822
         */
module.exports = function (module, exports, require) {
  exports.max = exports.sum = undefined;
  exports.sum = function (t) {
    return t.reduce(function (t, e) {
      return t + e;
    }, 0);
  };
  exports.max = function (t) {
    return t.reduce(function (t, e) {
      return Math.max(t, e);
    }, 0);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}