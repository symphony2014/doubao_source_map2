// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'o' to 'es5DefinePropertyImpl'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'i' to 'functionNamePolyfillUtil'
// - Resolved require(525314) to 'function-name-polyfill-util'
// - Renamed variable 'a' to 'defineGlobalProperty_1'
// - Resolved require(433178) to 'define-global-property_1'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 429138
         */
module.exports = function (module, exports, require) {
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var es5DefinePropertyImpl = require("es5-define-property-impl") /*id: 760974*/;
  var functionNamePolyfillUtil = require("function-name-polyfill-util") /*id: 525314*/;
  var defineGlobalProperty_1 = require("define-global-property_1") /*id: 433178*/;
  module.exports = function (t, r, e, u) {
    u ||= {};
    var c = u.enumerable;
    var f = u.name !== undefined ? u.name : r;
    if (isFunctionPolyfill(e)) {
      functionNamePolyfillUtil(e, f, u);
    }
    if (u.global) {
      if (c) {
        t[r] = e;
      } else {
        defineGlobalProperty_1(r, e);
      }
    } else {
      try {
        if (u.unsafe) {
          if (t[r]) {
            c = true;
          }
        } else {
          delete t[r];
        }
      } catch (t) {}
      if (c) {
        t[r] = e;
      } else {
        es5DefinePropertyImpl.defineProperty(t, r, {
          value: e,
          enumerable: false,
          configurable: !u.nonConfigurable,
          writable: !u.nonWritable
        });
      }
    }
    return t;
  };
}