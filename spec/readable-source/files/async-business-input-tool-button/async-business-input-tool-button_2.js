// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'fileUploadHookUtility'
// - Resolved require(185856) to 'file-upload-hook-utility'
// - Renamed variable 'r' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'a' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'c' to 'rtlChartIconComponent'
// - Resolved require(425108) to 'rtl-chart-icon-component'
// - Renamed variable 'u' to 'closeSvgIconComponent'
// - Resolved require(605824) to 'close-svg-icon-component'
// - Renamed variable 'd' to 'imageUploadHandlerHook'
// - Resolved require(683572) to 'image-upload-handler-hook'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'X' to 'useImageUploadHandler' (module 683572)
// - Updated imported property 'a' to 'useFileUpload' (module 185856)
// - Updated imported property 'dC' to 'documentExtensions' (module 393072)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'c' to 'CloseIcon' (module 605824)
// - Updated imported property 'Z' to 'RtlChartIcon' (module 425108)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 716304
         */
module.exports = function (module, exports, require) {
  var fileUploadHookUtility = require("file-upload-hook-utility") /*id: 185856*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var rtlChartIconComponent = require("rtl-chart-icon-component") /*id: 425108*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var imageUploadHandlerHook = require("image-upload-handler-hook") /*id: 683572*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      chatId: t,
      chatType: n,
      isToolButtonSmall: h,
      isOverflow: f,
      scene: m,
      trackParams: g,
      skill: v
    } = e;
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: b
    } = chatLauncherConfigHooks.useSkillToolLayout(m);
    let {
      handleFilesChange: y
    } = imageUploadHandlerHook.useImageUploadHandler({
      chatId: t,
      chatType: n,
      skill: v
    });
    let {
      handleClickButton: w,
      inputElement: x
    } = fileUploadHookUtility.useFileUpload({
      onFilesChange: e => {
        if (y != null) {
          y(e, {
            from: "click",
            uploadWay: "browse_folder"
          });
        }
      },
      fileTypes: fileTypeDetectionUtils.documentExtensions
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      onClick: e => {
        w(e);
        teaAnalyticsEventTracker.trackEvent("pin_button_click", {
          button_name: "upload_file_entrance",
          click_from: "chat_enter_bar"
        });
      },
      children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        isOverflow: f,
        small: h,
        scene: m,
        "data-testid": "upload_file_button",
        leadingIcon: b ? reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlChartIconComponent.RtlChartIcon, {}),
        onClick: () => {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", g);
          teaAnalyticsEventTracker.trackEvent("click_upload_entrance", g);
        },
        children: _("solve_upload_btn")
      }), x]
    });
  };
  class f {
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
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    EduAddFileButtonPlugin: function () {
      return f;
    }
  });
}