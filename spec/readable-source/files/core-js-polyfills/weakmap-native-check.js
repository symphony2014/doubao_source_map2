// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 377085
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var i = getGlobalObject.WeakMap;
  module.exports = isFunctionCheck(i) && /native code/.test(String(i));
}