// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'slicedToArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 240168
         */
module.exports = function (module, exports, require) {
  var polyfillArraySliceUtil = require("polyfill-array-slice-util") /*id: 671254*/;
  function o(t, r) {
    return function (t) {
      if (Array.isArray(t)) {
        return t;
      }
    }(t) || function (t, r) {
      var e;
      var n;
      var o = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
      if (o != null) {
        var i = [];
        var a = true;
        var u = false;
        try {
          for (o = o.call(t); !(a = (e = o.next()).done) && (i.push(e.value), !r || i.length !== r); a = true);
        } catch (t) {
          u = true;
          n = t;
        } finally {
          try {
            if (!a && o.return != null) {
              o.return();
            }
          } finally {
            if (u) {
              throw n;
            }
          }
        }
        return i;
      }
    }(t, r) || polyfillArraySliceUtil.toArrayWithLimit(t, r) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  require.d(exports, {
    slicedToArray: function () {
      return o;
    }
  });
}