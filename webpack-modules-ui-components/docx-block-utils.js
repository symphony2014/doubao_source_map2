// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dv' to 'isCodeBlockTextSelection'
// - Renamed export 'JP' to 'isListBlockType'
// - Renamed export 'LZ' to 'shouldSkipInnerCutPaste'
// - Renamed export 'OU' to 'getLastChildBlock'
// - Renamed export 'Vj' to 'isSafariBlobImagePaste'
// - Renamed export 'lJ' to 'removeBlockAndMoveChildren'
// - Renamed export 'sf' to 'sanitizeBlockSnapshot'
// - Renamed export 'vU' to 'applyBlockSnapshot'
// - Renamed export 'vn' to 'getBlockRecordSafe'
// - Renamed export 'zQ' to 'getOriginalSyncedSourceSnapshot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 4213
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docxTaskStates = require("docx-task-states") /*id: 904051*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  function g(e) {
    return [docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED].includes(e);
  }
  function m(e) {
    let {
      pasteTimes: n,
      from: r
    } = pasteStateManager.getPasteState();
    if (r === docBlockTypeConstants.pasteOperationTypes.innerCutPaste && n === 0 && e.recordIds.length === 1) {
      let n = e.recordIds[0];
      if (e.payloadMap[n]?.originalType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
        return true;
      }
    }
  }
  function v(e, n) {
    try {
      return e.getRecord(n);
    } catch (e) {}
  }
  function b(e) {
    switch (e.type) {
      case docBlockTypeConstants.blockTypeConstants.IMAGE:
        return {
          ...e,
          image: {
            ...e.image,
            token: ""
          }
        };
      case docBlockTypeConstants.blockTypeConstants.FILE:
        return {
          ...e,
          file: {
            ...e.file,
            token: docxViewConfigConstants.emptyString
          }
        };
      case docBlockTypeConstants.blockTypeConstants.SHEET:
        return {
          ...e,
          token: ""
        };
      case docBlockTypeConstants.blockTypeConstants.BASE_REFER:
        return {
          ...e
        };
      case docBlockTypeConstants.blockTypeConstants.BITABLE:
        return {
          ...e,
          token: ""
        };
      case docBlockTypeConstants.blockTypeConstants.CHAT_CARD:
        return {
          ...e,
          chat_token: ""
        };
      case docBlockTypeConstants.blockTypeConstants.ISV:
        return {
          ...e,
          app_block_id: ""
        };
      case docBlockTypeConstants.blockTypeConstants.TASK_LIST:
      case docBlockTypeConstants.blockTypeConstants.OKRX:
        return {
          ...e,
          token: ""
        };
      case docBlockTypeConstants.blockTypeConstants.TASK:
        return {
          ...e,
          status: e.task_id ? docxTaskStates.TaskState.Initializing : docxTaskStates.TaskState.New,
          task_id: ""
        };
      default:
        return e;
    }
  }
  function y(e) {
    let {
      blockManager: n,
      snapshot: r,
      applyFrom: o,
      applyTime: i
    } = e;
    let {
      type: u
    } = r;
    if (!n.getBlockModelCreatorByBlockType(u)) {
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "get_block_creator_error",
        info: JSON.stringify({
          type: u
        })
      });
    }
    let s = n.editorAPI.getService(moduleSettingToken.moduleSettingToken);
    let f = blockSettingResolver.getBlockSetting(u, n, "onRecordApply");
    if (!f) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("get_block_onRecordApply_error", {
        type: u
      });
      throw Error("get_block_onRecordApply_error");
    }
    let p = f({
      moduleSetting: s,
      snapshot: r,
      from: o,
      pasteTimes: i
    });
    return b(u === docBlockTypeConstants.blockTypeConstants.TABLE ? p : n.createSnapshot(u, p));
  }
  function _(e) {
    if (e && docBlockTypeConstants.syncedSourceTypes.includes(e.originalType)) {
      return e.originalSnapshot;
    }
  }
  function E(e, n) {
    let r = n.getSelection();
    return r.length === 1 && r[0].type === editorTypeConstants.blockTypes.TEXT && e.getBlockModelByBlockId(r[0].id).type === docBlockTypeConstants.blockTypeConstants.CODE;
  }
  function C(e, n) {
    if (!browserEnvironmentDetectionUtils.browserDetector.isSafari) {
      return false;
    }
    let r = Object.keys(e);
    if (r.length === 1) {
      let o = r[0];
      let i = e[o];
      let l = n[o];
      if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.IMAGE && !l.file && l.src && l.src.startsWith("blob:")) {
        return true;
      }
    }
    return false;
  }
  function k(e) {
    let r = e;
    while (r.children?.length) {
      r = r.children[r.children.length - 1];
    }
    return r;
  }
  function w(e, n, r, i) {
    let l = r.getBlockModelByBlockId(e);
    let a = l.parent;
    if (!a) {
      return;
    }
    if (i === undefined) {
      i = l.position;
    }
    let c = l.children.map(e => e.recordId);
    documentBlockOperations.removeBlockItems(n, [e], r);
    if (c.length) {
      n.replaceChildren(l.recordId, []);
      documentBlockOperations.moveChildren(n, a.recordId, i, c);
    }
  }
  require.d(exports, {
    isCodeBlockTextSelection: function () {
      return E;
    },
    isListBlockType: function () {
      return g;
    },
    shouldSkipInnerCutPaste: function () {
      return m;
    },
    getLastChildBlock: function () {
      return k;
    },
    isSafariBlobImagePaste: function () {
      return C;
    },
    removeBlockAndMoveChildren: function () {
      return w;
    },
    sanitizeBlockSnapshot: function () {
      return b;
    },
    applyBlockSnapshot: function () {
      return y;
    },
    getBlockRecordSafe: function () {
      return v;
    },
    getOriginalSyncedSourceSnapshot: function () {
      return _;
    }
  });
}