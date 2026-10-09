// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'o' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 803286
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var i = getGlobalObject.document;
  var u = isObjectOrFunction_1(i) && isObjectOrFunction_1(i.createElement);
  module.exports = function (t) {
    if (u) {
      return i.createElement(t);
    } else {
      return {};
    }
  };
}