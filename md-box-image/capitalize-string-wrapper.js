// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'capitalizeStringUtil'
// - Resolved require(834435) to 'capitalize-string-util'
// - Updated imported property 'Z' to 'capitalizeString' (module 834435)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 950475
         */
module.exports = function (module, exports, require) {
  var capitalizeStringUtil = require("capitalize-string-util") /*id: 834435*/;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return capitalizeStringUtil.capitalizeString;
    }
  });
}