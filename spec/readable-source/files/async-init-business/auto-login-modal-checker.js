// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'r' to 'chatLoginModalManager'
// - Resolved require(516605) to 'chat-login-modal-manager'
// - Renamed variable 'o' to 'trackingEventConstants'
// - Resolved require(402894) to 'tracking-event-constants'
// - Renamed variable 's' to 'initUriChecker'
// - Resolved require(755365) to 'init-uri-checker'
// - Updated imported property 'EL' to 'waitForUserInfoLoaded' (module 480327)
// - Updated imported property 'xY' to 'isUserInfoFailed' (module 480327)
// - Updated imported property '_' to 'checkUriFlag' (module 755365)
// - Updated imported property 'NK' to 'loginModalManager' (module 516605)
// - Updated imported property 'x' to 'trackingEvents' (module 402894)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 560720
         */
module.exports = function (module, exports, require) {
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var initUriChecker = require("init-uri-checker") /*id: 755365*/;
  let a = () => {
    userInfoStatusSelectors.waitForUserInfoLoaded().then(() => {
      let e = initUriChecker.checkUriFlag();
      let t = userInfoStatusSelectors.isUserInfoFailed();
      if (e && t) {
        chatLoginModalManager.loginModalManager().openLoginModal({
          trackInfo: {
            source: e ? trackingEventConstants.trackingEvents.OTHER : trackingEventConstants.trackingEvents.AUTO_OPEN
          }
        });
      }
    });
  };
  require.r(exports);
  require.d(exports, {
    checkAutoOpenLogin: function () {
      return a;
    }
  });
}