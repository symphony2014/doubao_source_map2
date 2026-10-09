// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectGetPropertyDescriptor'
// - Resolved require(962177) to 'object-get-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 467842
         */
module.exports = function (module, exports, require) {
  var objectGetPropertyDescriptor = require("object-get-property-descriptor") /*id: 962177*/;
  if (objectGetPropertyDescriptor) {
    try {
      objectGetPropertyDescriptor([], "length");
    } catch (t) {
      objectGetPropertyDescriptor = null;
    }
  }
  module.exports = objectGetPropertyDescriptor;
}