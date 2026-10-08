// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'base64EncodeDecode'
// - Resolved require(673582) to 'base64-encode-decode'
// - Resolved require(364892) to 'brotli-decompression-module'
// - Resolved require(238248) to 'encoded-data-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 595440
         */
module.exports = function (module, exports, require) {
  var base64EncodeDecode = require("base64-encode-decode") /*id: 673582*/;
  exports.init = function () {
    return require("brotli-decompression-module") /*id: 364892*/.BrotliDecompressBuffer(base64EncodeDecode.toByteArray(require("encoded-data-module") /*id: 238248*/));
  };
}