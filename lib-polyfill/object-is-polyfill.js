// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 859314
         */
module.exports = function (module, exports, require) {
  module.exports = Object.is || function (t, r) {
    if (t === r) {
      return t !== 0 || 1 / t == 1 / r;
    } else {
      return t != t && r != r;
    }
  };
}