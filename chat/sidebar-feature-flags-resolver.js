// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'getSidebarFeatureFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 386007
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var routeLoaderDataResolver = require("route-loader-data-resolver") /*id: 131455*/;
  let l = () => {
    let e = routeLoaderDataResolver.useRouteLoaderData("chat_layout");
    let t = chatFgStoreHooks.getSourceValue("ab_config.ab_results.new_sidebar_ui", {
      source: chatStorageKeys.chatStorageKeys.setting
    });
    let n = objectPathGetDefault.getObjectPathDefault(e, "userSetting.data.ab_config.ab_results.new_sidebar_ui");
    let l = chatFgStoreHooks.getSourceValue("ab_config.ab_results.new_sidebar_new_conversation_button", {
      source: chatStorageKeys.chatStorageKeys.setting
    });
    let s = objectPathGetDefault.getObjectPathDefault(e, "userSetting.data.ab_config.ab_results.new_sidebar_new_conversation_button");
    let u = chatFgStoreHooks.getSourceValue("ab_config.ab_results.new_sidebar_bg", {
      source: chatStorageKeys.chatStorageKeys.setting
    });
    let c = n === "1" || t === "1";
    let d = s === "1" || l === "1";
    let h = s === "2" || l === "2";
    return {
      sidebarV2: c,
      sidebarV2NewConversationButtonV1: d,
      sidebarV2NewConversationButtonV2: h,
      newConversationWithMainCoco: c ? h : h || d,
      avatarInSidebar: c || true,
      newSidebarBg: c && u || ""
    };
  };
  require.d(exports, {
    getSidebarFeatureFlags: function () {
      return l;
    }
  });
}