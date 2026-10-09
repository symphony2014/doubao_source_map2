// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'toArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 415168
         */
module.exports = function (module, exports, require) {
  var libPolyfillArraySlice = require("lib-polyfill-array-slice") /*id: 490754*/;
  var polyfillArraySliceUtil = require("polyfill-array-slice-util") /*id: 671254*/;
  function i(t) {
    return function (t) {
      if (Array.isArray(t)) {
        return libPolyfillArraySlice.arraySliceLimit(t);
      }
    }(t) || function (t) {
      if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) {
        return Array.from(t);
      }
    }(t) || polyfillArraySliceUtil.toArrayWithLimit(t) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  require.d(exports, {
    toArray: function () {
      return i;
    }
  });
}