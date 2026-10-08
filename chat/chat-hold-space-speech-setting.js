// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getHoldSpaceConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 575180
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = e => objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.input_hold_space_to_speech") === "1";
  let a = () => ({
    holdSpaceToSpeech: chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t
      } = e;
      return o(t);
    })
  });
  require.d(exports, {
    getHoldSpaceConfig: function () {
      return a;
    }
  });
}