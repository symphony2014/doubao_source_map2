// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'o' to 'ocpcEventReportingService'
// - Resolved require(696329) to 'ocpc-event-reporting-service'
// - Renamed variable 's' to 'i18nLanguageInit'
// - Resolved require(385211) to 'i18n-language-init'
// - Renamed variable 'l' to 'flowLoginStorageFlag'
// - Resolved require(966634) to 'flow-login-storage-flag'
// - Renamed variable 'a' to 'chatRuntimeLogoutHandler'
// - Resolved require(642104) to 'chat-runtime-logout-handler'
// - Renamed variable 'c' to 'sessionHeartbeatManager'
// - Resolved require(232579) to 'session-heartbeat-manager'
// - Renamed variable 'u' to 'userProfileServiceActions'
// - Resolved require(210590) to 'user-profile-service-actions'
// - Renamed variable 'd' to 'chromeExtensionMessageSender'
// - Resolved require(875713) to 'chrome-extension-message-sender'
// - Renamed variable 'p' to 'flowAccountModule'
// - Resolved require(898004) to 'flow-account-module'
// - Renamed variable '_' to 'teaAnalyticsInitializer'
// - Resolved require(258354) to 'tea-analytics-initializer'
// - Renamed variable 'v' to 'teaIdentityManager'
// - Resolved require(929669) to 'tea-identity-manager'
// - Renamed variable 'h' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Renamed variable 'm' to 'flowAccountService'
// - Resolved require(317959) to 'flow-account-service'
// - Renamed variable 'f' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'g' to 'slardarMonitorManager'
// - Resolved require(309069) to 'slardar-monitor-manager'
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'J6' to 'watchLoginFlagChange' (module 966634)
// - Updated imported property 'vd' to 'setLoginFlag' (module 966634)
// - Updated imported property 'N6' to 'removeLoginFlag' (module 966634)
// - Updated imported property 'b' to 'setupLogoutHandler' (module 642104)
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'Xx' to 'checkLogin' (module 317959)
// - Updated imported property 'Y7' to 'getTeaInstance' (module 258354)
// - Updated imported property 'Hl' to 'setLoginStatus' (module 929669)
// - Updated imported property 'k' to 'slardarManager' (module 309069)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'y' to 'checkLanguageChanged' (module 385211)
// - Updated imported property 'G' to 'initSessionHeartbeat' (module 232579)
// - Updated imported property 'SM' to 'getUserProfile' (module 210590)
// - Updated imported property 'M' to 'updateAuthInfo' (module 875713)
// - Updated imported property 'P5' to 'reportOcpcEvent' (module 696329)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 506574
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var ocpcEventReportingService = require("ocpc-event-reporting-service") /*id: 696329*/;
  var i18nLanguageInit = require("i18n-language-init") /*id: 385211*/;
  var flowLoginStorageFlag = require("flow-login-storage-flag") /*id: 966634*/;
  var chatRuntimeLogoutHandler = require("chat-runtime-logout-handler") /*id: 642104*/;
  var sessionHeartbeatManager = require("session-heartbeat-manager") /*id: 232579*/;
  var userProfileServiceActions = require("user-profile-service-actions") /*id: 210590*/;
  var chromeExtensionMessageSender = require("chrome-extension-message-sender") /*id: 875713*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var teaAnalyticsInitializer = require("tea-analytics-initializer") /*id: 258354*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var flowAccountService = require("flow-account-service") /*id: 317959*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var slardarMonitorManager = require("slardar-monitor-manager") /*id: 309069*/;
  let y = () => {
    reactCoreLibraryReexport.useEffect(() => {
      let e = emptyExportFunction.emptyFunction;
      let t = () => {
        e = flowLoginStorageFlag.watchLoginFlagChange();
        chatRuntimeLogoutHandler.setupLogoutHandler();
        chatErrorEventManager.chatEventEmitter.start();
      };
      flowAccountService.checkLogin({
        onLogin(e) {
          let n = teaAnalyticsInitializer.getTeaInstance();
          if (n) {
            teaIdentityManager.setLoginStatus(n, e.user_id_str, false);
          }
          slardarMonitorManager.slardarManager.addContexts({
            account_user_id: e.user_id_str,
            user_is_login: "1"
          });
          flowLoginStorageFlag.setLoginFlag();
          storageWrapperWithFallback.LocalStorageWrapper.setItem("for_ban_appeal_sec_user_id", e.sec_user_id);
          i18nLanguageInit.checkLanguageChanged();
          sessionHeartbeatManager.initSessionHeartbeat();
          userProfileServiceActions.getUserProfile(e.user_id_str);
          chromeExtensionMessageSender.updateAuthInfo(true);
          ocpcEventReportingService.reportOcpcEvent("login");
          t();
        },
        onUnlogin() {
          chatErrorEventManager.chatEventEmitter.clear();
          t();
          flowLoginStorageFlag.removeLoginFlag();
        },
        onError() {
          var e;
          if ((e = flowAccountModule.getFlowAccount().passportApi) !== null && e !== undefined) {
            e.triggerAfterLogout();
          }
          t();
        }
      });
      return () => {
        if (e != null) {
          e();
        }
      };
    }, []);
  };
  require.r(exports);
  require.d(exports, {
    useCheckLogin: function () {
      return y;
    }
  });
}