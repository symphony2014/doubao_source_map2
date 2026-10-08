// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fu' to 'getRevisionAttrs'
// - Renamed export 'MG' to 'compareRevDetails'
// - Renamed export 'r_' to 'parseJsonSafe'
// - Renamed export 's' to 'isFormatOp'
// - Renamed export '_1' to 'isRevisionIdPrefix'
// - Renamed export 'f$' to 'isReplaceAddOp'
// - Renamed export 'J' to 'isReplaceOp'
// - Renamed export 'E1' to 'getSnapshotRevIds'
// - Renamed export 'eb' to 'isAcceptAction'
// - Renamed export 'j3' to 'isParagraphDetail'
// - Renamed export 'yw' to 'formatRevisionId'
// - Renamed export 'z0' to 'isAddOp'
// - Renamed export 'uT' to 'isDeleteAction'
// - Renamed export 'iP' to 'stringifyRevOmitId'
// - Renamed export 'zS' to 'isAddOperation'
// - Renamed export 'c9' to 'getSelectionViews'
// - Renamed export 'u7' to 'isRejectAction'
// - Renamed export 'C6' to 'hasRevisionInModel'
// - Renamed export 'xV' to 'getSelectionRange'
// - Renamed export 'Vs' to 'mapRevsToAttrs'
// - Renamed export 'U6' to 'isReplaceDeleteOp'
// - Renamed export 'eI' to 'filterBlockModels'
// - Renamed export 'Bk' to 'stripRevIdString'
// - Renamed export 'Jo' to 'compareOpTypes'
// - Renamed export 'UN' to 'applyRevHighlight'
// - Renamed export 'a_' to 'createRevContext'
// - Renamed export 'G1' to 'isRevisionIdString'
// - Renamed export 'tX' to 'filterRevisionKeys'
// - Renamed export 'U8' to 'getBlockRevisionIds'
// - Renamed export 'DB' to 'isDeleteOp'
// - Renamed export 't9' to 'insertRecordIdSorted'
// - Renamed export 'rY' to 'hasFormatAttrs'
// - Renamed export 'GV' to 'addRevisionContext'
// - Renamed export 'n6' to 'isBlockParaDetail'
// - Renamed export 'P4' to 'hasTurnIntoDetail'
// - Renamed export 'YK' to 'isDeleteOperation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 80308
         */
module.exports = function (module, exports, require) {
  var o;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  (o = {})[o.HIGH = 1] = "HIGH";
  o[o.SAME = 0] = "SAME";
  o[o.LOW = -1] = "LOW";
  let s = o;
  function d(e) {
    let n = [];
    let r = e;
    while (r && !(r.position < 0)) {
      n.unshift(r.position);
      r = r.parent;
    }
    return n;
  }
  var jsonSafeUtils = require("json-safe-utils") /*id: 39873*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  function E(e) {
    return e === editorRevisionConstants.reviewActionTypes.ACCEPT;
  }
  function m(e) {
    return e === editorRevisionConstants.reviewActionTypes.REJECT;
  }
  function b(e) {
    return e === editorRevisionConstants.reviewActionTypes.DELETE;
  }
  function v(e) {
    return e === editorRevisionConstants.diffOperationMap.ADD;
  }
  function T(e) {
    return e === editorRevisionConstants.diffOperationMap.DELETE;
  }
  function C(e) {
    return e === editorRevisionConstants.diffOperationMap.REPLACE;
  }
  function k(e) {
    return e === editorRevisionConstants.diffOperationMap.FORMAT;
  }
  function I(e, n) {
    return C(e) && n === editorRevisionConstants.replaceOpTypes.REPLACE_ADD;
  }
  function R(e, n) {
    return C(e) && n === editorRevisionConstants.replaceOpTypes.REPLACE_DELETE;
  }
  function y(e) {
    let {
      type: n,
      details: r
    } = e;
    return v(n) || I(n, r == null ? undefined : r.subType);
  }
  function O(e) {
    let {
      type: n,
      details: r
    } = e;
    return T(n) || R(n, r == null ? undefined : r.subType);
  }
  function S(e) {
    return k(e.type) && e.details?.turnInto;
  }
  function A(e) {
    return k(e.type) && e.details?.formattedAttributePairs;
  }
  function L(e) {
    return !!e.details?.isParagraph;
  }
  function N(e) {
    return L(e) && !!e.details?.isBlock;
  }
  function B(e, n) {
    return Object.keys(e).every(r => !!["createTime", "revisionId"].includes(r) || r === "details" && !e[r] && !n[r] || deepEqualUtil_1.deepEqual(e[r], n[r]));
  }
  function D(e, n, r = () => true) {
    return (e.model.snapshot.revisions || []).some(e => e.revisionId === n && r(e));
  }
  function w(e) {
    return !!e && e.startsWith(editorRevisionConstants.revisionIdString);
  }
  function M(e) {
    return !!e && e.startsWith(editorRevisionConstants.revisionIdPrefix);
  }
  function P(e, n) {
    return e.type === n.type && e.details?.subType === n.details?.subType;
  }
  function F(e) {
    return e.replace(editorRevisionConstants.revisionIdString, "");
  }
  function x(e = "null") {
    return jsonSafeUtils.safeJsonParse(e);
  }
  function U(e) {
    return `${editorRevisionConstants.revisionIdString}${e}`;
  }
  function G(e) {
    return JSON.stringify(throttledOmitPathStringify.omitPathStringify(e, "revisionId"));
  }
  function H(e, n) {
    let r = n.selection || {
      start: 0,
      end: 0
    };
    if (n.type !== editorTypeConstants.blockTypes.TEXT) {
      r.start = 0;
      r.end = editorTextBlockUtilities.getModelTextWithoutTrailing(e.model.zoneState).length;
    }
    return r;
  }
  function K(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let o = [];
    if (n.start.zoneId === e.getZoneId()) {
      Object.entries(e.getAttributes(n.start, n.end).toMap()).forEach(e => {
        let [n, i] = e;
        if (!w(n)) {
          return;
        }
        let l = F(n);
        let c = x(i);
        if (!!c && (!r || !k(c.type))) {
          o.push({
            revisionId: l,
            ...c
          });
        }
      });
    }
    return o;
  }
  function Z(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return e.reduce((e, r) => {
      if (!n || !k(r.type)) {
        e[U(r.revisionId)] = G(r);
      }
      return e;
    }, {});
  }
  function $(e) {
    let n = [];
    e.forEach(e => {
      if (editorTextBlockUtilities.isTextBlock(e)) {
        n.push({
          id: e.id,
          type: editorTypeConstants.blockTypes.TEXT,
          selection: {
            start: 0,
            end: editorTextBlockUtilities.getModelTextWithoutTrailing(e.zoneState).length
          }
        });
        if (e.children.length) {
          n.push(...$(e.children));
        }
      } else if (docBlockTypeConstants.selectionViewTypes.includes(e.type) || e.type === docBlockTypeConstants.blockTypeConstants.CELL) {
        n.push(...$(e.children));
      } else {
        n.push({
          id: e.id,
          type: editorTypeConstants.blockTypes.BLOCK
        });
      }
    });
    return n;
  }
  function j(e, n, r) {
    if (r) {
      return $(n.filter(n => e.hasBlockModelByBlockId(n.id)).map(n => e.getBlockModelByBlockIdNotCheck(n.id)));
    } else {
      return n;
    }
  }
  function V(e) {
    let n = [];
    if (editorTextBlockUtilities.isAgendaBlock(e.type)) {
      let {
        apool: r
      } = e.snapshot.text;
      if (r) {
        let {
          nextNum: e,
          numToAttrib: o
        } = r;
        if (e) {
          n = Object.keys(o).filter(e => w(o[e][0])).map(e => F(o[e][0]));
        }
      }
    }
    let r = e.snapshot.revisions;
    if (r && r.length > 0) {
      return r.map(e => e.revisionId).slice().reverse().concat(n);
    } else {
      return n;
    }
  }
  function W(e) {
    let n = [];
    if (e.snapshot.text) {
      try {
        let {
          apool: {
            numToAttrib: r
          }
        } = e.snapshot.text;
        Object.values(r).forEach(e => w(e[0]) && n.push(F(e[0])));
      } catch (e) {}
    }
    return (e.snapshot.revisions || []).map(e => e.revisionId).reverse().concat(n);
  }
  function X(e, n, r) {
    let l = r.getBlockModelsByRecordId(n)?.[0];
    if (!l) {
      e.push(n);
      return;
    }
    let c = d(l);
    for (let [o, l] of e.entries()) {
      if (n === l) {
        break;
      }
      let u = r.getBlockModelsByRecordId(l)?.[0];
      if (!u) {
        e.push(n);
        break;
      }
      if (function (e, n) {
        let r = Math.max(e.length, n.length);
        for (let o = 0; o < r; o++) {
          let r = e[o];
          let i = n[o];
          if (r === undefined) {
            return s.LOW;
          }
          if (i === undefined) {
            return s.HIGH;
          }
          if (r !== i) {
            if (r < i) {
              return s.LOW;
            } else {
              return s.HIGH;
            }
          }
        }
        return s.SAME;
      }(c, d(u)) === s.LOW) {
        e.splice(o, 0, n);
        break;
      }
      if (o === e.length - 1) {
        e.push(n);
      }
    }
  }
  function Y(e, n) {
    return {
      extra: {
        revisionContext: {
          revisionId: e,
          type: n
        }
      }
    };
  }
  function z(e, n) {
    if (!(n == null ? undefined : n.revisionId)) {
      return;
    }
    let o = e.extra || {};
    if (o.revisionContext?.length) {
      o.revisionContext.push(n);
    }
    if (o.revisionContext) {
      o.revisionContext = [o.revisionContext, n];
    } else {
      o.revisionContext = n;
    }
    e.extra = o;
  }
  function q(e, n) {
    var r;
    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      isDelete: false,
      notRemoveRevisionId: "",
      isHighlightAllText: false,
      onlyParagraph: false
    };
    let {
      editor: c,
      model: u
    } = e;
    let {
      isDelete: a,
      notRemoveRevisionId: s,
      isHighlightAllText: d,
      onlyParagraph: f
    } = o;
    let h = U(n);
    let {
      zoneState: _,
      zoneId: p
    } = u;
    let E = _.length() - 1;
    let m = [];
    m = d ? _.getEntities({
      start: {
        line: 0,
        offset: 0
      },
      end: {
        line: E,
        offset: _.getModelText().length - 1
      }
    }) : f ? _.getEntities({
      start: {
        line: E,
        offset: _.getModelText().length - 1
      },
      end: {
        line: E,
        offset: _.getModelText().length
      }
    }) : _.getEntities((e, r) => e === h || e === `${editorRevisionConstants.revisionIdPrefix}${n}` || e === editorRevisionConstants.revisionHlPrefix && r === n);
    let b = s ? [U(s)] : [];
    let v = {};
    if (a && s !== "") {
      m = m.filter(e => !b.some(n => !!e.attributes[n]));
    }
    if (m.length) {
      v[p] = m;
    }
    let T = new deltaSetCore.DeltaSet();
    let C = 0;
    Object.keys(v).forEach(e => {
      v[e].forEach(r => {
        let o = u.rangeToPosition(r);
        o ||= {
          start: 0,
          len: 0
        };
        let {
          start: i,
          len: c
        } = o;
        let s = i - C;
        let d = T.get(e) || new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        d.retain(s);
        d.retain(c, Object.assign({
          [editorRevisionConstants.revisionHlPrefix]: a ? "" : n
        }, a && {
          [`${editorRevisionConstants.revisionIdPrefix}${n}`]: ""
        }));
        if (T.get(e)) {
          T.replace(e, d);
        } else {
          T.add(e, d);
        }
        C += s + c;
      });
    });
    let k = (r = e.snapshot.revisions) === null || r === undefined ? undefined : r.find(e => {
      let {
        revisionId: r,
        details: o
      } = e;
      return r === n && (o == null ? undefined : o.isParagraph);
    });
    if (k) {
      let e = _.getModelText().length;
      let r = T.get(p) || new contentStructureDelta.ContentDelta({
        zoneId: p
      });
      let {
        type: o,
        details: i,
        userId: c
      } = k;
      let u = e - C - 1;
      r.retain(u).retain(1, {
        [editorRevisionConstants.revisionHlPrefix]: a ? "" : n,
        [`${editorRevisionConstants.revisionIdPrefix}${n}`]: a ? "" : JSON.stringify({
          type: o,
          userId: c,
          details: i
        })
      });
      T.replace(p, r);
    }
    c.setStopUpdateSelection(true);
    try {
      e.model.apply(T, {
        extra: {
          shouldCollab: false
        },
        noLayoutUpdate: true
      });
    } catch (e) {}
    c.setStopUpdateSelection(false);
    setTimeout(() => {
      if (!c.isEditable()) {
        c.setPreventUpdateDomSelection(false);
      }
    });
  }
  function J(e) {
    return objectExcludeFilterUtil.filterObjectExclude(e, (e, n) => w(n));
  }
  require.d(exports, {
    getRevisionAttrs: function () {
      return K;
    },
    compareRevDetails: function () {
      return B;
    },
    parseJsonSafe: function () {
      return x;
    },
    isFormatOp: function () {
      return k;
    },
    isRevisionIdPrefix: function () {
      return M;
    },
    isReplaceAddOp: function () {
      return I;
    },
    isReplaceOp: function () {
      return C;
    },
    getSnapshotRevIds: function () {
      return W;
    },
    isAcceptAction: function () {
      return E;
    },
    isParagraphDetail: function () {
      return L;
    },
    formatRevisionId: function () {
      return U;
    },
    isAddOp: function () {
      return v;
    },
    isDeleteAction: function () {
      return b;
    },
    stringifyRevOmitId: function () {
      return G;
    },
    isAddOperation: function () {
      return y;
    },
    getSelectionViews: function () {
      return $;
    },
    isRejectAction: function () {
      return m;
    },
    hasRevisionInModel: function () {
      return D;
    },
    getSelectionRange: function () {
      return H;
    },
    mapRevsToAttrs: function () {
      return Z;
    },
    isReplaceDeleteOp: function () {
      return R;
    },
    filterBlockModels: function () {
      return j;
    },
    stripRevIdString: function () {
      return F;
    },
    compareOpTypes: function () {
      return P;
    },
    applyRevHighlight: function () {
      return q;
    },
    createRevContext: function () {
      return Y;
    },
    isRevisionIdString: function () {
      return w;
    },
    filterRevisionKeys: function () {
      return J;
    },
    getBlockRevisionIds: function () {
      return V;
    },
    isDeleteOp: function () {
      return T;
    },
    insertRecordIdSorted: function () {
      return X;
    },
    hasFormatAttrs: function () {
      return A;
    },
    addRevisionContext: function () {
      return z;
    },
    isBlockParaDetail: function () {
      return N;
    },
    hasTurnIntoDetail: function () {
      return S;
    },
    isDeleteOperation: function () {
      return O;
    }
  });
}