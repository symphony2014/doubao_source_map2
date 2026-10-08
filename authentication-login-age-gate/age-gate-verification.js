// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'AgeGate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 903017
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var canvasShareTypes = require("canvas-share-types") /*id: 546605*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var zhCnLocaleDefinition_1 = require("zh-cn-locale-definition_1") /*id: 625562*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var p = propTypesFactoryWrapper;
  var skillPinModalContext = require("skill-pin-modal-context") /*id: 659708*/;
  class f extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.state = {};
    }
    render() {
      let {
        children: e,
        locale: t
      } = this.props;
      return reactCoreLibraryReexport.createElement(skillPinModalContext.skillPinModalContext.Provider, {
        value: t
      }, e);
    }
  }
  f.propTypes = {
    locale: p.object,
    children: p.node
  };
  f.defaultProps = {
    locale: zhCnLocaleDefinition_1.zhCNLocale
  };
  var semiDatepickerComponent = require("semi-datepicker-component") /*id: 927627*/;
  var buttonComponent = require("button-component") /*id: 899242*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  var v = {
    "age-gate": "age-gate-EJCoPl",
    title: "title-ptsipM",
    desc: "desc-igbY5f",
    "date-picker": "date-picker-qtVgaX",
    "next-button": "next-button-TeLjit",
    age: "age-XtQL1w",
    err: "err-k1gNDN"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      onPass: t,
      onFail: r
    } = e;
    let [d, p] = reactCoreLibraryReexport.useState(null);
    let [h, w] = reactCoreLibraryReexport.useState(false);
    let [O, E] = reactCoreLibraryReexport.useState(false);
    let C = async () => {
      if (d) {
        w(true);
        teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
          type: storageWrapperWithFallback.LocalStorageWrapper.getItem("platform") || "",
          click_from: "next"
        }, {
          key: "",
          withSlardar: true
        });
        try {
          let {
            data: e
          } = await apiServicesCollection.SafetyApiService.AgeGateReport({
            scene: canvasShareTypes.ActionType.Launch,
            pass: true,
            birthday: Number(String(d.valueOf()).slice(0, -3))
          });
          if (e == null ? undefined : e.pass) {
            if (t != null) {
              t();
            }
          } else if ((e == null ? undefined : e.forbidden_reason) === canvasShareTypes.AgeRestriction.TooMinAge) {
            E(true);
            w(false);
          } else {
            await promiseAsyncUtilities.createDelayedPromise(2000);
            w(false);
            if (r != null) {
              r();
            }
          }
        } catch (e) {
          w(false);
          samanthaToastFactory.toastInstance.error({
            content: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
            showClose: false
          });
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: v["age-gate"],
      children: [reactJsxRuntimeCoreReexport.jsx("h2", {
        className: v.title,
        children: i18nTranslationUtils.i18nextTranslate("age_gate_question")
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        className: v.desc,
        children: i18nTranslationUtils.i18nextTranslate("age_gate_toast")
      }), reactJsxRuntimeCoreReexport.jsx(f, {
        locale: zhCnLocaleDefinition_1.zhCNLocale,
        children: reactJsxRuntimeCoreReexport.jsx(semiDatepickerComponent.DatePicker, {
          style: {
            "--semi-color-bg-0": "#F6F6F6",
            "--color-neutral-1": "#F6F6F6"
          },
          className: v["date-picker"],
          disabled: h,
          disabledDate: e => {
            let t = new Date();
            return !!e && e.getTime() >= t.getTime();
          },
          placeholder: "YYYY-MM-DD",
          onChange: e => {
            if (e) {
              p(e);
              E(false);
            } else {
              p(null);
            }
          }
        })
      }), d && !O && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v.age,
        children: i18nTranslationUtils.i18nextTranslate("age_gate_age", {
          postProcess: "sprintf",
          sprintf: [errorUtilsAndEnums.getYearDifference(d)]
        })
      }), O && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v.err,
        children: i18nTranslationUtils.i18nextTranslate("age_gate_error", {
          postProcess: "sprintf",
          sprintf: [errorUtilsAndEnums.getYearDifference(d)]
        })
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponent.Button, {
        className: v["next-button"],
        disabled: d === null || O,
        loading: h,
        onClick: C,
        children: i18nTranslationUtils.i18nextTranslate("age_gate_next")
      })]
    });
  };
  require.d(exports, {
    AgeGate: function () {
      return w;
    }
  });
}