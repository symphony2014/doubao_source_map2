// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'docxClickBetweenBlockProvider'
// - Resolved require(795381) to 'docx-click-between-block-provider'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'docxBlockUtils_1'
// - Resolved require(138224) to 'docx-block-utils_1'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'docxSheetPasteUtils'
// - Resolved require(88608) to 'docx-sheet-paste-utils'
// - Renamed variable 'd' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'u' to 'docxTableLayoutUtils'
// - Resolved require(163702) to 'docx-table-layout-utils'
// - Renamed variable 'h' to 'editorContextFacade'
// - Resolved require(788056) to 'editor-context-facade'
// - Renamed variable 'p' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Updated imported property 'e' to 'EditorContextFacade' (module 788056)
// - Updated imported property 'd5' to 'nativeEventDispatcher' (module 267720)
// - Updated imported property 'QJ' to 'gridTableOkTypes' (module 433991)
// - Updated imported property 'Fr' to 'getAllowedBlockTypes' (module 433991)
// - Updated imported property 'aB' to 'allEmbeddableTypes' (module 433991)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'zF' to 'checkHorizontalAlign' (module 163702)
// - Updated imported property 'al' to 'isSheetHeaderShown' (module 88608)
// - Updated imported property 'Yt' to 'insertNewLine' (module 138224)
// - Updated imported property 'Pd' to 'isTextBlock' (module 138224)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'ix' to 'registerViewExt' (module 135760)
// - Updated imported property 'e' to 'clickBetweenBlockName' (module 795381)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 73692
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxClickBetweenBlockProvider = require("docx-click-between-block-provider") /*id: 795381*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function g(e, r, i) {
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
  class f extends editorContextFacade.EditorContextFacade {
    binarySearch(e, r, i, n) {
      let o = r(e[n]);
      if ((o == null ? undefined : o.index) === 0) {
        o.index = n;
        return o;
      }
      let a = r(e[i]);
      if ((a == null ? undefined : a.index) === 0) {
        a.index = i;
        return a;
      }
      while (n - i > 1) {
        let o = Math.floor((i + n) / 2);
        let a = r(e[o]);
        if (a === undefined) {
          break;
        }
        let {
          index: l
        } = a;
        if (l === 0) {
          a.index = o;
          return a;
        }
        if (l < 0) {
          n = o;
        } else if (l > 0) {
          i = o;
        } else {
          let o = this.binarySearch(e, r, i, l - 1);
          o ||= this.binarySearch(e, r, l + 1, n);
          return o;
        }
      }
    }
    checkIsDrag(e) {
      if (this.mouseContext) {
        let {
          x: r,
          y: i
        } = this.mouseContext;
        let n = Math.abs(i - e.clientY);
        let o = Math.abs(r - e.clientX);
        return n > 10 || o > 10;
      }
      return false;
    }
    getEffect() {
      return e => {
        let r = e => this.handleMouseDown(e);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.editorContext.container;
          docxEditorEventConstantsAndManager.nativeEventDispatcher.on("mousedown", e, r);
          return () => {
            docxEditorEventConstantsAndManager.nativeEventDispatcher.off("mousedown", e, r);
          };
        }, []);
        let {
          container: i
        } = this.editorContext;
        let {
          editable: n
        } = e.recursionProps;
        let o = reactCoreLibraryReexport.useCallback(e => {
          if (!!n && !this.checkIsDrag(e)) {
            this.handleClickPageBlock(e);
          }
        }, [n]);
        reactCoreLibraryReexport.useEffect(() => {
          docxEditorEventConstantsAndManager.nativeEventDispatcher.on("click", i, o);
          return () => {
            docxEditorEventConstantsAndManager.nativeEventDispatcher.off("click", i, o);
          };
        }, [i, o]);
      };
    }
    constructor(...e) {
      super(...e);
      g(this, "mouseContext", undefined);
      g(this, "handleClickPageBlock", e => {
        let r = e.target;
        let i = r.closest(".block");
        if (!i || r.closest(".text-editor") || r.closest(".fold-handler") || r.closest(".h5-toolbar-wrapper")) {
          return;
        }
        let n = [...docBlockTypeConstants.gridTableOkTypes, ...docBlockTypeConstants.getAllowedBlockTypes()];
        let o = i.dataset.blockType;
        let a = n.includes(o);
        let d = docBlockTypeConstants.allEmbeddableTypes.includes(o);
        if (!a && !d) {
          return;
        }
        let h = Number(i.dataset.blockId);
        if (h && !a) {
          let e = this.blockManager.getBlockStructByBlockId(h)?.parent;
          if (e && [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.CELL].includes(e.type)) {
            h = e.id;
          }
        }
        if (!h) {
          return;
        }
        let g = this.blockManager.getBlockViewByBlockIdNotCheck(h);
        if (g && g.type === docBlockTypeConstants.blockTypeConstants.CELL && docxTableLayoutUtils.checkHorizontalAlign(e.clientX, g)) {
          return;
        }
        if (o === docBlockTypeConstants.blockTypeConstants.SHEET) {
          let r = Number(i.dataset.blockId);
          let n = this.blockManager.getBlockViewByBlockIdNotCheck(r);
          if (n && docxSheetPasteUtils.isSheetHeaderShown(e.offsetY, n)) {
            return;
          }
        }
        let f = this.getClosestBlockIdByPosition(h, e.y);
        if (f) {
          docxBlockUtils_1.insertNewLine({
            blockManager: this.blockManager,
            selectionAPI: this.selectionAPI,
            viewport: this.viewPort,
            blockId: f.blockId,
            isNextBlock: f.isNextBlock
          });
          e.stopPropagation();
        }
      });
      g(this, "checkIsOneLineBlock", e => {
        let r = this.blockManager.getBlockViewByBlockId(e);
        return docBlockTypeConstants.allEmbeddableTypes.includes(r.type);
      });
      g(this, "checkIsTextChildOneLineBlock", e => {
        let r = this.blockManager.getBlockViewByBlockIdNotCheck(e);
        if (r && docxBlockUtils_1.isTextBlock(r) && r.model.children.length > 0) {
          let e = r.model.children[r.model.children.length - 1].id;
          return this.checkIsOneLineBlock(e) || this.checkIsTextChildOneLineBlock(e);
        }
        return false;
      });
      g(this, "getClosestBlockIdByPosition", (e, r) => {
        let i;
        let n;
        let {
          isBlockActive: o
        } = this.blockManager.layoutManager;
        let a = this.blockManager.getBlockModelByBlockId(e);
        let l = a.children.map(e => e.id).filter(o);
        let s = l.length;
        if (s === 0) {
          return;
        }
        let c = this.binarySearch(l, e => {
          let {
            y: i,
            height: n
          } = this.blockManager.getBlockViewByBlockId(e).hostElement.getBoundingClientRect();
          if (r < i) {
            if (r > i - 16) {
              return {
                index: 0,
                placement: "upside"
              };
            } else {
              return {
                index: -1,
                placement: "upside"
              };
            }
          } else if (r > i + n) {
            if (r < i + n + 16) {
              return {
                index: 0,
                placement: "downside"
              };
            } else {
              return {
                index: 1,
                placement: "downside"
              };
            }
          } else {
            return undefined;
          }
        }, 0, s - 1);
        if (!c) {
          return;
        }
        let {
          index: u,
          placement: h
        } = c;
        if (h === "upside") {
          i = l[u - 1];
          n = l[u];
        } else {
          i = l[u];
          n = l[u + 1];
        }
        if (!i) {
          if (a.isRoot && !syncedReferenceBlockUtils.isSyncedReferenceBlock(a.editorAPI) || !this.checkIsOneLineBlock(n)) {
            return;
          }
          return {
            isNextBlock: false,
            blockId: n
          };
        }
        if (!n) {
          if (!this.checkIsOneLineBlock(i)) {
            return;
          }
          return {
            isNextBlock: true,
            blockId: i
          };
        }
        if ((this.checkIsOneLineBlock(i) || this.checkIsTextChildOneLineBlock(i)) && this.checkIsOneLineBlock(n)) {
          return {
            isNextBlock: true,
            blockId: i
          };
        }
      });
      g(this, "handleMouseDown", e => {
        this.mouseContext = {
          x: e.clientX,
          y: e.clientY
        };
      });
    }
  }
  function m() {
    docxEditorCore.registerViewExt(docxClickBetweenBlockProvider.clickBetweenBlockName, f);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return m;
    }
  });
}