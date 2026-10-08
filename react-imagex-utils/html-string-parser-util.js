// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'htmlStringParser'
// - Resolved require(559112) to 'html-string-parser'
// - Resolved require(730796) to 'dom-formatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 725210
         */
module.exports = function (module, exports, require) {
  var htmlStringParser = require("html-string-parser") /*id: 559112*/;
  var i = require("dom-formatter") /*id: 730796*/.formatDOM;
  var o = /<(![a-zA-Z\s]+)>/;
  module.exports = function (e) {
    if (typeof e != "string") {
      throw TypeError("First argument must be a string");
    }
    if (e === "") {
      return [];
    }
    var t;
    var n = e.match(o);
    if (n && n[1]) {
      t = n[1];
    }
    return i(htmlStringParser(e), null, t);
  };
}