// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'es5DefinePropertyImpl'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'i' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 864373
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var es5DefinePropertyImpl = require("es5-define-property-impl") /*id: 760974*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  module.exports = function (t, r, e) {
    if (es5PropertyDescriptorCheck) {
      es5DefinePropertyImpl.defineProperty(t, r, polyfillPropertyDescriptor(0, e));
    } else {
      t[r] = e;
    }
  };
}