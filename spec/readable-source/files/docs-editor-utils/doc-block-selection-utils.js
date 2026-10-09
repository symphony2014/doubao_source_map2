// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rs' to 'getQuoteBlockPosition'
// - Renamed export 'k7' to 'formatDiffOperations'
// - Renamed export 'xF' to 'filterBlocksBySelection'
// - Renamed export 'LY' to 'validateSelectionStart'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 906257
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  function d(e, n, r) {
    if (!n || !e.length) {
      return {
        blockList: e,
        noInSelBlockList: []
      };
    }
    let o = e[0].editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
    if (o.length === 0) {
      return {
        blockList: e,
        noInSelBlockList: []
      };
    }
    let i = e.slice(+!r);
    let l = i.filter(e => !i.find(n => {
      return n.id === e.parent?.id;
    }));
    let u = [];
    for (let e = i.length - 1; e >= 0; e--) {
      let n = i[e];
      let r = o.find(e => e.id === n.id);
      if ((!r || r.type !== editorTypeConstants.blockTypes.BLOCK) && ![docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.GRID].includes(n.type)) {
        n.children.forEach(e => {
          if (!i.find(n => n.id === e.id)) {
            u.push(e);
          }
        });
      }
    }
    return {
      blockList: l,
      noInSelBlockList: u
    };
  }
  function f(e) {
    if (e && e.type === docBlockTypeConstants.blockTypeConstants.QUOTE) {
      return {
        parentRecordId: e.parent.recordId,
        position: e.position + 1
      };
    } else {
      return {
        parentRecordId: e.recordId,
        position: 0
      };
    }
  }
  function h(e, n, r) {
    let {
      zoneState: o
    } = e;
    let i = o.totalWidth();
    if (n > i - 1) {
      var d;
      let h = o.getEntities([]);
      let _ = e.snapshot.text.initialAttributedTexts.text;
      e.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "invalid_selection_start",
        info: JSON.stringify({
          id: e.id,
          start: n,
          record_length: _[zeroConstantModule_1.versionValue]?.length,
          editor_content_length: i,
          view_length: (d = o._node) === null || d === undefined ? undefined : d.textContent?.length,
          last_entity: encodeURIComponent(h[h.length - 1]?.text),
          docx_selection: r.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection().map(e => {
            let i = r.modelService.getBlockModelByBlockId(e.id);
            if (i) {
              return {
                id: i.id,
                type: i.type,
                selType: e.type,
                selection: e.selection || null,
                parentId: i.parent?.id,
                parentType: i.parent?.type
              };
            } else {
              return null;
            }
          }),
          editor_selection: e.getSelection()
        })
      });
      return i - 1;
    }
    return n;
  }
  function _(e) {
    return e.map(e => {
      let n = deltaSetCore.getOpType(e);
      let r = e[n];
      switch (n) {
        case documentOperationConstants.operationTypes.INSERT:
          let c = r === "\n";
          let u = e.attributes?.fixEnter;
          return `insert: cs(${typeof r == "string" ? r.length : "object"}), isN(${c}), fixEnter(${u})`;
        case documentOperationConstants.operationTypes.RETAIN:
          return `retain: ${r}`;
        case documentOperationConstants.operationTypes.DELETE:
          return `delete: ${r}`;
        default:
          return "";
      }
    });
  }
  require.d(exports, {
    getQuoteBlockPosition: function () {
      return f;
    },
    formatDiffOperations: function () {
      return _;
    },
    filterBlocksBySelection: function () {
      return d;
    },
    validateSelectionStart: function () {
      return h;
    }
  });
}