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
// - Renamed variable 's' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'l' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'u' to 'userShieldIcon'
// - Resolved require(746369) to 'user-shield-icon'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'O' to 'UserShieldIcon' (module 746369)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 425508
         */
module.exports = function (module, exports, require) {
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userShieldIcon = require("user-shield-icon") /*id: 746369*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = "/chat/create-image";
  let f = e => {
    let {
      NavLink: t,
      className: r,
      onClick: f,
      ...m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let g = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.ImageGeneration, m);
    let v = chatFgStoreHooks.getSourceValue("creation_agent_new_tag", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let {
      sidebarV2: y
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...m,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.ImageGeneration}`,
      className: r,
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(userShieldIcon.UserShieldIcon, {
          className: t
        });
      },
      v2: y,
      text: h("mainPage_sidebar_creation"),
      renderAfterTitle: () => v ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
              ml-[6px] flex items-center justify-center rounded-[4px]
              border-[0.5px] border-dbx-line-highlight px-[4px] text-[10px]
              leading-[14px] text-dbx-color-blue-500
            `,
        children: h(v)
      }) : null,
      url: p,
      onClick: () => f == null ? undefined : f(),
      onShow: g
    });
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
    ImageSidebarApplicationPlugin: function () {
      return h;
    }
  });
}