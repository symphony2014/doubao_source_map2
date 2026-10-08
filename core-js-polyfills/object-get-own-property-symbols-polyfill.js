// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'symbolSupportDetection'
// - Resolved require(131899) to 'symbol-support-detection'
// - Renamed variable 'i' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'u' to 'getOwnPropertySymbolsHelper'
// - Resolved require(599668) to 'get-own-property-symbols-helper'
// - Renamed variable 'c' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Updated imported property 'f' to 'getOwnPropertySymbols' (module 599668)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 771512
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var symbolSupportDetection = require("symbol-support-detection") /*id: 131899*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var getOwnPropertySymbolsHelper = require("get-own-property-symbols-helper") /*id: 599668*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: !symbolSupportDetection || safeFunctionExecutor(function () {
      getOwnPropertySymbolsHelper.getOwnPropertySymbols(1);
    })
  }, {
    getOwnPropertySymbols: function (t) {
      var r = getOwnPropertySymbolsHelper.getOwnPropertySymbols;
      if (r) {
        return r(toObjectUtil(t));
      } else {
        return [];
      }
    }
  });
}