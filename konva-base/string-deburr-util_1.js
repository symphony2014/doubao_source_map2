// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'deburrString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 505593
         */
module.exports = function (module, exports, require) {
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var unicodeStringCapitalizer = require("unicode-string-capitalizer") /*id: 941172*/;
  var a = require("string-deburr-util") /*id: 789856*/.createDeburr(function (t, e, r) {
    var a;
    e = e.toLowerCase();
    return t + (r ? (a = e, unicodeStringCapitalizer.capitalizeFirst(safeValueToStringUtil.safeToString(a).toLowerCase())) : e);
  });
  require.d(exports, {
    deburrString: function () {
      return a;
    }
  });
}