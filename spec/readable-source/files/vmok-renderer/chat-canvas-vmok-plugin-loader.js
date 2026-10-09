// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hj' to 'useChatCanvasVmokPlugin'
// - Renamed export 'Qy' to 'chatCanvasVmokPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 803021
         */
module.exports = function (module, exports, require) {
  let i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  let l = chatPluginIocManager.asyncPluginLoader("chatCanvasVmokPlugin");
  i = "chatCanvasVmokPlugin";
  let a = e => {
    let [t, n] = reactCoreLibraryReexport.useState(true);
    let {
      plugin: l
    } = chatPluginIocManager.syncPluginLoader(i, e);
    return {
      plugin: l,
      loading: t,
      updateLoading: e => {
        n(e);
      }
    };
  };
  require.d(exports, {
    useChatCanvasVmokPlugin: function () {
      return a;
    },
    chatCanvasVmokPlugin: function () {
      return l;
    }
  });
}