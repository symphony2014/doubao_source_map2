// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$F' to 'isBlockHeader'
// - Renamed export 'CN' to 'isNumericString'
// - Renamed export 'Mi' to 'getOrderedBlocks'
// - Renamed export 'Mv' to 'getBlockOrderInfo'
// - Renamed export 'NE' to 'isBlockDeleted'
// - Renamed export 'Tc' to 'isOrderedBlock'
// - Renamed export 'WO' to 'findNextOrderedBlock'
// - Renamed export 'jq' to 'getUnorderedBlocks'
// - Renamed export 'm2' to 'hasNoSequence'
// - Renamed export 'nW' to 'isCopySequence'
// - Renamed export 'rG' to 'findBlockInChildren'
// - Renamed export 'zl' to 'isValidSequence'
// - Renamed export 'zm' to 'validateBlockOrder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 5008
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  function u(e) {
    return !e.record.snapshot.seq;
  }
  function a(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.ORDERED;
  }
  function s(e) {
    return a(e) && !!e.record.snapshot.seq && e.record.snapshot.seq !== "auto" && e.record.snapshot.seq !== "copy";
  }
  function d(e) {
    return a(e) && !!e.record.snapshot.seq && e.record.snapshot.seq === "copy";
  }
  function f(e) {
    return !!(e == null ? undefined : e.record.snapshot[docBlockConstants_1.editTypeConstants.del]);
  }
  function h(e) {
    return /^\d+$/.test(e);
  }
  function _(e) {
    return e === "auto" || e === "copy" || Number.isInteger(Number(e));
  }
  function p(e, n) {
    if (!n) {
      return null;
    }
    let r = e.getBlockModelByBlockId(n);
    let o = e.orderMap.get(r.record.id);
    if (o) {
      return {
        blockId: n,
        recordId: r.record.id,
        order: o,
        level: docBlockDepthUtil.getBlockDepth(r),
        isHeader: s(r)
      };
    } else {
      return null;
    }
  }
  function g(e, n, r, o) {
    let d = e.getBlockStructByBlockId(n);
    let f = d.parent?.children || [];
    let {
      position: h
    } = d;
    let _ = [];
    for (h += o ? 0 : orderedBlockConstants.directionValueMap[r]; h >= 0 && h < f.length; h += orderedBlockConstants.directionValueMap[r]) {
      let n = f[h];
      if (!a(n)) {
        continue;
      }
      if (u(n) || s(n)) {
        break;
      }
      let r = {
        blockId: n.id,
        recordId: n.record.id,
        order: e.orderMap.get(n.record.id),
        level: docBlockDepthUtil.getBlockDepth(n),
        isHeader: s(n)
      };
      if (h > d.position) {
        _.push(r);
      } else {
        _.unshift(r);
      }
    }
    return _;
  }
  function E(e, n, r, o) {
    let d = e.getBlockStructByBlockId(n);
    let f = d.parent?.children || [];
    let {
      position: h
    } = d;
    let _ = [];
    for (h += o ? 0 : orderedBlockConstants.directionValueMap[r]; h >= 0 && h < f.length; h += orderedBlockConstants.directionValueMap[r]) {
      let n = f[h];
      if (!a(n) || !u(n)) {
        break;
      }
      let r = {
        blockId: n.id,
        recordId: n.record.id,
        order: e.orderMap.get(n.record.id),
        level: docBlockDepthUtil.getBlockDepth(n),
        isHeader: s(n)
      };
      if (h > d.position) {
        _.push(r);
      } else {
        _.unshift(r);
      }
    }
    return _;
  }
  function m(e, n, r) {
    if (!n) {
      return null;
    }
    let l = e.getBlockModelByBlockId(n);
    let u = l.parent?.children || [];
    let {
      position: d
    } = l;
    for (d += orderedBlockConstants.directionValueMap[r]; d >= 0 && d < u.length; d += orderedBlockConstants.directionValueMap[r]) {
      if (a(u[d])) {
        let n = u[d];
        return {
          blockId: n.id,
          recordId: n.record.id,
          order: e.orderMap.get(n.record.id),
          level: docBlockDepthUtil.getBlockDepth(n),
          isHeader: s(n)
        };
      }
    }
    return null;
  }
  function b(e, n, r, o) {
    let {
      children: l
    } = e.getBlockModelByBlockId(n);
    for (let n = r; n >= 0 && n < l.length; n += orderedBlockConstants.directionValueMap[o]) {
      if (a(l[n])) {
        let r = l[n];
        return {
          blockId: r.id,
          recordId: r.record.id,
          order: e.orderMap.get(r.record.id),
          level: docBlockDepthUtil.getBlockDepth(r),
          isHeader: s(r)
        };
      }
    }
    return null;
  }
  function v(e, n, r, o) {
    if (!o) {
      return null;
    }
    let i = m(e, n, r);
    if ((i == null ? undefined : i.order) === o + orderedBlockConstants.directionValueMap[r]) {
      return i;
    } else {
      return null;
    }
  }
  require.d(exports, {
    isBlockHeader: function () {
      return s;
    },
    isNumericString: function () {
      return h;
    },
    getOrderedBlocks: function () {
      return g;
    },
    getBlockOrderInfo: function () {
      return p;
    },
    isBlockDeleted: function () {
      return f;
    },
    isOrderedBlock: function () {
      return a;
    },
    findNextOrderedBlock: function () {
      return m;
    },
    getUnorderedBlocks: function () {
      return E;
    },
    hasNoSequence: function () {
      return u;
    },
    isCopySequence: function () {
      return d;
    },
    findBlockInChildren: function () {
      return b;
    },
    isValidSequence: function () {
      return _;
    },
    validateBlockOrder: function () {
      return v;
    }
  });
}