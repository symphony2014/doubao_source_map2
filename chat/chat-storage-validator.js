// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'validateChatStorage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 776801
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = e => {
    let {
      sourceVal: t,
      keyVal: n,
      sourceName: a,
      keyName: l
    } = e;
    if (!isEmptyUtil.isEmpty(t) && n === undefined && a !== chatStorageKeys.chatStorageKeys.debugStorage) {
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "l1_arch_fg_empty_value",
        meta: {
          fg_source: a,
          fg_key: l
        }
      });
    }
  };
  require.d(exports, {
    validateChatStorage: function () {
      return a;
    }
  });
}