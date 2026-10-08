// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'i' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 40589
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var u = TypeError;
  module.exports = function (t, r) {
    var n;
    var c;
    if (r === "string" && isFunctionCheck(n = t.toString) && !isObjectOrFunction_1(c = functionCallBindHelper(n, t)) || isFunctionCheck(n = t.valueOf) && !isObjectOrFunction_1(c = functionCallBindHelper(n, t)) || r !== "string" && isFunctionCheck(n = t.toString) && !isObjectOrFunction_1(c = functionCallBindHelper(n, t))) {
      return c;
    }
    throw new u("Can't convert object to primitive value");
  };
}