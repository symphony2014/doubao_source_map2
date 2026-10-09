// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterAndExtractMatched'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 925046
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var unsetPathsListUtil = require("unset-paths-list-util") /*id: 731790*/;
  exports.filterAndExtractMatched = function (e, i) {
    var n = [];
    if (!e || !e.length) {
      return n;
    }
    var o = -1;
    var s = [];
    var a = e.length;
    for (i = objectMatcherFactory.createMatcher(i, 3); ++o < a;) {
      var c = e[o];
      if (i(c, o, e)) {
        n.push(c);
        s.push(o);
      }
    }
    unsetPathsListUtil.unsetPathsList(e, s);
    return n;
  };
}