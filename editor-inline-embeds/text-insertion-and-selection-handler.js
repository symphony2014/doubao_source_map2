// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j2' to 'handleTextInsertion'
// - Renamed export 'nA' to 'insertTextWithSelection'
// - Renamed export 'nG' to 'applySelectionAndInsertText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 829563
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var renderCacheManager = require("render-cache-manager") /*id: 318882*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var multipleSelectionConstants = require("multiple-selection-constants") /*id: 512848*/;
  var docBlockSelectionUtils = require("doc-block-selection-utils") /*id: 906257*/;
  function T(e, i, n, o = {
    replaceDeleteRevisionInfo: null,
    shouldApplyRevision: false
  }) {
    let l = n.getService(compatBrowserSelectionService_1.selectionServiceKey);
    let a = documentViewUtils.mapToParentViews(i, n);
    let h = l.getSelection();
    if (h.length === 0) {
      return null;
    }
    let f = h[0];
    let k = h[h.length - 1];
    let E = a.map(e => e.model);
    let T = a.slice(+(f.type === docxBlockSelectionHandler_1.blockTypes.TEXT));
    let I = T.filter(e => !T.find(i => i.id === e.parentId)).map(e => e.model);
    let C = [];
    for (let e = T.length - 1; e >= 0; e--) {
      let i = T[e].model;
      if (i.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
        continue;
      }
      let n = h.find(e => e.id === i.id);
      if (!n || n.type !== docxBlockSelectionHandler_1.blockTypes.BLOCK) {
        i.children.forEach(e => {
          if (!T.find(i => i.id === e.id)) {
            C.push(e);
          }
        });
      }
    }
    let P = C.map(e => e.recordId);
    if (f.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
      let i;
      let l = f.id;
      let a = E[0];
      let d = docBlockSelectionUtils.validateSelectionStart(a, f.selection.start, n);
      if ((o == null ? undefined : o.replaceDeleteRevisionInfo) && T[0]) {
        let {
          replaceDeleteRevisionInfo: i
        } = o;
        let {
          blockManager: n
        } = T[0];
        editorRevisionDeleteOperations.createDeleteRevisionWithSelection(n, e, i, {
          useTextApply: true
        });
      } else {
        documentBlockOperations.removeBlockItems(e, I);
        documentBlockOperations.removeBlockItems(e, C);
        let {
          parentRecordId: i,
          position: n
        } = docBlockSelectionUtils.getQuoteBlockPosition(E[0]);
        documentBlockOperations.moveChildren(e, i, n, P);
      }
      if (!o.shouldApplyRevision) {
        if (k.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
          let o = k.selection.end;
          let l = E[E.length - 1];
          let s = l.zoneState;
          let u = s.split([o, o]);
          i = new contentStructureDelta.ContentDelta({
            zoneId: a.zoneId
          }).retain(d).delete(a.zoneState.totalWidth() - d - 1);
          u[1].getContent().forEach(e => {
            if (e.insert !== "\n" || e.attributes?.fixEnter !== "true") {
              i = i.insert(e.insert, e.attributes);
            }
          });
          try {
            let i = u[1].toAttributeText();
            editorTextBlockUtilities.getInlineDisplayMarks(i).forEach(i => e.replace(i, ["parent_id"], a.recordId));
          } catch (e) {
            if (e && e.message === "The deleted content does not exist") {
              let {
                ops: e
              } = u[1].getContent();
              n.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                action: "deleted_content_error",
                info: JSON.stringify({
                  lastSelectionEnd: o,
                  lastBlockTotalWidth: s.totalWidth(),
                  opsString: docBlockSelectionUtils.formatDiffOperations(e),
                  recordId: docxUtilityHelpers.maskSensitiveData(l.recordId),
                  totalWidth: u[1].totalWidth(),
                  selLastBlockID: k.id,
                  lastBlockModelID: l.id
                })
              });
            }
            throw e;
          }
        } else {
          i = new contentStructureDelta.ContentDelta({
            zoneId: a.zoneId
          }).retain(d).delete(a.zoneState.totalWidth() - d - 1);
        }
        a.apply(i, {
          extra: {
            op: e
          }
        });
      }
      return {
        id: l,
        position: d
      };
    }
    if (f.type === docxBlockSelectionHandler_1.blockTypes.BLOCK && k.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
      let i = E[0];
      let n = i.position;
      let o = i.parent.recordId;
      let l = k.id;
      documentBlockOperations.removeBlockItems(e, I);
      let a = E[E.length - 1];
      documentBlockOperations.moveChildren(e, o, n, [a.recordId]);
      documentBlockOperations.removeBlockItems(e, C);
      documentBlockOperations.moveChildren(e, a.recordId, 0, P);
      let c = k.selection.end;
      let d = new contentStructureDelta.ContentDelta({
        zoneId: a.zoneId
      }).delete(c);
      a.apply(d, {
        extra: {
          op: e
        }
      });
      return {
        id: l,
        position: 0
      };
    }
    {
      let i = E[0];
      let n = i.position;
      let r = i.parent.recordId;
      documentBlockOperations.removeBlockItems(e, I);
      let o = documentNodeUtils_2.createDocumentNode({});
      let l = documentBlockOperations.insertNewChildren(e, r, n, [o])[0];
      documentBlockOperations.removeBlockItems(e, C);
      documentBlockOperations.moveChildren(e, l, 0, P);
      return {
        recordId: l,
        position: 0
      };
    }
  }
  function I(e, i, n) {
    let r = i.getService(compatBrowserSelectionService_1.selectionServiceKey);
    let {
      viewService: o
    } = i;
    return T(e, r.getSelection().filter(e => o.hasBlockViewByBlockId(e.id)).map(e => o.getBlockViewByBlockId(e.id)), i, n);
  }
  async function C(e, i) {
    let n;
    let {
      blockManager: s,
      selectionAPI: c,
      editorAPI: d,
      source: u,
      revisionContext: v
    } = e;
    let {
      beforeReplace: m,
      afterReplaced: y
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let S = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let {
      modelService: T
    } = d;
    let C = 0;
    let P = c.getSelection().reduce((e, i) => {
      let {
        id: n
      } = i;
      let r = d.modelService.getBlockModelByBlockId(n);
      if (r) {
        e.push({
          blockId: n,
          recordId: r.recordId
        });
      }
      return e;
    }, []);
    let A = u === multipleSelectionConstants.selectionEventTypes.MULTIPLE_SELECTION_COMPOSITIONSTART;
    let O = s.config.get("revising");
    await d.dataService.applyTransaction("insertText", e => {
      let u = c.getSelection();
      let g = {};
      if (u.length > 1 && u[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
        let e = {};
        let i = {};
        let {
          id: n,
          selection: r
        } = u[0];
        let o = T.getBlockModelByBlockId(n);
        if (o != null) {
          o.zoneState.setDangerousInput(true);
        }
        if (o && r) {
          if (c.forward) {
            let {
              start: e
            } = r;
            let {
              zoneId: n
            } = o;
            i = o.getInlineStyleOverride({
              zoneId: n,
              start: e
            });
          } else {
            let e = u[u.length - 1];
            if (e.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
              let {
                selection: n,
                id: r
              } = e;
              let o = T.getBlockModelByBlockId(r);
              i = o.getInlineStyleOverride({
                zoneId: o.zoneId,
                start: n.end
              });
            }
          }
          let n = editorRangeUtilities.createRangeWithZone(o.zoneState, [r.start, r.start + 1]);
          e = editorTextBlockUtilities.getInheritableAttributes(o, n, [...editorModuleConstantsConfig.componentAttributes]);
        }
        let l = v == null ? undefined : v.revisionTransactionContext?.revisionId;
        g = Object.assign(e, i, O && l ? editorRevisionOperations.createReplaceAddOp({
          revisionId: l
        }) : {});
      }
      let y = I(e, d, {
        replaceDeleteRevisionInfo: (v == null ? undefined : v.replaceDeleteRevisionInfo) || null,
        shouldApplyRevision: O && !!(v == null ? undefined : v.replaceDeleteRevisionInfo)
      });
      if (y) {
        C = y.position;
        if (m != null) {
          m();
        }
        if (!i) {
          let {
            id: e,
            recordId: i
          } = y;
          if (e) {
            n = T.getBlockModelByBlockId(e)?.recordId;
          } else if (i) {
            n = i;
          }
          return;
        }
        n = function (e, i, n, s, a, c = {}) {
          let d = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
          let {
            id: u,
            position: h = 0,
            recordId: p
          } = a;
          if (u) {
            let o = e.getBlockModelByBlockId(u);
            let a = o.record.snapshot.text;
            let p = deltaSetChangesetConverter_1.attributedTextToDeltaSet(a.initialAttributedTexts, a.apool).get("0");
            let {
              zoneState: f
            } = o;
            let v = new contentStructureDelta.ContentDelta({
              zoneId: String(u)
            }).delete(f.totalWidth() - 1).concat(p).compose(new contentStructureDelta.ContentDelta({
              zoneId: String(u)
            }).retain(h).insert(n, s));
            if (d) {
              o.apply(v, {
                extra: {
                  op: i
                },
                ...c
              });
              i.replace(o.record.id, ["text"], o.zoneState.toAttributeText());
            }
            return o.recordId;
          }
          if (p) {
            let e = new contentStructureDelta.ContentDelta().insert(n);
            let s = deltaSetChangesetConverter_1.extractAttributedTexts(new deltaSetCore.DeltaSet().add("0", e));
            if (d) {
              i.replace(p, ["text"], s);
            }
            return p;
          }
        }(T, e, i, g, y, S, !O || !A);
      }
    }, {
      extra: {
        revisionContext: v == null ? undefined : v.revisionTransactionContext
      }
    });
    if (!n) {
      return;
    }
    let B = T.getBlockModelsByRecordId(n);
    let x = C;
    if (!O || !A) {
      x += (i == null ? undefined : i.length) || 0;
    }
    let _ = B[0];
    if (editorTextBlockUtilities.isTextBlock(_) && !document.body.contains(_.zoneState.getContainer())) {
      d.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "editor_container_not_in_dom",
        info: JSON.stringify({
          type: _.type,
          source: u
        })
      });
      if (u === multipleSelectionConstants.selectionEventTypes.MULTIPLE_SELECTION_COMPOSITIONEND) {
        await d.viewService.requestBlockViewRender(_.id, {
          remount: true
        });
      }
    }
    c.setSelection([{
      type: docxBlockSelectionHandler_1.blockTypes.TEXT,
      id: B[0].id,
      selection: {
        start: x,
        end: x
      }
    }]);
    P.forEach(e => {
      let {
        blockId: i
      } = e;
      renderCacheManager.renderCacheManager.deleteCacheWithEffect(i);
    });
    if (y != null) {
      y();
    }
  }
  require.d(exports, {
    handleTextInsertion: function () {
      return I;
    },
    insertTextWithSelection: function () {
      return C;
    },
    applySelectionAndInsertText: function () {
      return T;
    }
  });
}