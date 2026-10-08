// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'extractFramerAppearData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 114896
         */
module.exports = function (module, exports, require) {
  var generateFramerAppearDataAttribute = require("generate-framer-appear-data-attribute") /*id: 584464*/;
  function r(t) {
    return t.props[generateFramerAppearDataAttribute.framerAppearDataAttribute];
  }
  require.d(exports, {
    extractFramerAppearData: function () {
      return r;
    }
  });
}