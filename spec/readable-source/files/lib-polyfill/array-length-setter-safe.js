// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 9981
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var i = TypeError;
  var a = Object.getOwnPropertyDescriptor;
  var u = es5PropertyDescriptorCheck && !function () {
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
  module.exports = u ? function (t, r) {
    if (arrayIsarrayPolyfill(t) && !a(t, "length").writable) {
      throw new i("Cannot set read only .length");
    }
    return t.length = r;
  } : function (t, r) {
    return t.length = r;
  };
}