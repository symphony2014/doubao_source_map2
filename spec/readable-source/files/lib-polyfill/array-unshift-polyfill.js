// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'a' to 'arrayLengthSetterSafe'
// - Resolved require(9981) to 'array-length-setter-safe'
// - Renamed variable 'u' to 'assertPropertyDelete'
// - Resolved require(240579) to 'assert-property-delete'
// - Renamed variable 'c' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 446618
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var arrayLengthSetterSafe = require("array-length-setter-safe") /*id: 9981*/;
  var assertPropertyDelete = require("assert-property-delete") /*id: 240579*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    arity: 1,
    forced: [].unshift(0) !== 1 || !function () {
      try {
        Object.defineProperty([], "length", {
          writable: false
        }).unshift();
      } catch (t) {
        return t instanceof TypeError;
      }
    }()
  }, {
    unshift: function (t) {
      var r = requireObjectNotNullish(this);
      var e = getArrayLengthSafe(r);
      var n = arguments.length;
      if (n) {
        validateMaxIndex_1(e + n);
        for (var f = e; f--;) {
          var s = f + n;
          if (f in r) {
            r[s] = r[f];
          } else {
            assertPropertyDelete(r, s);
          }
        }
        for (var l = 0; l < n; l++) {
          r[l] = arguments[l];
        }
      }
      return arrayLengthSetterSafe(r, e + n);
    }
  });
}