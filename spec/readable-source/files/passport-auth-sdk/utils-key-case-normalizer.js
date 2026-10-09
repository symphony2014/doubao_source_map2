// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 621680
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  module.exports = function (e, t) {
    utilsTypeCheckHelpers.forEach(e, function (r, n) {
      if (n !== t && n.toUpperCase() === t.toUpperCase()) {
        e[t] = r;
        delete e[n];
      }
    });
  };
}