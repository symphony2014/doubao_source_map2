// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'canUploadImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 795291
         */
module.exports = function (module, exports, require) {
  var useLauncherSetting = require("use-launcher-setting") /*id: 310833*/;
  function r() {
    let {
      data: e
    } = useLauncherSetting.useLauncherSetting();
    let {
      disable_upload_image: t = false
    } = e || {};
    return !t;
  }
  require.d(exports, {
    canUploadImage: function () {
      return r;
    }
  });
}