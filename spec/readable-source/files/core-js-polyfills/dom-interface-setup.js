// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(29050) to 'array-iterator-define'
// - Renamed variable 'e' to 'domCollectionFlags'
// - Resolved require(794561) to 'dom-collection-flags'
// - Renamed variable 'o' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'i' to 'setSymbolToStringTag_1'
// - Resolved require(434792) to 'set-symbol-to-string-tag_1'
// - Renamed variable 'u' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 841154
         */
module.exports = function (module, exports, require) {
  require("array-iterator-define") /*id: 29050*/;
  var domCollectionFlags = require("dom-collection-flags") /*id: 794561*/;
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var setSymbolToStringTag_1 = require("set-symbol-to-string-tag_1") /*id: 434792*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  for (var c in domCollectionFlags) {
    setSymbolToStringTag_1(getGlobalObject[c], c);
    emptyModuleExport[c] = emptyModuleExport.Array;
  }
}