// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'UserInfoStatus'
// - Renamed export 'M' to 'getUserInfoStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 607389
         */
module.exports = function (module, exports, require) {
  var i;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  let s = false;
  let c = () => {
    if (s) {
      return;
    }
    let n = chatUserInfoActions.getUserInfo()?.user_id_str;
    safeObjectSetWrapper.safeObjectSet(window, "User.id", n);
    s = true;
  };
  (i = {})[i.NotFinished = 0] = "NotFinished";
  i[i.Finished = 1] = "Finished";
  let d = i;
  let u = () => userInfoStatusSelectors.selectUserInfoLoading() ? d.NotFinished : (c(), d.Finished);
  require.d(exports, {
    UserInfoStatus: function () {
      return d;
    },
    getUserInfoStatus: function () {
      return u;
    }
  });
}