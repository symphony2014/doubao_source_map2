// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'useChatInputInit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 569035
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  let l = e => {
    let t = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      chatEventEmitter.chatEmitter.emit("chat.chatInput.init");
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        setTimeout(t);
      }
    }, [e, t]);
  };
  require.d(exports, {
    useChatInputInit: function () {
      return l;
    }
  });
}