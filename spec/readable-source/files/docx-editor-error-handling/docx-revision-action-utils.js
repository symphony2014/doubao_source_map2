// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KW' to 'getApplyRejectActionType'
// - Renamed export 'Ro' to 'hasRevisionActions'
// - Renamed export 'b$' to 'validateListDelete'
// - Renamed export 'd5' to 'hasAddOperations'
// - Renamed export 'mW' to 'validateListInsert'
// - Renamed export 'mn' to 'filterRevisionsByIds'
// - Renamed export 'nR' to 'validateRevisionPath'
// - Renamed export 'o' to 'canApplyRejectRevision'
// - Renamed export 'ql' to 'hasBlockAddRevisions'
// - Renamed export 'uz' to 'getDeleteActionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 741606
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  let v = e => e.some(e => {
    return (e == null ? undefined : e.type) === "delete" || (e == null ? undefined : e.type) === "replace" && e.details?.subType === "replace_delete";
  });
  let b = e => e.some(e => {
    return (e == null ? undefined : e.type) === "add" || (e == null ? undefined : e.type) === "replace" && e.details?.subType === "replace_add";
  });
  let y = e => {
    let {
      action: i
    } = e;
    return pathArrayValidation.validatePathArray(i, "listInsert");
  };
  let S = e => {
    let {
      action: i
    } = e;
    return pathArrayValidation.validatePathArray(i, "listDelete");
  };
  let k = e => {
    let {
      action: i,
      revisionAction: r
    } = e;
    return i === "apply" && y(r) || i === "reject" && S(r);
  };
  let E = e => {
    let {
      action: i,
      revisionAction: r
    } = e;
    return i === "apply" && S(r) || i === "reject" && y(r);
  };
  let C = e => {
    let {
      snapshot: i,
      revisionAction: r
    } = e;
    let {
      selector: c,
      action: d
    } = r ?? {};
    if (isNullishCheck.isNil(c)) {
      return false;
    }
    if (isEmptyUtil.isEmpty(c)) {
      return true;
    }
    let u = objectPathGetDefault.getObjectPathDefault(i, c);
    return !isNullishCheck.isNil(u) && !isEmptyUtil.isEmpty(u) && (y(r) || S(r) ? collectionIncludesUtil.includes(u, d.listInsert || d.listDelete) : pathArrayValidation.validatePathArray(i, c));
  };
  let _ = e => {
    let {
      revisions: i
    } = e;
    return i.some(e => {
      let i = objectPathGetDefault.getObjectPathDefault(e, "details.actions");
      return !isNullishCheck.isNil(i) && !isEmptyUtil.isEmpty(i);
    });
  };
  let R = e => {
    let {
      action: i,
      revisions: r
    } = e;
    if (i === "apply") {
      if (v(r)) {
        return "delete_content";
      }
      if (b(r)) {
        return "delete_attribute";
      }
    }
    if (i === "reject") {
      if (b(r)) {
        return "delete_content";
      }
      if (v(r)) {
        return "delete_attribute";
      }
    }
  };
  let I = e => {
    let {
      revisions: i,
      revisionIds: r
    } = e;
    if (Array.isArray(i) && (i == null ? undefined : i.length) && (r == null ? undefined : r.length)) {
      if (i == null) {
        return undefined;
      } else {
        return i.filter(e => collectionIncludesUtil.includes(r, objectPathGetDefault.getObjectPathDefault(e, "revisionId")));
      }
    } else {
      return [];
    }
  };
  let M = e => {
    let {
      blockManager: i,
      selectedBlocks: r
    } = e;
    if (!r.length) {
      return false;
    }
    for (let e of r) {
      let r = i.getRecordByBlockId(e.id);
      if (r == null ? undefined : r.snapshot) {
        if (Array.isArray(r.snapshot.revisions) && b(r.snapshot.revisions)) {
          return true;
        }
        if (editorTextBlockUtilities.hasTextWithApoolSimple(r.snapshot)) {
          let n = r.snapshot.text;
          if (e.type === docxBlockSelectionHandler_1.blockTypes.TEXT && e.selection) {
            let r = i.getBlockModelByBlockIdNotCheck(e.id);
            if (r && editorTextBlockUtilities.isTextBlock(r)) {
              let {
                start: o,
                end: l
              } = e.selection;
              let s = editorRangeUtilities.createRangeWithZone(r.zoneState, [o, l]);
              let a = i.editorAPI.getService(docxEditorKitProviders.editorKitProviderName);
              let d = new activeEditorRange.ActiveEditorRange({
                start: s.start,
                end: s.end,
                editor: a,
                state: r.zoneState
              });
              n = r.zoneState.slice(d.start, d.end).toAttributeText();
            }
          }
          let o = false;
          contentDeltaUtilityFunctions.R(n, (e, i) => {
            if (!editorRevisionUtilities.isRevisionIdString(e)) {
              return;
            }
            let r = docxUtilityHelpers.parseJsonSafe(i, undefined);
            if (r && b([r])) {
              o = true;
              return false;
            }
          });
          if (o) {
            return true;
          }
        }
      }
    }
    return false;
  };
  require.d(exports, {
    getApplyRejectActionType: function () {
      return E;
    },
    hasRevisionActions: function () {
      return _;
    },
    validateListDelete: function () {
      return S;
    },
    hasAddOperations: function () {
      return b;
    },
    validateListInsert: function () {
      return y;
    },
    filterRevisionsByIds: function () {
      return I;
    },
    validateRevisionPath: function () {
      return C;
    },
    canApplyRejectRevision: function () {
      return k;
    },
    hasBlockAddRevisions: function () {
      return M;
    },
    getDeleteActionType: function () {
      return R;
    }
  });
}