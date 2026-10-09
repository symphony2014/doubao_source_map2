// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'int8ArrayConstructorCheck'
// - Resolved require(212324) to 'int8-array-constructor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 203404
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var int8ArrayConstructorCheck = require("int8-array-constructor-check") /*id: 212324*/;
  var i = typedArrayPolyfillUtil.aTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayStaticMethod("of", function () {
    var U = 0;
    var n = arguments.length;
    var F = new (i(this))(n);
    while (n > U) {
      F[U] = arguments[U++];
    }
    return F;
  }, int8ArrayConstructorCheck);
}