// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SuperTaskCanvasModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 152323
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var superTaskCanvasView = require("super-task-canvas-view") /*id: 574580*/;
  var modalCallbackManager = require("modal-callback-manager") /*id: 941211*/;
  var a = {
    modal: "modal-imjewS",
    "canvas-view": "canvas-view-LYfcFU"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      onClose: n,
      data: i
    } = e;
    if (!i.superTaskData) {
      return null;
    }
    let o = {};
    if (i.superTaskData?.productData) {
      o.height = "calc(100vh - 80px)";
    }
    return reactJsxRuntimeCoreReexport.jsxs(modalConfirmDialogManager.ModalConfirmDialog, {
      visible: true,
      centered: true,
      closeOnEsc: true,
      bodyStyle: o,
      className: a.modal,
      onCancel: n,
      footer: null,
      header: null,
      children: [reactJsxRuntimeCoreReexport.jsx("input", {
        hidden: true,
        style: {
          display: "none"
        },
        tabIndex: 0
      }), i.superTaskData ? reactJsxRuntimeCoreReexport.jsx(superTaskCanvasView.SuperTaskCanvas, {
        onClose: n,
        className: a["canvas-view"],
        ...i
      }) : null]
    });
  };
  let d = e => {
    let {
      contentBlockId: t
    } = e;
    let [n, l] = reactCoreLibraryReexport.useState({
      modalVisible: false
    });
    let r = e => l({
      ...n,
      superTaskCanvasData: e
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = modalCallbackManager.getModalManager("modal");
      if (e != null) {
        e.registerCallBack(t, e => {
          if (e) {
            r(e);
            l(t => ({
              ...t,
              modalVisible: true,
              superTaskCanvasData: e
            }));
          }
        });
      }
      return () => {
        if (e != null) {
          e.unregister(t);
        }
      };
    }, [t]);
    if (n.superTaskCanvasData && n.modalVisible) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        onClose: () => l(e => ({
          ...e,
          modalVisible: false
        })),
        data: n.superTaskCanvasData
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SuperTaskCanvasModal: function () {
      return d;
    }
  });
}