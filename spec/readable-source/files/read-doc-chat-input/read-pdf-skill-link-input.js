// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'PdfLinkInputButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 158172
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var pdfLinkInputModalHook = require("pdf-link-input-modal-hook") /*id: 212354*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      onSubmit: t,
      size: n,
      className: o,
      testId: c
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let {
      handleClickButton: u,
      inputModalElement: p
    } = pdfLinkInputModalHook.usePdfLinkInputModal({
      onSubmit: t
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "tertiary",
        "data-testid": c || "read-doc-guidance-add-link-btn",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {}),
        onClick: u,
        className: o,
        size: n,
        children: d("skill_pdf_label_file_link")
      }), p]
    });
  };
  require.d(exports, {
    PdfLinkInputButton: function () {
      return o;
    }
  });
}