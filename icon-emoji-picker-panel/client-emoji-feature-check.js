// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Km' to 'checkEmojiSearchFeature'
// - Renamed export 'Po' to 'iconPanelFeature'
// - Renamed export 'on' to 'getEmojiCategoryLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 527329
         */
module.exports = function (module, exports, require) {
  var clientFeatureCheck_1 = require("client-feature-check_1") /*id: 768765*/;
  let f = clientFeatureCheck_1.getClientFeature("ccm.icon.icon_panel");
  let s = () => {
    return clientFeatureCheck_1.getClientFeature("ccm.header.emojis_chinese_search", (window == null ? undefined : window.User)?.nativeFeatures || (window == null ? undefined : window.User)?.fgConfig || null);
  };
  function o(e) {
    return {
      search: e("LarkCCM_CM_CustomIcon_Search_Placeholder"),
      categories: {
        frequent: e("LarkCCM_Docs_Icon_Recents_Title"),
        people: e("LarkCCM_CM_CustomIcon_Emoticons_Tab"),
        nature: e("LarkCCM_CM_CustomIcon_Animals_Tab"),
        foods: e("LarkCCM_CM_CustomIcon_Food_Tab"),
        activity: e("LarkCCM_CM_CustomIcon_Activities_Tab"),
        places: e("LarkCCM_CM_CustomIcon_Place_Tab"),
        objects: e("LarkCCM_CM_CustomIcon_Objects_Tab"),
        symbols: e("LarkCCM_CM_CustomIcon_Symbols_Tab")
      }
    };
  }
  require.d(exports, {
    checkEmojiSearchFeature: function () {
      return s;
    },
    iconPanelFeature: function () {
      return f;
    },
    getEmojiCategoryLabels: function () {
      return o;
    }
  });
}