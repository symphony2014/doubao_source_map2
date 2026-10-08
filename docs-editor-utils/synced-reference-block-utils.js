// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$D' to 'getSyncedBlockContainer'
// - Renamed export 'Ap' to 'getAllBlockStructsIncludingSynced'
// - Renamed export 'BD' to 'getSyncedReferenceBlockId'
// - Renamed export 'Hm' to 'getMainDocxBlockManager'
// - Renamed export 'Li' to 'getSyncedBlockPermission'
// - Renamed export 'OR' to 'wrapBlockActionsWithReferBlockId'
// - Renamed export 'RC' to 'getSyncedBlockDataManager'
// - Renamed export 'UF' to 'getSyncedReferencePageId'
// - Renamed export 'VG' to 'getBlockModelByBlockIdWithSynced'
// - Renamed export 'V_' to 'getBlockViewByBlockIdWithSynced'
// - Renamed export 'Wo' to 'getSyncedBlockBoundary'
// - Renamed export 'XG' to 'getSyncedBlockFileType'
// - Renamed export 'b9' to 'getBlockTokenWithFallback'
// - Renamed export 'cE' to 'selectSyncedReferenceBlock'
// - Renamed export 'cW' to 'isChangeFromCurrentEditor'
// - Renamed export 'cl' to 'getSyncedReferenceBlockModel'
// - Renamed export 'dr' to 'setSyncedBlockDataManager'
// - Renamed export 'fZ' to 'getMainDocxSelectionService'
// - Renamed export 'o9' to 'getMainDocxEditorView'
// - Renamed export 'rj' to 'isSyncedReferenceBlock'
// - Renamed export 'tn' to 'getSyncedReferenceBlockView'
// - Renamed export 'tv' to 'isChangeFromCurrentEditor_1'
// - Renamed export 'zJ' to 'getSyncedReferenceBlockSrcId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 262712
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var syncedRefBlockTokenGetter = require("synced-ref-block-token-getter") /*id: 766560*/;
  var syncedRefBlockManagerToken = require("synced-ref-block-manager-token") /*id: 549332*/;
  var syncedRefPermissionToken_1 = require("synced-ref-permission-token_1") /*id: 575078*/;
  var syncedReferenceBlockConstants = require("synced-reference-block-constants") /*id: 19241*/;
  function v(e) {
    var n;
    return !!(e == null ? undefined : (n = e.config) === null || n === undefined ? undefined : n.get("isSyncedReferenceBlock"));
  }
  function T(e) {
    var n;
    if (e == null) {
      return undefined;
    } else if ((n = e.closest) === null || n === undefined) {
      return undefined;
    } else {
      return n.call(e, syncedReferenceBlockConstants.syncedBlockContainer);
    }
  }
  function C(e) {
    var n;
    let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
      dynamic: true
    });
    if (r == null) {
      return undefined;
    } else if ((n = r.get()) === null || n === undefined) {
      return undefined;
    } else {
      return n.getSyncedReferenceBlockModel(e);
    }
  }
  function k(e) {
    var n;
    let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
      dynamic: true
    });
    if (r == null) {
      return undefined;
    } else if ((n = r.get()) === null || n === undefined) {
      return undefined;
    } else {
      return n.getSyncedReferenceBlockView(e);
    }
  }
  function I(e) {
    if (v(e)) {
      var n;
      if ((n = C(e)) === null || n === undefined) {
        return undefined;
      } else {
        return n.snapshot.src_block_id;
      }
    }
  }
  function R(e) {
    if (v(e)) {
      var n;
      if ((n = C(e)) === null || n === undefined) {
        return undefined;
      } else {
        return n.snapshot.src_page_id;
      }
    }
  }
  function y(e) {
    if (v(e)) {
      return C(e)?.recordId;
    }
  }
  function O(e) {
    if (v(e)) {
      return C(e)?.id;
    }
  }
  function S(e) {
    try {
      if (v(e)) {
        var n;
        let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
          dynamic: true
        });
        if (r == null) {
          return undefined;
        } else if ((n = r.get()) === null || n === undefined) {
          return undefined;
        } else {
          return n.getMainDocxBlockManager();
        }
      }
    } catch (e) {}
  }
  function A(e) {
    if (v(e)) {
      var n;
      let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
        dynamic: true
      });
      return ((r == null ? undefined : (n = r.get()) === null || n === undefined ? undefined : n.getMainDocxEditorAPI()) || e).getService(docxEditorCore.VIEW_TOKEN);
    }
  }
  function L(e) {
    if (v(e)) {
      var n;
      let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
        dynamic: true
      });
      return ((r == null ? undefined : (n = r.get()) === null || n === undefined ? undefined : n.getMainDocxEditorAPI()) || e).getService(selectionServiceProviderName.selectionServiceKey);
    }
  }
  function N(e) {
    var r;
    let o = C(e)?.id;
    if (o) {
      if ((r = S(e)) !== null && r !== undefined) {
        r.editorAPI.getService(selectionServiceProviderName.selectionServiceKey).setSelection([{
          type: editorTypeConstants.blockTypes.BLOCK,
          id: o
        }]);
      }
    }
  }
  function B(e, n) {
    let r = e.getService(syncedRefPermissionToken_1.syncedRefPermToken, {
      dynamic: true
    }).get();
    let o = I(e);
    if (o && r) {
      return r.getPermission(o, n);
    }
  }
  function D(e) {
    let n = e.getMainDocxBlockManager().structService.getAllBlockStructs();
    let r = [...n];
    for (let o of n) {
      if (o.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
        let n = e.getEditorAPIByBlockId(o.id);
        let i = n == null ? undefined : n.getService(blockManagerToken.blockManagerToken);
        if (i) {
          r.push(...i.structService.getAllBlockStructs());
        }
      }
    }
    return r;
  }
  function w(e, n) {
    if (e.from !== collaborativeEditingFlowSyncModule.kq.LOCAL && e.from !== collaborativeEditingFlowSyncModule.kq.TEMPORARY) {
      return false;
    }
    let o = e == null ? undefined : e.extra?.editorId;
    return !o || !n || o === n;
  }
  function M(e, n) {
    var r;
    let o = e.getBlockModelByBlockIdNotCheck(n);
    if (o) {
      return o;
    }
    let i = e.editorAPI.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
      dynamic: true
    });
    if (o = i == null ? undefined : (r = i.get()) === null || r === undefined ? undefined : r.getBlockModelByBlockId(n)) {
      return o;
    } else {
      return null;
    }
  }
  function P(e, n) {
    let r = e.getBlockViewByBlockIdNotCheck(n);
    if (!r) {
      var o;
      let i = e.editorAPI.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
        dynamic: true
      });
      r = i == null ? undefined : (o = i.get()) === null || o === undefined ? undefined : o.getBlockViewByBlockId(n);
    }
    return r;
  }
  function F(e, n = false, r = false) {
    if (!e) {
      return;
    }
    if (v(e)) {
      if (syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
        return I(e);
      } else {
        return R(e);
      }
    }
    if (syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
      return syncUrlBlockUtils.getUrlToken();
    }
    if (n) {
      return;
    }
    if (docHostTypeChecker.isSheetHost(e.config)) {
      return docTokenHelperUtils.resolveDocToken();
    }
    let o = e.config.get("token");
    if (r && docUrlResolver.isDocDomain(o)) {
      return docTokenHelperUtils.resolveDocToken();
    } else {
      return o;
    }
  }
  function x(e) {
    if ((e && v(e) || syncUrlBlockUtils.isSyncingActive()) && syncedBlockFeatureFlags.isSyncedBlockAuthEnabled()) {
      return fileTypeConstants.BasicFileType.SYNCED;
    } else {
      return fileTypeConstants.BasicFileType.DOCX;
    }
  }
  let U = new Map();
  function G(e, n) {
    U.set(e, n);
  }
  function H(e) {
    let n = I(e);
    if (n) {
      let r = e.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
        optional: true
      });
      if (r == null) {
        return undefined;
      } else {
        return r.getDataManager(n);
      }
    }
  }
  function K(e) {
    if (syncedBlockFeatureFlags.isSyncedBlockScrollable() && v(e.editorAPI)) {
      var n;
      let r = (n = syncedRefBlockTokenGetter.getSyncedRefBlockToken(e)) === null || n === undefined ? undefined : n.getMainDocxEditorAPI().config.get("boundary");
      if (r) {
        return r;
      }
    }
  }
  function Z(e, n) {
    let r = n;
    let o = O(e.editorAPI);
    if (o) {
      r = n.map(e => ({
        ...e,
        referBlockId: o
      }));
    }
    return r;
  }
  require.d(exports, {
    getSyncedBlockContainer: function () {
      return T;
    },
    getAllBlockStructsIncludingSynced: function () {
      return D;
    },
    getSyncedReferenceBlockId: function () {
      return O;
    },
    getMainDocxBlockManager: function () {
      return S;
    },
    getSyncedBlockPermission: function () {
      return B;
    },
    wrapBlockActionsWithReferBlockId: function () {
      return Z;
    },
    getSyncedBlockDataManager: function () {
      return H;
    },
    getSyncedReferencePageId: function () {
      return y;
    },
    getBlockModelByBlockIdWithSynced: function () {
      return M;
    },
    getBlockViewByBlockIdWithSynced: function () {
      return P;
    },
    getSyncedBlockBoundary: function () {
      return K;
    },
    getSyncedBlockFileType: function () {
      return x;
    },
    getBlockTokenWithFallback: function () {
      return F;
    },
    selectSyncedReferenceBlock: function () {
      return N;
    },
    isChangeFromCurrentEditor: function () {
      return w;
    },
    getSyncedReferenceBlockModel: function () {
      return C;
    },
    setSyncedBlockDataManager: function () {
      return G;
    },
    getMainDocxSelectionService: function () {
      return L;
    },
    getMainDocxEditorView: function () {
      return A;
    },
    isSyncedReferenceBlock: function () {
      return v;
    },
    getSyncedReferenceBlockView: function () {
      return k;
    },
    isChangeFromCurrentEditor_1: function () {
      return R;
    },
    getSyncedReferenceBlockSrcId: function () {
      return I;
    }
  });
}