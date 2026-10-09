// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDeepChangeCb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81972.0a9c5dd4.js
         * chunkId: 81972
         * moduleId: 699565
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDeepChangeUtil = require("react-deep-change-util") /*id: 7994*/;
  exports.useDeepChangeCb = reactDeepChangeUtil.createDeepChangeCb(reactCoreLibraryReexport.useLayoutEffect);
}