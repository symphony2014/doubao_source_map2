// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useChatAsrAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 131366
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var observableSafeGteFilter = require("observable-safe-gte-filter") /*id: 470010*/;
  var distinctUntilChangedOperator = require("distinct-until-changed-operator") /*id: 309760*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var asyncVolumeBarAnimationWrapper = require("async-volume-bar-animation-wrapper") /*id: 356610*/;
  var downgradeConfigStore = require("downgrade-config-store") /*id: 489677*/;
  var chatAsrServiceManager = require("chat-asr-service-manager") /*id: 773565*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  let y = debounceUtilWrapper.createDebounce(loggerServiceCore.defaultLogger.persist.log.bind(loggerServiceCore.defaultLogger.persist), 1000);
  let C = {
    wait: 500,
    leading: true,
    trailing: false
  };
  let k = (e, t) => {
    let {
      onAsrResultChange: n,
      onAsrStatusChange: a,
      onAsrVolumeChange: k,
      onStartAsr: E,
      onStopAsr: S,
      onClick: j,
      trackParams: R
    } = e;
    let I = i18nTranslationUtils.useTranslationWithFallback();
    let N = userInfoStatusSelectors.selectUserInfoFailed();
    let P = chatToastFactoryHook.useToastFactory();
    let D = reactCoreLibraryReexport.useCallback(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "asr_permission_denied"
      });
      teaAnalyticsEventTracker.trackEvent("click_microphone_permission_panel", {
        button_name: "disallow_all"
      });
      A(true);
    }, []);
    let T = useLatestCallbackHook_1.useLatestCallback(() => {
      teaAnalyticsEventTracker.trackEvent("click_microphone_permission_panel", {
        button_name: "allow_when_accessing_this_website"
      });
      teaAnalyticsEventTracker.trackEvent("message_editing", {
        edit_method: "audio",
        ...R
      });
    });
    let Z = reactCoreLibraryReexport.useCallback(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "asr_websocket_timeout"
      });
      P.warning(I("voice_input_time_limitation_toast"));
    }, []);
    let [M, $] = reactCoreLibraryReexport.useState(chatStatusConstants.ChatStatus.INIT);
    let [O, L] = reactCoreLibraryReexport.useState(0);
    let [V, A] = reactCoreLibraryReexport.useState(false);
    let F = reactCoreLibraryReexport.useRef();
    let B = reactCoreLibraryReexport.useRef();
    let H = reactCoreLibraryReexport.useRef();
    let W = reactCoreLibraryReexport.useMemo(() => ({
      voice_input_no_permission_alert_header: I("voice_input_no_permission_alert_header"),
      voice_input_no_permission_alert_description: I("voice_input_no_permission_alert_description", {
        brandname: I("brandName_doubao")
      }),
      voice_input_no_permission_alert_btn_ok: I("voice_input_no_permission_alert_btn_ok"),
      voice_input_no_permission_alert_guide: I("voice_input_no_permission_alert_guide")
    }), [I]);
    reactCoreLibraryReexport.useEffect(() => () => {
      J({
        reason: "interrupt"
      });
    }, []);
    let z = useLatestCallbackHook_1.useLatestCallback(() => M);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      startAsr: G,
      stopAsr: J,
      get asrStatus() {
        return z();
      }
    }));
    let U = async () => {
      let e = await chatAsrServiceManager.asrServiceManager.getAsrService();
      if (e) {
        B.current = e.result$.pipe(observableSafeGteFilter.createSafeGteFilter(1)).pipe(distinctUntilChangedOperator.distinctUntilChanged()).pipe(observableSafeFilter.createSafeFilter(e => !!e)).subscribe(e => {
          y({
            eventName: "asr_result_change",
            meta: {
              result_length: e.length
            }
          });
          if (n != null) {
            n(e);
          }
        });
        F.current = e.status$.pipe(observableSafeGteFilter.createSafeGteFilter(1)).pipe(distinctUntilChangedOperator.distinctUntilChanged()).subscribe(e => {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "asr_status_change",
            meta: {
              status: e
            }
          });
          if (a != null) {
            a(e);
          }
          $(e);
        });
        H.current = e.volume$.pipe(observableSafeGteFilter.createSafeGteFilter(1)).pipe(distinctUntilChangedOperator.distinctUntilChanged()).subscribe(e => {
          if (k != null) {
            k(e);
          }
          L(e);
        });
        e.on("permission.denied", D);
        e.on("permission.allowed", T);
        e.on("websocket.timeout", Z);
      }
    };
    let K = async () => {
      var e;
      var t;
      var n;
      let i = await chatAsrServiceManager.asrServiceManager.getAsrService();
      if (i) {
        if ((e = F.current) !== null && e !== undefined) {
          e.unsubscribe();
        }
        if ((t = B.current) !== null && t !== undefined) {
          t.unsubscribe();
        }
        if ((n = H.current) !== null && n !== undefined) {
          n.unsubscribe();
        }
        i.off("permission.denied", D);
        i.off("permission.allowed", T);
        i.off("websocket.timeout", Z);
      }
    };
    let X = () => M === chatStatusConstants.ChatStatus.RECORDING || M === chatStatusConstants.ChatStatus.PAUSED || M === chatStatusConstants.ChatStatus.LOADING;
    let G = async e => {
      $(chatStatusConstants.ChatStatus.LOADING);
      if (a != null) {
        a(chatStatusConstants.ChatStatus.LOADING);
      }
      let t = await chatAsrServiceManager.asrServiceManager.getAsrService();
      if (t) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "asr_start"
        });
        asyncVolumeBarAnimationWrapper.loadVolumeBarAnimation();
        if (E != null) {
          E(e);
        }
        U();
        t.startAsr();
      }
    };
    let J = useLatestCallbackHook_1.useLatestCallback(async e => {
      if (!X()) {
        return;
      }
      let t = await chatAsrServiceManager.asrServiceManager.getAsrService();
      if (t) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "asr_stop"
        });
        teaAnalyticsEventTracker.trackEvent("message_editing_end", {
          edit_method: "audio"
        });
        if (S != null) {
          S(e);
        }
        t.stopAsr();
        K();
        $(chatStatusConstants.ChatStatus.DESTROYED);
        if (a != null) {
          a(chatStatusConstants.ChatStatus.DESTROYED);
        }
      }
    });
    let q = () => {
      let {
        enable: e,
        toastContent: t
      } = downgradeConfigStore.getDowngradeConfig("asr");
      if (e && t) {
        dbxSonnerToasterWrapper.dbxToastAPI.error(t);
      }
      return e;
    };
    let {
      run: Y
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      if (q()) {
        return;
      }
      if (j != null) {
        j(e);
      }
      let t = e.isDefaultPrevented();
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "asr_button_click",
        meta: {
          isLogin: +!N,
          prevented: t ? "1" : "0"
        }
      });
      if (!t) {
        if (N) {
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("unlog_click_voice"));
          chatEventEmitter.chatEmitter.emit("chat.guest.login", {
            source: "unlog_click_voice"
          });
          return;
        }
        if (X()) {
          J({
            reason: "click"
          });
        } else {
          G();
        }
      }
    }, C);
    return {
      asrStatus: M,
      volume: O,
      tipCardVisible: V,
      tipCardProps: {
        i18nConfig: W,
        onClickCloseBtn: () => A(false),
        onClickConfirmBtn: () => A(false)
      },
      isAsrRecordingOrLoading: X,
      handleClickAsrBtn: Y
    };
  };
  require.d(exports, {
    useChatAsrAction: function () {
      return k;
    }
  });
}