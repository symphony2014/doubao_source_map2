// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UX' to 'TreePrefixes'
// - Renamed export 'j2' to 'TreeActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 259049
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let a = {
    PREFIX: `${semiIdentifier.semiIdentifier}-tree`,
    PREFIX_OPTION: `${semiIdentifier.semiIdentifier}-tree-option`
  };
  let r = {
    EXPAND_ACTION: [false, "click", "doubleClick"]
  };
  require.d(exports, {
    TreePrefixes: function () {
      return a;
    },
    TreeActions: function () {
      return r;
    }
  });
}