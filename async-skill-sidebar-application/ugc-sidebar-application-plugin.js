// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'i' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'o' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'u' to 'downloadIconComponent_1_1'
// - Resolved require(597169) to 'download-icon-component_1_1'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Dv' to 'selectUserInfoFailed' (module 480327)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'F' to 'DownloadIcon' (module 597169)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 232066
         */
module.exports = function (module, exports, require) {
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var downloadIconComponent_1_1 = require("download-icon-component_1_1") /*id: 597169*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = "/chat/bot/discover";
  let f = e => {
    let {
      NavLink: t,
      className: r,
      onClick: f,
      ...m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let g = userInfoStatusSelectors.selectUserInfoFailed();
    let v = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.UGCBot, m);
    let {
      sidebarV2: y
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    if (g) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
        ...m,
        NavLink: t,
        className: r,
        renderIcon: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(downloadIconComponent_1_1.DownloadIcon, {
            className: t
          });
        },
        v2: y,
        text: h("sidebar_AI_bots_entrance"),
        url: p,
        "data-testid": "bot_discover_btn",
        onShow: () => {
          teaAnalyticsEventTracker.trackEvent("discover_bot_button_show", {
            is_in_skill_list: 1
          });
          v();
        },
        onClick: () => {
          if (f != null) {
            f({
              shouldTrackEvent: true,
              resetLocalConversationId: false
            });
          }
          teaAnalyticsEventTracker.trackEvent("discover_bot_button_click", {
            is_in_skill_list: 1
          });
        }
      });
    }
  };
  function m(e, t, r) {
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
  class h {
    constructor() {
      m(this, "route", p);
      m(this, "Content", f);
    }
  }
  require.r(exports);
  require.d(exports, {
    UgcSidebarApplicationPlugin: function () {
      return h;
    }
  });
}