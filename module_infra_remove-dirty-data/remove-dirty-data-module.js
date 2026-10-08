// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'b' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'f' to 'removeDirtyDataProvider'
// - Resolved require(170949) to 'remove-dirty-data-provider'
// - Renamed variable 'd' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'h' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'g' to 'editorContentFoldOperations'
// - Resolved require(35914) to 'editor-content-fold-operations'
// - Renamed variable 'v' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'y' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'p' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'U' to 'removeDirtyDataKey' (module 170949)
// - Updated imported property 'ZP' to 'docEventCollector' (module 477626)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'iY' to 'agendaCodeTypes' (module 433991)
// - Updated imported property 'k$' to 'hasTextWithApoolSimple' (module 469443)
// - Updated imported property 'N8' to 'hasFoldedContent' (module 35914)
// - Updated imported property 'el' to 'unfoldContent' (module 35914)
// - Updated imported property 'GI' to 'CollabMode' (module 756448)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_remove-dirty-data.8ce7dcf2.js
         * chunkId: 73873
         * moduleId: 846807
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var a;
  var o;
  var l;
  var s;
  var c;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var removeDirtyDataProvider = require("remove-dirty-data-provider") /*id: 170949*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var editorContentFoldOperations = require("editor-content-fold-operations") /*id: 35914*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  function m(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let _ = dependencyInjectionContainer.Provide(removeDirtyDataProvider.removeDirtyDataKey)((r = (s = class {
    init() {
      this.subs = [this.blockManager.dataService.change$.subscribe(this.handleRecordChange)];
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      var e;
      var t;
      e = "blockManager";
      if (t = c) {
        Object.defineProperty(this, e, {
          enumerable: t.enumerable,
          configurable: t.configurable,
          writable: t.writable,
          value: t.initializer ? t.initializer.call(this) : undefined
        });
      }
      m(this, "subs", []);
      m(this, "handleRecordChange", async e => {
        try {
          let {
            options: t
          } = e;
          if (!this.blockManager.config.get("editPermission") || t.from !== collaborativeEditingFlowSyncModule.kq.LOCAL) {
            return;
          }
          await this.checkFoldedAttributes(e);
        } catch (e) {
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "remove-dirty-data_error",
            info: JSON.stringify({
              stack: e.stack
            })
          });
        }
      });
      m(this, "checkFoldedAttributes", async e => {
        let {
          recordOps: t
        } = e;
        let i = [];
        for (let e of t) {
          let {
            record: t
          } = e;
          if (!this.blockManager.getBlockModelsByRecordId(t.id)[0]) {
            continue;
          }
          let r = t.snapshot.type;
          if (r !== docBlockTypeConstants.blockTypeConstants.CODE && editorTextBlockUtilities.hasTextWithApoolSimple(t.snapshot) && docBlockTypeConstants.agendaCodeTypes.includes(r) && editorContentFoldOperations.hasFoldedContent(t.snapshot.text)) {
            i.push(t);
          }
        }
        if (i.length) {
          await this.blockManager.applyTransaction("removeFoldedAttributes", e => {
            for (let t of i) {
              editorContentFoldOperations.unfoldContent(t, e);
            }
          }, {
            mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
          });
        }
      });
    }
  }).prototype, n = "blockManager", a = [blockManagerToken.blockManagerToken], l = {}, Object.keys(o = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    l[e] = o[e];
  }), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = true), c = (l = a.slice().reverse().reduce(function (e, t) {
    return t(r, n, e) || e;
  }, l)).initializer === undefined ? (Object.defineProperty(r, n, l), null) : l, s)) || s;
  function k() {
    docxEditorCore.registerProviders([_]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(removeDirtyDataProvider.removeDirtyDataKey).init();
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return k;
    }
  });
}