// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'd' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'r' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'o' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// - Renamed variable 'B' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'R' to 'arraySpeciesCreate'
// - Resolved require(279621) to 'array-species-create'
// - Renamed variable 'c' to 'arraySpeciesConstructorCheck'
// - Resolved require(940142) to 'array-species-constructor-check'
// - Renamed variable 's' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'V' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 268383
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var arraySpeciesCreate = require("array-species-create") /*id: 279621*/;
  var arraySpeciesConstructorCheck = require("array-species-constructor-check") /*id: 940142*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var Z = coreJsWksAccess("isConcatSpreadable");
  var h = chromeV8VersionPolyfill >= 51 || !tryCatchFunctionWrapper(function () {
    var U = [];
    U[Z] = false;
    return U.concat()[0] !== U;
  });
  function u(U) {
    if (!isObjectOrFunctionCheck(U)) {
      return false;
    }
    var n = U[Z];
    if (n !== undefined) {
      return !!n;
    } else {
      return arrayIsarrayPolyfill(U);
    }
  }
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    arity: 1,
    forced: !h || !arraySpeciesConstructorCheck("concat")
  }, {
    concat: function (U) {
      var n;
      var F;
      var Q;
      var l;
      var i;
      var a = requireObjectNotNullish(this);
      var c = arraySpeciesCreate(a, 0);
      var s = 0;
      n = -1;
      Q = arguments.length;
      for (; n < Q; n++) {
        i = n === -1 ? a : arguments[n];
        if (u(i)) {
          validateMaxIndex_1(s + (l = getArrayLengthSafe(i)));
          F = 0;
          for (; F < l; F++, s++) {
            if (F in i) {
              es5DefinePropertyPolyfill(c, s, i[F]);
            }
          }
        } else {
          validateMaxIndex_1(s + 1);
          es5DefinePropertyPolyfill(c, s++, i);
        }
      }
      c.length = s;
      return c;
    }
  });
}