// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionNamePolyfillUtil'
// - Resolved require(525314) to 'function-name-polyfill-util'
// - Renamed variable 'o' to 'es5DefinePropertyImpl'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 221009
         */
module.exports = function (module, exports, require) {
  var functionNamePolyfillUtil = require("function-name-polyfill-util") /*id: 525314*/;
  var es5DefinePropertyImpl = require("es5-define-property-impl") /*id: 760974*/;
  module.exports = function (t, r, e) {
    if (e.get) {
      functionNamePolyfillUtil(e.get, r, {
        getter: true
      });
    }
    if (e.set) {
      functionNamePolyfillUtil(e.set, r, {
        setter: true
      });
    }
    return es5DefinePropertyImpl.defineProperty(t, r, e);
  };
}