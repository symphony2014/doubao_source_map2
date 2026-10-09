// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Resolved require(434792) to 'set-symbol-to-string-tag_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 666897
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  require("set-symbol-to-string-tag_1") /*id: 434792*/(getGlobalObject.JSON, "JSON", true);
}