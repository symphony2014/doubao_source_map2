// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'mermaidPieLangiumServices'
// - Resolved require(835221) to 'mermaid-pie-langium-services'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'l' to 'createPieServices' (module 835221)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28467.fecf5a5d.js
         * chunkId: 28467
         * moduleId: 638166
         */
module.exports = function (module, exports, require) {
  var mermaidPieLangiumServices = require("mermaid-pie-langium-services") /*id: 835221*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createPieServices: function () {
      return mermaidPieLangiumServices.createPieServices;
    }
  });
}