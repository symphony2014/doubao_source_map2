// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'o' to 'useLatestRef_1'
// - Resolved require(335903) to 'use-latest-ref_1'
// - Renamed variable 'i' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'useApiErrorHandler'
// - Resolved require(757182) to 'use-api-error-handler'
// - Renamed variable 'l' to 'authLoginCheckHook'
// - Resolved require(659344) to 'auth-login-check-hook'
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'g9' to 'routeChatMain' (module 323118)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'Zd' to 'routeChatHome' (module 323118)
// - Updated imported property 'Z' to 'useLatestRef' (module 335903)
// - Updated imported property 'm' to 'useLoginCheck' (module 659344)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 827962
         */
module.exports = function (module, exports, require) {
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useApiErrorHandler = require("use-api-error-handler") /*id: 757182*/;
  var authLoginCheckHook = require("auth-login-check-hook") /*id: 659344*/;
  exports.default = e => {
    let {
      requireAuthConfig: t,
      authState: n,
      setAuthState: u,
      exemptionNetworkErrorBoundary: c = false
    } = e;
    let {
      pathname: d,
      search: f,
      hash: _
    } = useLocationWrapper.useLocationWrapper();
    let {
      successNavigatePath: p = `${d === chatRouteConstants.routeChatMain ? chatRouteConstants.routeChatRoot : d}${f}${_}`,
      loginRoute: g = chatRouteConstants.routeChatHome,
      authFailedAction: w
    } = t;
    let m = useLatestRef_1.useLatestRef(n);
    useApiErrorHandler.useInitApiErrorEvent();
    authLoginCheckHook.useLoginCheck({
      navigatePath: p,
      loginRoute: g,
      authFailedAction: w,
      getAuthState: () => m.current,
      onAuthUpdate: e => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "auth_state_change",
          meta: {
            authState: e
          }
        });
        u(e);
      },
      exemptionNetworkErrorBoundary: c
    });
    return null;
  };
  require.r(exports);
}