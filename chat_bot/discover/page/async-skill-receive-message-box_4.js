// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useSkillReceiveMessageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 767340
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLauncherSetting = require("use-launcher-setting") /*id: 310833*/;
  var getUserCountryStorage = require("get-user-country-storage") /*id: 370809*/;
  let a = () => {
    var e;
    var t;
    let [n, a] = reactCoreLibraryReexport.useState(false);
    let {
      data: l
    } = useLauncherSetting.useLauncherSetting();
    if (l != null && (e = l.ab_config) !== null && e !== undefined) {
      e.create_bots;
    }
    getUserCountryStorage.getUserCountry();
    reactCoreLibraryReexport.useEffect(() => {}, []);
    return n;
  };
  require.d(exports, {
    useSkillReceiveMessageBox: function () {
      return a;
    }
  });
}