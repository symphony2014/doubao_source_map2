// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'brotliEncodedDataInit'
// - Resolved require(595440) to 'brotli-encoded-data-init'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 132684
         */
module.exports = function (module, exports, require) {
  var brotliEncodedDataInit = require("brotli-encoded-data-init") /*id: 595440*/;
  exports.init = function () {
    exports.dictionary = brotliEncodedDataInit.init();
  };
  exports.offsetsByLength = new Uint32Array([0, 0, 0, 0, 0, 4096, 9216, 21504, 35840, 44032, 53248, 63488, 74752, 87040, 93696, 100864, 104704, 106752, 108928, 113536, 115968, 118528, 119872, 121280, 122016]);
  exports.sizeBitsByLength = new Uint8Array([0, 0, 0, 0, 10, 10, 11, 11, 10, 10, 10, 10, 10, 9, 9, 8, 7, 7, 8, 7, 7, 6, 6, 5, 5]);
  exports.minDictionaryWordLength = 4;
  exports.maxDictionaryWordLength = 24;
}