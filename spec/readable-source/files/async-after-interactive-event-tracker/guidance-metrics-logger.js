// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'r' to 'performanceTimeUtil'
// - Resolved require(512870) to 'performance-time-util'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'z' to 'getPerformanceNow' (module 512870)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-event-tracker.8604c016.js
         * chunkId: 38237
         * moduleId: 593205
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let l = t => {
    let e = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      if (!t) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "guidance_page_start",
          meta: {
            new_guidance: "1",
            is_skill_bar_bottom: "1"
          }
        });
      }
    }), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      e();
    }, [e]);
  };
  let d = (t, e) => {
    let o = reactCoreLibraryReexport.useId();
    let [n] = reactCoreLibraryReexport.useState(() => `${o}_${Math.round(performanceTimeUtil.getPerformanceNow())}`);
    reactCoreLibraryReexport.useEffect(() => {
      let o;
      if (!e) {
        return;
      }
      let i = 0;
      let r = setInterval(() => {
        o = o ?? eventReportingService.createEventReporter({
          eventName: "guidance_onboarding_sug_show",
          meta: {
            enter_key: n
          }
        });
        let e = !!document.querySelector(t);
        if (e || i >= 30) {
          if (r) {
            clearInterval(r);
          }
          if (e) {
            o.success();
          } else {
            o.error({
              reason: "queryTimeout",
              meta: {
                count: i
              }
            });
          }
          o = undefined;
        }
        i++;
      }, 500);
      return () => {
        clearInterval(r);
        if (o != null) {
          o.error({
            reason: "quit"
          });
        }
      };
    }, [e]);
  };
  let u = t => {
    let {
      activeSkillType: e,
      useV3: o
    } = t;
    l(e);
    d("[data-testid=flow_chat_guidance_page] [data-testid=onboarding_sug_item]", o);
    return null;
  };
  require.r(exports);
  require.d(exports, {
    GuidanceMetricsLogger: function () {
      return u;
    },
    useReportOnboardingSugShow: function () {
      return d;
    }
  });
}