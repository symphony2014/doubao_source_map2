// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mediaQueryParser'
// - Resolved require(248457) to 'media-query-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 372354
         */
module.exports = function (module, exports, require) {
  var mediaQueryParser = require("media-query-parser") /*id: 248457*/;
  module.exports = function (e, t) {
    var r = {};
    Object.keys(e).forEach(function (i) {
      if (mediaQueryParser.parse(i).match(t)) {
        Object.assign(r, e[i]);
      }
    });
    return r;
  };
}