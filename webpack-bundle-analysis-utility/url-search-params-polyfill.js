// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'queryStringBuilder'
// - Resolved require(142682) to 'query-string-builder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 283731
         */
module.exports = function (module, exports, require) {
  var queryStringBuilder = require("query-string-builder") /*id: 142682*/;
  module.exports = typeof URLSearchParams != "undefined" ? URLSearchParams : queryStringBuilder;
}