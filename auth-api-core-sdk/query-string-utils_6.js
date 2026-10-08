// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'queryStringStringify'
// - Resolved require(196611) to 'query-string-stringify'
// - Renamed variable 'i' to 'queryStringParser_3'
// - Resolved require(139003) to 'query-string-parser_3'
// - Renamed variable 'o' to 'urlEncodingFormatters'
// - Resolved require(965873) to 'url-encoding-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 313705
         */
module.exports = function (module, exports, require) {
  var queryStringStringify = require("query-string-stringify") /*id: 196611*/;
  var queryStringParser_3 = require("query-string-parser_3") /*id: 139003*/;
  var urlEncodingFormatters = require("url-encoding-formatters") /*id: 965873*/;
  module.exports = {
    formats: urlEncodingFormatters,
    parse: queryStringParser_3,
    stringify: queryStringStringify
  };
}