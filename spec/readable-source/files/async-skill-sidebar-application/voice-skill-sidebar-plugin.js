// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'sidebarFeatureFlagsResolver'
// - Resolved require(386007) to 'sidebar-feature-flags-resolver'
// - Renamed variable 'l' to 'sidebarApplicationUi'
// - Resolved require(795197) to 'sidebar-application-ui'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'm' to 'chatBubbleIcon_1'
// - Resolved require(165310) to 'chat-bubble-icon_1'
// - Renamed variable 'h' to 'asyncSkillBarItem'
// - Resolved require(336984) to 'async-skill-bar-item'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'n' to 'getSidebarFeatureFlags' (module 386007)
// - Updated imported property 'oX' to 'AsyncSkillBarItem' (module 336984)
// - Updated imported property 'j' to 'SidebarApplicationUI' (module 795197)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// - Updated imported property 'O' to 'ChatBubbleIcon' (module 165310)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 845551
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var sidebarApplicationUi = require("sidebar-application-ui") /*id: 795197*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatBubbleIcon_1 = require("chat-bubble-icon_1") /*id: 165310*/;
  var asyncSkillBarItem = require("async-skill-bar-item") /*id: 336984*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var v = e => {
    let {
      className: r,
      onClick: o,
      ...v
    } = e;
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let b = {
      skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.VoiceCall),
      skill_id: chatAppEnums.SkillType.VoiceCall.toString() ?? "",
      show_pos: typeof v.position == "number" && v.position >= 0 ? v.position : undefined,
      show_from: v.isOverflowPopover ? "more_hover" : v.isOverflow ? "more" : "default"
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!v.isDragOverlay) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "sidebar_skill_show",
          meta: {
            ...b
          }
        });
        teaAnalyticsEventTracker.trackEvent("sidebar_skill_show", b);
      }
    }, [v.isDragOverlay]);
    let {
      sidebarV2: w
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillBarItem.AsyncSkillBarItem, {
      position: "right",
      from: "sidebar",
      type: "withModal",
      children: reactJsxRuntimeCoreReexport.jsx(sidebarApplicationUi.SidebarApplicationUI, {
        ...throttledOmitPathStringify.omitPathStringify(v, "NavLink"),
        className: a("cursor-pointer", r),
        "data-testid": "sidebar_voice_call_btn",
        v2: w,
        renderIcon: e => {
          let {
            className: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(chatBubbleIcon_1.ChatBubbleIcon, {
            className: t
          });
        },
        text: y("web_skill_voice_call"),
        onClick: () => {
          teaAnalyticsEventTracker.trackEvent("sidebar_skill_click", b);
          if (o != null) {
            o({
              shouldTrackEvent: false,
              closeMobileSidebar: false,
              resetLocalConversationId: false
            });
          }
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "sidebar_skill_click",
            meta: {
              skill_type: chatAppEnums.SkillType.VoiceCall
            }
          });
        }
      })
    }, "voice-call");
  };
  class y {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: v,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = v;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    VoiceSidebarApplicationPlugin: function () {
      return y;
    }
  });
}