// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'isWorkspaceMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 799020
         */
module.exports = function (module, exports, require) {
  var workspaceModeType = require("workspace-mode-type") /*id: 569606*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  let r = () => {
    return chatUserInfoActions.getUserInfo()?.passport_enterprise_user_type === workspaceModeType.WorkModeType.Workspace;
  };
  require.d(exports, {
    isWorkspaceMode: function () {
      return r;
    }
  });
}