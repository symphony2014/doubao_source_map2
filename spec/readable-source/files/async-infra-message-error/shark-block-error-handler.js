// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jV' to 'sharkBlockErrorHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 523955
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var securityLogoutHandler = require("security-logout-handler") /*id: 715745*/;
  let o = {
    toastMessage: "",
    showToastClose: false,
    logoutReason: "shark_block",
    trackingScene: "frontier",
    loginRoute: "/",
    shouldLogout: true
  };
  let a = {
    matcher: {
      matchError: e => {
        return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.COUNTRY_RESTRICTED || e.error_details?.error_code === chatErrorCodes.chatErrorCodes.SHARK_BLOCKED;
      }
    },
    handler: {
      async handleError(e, t) {
        let r = {
          ...o,
          ...t
        };
        if (r.shouldLogout) {
          let t = await securityLogoutHandler.logoutHandler({
            reason: r.logoutReason,
            trackMeta: {
              from: r.trackingScene,
              msg: e.error_details?.error_message
            },
            loginRoute: r.loginRoute,
            showToastWarning: true,
            toastMessage: r.toastMessage,
            showToastClose: r.showToastClose,
            trackingScene: r.trackingScene,
            shouldTrack: true
          });
          if (!t.success && t.error) {
            throw t.error;
          }
        }
      }
    },
    defaultConfig: {
      logoutReason: "shark_block",
      trackingScene: "frontier",
      loginRoute: "/",
      shouldLogout: true
    }
  };
  require.d(exports, {
    sharkBlockErrorHandler: function () {
      return a;
    }
  });
}