// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'u' to 'regexpExecPolyfill'
// - Resolved require(477250) to 'regexp-exec-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 747017
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var regexpExecPolyfill = require("regexp-exec-polyfill") /*id: 477250*/;
  var c = TypeError;
  module.exports = function (t, r) {
    var e = t.exec;
    if (isFunctionPolyfill(e)) {
      var f = callBindPolyfill(e, t, r);
      if (f !== null) {
        requireObjectOrThrowTypeError_1(f);
      }
      return f;
    }
    if (objectTypeDetector(t) === "RegExp") {
      return callBindPolyfill(regexpExecPolyfill, t, r);
    }
    throw new c("RegExp#exec called on incompatible receiver");
  };
}