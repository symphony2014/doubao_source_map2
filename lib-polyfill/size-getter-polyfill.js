// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'propertyDescriptorAccessorBinder'
// - Resolved require(618551) to 'property-descriptor-accessor-binder'
// - Renamed variable 'o' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 564074
         */
module.exports = function (module, exports, require) {
  var propertyDescriptorAccessorBinder = require("property-descriptor-accessor-binder") /*id: 618551*/;
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  module.exports = propertyDescriptorAccessorBinder(setPrototypeUtils.proto, "size", "get") || function (t) {
    return t.size;
  };
}