// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'ShareSelectAllBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 322668
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      isSelectAllChecked: t,
      isOverlimit: n,
      onSelectAll: o,
      onDeselectAll: u,
      onCancel: p,
      i18nConfig: f,
      children: h,
      selectAllAfter: m,
      className: v,
      selectAllClassName: g
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let y = reactCoreLibraryReexport.useMemo(() => ({
      select_check_all: b("share_select_checkall"),
      select_exceed_limit: b("share_select_exceed_limit", {
        postProcess: "sprintf",
        sprintf: [chatMessagingConstants.pollingInterval]
      }),
      ...f
    }), [f]);
    let _ = e => {
      if (e) {
        if (o != null) {
          o();
        }
        return;
      }
      if (u != null) {
        u();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("share_thread_multselect_show");
      return () => {
        if (p != null) {
          p();
        }
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i("w-full flex items-center pl-24 pr-32 sm:pl-5 sm:pr-12 h-52 mt-8", v),
      children: [reactJsxRuntimeCoreReexport.jsxs("span", {
        className: i("flex", g),
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaCheckboxComponents.CheckboxWrapper, {
          className: i("mr-10 items-center text-s-color-text-tertiary s-font-xs !gap-4", "select-all-PLTwTr", {
            "overlimit-rWNapM": n,
            "shrink-0": !n
          }),
          checked: t,
          onChange: e => _(e.target.checked),
          "data-testid": "thread_share_select_all",
          children: n ? y.select_exceed_limit : y.select_check_all
        }), m]
      }), h]
    });
  };
  require.d(exports, {
    ShareSelectAllBar: function () {
      return u;
    }
  });
}