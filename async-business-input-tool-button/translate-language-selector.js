// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver'
// - Resolved require(637954) to 'react-intersection-observer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'arrowRightIcon_1'
// - Resolved require(851073) to 'arrow-right-icon_1'
// - Renamed variable 'c' to 'businessLanguageSelect'
// - Resolved require(528368) to 'business-language-select'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'YD' to 'useInView' (module 637954)
// - Updated imported property 'S' to 'LanguageSelector' (module 528368)
// - Updated imported property 'Z' to 'ArrowRightIcon' (module 851073)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 877010
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var businessLanguageSelect = require("business-language-select") /*id: 528368*/;
  var u = {
    "group-container": "group-container-IhzFDX",
    small: "small-CMWVX9",
    selector: "selector-RIatPs",
    arrow: "arrow-AGPeQq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      sourceLang: t,
      targetLang: n,
      handleSourceLanguageChange: a,
      handleTargetLanguageChange: p,
      sourceLanguageList: h = [],
      targetLanguageList: f = [],
      small: m,
      trackParams: g
    } = e;
    let {
      ref: v,
      inView: _
    } = reactIntersectionObserver.useInView();
    let b = "target_language";
    let y = "source_language";
    reactCoreLibraryReexport.useEffect(() => {
      if (_ && n) {
        if (h.length > 0) {
          teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
            ...g,
            option_label: y,
            show_position: 0,
            is_default: 1,
            is_choose_required: 1
          });
        }
        if (f.length > 0) {
          teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
            ...g,
            option_label: b,
            show_position: 1,
            is_default: 1,
            is_choose_required: 1
          });
        }
      }
    }, [h.length, f.length, _, !n]);
    let w = (e, t, n) => {
      var i;
      teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_click", {
        ...g,
        option_label: t,
        option_sub_label: e,
        action_type: "select",
        show_position: (i = n.map(e => e.language_code)) === null || i === undefined ? undefined : i.indexOf(e),
        is_default: Number(e === n.find(e => e.is_default)?.language_code),
        is_choose_required: 1
      });
    };
    let x = (e, t, n) => {
      if (e) {
        n.map((e, i) => {
          teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
            ...g,
            option_label: t,
            option_sub_label: e.language_code || "",
            show_position: i,
            is_default: Number(e.language_code === n.find(e => e.is_default)?.language_code),
            is_choose_required: 0
          });
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: v,
      className: o(u["group-container"], m && u.small),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(businessLanguageSelect.LanguageSelector, {
          "data-testid": "source_language_select_button",
          value: t,
          clickToHide: true,
          style: {
            flex: "1"
          },
          size: m ? "small" : "default",
          onChange: e => {
            if (a != null) {
              a(e);
            }
            w(e, y, h);
          },
          languageList: h,
          className: u.selector,
          onOpenChange: e => x(e, y, h)
        })
      }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
        className: o(u.arrow, m && u.small)
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(businessLanguageSelect.LanguageSelector, {
          "data-testid": "target_language_select_button",
          value: n,
          clickToHide: true,
          style: {
            flex: "1"
          },
          size: m ? "small" : "default",
          onChange: e => {
            if (p != null) {
              p(e);
            }
            w(e, b, f);
          },
          languageList: f,
          className: u.selector,
          onOpenChange: e => x(e, b, f)
        })
      })]
    });
  };
  class h {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    TranslateLanguageSelectorGroupPlugin: function () {
      return h;
    }
  });
}