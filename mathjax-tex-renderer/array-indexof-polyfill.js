// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'T' to 'functionWrapperChecker'
// - Resolved require(416484) to 'function-wrapper-checker'
// - Resolved require(535196) to 'array-includes-indexof-util'
// - Renamed variable 'o' to 'safeArrayMethodCheck'
// - Resolved require(985761) to 'safe-array-method-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 835650
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var functionWrapperChecker = require("function-wrapper-checker") /*id: 416484*/;
  var n = require("array-includes-indexof-util") /*id: 535196*/.indexOf;
  var safeArrayMethodCheck = require("safe-array-method-check") /*id: 985761*/;
  var i = functionWrapperChecker([].indexOf);
  var a = !!i && 1 / i([1], 1, -0) < 0;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: a || !safeArrayMethodCheck("indexOf")
  }, {
    indexOf: function (t, e) {
      if (a) {
        return i(this, t, e) || 0;
      } else {
        return n(this, t, e);
      }
    }
  });
}