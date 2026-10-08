// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 46643
         */
module.exports = function (module, exports, require) {
  var r = TypeError;
  module.exports = function (t) {
    if (t > 9007199254740991) {
      throw r("Maximum allowed index exceeded");
    }
    return t;
  };
}