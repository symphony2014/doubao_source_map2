// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'i' to 'sideSheetComponent'
// - Resolved require(59995) to 'side-sheet-component'
// - Renamed variable 's' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'l' to 'htmlSandboxPreview'
// - Resolved require(885772) to 'html-sandbox-preview'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'N' to 'HtmlPreviewer' (module 885772)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'Z' to 'SideSheet' (module 59995)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 411521
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var sideSheetComponent = require("side-sheet-component") /*id: 59995*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var htmlSandboxPreview = require("html-sandbox-preview") /*id: 885772*/;
  var u = {
    modal: "modal-igAdbv",
    closeIcon: "closeIcon-eW1tl7",
    sideSheet: "sideSheet-yUgZV2",
    content: "content-J7bXKY"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      visible: t,
      uniqueId: r,
      artifactsHTMLData: n,
      artifactsHTMLPath: d,
      onRequestResource: p,
      className: f,
      isWideMode: h = true,
      onClose: m
    } = e;
    let g = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: u.content,
      children: reactJsxRuntimeCoreReexport.jsx(htmlSandboxPreview.HtmlPreviewer, {
        source: "artifacts",
        sourceCodeType: "html",
        htmlEntry: n,
        htmlEntryPath: d,
        onRequestResource: p,
        uniqueId: r
      })
    });
    if (n || d) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: h ? reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
          visible: t,
          header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            onClick: m,
            className: u.closeIcon
          }),
          className: a(u.modal, f),
          centered: true,
          maskClosable: false,
          zIndex: 2000,
          footer: null,
          closeOnEsc: true,
          onClose: m,
          children: g()
        }) : reactJsxRuntimeCoreReexport.jsx(sideSheetComponent.SideSheet, {
          className: u.sideSheet,
          placement: "bottom",
          title: null,
          closeIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
          visible: t,
          onCancel: m,
          children: g()
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ShareHTMLArtifactModal: function () {
      return d;
    }
  });
}