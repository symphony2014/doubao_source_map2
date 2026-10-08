// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'createLoginChecker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 750478
         */
module.exports = function (module, exports, require) {
  var axiosIsErrorExport = require("axios-is-error-export") /*id: 390976*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  var sessionHeartbeatManager = require("session-heartbeat-manager") /*id: 232579*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let u = "checkLogin";
  let c = e => {
    let {
      navigate: t,
      onBeforeAuth: n,
      onError: c,
      onNetworkError: d,
      onPassportError: f,
      onUnknownError: _,
      checkLogin: p
    } = e;
    let g = () => {
      if (n != null) {
        n();
      }
      if (p) {
        return p();
      } else {
        return flowAccountModule.getFlowAccount().passportApi.checkLogin();
      }
    };
    let w = e => {
      let n = loggerServiceCore.defaultLogger.persist.createLoggerWith({
        ctx: {
          meta: {
            loginType: u
          },
          error: e
        }
      });
      if (axiosIsErrorExport.isAxiosError(e)) {
        n.error({
          eventName: "olympus_login_axios_network_error",
          error: e
        });
        d(e);
      } else if (errorUtilsAndEnums.isSysError(e)) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "olympus_login_age_gate_canceled_error",
          error: e
        });
        flowAccountModule.getFlowAccount().passportApi.logout({
          navigate: t,
          reason: "age_gate_cancel",
          trackMeta: {
            error: e
          }
        });
      } else if (errorUtilsAndEnums.isAppError(e)) {
        flowAccountModule.getFlowAccount().passportApi.logout({
          navigate: t,
          reason: "age_gate_close",
          trackMeta: {
            error: e
          }
        });
      } else if (errorHandlingUtilities.isApiError(e)) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "olympus_login_passport_error",
          error: e,
          meta: {
            code: e.code,
            message: e.message,
            loginType: u
          }
        });
        f(e);
      } else {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "olympus_login_unknown_error",
          error: e
        });
        _(e);
      }
    };
    return async () => {
      try {
        let e = await g();
        sessionHeartbeatManager.initSessionHeartbeat();
        if (!e) {
          throw Error("userInfo is undefined");
        }
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "olympus_login_success",
          meta: {
            loginType: u
          }
        });
        return {
          isSuccess: true,
          userInfo: e
        };
      } catch (e) {
        if (c != null) {
          c(e);
        }
        w(e);
        return {
          isSuccess: false,
          error: e instanceof Error ? e : Error(String(e))
        };
      }
    };
  };
  require.d(exports, {
    createLoginChecker: function () {
      return c;
    }
  });
}