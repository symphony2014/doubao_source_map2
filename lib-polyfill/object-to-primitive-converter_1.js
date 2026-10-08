// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 158979
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var a = TypeError;
  module.exports = function (t, r) {
    var e;
    var u;
    if (r === "string" && isFunctionPolyfill(e = t.toString) && !isObjectOrFunctionCheck(u = callBindPolyfill(e, t)) || isFunctionPolyfill(e = t.valueOf) && !isObjectOrFunctionCheck(u = callBindPolyfill(e, t)) || r !== "string" && isFunctionPolyfill(e = t.toString) && !isObjectOrFunctionCheck(u = callBindPolyfill(e, t))) {
      return u;
    }
    throw new a("Can't convert object to primitive value");
  };
}