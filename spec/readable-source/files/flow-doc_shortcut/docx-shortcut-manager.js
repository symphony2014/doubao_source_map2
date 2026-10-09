// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'ShortcutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 797384
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatibleEditorContext = require("compatible-editor-context") /*id: 6849*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  function y(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
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
  function k(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  (n = S || {})[n.Create = 0] = "Create";
  n[n.Destroy = 1] = "Destroy";
  var S = n;
  l = k((o = class {
    get editorContext() {
      return this.api.getService(compatibleEditorContext.compatibleContext);
    }
    getVirtualListInstance(e) {
      var i;
      if ((i = this.textEditor.virtualListManager) === null || i === undefined) {
        return undefined;
      } else {
        return i.getVirtualListModuleOfZone(e);
      }
    }
    getRecord(e) {
      let i = this.blockManager.getRecordByBlockId(e);
      if (i && this.blockManager.getBlockModelByBlockIdNotCheck(e)) {
        return i;
      }
    }
    onRecordsChange(e, i, r, n) {
      let {
        options: o
      } = i;
      let {
        ops: l
      } = e;
      if (!l || o.from === collaborativeEditingFlowSyncModule.kq.LOCAL && !changeSourceValidators.isUndoRedoSource(o)) {
        return;
      }
      let s = true;
      if (i == null ? undefined : i.from) {
        s = syncedReferenceBlockUtils.isChangeFromCurrentEditor(i, this.blockManager.editorAPI.id);
      }
      let a = l.find(e => e.p.includes(n));
      if (a && (collaborativeEditingFlowSyncModule.transformOperations(a) || collaborativeEditingFlowSyncModule.isCreateOperation(a) || collaborativeEditingFlowSyncModule.isListDeleteOperation(a))) {
        let e;
        if (!collaborativeEditingFlowSyncModule.isListDeleteOperation(a)) {
          e = a.action.oi;
        }
        this.onRecordChange(r, e, s);
      }
    }
    applyTransaction(e, i) {
      let {
        transKey: r,
        recordKey: n,
        recordData: o
      } = i;
      this.blockManager.applyTransaction(r, i => {
        i.replace(e, [n], o);
      });
    }
    handleBlockModelLifecycle(e) {
      let {
        model: i,
        type: r
      } = e;
      if ([docBlockTypeConstants.blockTypeConstants.CODE].includes(i.type)) {
        if (r === S.Create) {
          this.onBlockModelCreate(i);
        }
        if (r === S.Destroy) {
          this.onBlockModelDestroy(i);
        }
      }
    }
    bindEvents() {
      let {
        structService: e
      } = this.blockManager;
      this.subs = [e.ready$.subscribe(() => {
        for (let i of e.getBlockStructsByType(docBlockTypeConstants.blockTypeConstants.CODE)) {
          this.handleBlockModelLifecycle({
            model: i,
            type: S.Create
          });
        }
      }), e.mutation$.subscribe(e => {
        let {
          mutations: i
        } = e;
        i.added.forEach(e => {
          let {
            block: i
          } = e;
          if (i.type === docBlockTypeConstants.blockTypeConstants.CODE) {
            this.handleBlockModelLifecycle({
              model: i,
              type: S.Create
            });
          }
        });
        i.updated.forEach(e => {
          let {
            originalType: i,
            block: r
          } = e;
          if (i === "text" && r.type === docBlockTypeConstants.blockTypeConstants.CODE) {
            this.handleBlockModelLifecycle({
              model: r,
              type: S.Create
            });
          }
        });
        i.removed.forEach(e => {
          let {
            block: i
          } = e;
          if (i.type === docBlockTypeConstants.blockTypeConstants.CODE) {
            this.handleBlockModelLifecycle({
              model: i,
              type: S.Destroy
            });
          }
        });
      })];
    }
    unBindEvents() {
      this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
    }
    init() {
      this.bindEvents();
    }
    destroy() {
      this.unBindEvents();
    }
    constructor() {
      y(this, "api", l, this);
      y(this, "textEditor", s, this);
      y(this, "blockManager", a, this);
      y(this, "selectionAPI", c, this);
      w(this, "subs", []);
      w(this, "onBlockModelCreate", undefined);
      w(this, "onBlockModelDestroy", undefined);
      w(this, "onRecordChange", undefined);
    }
  }).prototype, "api", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = k(o.prototype, "textEditor", [docxEditorKitProviders.editorKitProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = k(o.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = k(o.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let M = o;
  require.d(exports, {
    ShortcutManager: function () {
      return M;
    }
  });
}