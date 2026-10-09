// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'T' to 'safeParseIntShim'
// - Resolved require(258718) to 'safe-parse-int-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 968811
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var safeParseIntShim = require("safe-parse-int-shim") /*id: 258718*/;
  coreJsExportUtil({
    global: true,
    forced: parseInt !== safeParseIntShim
  }, {
    parseInt: safeParseIntShim
  });
}