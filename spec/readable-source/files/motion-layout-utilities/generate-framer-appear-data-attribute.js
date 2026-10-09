// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'framerAppearDataAttribute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 584464
         */
module.exports = function (module, exports, require) {
  let n = "data-" + require("camel-case-to-kebab-case") /*id: 869509*/.camelToKebabCase("framerAppearId");
  require.d(exports, {
    framerAppearDataAttribute: function () {
      return n;
    }
  });
}