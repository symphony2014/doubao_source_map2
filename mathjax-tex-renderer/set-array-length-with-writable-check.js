// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'T' to 'arrayIsArrayPolyfill_1'
// - Resolved require(959884) to 'array-is-array-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 62132
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var arrayIsArrayPolyfill_1 = require("array-is-array-polyfill_1") /*id: 959884*/;
  var n = TypeError;
  var o = Object.getOwnPropertyDescriptor;
  var i = checkPropertyDescriptorSupport && !function () {
    if (this !== undefined) {
      return true;
    }
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).length = 1;
    } catch (t) {
      return t instanceof TypeError;
    }
  }();
  module.exports = i ? function (t, e) {
    if (arrayIsArrayPolyfill_1(t) && !o(t, "length").writable) {
      throw new n("Cannot set read only .length");
    }
    return t.length = e;
  } : function (t, e) {
    return t.length = e;
  };
}