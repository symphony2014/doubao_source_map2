// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useChatAbConfigSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 167077
         */
module.exports = function (module, exports, require) {
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatGuidanceStoreSelectors = require("chat-guidance-store-selectors") /*id: 970651*/;
  let o = () => {
    var t;
    let n = (t = chatGuidanceStoreSelectors.useChatLayoutLoaderData()) === null || t === undefined ? undefined : t.userSetting?.data;
    return {
      isLandingToMainCoco: chatAbConfigSelectors.isLandingToMainCoco(n),
      excludeNewConversationButton: chatAbConfigSelectors.hasNewConversationButton(n)
    };
  };
  require.d(exports, {
    useChatAbConfigSelector: function () {
      return o;
    }
  });
}