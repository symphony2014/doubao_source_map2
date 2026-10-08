// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'layoutAndTransformProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 549077
         */
module.exports = function (module, exports, require) {
  let n = new Set(["width", "height", "top", "left", "right", "bottom", ...require("css-transform-props") /*id: 641552*/.transformPropList]);
  require.d(exports, {
    layoutAndTransformProps: function () {
      return n;
    }
  });
}