// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fz' to 'handleRevisionSelection'
// - Renamed export 'cE' to 'applyRevisionToRecords'
// - Renamed export 'dJ' to 'clearRevisionsFromRecords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 227683
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableCellClipboardUtils = require("docx-table-cell-clipboard-utils") /*id: 597988*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxRevisionFeatureCheckers = require("docx-revision-feature-checkers") /*id: 964037*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  async function w(e, r) {
    let {
      blockManager: a,
      selectionAPI: i,
      viewport: c
    } = e;
    let u = null;
    let p = null;
    let m = r;
    let b = i.isCursor(r);
    if (b) {
      let e = editorRevisionAddHandler.getInheritRevision(a, r);
      if (e) {
        u = editorRevisionUtilities.stripRevIdString(e[0]);
        p = editorRevisionUtilities.parseJsonSafe(e[1])?.type;
        m = [];
      }
    } else {
      let e = r[0];
      let o = i.isBlockSelection(r);
      let f = editorRevisionUtilities.filterBlockModels(a, r, o);
      let v = editorRevisionSelectionUtils.findUserAddRevisionInSelections(a, f);
      if (v) {
        u = editorRevisionUtilities.stripRevIdString(v[0]);
        p = editorRevisionUtilities.parseJsonSafe(v[1])?.type;
        m = [];
      } else if (e.type === editorTypeConstants.blockTypes.TEXT) {
        let {
          id: r,
          type: o,
          selection: l
        } = e;
        let {
          start: n
        } = l;
        i.setSelection([{
          id: r,
          type: o,
          selection: {
            start: n,
            end: n
          }
        }]);
      } else {
        let r = a.getBlockModelByBlockIdNotCheck(e.id);
        let o = (r == null ? undefined : r.parent?.type) === docBlockTypeConstants.blockTypeConstants.VIEW ? r.parent.id : e.id;
        await docxBlockUtils_1.insertNewLine({
          viewport: c,
          blockId: o,
          blockManager: a,
          selectionAPI: i,
          needFocus: true,
          isNextBlock: false,
          skipUndoCompose: true
        });
      }
    }
    return {
      revisionId: u = u || a.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId(),
      revisionType: p = p || (b ? editorRevisionConstants.diffOperationMap.ADD : editorRevisionConstants.diffOperationMap.REPLACE),
      replaceSelection: m
    };
  }
  async function T(e, r) {
    let {
      blockManager: o,
      selectionAPI: l
    } = e;
    if (!o.config.get("revising")) {
      return;
    }
    let n = l.getSelection();
    if (!n.length || docxTableCellClipboardUtils.areAllCellModelsOnly(o, n, r) || docxTableCellClipboardUtils.hasFirstCellInPath(o, n, r)) {
      return;
    }
    let {
      revisionId: a,
      revisionType: i,
      replaceSelection: c
    } = await w(e, n);
    let s = i === editorRevisionConstants.diffOperationMap.REPLACE;
    let d = editorRevisionOperations.createRevisionObject({
      revisionId: a,
      type: i,
      ...(s ? {
        details: {
          subType: editorRevisionConstants.replaceOpTypes.REPLACE_ADD
        }
      } : {})
    });
    let p = s ? editorRevisionOperations.createRevisionObject({
      revisionId: a,
      type: i,
      details: {
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_DELETE
      }
    }) : undefined;
    e.revisionInfo = {
      addRevision: d,
      deleteRevision: p,
      replaceSelectedBlocks: c,
      context: {
        revisionId: a,
        type: i
      }
    };
  }
  function k(e, r, o) {
    let c = editorRevisionUtilities.formatRevisionId(o.revisionId);
    docxClipboardUtils.traverseAndFilterRecords(e, r, e => {
      let {
        snapshot: s
      } = r[e];
      let u = docBlockTypeConstants.agendaCodeTypes.includes(s.type);
      if (!docBlockTypeConstants.selectionViewTypes.includes(s.type)) {
        if (!u) {
          s.revisions = [o];
          return {
            stop: true
          };
        }
        {
          let e = s.text;
          let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool);
          r.get(editorModuleConstantsConfig.defaultVersion).forEach(e => {
            if (!deltaSetCore.isInsertString(e)) {
              return;
            }
            let r = e.attributes || {};
            r[c] = editorRevisionUtilities.stringifyRevOmitId(o);
            e.attributes = r;
          });
          s.text = deltaSetChangesetConverter_1.extractAttributedTexts(r, {
            filterInitialAttributedText: true
          });
          let d = {
            isParagraph: true
          };
          if (docxRevisionFeatureCheckers.isRevisionCardEnabled()) {
            d.isBlock = true;
          }
          s.revisions = [throttledDeepCloneUtil.throttledDeepClone(deepCloneWrapper_1.deepClone(o), {
            details: d
          })];
        }
      }
    });
  }
  function Z(e, r) {
    docxClipboardUtils.traverseAndFilterRecords(e, r, e => {
      let {
        snapshot: o
      } = r[e];
      if (docBlockTypeConstants.agendaCodeTypes.includes(o.type)) {
        let e = o.text;
        let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool);
        r.get(editorModuleConstantsConfig.defaultVersion).forEach(e => {
          if (deltaSetCore.isInsertString(e) && e.attributes) {
            e.attributes = objectPathFilterUtil.filterObjectByPaths(e.attributes, (e, r) => !editorRevisionUtilities.isRevisionIdString(r));
          }
        });
        o.text = deltaSetChangesetConverter_1.extractAttributedTexts(r, {
          filterInitialAttributedText: true
        });
      }
      o.revisions = [];
    });
  }
  require.d(exports, {
    handleRevisionSelection: function () {
      return T;
    },
    applyRevisionToRecords: function () {
      return k;
    },
    clearRevisionsFromRecords: function () {
      return Z;
    }
  });
}