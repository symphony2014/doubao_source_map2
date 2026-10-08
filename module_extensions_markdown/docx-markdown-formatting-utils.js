// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EE' to 'registerMarkdownSettings'
// - Renamed export 'JD' to 'handleTurnIntoWithSeq'
// - Renamed export 'Vp' to 'removeRangeWithRevision'
// - Renamed export 'XV' to 'insertWithRevision'
// - Renamed export '_e' to 'formatRangeWithRevision'
// - Renamed export 'cB' to 'getSelectionFormatting'
// - Renamed export 'ce' to 'insertTextWithRevision'
// - Renamed export 'lV' to 'getDeltaLength'
// - Renamed export 'lt' to 'ensureMarkdownSettingsLoaded'
// - Renamed export 'oA' to 'applyRevisionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_markdown.82d25520.js
         * chunkId: 39939
         * moduleId: 368183
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var markdownProviderNameExport = require("markdown-provider-name-export") /*id: 494774*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  function C(e, t, n, r) {
    let {
      revision: o,
      hasCompleteDeletedRevision: i,
      hasCompleteAdditiveRevision: l
    } = e;
    if (i) {
      t.retain(n);
    } else if (o) {
      let [e, i] = o;
      let a = editorRevisionUtilities.parseJsonSafe(i);
      if (l) {
        t.delete(n);
      } else {
        t.retain(n, {
          [e]: i
        });
      }
      r.push({
        type: (a == null ? undefined : a.type) || editorRevisionConstants.diffOperationMap.DELETE,
        revisionId: editorRevisionUtilities.stripRevIdString(e)
      });
    } else {
      t.delete(n);
    }
  }
  function _(e, t, n) {
    let {
      editor: r,
      model: l,
      blockManager: a
    } = e;
    let {
      rangeToReplace: c,
      leftMatchKeyLength: u
    } = t;
    let d = t.rightMatchKeyLength || u;
    let s = c[1] - c[0] - u - d;
    let f = new editorPositionClass.EditorPosition({
      editor: r,
      zoneId: l.zoneId,
      start: c[0] + u,
      len: s
    }).toRange();
    let g = new contentStructureDelta.ContentDelta({
      zoneId: l.zoneId
    }).retain(c[0]);
    let I = [];
    (function (e, t, n, r) {
      let {
        editor: i,
        model: l,
        blockManager: a
      } = e;
      let {
        rangeToReplace: c,
        leftMatchKeyLength: u
      } = t;
      let d = new editorPositionClass.EditorPosition({
        editor: i,
        zoneId: l.zoneId,
        start: c[0],
        len: u
      }).toRange();
      C(editorRevisionDeleteOperations.getDeleteRevision(a, [editorRangeUtilities.toSelectionObject(d)]), n, u, r);
    })(e, t, g, I);
    let E = editorFormatRevisionUtils_1.getFormatRevision(a, [editorRangeUtilities.toSelectionObject(f)], n);
    if (E) {
      let e = l.zoneState.getEntities(f);
      let [t] = E;
      editorFormatRevisionUtils_1.applyFormatRevision(g, e, n, E);
      I.push({
        type: editorRevisionConstants.diffOperationMap.FORMAT,
        revisionId: editorRevisionUtilities.stripRevIdString(t)
      });
    } else {
      g.retain(s, n);
    }
    (function (e, t, n, r) {
      let {
        editor: i,
        model: l,
        blockManager: a
      } = e;
      let {
        rangeToReplace: c,
        leftMatchKeyLength: u
      } = t;
      let d = t.rightMatchKeyLength || u;
      let s = c[1] - c[0];
      let f = new editorPositionClass.EditorPosition({
        editor: i,
        zoneId: l.zoneId,
        start: c[0] + s - d,
        len: d
      }).toRange();
      C(editorRevisionDeleteOperations.getDeleteRevision(a, [editorRangeUtilities.toSelectionObject(f)]), n, d, r);
    })(e, t, g, I);
    return [g, I];
  }
  function b(e, t, n, r) {
    let {
      editor: l,
      model: a,
      blockManager: c
    } = e;
    let {
      rangeToReplace: u
    } = t;
    let d = [];
    let s = new contentStructureDelta.ContentDelta({
      zoneId: a.zoneId
    }).retain(u[0]);
    let f = u[1] - u[0];
    let g = new editorPositionClass.EditorPosition({
      editor: l,
      zoneId: a.zoneId,
      start: u[0],
      len: f
    }).toRange();
    C(editorRevisionDeleteOperations.getDeleteRevision(c, [editorRangeUtilities.toSelectionObject(g)]), s, f, d);
    let I = new editorPositionClass.EditorPosition({
      editor: l,
      zoneId: a.zoneId,
      start: u[1],
      len: 0
    }).toRange();
    let E = editorRevisionAddHandler.getInheritRevision(c, [editorRangeUtilities.toSelectionObject(I)]);
    let T = {
      ...r
    };
    if (E) {
      let [e, t] = E;
      T[e] = t;
      d.push({
        revisionId: editorRevisionUtilities.stripRevIdString(e),
        type: editorRevisionUtilities.parseJsonSafe(t)?.type || editorRevisionConstants.diffOperationMap.ADD
      });
    }
    s.insert(n, T);
    return [s, d];
  }
  function m(e, t, n) {
    let {
      blockManager: r,
      editor: l,
      model: a
    } = e;
    if (!r.config.get("revising")) {
      return e.model.zoneState.remove(t);
    }
    let c = t[1] - t[0];
    let u = new editorPositionClass.EditorPosition({
      editor: l,
      zoneId: a.zoneId,
      start: t[0],
      len: c
    }).toRange();
    let d = [];
    let s = editorRevisionDeleteOperations.getDeleteRevision(r, [editorRangeUtilities.toSelectionObject(u)]);
    let f = new contentStructureDelta.ContentDelta({
      zoneId: a.zoneId
    }).retain(t[0]);
    C(s, f, c, d);
    let g = e.model.zoneState.applyDeltaWithClone(f);
    if (d.length) {
      n.revisionContext = d;
    }
    return g;
  }
  function S(e, t, n) {
    let {
      blockManager: i,
      editor: l,
      model: a
    } = e;
    if (!i.config.get("revising")) {
      return {};
    }
    let c = new editorPositionClass.EditorPosition({
      editor: l,
      zoneId: a.zoneId,
      start: t,
      len: 0
    }).toRange();
    let u = editorRevisionAddHandler.getInheritRevision(i, [editorRangeUtilities.toSelectionObject(c)]);
    if (!u) {
      return {};
    }
    let [d, s] = u;
    let f = {
      revisionId: editorRevisionUtilities.stripRevIdString(d),
      type: editorRevisionUtilities.parseJsonSafe(s)?.type || editorRevisionConstants.diffOperationMap.ADD
    };
    let g = n.extra || {};
    g.revisionContext = f;
    n.extra = g;
    return {
      [d]: s
    };
  }
  function N(e) {
    let t = 0;
    e.forEach(e => {
      if (deltaSetCore.isInsertString(e)) {
        t += e.insert.length;
      } else if (deltaSetCore.isRetainOp(e)) {
        t += e.retain;
      }
    });
    return t;
  }
  function L(e, t, n, r) {
    editorRevisionHandlers.handleAddRevision(e, t, r);
    let o = n.revisionContext;
    if (!o) {
      return;
    }
    let i = r.extra || {};
    let l = i.revisionContext || [];
    let a = Array.isArray(l) ? l : [l];
    a.push(...o);
    i.revisionContext = a;
    r.extra = i;
  }
  async function w(e) {
    let t;
    let {
      model: n,
      triggerKey: r,
      data: o,
      extraData: i,
      blockManager: l,
      selectionAPI: u
    } = e;
    let s = {};
    if (i.revisionContext) {
      s.extra = {
        revisionContext: i.revisionContext
      };
    }
    let g = {};
    if (Reflect.get(o, "seq") !== undefined && (r === docBlockTypeConstants.blockTypeConstants.ORDERED || docxBlockValidatorUtils.isHeadingBlock(r))) {
      let e = docxBlockValidatorUtils.isHeadingBlock(r) ? editorFormatRevisionUtils_1.getBlockFormatRev(l, [n]) : null;
      if (e) {
        let {
          revisionId: t,
          type: n
        } = e;
        g.extra = {
          revisionContext: {
            revisionId: t,
            type: n
          }
        };
      }
      let i = deepCloneWrapper_1.deepClone(n.snapshot);
      t = t => {
        editorFormatRevisionUtils_1.syncFormatRevision(l, t, n, e, [["seq", o.seq], ["seq_level", "auto"]], i);
        t.replace(n.recordId, ["seq"], o.seq);
      };
    }
    await l.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H).handleModelsTurnInto({
      models: [n],
      triggerKey: r,
      knownContext: {
        toggle: false,
        turnIntoApplyOptions: g,
        beforeTurnInto: e => {
          Object.entries(o).forEach(t => {
            let [r, o] = t;
            if (r === "text") {
              flowSyncDeltaOperations.editWithLineManager(e, n.record, o);
            } else {
              e.replace(n.recordId, [r], o);
            }
          });
        },
        beforeTurnIntoApplyOptions: s,
        beforeTurnIntoFinished: t
      }
    });
    let p = l.getBlockIdsByRecordId(n.recordId)[0];
    u.setSelection([{
      id: p,
      type: docxBlockSelectionHandler_1.blockTypes.TEXT,
      selection: {
        start: 0,
        end: 0
      }
    }]);
  }
  function x(e, t) {
    let n = {};
    let r = e.getSelection();
    if (r && !t) {
      n = editorTextBlockUtilities.getInheritableAttributes(e, r);
    }
    return n;
  }
  function M(e) {
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(markdownProviderNameExport.markdownEditableKey) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(markdownProviderNameExport.markdownEditableKey, t => {
        t.forEach(t => {
          let n = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
            optional: true
          });
          if (n != null) {
            n.add(docxToolboxConstants_3.toolboxCommands.MARKDOWN, t.setting, {
              priority: t.options.priority
            });
          }
        });
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_markdown_setting_error", {
          error: e.message
        });
      });
    }
  }
  function B(e) {
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(markdownProviderNameExport.markdownEditableKey) !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("markdown_setting_not_loaded_when_trigger_markdown");
      M(e);
    }
  }
  require.d(exports, {
    registerMarkdownSettings: function () {
      return M;
    },
    handleTurnIntoWithSeq: function () {
      return w;
    },
    removeRangeWithRevision: function () {
      return m;
    },
    insertWithRevision: function () {
      return S;
    },
    formatRangeWithRevision: function () {
      return _;
    },
    getSelectionFormatting: function () {
      return x;
    },
    insertTextWithRevision: function () {
      return b;
    },
    getDeltaLength: function () {
      return N;
    },
    ensureMarkdownSettingsLoaded: function () {
      return B;
    },
    applyRevisionContext: function () {
      return L;
    }
  });
}