// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'contextConsumer'
// - Renamed export 'x' to 'renderContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 466226
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var o = reactCoreLibraryReexport.createContext({
    renderContext: null
  });
  function i(t) {
    return reactCoreLibraryReexport.createElement(o.Consumer, null, function (e) {
      return t(e.renderContext);
    });
  }
  require.d(exports, {
    contextConsumer: function () {
      return i;
    },
    renderContext: function () {
      return o;
    }
  });
}