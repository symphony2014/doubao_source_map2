// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'dialogPrimitiveComponents'
// - Resolved require(11308) to 'dialog-primitive-components'
// - Renamed variable 'o' to 'classNamesMergeUtil'
// - Resolved require(67381) to 'class-names-merge-util'
// - Renamed variable 'i' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'E' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'D' to 'infoOutlinedIcon'
// - Resolved require(154400) to 'info-outlined-icon'
// - Renamed variable '_' to 'warningIcon'
// - Resolved require(385435) to 'warning-icon'
// - Renamed variable 'N' to 'closeCircleIcon'
// - Resolved require(948124) to 'close-circle-icon'
// - Renamed variable 'M' to 'reactCheckCircleIcon'
// - Resolved require(610937) to 'react-check-circle-icon'
// - Renamed variable 'L' to 'closeIconComponent_1_1'
// - Resolved require(259726) to 'close-icon-component_1_1'
// - Updated imported property 'fC' to 'Dialog' (module 11308)
// - Updated imported property 'xz' to 'DialogTrigger' (module 11308)
// - Updated imported property 'h_' to 'DialogPortal' (module 11308)
// - Updated imported property 'x8' to 'DialogClose' (module 11308)
// - Updated imported property 'aV' to 'DialogOverlay' (module 11308)
// - Updated imported property 'VY' to 'DialogContent' (module 11308)
// - Updated imported property 'Dx' to 'DialogTitle' (module 11308)
// - Updated imported property 'dk' to 'DialogDescription' (module 11308)
// - Updated imported property 'cn' to 'mergeClassNames' (module 67381)
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'V' to 'CloseIcon' (module 259726)
// - Updated imported property 'x' to 'InfoOutlinedIcon' (module 154400)
// - Updated imported property 'A' to 'WarningIcon' (module 385435)
// - Updated imported property 'q' to 'CloseCircleIcon' (module 948124)
// - Updated imported property 'z' to 'CheckCircleIcon' (module 610937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-dbx-dialog.75226635.js
         * chunkId: 17644
         * moduleId: 176507
         */
module.exports = function (module, exports, require) {
  var dialogPrimitiveComponents = require("dialog-primitive-components") /*id: 11308*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.Dialog, {
      "data-slot": "dialog",
      ...t
    });
  };
  let l = e => {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogTrigger, {
      "data-slot": "dialog-trigger",
      ...t
    });
  };
  let c = e => {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogPortal, {
      "data-slot": "dialog-portal",
      ...t
    });
  };
  let s = e => {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
      "data-slot": "dialog-close",
      ...t
    });
  };
  let u = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogOverlay, {
      "data-slot": "dialog-overlay",
      className: classNamesMergeUtil.mergeClassNames(`
          fixed inset-0 z-50 bg-dbx-bg-mask
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=open]:animate-in data-[state=open]:fade-in-0
        `, t),
      ...n
    });
  };
  let d = e => {
    let {
      overlayProps: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(c, {
      children: [reactJsxRuntimeCoreReexport.jsx(u, {
        ...t
      }), reactJsxRuntimeCoreReexport.jsx(f, {
        ...n
      })]
    });
  };
  let f = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogContent, {
      "data-slot": "dialog-content",
      className: classNamesMergeUtil.mergeClassNames(`
          fixed top-[50%] left-[50%] z-50 grid w-[420px] translate-x-[-50%]
          translate-y-[-50%] transform rounded-dbx-xl
          [border-width:0.5px]
          border-solid border-dbx-line-10 bg-dbx-bg-float px-[23.5px]
          pt-[21.5px] pb-[23.5px]
          shadow-[0_2px_4px_0_rgba(0,0,0,0.02),0_4px_10px_0_rgba(0,0,0,0.03),0_4px_16px_0_rgba(0,0,0,0.03)]
          duration-200
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `, t),
      ...n
    });
  };
  let p = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-slot": "dialog-header",
      className: classNamesMergeUtil.mergeClassNames("flex w-full flex-col", t),
      ...n
    });
  };
  let v = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-slot": "dialog-footer",
      className: classNamesMergeUtil.mergeClassNames("mt-24 flex flex-wrap justify-end", t),
      ...n
    });
  };
  let h = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogTitle, {
      "data-slot": "dialog-title",
      className: classNamesMergeUtil.mergeClassNames(`
          flex items-start
          [font-size:16px]
          leading-24
          [font-weight:500]
          text-dbx-text-primary
        `, t),
      ...n
    });
  };
  let m = e => {
    let {
      className: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogDescription, {
      "data-slot": "dialog-description",
      className: classNamesMergeUtil.mergeClassNames(`
          [font-size:14px]
          leading-22
          [font-weight:400]
          text-dbx-text-primary
        `, t),
      ...n
    });
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function x(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let w = new class {
    subscribe(e) {
      this.subscribers.push(e);
      e(Array.from(this.instances.values()));
      return () => {
        this.subscribers = this.subscribers.filter(t => t !== e);
      };
    }
    notify() {
      let e = Array.from(this.instances.values());
      this.subscribers.forEach(t => t(e));
    }
    generateInstanceId() {
      return (this.instanceCounter++).toString();
    }
    create(e) {
      let t = this.generateInstanceId();
      this.instances.set(t, {
        id: t,
        args: e,
        destroy: () => this.destroy(t),
        onConfirm: () => this.handleConfirm(t),
        onCancel: () => this.handleCancel(t)
      });
      this.notify();
      return t;
    }
    handleConfirm(e) {
      let t = this.instances.get(e);
      if (t == null ? undefined : t.args.onConfirm) {
        t.args.onConfirm();
      }
      this.destroy(e);
    }
    handleCancel(e) {
      let t = this.instances.get(e);
      if (t == null ? undefined : t.args.onCancel) {
        t.args.onCancel();
      }
      this.destroy(e);
    }
    constructor() {
      x(this, "instances", new Map());
      x(this, "subscribers", []);
      x(this, "instanceCounter", 0);
      x(this, "destroy", e => {
        let t = this.instances.has(e);
        if (t) {
          this.instances.delete(e);
          this.notify();
        }
        return t;
      });
      x(this, "destroyAll", () => {
        this.instances.clear();
        this.notify();
      });
      x(this, "getInstances", () => Array.from(this.instances.values()));
      x(this, "success", e => this.create({
        ...e,
        status: "success"
      }));
      x(this, "info", e => this.create({
        ...e,
        status: "info"
      }));
      x(this, "warning", e => this.create({
        ...e,
        status: "warning"
      }));
      x(this, "error", e => this.create({
        ...e,
        status: "error"
      }));
      x(this, "custom", e => this.create(e));
    }
  }();
  let y = {
    show: w.custom,
    success: w.success,
    info: w.info,
    warning: w.warning,
    error: w.error,
    destroy: w.destroy,
    destroyAll: w.destroyAll,
    getInstances: w.getInstances
  };
  let b = reactCoreLibraryReexport.memo(e => {
    let {
      instance: t,
      loading: n,
      setLoadingStates: r
    } = e;
    let {
      status: o,
      title: l,
      description: c,
      content: s,
      cancelBtn: u,
      confirmBtn: f,
      showCloseIcon: p,
      headerProps: v,
      footerProps: h,
      contentWithOverlayProps: m
    } = t.args;
    let x = reactCoreLibraryReexport.useCallback(async e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        r(e => {
          return {
            ...e,
            [t.id]: {
              confirm: true,
              cancel: e[t.id]?.cancel || false
            }
          };
        });
        if (t.args.onConfirm) {
          let e = t.args.onConfirm();
          if (e instanceof Promise) {
            await e;
          }
        }
        t.destroy();
      } catch (e) {} finally {
        r(e => {
          return {
            ...e,
            [t.id]: {
              confirm: false,
              cancel: e[t.id]?.cancel || false
            }
          };
        });
      }
    }, [t, r]);
    let w = reactCoreLibraryReexport.useCallback(async e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        r(e => {
          return {
            ...e,
            [t.id]: {
              confirm: e[t.id]?.confirm || false,
              cancel: true
            }
          };
        });
        if (t.args.onCancel) {
          let e = t.args.onCancel();
          if (e instanceof Promise) {
            await e;
          }
        }
        t.destroy();
      } catch (e) {} finally {
        r(e => {
          return {
            ...e,
            [t.id]: {
              confirm: e[t.id]?.confirm || false,
              cancel: false
            }
          };
        });
      }
    }, [t, r]);
    let y = reactCoreLibraryReexport.useCallback(e => {
      if (!e) {
        t.destroy();
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(a, {
      open: true,
      onOpenChange: y,
      children: reactJsxRuntimeCoreReexport.jsxs(d, {
        ...m,
        onOpenAutoFocus: e => e.preventDefault(),
        children: [reactJsxRuntimeCoreReexport.jsx(S, {
          ...v,
          showCloseIcon: p,
          status: o,
          title: l,
          description: c
        }), s, reactJsxRuntimeCoreReexport.jsx(j, {
          ...h,
          cancelButtonProps: {
            children: u,
            onClick: w,
            loading: n.cancel,
            disabled: n.confirm || n.cancel,
            ...((h == null ? undefined : h.cancelButtonProps) || {})
          },
          actionButtonProps: {
            children: f,
            onClick: x,
            loading: n.confirm,
            disabled: n.confirm || n.cancel,
            ...((h == null ? undefined : h.actionButtonProps) || {})
          }
        })]
      })
    }, t.id);
  }, (e, t) => {
    if (e.instance.id !== t.instance.id || e.loading.confirm !== t.loading.confirm || e.loading.cancel !== t.loading.cancel) {
      return false;
    }
    let n = e.instance.args;
    let r = t.instance.args;
    return n.title === r.title && n.description === r.description && n.status === r.status && n.showCloseIcon === r.showCloseIcon && n.confirmBtn === r.confirmBtn && n.cancelBtn === r.cancelBtn && n.content === r.content && n.onConfirm === r.onConfirm && n.onCancel === r.onCancel && e.setLoadingStates === t.setLoadingStates && true;
  });
  b.displayName = "DialogInstance";
  let C = () => {
    let [e, t] = reactCoreLibraryReexport.useState([]);
    let [n, r] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e = w.subscribe(e => {
        t(e);
        r(t => {
          let n = {
            ...t
          };
          let r = new Set(e.map(e => e.id));
          Object.keys(n).forEach(e => {
            if (!r.has(e)) {
              delete n[e];
            }
          });
          return n;
        });
      });
      return () => {
        e();
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e.map(e => {
        let t = n[e.id] || {
          confirm: false,
          cancel: false
        };
        return reactJsxRuntimeCoreReexport.jsx(b, {
          instance: e,
          loading: t,
          setLoadingStates: r
        }, e.id);
      })
    });
  };
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  let j = e => {
    let {
      cancelButtonProps: t,
      actionButtonProps: n,
      extraInfoNode: a,
      classNames: l,
      customCancelButton: c,
      customActionButton: s
    } = e;
    let {
      className: u,
      ...d
    } = n || {};
    let {
      className: f,
      ...p
    } = t || {};
    return reactJsxRuntimeCoreReexport.jsxs(v, {
      className: classNamesMergeUtil.mergeClassNames(`
          flex w-full flex-wrap content-start items-start gap-y-10
          overflow-x-hidden
        `, l == null ? undefined : l.footer),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("mr-auto self-center", l == null ? undefined : l.extraInfoNode),
        children: a
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames(`
            ml-auto flex max-w-full flex-wrap items-start justify-end gap-x-10
            gap-y-10
          `, l == null ? undefined : l.actionButtonWrapper),
        children: [reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
          asChild: true,
          children: c || reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "rectangle",
            color: "grey-outline",
            className: classNamesMergeUtil.mergeClassNames("block max-w-full min-w-80 truncate", f),
            ...p
          })
        }), reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
          asChild: true,
          children: s || reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "rectangle",
            color: "brand-filled",
            className: classNamesMergeUtil.mergeClassNames("block max-w-full min-w-80 truncate", u),
            ...d
          })
        })]
      })]
    });
  };
  var infoOutlinedIcon = require("info-outlined-icon") /*id: 154400*/;
  var warningIcon = require("warning-icon") /*id: 385435*/;
  var closeCircleIcon = require("close-circle-icon") /*id: 948124*/;
  var reactCheckCircleIcon = require("react-check-circle-icon") /*id: 610937*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  let R = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      onClick: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
      "data-slot": "dialog-close",
      ref: t,
      className: classNamesMergeUtil.mergeClassNames("size-24 shrink-0 text-dbx-text-secondary", n),
      asChild: true,
      onClick: a,
      children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        color: "grey-filled",
        children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
      })
    });
  });
  let A = {
    info: infoOutlinedIcon.InfoOutlinedIcon,
    warning: warningIcon.WarningIcon,
    error: closeCircleIcon.CloseCircleIcon,
    success: reactCheckCircleIcon.CheckCircleIcon
  };
  let S = e => {
    let {
      status: t,
      showCloseIcon: n,
      title: r,
      classNames: a,
      onClickCloseIcon: l,
      description: c
    } = e;
    let s = t ? A[t] : () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    let u = t && !!A[t];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-slot": "dialog-header",
      className: classNamesMergeUtil.mergeClassNames("flex w-full", a == null ? undefined : a.header),
      children: [t && reactJsxRuntimeCoreReexport.jsx(s, {
        className: classNamesMergeUtil.mergeClassNames("mt-3 mr-12 size-18 shrink-0 rounded-[50%]", a == null ? undefined : a.icon)
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames("flex-1", a == null ? undefined : a.contentWrapper),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: classNamesMergeUtil.mergeClassNames("flex items-center justify-between", {
            "mb-8": u,
            "mb-4": !u
          }, a == null ? undefined : a.titleWrapper),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            "data-slot": "dialog-title",
            className: classNamesMergeUtil.mergeClassNames(`
                flex items-start
                [font-size:16px]
                leading-24
                [font-weight:500]
                text-dbx-text-primary
              `, a == null ? undefined : a.title),
            ...e,
            children: r
          }), n && reactJsxRuntimeCoreReexport.jsx(R, {
            className: "-mr-5",
            onClick: l
          })]
        }), reactJsxRuntimeCoreReexport.jsx(m, {
          className: a == null ? undefined : a.description,
          children: c
        })]
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    DbxDialoger: function () {
      return C;
    },
    DbxDialogHeader: function () {
      return p;
    },
    dbxDialogAPI: function () {
      return y;
    },
    DbxDialogHeaderVariants: function () {
      return S;
    },
    DbxDialogOverlay: function () {
      return u;
    },
    DbxDialog: function () {
      return a;
    },
    DbxDialogContent: function () {
      return f;
    },
    DbxDialogFooter: function () {
      return v;
    },
    DbxDialogDescription: function () {
      return m;
    },
    DbxDialogTitle: function () {
      return h;
    },
    DbxDialogPortal: function () {
      return c;
    },
    DbxDialogClose: function () {
      return s;
    },
    DbxDialogTrigger: function () {
      return l;
    },
    DbxDialogFooterVariants: function () {
      return j;
    },
    DbxDialogCloseIcon: function () {
      return R;
    },
    DbxDialogContentWithOverlay: function () {
      return d;
    }
  });
}