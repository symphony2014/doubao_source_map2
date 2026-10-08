// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'safeDescriptorFunctionGet'
// - Resolved require(784625) to 'safe-descriptor-function-get'
// - Renamed variable 'o' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'i' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// - Renamed variable 'u' to 'prototypeValidator'
// - Resolved require(168987) to 'prototype-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 595894
         */
module.exports = function (module, exports, require) {
  var safeDescriptorFunctionGet = require("safe-descriptor-function-get") /*id: 784625*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  var prototypeValidator = require("prototype-validator") /*id: 168987*/;
  module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t;
    var r = false;
    var n = {};
    try {
      (t = safeDescriptorFunctionGet(Object.prototype, "__proto__", "set"))(n, []);
      r = n instanceof Array;
    } catch (t) {}
    return function (n, e) {
      requireObjectCoercible(n);
      prototypeValidator(e);
      if (isObjectOrFunction_1(n)) {
        if (r) {
          t(n, e);
        } else {
          n.__proto__ = e;
        }
      }
      return n;
    };
  }() : undefined);
}