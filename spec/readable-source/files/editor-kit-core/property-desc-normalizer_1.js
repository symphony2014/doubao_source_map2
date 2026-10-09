// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'validatePropertyDescriptor'
// - Resolved require(713775) to 'validate-property-descriptor'
// - Renamed variable 'i' to 'propertyDescNormalizer'
// - Resolved require(48884) to 'property-desc-normalizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 959804
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var validatePropertyDescriptor = require("validate-property-descriptor") /*id: 713775*/;
  var propertyDescNormalizer = require("property-desc-normalizer") /*id: 48884*/;
  module.exports = function (t) {
    if (t !== undefined && !validatePropertyDescriptor(t)) {
      throw new typeErrorConstructor("Assertion failed: `Desc` must be a Property Descriptor");
    }
    return propertyDescNormalizer(t);
  };
}