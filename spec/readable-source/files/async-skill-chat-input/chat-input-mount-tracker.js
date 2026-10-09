// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'useChatInputMount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 111647
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  let a = onceFunctionFactory.createOnce(() => {
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint("chat_input_first_render");
  });
  let s = () => {
    a();
    reactCoreLibraryReexport.useEffect(() => {
      performanceStoreHook.usePerformanceStore.getState().addDurationPoint("chat_input_mount");
    }, []);
  };
  require.d(exports, {
    useChatInputMount: function () {
      return s;
    }
  });
}