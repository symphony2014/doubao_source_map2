// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'GuidedTourStep'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 487040
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var numberRangeCheckUtil = require("number-range-check-util") /*id: 341356*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var floatingUiReactHooks = require("floating-ui-react-hooks") /*id: 75894*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      steps: n,
      onClose: s,
      onFinish: v,
      onNextButtonClick: x,
      nextBtnText: b,
      finishBtnText: w,
      className: y
    } = e;
    let [S, N] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      next: L
    }), [S]);
    let C = reactCoreLibraryReexport.useRef(null);
    let T = {
      middleware: [floatingUiPositioningHook.offsetMiddleware(12), floatingUiPositioningHook.shiftMiddleware(), floatingUiPositioningHook.flipMiddleware(), floatingUiPositioningHook.arrowMiddleware({
        element: C
      })],
      whileElementsMounted: floatingUiPlatformUtils.observePosition
    };
    let {
      content: _,
      title: j,
      floatingOptions: R,
      selector: E,
      enableArrow: $ = true
    } = n[S] || {};
    let k = throttledDeepCloneUtil.throttledDeepClone({}, T, R);
    let {
      refs: P,
      floatingStyles: Z,
      context: M
    } = floatingUiReactHooks.useFloating(k);
    reactCoreLibraryReexport.useEffect(() => {
      if (!E) {
        return;
      }
      let e = document.querySelector(E);
      if (e) {
        P.setReference(e);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (S >= n.length) {
        if (v != null) {
          v();
        }
      }
    }, [S]);
    let L = e => {
      if (typeof e == "number") {
        if (e === S) {
          F();
        }
        return;
      }
      F();
    };
    let F = () => {
      if (!(S >= n.length)) {
        N(S + 1);
      }
    };
    if (isEmptyUtil.isEmpty(n) || !numberRangeCheckUtil.isInRange(S, 0, n.length) || !P.reference.current) {
      return null;
    }
    let I = S + 1 === n.length;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c("step shadow-[0px_0px_1px_0px_rgba(0,_0,_0,_0.40),_0px_0px_4px_0px_rgba(0,_0,_0,_0.02),_0px_24px_40px_0px_rgba(47,_53,_64,_0.16)] w-280 p-16 bg-s-color-bg-dialogs rounded-s-radius-s", y),
        style: {
          ...Z,
          zIndex: 1000
        },
        ref: P.setFloating,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "header flex",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "grow text-s-color-text-secondary s-font-h3",
            children: j
          }), reactJsxRuntimeCoreReexport.jsx(semiIconButton.SemiIconButton, {
            "data-testid": "guide_close_btn",
            "aria-label": "close",
            type: "tertiary",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: "text-s-color-text-tertiary"
            }),
            theme: "borderless",
            size: "small",
            className: "hover:!bg-s-color-bg-trans hover:!rounded-s-radius-xxss",
            onClick: () => s == null ? undefined : s()
          }, "close-btn")]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "content mt-8 text-s-color-text-secondary s-font-xs",
          children: _
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "footer mt-16 flex items-center",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "grow text-s-color-text-tertiary s-font-xs",
            children: [S + 1, "/", n.length]
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            size: "small",
            onClick: e => {
              if (x != null) {
                x(S, e);
              }
              F();
            },
            children: I && w || b
          })]
        }), $ ? reactJsxRuntimeCoreReexport.jsx(floatingUiReactHooks.Arrow, {
          context: M,
          ref: C,
          className: "arrow drop-shadow-[0px_0px_0px_black]",
          style: {
            transform: "translateY(9px)",
            filter: "drop-shadow(0px 0px 0px black)"
          },
          tipRadius: 3,
          fill: "var(--s-color-bg-dialogs)",
          width: 16,
          height: 7,
          d: "M10.1213 1.12132C8.94975 -0.0502551 7.05025 -0.0502524 5.87868 1.12132L0 7L16 7L10.1213 1.12132Z"
        }) : null]
      }), document.body)
    });
  });
  require.d(exports, {
    GuidedTourStep: function () {
      return v;
    }
  });
}