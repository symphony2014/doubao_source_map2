// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'o' to 'reflectOwnKeysPolyfill_1'
// - Resolved require(358126) to 'reflect-own-keys-polyfill_1'
// - Renamed variable 'i' to 'propertyDescriptorPolyfill'
// - Resolved require(143761) to 'property-descriptor-polyfill'
// - Renamed variable 'a' to 'es5DefinePropertyImpl'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// - Updated imported property 'f' to 'getOwnPropertyDesc' (module 143761)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 210693
         */
module.exports = function (module, exports, require) {
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var reflectOwnKeysPolyfill_1 = require("reflect-own-keys-polyfill_1") /*id: 358126*/;
  var propertyDescriptorPolyfill = require("property-descriptor-polyfill") /*id: 143761*/;
  var es5DefinePropertyImpl = require("es5-define-property-impl") /*id: 760974*/;
  module.exports = function (t, r, e) {
    var u = reflectOwnKeysPolyfill_1(r);
    var c = es5DefinePropertyImpl.defineProperty;
    var f = propertyDescriptorPolyfill.getOwnPropertyDesc;
    var s = 0;
    for (; s < u.length; s++) {
      var l = u[s];
      if (!objectHasOwnPolyfill_1(t, l) && (!e || !objectHasOwnPolyfill_1(e, l))) {
        c(t, l, f(r, l));
      }
    }
  };
}