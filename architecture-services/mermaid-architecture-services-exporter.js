// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'mermaidArchitectureServices'
// - Resolved require(919445) to 'mermaid-architecture-services'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'i' to 'createArchServices' (module 919445)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93160.73ea7660.js
         * chunkId: 93160
         * moduleId: 468403
         */
module.exports = function (module, exports, require) {
  var mermaidArchitectureServices = require("mermaid-architecture-services") /*id: 919445*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createArchitectureServices: function () {
      return mermaidArchitectureServices.createArchServices;
    }
  });
}