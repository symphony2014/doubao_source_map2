// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'securityLogoutHandler'
// - Resolved require(715745) to 'security-logout-handler'
// - Updated imported property 'kR' to 'logoutAndRedirect' (module 715745)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28091.4a8a1381.js
         * chunkId: 28091
         * moduleId: 367590
         */
module.exports = function (module, exports, require) {
  var securityLogoutHandler = require("security-logout-handler") /*id: 715745*/;
  require.d(exports, {
    performLogoutWithRedirect: function () {
      return securityLogoutHandler.logoutAndRedirect;
    }
  });
}