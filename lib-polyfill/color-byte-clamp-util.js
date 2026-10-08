// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 872025
         */
module.exports = function (module, exports, require) {
  var r = Math.round;
  module.exports = function (t) {
    var e = r(t);
    if (e < 0) {
      return 0;
    } else if (e > 255) {
      return 255;
    } else {
      return e & 255;
    }
  };
}