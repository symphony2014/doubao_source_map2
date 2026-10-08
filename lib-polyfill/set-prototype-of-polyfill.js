// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'propertyDescriptorAccessorBinder'
// - Resolved require(618551) to 'property-descriptor-accessor-binder'
// - Renamed variable 'o' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'i' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'a' to 'validatePrototypeObject'
// - Resolved require(498254) to 'validate-prototype-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 411942
         */
module.exports = function (module, exports, require) {
  var propertyDescriptorAccessorBinder = require("property-descriptor-accessor-binder") /*id: 618551*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var validatePrototypeObject = require("validate-prototype-object") /*id: 498254*/;
  module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var r = false;
    var e = {};
    try {
      (t = propertyDescriptorAccessorBinder(Object.prototype, "__proto__", "set"))(e, []);
      r = e instanceof Array;
    } catch (t) {}
    return function (e, n) {
      requireNotNullish(e);
      validatePrototypeObject(n);
      if (isObjectOrFunctionCheck(e)) {
        if (r) {
          t(e, n);
        } else {
          e.__proto__ = n;
        }
      }
      return e;
    };
  }() : undefined);
}