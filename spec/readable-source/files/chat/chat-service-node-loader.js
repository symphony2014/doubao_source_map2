// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'initMsgNodeLoaders'
// - Renamed export 'f' to 'loadChatService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 226315
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var referenceBlockTypes = require("reference-block-types") /*id: 499949*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  let s = () => {
    let {
      settingData: e
    } = chatStoreManager.getStore("launcherRawSettingStore").getState();
    return objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.enable_conv_page_perf") === "true";
  };
  let u = () => {
    if (s()) {
      chatIocServiceLoaderHook.loadServiceAsync("chatConversationService");
    }
  };
  let c = () => [{
    keys: ["block_type:10000", "block_type:10052", ...referenceBlockTypes.referenceBlockTypes],
    getter: chatPluginIocManager.sendMsgNodeLoader
  }, {
    keys: ["block_type:10000", "block_type:2074", "block_type:10030 | artifact_block.resource_type:3", "block_type:10040 | thinking_block.scene:0", "block_type:10050"],
    getter: chatPluginIocManager.receiveMsgNodeLoader
  }];
  let d = () => {
    for (let {
      keys: e,
      getter: t
    } of c()) {
      for (let n of e) {
        t(n);
      }
    }
  };
  require.d(exports, {
    initMsgNodeLoaders: function () {
      return d;
    },
    loadChatService: function () {
      return u;
    }
  });
}