// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'o' to 'objectDefinePropertySafe'
// - Resolved require(976843) to 'object-define-property-safe'
// - Renamed variable 'i' to 'createPropertyDescriptor'
// - Resolved require(757570) to 'create-property-descriptor'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 336704
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var objectDefinePropertySafe = require("object-define-property-safe") /*id: 976843*/;
  var createPropertyDescriptor = require("create-property-descriptor") /*id: 757570*/;
  module.exports = checkPropertyDescriptorSupport ? function (t, r, n) {
    return objectDefinePropertySafe.safeDefineProperty(t, r, createPropertyDescriptor(1, n));
  } : function (t, r, n) {
    t[r] = n;
    return t;
  };
}