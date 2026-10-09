// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C9' to 'getInsertOpInfo'
// - Renamed export 'Hi' to 'checkSeqUpdate'
// - Renamed export 'JJ' to 'splitInsertRemoveOps'
// - Renamed export 'Jw' to 'groupOpsByPosition'
// - Renamed export 'T' to 'flattenRemoveOps'
// - Renamed export 'VY' to 'getRemoveOpInfo'
// - Renamed export 'W_' to 'flattenInsertOps'
// - Renamed export 'bD' to 'checkHeaderMerge'
// - Renamed export 'e5' to 'getContinuousBlockIds'
// - Renamed export 'zg' to 'setMapEntries'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 691963
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var collectionMapFlatten = require("collection-map-flatten") /*id: 378218*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorActionConstants = require("editor-action-constants") /*id: 216889*/;
  function c(e, i) {
    let r = e.getBlockModelByBlockId(i[0]);
    let n = e.getBlockModelByBlockId(i[i.length - 1]);
    if (n.position - r.position + 1 !== i.length) {
      let {
        parent: e
      } = r;
      if (!e) {
        return i;
      }
      let {
        children: o
      } = e;
      return o.slice(r.position, n.position + 1).filter(e => docBlockTypeConstants.agendaCodeTypes.includes(e.type)).map(e => e.id);
    }
    return i;
  }
  function d(e, i) {
    let {
      ops: r
    } = i;
    let o = r.filter(collaborativeEditingFlowSyncModule.$b);
    if (o.length === 1) {
      let i = o[0].action.li;
      if (i) {
        let [r] = e.getBlockModelsByRecordId(i);
        if (r && r.position === 0) {
          return {
            isNextSiblingOrderedHeaderNotToBeMerge: false
          };
        }
      }
    }
    return {
      isNextSiblingOrderedHeaderNotToBeMerge: true
    };
  }
  function u(e, i) {
    let {
      ops: r
    } = i;
    let o = r.filter(collaborativeEditingFlowSyncModule.$b).map(e => e.action.li).sort((i, r) => {
      let n = e.getBlockModelsByRecordId(i)[0];
      let o = e.getBlockModelsByRecordId(r)[0];
      if (n) {
        if (o) {
          return n.position - o.position;
        } else {
          return -1;
        }
      } else {
        return 1;
      }
    });
    let l = o.filter(i => e.hasRecordByRecordId(i) && e.getRecord(i).snapshot.type === docBlockTypeConstants.blockTypeConstants.ORDERED);
    let a = l.map(i => e.getBlockIdsByRecordId(i)[0]).filter(Boolean);
    return {
      recordIds: o,
      orderedRecordIds: l,
      orderedBlockIds: a
    };
  }
  function h(e, i) {
    let {
      ops: r
    } = i;
    let o = r.filter(collaborativeEditingFlowSyncModule.isDeleteOperation).sort((e, i) => e.p[1] - i.p[1]).map(e => e.action.ld);
    let l = o.filter(i => e.getRecord(i).snapshot.type === docBlockTypeConstants.blockTypeConstants.ORDERED);
    let a = l.map(i => e.getBlockIdsByRecordId(i)[0]).filter(Boolean);
    return {
      recordIds: o,
      orderedRecordIds: l,
      orderedBlockIds: a
    };
  }
  function f(e, i) {
    let r = [];
    let {
      ops: n
    } = i;
    let o = 0;
    let l = [];
    e.forEach((e, i) => {
      let s = n.find(i => i.action.ld === e);
      if (i === 0 || (s == null ? undefined : s.p[1]) === o) {
        l.push(e);
      } else {
        r.push([...l]);
        l = [e];
      }
      o = s == null ? undefined : s.p[1];
    });
    if (l.length) {
      r.push([...l]);
    }
    return r;
  }
  function g(e, i) {
    i.forEach((i, r) => {
      e.set(r, i);
    });
  }
  function p(e) {
    return collectionMapFlatten.mapAndFlatten(e, e => e.ops.filter(collaborativeEditingFlowSyncModule.$b));
  }
  function m(e) {
    return collectionMapFlatten.mapAndFlatten(e, e => e.ops.filter(collaborativeEditingFlowSyncModule.isDeleteOperation));
  }
  function v(e, i) {
    let r = i.indexOf(editorActionConstants.actionTypes.REMOVE);
    let n = r !== -1 ? r : e.length;
    let o = e.slice(0, n);
    let l = e.slice(n);
    let s = p(o);
    let c = m(l);
    return {
      insertRecordOps: o,
      removeRecordOps: l,
      insertOps: s,
      removeOps: c
    };
  }
  function b(e, i, r) {
    if (isStringTypeCheck.isString(i[0])) {
      return [...i.map(e => r.getRecord(e))].reverse().find(e => !!e.snapshot.seq && e.snapshot.seq !== "auto" && e.snapshot.seq !== "copy");
    } else {
      return collectionMapFlatten.mapAndFlatten(e, e => e.ops.filter(collaborativeEditingFlowSyncModule.isCreateOperation)).some(e => e.p[0] === "seq" && e.action.oi !== "auto") || collectionMapFlatten.mapAndFlatten(e, e => e.ops.filter(collaborativeEditingFlowSyncModule.isListDeleteOperation)).some(e => e.p[0] === "seq" && e.action.od !== "auto");
    }
  }
  require.d(exports, {
    getInsertOpInfo: function () {
      return u;
    },
    checkSeqUpdate: function () {
      return b;
    },
    splitInsertRemoveOps: function () {
      return v;
    },
    groupOpsByPosition: function () {
      return f;
    },
    flattenRemoveOps: function () {
      return m;
    },
    getRemoveOpInfo: function () {
      return h;
    },
    flattenInsertOps: function () {
      return p;
    },
    checkHeaderMerge: function () {
      return d;
    },
    getContinuousBlockIds: function () {
      return c;
    },
    setMapEntries: function () {
      return g;
    }
  });
}