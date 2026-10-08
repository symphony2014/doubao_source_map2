// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useLauncherSetting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 310833
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = () => {
    let {
      settingData: e
    } = chatStoreManager.useStoreSelector("launcherRawSettingStore");
    let [t, n] = reactCoreLibraryReexport.useState(!e);
    reactCoreLibraryReexport.useEffect(() => {
      n(!e);
    }, [e]);
    return {
      data: e,
      loading: t
    };
  };
  require.d(exports, {
    useLauncherSetting: function () {
      return o;
    }
  });
}