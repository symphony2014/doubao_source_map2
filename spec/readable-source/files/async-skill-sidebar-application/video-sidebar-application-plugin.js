// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'i' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'documentPlayRtlIcon'
// - Resolved require(795121) to 'document-play-rtl-icon'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'Z' to 'DocumentPlayRtlIcon' (module 795121)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 459253
         */
module.exports = function (module, exports, require) {
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var documentPlayRtlIcon = require("document-play-rtl-icon") /*id: 795121*/;
  var l = "beta-tag-R1i05U";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = "/chat/create-video";
  let d = e => {
    let {
      NavLink: t,
      className: r,
      onClick: d,
      ...p
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let m = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.VideoGeneration, p);
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...p,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.VideoGeneration}`,
      className: r,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(documentPlayRtlIcon.DocumentPlayRtlIcon, {
          className: t
        });
      },
      text: f("skill_video_title"),
      renderText: () => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [f("skill_video_title"), reactJsxRuntimeCoreReexport.jsx("div", {
          className: l,
          children: f("skill_video_beta_tag")
        })]
      }),
      url: u,
      renderAfterTitle: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: l,
        children: f("skill_video_beta_tag")
      }),
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
    VideoSidebarApplicationPlugin: function () {
      return f;
    }
  });
}