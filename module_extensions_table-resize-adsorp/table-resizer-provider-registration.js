// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'i' to 'tableResizerProviderNames'
// - Resolved require(26263) to 'table-resizer-provider-names'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'u' to 'useStableCallbackHook'
// - Resolved require(600393) to 'use-stable-callback-hook'
// - Renamed variable 'o' to 'tableResizeAdsorpConfig'
// - Resolved require(369713) to 'table-resize-adsorp-config'
// - Renamed variable 'c' to 'editorContextFacade'
// - Resolved require(788056) to 'editor-context-facade'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'f' to 'tableLayoutConstants_1'
// - Resolved require(673543) to 'table-layout-constants_1'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'HW' to 'tableConstant1' (module 673543)
// - Updated imported property 'll' to 'resizeScopeTypes' (module 369713)
// - Updated imported property 'rc' to 'resizeHandleSize' (module 369713)
// - Updated imported property 'CN' to 'showTableResizer' (module 369713)
// - Updated imported property 'e' to 'EditorContextFacade' (module 788056)
// - Updated imported property 'C' to 'useStableCallback' (module 600393)
// - Updated imported property 'ix' to 'registerViewExt' (module 135760)
// - Updated imported property 'E' to 'tableInsideResizerProviderName' (module 26263)
// - Updated imported property 'M' to 'tablePageResizerProviderName' (module 26263)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_table-resize-adsorp.4ab09c19.js
         * chunkId: 61651
         * moduleId: 723520
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var tableResizerProviderNames = require("table-resizer-provider-names") /*id: 26263*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var useStableCallbackHook = require("use-stable-callback-hook") /*id: 600393*/;
  var tableResizeAdsorpConfig = require("table-resize-adsorp-config") /*id: 369713*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var g = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("rect", {})
  });
  var v = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("line", {
      x1: "50%",
      x2: "50%",
      y2: "100%"
    })
  });
  let p = reactCoreLibraryReexport.forwardRef((e, r) => {
    let {
      positionInfo: t,
      tableRect: n,
      neighbourColLineTop: i,
      defaultPos: l
    } = e;
    let s = e => {
      let {
        distance: r
      } = e;
      let t = d("neighbour-table-resizer-line-svg-wrapper", {
        transparent: n === undefined
      });
      let i = {
        left: r + n.left,
        top: n.top,
        height: n.height
      };
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: t,
        style: i,
        children: reactJsxRuntimeCoreReexport.jsx(v, {})
      });
    };
    let u = e => reactJsxRuntimeCoreReexport.jsx("div", {
      className: "neighbour-col-resizer-line-svg-wrapper",
      style: {
        left: e
      },
      children: reactJsxRuntimeCoreReexport.jsx(g, {})
    });
    let c = e => {
      if (l === undefined) {
        return null;
      }
      let {
        distance: r,
        direction: t
      } = e;
      let n = Math.abs(r - l);
      let s = [];
      s.push(u(l || tableLayoutConstants_1.tableConstant1 + 4));
      s.push(u(r - 0.5));
      s.push(u((t === "left" ? l - n : r + n) || tableLayoutConstants_1.tableConstant1 + 4));
      let o = d("neighbour-col-resizer-line-container", {
        transparent: i === undefined
      });
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: o,
        children: s
      });
    };
    let a = e => e.type === tableResizeAdsorpConfig.resizeScopeTypes.NEIGHBOUR_COL ? c(e) : e.type === tableResizeAdsorpConfig.resizeScopeTypes.NEIGHBOUR_TABLE ? s(e) : null;
    let p = {
      display: "block",
      "--y": `${i}px`
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "table-inside-resizer-line-container",
      ref: r,
      style: p,
      children: t.map(e => a(e))
    });
  });
  class x extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return e => {
        let {
          hostElementRef: r
        } = e;
        let [t, n] = reactCoreLibraryReexport.useState(false);
        let [, i] = reactCoreLibraryReexport.useState([]);
        let c = reactCoreLibraryReexport.useRef(undefined);
        let a = reactCoreLibraryReexport.useRef(null);
        let d = reactCoreLibraryReexport.useRef(undefined);
        let f = reactCoreLibraryReexport.useRef([]);
        let g = reactCoreLibraryReexport.useRef(undefined);
        let v = useStableCallbackHook.useStableCallback(e => {
          if (!g.current) {
            d.current = undefined;
            return;
          }
          let r = e ? e - g.current.y : g.current.height / 2;
          if ((r -= 20) > g.current.height) {
            r = g.current.height;
          } else if (r < tableResizeAdsorpConfig.resizeHandleSize) {
            r = tableResizeAdsorpConfig.resizeHandleSize;
          }
          d.current = r;
          if (a.current) {
            a.current.style.setProperty("--y", `${r}px`);
          }
        });
        let x = r => {
          let {
            validResizerInfo: t,
            tableId: l,
            tableRect: s,
            mouseClientY: u,
            defaultPosition: o
          } = r;
          if (l === e.struct.id && t.tableInsideReziser.visible === true) {
            let e = (s == null ? undefined : s.height) !== g.current?.height || (s == null ? undefined : s.y) !== g.current?.y || function (e, r) {
              if (e.length !== r.length) {
                return true;
              }
              let t = Array.from(e);
              let n = Array.from(r);
              while (t.length > 0 && n.length > 0) {
                let e = t.shift();
                let r = n.findIndex(r => r.direction === e.direction && r.distance === e.distance && r.type === e.type);
                if (r === -1) {
                  return true;
                }
                n.splice(r, 1);
              }
              return false;
            }(t.tableInsideReziser.resizerInfosWithDirection, f.current);
            g.current = s;
            f.current = t.tableInsideReziser.resizerInfosWithDirection;
            c.current = o;
            v(u);
            n(true);
            if (e) {
              i([]);
            }
          } else {
            g.current = undefined;
            c.current = undefined;
            f.current = [];
            n(false);
          }
        };
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(tableResizeAdsorpConfig.showTableResizer, x);
          return () => {
            this.blockManager.removeListener(tableResizeAdsorpConfig.showTableResizer, x);
          };
        }, []);
        let b = r.current.querySelector(".docx-table-inside-resizer-line-container");
        if (t && b && g.current) {
          return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(p, {
            blockManager: this.blockManager,
            positionInfo: f.current,
            tableRect: g.current,
            neighbourColLineTop: d.current,
            ref: a,
            defaultPos: c.current
          }), b);
        } else {
          return null;
        }
      };
    }
  }
  var b = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("line", {
      x1: "50%",
      x2: "50%",
      y2: "100%"
    })
  });
  let y = reactCoreLibraryReexport.forwardRef((e, r) => {
    let {
      positionInfo: t,
      top: n,
      initClientY: i
    } = e;
    let l = {
      left: t - 0.5,
      top: n,
      "--y": `${i}px`
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "table-page-resizer-line",
      style: l,
      ref: r,
      children: reactJsxRuntimeCoreReexport.jsx(b, {})
    });
  });
  class L extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return () => {
        let [r, t] = reactCoreLibraryReexport.useState(false);
        let [n, i] = reactCoreLibraryReexport.useState(0);
        let u = document.getElementById("docx-table-page-resizer-line-container");
        let c = u == null ? undefined : u.parentElement?.parentElement;
        let a = reactCoreLibraryReexport.useRef(null);
        let d = reactCoreLibraryReexport.useMemo(() => c && c.getBoundingClientRect(), [c]);
        let f = reactCoreLibraryReexport.useRef(0);
        let g = e => {
          if (!d) {
            return;
          }
          let r = (e || d.height / 2) - d.y;
          f.current = r;
          if (a.current) {
            a.current.style.setProperty("--y", `${r}px`);
          }
        };
        let v = e => {
          let {
            validResizerInfo: r,
            tableId: n,
            mouseClientY: l
          } = e;
          if (n !== undefined && r.tablePageResizer.visible === true && d) {
            t(true);
            i(r.tablePageResizer.resizerInfosWithDirection[0].distance);
            g(l);
          } else {
            t(false);
            i(0);
          }
        };
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(tableResizeAdsorpConfig.showTableResizer, v);
          return () => {
            this.blockManager.removeListener(tableResizeAdsorpConfig.showTableResizer, v);
          };
        });
        if (r && u && c && d) {
          return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(y, {
            blockManager: this.blockManager,
            positionInfo: n,
            top: d.y,
            initClientY: f.current,
            ref: a
          }), u);
        } else {
          return null;
        }
      };
    }
  }
  function P() {
    docxEditorCore.registerViewExt(tableResizerProviderNames.tableInsideResizerProviderName, x);
    docxEditorCore.registerViewExt(tableResizerProviderNames.tablePageResizerProviderName, L);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return P;
    }
  });
}