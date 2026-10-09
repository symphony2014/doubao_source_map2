// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useToolContext'
// - Renamed export 'R' to 'ToolMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 533002
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextDefinition_2 = require("react-context-definition_2") /*id: 364030*/;
  let l = () => reactCoreLibraryReexport.useContext(reactContextDefinition_2.Context);
  (n = {})[n.TEXT_SELECT = 0] = "TEXT_SELECT";
  n[n.TRANSLATE_ALL = 1] = "TRANSLATE_ALL";
  n[n.CROP = 2] = "CROP";
  let o = n;
  require.d(exports, {
    useToolContext: function () {
      return l;
    },
    ToolMode: function () {
      return o;
    }
  });
}