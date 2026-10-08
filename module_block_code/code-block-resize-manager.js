// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sg' to 'codeBlockHeightLimit'
// - Renamed export 'dy' to 'CodeBlockResizeManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 724319
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var foldCodeEventTypes = require("fold-code-event-types") /*id: 525302*/;
  var docxShortcutManager = require("docx-shortcut-manager") /*id: 797384*/;
  var codeFoldResizeConstants = require("code-fold-resize-constants") /*id: 637342*/;
  function f(e, i, r) {
    var n;
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  (n = g || {})[n.Part = 0] = "Part";
  n[n.All = 1] = "All";
  var g = n;
  let m = {
    [codeFoldResizeConstants.commentAnchorTypes.Comment]: [g.Part, g.All],
    [codeFoldResizeConstants.commentAnchorTypes.Anchor]: [g.Part, g.Part]
  };
  let v = 1958;
  let b = dependencyInjectionContainer.Provide(codeFoldResizeConstants.resizeServiceName)(o = class extends docxShortcutManager.ShortcutManager {
    getBlockView(e) {
      var i;
      if ((i = this.blockManager) === null || i === undefined) {
        return undefined;
      } else {
        return i.getBlockViewByBlockIdNotCheck(e);
      }
    }
    isRangeInCodeBlock(e, i) {
      var r;
      var n;
      var o;
      let l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : codeFoldResizeConstants.commentAnchorTypes.Comment;
      let s = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
      let a = this.getBlockView(e);
      let c = ((r = this.editorContext) === null || r === undefined ? undefined : r.rect.isSyncedReferenceBlock) ? (n = this.editorContext) === null || n === undefined ? undefined : n.rect.getRootBlockId() : undefined;
      let d = (o = this.editorContext) === null || o === undefined ? undefined : o.rect.getBlockRect(e, c);
      if (!d || !a || !s && a.folded) {
        return [true, true, 0];
      }
      let {
        top: u,
        height: h
      } = i;
      let f = Math.max(22, h);
      let b = d.top + 40;
      let {
        scrollTop: y = 0
      } = (a == null ? undefined : a.realScroller) || {};
      if (!this.getRecordHeight(e) && !y && !(u - b >= v)) {
        return [false, false, 0];
      }
      let w = this.getCodeHeightById(e);
      w ||= this.setCodeHeightById(e, this.getVListHeight(e));
      let k = m[l];
      let S = u - b < 0;
      let M = S && Math.abs(u - b) >= f;
      let x = k[0] === g.All ? M : M || S;
      let E = u - b < w && u + f - b > w;
      let C = u + 22 - b > w;
      let _ = k[1] === g.All ? C : C || E;
      if (!_ && !x) {
        return [false, false, y];
      }
      let T = y;
      let I = 0;
      if (T !== (I = f < w ? Math.abs(b + w / 2 - (u + f / 2)) : Math.abs(u - (b + 5)))) {
        T = y + (x ? -I : I);
      }
      if (T < 0) {
        T = 0;
      }
      return [x, _, T];
    }
    getScrollType(e) {
      return this.codeScrollMap.get(e)?.type;
    }
    async scrollIntoView(e, i, r = codeFoldResizeConstants.commentAnchorTypes.Comment, n = codeFoldResizeConstants.resizeModes.Vertical) {
      let o = this.getBlockView(e);
      if (!o) {
        return;
      }
      let {
        isNewUI: l,
        realScroller: s
      } = o;
      if (l && s && n === codeFoldResizeConstants.resizeModes.Vertical) {
        var a;
        var c;
        var d;
        let n = ((a = this.editorContext) === null || a === undefined ? undefined : a.rect.isSyncedReferenceBlock) ? (c = this.editorContext) === null || c === undefined ? undefined : c.rect.getRootBlockId() : undefined;
        let o = (d = this.editorContext) === null || d === undefined ? undefined : d.rect.getRangeRect(e, i, n);
        if (!o) {
          return;
        }
        let [l, u, h] = this.isRangeInCodeBlock(e, o, r, true);
        if (h !== s.scrollTop) {
          s.scrollTop = h;
        }
        let p = new Promise(i => {
          requestAnimationFrame(() => {
            this.onBufferChange(e);
            i();
          });
        });
        await p;
      }
    }
    getLimitHeight(e) {
      return Math.min(v, Math.max(78, e));
    }
    getVListHeight(e) {
      var i;
      let n = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      let o = this.getBlockView(e);
      if (!n || !o) {
        return 0;
      }
      let {
        realScroller: l
      } = o;
      let s = l == null ? undefined : l.clientHeight;
      if (s && s > 0) {
        return s;
      }
      let a = this.getVirtualListInstance(n.zoneId);
      return ((a == null ? undefined : (i = a.getLayoutModule()) === null || i === undefined ? undefined : i.getHeight()) ?? 0) + 24;
    }
    getRecordHeight(e) {
      let i = this.getRecord(e);
      if (i == null) {
        return undefined;
      } else {
        return i.snapshot.height;
      }
    }
    getCodeHeightById(e) {
      return this.codeHeightMap.get(e);
    }
    setCodePreHeightById(e) {
      let i = this.getCodeHeightById(e);
      if (typeof i == "number") {
        this.codePreHeightMap.set(e, i);
      }
    }
    setCodeHeightById(e, i) {
      let r = Math.min(i, v);
      this.codeHeightMap.set(e, r);
      this.codeLocalHeightChange$.next({
        blockId: e,
        height: i
      });
      return r;
    }
    updateCodeHeightMap(e) {
      if (typeof this.getRecordHeight(e) != "number") {
        let i = this.getVListHeight(e);
        this.setCodeHeightById(e, i);
      }
    }
    getIsSupportResize(e) {
      let i = this.getCodeHeightById(e);
      return typeof i == "number" && i >= 78;
    }
    async updateHeightByBlockId(e, i, r = false) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      if (r) {
        await this.applyCodeHeight(e, i);
      }
      this.blockManager.dispatch(foldCodeEventTypes.foldCodeViewChange, {
        blockId: e,
        folded: false,
        isLocal: n
      });
      this.codeHeightMap.set(e, i);
      this.codeResizeHeightChange$.next({
        blockId: e,
        height: i
      });
    }
    updateHeightByRecordId(e, i, r = false) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      this.blockManager.getBlockModelsByRecordId(e).forEach(e => {
        this.updateHeightByBlockId(e.id, i, r, n);
      });
    }
    constructor(...e) {
      var i;
      super(...e);
      i = this;
      f(this, "codeHeightMap", new Map());
      f(this, "codePreHeightMap", new Map());
      f(this, "codeScrollMap", new Map());
      f(this, "codeResizeHeightChange$", new observableSubjectClass.Subject());
      f(this, "codeLocalHeightChange$", new observableSubjectClass.Subject());
      f(this, "codeBufferChange$", new observableSubjectClass.Subject());
      f(this, "setScrollType", (e, i) => {
        let n = i == null ? undefined : i.target;
        if (!n) {
          return;
        }
        let {
          scrollTop: o,
          scrollLeft: l
        } = n;
        let {
          x: s = 0,
          y: a = 0
        } = this.codeScrollMap.get(e) ?? {};
        let c = codeFoldResizeConstants.resizeModes.None;
        if (s !== l) {
          c = codeFoldResizeConstants.resizeModes.Horizon;
        }
        if (a !== o) {
          c = codeFoldResizeConstants.resizeModes.Vertical;
        }
        this.codeScrollMap.set(e, {
          x: l,
          y: o,
          type: c
        });
        return c;
      });
      f(this, "onBufferChange", e => {
        this.blockManager.dispatch(foldCodeEventTypes.foldCodeBufChange, {
          blockId: e,
          type: codeFoldResizeConstants.resizeModes.Vertical
        });
      });
      f(this, "onRecordChange", function (e, r) {
        var n;
        let l = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let [s] = ((n = i.blockManager) === null || n === undefined ? undefined : n.getBlockIdsByRecordId(e)) ?? [""];
        let a = r === undefined ? i.codePreHeightMap.get(s) : r;
        if (typeof a == "number") {
          i.updateHeightByRecordId(e, Number(a), false, l);
        }
      });
      f(this, "applyCodeHeight", debounceUtilWrapper.createDebounce(async (e, i) => {
        var r;
        if (i === ((r = this.blockManager.getBlockModelByBlockIdNotCheck(e)) === null || r === undefined ? undefined : r.snapshot.height)) {
          return;
        }
        let o = this.getRecord(e);
        if (o) {
          this.applyTransaction(o.id, {
            transKey: "codeblock:set-code-height",
            recordKey: "height",
            recordData: i
          });
          docContentPageClickCollector.collectDocContentPageClick(e, {
            actionType: "code_block_resize",
            actionValue: this.getBlockView(e)?.language || codeBlockHighlightjsConstants.plainTextLabel
          }, {
            blockManager: this.blockManager
          });
        }
      }, 16));
      f(this, "onBlockModelCreate", e => {
        let {
          snapshot: i
        } = e;
        let {
          height: r
        } = i;
        if (typeof r == "number") {
          this.codeHeightMap.set(e.id, r);
        }
      });
      f(this, "onBlockModelDestroy", e => {
        this.codeHeightMap.delete(e.id);
      });
    }
  }) || o;
  require.d(exports, {
    codeBlockHeightLimit: function () {
      return v;
    },
    CodeBlockResizeManager: function () {
      return b;
    }
  });
}