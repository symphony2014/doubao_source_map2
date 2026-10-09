// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rl' to 'handleTurnIntoOps'
// - Renamed export 'cj' to 'handleInsertRemoveOps'
// - Renamed export 'fn' to 'handleRemoveOps'
// - Renamed export 'iq' to 'handleInsertOps'
// - Renamed export 'lK' to 'handleMoveOps'
// - Renamed export 'mj' to 'clearUnorderedBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 34474
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var docListOpsHandler = require("doc-list-ops-handler") /*id: 691963*/;
  var editorActionConstants = require("editor-action-constants") /*id: 216889*/;
  function f(e, i, r) {
    let {
      isIgnoreFirstSeq: l,
      isUseCacheOrder: s,
      isForceNewList: a,
      isOnlyOneList: h,
      isNextSiblingOrderedHeaderNotToBeMerge: f,
      isUseDownwardOrder: g
    } = r;
    let p = i.map(i => e.getBlockModelByBlockId(i));
    if (!p.length) {
      return new Map();
    }
    let m = p[0];
    let v = p[p.length - 1];
    let b = false;
    let y = false;
    let S = Array(p.length);
    let k = Array(p.length);
    p.forEach((i, r) => {
      let n = "auto";
      let o = i.record.get(["seq"]);
      let a = !!o && o !== "auto";
      if (a) {
        b = true;
      }
      if (r === 0) {
        if (o === "1") {
          y = true;
        }
        let r = e.orderMap.get(i.record.id);
        n = a ? l ? 1 : Number(o) : r && s ? r : 1;
      } else if (a && !h) {
        n = Number(o);
      }
      S[r] = n;
      k[r] = n !== "auto" ? n : k[r - 1] + 1;
    });
    let E = new Map();
    let C = orderedBlockUtils.getBlockOrderInfo(e, m.previousSibling?.id);
    let _ = orderedBlockUtils.getBlockOrderInfo(e, v.nextSibling?.id);
    let R = f && (_ == null ? undefined : _.isHeader) ? null : _;
    let I = orderedBlockUtils.findNextOrderedBlock(e, m.id, orderedBlockConstants.OrderDirection.UP);
    let M = orderedBlockUtils.findNextOrderedBlock(e, v.id, orderedBlockConstants.OrderDirection.DOWN);
    let T = orderedBlockUtils.validateBlockOrder(e, m.id, orderedBlockConstants.OrderDirection.UP, k[0]);
    let w = orderedBlockUtils.validateBlockOrder(e, v.id, orderedBlockConstants.OrderDirection.DOWN, k[k.length - 1]);
    let B = C || T;
    let P = R || w;
    let L = false;
    let N = false;
    let A = false;
    if (a && y) {
      if (P) {
        E.set(P.blockId, "auto");
        A = true;
      }
    } else {
      let e = false;
      if (I && M && I.order === M.order - 1 && !M.isHeader) {
        S.fill("auto");
        e = true;
        L = true;
      } else {
        if (B) {
          S[0] = "auto";
          e = true;
          N = true;
        }
        if (P) {
          if (!!g && !b && !e) {
            S[0] = P.order;
          }
          E.set(P.blockId, "auto");
          e = true;
          A = true;
        }
      }
    }
    let O = new Map();
    if (L) {
      if (I) {
        orderedBlockUtils.getUnorderedBlocks(e, I.blockId, orderedBlockConstants.OrderDirection.UP, true).forEach(e => {
          let i = e.order === 1 ? String(e.order) : "auto";
          O.set(e.blockId, i);
        });
      }
      if (M) {
        orderedBlockUtils.getUnorderedBlocks(e, M.blockId, orderedBlockConstants.OrderDirection.DOWN, true).forEach(e => {
          O.set(e.blockId, "auto");
        });
      }
    }
    if (N && B) {
      orderedBlockUtils.getUnorderedBlocks(e, B.blockId, orderedBlockConstants.OrderDirection.UP, true).forEach(e => {
        let i = e.order === 1 ? String(e.order) : "auto";
        O.set(e.blockId, i);
      });
    }
    if (A && P) {
      orderedBlockUtils.getUnorderedBlocks(e, P.blockId, orderedBlockConstants.OrderDirection.DOWN, true).forEach(e => {
        O.set(e.blockId, "auto");
      });
    }
    let D = new Map();
    p.forEach((e, i) => {
      let r = String(S[i]);
      D.set(e.id, r);
    });
    docListOpsHandler.setMapEntries(D, E);
    docListOpsHandler.setMapEntries(D, O);
    return D;
  }
  function g(e, i, r, n, o) {
    let l = new Map();
    if (!i.length || !r || !n) {
      return l;
    }
    let s = e.getBlockModelByBlockId(r);
    if (!s || s.children.length <= n || !docListOpsHandler.checkSeqUpdate(o, i, e)) {
      return l;
    }
    let a = orderedBlockUtils.findBlockInChildren(e, r, n, orderedBlockConstants.OrderDirection.DOWN);
    if (a && !a.isHeader) {
      l.set(a.blockId, "1");
      e.orderMap.set(a.recordId, 1);
    }
    return l;
  }
  function p(e, i, r) {
    let n = r[0];
    let l = i.map(i => {
      let {
        id: r
      } = i;
      return e.getBlockIdsByRecordId(r)[0];
    }).filter(Boolean);
    let c = i => {
      return e.getBlockModelByBlockId(i).parent?.id;
    };
    let d = function (e, i) {
      let r = {};
      e.forEach(e => {
        let o = docxBlockUtils_1.findNodeByBlockType(e, i, docBlockTypeConstants.gridTableOkTypes)?.id;
        if (o) {
          r[o] = r[o] ? r[o].concat(e) : [e];
        }
      });
      return Object.values(r);
    }(l, e).reduce((e, i) => {
      let r = Object.values(collectionArrayGrouper.groupValuesToArray(i, c)).map(e => e.filter(Boolean));
      return e.concat(r);
    }, []);
    let p = r => {
      let o = docListOpsHandler.getContinuousBlockIds(e, r);
      if (n === editorActionConstants.actionTypes.TURNINTO_INSERT) {
        return f(e, o, {
          isForceNewList: true,
          isOnlyOneList: true
        });
      }
      if (n === editorActionConstants.actionTypes.TURNINTO_REMOVE) {
        let r = e.getBlockModelByBlockId(o[o.length - 1]);
        return g(e, o, r.parent?.id, r.nextSibling?.position, i);
      }
      return new Map();
    };
    let m = new Map();
    d.forEach(e => {
      let i = p(e);
      docListOpsHandler.setMapEntries(m, i);
    });
    return m;
  }
  function m(e, i, r) {
    let {
      orderedBlockIds: n
    } = docListOpsHandler.getInsertOpInfo(e, i);
    return f(e, n, r || {});
  }
  function v(e, i, r) {
    let {
      downwardBlocksPositionNoChange: o,
      originalNextSiblingBlockPosition: l,
      isInAdvanceUpdateOrderMap: s
    } = r || {};
    let a = i.ops.filter(collaborativeEditingFlowSyncModule.isDeleteOperation);
    let {
      recordIds: h,
      orderedRecordIds: f
    } = docListOpsHandler.getRemoveOpInfo(e, i);
    let p = null;
    if (l) {
      p = l;
    } else {
      let e = a.find(e => e.action.ld === h[0]).p[1];
      p = o ? e + h.length : e;
    }
    let m = e.getBlockIdsByRecordId(i.id)[0];
    let v = g(e, f, m, p, [i]);
    if (s && i.id && p) {
      let i = orderedBlockUtils.findBlockInChildren(e, m, p, orderedBlockConstants.OrderDirection.DOWN);
      let r = e.orderMap.get(f[0]);
      if (i && !i.isHeader && !v.has(i.blockId) && r) {
        e.orderMap.set(i.recordId, r);
      }
    }
    return v;
  }
  function b(e, i, r) {
    let {
      insertRecordOps: o,
      removeRecordOps: s,
      insertOps: h,
      removeOps: f
    } = docListOpsHandler.splitInsertRemoveOps(i, r);
    if (s.length === 1 && o.length === 1) {
      let i = new Map();
      let r = o[0];
      let n = s[0];
      if (r.id !== n.id) {
        let o = v(e, n);
        docListOpsHandler.setMapEntries(i, o);
        let l = m(e, r, {
          isIgnoreFirstSeq: true
        });
        docListOpsHandler.setMapEntries(i, l);
      } else {
        let o = false;
        for (let e of f) {
          let i = e.action.ld;
          if (h.find(e => e.action.li === i).p[1] < e.p[1]) {
            o = true;
            break;
          }
        }
        let l = v(e, n, {
          downwardBlocksPositionNoChange: o
        });
        docListOpsHandler.setMapEntries(i, l);
        let {
          orderedBlockIds: s
        } = docListOpsHandler.getInsertOpInfo(e, r);
        let a = orderedBlockUtils.getBlockOrderInfo(e, s[0]);
        if (!orderedBlockUtils.validateBlockOrder(e, s[0], orderedBlockConstants.OrderDirection.UP, a == null ? undefined : a.order) || (a == null ? undefined : a.isHeader)) {
          let n = m(e, r, {
            isUseDownwardOrder: true,
            isUseCacheOrder: true
          });
          docListOpsHandler.setMapEntries(i, n);
        }
      }
      return i;
    }
    if (s.length === 1 && o.length === 2) {
      let i = new Map();
      let r = true;
      h.forEach(i => {
        let o = i.action.li;
        if (e.getBlockModelsByRecordId(o)[0].parent?.type !== docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          r = false;
        }
      });
      if (r) {
        let r = function (e, i) {
          let r = i.ops.filter(collaborativeEditingFlowSyncModule.isDeleteOperation);
          let {
            recordIds: o
          } = docListOpsHandler.getRemoveOpInfo(e, i);
          let l = docListOpsHandler.groupOpsByPosition(o, i);
          let s = (n, o) => {
            let l = n.filter(i => e.getRecord(i).snapshot.type === docBlockTypeConstants.blockTypeConstants.ORDERED);
            let s = r.find(e => e.action.ld === n[0]).p[1];
            let c = o ? s + n.length : s;
            let d = e.getBlockIdsByRecordId(i.id)[0];
            return g(e, l, d, c, [i]);
          };
          let c = new Map();
          l.forEach((e, i) => {
            let r = s(e, i === 0 && l.length > 1);
            docListOpsHandler.setMapEntries(c, r);
          });
          return c;
        }(e, s[0]);
        docListOpsHandler.setMapEntries(i, r);
        o.forEach(r => {
          let n = m(e, r);
          docListOpsHandler.setMapEntries(i, n);
        });
      } else {
        let r = e.getBlockIdsByRecordId(s[0].id)[0];
        let n = e.getBlockModelByBlockId(r).parent;
        let [a, c] = collectionPartitionFactory.partitionCollection(o, e => {
          let {
            id: i
          } = e;
          return i === (n == null ? undefined : n.record.id);
        });
        if (a.length === 1) {
          let r = m(e, a[0], {
            isIgnoreFirstSeq: true
          });
          docListOpsHandler.setMapEntries(i, r);
        }
        if (c.length === 1) {
          let r = m(e, c[0]);
          docListOpsHandler.setMapEntries(i, r);
        }
      }
      return i;
    }
    return new Map();
  }
  function y(e, i, r) {
    let {
      insertRecordOps: n,
      removeRecordOps: o,
      insertOps: l,
      removeOps: s
    } = docListOpsHandler.splitInsertRemoveOps(i, r);
    if (o.length === 0 && n.length > 0) {
      let i = new Map();
      n.forEach(r => {
        let n = m(e, r);
        docListOpsHandler.setMapEntries(i, n);
      });
      return i;
    }
    if (o.length === 1 && n.length === 0) {
      return v(e, o[0]);
    }
    if (o.length === 1 && n.length > 0) {
      let i = new Map();
      let r = o[0];
      let {
        recordIds: a
      } = docListOpsHandler.getRemoveOpInfo(e, r);
      let c = v(e, r, {
        originalNextSiblingBlockPosition: s.find(e => e.action.ld === a[0]).p[1] + l.length,
        isInAdvanceUpdateOrderMap: true
      });
      docListOpsHandler.setMapEntries(i, c);
      n.forEach(r => {
        let n = m(e, r);
        docListOpsHandler.setMapEntries(i, n);
      });
      return i;
    }
    return new Map();
  }
  function S(e, i, r) {
    orderedBlockUtils.getUnorderedBlocks(r, e, orderedBlockConstants.OrderDirection.DOWN).forEach(e => {
      i.replace(e.recordId, ["seq"], "auto");
    });
  }
  require.d(exports, {
    handleTurnIntoOps: function () {
      return p;
    },
    handleInsertRemoveOps: function () {
      return y;
    },
    handleRemoveOps: function () {
      return v;
    },
    handleInsertOps: function () {
      return m;
    },
    handleMoveOps: function () {
      return b;
    },
    clearUnorderedBlocks: function () {
      return S;
    }
  });
}