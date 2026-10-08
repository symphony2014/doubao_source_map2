// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F3' to 'runAfterAppInit'
// - Renamed export 'NO' to 'lazyInitRetry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 266268
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var eventEmitterInstance = require("event-emitter-instance") /*id: 842485*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var appInitEventStore = require("app-init-event-store") /*id: 328418*/;
  let l = () => {
    if (typeof window == "undefined") {
      return false;
    }
    let {
      appRouteFilterFn: e
    } = appInitEventStore.useAppInitStore.getState();
    return !!e && e(location.pathname);
  };
  let s = e => {
    let t;
    return new Promise(n => {
      if (!l()) {
        return n(true);
      }
      if (appInitEventStore.useAppInitStore.getState().appInitEventEmitted) {
        n(true);
        return;
      }
      function r() {
        clearTimeout(t);
        n(true);
      }
      t = setTimeout(() => {
        eventEmitterInstance.eventEmitter.off("app.init", r);
        n(true);
      }, e);
      eventEmitterInstance.eventEmitter.once("app.init", r);
    });
  };
  let u = function (e, t = 10000) {
    return reactCoreLibraryReexport.lazy(async () => {
      await s(t);
      return asyncRetryUtils.retryWithFallback({
        fn: e
      });
    });
  };
  let c = async function (e, t = 10000) {
    await s(t);
    e();
  };
  require.d(exports, {
    runAfterAppInit: function () {
      return c;
    },
    lazyInitRetry: function () {
      return u;
    }
  });
}