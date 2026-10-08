// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'metadataStoreUtility'
// - Resolved require(850237) to 'metadata-store-utility'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'u' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Resolved require(904662) to 'array-unique-by-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 12342
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var metadataStoreUtility = require("metadata-store-utility") /*id: 850237*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var c = functionBindFallback(require("array-unique-by-polyfill") /*id: 904662*/);
  var f = functionBindFallback([].concat);
  var s = metadataStoreUtility.keys;
  var l = metadataStoreUtility.toKey;
  function v(t, r) {
    var e = s(t, r);
    var n = getPrototypeOfPolyfill_1(t);
    if (n === null) {
      return e;
    }
    var o = v(n, r);
    if (o.length) {
      if (e.length) {
        return c(f(e, o));
      } else {
        return o;
      }
    } else {
      return e;
    }
  }
  polyfillPropertyDefiner({
    target: "Reflect",
    stat: true
  }, {
    getMetadataKeys: function (t) {
      var r = arguments.length < 2 ? undefined : l(arguments[1]);
      return v(requireObjectOrThrowTypeError_1(t), r);
    }
  });
}