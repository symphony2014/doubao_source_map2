// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// - Renamed variable 'u' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 134822
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var c = TypeError;
  module.exports = function (t, r) {
    var e = arguments.length < 2 ? libPolyfillIterator(t) : r;
    if (functionValidator(e)) {
      return requireObjectOrThrowTypeError_1(callBindPolyfill(e, t));
    }
    throw new c(safeStringConverter(t) + " is not iterable");
  };
}