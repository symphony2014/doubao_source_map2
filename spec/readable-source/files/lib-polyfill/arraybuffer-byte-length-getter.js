// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'propertyDescriptorAccessorBinder'
// - Resolved require(618551) to 'property-descriptor-accessor-binder'
// - Renamed variable 'i' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 317712
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var propertyDescriptorAccessorBinder = require("property-descriptor-accessor-binder") /*id: 618551*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var a = globalObjectPolyfill.ArrayBuffer;
  var u = globalObjectPolyfill.TypeError;
  module.exports = a && propertyDescriptorAccessorBinder(a.prototype, "byteLength", "get") || function (t) {
    if (objectTypeDetector(t) !== "ArrayBuffer") {
      throw new u("ArrayBuffer expected");
    }
    return t.byteLength;
  };
}