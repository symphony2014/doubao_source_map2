// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'i' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'd' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'r' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'o' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'B' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'R' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'c' to 'arraySpeciesConstructorCheck'
// - Resolved require(940142) to 'array-species-constructor-check'
// - Renamed variable 's' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 266652
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var arraySpeciesConstructorCheck = require("array-species-constructor-check") /*id: 940142*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var V = arraySpeciesConstructorCheck("slice");
  var Z = coreJsWksAccess("species");
  var h = Array;
  var u = Math.max;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: !V
  }, {
    slice: function (U, n) {
      var F;
      var Q;
      var R;
      var c = stringToArrayPolyfillWrapper(this);
      var V = getArrayLengthSafe(c);
      var S = mathTruncClamp(U, V);
      var J = mathTruncClamp(n === undefined ? V : n, V);
      if (arrayIsarrayPolyfill(c) && (nativeConstructorDetector(F = c.constructor) && (F === h || arrayIsarrayPolyfill(F.prototype)) ? F = undefined : isObjectOrFunctionCheck(F) && (F = F[Z]) === null && (F = undefined), F === h || F === undefined)) {
        return arraySlicePolyfill_2(c, S, J);
      }
      R = 0;
      Q = new (F === undefined ? h : F)(u(J - S, 0));
      for (; S < J; S++, R++) {
        if (S in c) {
          es5DefinePropertyPolyfill(Q, R, c[S]);
        }
      }
      Q.length = R;
      return Q;
    }
  });
}