// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'userAgentStringExtractor'
// - Resolved require(856124) to 'user-agent-string-extractor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 739236
         */
module.exports = function (module, exports, require) {
  var userAgentStringExtractor = require("user-agent-string-extractor") /*id: 856124*/;
  module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgentStringExtractor);
}