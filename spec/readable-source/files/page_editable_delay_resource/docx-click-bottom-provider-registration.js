// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'docxClickBottomProvider'
// - Resolved require(600088) to 'docx-click-bottom-provider'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'documentBlockOperations'
// - Resolved require(139630) to 'document-block-operations'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'syncUrlBlockUtils'
// - Resolved require(299195) to 'sync-url-block-utils'
// - Renamed variable 'd' to 'documentNodeUtils_2'
// - Resolved require(868545) to 'document-node-utils_2'
// - Renamed variable 'u' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'h' to 'editorContextFacade'
// - Resolved require(788056) to 'editor-context-facade'
// - Renamed variable 'p' to 'editorTypeConstants'
// - Resolved require(719873) to 'editor-type-constants'
// - Renamed variable 'g' to 'docxBlockUtils_2'
// - Resolved require(239669) to 'docx-block-utils_2'
// - Renamed variable 'f' to 'rectIntersectionUtils'
// - Resolved require(8673) to 'rect-intersection-utils'
// - Updated imported property 'e' to 'EditorContextFacade' (module 788056)
// - Updated imported property '$G' to 'isTextEditable' (module 469443)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'UN' to 'isSyncingActive' (module 299195)
// - Updated imported property 'sw' to 'getUrlToken' (module 299195)
// - Updated imported property 'tO' to 'getBlockByToken' (module 299195)
// - Updated imported property 'FF' to 'getBlockIdFromNode' (module 239669)
// - Updated imported property 'R' to 'blockTypes' (module 719873)
// - Updated imported property 'F' to 'commandTypes' (module 719873)
// - Updated imported property '$z' to 'insertNewChildren' (module 139630)
// - Updated imported property '_C' to 'createDocumentNode' (module 868545)
// - Updated imported property 'kK' to 'checkIntersection' (module 8673)
// - Updated imported property 'ix' to 'registerViewExt' (module 135760)
// - Updated imported property 'F' to 'clickBottomProvider' (module 600088)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 352291
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxClickBottomProvider = require("docx-click-bottom-provider") /*id: 600088*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var rectIntersectionUtils = require("rect-intersection-utils") /*id: 8673*/;
  function m(e, r, i) {
    var n;
    if ((r = typeof (n = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, r || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  class v extends editorContextFacade.EditorContextFacade {
    checkIsDrag(e) {
      if (this.mouseContextForPage) {
        let {
          x: r,
          y: i
        } = this.mouseContextForPage;
        let n = Math.abs(i - e.clientY);
        let o = Math.abs(r - e.clientX);
        return n > 50 || o > 50;
      }
      return false;
    }
    resetMouseContext() {
      this.mouseContext = null;
    }
    getEffect(e) {
      return r => {
        let i = e => this.handleMouseDown(e);
        let n = e => this.handleMouseUp(e, r.blockId);
        let o = this.editorContext.container;
        reactCoreLibraryReexport.useEffect(() => {
          o.addEventListener("mousedown", i);
          o.addEventListener("mouseup", n);
          return () => {
            o.removeEventListener("mousedown", i);
            o.removeEventListener("mouseup", n);
          };
        }, []);
        let l = e => this.handleMouseDownPage(e);
        let s = reactCoreLibraryReexport.useCallback(i => this.handleClickPageBlock(i, r.blockId, r.recursionProps.editable, e), [r.blockId, r.recursionProps.editable]);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.getBlockViewByBlockId(r.blockId);
          let i = e.hostElement.closest(".editor") || e.hostElement;
          i.addEventListener("mousedown", l);
          i.addEventListener("click", s);
          this.rootBlockHost = e.hostElement.getElementsByClassName("root-block")[0];
          return () => {
            this.rootBlockHost = null;
            i.removeEventListener("mousedown", l);
            i.removeEventListener("click", s);
          };
        }, [r.blockId, s]);
      };
    }
    constructor(...e) {
      super(...e);
      m(this, "removeAllSelection", () => this.selectionAPI.removeAllSelection());
      m(this, "rootBlockHost", undefined);
      m(this, "mouseContext", undefined);
      m(this, "mouseContextForPage", undefined);
      m(this, "findLastTextualBlockIfEmpty", async e => {
        let r = this.blockManager.getBlockModelByBlockId(e.id);
        if (r.children.length === 0) {
          return;
        }
        let i = r.children[r.children.length - 1].id;
        if (!this.blockManager.hasBlockViewByBlockId(i)) {
          await this.blockManager.layoutManager.getReconciler().renderNodeById([i]);
        }
        return function e(r, i) {
          if (editorTextBlockUtilities.isTextEditable(r) && r.type === docBlockTypeConstants.blockTypeConstants.TEXT) {
            let {
              length: n
            } = r.model.children;
            if (!(n > 0)) {
              if (r.model.isEmpty) {
                return r.id;
              } else {
                return undefined;
              }
            }
            {
              let o = r.model.children[n - 1];
              return e(i.getBlockViewByBlockId(o.id), i);
            }
          }
        }(this.blockManager.getBlockViewByBlockId(i), this.blockManager);
      });
      m(this, "handleMouseDownPage", e => {
        this.mouseContextForPage = {
          x: e.clientX,
          y: e.clientY
        };
      });
      m(this, "resetMouseContextForPage", () => {
        this.mouseContextForPage = null;
      });
      m(this, "handleClickPageBlock", async (e, r, i, n) => {
        let o = this.blockManager.getBlockViewByBlockId(r);
        if (syncUrlBlockUtils.isSyncingActive()) {
          let e = syncUrlBlockUtils.getUrlToken();
          let r = this.blockManager.getBlockIdsByRecordId(e)[0];
          if (r) {
            o = this.blockManager.getBlockViewByBlockId(r);
          }
        }
        let a = this.checkIsDrag(e);
        this.resetMouseContextForPage();
        let s = e.target instanceof HTMLElement && e.target.closest(".page-block-content");
        let h = e.target instanceof HTMLElement && e.target.closest(".docx-empty-placeholder");
        if (!this.rootBlockHost || !e.target || s || h || !i || docxBlockUtils_2.getBlockIdFromNode(e.target) !== r && !e.target.classList.contains("editor") || n && n.ignores && n.ignores.some(r => r(e))) {
          return;
        }
        let f = this.selectionAPI.getSelection();
        if (this.selectionAPI.isSelecting() && (f.length > 1 || f.length === 1 && f[0].id !== r && f[0].type === "block") || a) {
          return;
        }
        let m = this.blockManager.getLastBlockIdByPreOrder();
        if (m) {
          let r = this.rect.getBlockClientRect(m);
          if (e.clientY - ((r == null ? undefined : r.bottom) || 0) < 1) {
            return;
          }
        }
        let v = await this.findLastTextualBlockIfEmpty(o);
        if (v) {
          if (this.fold.getFoldStateById(v)?.foldedBy) {
            await this.fold.forceShowFoldedBlock(v, i);
          }
          return this.selectionAPI.setSelection([{
            type: editorTypeConstants.blockTypes.TEXT,
            id: v,
            selection: {
              start: 0,
              end: 0
            }
          }], {
            force: true,
            source: editorTypeConstants.commandTypes.ClickOnBottom
          });
        }
        let y = this.blockManager.getBlockModelByBlockId(r);
        if (syncUrlBlockUtils.isSyncingActive()) {
          let e = syncUrlBlockUtils.getBlockByToken(this.blockManager);
          if (!e) {
            return;
          }
          y = e;
        }
        let k = y.children.length;
        await this.blockManager.applyTransaction("handleClickPageBlockToInsertBlock", e => {
          documentBlockOperations.insertNewChildren(e, y.recordId, k, [documentNodeUtils_2.createDocumentNode()]);
        });
        let I = y.children[k].id;
        let E = this.blockManager.getBlockViewByBlockId(I);
        if (editorTextBlockUtilities.isTextEditable(E)) {
          this.selectionAPI.setSelection([{
            type: editorTypeConstants.blockTypes.TEXT,
            id: I,
            selection: {
              start: 0,
              end: 0
            }
          }], {
            source: editorTypeConstants.commandTypes.ClickOnBottom
          });
        }
      });
      m(this, "handleMouseDown", e => {
        this.mouseContext = {
          x: e.clientX,
          y: e.clientY
        };
      });
      m(this, "handleMouseUp", (e, r) => {
        let i = this.blockManager.getBlockViewByBlockId(r).hostElement;
        if (e.target instanceof Node && i.contains(e.target)) {
          this.resetMouseContext();
          return;
        }
        if (this.mouseContext) {
          var n;
          let {
            x: r,
            y: i
          } = this.mouseContext;
          let o = Math.min(r, e.clientX);
          let a = Math.min(i, e.clientY);
          let l = Math.abs(i - e.clientY);
          let s = Math.abs(r - e.clientX);
          let c = {
            x: o,
            y: a,
            width: s,
            height: l,
            left: r,
            right: r + s,
            top: i,
            bottom: i + l,
            toJSON: () => c
          };
          let d = (n = this.rootBlockHost) === null || n === undefined ? undefined : n.getBoundingClientRect();
          if (d && rectIntersectionUtils.checkIntersection(c, d)) {
            this.resetMouseContext();
            return;
          }
        }
        this.removeAllSelection();
        this.resetMouseContext();
      });
    }
  }
  function b() {
    docxEditorCore.registerViewExt(docxClickBottomProvider.clickBottomProvider, v);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    }
  });
}