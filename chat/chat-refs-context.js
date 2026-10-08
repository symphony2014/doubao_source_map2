// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useChatRefs'
// - Renamed export 'x' to 'ChatRefsContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 184894
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
  let l = {
    scrollRef: reactCoreLibraryReexport.createRef(),
    chatInputRef: reactCoreLibraryReexport.createRef(),
    chatViewRef: reactCoreLibraryReexport.createRef(),
    chatDropTargetRef: reactCoreLibraryReexport.createRef(),
    chatPageTargetRef: reactCoreLibraryReexport.createRef()
  };
  require.d(exports, {
    useChatRefs: function () {
      return a;
    },
    ChatRefsContext: function () {
      return o;
    }
  });
}