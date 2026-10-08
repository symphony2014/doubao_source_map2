// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'AutoRetryBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 424863
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var s = {
    "retry-button-wrapper": "retry-button-wrapper-jCcQu2"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      retryTimes: t = 1,
      retryInterval: n = 500,
      text: u = i18nTranslationUtils.i18nextTranslate("chat_list_load_failed"),
      ...d
    } = e;
    let p = reactCoreLibraryReexport.useRef();
    let h = reactCoreLibraryReexport.useRef(0);
    let f = reactCoreLibraryReexport.useRef(null);
    let v = reactCoreLibraryReexport.useCallback(() => h.current === t ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: s["retry-button-wrapper"],
      children: reactJsxRuntimeCoreReexport.jsx("button", {
        onClick: () => {
          var e;
          var t;
          h.current = 0;
          if ((t = f.current) !== null && t !== undefined && (e = t.resetErrorBoundary) !== null && e !== undefined) {
            e.call(t);
          }
        },
        children: u
      })
    }) : null, []);
    let {
      run: m
    } = asyncSkillReceiveHook.useSkillReceive(() => {
      var e;
      var r;
      var i;
      var a;
      if (h.current < t) {
        if ((r = f.current) !== null && r !== undefined && (e = r.resetErrorBoundary) !== null && e !== undefined) {
          e.call(r);
        }
        h.current += 1;
        if ((i = p.current) !== null && i !== undefined) {
          i.updateMeta({
            retry_counter: h.current
          });
        }
      } else if ((a = p.current) !== null && a !== undefined) {
        a.error({
          reason: `retry(${h.current})`
        });
      }
      p.current ||= eventReportingService.createEventReporter({
        eventName: "boundary_auto_reset_error",
        meta: {
          is_package: 1,
          boundary_name: d.errorBoundaryName,
          retry_times: t,
          retry_interval: n,
          retry_counter: h.current
        }
      });
    }, {
      wait: n,
      leading: true
    });
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      ...d,
      fallbackRender: v,
      ref: f,
      onError: m
    });
  };
  require.d(exports, {
    AutoRetryBoundary: function () {
      return u;
    }
  });
}