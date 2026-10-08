// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'threadHeaderSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 723525
         */
module.exports = function (module, exports, require) {
  var resourceLoaderFactory = require("resource-loader-factory") /*id: 412557*/;
  let r = Symbol("thread-multi-select-chat-header-plugin-v2");
  resourceLoaderFactory.loaderFactory.onDemand(() => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("ui-menu-primitives") /*id: 49031*/, require.e("ui-dropdown-toast") /*id: 33586*/, require.e("semi-ui-remove-scroll") /*id: 9898*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("conversation-management") /*id: 2177*/, require.e("ui-feature-components") /*id: 43927*/, require.e("chat-view-dropdowns") /*id: 26185*/, require.e("semi-design-ui-core") /*id: 18872*/, require.e("async-business-layout") /*id: 14925*/]).then(require.bind(require, "thread-multi-select-header-plugin") /*id: 557134*/).then(e => e.ThreadMultiSelectChatHeaderPlugin));
  require.d(exports, {
    threadHeaderSymbol: function () {
      return r;
    }
  });
}