// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$j' to 'AlertDialogCancel'
// - Renamed export 'VY' to 'AlertDialogContent'
// - Renamed export 'aU' to 'AlertDialogAction'
// - Renamed export 'aV' to 'AlertDialogOver'
// - Renamed export 'dk' to 'AlertDialogDesc'
// - Renamed export 'fC' to 'AlertDialog'
// - Renamed export 'h_' to 'AlertDialogPortal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 282862
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var dialogPrimitiveComponents = require("dialog-primitive-components") /*id: 11308*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = "AlertDialog";
  var [d, p] = reactContextUtils.createContextScope(u, [dialogPrimitiveComponents.createDialogScope]);
  var f = dialogPrimitiveComponents.createDialogScope();
  var h = e => {
    let {
      __scopeAlertDialog: t,
      ...n
    } = e;
    let o = f(t);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.Dialog, {
      ...o,
      ...n,
      modal: true
    });
  };
  h.displayName = u;
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let r = f(n);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogTrigger, {
      ...r,
      ...o,
      ref: t
    });
  }).displayName = "AlertDialogTrigger";
  var m = e => {
    let {
      __scopeAlertDialog: t,
      ...n
    } = e;
    let o = f(t);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogPortal, {
      ...o,
      ...n
    });
  };
  m.displayName = "AlertDialogPortal";
  var g = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let r = f(n);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogOverlay, {
      ...r,
      ...o,
      ref: t
    });
  });
  g.displayName = "AlertDialogOverlay";
  var y = "AlertDialogContent";
  var [v, b] = d(y);
  var E = reactSlotUtils.createSlottable("AlertDialogContent");
  var O = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      children: r,
      ...a
    } = e;
    let u = f(n);
    let d = reactCoreLibraryReexport.useRef(null);
    let p = reactMergeRefs.useMergeRefs(t, d);
    let h = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogTitleWarning, {
      contentName: y,
      titleName: w,
      docsSlug: "alert-dialog",
      children: reactJsxRuntimeCoreReexport.jsx(v, {
        scope: n,
        cancelRef: h,
        children: reactJsxRuntimeCoreReexport.jsxs(dialogPrimitiveComponents.DialogContent, {
          role: "alertdialog",
          ...u,
          ...a,
          ref: p,
          onOpenAutoFocus: composeHandlers.composeHandlers(a.onOpenAutoFocus, e => {
            var t;
            e.preventDefault();
            if ((t = h.current) !== null && t !== undefined) {
              t.focus({
                preventScroll: true
              });
            }
          }),
          onPointerDownOutside: e => e.preventDefault(),
          onInteractOutside: e => e.preventDefault(),
          children: [reactJsxRuntimeCoreReexport.jsx(E, {
            children: r
          }), reactJsxRuntimeCoreReexport.jsx(N, {
            contentRef: d
          })]
        })
      })
    });
  });
  O.displayName = y;
  var w = "AlertDialogTitle";
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let r = f(n);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogTitle, {
      ...r,
      ...o,
      ref: t
    });
  }).displayName = w;
  var C = "AlertDialogDescription";
  var x = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let r = f(n);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogDescription, {
      ...r,
      ...o,
      ref: t
    });
  });
  x.displayName = C;
  var j = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let r = f(n);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
      ...r,
      ...o,
      ref: t
    });
  });
  j.displayName = "AlertDialogAction";
  var S = "AlertDialogCancel";
  var D = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeAlertDialog: n,
      ...o
    } = e;
    let {
      cancelRef: r
    } = b(S, n);
    let l = f(n);
    let a = reactMergeRefs.useMergeRefs(t, r);
    return reactJsxRuntimeCoreReexport.jsx(dialogPrimitiveComponents.DialogClose, {
      ...l,
      ...o,
      ref: a
    });
  });
  D.displayName = S;
  var N = e => {
    let {
      contentRef: t
    } = e;
    let n = `\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${C}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      document.getElementById((e = t.current) === null || e === undefined ? undefined : e.getAttribute("aria-describedby"));
    }, [n, t]);
    return null;
  };
  var k = h;
  var R = m;
  var T = g;
  var A = O;
  var P = j;
  var I = D;
  var M = x;
  require.d(exports, {
    AlertDialogCancel: function () {
      return I;
    },
    AlertDialogContent: function () {
      return A;
    },
    AlertDialogAction: function () {
      return P;
    },
    AlertDialogOver: function () {
      return T;
    },
    AlertDialogDesc: function () {
      return M;
    },
    AlertDialog: function () {
      return k;
    },
    AlertDialogPortal: function () {
      return R;
    }
  });
}