// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'unsetPathsList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 731790
         */
module.exports = function (module, exports, require) {
  var objectPathUnsetUtil = require("object-path-unset-util") /*id: 502450*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var o = Array.prototype.splice;
  exports.unsetPathsList = function (e, i) {
    var n = e ? i.length : 0;
    var s = n - 1;
    while (n--) {
      var a = i[n];
      if (n == s || a !== c) {
        var c = a;
        if (isValidLengthUtil.isValidLength(a)) {
          o.call(e, a, 1);
        } else {
          objectPathUnsetUtil.unsetObjectPath(e, a);
        }
      }
    }
    return e;
  };
}