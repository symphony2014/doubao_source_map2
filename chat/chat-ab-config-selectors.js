// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pM' to 'isLandingToMainCoco'
// - Renamed export 'tI' to 'useChatAbSelectors'
// - Renamed export 'ts' to 'hasNewConversationButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 561916
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = e => objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.landing_to_main_coco") === "1";
  let a = e => o(e) && !!objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.new_sidebar_new_conversation_button");
  let l = () => ({
    isLandingToMainCoco: chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t
      } = e;
      return o(t);
    }),
    excludeNewConversationButton: chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t
      } = e;
      return a(t);
    })
  });
  require.d(exports, {
    isLandingToMainCoco: function () {
      return o;
    },
    useChatAbSelectors: function () {
      return l;
    },
    hasNewConversationButton: function () {
      return a;
    }
  });
}