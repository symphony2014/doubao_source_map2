// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'a' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 145391
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  module.exports = function (t, r) {
    if (!r || typeof t != "string") {
      requireObjectOrThrowTypeError_1(t);
    }
    var e = libPolyfillIterator(t);
    return iteratorWrapperHelper(requireObjectOrThrowTypeError_1(e !== undefined ? callBindPolyfill(e, t) : t));
  };
}