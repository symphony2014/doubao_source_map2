// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'r' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'semiUploadComponent'
// - Resolved require(159273) to 'semi-upload-component'
// - Renamed variable 's' to 'rtlChartIconComponent'
// - Resolved require(425108) to 'rtl-chart-icon-component'
// - Renamed variable 'c' to 'closeSvgIconComponent'
// - Resolved require(605824) to 'close-svg-icon-component'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'Z' to 'UploadComponent' (module 159273)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'c' to 'CloseIcon' (module 605824)
// - Updated imported property 'Z' to 'RtlChartIcon' (module 425108)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 12963
         */
module.exports = function (module, exports, require) {
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiUploadComponent = require("semi-upload-component") /*id: 159273*/;
  var rtlChartIconComponent = require("rtl-chart-icon-component") /*id: 425108*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      isToolButtonSmall: t,
      isOverflow: n,
      scene: d,
      onSubmitFiles: p,
      onClickUploadButton: h,
      uploadDisabled: f,
      trackParams: m
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: v
    } = chatLauncherConfigHooks.useSkillToolLayout(d);
    return reactJsxRuntimeCoreReexport.jsx(semiUploadComponent.UploadComponent, {
      action: "",
      accept: "image/*",
      onFileChange: p,
      showUploadList: false,
      uploadTrigger: "custom",
      disabled: f,
      children: reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        isOverflow: n,
        small: t,
        scene: d,
        "data-testid": "upload_file_button",
        leadingIcon: v ? reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlChartIconComponent.RtlChartIcon, {}),
        onClick: () => {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", m);
          teaAnalyticsEventTracker.trackEvent("click_upload_entrance", m);
          if (h != null) {
            h();
          }
        },
        children: g("solve_upload_btn")
      })
    });
  };
  class p {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    EduUploadFilePlugin: function () {
      return p;
    }
  });
}