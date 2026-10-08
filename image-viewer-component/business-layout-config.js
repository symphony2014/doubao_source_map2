// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'layoutZIndexConfig'
// - Renamed export 'U' to 'imagePrefixConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 353607
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-image`
  };
  let o = {
    DEFAULT_Z_INDEX: 1070
  };
  require.d(exports, {
    layoutZIndexConfig: function () {
      return o;
    },
    imagePrefixConfig: function () {
      return r;
    }
  });
}