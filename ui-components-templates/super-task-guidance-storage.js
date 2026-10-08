// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k1' to 'guidanceI18nKeys'
// - Renamed export 'cy' to 'setGuidanceViewShown'
// - Renamed export 'Pc' to 'checkGuidanceViewShown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 83498
         */
module.exports = function (module, exports, require) {
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  let a = "super-task-guidance-view";
  let r = {
    headerKey: "superAgent_firstMeet_intro_header",
    introKey: "superAgent_firstMeet_intro_desc",
    privacyKey: "superAgent_firstMeet_intro_privacyNotice_web"
  };
  let s = () => Promise.resolve(!!storageWrapperWithFallback.LocalStorageWrapper.getItem(a) || superTaskStore.getSuperTaskStore().getState().guidanceViewShown);
  let c = e => {
    storageWrapperWithFallback.LocalStorageWrapper.setItem(a, "1");
    superTaskStore.getSuperTaskStore().setState({
      guidanceViewShown: true
    });
    if (e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-guidance-set-storage",
        message: "set web storage success",
        meta: {
          scene: "web",
          origin: location.origin
        }
      });
    }
  };
  require.d(exports, {
    guidanceI18nKeys: function () {
      return r;
    },
    setGuidanceViewShown: function () {
      return c;
    },
    checkGuidanceViewShown: function () {
      return s;
    }
  });
}