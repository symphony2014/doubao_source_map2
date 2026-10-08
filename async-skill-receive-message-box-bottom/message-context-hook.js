// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'MessageContext'
// - Renamed export 'I' to 'useMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 30115
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = reactCoreLibraryReexport.createContext({
    message: null
  });
  let a = () => {
    let {
      message: e,
      ...t
    } = reactCoreLibraryReexport.useContext(i);
    if (e) {
      return {
        ...t,
        message: e
      };
    } else {
      return {
        ...t,
        message: {
          is_delta: false
        }
      };
    }
  };
  require.d(exports, {
    MessageContext: function () {
      return i;
    },
    useMessage: function () {
      return a;
    }
  });
}