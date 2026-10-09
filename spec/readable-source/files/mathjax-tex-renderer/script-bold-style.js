// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'scriptBoldStyles'
// - Resolved require(319172) to 'script-bold-styles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 233145
         */
module.exports = function (module, exports, require) {
  exports.scriptBold = undefined;
  var scriptBoldStyles = require("script-bold-styles") /*id: 319172*/;
  Object.defineProperty(exports, "scriptBold", {
    enumerable: true,
    get: function () {
      return scriptBoldStyles.scriptBold;
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}