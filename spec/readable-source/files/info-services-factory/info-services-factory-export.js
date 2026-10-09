// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'infoServicesFactory'
// - Resolved require(913524) to 'info-services-factory'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'M' to 'createInfoServices' (module 913524)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16492.ab845c4c.js
         * chunkId: 16492
         * moduleId: 813134
         */
module.exports = function (module, exports, require) {
  var infoServicesFactory = require("info-services-factory") /*id: 913524*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createInfoServices: function () {
      return infoServicesFactory.createInfoServices;
    }
  });
}