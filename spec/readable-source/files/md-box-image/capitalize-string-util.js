// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'capitalizeString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 834435
         */
module.exports = function (module, exports, require) {
  var muiProductionErrorFormat = require("mui-production-error-format") /*id: 330388*/;
  function i(e) {
    if (typeof e != "string") {
      throw Error(muiProductionErrorFormat.formatProdError(7));
    }
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  require.d(exports, {
    capitalizeString: function () {
      return i;
    }
  });
}