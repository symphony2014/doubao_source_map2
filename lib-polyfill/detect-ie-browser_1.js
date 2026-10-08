// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'userAgentStringExtractor'
// - Resolved require(856124) to 'user-agent-string-extractor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 121085
         */
module.exports = function (module, exports, require) {
  var userAgentStringExtractor = require("user-agent-string-extractor") /*id: 856124*/;
  module.exports = /MSIE|Trident/.test(userAgentStringExtractor);
}