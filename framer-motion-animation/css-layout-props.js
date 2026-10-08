// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'cssPropertySet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 599622
         */
module.exports = function (module, exports, require) {
  let n = new Set(["width", "height", "top", "left", "right", "bottom", ...require("css-transform-props_1") /*id: 736118*/.transformProps]);
  require.d(exports, {
    cssPropertySet: function () {
      return n;
    }
  });
}