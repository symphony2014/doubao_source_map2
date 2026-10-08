// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'trackRegBanError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 214198
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  let a = e => {
    let n = {
      [errorHandlingUtilities.ErrorCode.DOUBAO_NON_CN_MOBILE_REGISTRY_BAN]: "not_cn_mobile_login",
      [errorHandlingUtilities.ErrorCode.DOUBAO_APPLE_REGISTRY_BAN]: "not_cn_apple_login"
    };
    if ((e == null ? undefined : e.code) && [errorHandlingUtilities.ErrorCode.DOUBAO_NON_CN_MOBILE_REGISTRY_BAN, errorHandlingUtilities.ErrorCode.DOUBAO_APPLE_REGISTRY_BAN].includes(e.code)) {
      teaAnalyticsEventTracker.trackEvent("forbid_show", {
        forbid_type: n[e.code]
      }, {
        key: "",
        withSlardar: true
      });
    }
  };
  require.d(exports, {
    trackRegBanError: function () {
      return a;
    }
  });
}