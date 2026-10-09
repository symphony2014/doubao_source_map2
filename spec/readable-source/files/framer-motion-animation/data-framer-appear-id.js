// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'dataFramerAppearId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 333675
         */
module.exports = function (module, exports, require) {
  let n = "data-" + require("camel-to-kebab") /*id: 968008*/.toKebabCase("framerAppearId");
  require.d(exports, {
    dataFramerAppearId: function () {
      return n;
    }
  });
}