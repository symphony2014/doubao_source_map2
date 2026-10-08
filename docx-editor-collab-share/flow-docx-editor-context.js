// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SD' to 'useRpcClientId'
// - Renamed export 'Tu' to 'FlowDocXProvider'
// - Renamed export 'fU' to 'useEditorController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 912706
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = reactCoreLibraryReexport.createContext({
    flowDocXEditorController: null,
    rpcClientId: null
  });
  let o = r.Provider;
  function s() {
    return reactCoreLibraryReexport.useContext(r);
  }
  function a() {
    let {
      flowDocXEditorController: e
    } = s();
    return e;
  }
  function l() {
    let {
      rpcClientId: e
    } = s();
    return e;
  }
  require.d(exports, {
    useRpcClientId: function () {
      return l;
    },
    FlowDocXProvider: function () {
      return o;
    },
    useEditorController: function () {
      return a;
    }
  });
}