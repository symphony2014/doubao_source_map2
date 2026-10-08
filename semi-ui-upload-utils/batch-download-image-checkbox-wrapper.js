// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'ImageCheckboxWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 144026
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlInfoOutlinedIcon = require("rtl-info-outlined-icon") /*id: 918336*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var _ = {
    container: "container-dLabXv",
    "tip-content": "tip-content-pWuY0J",
    "tip-text": "tip-text-urEHFk",
    "error-icon": "error-icon-d6qtOU",
    "hover-mask": "hover-mask-nQqsso",
    "checkbox-wrapper": "checkbox-wrapper-KkBV1K",
    unchecked: "unchecked-B2l8JV",
    "batch-download-wrapper": "batch-download-wrapper-iGjG2C",
    overlay: "overlay-RBiR8a"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      tips: n,
      renderHoverEle: a,
      imageContent: b,
      message: y,
      onMouseEnter: k,
      ...w
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let E = useElementSizeHook_2.useElementSize(x);
    let [I, S, T] = batchImageStoreLogic.imageStore(e => [e.batchDownloadSelected, e.selectedImageUrlWithMessageList, e.toggleImageUrl], deepEqualityUtil_1.isDeepEqual);
    let j = reactCoreLibraryReexport.useMemo(() => {
      return !!b && S.map(e => e.url).includes(imageActionUtils.processImageData(b).downloadImage?.url ?? "");
    }, [S]);
    let N = e => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _["tip-content"],
      children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
        className: _["error-icon"]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: _["tip-text"],
        children: e
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(_.container, {
        [_["batch-download-wrapper"]]: I
      }),
      ref: x,
      onMouseEnter: k,
      children: [reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
        ...w,
        className: ""
      }), !I && a && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(_["hover-mask"], ""),
        children: a == null ? undefined : a((E == null ? undefined : E.width) ?? 0)
      }), n && n !== "" && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (E == null ? undefined : E.width) && E.width > 140 ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: n,
          children: N(n ?? "")
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: N(n ?? "")
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(_.overlay, {
          "!opacity-100": j
        })
      }), I && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l({
          [_.unchecked]: !j
        }, _["checkbox-wrapper"]),
        children: reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
          checked: j,
          onChange: () => {
            if (b) {
              if (!j && S.length > 99) {
                samanthaToastFactory.toastInstance.warning({
                  content: C("image_download_toast_downloadLimit"),
                  theme: "light",
                  showClose: false
                });
                return;
              }
              T(imageActionUtils.processImageData(b).downloadImage?.url ?? "", y);
              teaAnalyticsEventTracker.trackEvent("multi_download_checkbox_click", {
                pic_id: imageActionUtils.processImageData(b).downloadImage?.url ?? "",
                skillId: (y == null ? undefined : y.skill?.skill_type) ? "3" : null,
                skillName: (y == null ? undefined : y.skill?.skill_type) ? "images_generation" : null,
                content_type: "pic",
                message_id: y == null ? undefined : y.message_id,
                check_type: "single",
                select_type: j ? "unselect" : "select"
              });
            }
          }
        })
      })]
    });
  };
  require.d(exports, {
    ImageCheckboxWrapper: function () {
      return b;
    }
  });
}