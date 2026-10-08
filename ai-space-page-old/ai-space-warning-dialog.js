// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'aiSpaceWarningDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 407979
         */
module.exports = function (module, exports, require) {
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var successDialogComponent = require("success-dialog-component") /*id: 825396*/;
  let r = {
    show: e => {
      let {
        t,
        getPopupContainer: i,
        title: r,
        cancelText: o,
        content: l,
        okText: s,
        onOk: c,
        onCancel: d
      } = e;
      return modalConfirmDialogManager.ModalConfirmDialog.warning({
        ...successDialogComponent.getDialogProps({
          t,
          title: r,
          okText: s,
          content: l,
          cancelText: o,
          onOk: () => {
            if (c != null) {
              c();
            }
          },
          okButtonProps: {
            "data-testid": "ai_space_warn_dialog_confirm_btn"
          },
          onCancel: d,
          getPopupContainer: i
        })
      });
    }
  };
  require.d(exports, {
    aiSpaceWarningDialog: function () {
      return r;
    }
  });
}