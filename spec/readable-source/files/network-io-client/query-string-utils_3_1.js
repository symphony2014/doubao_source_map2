// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(907233) to 'query-string-parser'
// - Resolved require(475156) to 'query-string-serializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 626733
         */
module.exports = function (module, exports, require) {
  exports.decode = exports.parse = require("query-string-parser") /*id: 907233*/;
  exports.encode = exports.stringify = require("query-string-serializer") /*id: 475156*/;
}