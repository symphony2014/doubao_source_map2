// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isWorkspaceMode'
// - Resolved require(799020) to 'is-workspace-mode'
// - Renamed variable 'i' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'o' to 'chatDrivePath'
// - Resolved require(323874) to 'chat-drive-path'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'f' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'g' to 'chatIcon'
// - Resolved require(684247) to 'chat-icon'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property '_' to 'chatDrivePath' (module 323874)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'y' to 'isWorkspaceMode' (module 799020)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'e' to 'ChatIcon' (module 684247)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 776514
         */
module.exports = function (module, exports, require) {
  var isWorkspaceMode = require("is-workspace-mode") /*id: 799020*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var chatDrivePath = require("chat-drive-path") /*id: 323874*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = () => {
    let e = useLocationWrapper.useLocationWrapper();
    return reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(t => {
      t.preventDefault();
      if (e.pathname !== chatDrivePath.chatDrivePath && e.pathname.indexOf(chatDrivePath.chatDrivePath) === -1) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "AISpace_SidebarNavClick"
        });
      }
      teaAnalyticsEventTracker.trackEvent("sidebar_button_click", {
        button_name: "ai_space"
      });
    }, 300), []);
  };
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatIcon = require("chat-icon") /*id: 684247*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = chatDrivePath.chatDrivePath;
  let b = e => {
    let {
      NavLink: t,
      className: r,
      onClick: a,
      ...s
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let c = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.AISpace, s);
    let u = d();
    let {
      sidebarV2: y
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    if (isWorkspaceMode.isWorkspaceMode()) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
        ...s,
        NavLink: t,
        "data-testid": "ai_space_nav_button",
        className: r,
        renderIcon: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(chatIcon.ChatIcon, {
            className: t
          });
        },
        v2: y,
        text: l("mainPage_sidebar_drive"),
        url: `${chatDrivePath.chatDrivePath}?from=sidebar_ai_drive`,
        onClick: e => {
          u(e);
          if (a != null) {
            a();
          }
        },
        onShow: c
      });
    }
  };
  function w(e, t, r) {
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
  class _ {
    constructor() {
      w(this, "route", y);
      w(this, "Content", b);
    }
  }
  require.r(exports);
  require.d(exports, {
    AiSpaceSidebarApplicationPlugin: function () {
      return _;
    }
  });
}