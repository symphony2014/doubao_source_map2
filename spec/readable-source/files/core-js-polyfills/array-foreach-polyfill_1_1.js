// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'arrayForeachPolyfill_1'
// - Resolved require(4381) to 'array-foreach-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 214799
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var arrayForeachPolyfill_1 = require("array-foreach-polyfill_1") /*id: 4381*/;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: [].forEach !== arrayForeachPolyfill_1
  }, {
    forEach: arrayForeachPolyfill_1
  });
}