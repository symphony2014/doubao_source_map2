// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 's' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'l' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'u' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Renamed variable 'd' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'p' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'v' to 'reactErrorBoundary'
// - Resolved require(528804) to 'react-error-boundary'
// - Renamed variable 'm' to 'flowAccountModule'
// - Resolved require(898004) to 'flow-account-module'
// - Updated imported property 'cO' to 'useErrorBoundary' (module 528804)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'FN' to 'defaultToast' (module 697541)
// - Updated imported property 'Gc' to 'routeWaitlist' (module 323118)
// - Updated imported property 'cf' to 'chatProtocolLoader' (module 232752)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Qd' to 'SafetyApiService' (module 147875)
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'w' to 'chatErrorCodes' (module 211398)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 757182
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  (i = {}).NoAccess = "no access";
  i.NetworkError = "network error";
  i.RegionRestricted = "region restricted";
  i.DoubaoRegionBan = "doubao region ban";
  i.Default = "Default";
  let h = i;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let f = () => {
    let {
      showBoundary: e
    } = reactErrorBoundary.useErrorBoundary();
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = useNavigateRuntimeResolver.useNavigateResolver();
    let i = debounceUtil_1_1.debounce((e, t) => {
      samanthaToastFactory.defaultToast.warning({
        content: e,
        showClose: false
      });
      flowAccountModule.getFlowAccount().passportApi.logout({
        reason: "limited",
        trackMeta: {
          msg: e,
          logId: t
        }
      });
    }, 5000, {
      leading: true
    });
    let f = () => {
      samanthaToastFactory.defaultToast.error({
        content: t("log_in_internet_error"),
        showClose: false
      });
    };
    let g = async (e, t) => {
      await flowAccountModule.getFlowAccount().passportApi.logout({
        reason: "unauthorized",
        trackMeta: {
          msg: e,
          logId: t
        }
      });
    };
    let y = (t, n) => {
      e(Error(h.NoAccess, {
        cause: {
          msg: t,
          logId: n
        }
      }));
    };
    let b = () => {
      n(chatRouteConstants.routeWaitlist);
    };
    let S = debounceUtil_1_1.debounce(async (e, t) => {
      let n = await chatPluginIocManager.chatProtocolLoader("AliceChatSocket");
      if (n != null) {
        n.drop();
      }
      if (e) {
        samanthaToastFactory.defaultToast.warning({
          content: e,
          showClose: false
        });
      }
      loggerServiceCore.defaultLogger.persist.log({
        message: "user banned [banned]",
        meta: {
          msg: e
        }
      });
      let i = null;
      apiServicesCollection.SafetyApiService.GetBanInfoRequest().then(e => {
        i = (e == null ? undefined : e.ban_info?.content) || null;
        return e;
      }).finally(() => {
        flowAccountModule.getFlowAccount().passportApi.logout({
          state: {
            showAppeal: true,
            appealData: i
          },
          reason: "user_banned",
          trackMeta: {
            msg: e,
            logId: t
          }
        });
      });
    }, 5000, {
      leading: true
    });
    let k = debounceUtil_1_1.debounce(async (e, t) => {
      let n = await chatPluginIocManager.chatProtocolLoader("AliceChatSocket");
      if (n != null) {
        n.drop();
      }
      samanthaToastFactory.defaultToast.warning(e);
      loggerServiceCore.defaultLogger.persist.log({
        message: "user banned [released、appealing、failed]",
        meta: {
          msg: e
        }
      });
      flowAccountModule.getFlowAccount().passportApi.logout({
        reason: "user_banned_other",
        trackMeta: {
          msg: e,
          logId: t
        }
      });
    }, 5000, {
      leading: true
    });
    let T = () => {
      chatErrorEventManager.chatEventEmitter.stop();
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.NETWORK_ERROR, f);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.UNAUTHORIZED, g);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.NOACCESS, y);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.SHARK_BLOCK, i);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.NEED_TO_WAIT, b);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.USER_BANNED, S);
      chatErrorEventManager.chatEventEmitter.on(chatErrorEventManager.chatErrorCodes.USER_BANNED_OTHER, k);
      chatErrorEventManager.chatEventEmitter.start();
    };
    let w = () => {
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.NETWORK_ERROR, f);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.UNAUTHORIZED, g);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.NOACCESS, y);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.SHARK_BLOCK, i);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.NEED_TO_WAIT, b);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.USER_BANNED, S);
      chatErrorEventManager.chatEventEmitter.off(chatErrorEventManager.chatErrorCodes.USER_BANNED_OTHER, k);
    };
    reactCoreLibraryReexport.useEffect(() => {
      T();
      return () => {
        w();
      };
    }, []);
  };
  require.r(exports);
  require.d(exports, {
    useInitApiErrorEvent: function () {
      return f;
    }
  });
}