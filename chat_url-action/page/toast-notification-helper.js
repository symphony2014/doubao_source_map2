// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'toastNotification'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 83051
         */
module.exports = function (module, exports, require) {
  var sonnerToastNotification = require("sonner-toast-notification") /*id: 913343*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactCheckCircleIcon = require("react-check-circle-icon") /*id: 610937*/;
  var closeCircleIcon = require("close-circle-icon") /*id: 948124*/;
  var warningIcon = require("warning-icon") /*id: 385435*/;
  var infoOutlinedIcon = require("info-outlined-icon") /*id: 154400*/;
  var closeIconComponent_1 = require("close-icon-component_1") /*id: 315885*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = {
    success: reactJsxRuntimeCoreReexport.jsx(reactCheckCircleIcon.CheckCircleIcon, {
      className: "h-16 w-16"
    }),
    error: reactJsxRuntimeCoreReexport.jsx(closeCircleIcon.CloseCircleIcon, {
      className: "h-16 w-16"
    }),
    warning: reactJsxRuntimeCoreReexport.jsx(warningIcon.WarningIcon, {
      className: "h-16 w-16"
    }),
    info: reactJsxRuntimeCoreReexport.jsx(infoOutlinedIcon.InfoOutlinedIcon, {
      className: "h-16 w-16"
    }),
    loading: reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
      size: 16,
      color: "brand"
    })
  };
  let g = e => {
    let {
      id: t,
      icon: a = "",
      title: i,
      classNames: s = {},
      showCloseIcon: o,
      closeIcon: l,
      renderBtns: c,
      btnList: g = []
    } = e;
    let m = reactCoreLibraryReexport.useMemo(() => !!a, [a]);
    let x = reactCoreLibraryReexport.useMemo(() => g.length > 0 || typeof c == "function", [g, c]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: classNamesMergeUtil.mergeClassNames(`
          flex max-w-600 rounded-dbx-3
          [border-width:0.5px]
          border-solid border-dbx-line-10 bg-dbx-bg-float px-[19.5px]
          py-[15.5px]
          [box-shadow:0_2px_4px_0_rgba(0,0,0,0.02),_0_4px_16px_0_rgba(0,0,0,0.04),_0_8px_32px_0_rgba(0,0,0,0.08)]
        `, o ? "pr-[15.5px]" : "", s == null ? undefined : s.root),
      children: [m && reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("flex h-22 items-center", s == null ? undefined : s.iconWrapper),
        children: typeof a == "string" && Object.keys(f).includes(a) ? f[a] : a
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames("ml-12 flex flex-wrap gap-x-20 gap-y-6", s == null ? undefined : s.contentWrapper),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(`
              [font-size:14px]
              leading-22
              [font-weight:500]
              text-dbx-text-primary
            `, s == null ? undefined : s.title),
          children: i
        }), x && reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames("-ml-4 flex items-center gap-x-8", s == null ? undefined : s.btnList),
          children: typeof c == "function" ? c(t) : g.length ? g.map(e => {
            let {
              onClick: a,
              ...r
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              variant: "text",
              className: "text-dbx-text-secondary",
              color: "grey-filled",
              onClick: () => {
                if (a != null) {
                  a(t);
                }
              },
              ...r
            });
          }) : null
        })]
      }), o ? l || reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        color: "grey-filled",
        className: classNamesMergeUtil.mergeClassNames("ml-8 h-22 w-22", s == null ? undefined : s.closeIcon),
        onClick: () => sonnerToastNotification.toast.dismiss(t),
        children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1.CloseIcon, {
          className: "size-14 text-dbx-text-secondary"
        })
      }) : null]
    });
  };
  let m = {
    success: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a,
        icon: "success"
      }), n);
    },
    error: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a,
        icon: "error"
      }), n);
    },
    warning: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a,
        icon: "warning"
      }), n);
    },
    info: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a,
        icon: "info"
      }), n);
    },
    loading: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a,
        icon: "loading"
      }), n);
    },
    custom: (e, t) => {
      let {
        customContentProps: a = {},
        ...n
      } = t || {};
      return sonnerToastNotification.toast.custom(t => reactJsxRuntimeCoreReexport.jsx(g, {
        title: e,
        id: t,
        ...a
      }), n);
    },
    dismiss: e => sonnerToastNotification.toast.dismiss(e)
  };
  require.d(exports, {
    toastNotification: function () {
      return m;
    }
  });
}