// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 994090
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = (e, t, n) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "flow-chat-preload-content-error",
      meta: {
        origin: t,
        logid: n
      }
    });
    apiServicesCollection.SamanthaApiService.GetSkillList().then(t => {
      e(t);
    });
  };
  require.d(exports, {
    fix: function () {
      return o;
    }
  });
}