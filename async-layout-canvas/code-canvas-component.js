// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'Canvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 832030
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var canvasSamanthaButtonTooltip = require("canvas-samantha-button-tooltip") /*id: 908098*/;
  let c = e => {
    let {
      left: t,
      middle: r,
      right: n,
      onBeforeClose: a,
      onClose: o
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let d = async () => {
      if (!a || (await a())) {
        if (o != null) {
          o();
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "canvas-header-HXZc3T",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "canvas-header-left-D9uXu0",
        children: t
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "canvas-header-middle-jDAvrm",
        children: r
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "canvas-header-right-PC8V2m",
        children: [n, o && reactJsxRuntimeCoreReexport.jsx(canvasSamanthaButtonTooltip.SamanthaTooltipBtn, {
          tooltipContent: c("flow_web_ext_close_upper_case"),
          icon: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {}),
          onClick: d
        })]
      })]
    });
  };
  var d = {
    "resizable-wrapper": "resizable-wrapper-lrdC4S",
    "direction-row": "direction-row-XqgV67",
    "direction-column": "direction-column-crScYi"
  };
  let p = e => {
    let {
      className: t,
      style: r,
      children: n,
      direction: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(d["resizable-wrapper"], a === "column" ? d["direction-column"] : d["direction-row"], t),
      style: r,
      children: n
    });
  };
  var reactResizableEntry = require("react-resizable-entry") /*id: 952428*/;
  var useControlledStateHook_1_1 = require("use-controlled-state-hook_1_1") /*id: 756850*/;
  let m = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      handle: r,
      active: n,
      className: a,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      ref: t,
      className: o("react-resizable-handle", `react-resizable-handle-${r}`, {
        active: n
      }, a),
      ...s
    });
  });
  let g = ["w", "e"];
  let b = ["n", "s"];
  let v = e => {
    let {
      children: t,
      resizeHandle: r,
      collapsible: a,
      minWidth: s = 200,
      maxWidth: l = 800,
      minHeight: u = 200,
      maxHeight: c = 800
    } = e;
    let d = reactCoreLibraryReexport.useRef(false);
    let [p, v] = useControlledStateHook_1_1.useControlledState(e, {
      defaultValue: false,
      valuePropName: "collapsed",
      trigger: "onCollapse"
    });
    let [y, E] = useControlledStateHook_1_1.useControlledState(e, {
      defaultValue: 250,
      valuePropName: "width",
      trigger: "onWidthChange"
    });
    let [w, R] = useControlledStateHook_1_1.useControlledState(e, {
      defaultValue: 250,
      valuePropName: "height",
      trigger: "onHeightChange"
    });
    let [S, _] = reactCoreLibraryReexport.useState(undefined);
    let O = reactCoreLibraryReexport.useMemo(() => g.includes(r) ? "x" : b.includes(r) ? "y" : undefined, [r]);
    let x = reactCoreLibraryReexport.useMemo(() => O === "x" ? {
      minWidth: p ? "0px" : s,
      maxWidth: p ? "0px" : l
    } : O === "y" ? {
      minHeight: p ? "0px" : u,
      maxHeight: p ? "0px" : c
    } : undefined, [p, O, s, l, u, c]);
    let P = reactCoreLibraryReexport.useCallback(e => {
      if (a || !e) {
        v(e);
      }
    }, [a]);
    let C = reactCoreLibraryReexport.useCallback((e, t) => reactJsxRuntimeCoreReexport.jsx(m, {
      ref: t,
      handle: e,
      active: S === e
    }), [S]);
    let D = reactCoreLibraryReexport.useCallback(() => {
      document.body.style.userSelect = "none";
    }, []);
    let N = reactCoreLibraryReexport.useCallback(() => {
      document.body.style.userSelect = "";
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!S && d.current) {
        if (O === "x") {
          if (p) {
            E(0);
          } else {
            E(s);
          }
        }
        if (O === "y") {
          if (p) {
            R(0);
          } else {
            R(u);
          }
        }
      }
    }, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      d.current = true;
      return () => {
        d.current = false;
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactResizableEntry.ResizableBox, {
      className: "canvas-resizable-container-rUWyG7",
      style: x,
      axis: O,
      width: O === "y" ? undefined : y,
      height: O === "x" ? undefined : w,
      minConstraints: [0, 0],
      maxConstraints: [1000, Infinity],
      handle: C,
      handleSize: [4, 4],
      resizeHandles: [r],
      onResize: (e, t) => {
        if (g.includes(t.handle)) {
          if ([0, s, l].includes(y)) {
            E(t.size.width);
          }
          if (t.size.width < s / 2) {
            P(true);
          } else {
            P(false);
          }
        }
        if (b.includes(t.handle)) {
          if ([0, u, c].includes(w)) {
            R(t.size.height);
          }
          if (t.size.height < u / 2) {
            P(true);
          } else {
            P(false);
          }
        }
      },
      onResizeStart: (e, t) => {
        _(t.handle);
        D();
      },
      onResizeStop: (e, t) => {
        _(undefined);
        N();
        if (g.includes(t.handle)) {
          if (t.size.width < s) {
            if (p) {
              E(0);
            } else {
              E(s);
            }
          } else if (t.size.width > l) {
            E(l);
          } else {
            E(t.size.width);
          }
        }
        if (b.includes(t.handle)) {
          if (t.size.height < u) {
            if (p) {
              R(0);
            } else {
              R(u);
            }
          } else if (t.size.height > c) {
            R(c);
          } else {
            R(t.size.height);
          }
        }
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("canvas-resizable-body-VGqSOL", {
          "maximum-width": y >= l,
          "minimum-width": y <= s,
          "maximum-height": w >= c,
          "minimum-height": w <= u
        }),
        hidden: p,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "canvas-resizable-content-Xh4Zu0",
          style: {
            minWidth: s
          },
          children: t
        })
      })
    });
  };
  var y = {
    "canvas-body-title": "canvas-body-title-bywtG0",
    "canvas-body-content": "canvas-body-content-SymVyk"
  };
  let E = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      children: r,
      className: n,
      header: a,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: o("code-canvas code-canvas-theme", n),
      ...s,
      children: [a === undefined ? reactJsxRuntimeCoreReexport.jsx(c, {}) : a, reactJsxRuntimeCoreReexport.jsx("div", {
        className: "code-canvas-body",
        children: r
      })]
    });
  });
  E.displayName = "Canvas";
  E.Tab = e => {
    let {
      children: t,
      active: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      tabIndex: r ? 0 : -1,
      className: "canvas-tab-uFqtxg",
      children: t
    });
  };
  E.Header = c;
  E.Body = e => {
    let {
      children: t,
      title: r,
      aside: n,
      panel: a,
      showAside: o,
      asideCollapsible: s,
      asideCollapsed: l,
      onAsideCollapsed: u,
      showPanel: c,
      panelCollapsible: d,
      panelCollapsed: f,
      onPanelCollapsed: h,
      panelHeight: m,
      panelMinHeight: g,
      panelMaxHeight: b,
      onPanelHeightChange: E
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(p, {
      direction: "column",
      children: [r && reactJsxRuntimeCoreReexport.jsx("div", {
        className: y["canvas-body-title"],
        children: r
      }), reactJsxRuntimeCoreReexport.jsxs(p, {
        direction: "row",
        style: {
          minHeight: 0
        },
        children: [n && o && reactJsxRuntimeCoreReexport.jsx(v, {
          resizeHandle: "e",
          collapsible: s,
          collapsed: l,
          onCollapse: u,
          children: n
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: y["canvas-body-content"],
          style: {
            minWidth: 0
          },
          children: t
        })]
      }), a && c && reactJsxRuntimeCoreReexport.jsx(v, {
        resizeHandle: "n",
        collapsible: d,
        collapsed: f,
        onCollapse: h,
        height: m,
        minHeight: g,
        maxHeight: b,
        onHeightChange: E,
        children: a
      })]
    });
  };
  require.d(exports, {
    Canvas: function () {
      return E;
    }
  });
}