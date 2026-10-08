// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'useMessageBoxUpdate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 794651
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = () => reactCoreLibraryReexport.useReducer(e => e + 1, 0);
  require.d(exports, {
    useMessageBoxUpdate: function () {
      return r;
    }
  });
}