// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H6' to 'logPerformanceMetric'
// - Renamed export 'Zf' to 'getMemoryUsage'
// - Renamed export 'hC' to 'logMemoryUsage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 9774
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiPptMetricsConstants = require("ai-ppt-metrics-constants") /*id: 533090*/;
  function a() {
    try {
      let {
        jsHeapSizeLimit: t = -1,
        totalJSHeapSize: i = -1,
        usedJSHeapSize: r = -1
      } = performance?.memory || {};
      return {
        jsHeapSizeLimit: t,
        totalJSHeapSize: i,
        usedJSHeapSize: r
      };
    } catch {}
    return {
      jsHeapSizeLimit: -1,
      totalJSHeapSize: -1,
      usedJSHeapSize: -1
    };
  }
  function l(e, t) {
    let i = a();
    let l = {
      scene: e,
      ...a()
    };
    if (t) {
      l.diffTotalSize = i.totalJSHeapSize - t.totalJSHeapSize;
      l.diffUsedSize = i.usedJSHeapSize - t.usedJSHeapSize;
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: aiPptMetricsConstants.aiPptMemKey,
      meta: l
    });
  }
  function s(e, t, i) {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: aiPptMetricsConstants.aiPptPerfKey,
      meta: {
        scene: e,
        duration: t,
        ...i
      }
    });
  }
  require.d(exports, {
    logPerformanceMetric: function () {
      return s;
    },
    getMemoryUsage: function () {
      return a;
    },
    logMemoryUsage: function () {
      return l;
    }
  });
}