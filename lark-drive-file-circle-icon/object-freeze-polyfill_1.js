// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'objectExtensibilityCheck'
// - Resolved require(173176) to 'object-extensibility-check'
// - Renamed variable 'c' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Resolved require(770615) to 'weak-map-metadata-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 527338
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var objectExtensibilityCheck = require("object-extensibility-check") /*id: 173176*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var o = require("weak-map-metadata-manager") /*id: 770615*/.onFreeze;
  var l = Object.freeze;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: safeFunctionExecutor(function () {
      l(1);
    }),
    sham: !objectExtensibilityCheck
  }, {
    freeze: function (e) {
      if (l && isObjectOrFunction_1(e)) {
        return l(o(e));
      } else {
        return e;
      }
    }
  });
}