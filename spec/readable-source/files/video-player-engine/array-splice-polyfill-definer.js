// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'a' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'd' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'r' to 'arrayLengthSetterSafe'
// - Resolved require(9981) to 'array-length-setter-safe'
// - Renamed variable 'o' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// - Renamed variable 'B' to 'arraySpeciesCreate'
// - Resolved require(279621) to 'array-species-create'
// - Renamed variable 'R' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'c' to 'assertPropertyDelete'
// - Resolved require(240579) to 'assert-property-delete'
// - Resolved require(940142) to 'array-species-constructor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 803861
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var arrayLengthSetterSafe = require("array-length-setter-safe") /*id: 9981*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  var arraySpeciesCreate = require("array-species-create") /*id: 279621*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var assertPropertyDelete = require("assert-property-delete") /*id: 240579*/;
  var s = require("array-species-constructor-check") /*id: 940142*/("splice");
  var V = Math.max;
  var Z = Math.min;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: !s
  }, {
    splice: function (U, n) {
      var F;
      var Q;
      var s;
      var h;
      var u;
      var S;
      var J = requireObjectNotNullish(this);
      var m = getArrayLengthSafe(J);
      var p = mathTruncClamp(U, m);
      var W = arguments.length;
      if (W === 0) {
        F = Q = 0;
      } else if (W === 1) {
        F = 0;
        Q = m - p;
      } else {
        F = W - 2;
        Q = Z(V(mathTruncPolyfill_2(n), 0), m - p);
      }
      validateMaxIndex_1(m + F - Q);
      s = arraySpeciesCreate(J, Q);
      h = 0;
      for (; h < Q; h++) {
        if ((u = p + h) in J) {
          es5DefinePropertyPolyfill(s, h, J[u]);
        }
      }
      s.length = Q;
      if (F < Q) {
        for (h = p; h < m - Q; h++) {
          u = h + Q;
          S = h + F;
          if (u in J) {
            J[S] = J[u];
          } else {
            assertPropertyDelete(J, S);
          }
        }
        for (h = m; h > m - Q + F; h--) {
          assertPropertyDelete(J, h - 1);
        }
      } else if (F > Q) {
        for (h = m - Q; h > p; h--) {
          u = h + Q - 1;
          S = h + F - 1;
          if (u in J) {
            J[S] = J[u];
          } else {
            assertPropertyDelete(J, S);
          }
        }
      }
      for (h = 0; h < F; h++) {
        J[h + p] = arguments[h + 2];
      }
      arrayLengthSetterSafe(J, m - Q + F);
      return s;
    }
  });
}