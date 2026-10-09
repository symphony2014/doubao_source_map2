// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'queryStringSerializer_1'
// - Resolved require(403801) to 'query-string-serializer_1'
// - Renamed variable 'o' to 'queryStringParser_2'
// - Resolved require(349900) to 'query-string-parser_2'
// - Renamed variable 'a' to 'rfcEncodingFormats'
// - Resolved require(542852) to 'rfc-encoding-formats'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 298966
         */
module.exports = function (module, exports, require) {
  var queryStringSerializer_1 = require("query-string-serializer_1") /*id: 403801*/;
  var queryStringParser_2 = require("query-string-parser_2") /*id: 349900*/;
  var rfcEncodingFormats = require("rfc-encoding-formats") /*id: 542852*/;
  module.exports = {
    formats: rfcEncodingFormats,
    parse: queryStringParser_2,
    stringify: queryStringSerializer_1
  };
}