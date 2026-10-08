// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'popoverUiComponents'
// - Resolved require(125882) to 'popover-ui-components'
// - Renamed variable 'i' to 'classNamesMergeUtil'
// - Resolved require(67381) to 'class-names-merge-util'
// - Renamed variable 's' to 'tooltipComponent'
// - Resolved require(258571) to 'tooltip-component'
// - Renamed variable 'o' to 'userAgentDeviceDetector_1'
// - Resolved require(720848) to 'user-agent-device-detector_1'
// - Renamed variable 'd' to 'hoverCardComponents'
// - Resolved require(551137) to 'hover-card-components'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'x' to 'buttonComponent_1'
// - Resolved require(893534) to 'button-component_1'
// - Renamed variable 'v' to 'closeCircleIcon'
// - Resolved require(948124) to 'close-circle-icon'
// - Renamed variable 'b' to 'reactCheckCircleIcon'
// - Resolved require(610937) to 'react-check-circle-icon'
// - Renamed variable 'C' to 'warningIcon'
// - Resolved require(385435) to 'warning-icon'
// - Renamed variable 'w' to 'infoOutlinedIcon'
// - Resolved require(154400) to 'info-outlined-icon'
// - Updated imported property 'h_' to 'HoverCardPortal' (module 551137)
// - Updated imported property 'fC' to 'HoverCard' (module 551137)
// - Updated imported property 'xz' to 'HoverCardTrigger' (module 551137)
// - Updated imported property 'VY' to 'HoverCardContent' (module 551137)
// - Updated imported property 'h_' to 'PopoverPortal' (module 125882)
// - Updated imported property 'fC' to 'Popover' (module 125882)
// - Updated imported property 'xz' to 'PopoverTrigger' (module 125882)
// - Updated imported property 'VY' to 'PopoverContent' (module 125882)
// - Updated imported property 'Eh' to 'PopoverArrow' (module 125882)
// - Updated imported property 'KX' to 'isMobileOrIos' (module 720848)
// - Updated imported property 'P' to 'Tooltip' (module 258571)
// - Updated imported property 'cn' to 'mergeClassNames' (module 67381)
// - Updated imported property 'q' to 'CloseCircleIcon' (module 948124)
// - Updated imported property 'z' to 'CheckCircleIcon' (module 610937)
// - Updated imported property 'A' to 'WarningIcon' (module 385435)
// - Updated imported property 'x' to 'InfoOutlinedIcon' (module 154400)
// - Updated imported property 'Z' to 'Button' (module 893534)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 457187
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var popoverUiComponents = require("popover-ui-components") /*id: 125882*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var tooltipComponent = require("tooltip-component") /*id: 258571*/;
  var userAgentDeviceDetector_1 = require("user-agent-device-detector_1") /*id: 720848*/;
  let l = reactCoreLibraryReexport.createContext({
    getPopupContainer: null
  });
  var hoverCardComponents = require("hover-card-components") /*id: 551137*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      children: t,
      getPopupContainer: a
    } = e;
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(hoverCardComponents.HoverCardPortal, {
        container: a(),
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    }
  };
  let h = function (e = "top") {
    return {
      top: {
        side: "top",
        align: "center"
      },
      topLeft: {
        side: "top",
        align: "start"
      },
      topRight: {
        side: "top",
        align: "end"
      },
      right: {
        side: "right",
        align: "center"
      },
      rightTop: {
        side: "right",
        align: "start"
      },
      rightBottom: {
        side: "right",
        align: "end"
      },
      bottom: {
        side: "bottom",
        align: "center"
      },
      bottomLeft: {
        side: "bottom",
        align: "start"
      },
      bottomRight: {
        side: "bottom",
        align: "end"
      },
      left: {
        side: "left",
        align: "center"
      },
      leftTop: {
        side: "left",
        align: "start"
      },
      leftBottom: {
        side: "left",
        align: "end"
      }
    }[e];
  };
  let p = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      content: a,
      children: n,
      visible: i,
      onVisibleChange: s,
      position: o = "bottom",
      mouseEnterDelay: p = 50,
      mouseLeaveDelay: f = 50,
      style: g,
      className: m,
      zIndex: x,
      autoAdjustOverflow: v = true,
      onClickOutSide: b,
      getPopupContainer: C,
      rePosKey: w,
      spacing: _ = 4,
      preventOverflow: y = true,
      arrowProps: N,
      contentProps: j,
      onPointerAndFocusOutside: L,
      onFocusOutside: z,
      ...k
    } = e;
    let E = reactCoreLibraryReexport.useCallback(e => {
      if (s != null) {
        s(e);
      }
    }, [s]);
    let [, T] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      if (w !== undefined) {
        T({});
      }
    }, [w]);
    let {
      getPopupContainer: M
    } = reactCoreLibraryReexport.useContext(l);
    let {
      side: D,
      align: P
    } = h(o);
    let R = reactCoreLibraryReexport.useCallback(e => {
      if (b != null) {
        b(e);
      }
    }, [b]);
    return reactJsxRuntimeCoreReexport.jsxs(hoverCardComponents.HoverCard, {
      onOpenChange: E,
      openDelay: p,
      closeDelay: f,
      defaultOpen: undefined,
      children: [reactJsxRuntimeCoreReexport.jsx(hoverCardComponents.HoverCardTrigger, {
        asChild: true,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "inline-block",
          tabIndex: 0,
          children: n
        })
      }), reactJsxRuntimeCoreReexport.jsx(u, {
        getPopupContainer: C || M,
        children: reactJsxRuntimeCoreReexport.jsx(hoverCardComponents.HoverCardContent, {
          ref: t,
          side: D,
          align: P,
          sideOffset: _,
          avoidCollisions: v,
          collisionPadding: !!y * 8,
          onPointerDownOutside: R,
          onInteractOutside: L,
          onFocusOutside: z,
          className: m,
          style: {
            ...g,
            ...(x !== undefined ? {
              zIndex: x
            } : {})
          },
          ...j,
          ...k,
          children: a
        })
      })]
    });
  });
  p.displayName = "DbxHoverCard";
  let f = e => {
    let {
      children: t,
      getPopupContainer: a
    } = e;
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(popoverUiComponents.PopoverPortal, {
        container: a(),
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    }
  };
  let g = function (e = "top") {
    return {
      top: {
        side: "top",
        align: "center"
      },
      topLeft: {
        side: "top",
        align: "start"
      },
      topRight: {
        side: "top",
        align: "end"
      },
      right: {
        side: "right",
        align: "center"
      },
      rightTop: {
        side: "right",
        align: "start"
      },
      rightBottom: {
        side: "right",
        align: "end"
      },
      bottom: {
        side: "bottom",
        align: "center"
      },
      bottomLeft: {
        side: "bottom",
        align: "start"
      },
      bottomRight: {
        side: "bottom",
        align: "end"
      },
      left: {
        side: "left",
        align: "center"
      },
      leftTop: {
        side: "left",
        align: "start"
      },
      leftBottom: {
        side: "left",
        align: "end"
      }
    }[e];
  };
  let m = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      content: a,
      children: d,
      visible: u,
      defaultVisible: h = false,
      onVisibleChange: m,
      hoverByHoverCard: x = false,
      position: v = "bottom",
      showArrow: b = false,
      arrowPointAtCenter: C = false,
      mouseEnterDelay: w = 50,
      mouseLeaveDelay: _ = 50,
      style: y,
      className: N,
      zIndex: j,
      autoAdjustOverflow: L = true,
      stopPropagation: z = false,
      clickToHide: k = false,
      closeOnEsc: E = true,
      onClickOutSide: T,
      getPopupContainer: M,
      rePosKey: D,
      spacing: P = 4,
      motion: R = true,
      preventOverflow: S = true,
      arrowProps: A,
      contentProps: $,
      onOpenAutoFocus: B,
      onCloseAutoFocus: O,
      onPointerAndFocusOutside: F,
      onFocusOutside: I,
      modal: Z = false,
      ...H
    } = e;
    let {
      trigger: W = "hover"
    } = e;
    if (userAgentDeviceDetector_1.isMobileOrIos() && W === "hover") {
      W = "click";
    }
    let [V, U] = reactCoreLibraryReexport.useState(h);
    let [X, K] = reactCoreLibraryReexport.useState(null);
    let G = W === "custom" || u !== undefined;
    let J = G ? u : V;
    let Q = reactCoreLibraryReexport.useRef(null);
    let q = reactCoreLibraryReexport.useRef(null);
    let Y = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      Y.current = J;
    });
    let [, ee] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      if (D !== undefined) {
        ee({});
      }
    }, [D]);
    let et = reactCoreLibraryReexport.useCallback(e => {
      if (!G && W !== "hover") {
        U(e);
      }
      if (m != null) {
        m(e);
      }
    }, [G, m, W]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (Q.current) {
        clearTimeout(Q.current);
      }
      if (q.current) {
        clearTimeout(q.current);
      }
    }, []);
    let ea = reactCoreLibraryReexport.useCallback(e => {
      if (W === "custom") {
        e.preventDefault();
        return;
      }
    }, [W, z, et, J]);
    let er = reactCoreLibraryReexport.useCallback(e => {
      if (k) {
        et(false);
      }
    }, [k, et]);
    let en = reactCoreLibraryReexport.useCallback(e => {
      if (W === "custom") {
        e.preventDefault();
      }
      if (T != null) {
        T(e);
      }
    }, [T, W, et]);
    let {
      side: ei,
      align: es
    } = g(v);
    let eo = d;
    try {
      let e = reactCoreLibraryReexport.Children.only(d);
      if (reactCoreLibraryReexport.isValidElement(e)) {
        let t = typeof e.type == "string";
        let a = e.type?.$$typeof === Symbol.for("react.forward_ref");
        if (e.type === reactCoreLibraryReexport.Fragment || !t && !a) {
          eo = reactJsxRuntimeCoreReexport.jsx("span", {
            "data-forward-dom": true,
            children: d
          });
        }
      }
    } catch {
      eo = reactJsxRuntimeCoreReexport.jsx("span", {
        "data-forward-dom": true,
        children: d
      });
    }
    let {
      getPopupContainer: ed
    } = reactCoreLibraryReexport.useContext(l);
    let ec = x ? p : tooltipComponent.Tooltip;
    if (W === "hover") {
      return reactJsxRuntimeCoreReexport.jsx(ec, {
        isUseByPopover: true,
        content: a,
        position: v,
        showArrow: b,
        mouseEnterDelay: w,
        mouseLeaveDelay: _,
        style: y,
        className: classNamesMergeUtil.mergeClassNames(N, `
              min-w-[280px] rounded-dbx-xl border-[0.5px] border-solid
              border-dbx-line-10 bg-dbx-bg-float px-16 py-16
              will-change-transform
            `, `
              shadow-[0_2px_4px_0_rgba(0,0,0,0.02),_0_4px_10px_0_rgba(0,0,0,0.03),_0_4px_16px_0_rgba(0,0,0,0.03)]
            `, R && `
                animate-in duration-150 ease-out zoom-in-95 fade-in
                data-[state=closed]:animate-out data-[state=closed]:duration-150
                data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out
              `),
        zIndex: j,
        autoAdjustOverflow: L,
        getPopupContainer: M || ed,
        spacing: P,
        motion: R,
        clickToHide: k,
        onClickOutSide: T,
        onVisibleChange: et,
        trigger: W,
        ...H,
        children: d
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(popoverUiComponents.Popover, {
        onOpenChange: et,
        open: J,
        modal: Z,
        children: [reactJsxRuntimeCoreReexport.jsx(popoverUiComponents.PopoverTrigger, {
          asChild: true,
          ref: K,
          onClick: ea,
          children: eo
        }), reactJsxRuntimeCoreReexport.jsx(f, {
          getPopupContainer: M || ed,
          children: reactJsxRuntimeCoreReexport.jsxs(popoverUiComponents.PopoverContent, {
            ref: t,
            side: ei,
            align: es,
            sideOffset: P,
            onOpenAutoFocus: B,
            onCloseAutoFocus: O,
            avoidCollisions: L,
            collisionPadding: !!S * 8,
            onPointerDownOutside: en,
            onInteractOutside: F,
            onFocusOutside: I,
            onEscapeKeyDown: E ? () => et(false) : undefined,
            onClick: er,
            className: classNamesMergeUtil.mergeClassNames(`
                min-w-[280px] rounded-dbx-xl bg-dbx-bg-float px-16 py-16
                will-change-transform
              `, "border-[0.5px] border-solid border-dbx-line-10", `
                shadow-[0_2px_4px_0_rgba(0,0,0,0.02),_0_4px_10px_0_rgba(0,0,0,0.03),_0_4px_16px_0_rgba(0,0,0,0.03)]
              `, `
                data-[state=closed]:animate-out
                data-[state=open]:animate-in
              `, `
                data-[state=closed]:fade-out-0
                data-[state=open]:fade-in-0
              `, `
                data-[state=closed]:zoom-out-95
                data-[state=open]:zoom-in-95
              `, "data-[side=bottom]:slide-in-from-top-2", "data-[side=left]:slide-in-from-right-2", "data-[side=right]:slide-in-from-left-2", "data-[side=top]:slide-in-from-bottom-2", !R && "!animate-none", N),
            style: {
              ...y,
              ...(j !== undefined ? {
                zIndex: j
              } : {})
            },
            forceMount: undefined,
            ...$,
            ...H,
            children: [a, b && reactJsxRuntimeCoreReexport.jsx(popoverUiComponents.PopoverArrow, {
              className: classNamesMergeUtil.mergeClassNames("fill-white", C && "data-[align=center]:block", A == null ? undefined : A.className),
              style: A == null ? undefined : A.style,
              width: A == null ? undefined : A.width,
              height: A == null ? undefined : A.height
            })]
          }, `content${W}`)
        })]
      });
    }
  });
  m.displayName = "DbxPopover";
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var closeCircleIcon = require("close-circle-icon") /*id: 948124*/;
  var reactCheckCircleIcon = require("react-check-circle-icon") /*id: 610937*/;
  var warningIcon = require("warning-icon") /*id: 385435*/;
  var infoOutlinedIcon = require("info-outlined-icon") /*id: 154400*/;
  let _ = e => {
    let {
      title: t,
      content: a,
      icon: n,
      okText: i,
      cancelText: s,
      okType: o,
      cancelType: l,
      okButtonProps: d,
      cancelButtonProps: u,
      onConfirm: h,
      onCancel: p,
      closeOnEsc: f,
      onEscKeyDown: g,
      ..._
    } = e;
    let [y, N] = reactCoreLibraryReexport.useState(e.visible || false);
    let [j, L] = reactCoreLibraryReexport.useState(false);
    let [z, k] = reactCoreLibraryReexport.useState(false);
    let E = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (e.visible !== undefined) {
        N(e.visible);
      }
    }, [e.visible]);
    reactCoreLibraryReexport.useEffect(() => {
      let t = t => {
        if (t.key === "Escape" && y && e.closeOnEsc !== false) {
          if (e.onEscKeyDown) {
            let a = {
              ...t,
              nativeEvent: t,
              currentTarget: t.currentTarget,
              target: t.target,
              bubbles: t.bubbles,
              cancelable: t.cancelable,
              defaultPrevented: t.defaultPrevented,
              preventDefault: t.preventDefault.bind(t),
              stopPropagation: t.stopPropagation.bind(t),
              isDefaultPrevented: () => t.defaultPrevented,
              isPropagationStopped: () => false
            };
            e.onEscKeyDown(a);
          }
          N(false);
        }
      };
      document.addEventListener("keydown", t);
      return () => {
        document.removeEventListener("keydown", t);
      };
    }, [y, e.closeOnEsc, e.onEscKeyDown]);
    let T = reactCoreLibraryReexport.useCallback(t => {
      var a;
      if (e.visible === undefined) {
        N(t);
      }
      if ((a = e.onVisibleChange) !== null && a !== undefined) {
        a.call(e, t);
      }
    }, [e.disabled, e.visible, e.onVisibleChange]);
    let M = async t => {
      if (e.onConfirm) {
        L(true);
        try {
          let a = e.onConfirm(t);
          if (a instanceof Promise) {
            await a;
          }
          if (e.visible === undefined) {
            N(false);
          }
        } catch (e) {} finally {
          L(false);
        }
      } else if (e.visible === undefined) {
        N(false);
      }
    };
    let D = async t => {
      if (e.onCancel) {
        k(true);
        try {
          let a = e.onCancel(t);
          if (a instanceof Promise) {
            await a;
          }
          if (e.visible === undefined) {
            N(false);
          }
        } catch (e) {} finally {
          k(false);
        }
      } else if (e.visible === undefined) {
        N(false);
      }
    };
    let P = e => {
      switch (e) {
        case "primary":
        case "tertiary":
          return null;
        case "danger":
          return "danger-filled";
        default:
          if (e) {
            return e;
          }
          return null;
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(m, {
      trigger: "click",
      position: "bottomLeft",
      content: (() => {
        let n = e.icon !== undefined ? e.icon : function (e) {
          switch (e) {
            case "error":
              return reactJsxRuntimeCoreReexport.jsx(closeCircleIcon.CloseCircleIcon, {
                className: "h-16 w-16"
              });
            case "success":
              return reactJsxRuntimeCoreReexport.jsx(reactCheckCircleIcon.CheckCircleIcon, {
                className: "h-16 w-16"
              });
            case "warning":
              return reactJsxRuntimeCoreReexport.jsx(warningIcon.WarningIcon, {
                className: "h-16 w-16"
              });
            default:
              return reactJsxRuntimeCoreReexport.jsx(infoOutlinedIcon.InfoOutlinedIcon, {
                className: "h-16 w-16"
              });
          }
        }(e.iconType);
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex max-w-[320px] min-w-[240px] flex-col",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-start",
            children: [n && reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                mr-8 flex h-22 w-16 flex-shrink-0 items-center justify-center
              `,
              children: n
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex-grow",
              children: [e.title && reactJsxRuntimeCoreReexport.jsx("div", {
                className: "mb-4 text-14 leading-22 font-medium text-dbx-text-primary",
                children: e.title
              }), e.content && reactJsxRuntimeCoreReexport.jsx("div", {
                className: `
                  mb-10 text-14 leading-22 font-normal text-dbx-text-primary
                `,
                children: e.content
              })]
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex justify-between",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "mr-4",
              children: e.extraOperation
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex flex-wrap justify-end gap-10",
              children: [e.cancelNode || reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
                type: "button",
                size: "sm",
                variant: "rectangle",
                color: P(e.cancelType || "grey-outline"),
                onClick: D,
                loading: z,
                className: `
                  max-w-full min-w-[52px] text-right break-normal
                  wrap-break-word whitespace-normal
                `,
                ...e.cancelButtonProps,
                ref: e.cancelButtonProps?.autoFocus ? E : undefined,
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "text-right break-normal wrap-break-word whitespace-normal",
                  children: e.cancelText || "取消"
                })
              }), e.confirmNode || reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
                size: "sm",
                variant: "rectangle",
                color: P(e.okType || "brand-filled"),
                type: "button",
                onClick: M,
                loading: j,
                className: `
                  max-w-full min-w-[52px] text-right break-normal
                  wrap-break-word whitespace-normal
                `,
                ...e.okButtonProps,
                ref: !e.cancelButtonProps?.autoFocus && e.okButtonProps?.autoFocus ? E : undefined,
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "text-right break-normal wrap-break-word whitespace-normal",
                  children: e.okText || "确认"
                })
              })]
            })]
          })]
        });
      })(),
      visible: y,
      onVisibleChange: T,
      motion: e.motion !== false,
      className: "w-280 !px-[15.5px] !py-[15.5px] !pt-[13.5px]",
      style: {
        ...e.style,
        boxShadow: "0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05)"
      },
      ..._,
      children: e.children
    }, _.trigger || "click");
  };
  require.r(exports);
  require.d(exports, {
    DbxPopConfirm: function () {
      return _;
    },
    DbxPopover: function () {
      return m;
    },
    PopoverProvider: function () {
      return l;
    }
  });
}