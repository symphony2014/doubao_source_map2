// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'fileUploadHookUtility'
// - Resolved require(185856) to 'file-upload-hook-utility'
// - Renamed variable 'r' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'a' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'c' to 'closeSvgIconComponent'
// - Resolved require(605824) to 'close-svg-icon-component'
// - Renamed variable 'u' to 'asyncSkillGuidanceInputHook'
// - Resolved require(995921) to 'async-skill-guidance-input-hook'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useAsyncSkillGuidanceInput' (module 995921)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'a' to 'useFileUpload' (module 185856)
// - Updated imported property 'LW' to 'imageExtensions' (module 393072)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'c' to 'CloseIcon' (module 605824)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 630826
         */
module.exports = function (module, exports, require) {
  var fileUploadHookUtility = require("file-upload-hook-utility") /*id: 185856*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var asyncSkillGuidanceInputHook = require("async-skill-guidance-input-hook") /*id: 995921*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    var t;
    let {
      isOverflow: n,
      isToolButtonSmall: p,
      scene: h,
      trackParams: f,
      skill: m
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let {
      handleFilesChange: v
    } = asyncSkillGuidanceInputHook.useAsyncSkillGuidanceInput({});
    let _ = {
      skill_id: m == null ? undefined : (t = m.skill_type) === null || t === undefined ? undefined : t.toString(),
      skill_name: skillTypeMappings.getSkillName(m == null ? undefined : m.skill_type)
    };
    let {
      handleClickButton: b,
      inputElement: y
    } = fileUploadHookUtility.useFileUpload({
      onFilesChange: e => {
        if (v != null) {
          v(e, {
            from: "click",
            uploadWay: "browse_folder"
          });
        }
      },
      fileTypes: fileTypeDetectionUtils.imageExtensions
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      onClick: e => {
        b(e);
        teaAnalyticsEventTracker.trackEvent("pin_button_click", {
          button_name: "upload_file_entrance",
          click_from: "chat_enter_bar",
          ..._
        });
      },
      children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        small: p,
        isOverflow: n,
        scene: h,
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}),
        onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance", f),
        children: g("podcast_mainPage_btn_uploadFile")
      }), y]
    });
  };
  class h {
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
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CIAddFileButtonPlugin: function () {
      return h;
    }
  });
}