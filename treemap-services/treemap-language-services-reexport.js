// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'treemapLanguageServicesFactory'
// - Resolved require(254429) to 'treemap-language-services-factory'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'K' to 'createTreemapServices' (module 254429)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96779.fd074ae0.js
         * chunkId: 96779
         * moduleId: 953005
         */
module.exports = function (module, exports, require) {
  var treemapLanguageServicesFactory = require("treemap-language-services-factory") /*id: 254429*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createTreemapServices: function () {
      return treemapLanguageServicesFactory.createTreemapServices;
    }
  });
}