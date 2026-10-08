// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BF' to 'getBlockDataMap'
// - Renamed export 'Bc' to 'getBlockIdFromOp'
// - Renamed export 'D1' to 'convertToBlockPayloadMap'
// - Renamed export 'FL' to 'isInitialText'
// - Renamed export 'Hz' to 'isDeleteOp'
// - Renamed export 'IN' to 'getBlockPathMap'
// - Renamed export 'Kp' to 'isInsertOp'
// - Renamed export 'Ls' to 'filterValidOps'
// - Renamed export 'MS' to 'isTextOrZoneOp'
// - Renamed export 'Nb' to 'getZoneChangesets'
// - Renamed export 'Nh' to 'convertToVersionedBlocks'
// - Renamed export 'O1' to 'buildPath'
// - Renamed export 'UU' to 'isCreateOp'
// - Renamed export 'XN' to 'filterInvalidChildOps'
// - Renamed export 'Xj' to 'getOpLength'
// - Renamed export 'fR' to 'composeZoneChangesets'
// - Renamed export 'g2' to 'expandCreateOps'
// - Renamed export 'hO' to 'filterOrphanedInserts'
// - Renamed export 'j6' to 'comparePaths'
// - Renamed export 'k8' to 'getCreateData'
// - Renamed export 'rr' to 'getInsertedBlockId'
// - Renamed export 'zw' to 'flattenBlockOps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 259219
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var patchOperationConstants = require("patch-operation-constants") /*id: 329334*/;
  var deltaPatchOperations = require("delta-patch-operations") /*id: 713456*/;
  var assertErrorHandler = require("assert-error-handler") /*id: 262641*/;
  var blockTreeUtilities = require("block-tree-utilities") /*id: 183833*/;
  var changesetDeltaUtilities = require("changeset-delta-utilities") /*id: 803911*/;
  let S = (e, i) => {
    let n = {};
    let r = [e];
    while (r.length) {
      let e = r.pop();
      assertErrorHandler.assertError(!isUndefinedCheck.isUndefined(e));
      try {
        let s = i(e);
        n[e] = s;
        let o = blockTreeUtilities.getBlockChildrenIds(s, {
          extraBlocks: true
        });
        r.push(...o);
      } catch (e) {
        continue;
      }
    }
    return n;
  };
  let B = e => safeObjectPropertyMap.safeObjectMap(e, (e, i) => ({
    id: i,
    version: 1,
    data: e
  }));
  let M = (e, i) => {
    let n = {};
    if (!e || !i[e]) {
      return n;
    }
    let s = [[e, []]];
    for (n[e] = []; s.length > 0;) {
      let [e, r] = s.pop();
      let o = i[e];
      if (!o) {
        continue;
      }
      let l = blockTreeUtilities.getBlockChildrenIds(o.data, {
        extraBlocks: true
      });
      if (l && l.length > 0) {
        for (let e = l.length - 1; e >= 0; e--) {
          let o = l[e];
          let a = [...r, e];
          n[o] = a;
          if (i[o]) {
            s.push([o, a]);
          }
        }
      }
    }
    return n;
  };
  let I = e => w(e) !== null ? -8 : C(e) ? -7 : -6;
  let T = (e, i) => [...i, I(e.op)];
  let E = (e, i) => {
    let n = e.length;
    let s = i.length;
    let r = Math.min(n, s);
    for (let n = 0; n < r; n++) {
      let s = e[n];
      let r = i[n];
      if (s < r) {
        return true;
      }
      if (s > r) {
        return false;
      }
    }
    return n <= s;
  };
  let _ = ({
    id: e,
    op: i
  }, n = true) => {
    let r = w(i) ?? (n ? D(i) : null);
    if (r !== null) {
      return r;
    } else {
      return e;
    }
  };
  let x = e => {
    let i = objectPathGetDefault.getObjectPathDefault(e, ["action", "oi", "text"]);
    if (!e.p.length && changesetDeltaUtilities.isInitialAttributedTexts(i)) {
      return i;
    } else {
      return null;
    }
  };
  let R = e => {
    var i;
    if (deepEqualUtil_1.deepEqual(e.p, ["text"]) && ((i = e.subType) == null ? undefined : i.t) === "easysync" && changesetDeltaUtilities.isZoneChangesets(e.subType.o)) {
      return e.subType.o;
    } else {
      return null;
    }
  };
  let A = e => x(e) !== null || R(e) !== null;
  let w = e => {
    var i;
    let n = (i = e.action) == null ? undefined : i.li;
    if (e.p[0] === "children" && isNumberUtil.isNumber(e.p[1]) && isStringTypeCheck.isString(n)) {
      return n;
    } else {
      return null;
    }
  };
  let D = e => {
    var i;
    let n = (i = e.action) == null ? undefined : i.ld;
    if (e.p[0] === "children" && isNumberUtil.isNumber(e.p[1]) && isStringTypeCheck.isString(n)) {
      return n;
    } else {
      return null;
    }
  };
  let P = e => {
    var i;
    var n;
    if (!e.p.length && ((i = e.action) == null ? undefined : i.oi)) {
      if ((n = e.action) == null) {
        return undefined;
      } else {
        return n.oi;
      }
    } else {
      return null;
    }
  };
  let C = e => !!P(e);
  let O = e => D(e) !== null;
  let N = (e, i = 1) => {
    let n = x(e);
    if (n) {
      let e = changesetDeltaUtilities.getContentDelta(n);
      return changesetDeltaUtilities.getTotalOpLength(e);
    }
    let s = R(e);
    if (s) {
      let e = changesetDeltaUtilities.changesetToDelta(changesetDeltaUtilities.unpackZoneChangesets(s));
      return arraySumByMatcher.sumByMatcher(e.ops, e => e.retain && !isEmptyUtil.isEmpty(e.attributes) ? 1 : e.delete || e[patchOperationConstants.operationKind.INSERT] ? deltaPatchOperations.getOpLength(e) : 0);
    }
    return i;
  };
  let Z = e => Object.fromEntries(e.map(({
    id: e,
    ops: i
  }) => [e, {
    id: e,
    payload: {
      ops: i
    }
  }]));
  let L = e => {
    var i;
    if (!e.length) {
      return [];
    }
    let n = (i = arrayFirstElement.getFirstElement(e)) == null ? undefined : i.id;
    assertErrorHandler.assertError(!isUndefinedCheck.isUndefined(n));
    let r = [];
    let o = null;
    let l = [];
    let a = () => {
      if (!o || !l.length) {
        return;
      }
      let e = changesetDeltaUtilities.composeDeltas(o, ...l);
      r.push({
        id: n,
        op: {
          p: ["text"],
          subType: {
            t: "easysync",
            o: changesetDeltaUtilities.packToZoneChangesets(e)
          }
        },
        base: o
      });
      l = [];
      o = null;
    };
    for (let i of e) {
      let {
        op: e,
        base: n
      } = i;
      let s = changesetDeltaUtilities.unpackZoneChangesets(R(e));
      if (s && n) {
        o ||= n;
        l.push(s);
        continue;
      }
      a();
      r.push(i);
    }
    a();
    return r;
  };
  let U = e => {
    let i = [];
    let n = collectionArrayGrouper.groupValuesToArray(e, e => e.id);
    for (let e of getOwnKeys.getOwnKeys(n)) {
      let s = L(n[e]);
      i.push({
        id: e,
        ops: s.map(e => e.op)
      });
    }
    return i;
  };
  let Q = e => e.flatMap(e => e.ops.map(i => ({
    id: e.id,
    op: i
  })));
  let z = e => {
    let i = e.map(e => w(e.op)).filter(isStringTypeCheck.isString);
    let n = e.map(e => D(e.op)).filter(isStringTypeCheck.isString);
    let s = i.filter(e => n.includes(e));
    return e.filter(e => !s.includes(_(e)));
  };
  let j = (e, i) => {
    let n = i;
    let s = n.map(e => D(e.op)).filter(isStringTypeCheck.isString);
    return z(n = (n = n.filter(e => !s.includes(e.id))).filter(i => {
      var n;
      var s;
      let r = blockTreeUtilities.extractChildOperationInfo(i.op);
      return !r || ((s = e[i.id]) == null ? undefined : (n = s.data.children) == null ? undefined : n[r.index]) !== r.id;
    }));
  };
  let F = e => {
    let i = dataProcessor.processData(e.map(e => w(e.op)).filter(isStringTypeCheck.isString));
    let n = dataProcessor.processData(e.filter(e => C(e.op)).map(e => e.id));
    return i.filter(e => !n.includes(e));
  };
  let V = e => e.flatMap(e => {
    var i;
    let {
      id: n,
      op: s
    } = e;
    let r = P(s);
    if (!r || !((i = r.children) == null ? undefined : i.length)) {
      return e;
    }
    let o = [];
    let {
      children: l
    } = r;
    o.push({
      p: [],
      action: {
        oi: {
          ...r,
          children: []
        }
      }
    });
    for (let e = 0; e < l.length; e++) {
      let i = l[e];
      o.push({
        p: ["children", e],
        action: {
          li: i
        }
      });
    }
    return o.map(e => ({
      id: n,
      op: e
    }));
  });
  require.d(exports, {
    getBlockDataMap: function () {
      return S;
    },
    getBlockIdFromOp: function () {
      return _;
    },
    convertToBlockPayloadMap: function () {
      return Z;
    },
    isInitialText: function () {
      return x;
    },
    isDeleteOp: function () {
      return O;
    },
    getBlockPathMap: function () {
      return M;
    },
    isInsertOp: function () {
      return D;
    },
    filterValidOps: function () {
      return z;
    },
    isTextOrZoneOp: function () {
      return A;
    },
    getZoneChangesets: function () {
      return R;
    },
    convertToVersionedBlocks: function () {
      return B;
    },
    buildPath: function () {
      return T;
    },
    isCreateOp: function () {
      return C;
    },
    filterInvalidChildOps: function () {
      return j;
    },
    getOpLength: function () {
      return N;
    },
    composeZoneChangesets: function () {
      return U;
    },
    expandCreateOps: function () {
      return V;
    },
    filterOrphanedInserts: function () {
      return F;
    },
    comparePaths: function () {
      return E;
    },
    getCreateData: function () {
      return P;
    },
    getInsertedBlockId: function () {
      return w;
    },
    flattenBlockOps: function () {
      return Q;
    }
  });
}