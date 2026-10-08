// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'Tooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 258571
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var tooltipComponents = require("tooltip-components") /*id: 272045*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var userAgentDeviceDetector_1 = require("user-agent-device-detector_1") /*id: 720848*/;
  var popupContainerContext = require("popup-container-context") /*id: 648908*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      children: t,
      getPopupContainer: n
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponents.TooltipPortal, {
        container: n(),
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    }
  };
  let c = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      content: n,
      position: c = "top",
      trigger: d = "hover",
      isUseByPopover: h,
      visible: m,
      sticky: g,
      contentAriaLabel: f,
      collisionBoundary: p = [],
      spacing: _ = 4,
      mouseEnterDelay: v = 300,
      mouseLeaveDelay: b = 300,
      style: S,
      className: P,
      prefixCls: C,
      zIndex: y,
      getPopupContainer: E,
      motion: x = true,
      clickToHide: T = false,
      stopPropagation: k = false,
      autoAdjustOverflow: R = true,
      disableFocusListener: w = false,
      onVisibleChange: I,
      onClickOutSide: M,
      children: A,
      margin: D,
      rePosKey: N,
      wrapperId: L
    } = e;
    let O = userAgentDeviceDetector_1.isMobileOrIos();
    let [B, G] = reactCoreLibraryReexport.useState(false);
    let [, j] = reactCoreLibraryReexport.useState({});
    let W = d === "custom" || m !== undefined;
    if (O && d === "hover") {
      d = "click";
    }
    let U = W ? !!m : B;
    let F = reactCoreLibraryReexport.useRef(null);
    let {
      side: V,
      align: Z
    } = function (e = "top") {
      switch (e) {
        case "top":
        default:
          return {
            side: "top",
            align: "center"
          };
        case "topLeft":
          return {
            side: "top",
            align: "start"
          };
        case "topRight":
          return {
            side: "top",
            align: "end"
          };
        case "left":
          return {
            side: "left",
            align: "center"
          };
        case "leftTop":
          return {
            side: "left",
            align: "start"
          };
        case "leftBottom":
          return {
            side: "left",
            align: "end"
          };
        case "right":
          return {
            side: "right",
            align: "center"
          };
        case "rightTop":
          return {
            side: "right",
            align: "start"
          };
        case "rightBottom":
          return {
            side: "right",
            align: "end"
          };
        case "bottom":
          return {
            side: "bottom",
            align: "center"
          };
        case "bottomLeft":
          return {
            side: "bottom",
            align: "start"
          };
        case "bottomRight":
          return {
            side: "bottom",
            align: "end"
          };
      }
    }(c);
    let z = typeof _ == "number" ? _ : _.mainAxis;
    let H = typeof _ == "number" ? 0 : _.crossAxis;
    let $ = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (W && U !== $.current) {
        if (I != null) {
          I(U);
        }
      }
      $.current = U;
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (N !== undefined) {
        j({});
      }
    }, [N]);
    let K = reactCoreLibraryReexport.useRef(null);
    let X = reactCoreLibraryReexport.useCallback(e => {
      if (!W) {
        G(e);
      }
      if (I != null) {
        I(e);
      }
    }, [W, I]);
    let Q = reactCoreLibraryReexport.useRef(null);
    let q = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!M || !U || !U || d !== "click" && d !== "contextMenu") {
        return;
      }
      let e = e => {
        if (e.key === "Escape") {
          X(false);
        }
      };
      document.addEventListener("keydown", e);
      return () => {
        document.removeEventListener("keydown", e);
      };
    }, [U, M, d, X]);
    let Y = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        Q.current = e;
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (F.current !== null) {
        window.clearTimeout(F.current);
      }
      if (K.current !== null) {
        window.clearTimeout(K.current);
      }
    }, []);
    let J = reactCoreLibraryReexport.useMemo(() => {
      if (typeof D == "number") {
        return D;
      } else {
        return {
          top: (D == null ? undefined : D.top) ?? 5,
          right: (D == null ? undefined : D.right) ?? 5,
          bottom: (D == null ? undefined : D.bottom) ?? 5,
          left: (D == null ? undefined : D.left) ?? 5
        };
      }
    }, [D]);
    let ee = reactCoreLibraryReexport.useCallback(e => {
      q.current = e;
      if (typeof t == "function") {
        t(e);
      } else if (t) {
        t.current = e;
      }
    }, [t]);
    let et = A;
    try {
      let e = reactCoreLibraryReexport.Children.only(A);
      if (reactCoreLibraryReexport.isValidElement(e)) {
        let t = typeof e.type == "string";
        let n = e.type?.$$typeof === Symbol.for("react.forward_ref");
        if (e.type === reactCoreLibraryReexport.Fragment || !t && !n) {
          et = reactJsxRuntimeCoreReexport.jsx("span", {
            "data-forward-dom": true,
            children: A
          });
        }
      }
    } catch {
      et = reactJsxRuntimeCoreReexport.jsx("span", {
        "data-forward-dom": true,
        children: A
      });
    }
    let {
      getPopupContainer: ei
    } = reactCoreLibraryReexport.useContext(popupContainerContext.PopupContainerCtx);
    return reactJsxRuntimeCoreReexport.jsx(tooltipComponents.TooltipProvider, {
      delayDuration: v,
      skipDelayDuration: b,
      disableHoverableContent: d !== "hover",
      children: reactJsxRuntimeCoreReexport.jsxs(tooltipComponents.Tooltip, {
        open: d === "hover" ? undefined : U,
        onOpenChange: e => {
          if (W || d === "click" || d === "contextMenu" || d === "focus" || d === "hover") {
            if (!W && I != null) {
              I(e);
            }
            return;
          }
          if (d === "hover") {
            if (!W) {
              if (e) {
                if (F.current !== null) {
                  window.clearTimeout(F.current);
                  F.current = null;
                }
                if (B) {
                  G(true);
                } else {
                  K.current = window.setTimeout(() => {
                    G(true);
                    K.current = null;
                  }, v);
                }
              } else {
                if (K.current !== null) {
                  window.clearTimeout(K.current);
                  K.current = null;
                }
                F.current = window.setTimeout(() => {
                  G(false);
                  F.current = null;
                }, b);
              }
            }
          } else if (!W) {
            G(e);
          }
          if (I != null) {
            I(e);
          }
        },
        delayDuration: v,
        children: [reactJsxRuntimeCoreReexport.jsx(tooltipComponents.TooltipTrigger, {
          ref: Y,
          asChild: true,
          onClick: d === "click" ? e => {
            if (d === "click") {
              X(!U);
            }
          } : undefined,
          onContextMenu: d === "contextMenu" ? e => {
            if (d === "contextMenu") {
              e.preventDefault();
              e.stopPropagation();
              X(!U);
            }
          } : undefined,
          onFocus: e => {
            if (w && d === "hover") {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (d === "focus") {
              X(true);
            }
          },
          onBlur: () => {
            if (d === "focus") {
              X(false);
            }
          },
          "data-state": U ? "open" : "closed",
          "data-trigger-type": d,
          "data-disable-focus": !!w && d === "hover" || undefined,
          children: et
        }, `trigger${d}`), reactJsxRuntimeCoreReexport.jsx(u, {
          getPopupContainer: E || ei,
          children: reactJsxRuntimeCoreReexport.jsx(tooltipComponents.TooltipContent, {
            ref: ee,
            side: V,
            align: Z,
            collisionBoundary: Array.isArray(p) ? p : [p].filter(Boolean),
            sideOffset: z,
            onPointerDownOutside: e => {
              if (!M || !U || !U || d !== "click" && d !== "contextMenu") {
                return;
              }
              let t = e.target;
              let n = Q.current;
              let i = q.current;
              if (n && !n.contains(t) && i && !i.contains(t)) {
                X(false);
                if (M != null) {
                  M(e);
                }
              }
            },
            alignOffset: H,
            avoidCollisions: R,
            sticky: g,
            updatePositionStrategy: "optimized",
            collisionPadding: J,
            className: h ? P : classNamesMergeUtil.mergeClassNames(C, `
                        flex
                        max-h-[var(--radix-tooltip-content-available-height)]
                        max-w-[320px]
                        origin-[var(--radix-tooltip-content-transform-origin)]
                        items-center justify-items-center rounded-dbx-sm
                        bg-dbx-static-black px-6 py-3 text-[12px]
                        text-dbx-text-static-white-primary will-change-transform
                      `, x && `
                          animate-in duration-100 ease-out fade-in
                          data-[state=closed]:animate-out
                          data-[state=closed]:duration-100
                          data-[state=closed]:fade-out
                        `, "[@media(hover:none)]:hidden", P),
            style: {
              ...S,
              zIndex: y
            },
            onClick: e => {
              if (k) {
                e.stopPropagation();
              }
              if (T) {
                X(false);
              }
            },
            forceMount: undefined,
            "aria-label": h ? "..." : f,
            id: L,
            children: n
          }, `content${d}`)
        }, `content-wrap${d}`)]
      }, `tooltip-root${d}`)
    }, "custom-tooltip-provider");
  });
  c.displayName = "Tooltip";
  require.d(exports, {
    Tooltip: function () {
      return c;
    }
  });
}