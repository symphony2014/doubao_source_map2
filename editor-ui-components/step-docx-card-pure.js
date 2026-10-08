// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'errorOutlineComponent'
// - Resolved require(345768) to 'error-outline-component'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'rtlFileDocumentIcon_2'
// - Resolved require(150297) to 'rtl-file-document-icon_2'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'messageContentExtractors'
// - Resolved require(356469) to 'message-content-extractors'
// - Renamed variable 'p' to 'docxShareClientService'
// - Resolved require(88629) to 'docx-share-client-service'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'f' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'h' to 'reactUseRefValue'
// - Resolved require(45405) to 'react-use-ref-value'
// - Resolved require.e(89990) to 'd3-interpolation-utils'
// - Resolved require.e(41069) to 'd3-axis-svg-geometry'
// - Resolved require.e(87517) to 'html-entity-decoder'
// - Resolved require.e(5374) to 'html-parser'
// - Resolved require.e(35613) to 'event-emitter-utilities'
// - Resolved require.e(58010) to 'dom-to-image-utils'
// - Resolved require.e(78000) to 'docx-preview-modal'
// - Resolved require.bind(161646) to 'docx-preview-modal'
// - Updated imported property 'Z' to 'FileDocumentIcon' (module 150297)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useRefValue' (module 45405)
// - Updated imported property 'Qx' to 'extractMessageSearchResults' (module 356469)
// - Updated imported property 'M' to 'ErrorOutline' (module 345768)
// - Updated imported property 'Z1' to 'getAuthToken' (module 88629)
// - Updated imported property 'g8' to 'getClientVarsByShareId' (module 88629)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 619105
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var errorOutlineComponent = require("error-outline-component") /*id: 345768*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var rtlFileDocumentIcon_2 = require("rtl-file-document-icon_2") /*id: 150297*/;
  var s = {
    container: "container-NjGtBM",
    disabled: "disabled-euluYB",
    clickable: "clickable-hsDUBA",
    icon: "icon-x9BxC8",
    title: "title-ZpxY17",
    checked: "checked-EvAiji"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: i,
      checked: l = false,
      disabled: r = false,
      title: d = "(Untitled)",
      onClick: u,
      onDisabledClick: p
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: o(s.container, n, {
        [s.disabled]: r,
        [s.clickable]: !!p,
        [s.checked]: l
      }),
      style: i,
      onClick: () => {
        if (r) {
          if (p != null) {
            p();
          }
          return;
        }
        if (u != null) {
          u();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx(rtlFileDocumentIcon_2.FileDocumentIcon, {
        className: s.icon
      }), d && reactJsxRuntimeCoreReexport.jsx("div", {
        className: s.title,
        children: d
      })]
    });
  });
  var messageContentExtractors = require("message-content-extractors") /*id: 356469*/;
  var docxShareClientService = require("docx-share-client-service") /*id: 88629*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  let g = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        DocxPreviewModal: e
      } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-entity-decoder") /*id: 87517*/, require.e("html-parser") /*id: 5374*/, require.e("event-emitter-utilities") /*id: 35613*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("docx-preview-modal") /*id: 78000*/]).then(require.bind(require, "docx-preview-modal") /*id: 161646*/);
      return {
        default: e
      };
    }
  })));
  let _ = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: _
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let [k, y] = reactCoreLibraryReexport.useState(false);
    let x = reactUseRefValue.useRefValue(k);
    let {
      docId: w,
      title: S
    } = messageContentExtractors.extractMessageSearchResults(_);
    let R = !!(_ == null ? undefined : _.ext?.samantha_code);
    if (_ == null ? undefined : _.ext?.samantha_code) {
      return reactJsxRuntimeCoreReexport.jsx(errorOutlineComponent.ErrorOutline, {
        tip: (_ == null ? undefined : _.brief) ?? (_ == null ? undefined : _.ext?.brief),
        actionBarConfigStr: _ == null ? undefined : _.ext?.action_bar_config,
        i18nConfig: {
          skill_writing_outline_failure_retry_button_titile: b("skill_writing_outline_failure_retry_button_titile")
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(d, {
          title: R ? (_ == null ? undefined : _.brief) ?? (_ == null ? undefined : _.ext?.brief) ?? "" : S,
          onClick: () => y(true)
        }), x && w && reactJsxRuntimeCoreReexport.jsx(g, {
          visible: k,
          docId: w,
          getAuthToken: () => docxShareClientService.getAuthToken(w),
          onFetchDoc: async () => await docxShareClientService.getClientVarsByShareId(w),
          onClose: () => y(false)
        })]
      });
    }
  });
  require.r(exports);
  require.d(exports, {
    StepDocXCardPure: function () {
      return _;
    }
  });
}