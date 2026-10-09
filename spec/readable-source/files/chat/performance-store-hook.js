// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePerformanceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 299680
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  let l = (e, t) => ({
    duration: {},
    messageListPerformance: {},
    markMessageListPerformance(t) {
      e(e => ({
        messageListPerformance: {
          [t]: performanceTimeUtil.getPerformanceNow(),
          ...e.messageListPerformance
        }
      }));
    },
    clearMessageListPerformance() {
      e(e => ({
        messageListPerformance: {}
      }));
    },
    addDurationPoint(t, n) {
      e(e => ({
        duration: {
          [t]: isNumberUtil.isNumber(n) ? n : performanceTimeUtil.getPerformanceNow(),
          ...e.duration
        }
      }));
    },
    addDurationPoints(t) {
      e(e => ({
        duration: {
          ...Object.fromEntries(Object.entries(t).map(e => {
            let [t, n] = e;
            return [t, isNumberUtil.isNumber(n) ? n : performanceTimeUtil.getPerformanceNow()];
          })),
          ...e.duration
        }
      }));
    },
    error: (t, n) => {
      e({
        reason: t,
        innerError: n
      });
    }
  });
  let s = (() => {
    let e = reduxDevtoolsPersistIntegration.enhanceSubscribe(l);
    return reactStoreHookFactory.createStoreHook()(e);
  })();
  require.d(exports, {
    usePerformanceStore: function () {
      return s;
    }
  });
}