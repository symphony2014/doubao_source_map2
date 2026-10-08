// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useMessageCopy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 545747
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var messageCopyHandler = require("message-copy-handler") /*id: 541976*/;
  let l = e => {
    let {
      messageId: t
    } = e;
    let n = messageCopyHandler.findMessageElement(t);
    let l = useLatestCallbackHook_1.useLatestCallback(e => {
      messageCopyHandler.handleClipboardCopy(e);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        n.oncopy = l;
      }
    }, [n, l]);
  };
  require.d(exports, {
    useMessageCopy: function () {
      return l;
    }
  });
}