// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'i' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'localStoragePersistedStateHook'
// - Resolved require(429278) to 'local-storage-persisted-state-hook'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'rtlIconFactory'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useLocalStorageState' (module 429278)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'LZ' to 'routePcAiGuidance' (module 323118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 880441
         */
module.exports = function (module, exports, require) {
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var localStoragePersistedStateHook = require("local-storage-persisted-state-hook") /*id: 429278*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M20.578 10.046q.108.479.164.977h.053q.996.002 1.928.212C22.331 5.655 17.68 1.25 12 1.25 6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75q.25 0 .496-.011a8.8 8.8 0 0 1-.443-1.95.3.3 0 0 1-.053.006c-.112 0-.851-.188-1.676-2.002-.362-.797-.669-1.774-.889-2.884h3.48c.353-.712.8-1.368 1.325-1.955H9.156a21.5 21.5 0 0 1 0-3.908h5.688a21.5 21.5 0 0 1 .05 3.25 8.8 8.8 0 0 1 1.992-1.359 24 24 0 0 0-.08-1.891zM16.553 8.09h3.328a8.83 8.83 0 0 0-4.728-4.305c.616 1.147 1.102 2.623 1.4 4.305M12 3.205c-.112 0-.851.188-1.676 2.002-.362.797-.669 1.774-.889 2.884h5.13c-.22-1.11-.527-2.087-.89-2.884-.824-1.814-1.563-2.002-1.675-2.002m-3.153.581A8.83 8.83 0 0 0 4.12 8.091h3.328c.298-1.682.784-3.158 1.4-4.305m-1.653 6.26H3.422a8.8 8.8 0 0 0 0 3.909h3.772a23.5 23.5 0 0 1 0-3.91m.253 5.863H4.119a8.83 8.83 0 0 0 4.728 4.305c-.616-1.147-1.102-2.623-1.4-4.305",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M19.399 22.257a.56.56 0 0 1-.556.493.57.57 0 0 1-.56-.491c-.26-1.569-.49-2.367-.984-2.86-.493-.492-1.287-.716-2.835-.977-.279-.037-.51-.254-.51-.556 0-.299.224-.529.514-.558 1.544-.262 2.338-.492 2.831-.987.494-.495.723-1.294.985-2.849.046-.281.266-.495.559-.495.297 0 .514.214.556.497.26 1.554.49 2.352.984 2.847s1.288.725 2.835.987c.287.03.51.26.51.558a.563.563 0 0 1-.509.556c-1.547.261-2.342.49-2.836.985s-.723 1.294-.985 2.85"
    })]
  }), {}));
  var d = {
    betaTag: "beta-tag-H8grNz"
  };
  function p(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let f = e => {
    let {
      t,
      show: r
    } = e;
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: d.betaTag,
        children: t("web_voice_call_entry_new")
      });
    } else {
      return null;
    }
  };
  let m = e => {
    let {
      NavLink: t,
      className: r,
      onClick: l,
      ...d
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let [f, m] = localStoragePersistedStateHook.useLocalStorageState("desktop_web_guidance_mind", {
      defaultValue: undefined
    });
    let h = {
      skill_name: "ai_web_tool",
      skill_id: "-100",
      show_pos: typeof d.position == "number" && d.position >= 0 ? d.position : undefined,
      show_from: d.isOverflowPopover ? "more_hover" : d.isOverflow ? "more" : "default"
    };
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...d,
      NavLink: t,
      className: r,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(u, {
          className: t
        });
      },
      url: chatRouteConstants.routePcAiGuidance,
      text: p("desktop_ai_view_web"),
      onClick: () => {
        if (!f) {
          m(1);
        }
        if (l != null) {
          l({
            shouldTrackEvent: false,
            closeMobileSidebar: false,
            resetLocalConversationId: false
          });
        }
        teaAnalyticsEventTracker.trackEvent("sidebar_skill_click", h);
      },
      onShow: () => {
        if (!d.isDragOverlay) {
          teaAnalyticsEventTracker.trackEvent("sidebar_skill_show", h);
        }
      }
    });
  };
  class h {
    constructor() {
      p(this, "route", chatRouteConstants.routePcAiGuidance);
      p(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    AiGuidanceCustomTag: function () {
      return f;
    },
    AiGuidanceSidebarApplication: function () {
      return m;
    },
    AiGuidanceSidebarApplicationPlugin: function () {
      return h;
    }
  });
}