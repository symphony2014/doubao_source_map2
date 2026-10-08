// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'skillChatImgBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 907496
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: u,
      trackParams: d,
      onImageSubmit: p,
      enableMultiple: h = false
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let m = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        isOverflow: t,
        small: n,
        scene: u,
        onMouseUp: e => {
          if (m.current) {
            m.current.value = "";
            m.current.click();
            teaAnalyticsEventTracker.trackEvent("pin_button_click", {
              ...d
            });
            teaAnalyticsEventTracker.trackEvent("click_upload_entrance", {
              ...d
            });
          }
          if (e != null) {
            e.stopPropagation();
          }
        },
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}),
        tip: h ? f("image_upload_tooltip_maxNum", {
          s_number: imageConfigConstants_1.maxItemCount
        }) : undefined,
        children: f("skill_image_intput_reference")
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        type: "file",
        className: "hidden",
        onClick: e => {
          e.stopPropagation();
        },
        onChange: e => {
          let t = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
          if (t && t.length !== 0) {
            if (p != null) {
              p([...t]);
            }
          }
        },
        ref: m,
        accept: ".jpg,.png,.jpeg,.webp",
        multiple: h
      })]
    });
  };
  require.d(exports, {
    skillChatImgBtn: function () {
      return u;
    }
  });
}