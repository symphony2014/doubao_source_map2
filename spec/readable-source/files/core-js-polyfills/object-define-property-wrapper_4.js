// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'objectDefinePropertySafe'
// - Resolved require(976843) to 'object-define-property-safe'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 505402
         */
module.exports = function (module, exports, require) {
  var objectDefinePropertySafe = require("object-define-property-safe") /*id: 976843*/;
  module.exports = function (t, r, n) {
    return objectDefinePropertySafe.safeDefineProperty(t, r, n);
  };
}