// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useThemeMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 841739
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = () => {
    let [e, l] = reactCoreLibraryReexport.useState(browserThemeManager.getThemeMode());
    reactCoreLibraryReexport.useEffect(() => browserThemeManager.registerThemeCallback(() => l(browserThemeManager.getThemeMode())), []);
    return e;
  };
  require.d(exports, {
    useThemeMode: function () {
      return i;
    }
  });
}