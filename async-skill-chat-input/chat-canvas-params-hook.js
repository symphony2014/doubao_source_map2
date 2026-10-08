// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'useCanvasParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 818792
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let o = () => {
    let [e, t] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
        return t((e == null ? undefined : e.getCanvasTeaParams()) ?? {});
      });
    }, []);
    if (e.canvas_type) {
      return {
        canvas_type: e.canvas_type,
        canvas_sub_type: e.canvas_sub_type
      };
    } else {
      return {};
    }
  };
  require.d(exports, {
    useCanvasParams: function () {
      return o;
    }
  });
}