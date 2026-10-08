// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'useChatContext'
// - Renamed export 'p' to 'ChatContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 491849
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  let o = reactCoreLibraryReexport.createContext(null);
  let a = function (e = {}) {
    let {
      optionalProvider: t = false,
      overrideValueWithoutProvider: n
    } = e;
    let a = reactCoreLibraryReexport.useContext(o);
    return a || objectDefaultsUtil.defaults(n, l);
  };
  let l = {};
  require.d(exports, {
    useChatContext: function () {
      return a;
    },
    ChatContext: function () {
      return o;
    }
  });
}