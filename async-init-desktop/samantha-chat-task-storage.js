// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'saveChatTaskMap'
// - Renamed export 'X' to 'loadChatTaskMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 692465
         */
module.exports = function (module, exports, require) {
  var doubaoLegalUrls = require("doubao-legal-urls") /*id: 113045*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var indexeddbDataAccessWrapper = require("indexeddb-data-access-wrapper") /*id: 190352*/;
  let r = {
    dataBaseName: "samantha-web",
    transaction: "store",
    objectStore: "store",
    origin: doubaoLegalUrls.doubaoBaseUrl,
    key: "samantha-web-chat-samantha-chat-protocol-store"
  };
  let s = async e => {
    try {
      let t = JSON.stringify({
        state: {
          samanthaChatTaskMap: e
        },
        version: 1.5
      });
      await indexeddbDataAccessWrapper.setDataToIndexedDB(r, t);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "setTaskMapToDoubaoDomainIndexdDBFailed",
        error: e
      });
    }
  };
  let l = async () => {
    try {
      let t = await indexeddbDataAccessWrapper.getDataFromIndexedDB(r);
      if (t == null) {
        return undefined;
      } else {
        return t.state?.samanthaChatTaskMap;
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "getTaskMapFromDoubaoDomainIndexdDBFailed",
        error: e
      });
    }
  };
  require.d(exports, {
    saveChatTaskMap: function () {
      return s;
    },
    loadChatTaskMap: function () {
      return l;
    }
  });
}