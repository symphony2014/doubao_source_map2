// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ax' to 'calculateColumnWidths'
// - Renamed export 'Bk' to 'logGridMultiPicEvent'
// - Renamed export 'D$' to 'getGridColumnAncestry'
// - Renamed export 'Et' to 'calculateGridGutterWidth'
// - Renamed export 'KF' to 'addGridColumn'
// - Renamed export 'Mq' to 'isGridCompatibleBlock'
// - Renamed export 'S1' to 'createGridFromBlocks'
// - Renamed export 'Ug' to 'getGridColumnStyle'
// - Renamed export 'rc' to 'createGridByDrop'
// - Renamed export 'uI' to 'createGrid'
// - Renamed export 'v7' to 'isInsideGridColumn'
// - Renamed export 'z5' to 'calculateBlockWidthRatios'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 139275
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockStyleUtils = require("docx-block-style-utils") /*id: 669427*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxEditorImageCropUtils = require("docx-editor-image-crop-utils") /*id: 304247*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  let C = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER];
  let k = l("getStruct");
  let I = (e, n, r) => {
    let o = 0;
    let i = false;
    let l = docxLayoutConstants_1.configUnitFrac;
    let c = n.reduce((e, n) => {
      let {
        width: r,
        height: o
      } = docxEditorImageCropUtils.calculateCroppedDimensions(n.record.snapshot.image);
      return e + r / o;
    }, 0);
    let u = (e - n.length * (docxLayoutConstants_1.configSplitNum * 2)) / c;
    let a = n.map(n => {
      let {
        width: c,
        height: a
      } = docxEditorImageCropUtils.calculateCroppedDimensions(n.record.snapshot.image);
      let s = u / a;
      let f = c * s;
      if (f < 730) {
        s = 730 / c;
      }
      let h = (f + docxLayoutConstants_1.configSplitNum * 2) / e;
      if (h < l) {
        h = l;
        i = true;
      }
      if (Number.isNaN(h) || !h) {
        r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "column_block_width_ratio_invalid",
          info: JSON.stringify({
            recordId: docxUtilityHelpers.maskSensitiveData(n.recordId),
            log_point: 1,
            suspicious_var: {
              width_ratio: h,
              min_column_width_ratio: l,
              cal_width: f,
              container_width: e
            }
          })
        });
      }
      o += h;
      return {
        id: n.record.id,
        scale: s,
        widthRatio: h
      };
    });
    if (i) {
      return a.map(e => {
        if (e.widthRatio === l) {
          return e;
        }
        let n = e.widthRatio / o;
        if (Number.isNaN(n) || !n) {
          r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "column_block_width_ratio_invalid",
            info: JSON.stringify({
              recordId: docxUtilityHelpers.maskSensitiveData(e.id),
              log_point: 2,
              suspicious_var: {
                recal_ratio: n,
                result_width_ratio: e.widthRatio,
                total_width_ratio: o
              }
            })
          });
        }
        return {
          ...e,
          widthRatio: n
        };
      });
    } else {
      return a;
    }
  };
  let R = (e, n, r, o) => e === docBlockTypeConstants.blockTypeConstants.IMAGE ? I(n, r, o) : null;
  async function y(e) {
    let {
      blockManager: n,
      gridBlockId: r,
      columnIndex: i,
      getNewColumnChildrenBlockIds: l,
      getNewColumnChildrenRecordIds: c,
      transactionName: u,
      beforeCreate: a,
      afterColumnCreate: _,
      afterTransactionAccepted: g,
      afterTransaction: E,
      transactionOptionsExtra: v,
      sizeMap: C
    } = e;
    let k = docxEditorCore.ZERO_OFFSET;
    let I = -1;
    let y = [];
    let O = C || [];
    await n.applyTransaction(u || "addGridColumn", e => {
      let g = n.getBlockModelByBlockIdNotCheck(r);
      let E = g.children.filter(e => !e.children.length);
      if (E.length) {
        E.forEach(n => {
          documentBlockOperations.insertNewChildren(e, n.recordId, 0, [documentNodeUtils_2.createDocumentNode()]);
        });
        n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docs_blocks_abnormal_behaviour_trace_dev", {
          action: "column_insert_textBlock",
          info: u
        });
      }
      if (k = function (e) {
        let {
          op: n,
          blockManager: r,
          gridBlockId: i,
          columnIndex: l,
          getNewColumnChildrenBlockIds: c
        } = e;
        let u = c && c(n);
        if (u) {
          var d;
          let e = r.getBlockModelByBlockId(u[0]);
          if ((e == null ? undefined : (d = e.parent) === null || d === undefined ? undefined : d.parent?.id) === i && e.parent.children.every(e => {
            let {
              id: n
            } = e;
            return u.includes(n);
          })) {
            let o = e.parent;
            if (o.position !== l) {
              let e = o.position < l ? l - 1 : l;
              documentBlockOperations.removeBlockItems(n, [o.id], r);
              let c = r.getBlockModelByBlockId(i);
              documentBlockOperations.moveChildren(n, c.record.id, e, [o.record.id]);
            }
            return o.id;
          }
        }
        return docxEditorCore.ZERO_OFFSET;
      }({
        op: e,
        blockManager: n,
        gridBlockId: r,
        columnIndex: i,
        getNewColumnChildrenBlockIds: l
      })) {
        return;
      }
      if (a) {
        a(e);
      }
      let v = l && l(e);
      let C = n.getBlockViewByBlockIdNotCheck(r);
      let S = C == null ? undefined : C.currentMultiBlockInLineValue;
      let A = 1 / (g.children.length + 1);
      if (v && !E.length) {
        let e = n.getBlockModelByBlockId(v[0]);
        if (e.type === S) {
          var D;
          let r = g.children.map(e => e.children[0]);
          r.splice(i, 0, e);
          O = R(S, (C == null ? undefined : (D = C.hostElement) === null || D === undefined ? undefined : D.parentElement?.clientWidth) || 730, r, n) || [];
        }
      }
      if (O && O.length > 2) {
        g.children.forEach((n, r) => {
          let o = r >= i ? r + 1 : r;
          e.replace(n.recordId, ["width_ratio"], O[o].widthRatio);
          e.replace(O[o].id, ["image", "scale"], O[o].scale);
        });
      } else {
        let r = 0;
        let o = g.children.filter(e => {
          let n = e.record.snapshot.width_ratio;
          let o = n * (1 - A);
          if (o > docxLayoutConstants_1.configUnitFrac) {
            r += n;
          }
          return o > docxLayoutConstants_1.configUnitFrac;
        });
        let i = A < r ? A / r : 0;
        if (i === 0) {
          n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "invalid_add_grid_column",
            info: JSON.stringify({
              recordId: docxUtilityHelpers.maskSensitiveData(g.recordId),
              oldWidthTotal: g.children.reduce((e, n) => e + n.record.snapshot.width_ratio, 0),
              newColumnWidthRatio: A,
              stack: Error().stack
            })
          });
        }
        let l = 1 - i;
        o.forEach(n => {
          let r = n.record.snapshot.width_ratio;
          e.replace(n.recordId, ["width_ratio"], r * l);
        });
      }
      let w = n.createSnapshot(docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, {
        width_ratio: O && O.length > 2 ? O[i].widthRatio : A
      });
      let [M] = documentBlockOperations.insertNewChildren(e, g.record.id, i, [w]);
      I = i;
      if (v) {
        if (docxBlockStyleUtils.isAgendaInQuote(v, r, n)) {
          let o = n.createSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
          let [i] = documentBlockOperations.insertNewChildren(e, M, 0, [o]);
          y = B({
            op: e,
            blockManager: n,
            targetBlockRecordId: i,
            otherBlockIds: v,
            isRecordFromSamePage: N(n, r, v[0])
          });
          e.replaceChildren(i, y);
          y = [i];
        } else {
          y = B({
            op: e,
            blockManager: n,
            targetBlockRecordId: M,
            otherBlockIds: v,
            isRecordFromSamePage: N(n, r, v[0])
          });
        }
        if (O.length > 2) {
          e.replace(y[0], ["image", "scale"], O[i].scale);
        }
      } else {
        y = c ? c(e, M) : [documentBlockOperations.createSingleBlock(e, M, n.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT))];
      }
      e.replaceChildren(M, y);
      if (_) {
        _(e, M, y);
      }
      let P = n.getBlockIdsByRecordId(M)[0];
      docxEditorEventConstantsAndManager.globalEditorState.newGridColumnId = P;
    }, {
      afterTransactionAccepted: g,
      extra: v
    });
    if (E) {
      E(y);
    }
    if (I >= 0) {
      k = n.getBlockModelByBlockId(r).children[I].id;
      L(n, k);
    }
    return k;
  }
  function O(e) {
    let o;
    let {
      blockManager: i,
      dragBlockIds: l,
      dropTargetBlockId: c,
      toLeft: u,
      fold: a
    } = e;
    let d = i.getBlockModelByBlockId(c);
    let {
      hostElement: h
    } = i.getBlockViewByBlockId(c);
    let _ = d.parent;
    let p = _.type;
    let g = l.map(e => i.getBlockModelByBlockId(e));
    let E = g.every(e => {
      return e.parent?.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN;
    });
    let b = E ? g.reduce((e, n) => {
      let r = n.parent.id;
      e[r] ||= [];
      e[r].push(n.id);
      return e;
    }, {}) : undefined;
    let v = E ? Object.keys(b).length + 1 : 2;
    let C = d.position;
    g.forEach(e => {
      if (e.parent === d.parent && e.position < d.position) {
        C -= 1;
      }
    });
    let k = [];
    let I = d.type.includes("heading") && d.record.snapshot.folded;
    if (I) {
      k = a.findFoldedBlocks(c);
    }
    if (p === docBlockTypeConstants.blockTypeConstants.CELL) {
      let e = h.parentElement?.clientWidth;
      o = e ? e < docxLayoutConstants_1.configLimitMid ? docxLayoutConstants_1.configLimitMid : e : docxLayoutConstants_1.configLimitMid;
    } else {
      o = h.parentElement?.clientWidth || 730;
    }
    let y = u ? [...g, d] : [d, ...g];
    let O = E ? Object.values(b).map(e => y.find(n => n.id === e[0])).filter(e => e !== undefined) : [g[0]];
    if (u) {
      O.push(d);
    } else {
      O.unshift(d);
    }
    let A = R(x(O.map(e => e.type)), o, O, i);
    return S({
      ...(A ? {
        widthRatioMap: A.map(e => e.widthRatio)
      } : {}),
      blockManager: i,
      parentBlockId: _.id,
      index: C,
      columnNum: v,
      transactionName: "createGridByDrop",
      focusColumnIndex: +!u,
      beforeCreate: e => {
        documentBlockOperations.removeBlockItems(e, [c, ...k, ...l], i);
        if (A) {
          A.forEach(n => {
            e.replace(n.id, ["image", "scale"], n.scale);
          });
        }
      },
      getColumnChildrenInfo: (e, n, r) => {
        let o;
        if (u && n === v - 1 || !u && n === 0) {
          let e = [];
          if (I) {
            e = k.map(e => i.getRecordByBlockId(e).id);
          }
          return [d.record.id, ...e].map(e => ({
            id: e,
            isNewCreateChild: false
          }));
        }
        let a = i.getBlockModelByBlockId(c);
        if (docxBlockStyleUtils.isAgendaInQuote(l, c, i)) {
          let n = i.createSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
          let [u] = documentBlockOperations.insertNewChildren(e, r, 0, [n]);
          let a = B({
            op: e,
            blockManager: i,
            targetBlockRecordId: u,
            otherBlockIds: l,
            isRecordFromSamePage: N(i, c, l[0])
          });
          e.replaceChildren(u, a);
          o = [u];
        } else {
          let s = E ? u ? Object.values(b)[n] : Object.values(b)[n - 1] : l;
          o = B({
            op: e,
            blockManager: i,
            targetBlockRecordId: r || a.record.id,
            isRecordFromSamePage: N(i, c, l[0]),
            otherBlockIds: s
          });
        }
        return o.map(e => ({
          isNewCreateChild: true,
          id: e
        }));
      }
    });
  }
  async function S(e) {
    let {
      blockManager: n,
      transactionName: r,
      focusColumnIndex: o,
      afterTransactionApplied: i,
      afterTransactionAccepted: l,
      afterGridCreate: u,
      afterTransaction: a,
      transactionOptionsExtra: s,
      parentBlockId: d,
      index: f
    } = e;
    let h = n.applyTransaction(r || "createGrid", n => {
      A({
        ...throttledPathFilterStringify.throttledPathStr(e, ["blockManager", "index", "parentBlockId", "columnNum", "beforeCreate", "afterColumnCreate", "getColumnChildrenInfo", "widthRatioMap"]),
        op: n
      });
      if (u) {
        u(n);
      }
    }, {
      afterTransactionAccepted: l,
      extra: s
    });
    if (i) {
      i();
    }
    await h;
    if (a) {
      a();
    }
    let _ = n.getBlockModelByBlockId(d).children[f];
    let p = _.children[o || 0];
    if (p) {
      L(n, p.id);
    }
    return _.id;
  }
  function A(e) {
    let {
      blockManager: n,
      parentBlockId: r,
      index: o,
      columnNum: i,
      getColumnChildrenInfo: l,
      beforeCreate: c,
      afterColumnCreate: u,
      op: a,
      widthRatioMap: d,
      curparentRecordId: h
    } = e;
    if (c) {
      c(a);
    }
    let _ = n.createSnapshot(docBlockTypeConstants.blockTypeConstants.GRID, {
      children: []
    });
    let p = h ?? n.getRecordByBlockId(r).id;
    let [g] = documentBlockOperations.insertNewChildren(a, p, o, [_]);
    let E = [];
    for (let e = 0; e < i; e++) {
      let r = n.createSnapshot(docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, {
        width_ratio: d ? d[e] : 1 / i
      });
      let o = documentBlockOperations.createSingleBlock(a, g, r);
      let c = [];
      if (l) {
        l(a, e, o).forEach(e => {
          let {
            isNewCreateChild: n,
            id: r
          } = e;
          c.push(r);
          if (!n) {
            a.replace(r, ["parent_id"], o);
          }
        });
      } else {
        c = [documentBlockOperations.createSingleBlock(a, o, n.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT))];
      }
      a.replaceChildren(o, c);
      if (u) {
        u(a, e, o, c);
      }
      E.push(o);
    }
    a.replaceChildren(g, E);
    return g;
  }
  function L(e, n, r = 0) {
    let o = e.getBlockModelByBlockId(n).children[r];
    if (!o) {
      return;
    }
    let i = e.getBlockViewByBlockId(o.id);
    if (editorTextBlockUtilities.isTextEditable(i)) {
      let {
        length: n
      } = i.model.getText();
      e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).setSelection([{
        id: i.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: n,
          end: n
        }
      }]);
    }
  }
  function N(e, n, r) {
    let o = e.getBlockModelByBlockId(n);
    let i = e.getBlockModelByBlockId(r);
    return o.modelService.rootBlockId === i.modelService.rootBlockId;
  }
  function B(e) {
    let {
      blockManager: n,
      targetBlockRecordId: r,
      otherBlockIds: o,
      op: i,
      isRecordFromSamePage: l
    } = e;
    if (o[0]) {
      return o.map(e => {
        if (!l) {
          return docxBlockUtils_1.createBlockFromSnapshot({
            op: i,
            blockId: e,
            blockManager: n,
            recursive: true,
            parentRecordId: r
          });
        }
        {
          let o = n.getBlockModelByBlockId(e);
          i.replace(o.record.id, ["parent_id"], r);
          return o.record.id;
        }
      });
    } else {
      return [];
    }
  }
  function D(e, n) {
    try {
      let r = n.getBlockModelByBlockIdNotCheck(e);
      while (r && r.parent) {
        if (r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          return true;
        }
        r = r.parent;
      }
    } catch (e) {
      k("model not found");
    }
    return false;
  }
  function w(e, n) {
    try {
      let r = n.getBlockModelByBlockId(e);
      while (r.parent) {
        if (r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          return {
            gridParent: r.parent.parent,
            gridBlock: r.parent,
            gridColumnBlock: r
          };
        }
        r = r.parent;
      }
    } catch (e) {
      k("model not found");
    }
    return null;
  }
  function M(e, n, r) {
    if (D(e, r)) {
      n = n.filter(e => function e(n, r) {
        try {
          let o = r.getBlockModelByBlockId(n);
          let i = o.record.snapshot.type;
          if (C.includes(i)) {
            return false;
          }
          let l = true;
          o.children.forEach(n => {
            l &&= e(n.id, r);
          });
          return l;
        } catch (e) {
          k("model not found");
          return false;
        }
      }(e, r));
    }
    return n;
  }
  function P(e) {
    if (e && e.type !== docBlockTypeConstants.blockTypeConstants.GRID) {
      return;
    }
    let o = (e == null ? undefined : e.children.length) || 0;
    if ((e == null ? undefined : e.parent?.id) === (e == null ? undefined : e.root?.id)) {
      return (o - 1) * docxLayoutConstants_1.configSpacing - docxLayoutConstants_1.configSplitNum * 2;
    } else {
      return (o - 1) * docxLayoutConstants_1.configSpacing;
    }
  }
  function F(e, n, r) {
    let o = {};
    let i = e.getBlockStructByBlockId(n);
    let l = i && i.record.snapshot.width_ratio;
    if (!i || !isNumberUtil.isNumber(l)) {
      return o;
    }
    let c = P(i.parent);
    if (r) {
      o.flexGrow = l * 100;
      o.width = "unset";
    } else {
      o.flexGrow = 0;
      o.flexShrink = 0;
      o.width = `calc((100% - ${c}px) * ${l})`;
    }
    return o;
  }
  let x = e => e.every(n => n === e[0]) ? e[0] : null;
  let U = function (e, n = false) {
    e.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
      click: "grid_same_line_multi_pic",
      is_pic_equal_height: n ? "true" : "false",
      target: "none"
    });
  };
  function G(e, n) {
    return e === docBlockTypeConstants.blockTypeConstants.PAGE || !!n && !docxBlockUtils_1.hasParentBlockType(docBlockTypeConstants.blockTypeConstants.GRID, n) && [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.AI, ...docBlockTypeConstants.listBlockTypes].includes(e);
  }
  require.d(exports, {
    calculateColumnWidths: function () {
      return M;
    },
    logGridMultiPicEvent: function () {
      return U;
    },
    getGridColumnAncestry: function () {
      return w;
    },
    calculateGridGutterWidth: function () {
      return P;
    },
    addGridColumn: function () {
      return y;
    },
    isGridCompatibleBlock: function () {
      return G;
    },
    createGridFromBlocks: function () {
      return A;
    },
    getGridColumnStyle: function () {
      return F;
    },
    createGridByDrop: function () {
      return O;
    },
    createGrid: function () {
      return S;
    },
    isInsideGridColumn: function () {
      return D;
    },
    calculateBlockWidthRatios: function () {
      return R;
    }
  });
}