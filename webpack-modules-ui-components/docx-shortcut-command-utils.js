// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bO' to 'resolveBlockView'
// - Renamed export 'dx' to 'ensureAsyncCommand'
// - Renamed export 'ez' to 'turnIntoTaskCmd'
// - Renamed export 'nA' to 'ensureSyncCommand'
// - Renamed export 'nV' to 'loadSyncShortcut'
// - Renamed export 'pt' to 'insertBlockChildren'
// - Renamed export 'sq' to 'loadAsyncShortcut'
// - Renamed export 'zM' to 'composeFunctions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 804220
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  function k(e, r) {
    let {
      blockManager: n
    } = r;
    if (calloutBlockUtils.isCalloutContext(e.id, n)) {
      let r = calloutBlockUtils.findCalloutParent(e.id, n);
      return n.getBlockViewByBlockId(r.id);
    }
    return e;
  }
  async function T(e, r, n, o) {
    let i = Array.isArray(r) ? r : [r];
    let {
      blockManager: a
    } = o;
    let c = (i = i.map(e => docBlockViewUtils.resolveBlockView(e)))[0];
    let {
      model: h
    } = c;
    let p = h == null ? undefined : h.parent;
    if (!h || !p) {
      return null;
    }
    let f = p.id;
    let g = p.record.id;
    if (!f) {
      return null;
    }
    let k = 0;
    let T = "";
    let v = a.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    await a.applyTransaction(e, e => {
      if (v.isBlockSelection(v.getSelection())) {
        let a;
        k = h.position;
        if (p.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          var r;
          var o;
          k = p.parent.position + 1;
          a = p.parent;
          g = (o = p.parent) === null || o === undefined ? undefined : (r = o.parent) === null || r === undefined ? undefined : r.record.id;
        }
        i.forEach(e => {
          var n;
          var i;
          var s;
          if (((n = e.model) === null || n === undefined ? undefined : n.parent?.type) === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
            if (((i = e.model) === null || i === undefined ? undefined : i.parent?.parent) !== a) {
              k += 1;
              a = (s = e.model) === null || s === undefined ? undefined : s.parent?.parent;
            }
          } else {
            k += 1;
          }
        });
        T = documentBlockOperations.createInsertChildren(e, g, k, [n])[0];
      } else {
        let {
          isEmpty: r,
          type: o
        } = c.model;
        let i = c.model.getSelection();
        if (!i) {
          return null;
        }
        let s = editorRangeUtilities.isAtStart(i);
        let p = editorRangeUtilities.isAtZoneEnd(i);
        let f = c.model.zoneState.split(i);
        let m = [f[0].toAttributeText(), f[1].toAttributeText()];
        let v = !!h.children.length;
        if ((r || s) && docBlockTypeConstants.quoteBlockTypes.includes(o)) {
          e.replace(c.record.id, ["text"], m[1]);
          c.model.setSelection({
            ...i.toPosition(),
            start: 0,
            len: 0
          });
          k = h.position;
          [T] = documentBlockOperations.createInsertChildren(e, g, k, [n]);
        } else if (p) {
          e.replace(c.record.id, ["text"], m[0]);
          if (v) {
            g = c.record.id;
            k = 0;
          } else {
            k = h.position + 1;
          }
          [T] = documentBlockOperations.createInsertChildren(e, g, k, [n]);
        } else {
          let r = a.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
            text: m[1]
          });
          e.replace(c.record.id, ["text"], m[0]);
          if (v) {
            documentBlockOperations.createInsertChildren(e, c.record.id, 0, [r]);
            g = c.record.id;
            k = 0;
          } else {
            documentBlockOperations.createInsertChildren(e, g, h.position + 1, [r]);
            k = h.position + 1;
          }
          [T] = documentBlockOperations.createInsertChildren(e, g, k, [n]);
        }
      }
    });
    return a.getBlockIdsByRecordId(T)[0];
  }
  function v(e, r) {
    return r.reduce((e, r) => r(e), e);
  }
  function y(e, r) {
    let n = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (n != null) {
      n.add(docxToolboxConstants_3.toolboxCommands.SHORTCUT_COMMAND, r);
    }
  }
  let b = e => {
    let r = deferredPromiseFactory_1.deferredPromise();
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docEditorCommandConstants.shortcutCommandAsync) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(docEditorCommandConstants.shortcutCommandAsync, n => {
        y(e, n);
        r.resolve(n);
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_shortcut_command_async_error", {
          error: e.message
        });
      });
    }
    return r;
  };
  let _ = e => {
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docEditorCommandConstants.shortcutCommandSync) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(docEditorCommandConstants.shortcutCommandSync, r => {
        y(e, r);
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_shortcut_command_sync_error", {
          error: e.message
        });
      });
    }
  };
  let I = e => e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docEditorCommandConstants.shortcutCommandSync) === docxEditorCore.EditorInitStatus.LOADED || (docxAnalyticsEventTracker.trackDocxAnalyticsEvent("command_sync_setting_not_loaded_when_trigger_command"), _(e), false);
  let E = e => e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docEditorCommandConstants.shortcutCommandAsync) === docxEditorCore.EditorInitStatus.LOADED || (docxAnalyticsEventTracker.trackDocxAnalyticsEvent("command_async_setting_not_loaded_when_trigger_command"), b(e), false);
  require.d(exports, {
    resolveBlockView: function () {
      return k;
    },
    ensureAsyncCommand: function () {
      return E;
    },
    turnIntoTaskCmd: function () {
      return docEditorCommandConstants.turnIntoTask;
    },
    ensureSyncCommand: function () {
      return I;
    },
    loadSyncShortcut: function () {
      return _;
    },
    insertBlockChildren: function () {
      return T;
    },
    loadAsyncShortcut: function () {
      return b;
    },
    composeFunctions: function () {
      return v;
    }
  });
}