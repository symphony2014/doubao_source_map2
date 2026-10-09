// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerAutoSelectProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 408018
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var whiteboardSelectors = require("whiteboard-selectors") /*id: 657196*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = [".poll-date-picker", "[data-autoselect=\"false\"]", ".ud__dropdown", ".poll-date-picker__flag", whiteboardSelectors.whiteboardContainer, whiteboardSelectors.whiteboardPortal, ".isv-block-inline-container", ".view-name-flex-input-container"];
  let f = [whiteboardSelectors.whiteboardContainer, whiteboardSelectors.whiteboardPortal, whiteboardSelectors.whiteboardBlock, ".docx-image-block .resizable-wrapper", ".chart-block-authorized-NotAuthorized"];
  class m extends editorContextFacade.EditorContextFacade {
    getWrapper(e, i) {
      let {
        isEffectiveInPart: r,
        disabled: n,
        contentSelector: o,
        isIgnore: a
      } = i;
      return i => {
        let {
          blockId: c,
          recursionProps: m
        } = i;
        let {
          selectionAPI: v
        } = m;
        let p = !!m.editPermission;
        let g = !!m.isPresentationMode;
        let b = !!v.getSelection().find(e => {
          let {
            id: i
          } = e;
          return c === i;
        });
        let [E, S] = reactCoreLibraryReexport.useState(b);
        let _ = reactCoreLibraryReexport.useCallback((e, i) => {
          S(i.some(e => e.id === c));
        }, [c]);
        reactCoreLibraryReexport.useEffect(() => {
          if (p) {
            v.onSelectionChange(_);
          }
          return () => {
            if (p) {
              v.offSelectionChange(_);
            }
          };
        }, [p, v, _]);
        if (reactCoreLibraryReexport.useMemo(() => n == null ? undefined : n(i), [i])) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...i
          });
        }
        let k = e => {
          let n = e.target;
          if (h.some(e => n == null ? undefined : n.closest(e)) || (a == null ? undefined : a(e, i, v))) {
            return;
          }
          let l = !!r && !!o;
          let u = false;
          if (l) {
            u = !!(n == null ? undefined : n.closest(o));
          }
          if (E && browserEnvironmentDetectionUtils.browserDetector.isLark && browserEnvironmentDetectionUtils.browserDetector.isMobile || l && !u) {
            v.removeAllSelection();
            return;
          }
          if ((p || g) && !E) {
            if ((!browserEnvironmentDetectionUtils.browserDetector.isLark || !browserEnvironmentDetectionUtils.browserDetector.isMobile) && (!l || !!u)) {
              v.setSelection([{
                id: c,
                type: docxBlockSelectionHandler_1.blockTypes.BLOCK
              }]);
            }
          }
        };
        if (r) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            contentEditable: false,
            suppressContentEditableWarning: true,
            onMouseDown: e => {
              this.mouseContext = {
                x: e.clientX,
                y: e.clientY
              };
            },
            onClick: e => {
              if (function (e, i) {
                if (e && i.clientX && i.clientY) {
                  let {
                    x: r,
                    y: n
                  } = e;
                  let o = Math.abs(n - i.clientY);
                  let l = Math.abs(r - i.clientX);
                  return o > 0 || l > 0;
                }
                return false;
              }(this.mouseContext, e)) {
                this.mouseContext = null;
                return;
              }
              let i = e.target;
              if (!f.some(e => i == null ? undefined : i.closest(e))) {
                e.stopPropagation();
                v.removeAllSelection();
                if (browserEnvironmentDetectionUtils.browserDetector.isSafari) {
                  v.restoreFocus();
                }
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(e, {
              isSelected: E,
              ...i,
              onBlockClick: e => {
                e.stopPropagation();
                k(e);
              },
              onHandleClick: k
            })
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: k,
            className: "block-content-container",
            contentEditable: false,
            children: reactJsxRuntimeCoreReexport.jsx(e, {
              isSelected: E,
              ...i
            })
          });
        }
      };
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      r = undefined;
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i = "mouseContext", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }
  function v() {
    docxEditorCore.registerViewExt(docxAutoSelectProvider.autoSelectProvider, m);
  }
  require.d(exports, {
    registerAutoSelectProvider: function () {
      return v;
    }
  });
}