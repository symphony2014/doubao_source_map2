// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arrayFirstElement'
// - Resolved require(255519) to 'array-first-element'
// - Renamed variable 'l' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'o' to 'docBlockTreeUtils'
// - Resolved require(772264) to 'doc-block-tree-utils'
// - Renamed variable 'i' to 'treeNodeMoveUtil'
// - Resolved require(497145) to 'tree-node-move-util'
// - Renamed variable 'd' to 'docxCodeBlockFeatureFlags'
// - Resolved require(888140) to 'docx-code-block-feature-flags'
// - Renamed variable 'u' to 'defaultTextDocumentTemplate'
// - Resolved require(53079) to 'default-text-document-template'
// - Renamed variable 'c' to 'editorSelectionUtilities'
// - Resolved require(913651) to 'editor-selection-utilities'
// - Renamed variable 'a' to 'editorTypeConstants'
// - Resolved require(719873) to 'editor-type-constants'
// - Renamed variable 'f' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 's' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'p' to 'codeBlockConstants'
// - Resolved require(48094) to 'code-block-constants'
// - Renamed variable 'h' to 'docxCodeBlockUtils'
// - Resolved require(352632) to 'docx-code-block-utils'
// - Renamed variable 'y' to 'editorContentFoldOperations'
// - Resolved require(35914) to 'editor-content-fold-operations'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'vs' to 'hasParentOfType' (module 772264)
// - Updated imported property 'Qg' to 'isTextBlock' (module 469443)
// - Updated imported property 'rt' to 'hasLanguageProp' (module 352632)
// - Updated imported property 'pZ' to 'processCodeDelta' (module 352632)
// - Updated imported property 'x' to 'getCodeBlockLang' (module 352632)
// - Updated imported property 'K$' to 'isCodeBlockWrapped' (module 352632)
// - Updated imported property 'N$' to 'isCodeBlockFolded' (module 352632)
// - Updated imported property '_N' to 'isFoldedTransition' (module 352632)
// - Updated imported property 'N8' to 'hasFoldedContent' (module 35914)
// - Updated imported property 'el' to 'unfoldContent' (module 35914)
// - Updated imported property 'vg' to 'hasTextSelection' (module 913651)
// - Updated imported property 'R' to 'blockTypes' (module 719873)
// - Updated imported property 'Z' to 'getFirstElement' (module 255519)
// - Updated imported property 'UQ' to 'rangeMarkSymbol' (module 48094)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// - Updated imported property 'm' to 'moveChildrenUtil' (module 497145)
// - Updated imported property 'pC' to 'isCodeBlockBasic' (module 888140)
// - Updated imported property 'z' to 'createDefaultTextDoc' (module 53079)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 317025
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var treeNodeMoveUtil = require("tree-node-move-util") /*id: 497145*/;
  var docxCodeBlockFeatureFlags = require("docx-code-block-feature-flags") /*id: 888140*/;
  var defaultTextDocumentTemplate = require("default-text-document-template") /*id: 53079*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  var editorContentFoldOperations = require("editor-content-fold-operations") /*id: 35914*/;
  let E = {
    type: docBlockTypeConstants.blockTypeConstants.CODE,
    h: e => e.filter(e => !docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.CALLOUT]))
  };
  let O = {
    type: docBlockTypeConstants.blockTypeConstants.CODE,
    h: e => e.type === docBlockTypeConstants.blockTypeConstants.CODE || docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.CALLOUT])
  };
  let b = {
    type: docBlockTypeConstants.blockTypeConstants.CODE,
    h(e) {
      return !docBlockTreeUtils.hasParentOfType(e[0] ?? null, [docBlockTypeConstants.blockTypeConstants.PROGRESS]) && !e.every(e => docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.CALLOUT]));
    }
  };
  let g = [function (e) {
    let {
      blockManager: t,
      selectionAPI: n
    } = e;
    return {
      sideEffectFromSource: {
        cond: (e, t) => t.type === docBlockTypeConstants.blockTypeConstants.CODE || e.type === docBlockTypeConstants.blockTypeConstants.CODE,
        h: (e, o, i, d) => {
          if (editorTextBlockUtilities.isTextBlock(e)) {
            if (e.type === docBlockTypeConstants.blockTypeConstants.CODE && o.type !== docBlockTypeConstants.blockTypeConstants.CODE && (docxCodeBlockUtils.hasLanguageProp(e) && i.remove(e.recordId, ["language"]), editorContentFoldOperations.hasFoldedContent(e.record.snapshot.text) && editorContentFoldOperations.unfoldContent(e.record, i), editorSelectionUtilities.hasTextSelection(d))) {
              let t = e.zoneState.totalWidth() - 1;
              let n = d.find(t => t.id === e.id);
              if (!n) {
                return;
              }
              n.type = editorTypeConstants.blockTypes.TEXT;
              n.selection = {
                start: 0,
                end: t
              };
              return d;
            }
            if (o.type === docBlockTypeConstants.blockTypeConstants.CODE) {
              let [o, u] = function (e, t, n, o) {
                if (function (e, t) {
                  if (t.isSingleTextSelection(e)) {
                    let {
                      start: t,
                      end: n
                    } = arrayFirstElement.getFirstElement(e).selection;
                    return t !== 0 || t !== n;
                  }
                  return false;
                }(n, o) && n[0].id === e.id) {
                  let o = arrayFirstElement.getFirstElement(n);
                  let {
                    start: i,
                    end: d
                  } = o.selection;
                  let u = i === d;
                  return [() => {
                    let n;
                    n = u ? {
                      start: e.zoneState.offsetToPoint(d - 1),
                      end: e.zoneState.offsetToPoint(d)
                    } : e.getSelection();
                    e.setAttributes(n, {
                      [codeBlockConstants.rangeMarkSymbol]: "true"
                    }, {
                      extra: {
                        shouldCollab: false,
                        op: t
                      }
                    });
                  }, () => {
                    let n = e.zoneState.getEntities([[codeBlockConstants.rangeMarkSymbol]]);
                    if (n.length === 0) {
                      return;
                    }
                    let i = {
                      start: arrayFirstElement.getFirstElement(n).start,
                      end: lastElementHelper.getLastElement(n).end
                    };
                    e.setAttributes(i, {
                      [codeBlockConstants.rangeMarkSymbol]: ""
                    }, {
                      extra: {
                        shouldCollab: false,
                        op: t
                      }
                    });
                    if (u) {
                      return [{
                        ...o,
                        selection: {
                          start: e.zoneState.pointToOffset(i.end),
                          end: e.zoneState.pointToOffset(i.end)
                        }
                      }];
                    } else {
                      return [{
                        ...o,
                        selection: {
                          start: e.zoneState.pointToOffset(i.start),
                          end: e.zoneState.pointToOffset(i.end)
                        }
                      }];
                    }
                  }];
                }
                return [undefined, undefined];
              }(e, i, d, n);
              if (o != null) {
                o();
              }
              let c = docxCodeBlockUtils.processCodeDelta(e.zoneState, t.editorAPI.modelService);
              e.apply(c, {
                extra: {
                  op: i
                }
              });
              if (u == null) {
                return undefined;
              } else {
                return u();
              }
            }
          }
        }
      },
      sideEffectFromTarget: {
        cond: e => e.type === docBlockTypeConstants.blockTypeConstants.CODE,
        h: (e, r, l, o) => {
          let {
            recordId: f,
            record: s,
            snapshot: p
          } = e;
          let y = s.get(["children"]);
          let E = y.length > 0;
          let O = y.map(e => t.getBlockIdsByRecordId(e)[0]);
          if (E) {
            let e = s.get(["parent_id"]);
            let n = t.getRecord(e).get(["children"]).indexOf(f);
            treeNodeMoveUtil.moveChildrenUtil(l, y, f, e, n + 1);
          }
          if (!docxCodeBlockUtils.hasLanguageProp(e)) {
            l.insert(e.recordId, ["language"], docxCodeBlockUtils.getCodeBlockLang());
          }
          if (docxCodeBlockFeatureFlags.isCodeBlockBasic()) {
            l.insert(e.recordId, ["caption"], defaultTextDocumentTemplate.createDefaultTextDoc());
          }
          l.insert(e.recordId, ["wrap"], docxCodeBlockUtils.isCodeBlockWrapped());
          if (p.folded) {
            l.replace(f, ["folded"], false);
          }
          if (editorSelectionUtilities.hasTextSelection(o)) {
            let t = o.find(t => t.id === e.id);
            if ((t == null ? undefined : t.type) === editorTypeConstants.blockTypes.TEXT) {
              t.type = editorTypeConstants.blockTypes.BLOCK;
              delete t.selection;
            }
            return o;
          }
          if (n.isBlockSelection(o) && E) {
            let t = o.findIndex(t => t.id === e.id);
            if (t > -1) {
              o.splice(t + 1, 0, ...O.map(e => ({
                id: e,
                type: editorTypeConstants.blockTypes.BLOCK
              })));
              return o;
            }
          }
        }
      },
      filterOperateTargetsRule: E,
      matchRule: O,
      canDoTurnIntoRule: b
    };
  }, function () {
    return {
      sideEffectFromSource: {
        cond: (e, t) => docxCodeBlockUtils.isCodeBlockFolded(e) && e.children.length === 0 && t.type !== docBlockTypeConstants.blockTypeConstants.CODE || docxCodeBlockUtils.isFoldedTransition(e, t),
        h(e, t, n) {
          n.replace(e.recordId, ["folded"], false);
        }
      }
    };
  }];
  exports.default = g;
  require.r(exports);
}