// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'validatePropertyDescriptor'
// - Resolved require(713775) to 'validate-property-descriptor'
// - Renamed variable 'i' to 'propertyDescriptorDefineUtil'
// - Resolved require(414434) to 'property-descriptor-define-util'
// - Renamed variable 'u' to 'propertyDescNormalizer_1'
// - Resolved require(959804) to 'property-desc-normalizer_1'
// - Renamed variable 'a' to 'isDataDescriptor'
// - Resolved require(824416) to 'is-data-descriptor'
// - Renamed variable 's' to 'isStringOrSymbol'
// - Resolved require(75503) to 'is-string-or-symbol'
// - Renamed variable 'c' to 'sameValueEqual'
// - Resolved require(253094) to 'same-value-equal'
// - Renamed variable 'f' to 'toPropertyDescriptorUtil'
// - Resolved require(360812) to 'to-property-descriptor-util'
// - Renamed variable 'l' to 'isObjectOrFunction'
// - Resolved require(832730) to 'is-object-or-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 630551
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var validatePropertyDescriptor = require("validate-property-descriptor") /*id: 713775*/;
  var propertyDescriptorDefineUtil = require("property-descriptor-define-util") /*id: 414434*/;
  var propertyDescNormalizer_1 = require("property-desc-normalizer_1") /*id: 959804*/;
  var isDataDescriptor = require("is-data-descriptor") /*id: 824416*/;
  var isStringOrSymbol = require("is-string-or-symbol") /*id: 75503*/;
  var sameValueEqual = require("same-value-equal") /*id: 253094*/;
  var toPropertyDescriptorUtil = require("to-property-descriptor-util") /*id: 360812*/;
  var isObjectOrFunction = require("is-object-or-function") /*id: 832730*/;
  module.exports = function (t, e, r) {
    if (!isObjectOrFunction(t)) {
      throw new typeErrorConstructor("Assertion failed: Type(O) is not Object");
    }
    if (!isStringOrSymbol(e)) {
      throw new typeErrorConstructor("Assertion failed: IsPropertyKey(P) is not true");
    }
    var p = validatePropertyDescriptor(r) ? r : toPropertyDescriptorUtil(r);
    if (!validatePropertyDescriptor(p)) {
      throw new typeErrorConstructor("Assertion failed: Desc is not a valid Property Descriptor");
    }
    return propertyDescriptorDefineUtil(isDataDescriptor, sameValueEqual, propertyDescNormalizer_1, t, e, p);
  };
}