// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useAiSpaceRevertCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 376316
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var taskStatusConstants_2 = require("task-status-constants_2") /*id: 654066*/;
  let c = () => {
    let [e, t] = reactCoreLibraryReexport.useState();
    let {
      value: i,
      loading: c
    } = chatFgStoreHooks.useSourceKey("ab_config.ab_results.aispace_revert", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.setting
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = userInfoStatusSelectors.subscribeToUserInfoStatus(e => {
        if (e === taskStatusConstants_2.TaskStatus.Success) {
          t(true);
        } else if (e === taskStatusConstants_2.TaskStatus.Failed) {
          t(false);
        }
      }, {
        fireImmediately: true
      });
      return () => {
        e();
      };
    }, []);
    return e !== false && (isUndefinedCheck.isUndefined(e) ? undefined : c ? undefined : i !== "0");
  };
  require.d(exports, {
    useAiSpaceRevertCheck: function () {
      return c;
    }
  });
}