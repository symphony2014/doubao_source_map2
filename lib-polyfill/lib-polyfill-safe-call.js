// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 281924
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    try {
      return {
        error: false,
        value: t()
      };
    } catch (t) {
      return {
        error: true,
        value: t
      };
    }
  };
}