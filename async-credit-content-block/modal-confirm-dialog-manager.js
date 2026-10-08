// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'ModalConfirmDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 948195
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let u = e => {
    let [t, n] = reactCoreLibraryReexport.useState(false);
    return {
      loading: t,
      handler: async t => {
        var i;
        var r;
        try {
          n(true);
          let i = (r = e.onTrigger) === null || r === undefined ? undefined : r.call(e, t);
          if (i == null ? undefined : i.then) {
            await i;
          }
        } finally {
          n(false);
        }
        if ((i = e.onFinish) !== null && i !== undefined) {
          i.call(e);
        }
      }
    };
  };
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var p = {
    modal: "modal-ndpupm",
    cancel: "cancel-Zia0Xr"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      title: t,
      desc: n,
      icon: r,
      closable: d = true,
      closeIcon: f,
      onCancel: g,
      onOk: b,
      okText: y,
      cancelText: v,
      hasCancel: w = true,
      footerFill: _,
      cancelButtonProps: x,
      okButtonProps: k,
      confirmLoading: E,
      cancelLoading: C
    } = e;
    let {
      loading: O,
      handler: j
    } = u({
      onTrigger: b
    });
    let {
      loading: P,
      handler: T
    } = u({
      onTrigger: g
    });
    let S = () => d ? reactJsxRuntimeCoreReexport.jsx(semiIconButton.SemiIconButton, {
      "data-testid": "modal_close",
      "aria-label": "close",
      autoFocus: false,
      tabIndex: -1,
      onClick: T,
      type: "tertiary",
      icon: f || reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
        className: "text-s-color-text-tertiary",
        tabIndex: -1
      }),
      theme: "borderless",
      size: "small",
      className: "hover:!rounded-s-radius-xxs hover:!bg-s-color-bg-trans"
    }, "close-btn") : null;
    let N = {
      closeIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
        className: "text-s-color-text-tertiary"
      }),
      bodyStyle: {
        color: "var(--s-color-text-secondary)",
        font: "var(--s-font-small)",
        padding: t ? "20px 0" : "8px 0 28px 0"
      },
      ...(t ? {
        header: (() => {
          let e = S();
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "modal_title",
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex",
              children: [r ? reactJsxRuntimeCoreReexport.jsx("div", {
                className: "mr-8 flex items-center",
                children: r
              }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
                className: "grow text-s-color-text-secondary s-font-h3",
                children: t
              }), e]
            }), n ? reactJsxRuntimeCoreReexport.jsx("div", {
              className: "mt-4 text-s-color-text-secondary s-font-xs",
              children: n
            }) : null]
          });
        })()
      } : {}),
      footer: reactJsxRuntimeCoreReexport.jsx(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Modal",
        children: e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o({
            "footer-fill grid gap-12": _,
            "grid-cols-[1fr_1fr]": _ && w
          }),
          children: [w ? reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "tertiary",
            size: "medium",
            onClick: T,
            loading: isUndefinedCheck.isUndefined(C) ? P : C,
            "aria-label": "cancel",
            ...x,
            className: o("!ml-0", p.cancel, x == null ? undefined : x.className),
            children: v || e.cancel
          }) : null, reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "primary",
            size: "medium",
            onClick: j,
            loading: isUndefinedCheck.isUndefined(E) ? O : E,
            "aria-label": "confirm",
            ...k,
            children: y || e.confirm
          })]
        })
      })
    };
    let Z = {
      ...N,
      ...e,
      ...(e.bodyStyle ? {
        bodyStyle: Object.assign({}, N.bodyStyle, e.bodyStyle)
      } : {})
    };
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      ...Z,
      className: o(p.modal, Z.className)
    });
  };
  let g = [];
  let b = () => {
    g = [];
  };
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var rtlTimerIconComponent = require("rtl-timer-icon-component") /*id: 325670*/;
  var checkCircleIconComponent = require("check-circle-icon-component") /*id: 50771*/;
  var rtlWarningIcon = require("rtl-warning-icon") /*id: 317332*/;
  var rtlInfoOutlinedIcon = require("rtl-info-outlined-icon") /*id: 918336*/;
  let k = e => {
    let [t, n] = reactCoreLibraryReexport.useState(true);
    let {
      direction: i
    } = e;
    let {
      title: r,
      content: s,
      icon: l,
      onCancel: a,
      onOk: c,
      className: h,
      ...p
    } = e;
    let {
      loading: g,
      handler: b
    } = u({
      onTrigger: c,
      onFinish: () => n(false)
    });
    let {
      loading: y,
      handler: v
    } = u({
      onTrigger: a,
      onFinish: () => n(false)
    });
    let w = "semi-confirm";
    let _ = o(h, w, {
      [`${w}-rtl`]: i === "rtl"
    });
    let x = r === null ? null : reactJsxRuntimeCoreReexport.jsx("span", {
      className: `${w}-title-text`,
      children: r
    });
    let k = o(`${w}-content`, {
      [`${w}-content-withIcon`]: e.icon
    });
    return reactJsxRuntimeCoreReexport.jsx(f, {
      confirmLoading: g,
      cancelLoading: y,
      className: _,
      title: x,
      onOk: b,
      onCancel: v,
      icon: l,
      visible: t,
      bodyStyle: {
        paddingTop: "8px",
        paddingBottom: "16px"
      },
      ...p,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: k,
        "x-semi-prop": "content",
        children: s
      })
    });
  };
  function E(e) {
    let t = document.createElement("div");
    document.body.appendChild(t);
    let n = {
      ...e
    };
    let i = () => {
      if (reactDomEntryWrapper.unmountComponentAtNode(t) && t.parentNode) {
        t.parentNode.removeChild(t);
      }
      for (let e = 0; e < g.length; e++) {
        if (g[e] === o) {
          g.splice(e, 1);
          break;
        }
      }
    };
    function r(n) {
      let {
        afterClose: r
      } = n;
      reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(k, {
        ...n,
        afterClose: () => {
          if (r != null) {
            r();
          }
          i();
        },
        motion: e.motion
      }), t);
    }
    function o() {
      r(n = {
        ...n,
        visible: false
      });
    }
    r(n);
    g.push(o);
    return {
      destroy: o,
      update: function (e) {
        r(n = {
          ...n,
          ...e
        });
      }
    };
  }
  let C = f;
  C.info = function (e) {
    return E({
      type: "info",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlTimerIconComponent.RtlTimerIcon, {
        className: "!text-20 py-2 text-s-color-system-info"
      }),
      ...e
    });
  };
  C.success = function (e) {
    return E({
      type: "success",
      icon: reactJsxRuntimeCoreReexport.jsx(checkCircleIconComponent.CheckCircleIcon, {
        className: "!text-20 py-2 text-s-color-system-success"
      }),
      ...e
    });
  };
  C.warning = function (e) {
    return E(function (e) {
      let {
        okButtonProps: t = {},
        ...n
      } = e;
      return {
        type: "warning",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlWarningIcon.WarningOutlinedIcon, {
          className: "!text-20 py-2 text-s-color-system-warning"
        }),
        okButtonProps: {
          type: "danger-primary",
          ...t
        },
        ...n
      };
    }(e));
  };
  C.error = function (e) {
    return E(function (e) {
      let {
        okButtonProps: t = {},
        ...n
      } = e;
      return {
        type: "error",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
          className: "!text-20 py-2 text-s-color-system-alert"
        }),
        okButtonProps: {
          type: "danger-primary",
          ...t
        },
        ...n
      };
    }(e));
  };
  C.confirm = function (e) {
    return E({
      type: "confirm",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlTimerIconComponent.RtlTimerIcon, {
        className: "!text-20 py-2 text-s-color-system-info"
      }),
      ...e
    });
  };
  C.destroyAll = function () {
    for (let e = 0, t = g.length; e < t; e++) {
      let t = g[e];
      if (t) {
        t();
      }
    }
    b();
  };
  require.d(exports, {
    ModalConfirmDialog: function () {
      return C;
    }
  });
}