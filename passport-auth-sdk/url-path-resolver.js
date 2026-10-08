// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isAbsoluteUrl'
// - Resolved require(801070) to 'is-absolute-url'
// - Renamed variable 'o' to 'pathJoinUtil'
// - Resolved require(925886) to 'path-join-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 848567
         */
module.exports = function (module, exports, require) {
  var isAbsoluteUrl = require("is-absolute-url") /*id: 801070*/;
  var pathJoinUtil = require("path-join-util") /*id: 925886*/;
  module.exports = function (e, t) {
    if (e && !isAbsoluteUrl(t)) {
      return pathJoinUtil(e, t);
    } else {
      return t;
    }
  };
}