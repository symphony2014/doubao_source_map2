// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'l' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 's' to 'codeFoldResizeConstants'
// - Resolved require(637342) to 'code-fold-resize-constants'
// - Renamed variable 'a' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'c' to 'codeBlockHighlightjsConstants'
// - Resolved require(433332) to 'code-block-highlightjs-constants'
// - Renamed variable 'd' to 'contentFoldOperations'
// - Resolved require(849924) to 'content-fold-operations'
// - Renamed variable 'u' to 'observableSubjectClass'
// - Resolved require(292580) to 'observable-subject-class'
// - Renamed variable 'h' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'p' to 'flowSyncDeltaOperations'
// - Resolved require(539974) to 'flow-sync-delta-operations'
// - Renamed variable 'f' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'g' to 'primitiveConverters'
// - Resolved require(383327) to 'primitive-converters'
// - Renamed variable 'm' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'v' to 'changeSourceConstants'
// - Resolved require(363583) to 'change-source-constants'
// - Renamed variable 'b' to 'foldCodeEventTypes'
// - Resolved require(525302) to 'fold-code-event-types'
// - Renamed variable 'y' to 'docxShortcutManager'
// - Resolved require(797384) to 'docx-shortcut-manager'
// - Renamed variable 'S' to 'codeBlockResizeManager'
// - Resolved require(724319) to 'code-block-resize-manager'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'NO' to 'foldServiceName' (module 637342)
// - Updated imported property 'wd' to 'foldActions' (module 637342)
// - Updated imported property 'Zl' to 'resizeServiceName' (module 637342)
// - Updated imported property '$' to 'ShortcutManager' (module 797384)
// - Updated imported property 'XS' to 'codeBlockType' (module 433332)
// - Updated imported property 'vT' to 'toString' (module 383327)
// - Updated imported property 'VB' to 'toNumber' (module 383327)
// - Updated imported property 'sZ' to 'isEasysyncSubtype' (module 539974)
// - Updated imported property 'Us' to 'FOLDED_CONSTANT' (module 849924)
// - Updated imported property 'WL' to 'foldCodeViewChange' (module 525302)
// - Updated imported property 'go' to 'foldCodeBufChange' (module 525302)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'x' to 'Subject' (module 292580)
// - Updated imported property 'oO' to 'isH5Browser' (module 363583)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'QH' to 'convertRangeWithZone' (module 780600)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'dy' to 'CodeBlockResizeManager' (module 724319)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 948854
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var codeFoldResizeConstants = require("code-fold-resize-constants") /*id: 637342*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var contentFoldOperations = require("content-fold-operations") /*id: 849924*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var foldCodeEventTypes = require("fold-code-event-types") /*id: 525302*/;
  var docxShortcutManager = require("docx-shortcut-manager") /*id: 797384*/;
  function w(e, i, r) {
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
  let k = dependencyInjectionContainer.Provide(codeFoldResizeConstants.foldServiceName)(n = class extends docxShortcutManager.ShortcutManager {
    get codePlugin() {
      return this.textEditor.pluginManager.getPlugin(codeBlockHighlightjsConstants.codeBlockType);
    }
    getCodeFoldStatusById(e) {
      return this.codeFoldStatusMap.get(e);
    }
    onRecordsChange(e, i, r, n) {
      super.onRecordsChange(e, i, r, n);
      let {
        ops: o,
        block: l
      } = e;
      let {
        options: s
      } = i;
      if (!o || s.from !== collaborativeEditingFlowSyncModule.kq.REMOTE) {
        return;
      }
      let c = primitiveConverters.toString(l.id);
      let {
        codePlugin: u
      } = this;
      if (!!u && !u.foldModule.has(c) && o.filter(e => flowSyncDeltaOperations.isEasysyncSubtype(e)).some(e => {
        let {
          apool: i
        } = e.subType.o;
        return Object.values(i.numToAttrib).some(e => e[0] === contentFoldOperations.FOLDED_CONSTANT && e[1] === "true");
      })) {
        u.buildZoneFold(c);
      }
    }
    async applyFoldStatus(e, i) {
      let r = this.getRecord(e);
      if (r && r.snapshot.folded !== i) {
        this.applyTransaction(r.id, {
          transKey: "codeblock:set-code-folded",
          recordKey: "folded",
          recordData: i
        });
      }
    }
    async updateFoldStatusByBlockId(e, i, r = false) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      if (r) {
        await this.applyFoldStatus(e, i);
      }
      this.updateSelection(e, i);
      this.codeFoldStatusMap.set(e, i);
      this.codeFoldStatusChange$.next({
        blockId: e,
        folded: i
      });
      this.blockManager.dispatch(foldCodeEventTypes.foldCodeViewChange, {
        blockId: e,
        folded: i,
        isLocal: n
      });
    }
    updateFoldStatusByRecordId(e, i, r) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      this.blockManager.getBlockModelsByRecordId(e).forEach(e => {
        this.updateFoldStatusByBlockId(e.id, i, r, n);
      });
    }
    forceShowAllFoldedCodeBlocks(e = false) {
      this.findFoldedCodeBlocksByStatus(true).forEach(i => {
        this.updateFoldStatusByBlockId(i, false, e);
      });
    }
    forceShowFoldedCodeBlock(e, i, r = false) {
      if ((!r || !this.isFolded(e)) && (r || this.isFolded(e))) {
        this.updateFoldStatusByBlockId(e, r, i);
      }
    }
    forceExpandFoldedLines(e, i, r) {
      var n;
      if ((n = this.codePlugin) !== null && n !== undefined) {
        n.foldZoneLine({
          zoneId: primitiveConverters.toString(e),
          index: i,
          unFold: true,
          isLocal: r
        });
      }
    }
    forceExpandAllFoldedLines(e, i) {
      let r = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      if (!r || r.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        return;
      }
      let n = r.zoneState.lines.map(e => e.index);
      this.forceExpandFoldedLines(e, n, i);
    }
    forceShowCollapsedLines(e, i, r) {
      let n = new Set();
      let o = primitiveConverters.toString(e);
      for (let e of i) {
        var l;
        var s;
        let i = (s = this.codePlugin) === null || s === undefined ? undefined : (l = s.getFoldModule()) === null || l === undefined ? undefined : l.getCollapseFoldLines(o, e);
        if (i != null) {
          i.forEach(e => n.add(e));
        }
      }
      this.forceExpandFoldedLines(e, Array.from(n), r);
    }
    forceShowCollapsedLinesByAttributes(e, i, r) {
      let n = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      if (!n || n.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        return;
      }
      let o = n.zoneState.getEntities([[i]]);
      let l = new Set();
      o.forEach(e => {
        let {
          start: i,
          end: r
        } = e;
        for (let e = i.line; e <= r.line; e++) {
          l.add(e);
        }
      });
      this.forceShowCollapsedLines(e, Array.from(l), r);
    }
    forceShowCollapsedLinesByRange(e, i, r) {
      let n = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      if (!n || n.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        return;
      }
      let o = [];
      for (let e of n.zoneState.lines) {
        let r = e.getOffset();
        if (!(r.end < i[0])) {
          if (r.start > i[1]) {
            break;
          }
          o.push(e.index);
        }
      }
      this.forceShowCollapsedLines(e, o, r);
    }
    isSelectedAll(e, i) {
      var r;
      let l = i == null ? undefined : (r = i.zoneState) === null || r === undefined ? undefined : r.totalWidth();
      return l && e.selection?.start === 0 && e.selection?.end === l - 1;
    }
    init() {
      super.init();
      this.subs.push(this.codeInlineFoldStatusChange$.subscribe(this.onCodeInlineFoldStatusChange));
    }
    destroy() {
      super.destroy();
    }
    constructor(...e) {
      var i;
      super(...e);
      i = this;
      w(this, "codeFoldStatusMap", new Map());
      w(this, "codeFoldStatusChange$", new observableSubjectClass.Subject());
      w(this, "codeInlineFoldStatusChange$", new observableSubjectClass.Subject());
      w(this, "onRecordChange", function (e, r) {
        let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        i.updateFoldStatusByRecordId(e, !!r, false, n);
      });
      w(this, "findFoldedCodeBlocksByStatus", e => {
        let i = [];
        for (let [r, n] of this.codeFoldStatusMap.entries()) {
          if (n === e) {
            i.push(r);
          }
        }
        return i;
      });
      w(this, "findFoldedInlineCodeBlocks", () => Array(...this.codeFoldStatusMap.entries()).reduce((e, i) => {
        var r;
        var n;
        let [o] = i;
        let l = (n = this.codePlugin) === null || n === undefined ? undefined : (r = n.getFoldModule()) === null || r === undefined ? undefined : r.getFoldedLines(primitiveConverters.toString(o));
        let s = this.blockManager.getRecordByBlockId(o);
        if (l && s) {
          e[s.id] = l;
        }
        return e;
      }, {}));
      w(this, "isFolded", e => this.codeFoldStatusMap.get(e) === true);
      w(this, "onBlockModelCreate", e => {
        let {
          snapshot: i
        } = e;
        let {
          folded: r
        } = i;
        if (typeof r == "boolean") {
          this.codeFoldStatusMap.set(e.id, r);
        }
      });
      w(this, "onBlockModelDestroy", e => {
        this.codeFoldStatusMap.delete(e.id);
      });
      w(this, "updateSelection", (e, i) => {
        if (changeSourceConstants.isH5Browser) {
          var r;
          if ((r = window.getSelection()) !== null && r !== undefined) {
            r.removeAllRanges();
          }
        } else if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.selectionAPI.blur();
        } else if (i) {
          let i = [];
          this.selectionAPI.getSelection().forEach(r => {
            if (r.id !== e || r.type !== "text") {
              i.push(r);
            }
          });
          this.selectionAPI.setSelection(i);
        }
      });
      w(this, "onCodeInlineFoldStatusChange", e => {
        Object.entries(e).forEach(e => {
          let [i, r] = e;
          let n = primitiveConverters.toNumber(i);
          let {
            expandLines: o,
            collapsedLines: l
          } = r;
          if (o.length) {
            this.blockManager.dispatch(foldCodeEventTypes.foldCodeBufChange, {
              blockId: n,
              type: codeFoldResizeConstants.foldActions.UnFold
            });
          }
          if (!l.length) {
            return;
          }
          this.blockManager.dispatch(foldCodeEventTypes.foldCodeBufChange, {
            blockId: n,
            type: codeFoldResizeConstants.foldActions.Fold
          });
          let a = this.selectionAPI.getSelection();
          if (!this.selectionAPI.isSingleTextSelection()) {
            return;
          }
          let {
            id: c,
            selection: d
          } = a[0];
          let u = this.blockManager.getBlockViewByBlockIdNotCheck(n);
          if (c !== n || !u || !d) {
            return;
          }
          let h = editorRangeUtilities.convertRangeWithZone(u, d);
          let p = l.map(e => e.index);
          if (!p.includes(h.start.line) && !p.includes(h.end.line)) {
            return;
          }
          this.selectionAPI.removeAllSelection();
          let f = window.getSelection();
          if (f != null) {
            f.removeAllRanges();
          }
          let v = new Range();
          let y = document.querySelector(".docx-selection-hidden-textarea") || document.body;
          v.setStart(y, 0);
          v.setEnd(y, 0);
          if (f != null) {
            f.addRange(v);
          }
        });
      });
    }
  }) || n;
  var codeBlockResizeManager = require("code-block-resize-manager") /*id: 724319*/;
  function M() {
    docxEditorCore.registerProviders([k, codeBlockResizeManager.CodeBlockResizeManager]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(codeFoldResizeConstants.foldServiceName);
      let i = dependencyInjectionContainer.get(codeFoldResizeConstants.resizeServiceName);
      e.init();
      i.init();
      return () => {
        e.destroy();
        i.destroy();
      };
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return M;
    }
  });
}