// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'analyticsEventLogger'
// - Resolved require(618475) to 'analytics-event-logger'
// - Updated imported property 'Oi' to 'logInfo' (module 618475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67957.49499116.js
         * chunkId: 67957
         * moduleId: 558845
         */
module.exports = function (module, exports, require) {
  var analyticsEventLogger = require("analytics-event-logger") /*id: 618475*/;
  let s = [5, 10, 20];
  let o = analyticsEventLogger.logInfo("ReportRetryNumber");
  let _ = new class {
    constructor() {
      this.reportNumber = 0;
    }
    run() {
      if (this.reportNumber) {
        this.reportNumber++;
        return;
      }
      this.reportNumber++;
      s.forEach((r, e) => {
        setTimeout(() => {
          o(`${r}s`, {
            number_param_1: this.reportNumber
          });
          if (e === s.length - 1) {
            this.reportNumber = 0;
          }
        }, r * 1000);
      });
    }
  }();
  require.d(exports, {
    reportRetryNumber: function () {
      return _;
    }
  });
}