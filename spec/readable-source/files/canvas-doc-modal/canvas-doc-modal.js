// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 's' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'l' to 'sideSheetComponent'
// - Resolved require(59995) to 'side-sheet-component'
// - Renamed variable 'u' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'c' to 'flowDocAiEditor'
// - Resolved require(35642) to 'flow-doc-ai-editor'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property '$g' to 'FlowDocAiEditor' (module 35642)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'Z' to 'SideSheet' (module 59995)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-modal.382626bd.js
         * chunkId: 57462
         * moduleId: 394350
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var sideSheetComponent = require("side-sheet-component") /*id: 59995*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var flowDocAiEditor = require("flow-doc-ai-editor") /*id: 35642*/;
  var d = {
    modal: "modal-wyJwjd",
    closeIcon: "closeIcon-hSeJVt",
    sideSheet: "sideSheet-ckXed1",
    content: "content-VlbyFj",
    doc: "doc-b89gnm"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      visible: t,
      className: r,
      onClose: i,
      docId: h,
      showTitle: p = true,
      title: g,
      onFetchDoc: m
    } = e;
    let {
      width: v,
      ref: y
    } = resizeObserverHooks.useResizeObserverEx();
    let b = isUndefinedCheck.isUndefined(v) || v > 400;
    let w = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: d.content,
      children: reactJsxRuntimeCoreReexport.jsx(flowDocAiEditor.FlowDocAiEditor, {
        docId: h,
        editable: false,
        title: g,
        showTitle: p,
        showControlBar: false,
        showStreamProgress: false,
        onFetchDoc: m,
        className: d.doc
      }, h)
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: y,
      children: b ? reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        visible: t,
        header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          onClick: i,
          className: d.closeIcon
        }),
        className: a(d.modal, r),
        centered: true,
        maskClosable: false,
        zIndex: 2000,
        footer: null,
        closeOnEsc: true,
        onClose: i,
        children: w()
      }) : reactJsxRuntimeCoreReexport.jsx(sideSheetComponent.SideSheet, {
        className: d.sideSheet,
        placement: "bottom",
        title: null,
        closeIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
        visible: t,
        onCancel: i,
        children: w()
      })
    });
  };
  require.d(exports, {
    CanvasDocModal: function () {
      return h;
    }
  });
}