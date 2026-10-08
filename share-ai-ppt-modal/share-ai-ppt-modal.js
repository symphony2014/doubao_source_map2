// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'i' to 'aiPptCanvasComponent'
// - Resolved require(867626) to 'ai-ppt-canvas-component'
// - Renamed variable 'a' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'l' to 'sideSheetComponent'
// - Resolved require(59995) to 'side-sheet-component'
// - Renamed variable 's' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'c' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'W7' to 'isMobileCached' (module 161498)
// - Updated imported property '$' to 'AiPptCanvasComponent' (module 867626)
// - Updated imported property 'Z' to 'SideSheet' (module 59995)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: share-ai-ppt-modal.064c3f61.js
         * chunkId: 2298
         * moduleId: 573902
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var aiPptCanvasComponent = require("ai-ppt-canvas-component") /*id: 867626*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var sideSheetComponent = require("side-sheet-component") /*id: 59995*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var d = {
    "mobile-wrapper": "mobile-wrapper-xpTkc4",
    modal: "modal-roxGOR",
    closeIcon: "closeIcon-MxqsGT"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = userAgentDeviceDetector.isMobileCached();
  let f = e => {
    let {
      visible: t,
      className: r,
      onClose: n,
      conversationId: a,
      messageId: f,
      shareMode: h,
      content_obj: m
    } = e;
    let v = () => reactJsxRuntimeCoreReexport.jsx(aiPptCanvasComponent.AiPptCanvasComponent, {
      isMobile: p,
      conversationId: a,
      messageId: f,
      onCloseCanvas: n,
      content_obj: m,
      shareMode: h
    });
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx(sideSheetComponent.SideSheet, {
        visible: t,
        className: o(d["mobile-wrapper"], r),
        placement: "bottom",
        height: "100vh",
        children: v()
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
          visible: t,
          header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            onClick: n,
            className: d.closeIcon
          }),
          className: o(d.modal, r),
          centered: true,
          maskClosable: false,
          zIndex: 2000,
          footer: null,
          closeOnEsc: true,
          onClose: n,
          children: v()
        })
      });
    }
  };
  require.d(exports, {
    ShareAIPPTArtifactModal: function () {
      return f;
    }
  });
}