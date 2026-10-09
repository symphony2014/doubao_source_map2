// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'pageVisitTrackContext'
// - Resolved require(857541) to 'page-visit-track-context'
// - Renamed variable 'a' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 's' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'l' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'c' to 'chatViewConstants'
// - Resolved require(528191) to 'chat-view-constants'
// - Renamed variable 'u' to 'sidebarSkillTrackingHook'
// - Resolved require(923275) to 'sidebar-skill-tracking-hook'
// - Renamed variable 'd' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'p' to 'chatLauncherSettingsHook'
// - Resolved require(440854) to 'chat-launcher-settings-hook'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'h' to 'arrowDownLeftRtlIcon'
// - Resolved require(162439) to 'arrow-down-left-rtl-icon'
// - Renamed variable 'g' to 'moveSvgIcon'
// - Resolved require(114428) to 'move-svg-icon'
// - Renamed variable 'v' to 'iconCropOutline'
// - Resolved require(154090) to 'icon-crop-outline'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useSkillShowTracker' (module 923275)
// - Updated imported property 'C' to 'useLauncherSettings' (module 440854)
// - Updated imported property 'wR' to 'getVisitContext' (module 857541)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'w' to 'MoveIcon' (module 114428)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'Z' to 'ArrowDownLeftRtlIcon' (module 162439)
// - Updated imported property 'q' to 'CropIcon' (module 154090)
// - Updated imported property 'gJ' to 'codeChatPath' (module 983618)
// - Updated imported property 'M' to 'chatViewConstants' (module 528191)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 165791
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var sidebarSkillTrackingHook = require("sidebar-skill-tracking-hook") /*id: 923275*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var chatLauncherSettingsHook = require("chat-launcher-settings-hook") /*id: 440854*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var arrowDownLeftRtlIcon = require("arrow-down-left-rtl-icon") /*id: 162439*/;
  var moveSvgIcon = require("move-svg-icon") /*id: 114428*/;
  var iconCropOutline = require("icon-crop-outline") /*id: 154090*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      NavLink: t,
      className: r,
      onClick: n,
      ...b
    } = e;
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let _ = sidebarSkillTrackingHook.useSkillShowTracker(chatAppEnums.SkillType.CodeAssistant, b);
    let {
      trimSkillNames: x
    } = chatLauncherSettingsHook.useLauncherSettings();
    let {
      current_page: k
    } = pageVisitTrackContext.getVisitContext();
    let {
      sidebarV2: T
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
      ...b,
      NavLink: t,
      "data-testid": `skill-page-item-${chatAppEnums.SkillType.CodeAssistant}`,
      className: i("sidebar-application-TOsZVk", r),
      renderIcon: e => {
        let {
          className: t
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(moveSvgIcon.MoveIcon, {
          className: t
        });
      },
      v2: T,
      text: x === "2" ? w("mainPage_sidebar_doubaoCoding", {
        brandName: brandNameConstants.getBrandName()
      }) : x === "1" || x === "3" ? w("mainPage_sidebar_coding", w("cici_web_ai_coding_skill_title")) : w("cici_web_ai_coding_skill_title"),
      renderAfterTitle: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "icon-wrapper-QxB3HK",
        children: reactJsxRuntimeCoreReexport.jsx(arrowDownLeftRtlIcon.ArrowDownLeftRtlIcon, {
          className: "icon-K2F1Cs"
        })
      }),
      renderHint: () => reactJsxRuntimeCoreReexport.jsx(iconCropOutline.CropIcon, {
        className: "size-14 text-dbx-text-disable"
      }),
      url: `${codeRouteUtils.codeChatPath}?from=${chatViewConstants.chatViewConstants.SIDEBAR}&prev_page=${k}`,
      target: "_blank",
      onClick: () => n == null ? undefined : n(),
      onShow: _
    });
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
      w(this, "route", "/chat/coding");
      w(this, "Content", b);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeSidebarApplicationPlugin: function () {
      return _;
    }
  });
}