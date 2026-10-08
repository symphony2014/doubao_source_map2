// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'metadataStoreUtility'
// - Resolved require(850237) to 'metadata-store-utility'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 249680
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var metadataStoreUtility = require("metadata-store-utility") /*id: 850237*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var a = metadataStoreUtility.toKey;
  var u = metadataStoreUtility.set;
  polyfillPropertyDefiner({
    target: "Reflect",
    stat: true
  }, {
    defineMetadata: function (t, r, e) {
      var n = arguments.length < 4 ? undefined : a(arguments[3]);
      u(t, r, requireObjectOrThrowTypeError_1(e), n);
    }
  });
}