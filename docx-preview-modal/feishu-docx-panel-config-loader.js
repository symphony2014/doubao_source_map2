// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'loadFeishuTempConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 105384
         */
module.exports = function (module, exports, require) {
  var feishuTempConfigLoader = require("feishu-temp-config-loader") /*id: 767490*/;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  function a() {
    window.parent;
    window;
    let t = feishuAccessTokenService.getFeishuAccessTokenService();
    if (!t) {
      return Promise.resolve({});
    }
    let n = chatUserInfoActions.getUserInfo()?.user_id;
    let a = n ? {
      indexedDB: window.indexedDB,
      userId: n
    } : undefined;
    return feishuTempConfigLoader.getFeishuTempConfig({
      getAuthHeaders: t.getAuthHeadersAsync.bind(t),
      indexedDB: a
    });
  }
  require.d(exports, {
    loadFeishuTempConfig: function () {
      return a;
    }
  });
}