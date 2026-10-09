// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'useContentTypeWhitelist'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 205062
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = e => {
    if (!chatMessageShareSelectStore.chatMessageShareSelectStore.getState().contentTypeWhiteListInitialized && typeof window == "object") {
      if (e) {
        if (e && !deepEqualUtil_1.deepEqual(chatMessageShareSelectStore.chatMessageShareSelectStore.getState().contentTypeWhiteList, e)) {
          chatMessageShareSelectStore.chatMessageShareSelectStore.getState().setContentTypeWhiteList(e);
        }
      } else {
        chatMessageShareSelectStore.chatMessageShareSelectStore.getState().setContentTypeWhiteList(chatMessageShareSelectStore.chatMessageShareSelectStore.getState().contentTypeWhiteList);
        loggerServiceCore.defaultLogger.persist.warning({
          message: "[thread-share] failed to fetch supported content types, use default instead"
        });
      }
    }
  };
  let d = () => {
    let e = chatFgStoreHooks.getSourceValue("share_config.supported_content_types", {
      defaultValue: undefined,
      source: chatStorageKeys.chatStorageKeys.setting
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        c(e);
      }
    }, [e]);
  };
  require.d(exports, {
    useContentTypeWhitelist: function () {
      return d;
    }
  });
}