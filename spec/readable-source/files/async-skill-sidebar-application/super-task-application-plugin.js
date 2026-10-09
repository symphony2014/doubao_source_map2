// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatComplexPath'
// - Resolved require(909013) to 'chat-complex-path'
// - Renamed variable 'i' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'o' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'a' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'chatIcon_1'
// - Resolved require(336160) to 'chat-icon_1'
// - Renamed variable 'u' to 'betaLabelComponent'
// - Resolved require(939609) to 'beta-label-component'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'c' to 'ChatIcon' (module 336160)
// - Updated imported property 'u' to 'chatComplexPath' (module 909013)
// - Updated imported property 'U' to 'BetaLabel' (module 939609)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 848174
         */
module.exports = function (module, exports, require) {
  var chatComplexPath = require("chat-complex-path") /*id: 909013*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatIcon_1 = require("chat-icon_1") /*id: 336160*/;
  var betaLabelComponent = require("beta-label-component") /*id: 939609*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      NavLink: t,
      className: r,
      onClick: p,
      ...f
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let h = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.DesExtSkillSuperTask, f);
    let {
      sidebarV2: g
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...f,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.DesExtSkillSuperTask}`,
      className: r,
      v2: g,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(chatIcon_1.ChatIcon, {
          className: t
        });
      },
      text: m("homepage_sidebar_complexTask"),
      url: chatComplexPath.chatComplexPath,
      onClick: () => p == null ? undefined : p(),
      onShow: h,
      renderText: g ? e => {
        let {
          inTooltip: t
        } = e;
        if (t) {
          return m("homepage_sidebar_complexTask");
        } else {
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex flex-1 items-center justify-between",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex-1",
              children: m("homepage_sidebar_complexTask")
            }), reactJsxRuntimeCoreReexport.jsx(betaLabelComponent.BetaLabel, {
              visible: !f.isOverflowPopover,
              style: {
                color: "var(--dbx-text-disable)",
                borderColor: "var(--dbx-text-disable)"
              }
            })]
          });
        }
      } : undefined,
      renderAfterTitle: g ? undefined : () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-[1] items-center justify-end",
        children: reactJsxRuntimeCoreReexport.jsx(betaLabelComponent.BetaLabel, {
          visible: !f.isOverflowPopover,
          style: {
            borderColor: "var(--s-color-border-tertiary)",
            color: "var(--s-color-text-quaternary)"
          }
        })
      })
    });
  };
  function f(e, t, r) {
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
  class m {
    constructor() {
      f(this, "route", chatComplexPath.chatComplexPath);
      f(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskApplicationPlugin: function () {
      return m;
    }
  });
}