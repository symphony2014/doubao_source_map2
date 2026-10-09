// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nL' to 'AlertDialogActions'
// - Renamed export 'xR' to 'AlertDialogDesc'
// - Renamed export 'DK' to 'AlertDialogWrapper'
// - Renamed export 'gF' to 'AlertDialogFooter'
// - Renamed export 'Jo' to 'AlertDialogHeader'
// - Renamed export 'L4' to 'AlertDialogProvider'
// - Renamed export 'rg' to 'alertDialogApi'
// - Renamed export 'Gj' to 'AlertDialogRoot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 119530
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var alertDialogComponents_1 = require("alert-dialog-components_1") /*id: 282862*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let s = new class {
    subscribe(e) {
      this.subscribers.push(e);
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
      r(this, "instances", new Map());
      r(this, "subscribers", []);
      r(this, "instanceCounter", 0);
      r(this, "destroy", e => {
        let t = this.instances.has(e);
        if (t) {
          this.instances.delete(e);
          this.notify();
        }
        return t;
      });
      r(this, "destroyAll", () => {
        this.instances.clear();
        this.notify();
      });
      r(this, "getInstances", () => Array.from(this.instances.values()));
      r(this, "success", e => this.create({
        ...e,
        status: "success"
      }));
      r(this, "info", e => this.create({
        ...e,
        status: "info"
      }));
      r(this, "warning", e => this.create({
        ...e,
        status: "warning"
      }));
      r(this, "error", e => this.create({
        ...e,
        status: "error"
      }));
      r(this, "custom", e => this.create(e));
    }
  }();
  let c = {
    show: s.custom,
    success: s.success,
    info: s.info,
    warning: s.warning,
    error: s.error,
    destroy: s.destroy,
    destroyAll: s.destroyAll,
    getInstances: s.getInstances
  };
  let d = reactCoreLibraryReexport.memo(e => {
    let {
      instance: t,
      loading: n,
      setLoadingStates: l
    } = e;
    let {
      status: o,
      title: r,
      description: s,
      content: c,
      cancelBtn: d,
      confirmBtn: u,
      showCloseIcon: p,
      headerProps: _,
      footerProps: h,
      contentWithOverlayProps: m
    } = t.args;
    let g = reactCoreLibraryReexport.useCallback(async e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        l(e => {
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
        l(e => {
          return {
            ...e,
            [t.id]: {
              confirm: false,
              cancel: e[t.id]?.cancel || false
            }
          };
        });
      }
    }, [t, l]);
    let b = reactCoreLibraryReexport.useCallback(async e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        l(e => {
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
        l(e => {
          return {
            ...e,
            [t.id]: {
              confirm: e[t.id]?.confirm || false,
              cancel: false
            }
          };
        });
      }
    }, [t, l]);
    let v = reactCoreLibraryReexport.useCallback(e => {
      if (!e) {
        t.destroy();
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(y, {
      open: true,
      onOpenChange: v,
      children: reactJsxRuntimeCoreReexport.jsxs(j, {
        ...m,
        onOpenAutoFocus: e => e.preventDefault(),
        children: [reactJsxRuntimeCoreReexport.jsx(w, {
          ..._,
          showCloseIcon: p,
          status: o,
          title: r,
          description: s
        }), c, reactJsxRuntimeCoreReexport.jsx(f, {
          ...h,
          cancelButtonProps: {
            children: d,
            onClick: b,
            loading: n.cancel,
            ...((h == null ? undefined : h.cancelButtonProps) || {})
          },
          actionButtonProps: {
            children: u,
            onClick: g,
            loading: n.confirm,
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
    let i = t.instance.args;
    return n.title === i.title && n.description === i.description && n.status === i.status && n.showCloseIcon === i.showCloseIcon && n.confirmBtn === i.confirmBtn && n.cancelBtn === i.cancelBtn && n.content === i.content && n.onConfirm === i.onConfirm && n.onCancel === i.onCancel && e.setLoadingStates === t.setLoadingStates && true;
  });
  d.displayName = "AlertDialogInstance";
  let u = () => {
    let [e, t] = reactCoreLibraryReexport.useState([]);
    let [n, l] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let e = s.subscribe(e => {
        t(e);
        l(t => {
          let n = {
            ...t
          };
          let i = new Set(e.map(e => e.id));
          Object.keys(n).forEach(e => {
            if (!i.has(e)) {
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
        return reactJsxRuntimeCoreReexport.jsx(d, {
          instance: e,
          loading: t,
          setLoadingStates: l
        }, e.id);
      })
    });
  };
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  let f = e => {
    let {
      cancelButtonProps: t,
      actionButtonProps: n,
      extraInfoNode: i,
      classNames: r,
      customCancelButton: s,
      customActionButton: c
    } = e;
    let {
      className: d,
      ...u
    } = n || {};
    let {
      className: f,
      ..._
    } = t || {};
    return reactJsxRuntimeCoreReexport.jsxs(N, {
      className: classNamesMergeUtil.mergeClassNames(`
          flex w-full flex-wrap content-start items-start gap-y-10
          overflow-x-hidden
        `, r == null ? undefined : r.footer),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("mr-auto self-center", r == null ? undefined : r.extraInfoNode),
        children: i
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames(`
            ml-auto flex max-w-full flex-wrap items-start justify-end gap-x-10
            gap-y-10
          `, r == null ? undefined : r.actionButtonWrapper),
        children: [reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogCancel, {
          asChild: true,
          children: s || reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "rectangle",
            color: "grey-outline",
            className: classNamesMergeUtil.mergeClassNames("block max-w-full min-w-80 truncate", f),
            ..._
          })
        }), reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogAction, {
          asChild: true,
          children: c || reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "rectangle",
            color: "brand-filled",
            className: classNamesMergeUtil.mergeClassNames("block max-w-full min-w-80 truncate", d),
            ...u
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
  let v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      onClick: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogCancel, {
      ref: t,
      className: classNamesMergeUtil.mergeClassNames("size-24 shrink-0 text-dbx-text-secondary", n),
      asChild: true,
      onClick: i,
      children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        color: "grey-filled",
        children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
      })
    });
  });
  let x = {
    info: infoOutlinedIcon.InfoOutlinedIcon,
    warning: warningIcon.WarningIcon,
    error: closeCircleIcon.CloseCircleIcon,
    success: reactCheckCircleIcon.CheckCircleIcon
  };
  let w = e => {
    let {
      status: t,
      showCloseIcon: n,
      title: i,
      classNames: l,
      onClickCloseIcon: r,
      description: s
    } = e;
    let c = t ? x[t] : () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    let d = t && !!x[t];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-slot": "alert-dialog-header",
      className: classNamesMergeUtil.mergeClassNames("flex w-full", l == null ? undefined : l.header),
      children: [t && reactJsxRuntimeCoreReexport.jsx(c, {
        className: classNamesMergeUtil.mergeClassNames("mt-3 mr-12 size-18 shrink-0 rounded-[50%]", l == null ? undefined : l.icon)
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames("flex-1", l == null ? undefined : l.contentWrapper),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: classNamesMergeUtil.mergeClassNames("flex items-center justify-between", {
            "mb-8": d,
            "mb-4": !d
          }, l == null ? undefined : l.titleWrapper),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            "data-slot": "alert-dialog-title",
            className: classNamesMergeUtil.mergeClassNames(`
                flex items-start
                [font-size:16px]
                leading-24
                [font-weight:500]
                text-dbx-text-primary
              `, l == null ? undefined : l.title),
            ...e,
            children: i
          }), n && reactJsxRuntimeCoreReexport.jsx(v, {
            className: "-mr-5",
            onClick: r
          })]
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          className: l == null ? undefined : l.description,
          children: s
        })]
      })]
    });
  };
  function y(e) {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialog, {
      "data-slot": "alert-dialog",
      ...t
    });
  }
  function k(e) {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogPortal, {
      "data-slot": "alert-dialog-portal",
      ...t
    });
  }
  let C = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogOver, {
      "data-slot": "alert-dialog-overlay",
      className: classNamesMergeUtil.mergeClassNames(`
          fixed inset-0 z-50 bg-dbx-bg-mask
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=open]:animate-in data-[state=open]:fade-in-0
        `, n),
      ref: t,
      ...i
    });
  });
  function j(e) {
    let {
      overlayProps: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(k, {
      children: [reactJsxRuntimeCoreReexport.jsx(C, {
        ...t
      }), reactJsxRuntimeCoreReexport.jsx(S, {
        ...n
      })]
    });
  }
  let S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogContent, {
      "data-slot": "alert-dialog-content",
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
        `, n),
      ref: t,
      ...i
    });
  });
  let N = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-slot": "alert-dialog-footer",
      className: classNamesMergeUtil.mergeClassNames("mt-24 flex flex-wrap justify-end", n),
      ref: t,
      ...i
    });
  });
  let T = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents_1.AlertDialogDesc, {
      "data-slot": "alert-dialog-description",
      className: classNamesMergeUtil.mergeClassNames(`
          [font-size:14px]
          leading-22
          [font-weight:400]
          text-dbx-text-primary
        `, n),
      ref: t,
      ...i
    });
  });
  require.d(exports, {
    AlertDialogActions: function () {
      return f;
    },
    AlertDialogDesc: function () {
      return T;
    },
    AlertDialogWrapper: function () {
      return y;
    },
    AlertDialogFooter: function () {
      return N;
    },
    AlertDialogHeader: function () {
      return w;
    },
    AlertDialogProvider: function () {
      return u;
    },
    alertDialogApi: function () {
      return c;
    },
    AlertDialogRoot: function () {
      return j;
    }
  });
}