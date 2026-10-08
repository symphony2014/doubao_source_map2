// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'forwardRef'
// - Renamed export 'f' to 'forwardRef_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 638327
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var o = reactCoreLibraryReexport.forwardRef;
  var i = reactCoreLibraryReexport.forwardRef;
  require.d(exports, {
    forwardRef: function () {
      return i;
    },
    forwardRef_1: function () {
      return o;
    }
  });
}