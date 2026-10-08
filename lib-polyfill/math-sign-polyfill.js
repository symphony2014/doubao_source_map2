// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 729961
         */
module.exports = function (module, exports, require) {
  module.exports = Math.sign || function (t) {
    var r = +t;
    if (r === 0 || r != r) {
      return r;
    } else if (r < 0) {
      return -1;
    } else {
      return 1;
    }
  };
}