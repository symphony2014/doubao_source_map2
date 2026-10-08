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
         * moduleId: 380390
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var metadataStoreUtility = require("metadata-store-utility") /*id: 850237*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var a = metadataStoreUtility.toKey;
  var u = metadataStoreUtility.getMap;
  var c = metadataStoreUtility.store;
  polyfillPropertyDefiner({
    target: "Reflect",
    stat: true
  }, {
    deleteMetadata: function (t, r) {
      var e = arguments.length < 3 ? undefined : a(arguments[2]);
      var n = u(requireObjectOrThrowTypeError_1(r), e, false);
      if (n === undefined || !n.delete(t)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      var o = c.get(r);
      o.delete(e);
      return !!o.size || c.delete(r);
    }
  });
}