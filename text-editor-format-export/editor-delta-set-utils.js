// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'getDeltaLength'
// - Renamed export 'Au' to 'isContentDelta'
// - Renamed export 'Eb' to 'createInitialDelta'
// - Renamed export 'Rl' to 'sliceInsertOp'
// - Renamed export 'TK' to 'getDeltaOpsRange'
// - Renamed export 'Y$' to 'formatReferences'
// - Renamed export 'c$' to 'getInsertText'
// - Renamed export 'py' to 'isReadOnlyDelta'
// - Renamed export 't' to 'concatDeltaAt'
// - Renamed export 't2' to 'generateRandomId'
// - Renamed export 'u9' to 'createHeadingDelta'
// - Renamed export 'vm' to 'getRangeDeltaSet'
// - Renamed export 'wr' to 'getZoneTextLength'
// - Renamed export 'x4' to 'getZoneContent'
// - Renamed export 'x_' to 'getHeadingLevel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 201746
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  let f = (e, t, r) => {
    var i;
    var l;
    if (isUndefinedCheck.isUndefined(t) && isUndefinedCheck.isUndefined(r)) {
      return e;
    }
    if (isUndefinedCheck.isUndefined(r)) {
      let r = (l = e[documentOperationConstants.operationTypes.INSERT]) === null || l === undefined ? undefined : l.slice(t ?? 0);
      return {
        ...e,
        [documentOperationConstants.operationTypes.INSERT]: r
      };
    }
    let o = (i = e[documentOperationConstants.operationTypes.INSERT]) === null || i === undefined ? undefined : i.slice(t ?? 0, r ?? 0);
    return {
      ...e,
      [documentOperationConstants.operationTypes.INSERT]: o
    };
  };
  let p = e => {
    if (arrayIsArrayUtil.isArray(e)) {
      return e.map(e => {
        return e.insert ?? "";
      }).join("");
    } else {
      return e.insert ?? "";
    }
  };
  let y = (e, t) => {
    var n;
    return ((n = e.getContentState().getZoneState(t)) === null || n === undefined ? undefined : n.getModelText()?.length) ?? 0;
  };
  let x = function (e, t = zeroConstantModule_1.versionValue) {
    let r = e.get(t);
    if (r) {
      return arraySumByMatcher.sumByMatcher(r.ops, e => isUndefinedCheck.isUndefined(e.insert) ? isUndefinedCheck.isUndefined(e.retain) ? isUndefinedCheck.isUndefined(e.delete) ? 0 : e.delete : e.retain : Number(e.insert.length));
    } else {
      return 0;
    }
  };
  let v = e => e instanceof contentStructureDelta.ContentDelta;
  let g = e => e.ops.every(e => !isUndefinedCheck.isUndefined(e.retain) && isEmptyUtil.isEmpty(objectExcludeFilterUtil.filterObjectExclude(e.attributes, (e, t) => t.startsWith("clientside-"))));
  let $ = e => {
    let {
      target: t,
      start: r,
      end: n
    } = e;
    return t.slice(t.offsetToPoint(r), t.offsetToPoint(Math.min(t.getModelText().length, n)));
  };
  let b = e => {
    let {
      deltaSet: t,
      start: r,
      end: n,
      zoneId: i = zeroConstantModule_1.versionValue
    } = e;
    let l = t.get(i);
    if (!l) {
      return t;
    }
    let o = $({
      target: new editorZoneState.EditorZoneState(i, l),
      start: r,
      end: n
    }).getContent();
    return new deltaSetCore.DeltaSet({
      ...t.deltas,
      [i]: o
    });
  };
  let w = e => {
    let {
      deltaSet: t,
      start: r,
      end: n,
      zoneId: i = zeroConstantModule_1.versionValue
    } = e;
    let l = b({
      deltaSet: t,
      start: r,
      end: n,
      zoneId: i
    }).get(i);
    if (l) {
      return l.ops;
    } else {
      return [];
    }
  };
  let k = e => {
    let t = [];
    e.forEach(e => {
      t.push(e);
    });
    return t;
  };
  let S = e => k(e).every(e => g(e));
  let R = function (e = {}) {
    let {
      withLineMaker: t = false,
      zoneId: r = zeroConstantModule_1.versionValue
    } = e;
    let n = new contentStructureDelta.ContentDelta({
      zoneId: r
    });
    return new deltaSetCore.DeltaSet({
      [r]: t ? n.insertLineMarker().insertEnter() : n
    });
  };
  let T = () => randomStringGenerator.createRandomString().replace(/x/gi, "");
  let W = (e, t, r) => {
    var n;
    let {
      zoneId: l
    } = t;
    let o = e.getContentState();
    let a = o.rangePointToOffset(t);
    let s = ((n = o.getZoneState(l)) === null || n === undefined ? undefined : n.getModelText()) ?? "";
    let d = a === -1 || a === null ? s.length : a;
    if (!s || d !== s.length || !s.endsWith("\n")) {
      return new deltaSetCore.DeltaSet({
        [l]: new contentStructureDelta.ContentDelta({
          zoneId: l
        }).retain(d)
      }).concat(r);
    }
    {
      let e = s.slice(-1);
      return new deltaSetCore.DeltaSet({
        [l]: new contentStructureDelta.ContentDelta({
          zoneId: l
        }).retain(d - 1).insert(e)
      }).concat(r).concat(new contentStructureDelta.ContentDelta({
        zoneId: l
      }).delete(1));
    }
  };
  let E = e => {
    let {
      title: t,
      level: r,
      zoneId: n = zeroConstantModule_1.versionValue
    } = e;
    return new deltaSetCore.DeltaSet({
      [n]: new contentStructureDelta.ContentDelta({
        zoneId: n
      }).insertLineMarker({
        heading: `h${r}`
      }).insert(t).insertEnter()
    });
  };
  let _ = e => e.heading ? Number(e.heading.slice(1)) : null;
  let F = function (e = []) {
    if (e == null ? undefined : e.length) {
      return e.flatMap(e => [{
        start: e.endIndex,
        end: e.endIndex,
        insert: `<reference type="end" id=${e.referenceId}>`
      }]);
    } else {
      return [];
    }
  };
  require.d(exports, {
    getDeltaLength: function () {
      return x;
    },
    isContentDelta: function () {
      return v;
    },
    createInitialDelta: function () {
      return R;
    },
    sliceInsertOp: function () {
      return f;
    },
    getDeltaOpsRange: function () {
      return w;
    },
    formatReferences: function () {
      return F;
    },
    getInsertText: function () {
      return p;
    },
    isReadOnlyDelta: function () {
      return S;
    },
    concatDeltaAt: function () {
      return W;
    },
    generateRandomId: function () {
      return T;
    },
    createHeadingDelta: function () {
      return E;
    },
    getRangeDeltaSet: function () {
      return b;
    },
    getZoneTextLength: function () {
      return y;
    },
    getZoneContent: function () {
      return $;
    },
    getHeadingLevel: function () {
      return _;
    }
  });
}