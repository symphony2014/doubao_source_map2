// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arraybufferDataviewPolyfill_1'
// - Resolved require(270008) to 'arraybuffer-dataview-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 203147
         */
module.exports = function (module, exports, require) {
  var arraybufferDataviewPolyfill_1 = require("arraybuffer-dataview-polyfill_1") /*id: 270008*/;
  var o = TypeError;
  module.exports = function (t) {
    if (arraybufferDataviewPolyfill_1(t)) {
      throw new o("ArrayBuffer is detached");
    }
    return t;
  };
}