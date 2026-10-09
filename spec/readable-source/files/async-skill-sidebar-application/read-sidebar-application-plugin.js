// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'a' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 's' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'u' to 'shieldIconSvgComponent'
// - Resolved require(905158) to 'shield-icon-svg-component'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'H' to 'ShieldIcon' (module 905158)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 93537
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var shieldIconSvgComponent = require("shield-icon-svg-component") /*id: 905158*/;
  var d = {
    tagHoverWrap: "tagHoverWrap-JXzmoY",
    active: "active-jqKlGp"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = "/chat/chat-with-doc";
  let m = e => {
    let {
      NavLink: t,
      className: r,
      onClick: n,
      ...m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let g = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.ReadPDF, m);
    let {
      sidebarV2: v
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...m,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.ReadPDF}`,
      className: e => i(r, d.tagHoverWrap, e && d.active),
      v2: v,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(shieldIconSvgComponent.ShieldIcon, {
          className: t
        });
      },
      text: h("skill_readPdf_btn_immersive"),
      url: f,
      onClick: () => n == null ? undefined : n(),
      onShow: g
    });
  };
  function h(e, t, r) {
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
  class g {
    constructor() {
      h(this, "route", f);
      h(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadSidebarApplicationPlugin: function () {
      return g;
    }
  });
}