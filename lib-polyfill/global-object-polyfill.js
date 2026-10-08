// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 515719
         */
module.exports = function (module, exports, require) {
  function n(t) {
    return t && t.Math === Math && t;
  }
  module.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof require.g == "object" && require.g) || n(typeof this == "object" && this) || function () {
    return this;
  }() || Function("return this")();
}