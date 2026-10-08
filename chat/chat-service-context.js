// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'useChatService'
// - Renamed export 'Uv' to 'ChatServiceProvider'
// - Renamed export 'Y7' to 'ChatServiceContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 18590
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = reactCoreLibraryReexport.createContext(null);
  let o = r.Provider;
  r.Consumer;
  let a = new Proxy({}, {
    get: () => () => Promise.resolve()
  });
  let l = e => {
    let t = reactCoreLibraryReexport.useContext(r);
    if (!t) {
      throw Error("not found ChatServiceContext, Please use ChatServiceContextProvider to provider it");
    }
    let n = t[e];
    return n ?? a;
  };
  require.d(exports, {
    useChatService: function () {
      return l;
    },
    ChatServiceProvider: function () {
      return o;
    },
    ChatServiceContext: function () {
      return r;
    }
  });
}