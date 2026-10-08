// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(535196) to 'array-includes-indexof-util'
// - Renamed variable 'c' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'emptyModuleExport_5'
// - Resolved require(891799) to 'empty-module-export_5'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 102228
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var a = require("array-includes-indexof-util") /*id: 535196*/.includes;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var emptyModuleExport_5 = require("empty-module-export_5") /*id: 891799*/;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: safeFunctionExecutor(function () {
      return ![,].includes();
    })
  }, {
    includes: function (e) {
      return a(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  emptyModuleExport_5("includes");
}