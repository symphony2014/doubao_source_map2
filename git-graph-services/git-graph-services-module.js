// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'gitGraphServiceFactory'
// - Resolved require(847165) to 'git-graph-service-factory'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'z' to 'createGitGraphServices' (module 847165)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52288.fcf88e46.js
         * chunkId: 52288
         * moduleId: 27435
         */
module.exports = function (module, exports, require) {
  var gitGraphServiceFactory = require("git-graph-service-factory") /*id: 847165*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createGitGraphServices: function () {
      return gitGraphServiceFactory.createGitGraphServices;
    }
  });
}