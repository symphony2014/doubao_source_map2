// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PX' to 'useChatGuidanceConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 811136
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatGuidanceStoreSelectors = require("chat-guidance-store-selectors") /*id: 970651*/;
  let a = () => {
    var t;
    let n = (t = chatGuidanceStoreSelectors.useChatLayoutLoaderData()) === null || t === undefined ? undefined : t.userSetting?.data;
    let [a, l, s, u, c] = [chatLauncherConfigHooks.getGuidanceGenericInputMode(n), chatLauncherConfigHooks.getGuidanceSkillActiveInputMode(n), objectPathGetDefault.getObjectPathDefault(n, "ab_config.ab_results.guidance_page_layout_mode"), objectPathGetDefault.getObjectPathDefault(n, "ab_config.ab_results.input_min_rows"), chatLauncherConfigHooks.getInputAggregateList(n)];
    return {
      guidanceGenericInputMode: a,
      guidanceSkillActiveInputMode: l,
      guidancePageLayoutMode: s,
      inputMinRows: u,
      inputAggregateList: c
    };
  };
  require.d(exports, {
    useChatGuidanceConfig: function () {
      return a;
    }
  });
}