// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useCleanScroll'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 791817
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  let o = function ({
    enabled: e = true
  } = {}) {
    let {
      scrollRef: t
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    return {
      cleanScrollToRow: reactCoreLibraryReexport.useCallback(() => {
        var n;
        if (!e) {
          return;
        }
        let i = t.current;
        if (i != null && (n = i.cleanScrollToRow) !== null && n !== undefined) {
          n.call(i);
        }
      }, [e, t])
    };
  };
  require.d(exports, {
    useCleanScroll: function () {
      return o;
    }
  });
}