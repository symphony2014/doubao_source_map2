// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'metadataStoreUtility'
// - Resolved require(850237) to 'metadata-store-utility'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 275567
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var metadataStoreUtility = require("metadata-store-utility") /*id: 850237*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var u = metadataStoreUtility.has;
  var c = metadataStoreUtility.get;
  var f = metadataStoreUtility.toKey;
  function s(t, r, e) {
    if (u(t, r, e)) {
      return c(t, r, e);
    }
    var n = getPrototypeOfPolyfill_1(r);
    if (n !== null) {
      return s(t, n, e);
    } else {
      return undefined;
    }
  }
  polyfillPropertyDefiner({
    target: "Reflect",
    stat: true
  }, {
    getMetadata: function (t, r) {
      var e = arguments.length < 3 ? undefined : f(arguments[2]);
      return s(t, requireObjectOrThrowTypeError_1(r), e);
    }
  });
}