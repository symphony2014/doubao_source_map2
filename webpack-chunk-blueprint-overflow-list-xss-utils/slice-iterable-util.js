// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sliceIterable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 681006
         */
module.exports = function (module, exports, require) {
  var arraySliceUtil = require("array-slice-util") /*id: 132796*/;
  function i(e, t) {
    if (e) {
      if (typeof e == "string") {
        return arraySliceUtil.sliceArray(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return arraySliceUtil.sliceArray(e, t);
      }
    }
  }
  require.d(exports, {
    sliceIterable: function () {
      return i;
    }
  });
}