// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'i' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'o' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'chatSvgIcon'
// - Resolved require(848103) to 'chat-svg-icon'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'v' to 'ChatIcon' (module 848103)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 40030
         */
module.exports = function (module, exports, require) {
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatSvgIcon = require("chat-svg-icon") /*id: 848103*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = "/chat/translate";
  let d = e => {
    let {
      NavLink: t,
      className: r,
      onClick: d,
      ...p
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let m = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.Translate, p);
    let {
      sidebarV2: h
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...p,
      v2: h,
      NavLink: t,
      "data-testid": "ai_space_nav_button",
      className: r,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(chatSvgIcon.ChatIcon, {
          className: t
        });
      },
      text: f("skill_translate_title"),
      url: u,
      onClick: () => d == null ? undefined : d(),
      onShow: m
    });
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
  class f {
    constructor() {
      p(this, "route", u);
      p(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    TranslateSidebarApplicationPlugin: function () {
      return f;
    }
  });
}