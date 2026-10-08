// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'checkLogin'
// - Renamed export 'd' to 'getLoginOrder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 586944
         */
module.exports = function (module, exports, require) {
  var chatRuntimeSdkKeys = require("chat-runtime-sdk-keys") /*id: 165630*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let s = async () => {
    if (!window.accountInfoPromise) {
      return flowAccountModule.getFlowAccount().passportApi.checkLogin();
    }
    try {
      let e = await window.accountInfoPromise;
      delete window.accountInfoPromise;
      if (e.message === "success") {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "check_login_preload_success"
        });
        return e.data;
      }
      throw e.data;
    } catch (e) {
      if (e.error_code !== 13) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "check_login_preload_fail",
          meta: {
            code: e.error_code
          }
        });
        return flowAccountModule.getFlowAccount().passportApi.checkLogin();
      }
      throw errorHandlingUtilities.ApiError.from(e);
    }
  };
  let l = typeof window == "object" && typeof window[chatRuntimeSdkKeys.sdkPromiseKeys.Launch] == "object" ? window[chatRuntimeSdkKeys.sdkPromiseKeys.Launch] : undefined;
  let u = l ? async () => {
    let {
      data: e
    } = (await l) || {};
    let {
      login: t
    } = e || {};
    return (t == null ? undefined : t.order) || [];
  } : undefined;
  require.d(exports, {
    checkLogin: function () {
      return s;
    },
    getLoginOrder: function () {
      return u;
    }
  });
}