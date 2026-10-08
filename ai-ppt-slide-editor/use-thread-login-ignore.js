// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useIgnoreLogin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 246636
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  let a = () => {
    reactCoreLibraryReexport.useEffect(() => {
      if (location.pathname.startsWith("/thread/")) {
        feishuAccessTokenService.setIgnoreLoginFlag();
      }
    }, []);
  };
  require.d(exports, {
    useIgnoreLogin: function () {
      return a;
    }
  });
}