// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'radarServicesFactory'
// - Resolved require(20632) to 'radar-services-factory'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'T' to 'createRadarServices' (module 20632)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 56578.017121fd.js
         * chunkId: 56578
         * moduleId: 364869
         */
module.exports = function (module, exports, require) {
  var radarServicesFactory = require("radar-services-factory") /*id: 20632*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createRadarServices: function () {
      return radarServicesFactory.createRadarServices;
    }
  });
}