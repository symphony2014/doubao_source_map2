// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// - Renamed variable 'i' to 'validatePropertyDescriptor'
// - Resolved require(713775) to 'validate-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 824416
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var validatePropertyDescriptor = require("validate-property-descriptor") /*id: 713775*/;
  module.exports = function (t) {
    if (t === undefined) {
      return false;
    }
    if (!validatePropertyDescriptor(t)) {
      throw new typeErrorConstructor("Assertion failed: `Desc` must be a Property Descriptor");
    }
    return !!boundHasOwnPropertyUtil(t, "[[Value]]") || !!boundHasOwnPropertyUtil(t, "[[Writable]]");
  };
}