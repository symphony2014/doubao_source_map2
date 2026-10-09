// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'ChatPluginLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 694881
         */
module.exports = function (module, exports, require) {
  var chatPluginLoaderComponent = require("chat-plugin-loader-component") /*id: 907735*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = () => reactJsxRuntimeCoreReexport.jsx(chatPluginLoaderComponent.ChatPluginLoader, {});
  require.d(exports, {
    ChatPluginLoader: function () {
      return r;
    }
  });
}