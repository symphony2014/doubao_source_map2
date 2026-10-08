// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EV' to 'createSyncedNode'
// - Renamed export 'F5' to 'hasExcludedDesc'
// - Renamed export 'Gi' to 'getSelectionRecordId'
// - Renamed export 'Kf' to 'isSyncedReference'
// - Renamed export 'M7' to 'setSyncedBlockFlag'
// - Renamed export 'Qz' to 'checkBlockExclusion'
// - Renamed export 'Wi' to 'createTextNode'
// - Renamed export 'mH' to 'isSyncedBlockType'
// - Renamed export 'q0' to 'findSyncedSourceId'
// - Renamed export 'qc' to 'getSyncedRefModel'
// - Renamed export 'vi' to 'getSyncedContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 791402
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  require("doc-host-type-checker") /*id: 713546*/;
  require("doc-block-tree-utils") /*id: 772264*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  require("synced-block-feature-flags") /*id: 711756*/;
  var syncedBlockUrlUtil = require("synced-block-url-util") /*id: 784437*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockTypeConstants_2 = require("docx-block-type-constants_2") /*id: 886147*/;
  let b = (e, n, r) => {
    if (!e) {
      return null;
    }
    let o = null;
    if (!docxBlockTypeConstants_2.supportedBlockTypes.includes(e.type)) {
      return e.type;
    }
    if (!e.text) {
      return null;
    }
    let {
      apool: i
    } = e.text;
    if (!i) {
      return null;
    }
    let {
      numToAttrib: l
    } = i;
    Object.values(l).find(e => {
      var u;
      let s;
      let [d, h] = e;
      if (d === inlineComponentFacade.componentType) {
        s = inlineComponentFacade.safeJsonParse(h)?.type;
        let e = inlineComponentFacade.safeJsonParse(h)?.data;
        if (s === inlineComponentFacade.mentionTypes.URL && docxBlockTypeConstants_2.supportedPlatforms.includes(e == null ? undefined : e.url_type)) {
          return null;
        }
      } else if (d === displayTypeConstants.displayInlineBlock) {
        s = (r == null ? undefined : (u = r[h]) === null || u === undefined ? undefined : u.snapshot?.type) || (syncedReferenceBlockUtils.getMainDocxBlockManager(n.editorAPI) || n).getBlockModelsByRecordId(h)[0]?.type;
      }
      if (docxBlockTypeConstants_2.excludedBlockTypesMap[s]) {
        o = s;
      }
    });
    return o;
  };
  let v = e => b(e.snapshot, e.editorAPI.getService(blockManagerToken.blockManagerToken));
  function T(e) {
    return !!e.struct.findDescendant(e => !!docxBlockTypeConstants_2.excludedBlockTypesMap[e.type] || !!v(docxEditorCore.getBlockModel(e)));
  }
  function C(e) {
    return (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE || (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
  }
  function k(e, n) {
    return !!syncedReferenceBlockUtils.isSyncedReferenceBlock(n.editorAPI) || !!R(e, n);
  }
  let I = (e, n) => {
    let r = e.getBlockModelsByRecordId(n)[0];
    if (r && r.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
      return syncedReferenceBlockUtils.getSyncedReferenceBlockModel(r.blockManager.editorAPI);
    }
  };
  function R(e, n) {
    if (syncedReferenceBlockUtils.isSyncedReferenceBlock(n.editorAPI)) {
      return false;
    }
    let o = e.parent?.id;
    if (!o) {
      return false;
    }
    let i = n.getBlockStructByBlockId(o);
    return !!i && (i.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE ? i.id : R(i, n));
  }
  function y(e, n) {
    let {
      author: r
    } = e;
    let o = new contentStructureDelta.ContentDelta().insert(n, {
      author: r
    });
    let u = new deltaSetCore.DeltaSet({
      [zeroConstantModule_1.versionValue]: o
    });
    let f = editorDataTextUtils.getAttributedTexts(u);
    return documentNodeFactory_2.createDocumentNode({
      text: f
    }, docBlockTypeConstants.blockTypeConstants.TEXT);
  }
  function O(e, n) {
    return y(e, syncedBlockUrlUtil.getSyncedBlockUrl(n));
  }
  function S(e) {
    let n = e.text.initialAttributedTexts.text[0];
    return y(e, n);
  }
  function A(e) {
    window.syncedBlockSeparatePageCanGrant = e;
  }
  function L(e) {
    let o = e.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection()[0]?.id;
    if (!o) {
      return;
    }
    let i = e.getService(blockManagerToken.blockManagerToken);
    let l = i.getBlockModelByBlockIdNotCheck(o);
    if (!l) {
      return;
    }
    let c = R(l, i);
    if (isNumberUtil.isNumber(c)) {
      return i.getBlockModelByBlockIdNotCheck(c)?.recordId;
    }
  }
  function N(e) {
    if (e == null ? undefined : e.hostElement) {
      return e.hostElement.querySelector(".docx-synced-block-container");
    } else {
      return null;
    }
  }
  require.d(exports, {
    createSyncedNode: function () {
      return O;
    },
    hasExcludedDesc: function () {
      return T;
    },
    getSelectionRecordId: function () {
      return L;
    },
    isSyncedReference: function () {
      return k;
    },
    setSyncedBlockFlag: function () {
      return A;
    },
    checkBlockExclusion: function () {
      return b;
    },
    createTextNode: function () {
      return S;
    },
    isSyncedBlockType: function () {
      return C;
    },
    findSyncedSourceId: function () {
      return R;
    },
    getSyncedRefModel: function () {
      return I;
    },
    getSyncedContainer: function () {
      return N;
    }
  });
}