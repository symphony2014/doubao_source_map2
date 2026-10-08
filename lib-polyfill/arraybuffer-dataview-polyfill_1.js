// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'arraybufferSupportCheck'
// - Resolved require(296482) to 'arraybuffer-support-check'
// - Renamed variable 'i' to 'arraybufferByteLengthGetter'
// - Resolved require(317712) to 'arraybuffer-byte-length-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 270008
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var arraybufferSupportCheck = require("arraybuffer-support-check") /*id: 296482*/;
  var arraybufferByteLengthGetter = require("arraybuffer-byte-length-getter") /*id: 317712*/;
  var a = globalObjectPolyfill.DataView;
  module.exports = function (t) {
    if (!arraybufferSupportCheck || arraybufferByteLengthGetter(t) !== 0) {
      return false;
    }
    try {
      new a(t);
      return false;
    } catch (t) {
      return true;
    }
  };
}