// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'useCreateBot'
// - Renamed export 'q' to 'CreateBotParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 823400
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      onOk: t,
      onCancel: n
    } = e;
    let [r, o] = reactCoreLibraryReexport.useState(false);
    let [a, l] = reactCoreLibraryReexport.useState({});
    return {
      open: e => {
        if (e) {
          l(e);
        }
        o(true);
      },
      close: () => {
        o(false);
      },
      modalVisible: r,
      handleModalOk: async e => {
        await (t == null ? undefined : t({
          ...a,
          private_status: e
        }));
        o(false);
      },
      handleModalCancel: () => {
        o(false);
        if (n != null) {
          n();
        }
      }
    };
  };
  let v = e => {
    let {
      setLoading: t
    } = e;
    let [n, m] = reactCoreLibraryReexport.useState();
    let v = reactCoreLibraryReexport.useRef();
    let f = useNavigateRuntimeResolver.useNavigateResolver();
    let p = i18nTranslationUtils.useTranslationWithFallback();
    return {
      handleCreateBotAndConversation: async e => {
        var h;
        if (t != null) {
          t(true);
        }
        try {
          v.current ||= eventReportingService.createEventReporter({
            eventName: "create_bot"
          });
          let t = await apiServicesCollection.AliceBotApiService.CreateBot({
            ...e,
            voice_type: "Peach",
            muted: false
          });
          let l = await apiServicesCollection.AliceBotApiService.GetBotListV2({
            bot_id_list: [t.data?.id ?? ""],
            scene: "default"
          });
          v.current.addDurationPoint("success");
          v.current.success();
          if (l.data && l.data.length > 0) {
            teaAnalyticsEventTracker.trackEvent("complete_create_new_bot", {
              bot_id: l.data[0]?.bot_id,
              ...n
            });
            f(`/chat/new?botId=${l.data[0]?.bot_id}`);
          }
        } catch (e) {
          if ((h = v.current) !== null && h !== undefined) {
            h.error({
              reason: "update_bot_failed",
              error: e
            });
          }
          if (apiErrorChecker.isApiError(e)) {
            let t = String(e.errorOption.code) === String(chatErrorCodes.chatErrorCodes.CONTENT_UNAVAILABLE);
            semiToastNotification.toastInstance.error({
              content: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "text-left",
                children: e.errorOption.message || t && p("illegal_content")
              }),
              showClose: false
            });
            return;
          }
          semiToastNotification.toastInstance.error({
            content: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "text-left",
              children: p("create_bot_failed")
            }),
            showClose: false
          });
        } finally {
          if (t != null) {
            t(false);
          }
        }
      },
      setCreateBotTrackParams: m
    };
  };
  require.d(exports, {
    useCreateBot: function () {
      return m;
    },
    CreateBotParams: function () {
      return v;
    }
  });
}