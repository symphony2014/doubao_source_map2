// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'queryStringSerializer_1_1'
// - Resolved require(965527) to 'query-string-serializer_1_1'
// - Renamed variable 'i' to 'queryStringParser_1'
// - Resolved require(582731) to 'query-string-parser_1'
// - Renamed variable 'o' to 'urlEncodingStandards'
// - Resolved require(945497) to 'url-encoding-standards'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 580022
         */
module.exports = function (module, exports, require) {
  var queryStringSerializer_1_1 = require("query-string-serializer_1_1") /*id: 965527*/;
  var queryStringParser_1 = require("query-string-parser_1") /*id: 582731*/;
  var urlEncodingStandards = require("url-encoding-standards") /*id: 945497*/;
  module.exports = {
    formats: urlEncodingStandards,
    parse: queryStringParser_1,
    stringify: queryStringSerializer_1_1
  };
}