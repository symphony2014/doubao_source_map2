// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'showInputDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 971332
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaInputComponent = require("samantha-input-component") /*id: 214717*/;
  var fileReviewStatusUtils = require("file-review-status-utils") /*id: 282595*/;
  var successDialogComponent = require("success-dialog-component") /*id: 825396*/;
  var u = {
    input: "input-N5uoxV",
    error: "error-qZUiMA",
    "error-tip": "error-tip-DoI924"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function _(e) {
    let {
      t,
      title: i,
      placeholder: a,
      defaultValue: c,
      autoSelectionRange: _,
      inputValueValidator: m,
      cancelText: h,
      maxLength: f,
      okText: v,
      onOk: g,
      onCancel: y
    } = e;
    let [b, w] = reactCoreLibraryReexport.useState(c || "");
    let {
      validateStatus: x = true,
      errorTips: k
    } = (m == null ? undefined : m(b)) || {};
    let S = !b.trim() || !x;
    let E = !x && k;
    let j = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if (!_) {
        return;
      }
      let [t, i] = _;
      if ((e = j.current) !== null && e !== undefined) {
        e.setSelectionRange(t, i);
      }
    }, []);
    let N = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (!S && g != null) {
        g(b);
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs(modalConfirmDialogManager.ModalConfirmDialog, {
      "data-testid": "ai_space_input_dialog",
      ...successDialogComponent.getDialogProps({
        t,
        title: i,
        okText: v,
        cancelText: h,
        onOk: N,
        okButtonProps: {
          "data-testid": "ai_space_input_dialog_confirm_btn"
        },
        onCancel: y,
        confirmDisabled: S,
        cancelButtonProps: {
          "data-testid": "ai_space_input_dialog_cancel_btn"
        }
      }),
      visible: true,
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaInputComponent.SamanthaInput, {
        "data-testid": "ai_space_input_dialog_input",
        maxLength: f,
        ref: j,
        autoFocus: true,
        className: r(u.input, {
          [u.error]: E
        }),
        placeholder: a,
        value: b,
        onChange: w,
        onEnterPress: N
      }), E && reactJsxRuntimeCoreReexport.jsx("div", {
        className: u["error-tip"],
        "data-testid": "ai_space_input_dialog_error_text",
        children: k
      })]
    });
  }
  _.show = e => {
    let {
      getPopupContainer: t,
      ...i
    } = e;
    return fileReviewStatusUtils.mountReactElement(reactJsxRuntimeCoreReexport.jsx(_, {
      ...i
    }), {
      getPopupContainer: t
    });
  };
  require.d(exports, {
    showInputDialog: function () {
      return _;
    }
  });
}