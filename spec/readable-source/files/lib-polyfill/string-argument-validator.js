// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 177477
         */
module.exports = function (module, exports, require) {
  var r = TypeError;
  module.exports = function (t) {
    if (typeof t == "string") {
      return t;
    }
    throw new r("Argument is not a string");
  };
}