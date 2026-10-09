// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'toArrayWithLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 671254
         */
module.exports = function (module, exports, require) {
  var libPolyfillArraySlice = require("lib-polyfill-array-slice") /*id: 490754*/;
  function o(t, r) {
    if (t) {
      if (typeof t == "string") {
        return libPolyfillArraySlice.arraySliceLimit(t, r);
      }
      var e = Object.prototype.toString.call(t).slice(8, -1);
      if (e === "Object" && t.constructor) {
        e = t.constructor.name;
      }
      if (e === "Map" || e === "Set") {
        return Array.from(e);
      }
      if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) {
        return libPolyfillArraySlice.arraySliceLimit(t, r);
      }
    }
  }
  require.d(exports, {
    toArrayWithLimit: function () {
      return o;
    }
  });
}