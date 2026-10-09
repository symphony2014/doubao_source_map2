// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'o' to 'assertNativeConstructor'
// - Resolved require(15730) to 'assert-native-constructor'
// - Renamed variable 'i' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 206077
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var assertNativeConstructor = require("assert-native-constructor") /*id: 15730*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var a = require("core-js-wks-access") /*id: 349338*/("species");
  module.exports = function (t, r) {
    var e;
    var u = requireObjectOrThrowTypeError_1(t).constructor;
    if (u === undefined || isNullishCheck_1(e = requireObjectOrThrowTypeError_1(u)[a])) {
      return r;
    } else {
      return assertNativeConstructor(e);
    }
  };
}