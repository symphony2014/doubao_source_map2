// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G7' to 'useSpaceController'
// - Renamed export 'g4' to 'getDirectoryService'
// - Renamed export 'ow' to 'SpaceControllerProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 129675
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let a = reactCoreLibraryReexport.createContext({
    spaceController: null
  });
  let r = a.Provider;
  function o() {
    let {
      spaceController: e
    } = reactCoreLibraryReexport.useContext(a);
    if (!e) {
      throw Error("AISpaceController is not injected");
    }
    return e;
  }
  function s() {
    return o().getDirectoryService();
  }
  require.d(exports, {
    useSpaceController: function () {
      return o;
    },
    getDirectoryService: function () {
      return s;
    },
    SpaceControllerProvider: function () {
      return r;
    }
  });
}