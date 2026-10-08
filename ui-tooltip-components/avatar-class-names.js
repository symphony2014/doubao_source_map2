// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cr' to 'useAvatarClass'
// - Renamed export 'Tg' to 'avatarTypeKey'
// - Renamed export 'bz' to 'useAvatarGroup'
// - Renamed export 'tr' to 'getAvatarType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 718831
         */
module.exports = function (module, exports, require) {
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var r = "UD_AVATAR";
  function i() {
    return uiConfigContextHooks.useClassName("avatar");
  }
  function u() {
    return uiConfigContextHooks.useClassName("avatar-group");
  }
  function a(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.type?.[r];
    }
  }
  require.d(exports, {
    useAvatarClass: function () {
      return i;
    },
    avatarTypeKey: function () {
      return r;
    },
    useAvatarGroup: function () {
      return u;
    },
    getAvatarType: function () {
      return a;
    }
  });
}