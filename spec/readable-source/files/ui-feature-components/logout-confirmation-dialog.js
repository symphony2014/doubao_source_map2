// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'showLogoutConfirmation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 461101
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      title: t,
      description: n,
      cancelProps: i,
      okProps: s,
      overrideFooter: c
    } = e;
    let d = Array.isArray(s) ? s[0] : s;
    let p = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex",
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        "data-testid": "logout_cancel",
        type: "tertiary",
        onClick: async e => {
          var t;
          if ((await (i == null ? undefined : (t = i.onClick) === null || t === undefined ? undefined : t.call(i, e))) !== false) {
            u.destroy();
          }
        },
        children: i == null ? undefined : i.text
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        "data-testid": "logout_ok",
        type: "danger-primary",
        onClick: async e => {
          var t;
          if ((await (d == null ? undefined : (t = d.onClick) === null || t === undefined ? undefined : t.call(d, e))) !== false) {
            u.destroy();
          }
        },
        children: d == null ? undefined : d.text
      })]
    });
    let u = modalConfirmDialogManager.ModalConfirmDialog.warning({
      title: t,
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        children: n
      }),
      footer: reactJsxRuntimeCoreReexport.jsx("div", {
        className: r("flex items-center ", c ? "justify-between" : "justify-end"),
        children: c ? c(p) : p
      }),
      centered: true,
      width: 480
    });
  };
  require.d(exports, {
    showLogoutConfirmation: function () {
      return s;
    }
  });
}