// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BY' to 'syncFormatRevision'
// - Renamed export 'Be' to 'getBlockFormatRev'
// - Renamed export 'De' to 'getLatestRevision'
// - Renamed export 'Ex' to 'getFormatRevision'
// - Renamed export 'XL' to 'getTurnIntoRevision'
// - Renamed export '_3' to 'updateTurnIntoRev'
// - Renamed export 'gB' to 'applyFormatRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 638641
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var throttledArrayIntersection_1 = require("throttled-array-intersection_1") /*id: 766812*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var revisionConnectorServiceToken = require("revision-connector-service-token") /*id: 762963*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxRevisionFeatureCheckers = require("docx-revision-feature-checkers") /*id: 964037*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var snapshotRevisionUtils = require("snapshot-revision-utils") /*id: 696424*/;
  let I = debugLoggerFactory.createLogger("utils:format-revision");
  function R(e, n, r) {
    if (editorRevisionSelectionUtils.findUserAddRevisionInSelections(e, n)) {
      return null;
    }
    let c = editorRevisionSelectionUtils.findRevisionInSelections(e, n, e => {
      return e.type === editorRevisionConstants.diffOperationMap.FORMAT && e.userId === userEnvironmentUtils.getUserInfo().userId && (e.details?.formattedAttributePairs || []).length > 0;
    }, {
      isEqualRevisionValue: (e, n) => {
        if (e.type !== n.type || e.userId !== n.userId) {
          return false;
        }
        let i = e.details?.formattedAttributePairs;
        let l = n.details?.formattedAttributePairs;
        return (i == null ? undefined : i.length) === (l == null ? undefined : l.length) && !!(i == null ? undefined : i.every(e => {
          let [n] = e;
          if (l == null) {
            return undefined;
          } else {
            return l.some(e => {
              let [r] = e;
              return n === r;
            });
          }
        }));
      }
    });
    if (!isUndefinedCheck.isUndefined(c)) {
      return c;
    }
    let u = Object.keys(r);
    let a = function (e, n, r) {
      let l = editorRevisionSelectionUtils.findRevisionInBlock(e, n, r);
      if (l) {
        I("继承选区内的修订", l);
        return l;
      }
      let c = function (e) {
        let n = arrayFirstElement.getFirstElement(e);
        if (n.type === editorTypeConstants.blockTypes.TEXT) {
          let {
            selection: e = {
              start: 0,
              end: 0
            }
          } = n;
          if (e.start > 0) {
            return {
              ...n,
              selection: {
                start: e.start - 1,
                end: e.start
              }
            };
          }
        }
      }(n);
      if (c) {
        let n = editorRevisionSelectionUtils.findRevisionInBlock(e, [c], r);
        if (n) {
          I("继承选区前面的修订", n);
          return n;
        }
      }
      let u = function (e, n) {
        let r = lastElementHelper.getLastElement(n);
        if (r.type === editorTypeConstants.blockTypes.TEXT) {
          let {
            id: n,
            selection: o = {
              start: 0,
              end: 0
            }
          } = r;
          let i = e.getBlockViewByBlockIdNotCheck(n);
          if (i && o.end < editorTextBlockUtilities.getModelTextWithoutTrailing(i == null ? undefined : i.model.zoneState).length) {
            return {
              ...r,
              selection: {
                start: o.end,
                end: o.end + 1
              }
            };
          }
        }
      }(e, n);
      if (u) {
        let n = editorRevisionSelectionUtils.findRevisionInBlock(e, [u], r);
        if (n) {
          I("继承选区后面的修订", n);
          return n;
        }
      }
    }(e, n, e => {
      return e.type === editorRevisionConstants.diffOperationMap.FORMAT && e.userId === userEnvironmentUtils.getUserInfo().userId && (e.details?.formattedAttributePairs || []).every(e => {
        let [n] = e;
        return u.includes(n);
      });
    });
    if (isUndefinedCheck.isUndefined(a)) {
      return Object.entries(editorRevisionOperations.createFormatOperation({
        revisionId: e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId(),
        details: {
          formattedAttributePairs: []
        }
      }))[0];
    } else {
      return a;
    }
  }
  function y(e, n, r, o) {
    n.forEach(n => {
      let {
        start: i,
        end: l,
        text: c
      } = n;
      let u = l.offset - i.offset;
      if (Object.entries(r).every(e => {
        let [r, o] = e;
        return n.attributes[r] === o;
      })) {
        e.retain(u);
      } else {
        let i = function (e, n, r) {
          let [i, l] = n;
          let c = editorRevisionUtilities.parseJsonSafe(l);
          let u = editorRevisionUtilities.parseJsonSafe(e.attributes[i]);
          let a = (u == null ? undefined : u.details?.formattedAttributePairs) || [];
          if (a.length && a.every(e => {
            let [n, o] = e;
            return r[n] === o;
          })) {
            return {
              ...r,
              [i]: ""
            };
          }
          let s = a || [];
          Object.keys(r).forEach(n => {
            let o = s.findIndex(e => {
              let [r] = e;
              return r === n;
            });
            if (o > -1) {
              let [, e] = s[o];
              if (e === r[n]) {
                s.splice(o, 1);
              }
            } else {
              s.push([n, e.attributes[n] || ""]);
            }
          });
          c.details = {
            formattedAttributePairs: s
          };
          return {
            ...r,
            [i]: JSON.stringify(c)
          };
        }(n, o, r);
        if (c.substring(c.length - 1) === "\n") {
          e.retain(u - 1, i);
          e.retain(1);
        } else {
          e.retain(u, i);
        }
      }
    });
  }
  function O(e, n) {
    if (!e.config.get("revising")) {
      return null;
    }
    let r = editorRevisionOperations.createFormatRevision(e, {
      details: {
        turnInto: true
      }
    });
    let o = n.map(e => ({
      id: e.id,
      type: editorTypeConstants.blockTypes.BLOCK
    }));
    let i = editorRevisionSelectionUtils.findRevisionInSelections(e, o, e => {
      return e.details?.turnInto && e.type === r.type && e.userId === r.userId;
    });
    if (i) {
      let e = editorRevisionUtilities.parseJsonSafe(i[1]);
      if (e) {
        e.revisionId = editorRevisionUtilities.stripRevIdString(i[0]);
      }
      r = e || r;
    }
    return r;
  }
  function S(e, n, r, o) {
    if (!o) {
      return;
    }
    let i = n.type;
    let a = (n.snapshot.revisions || []).find(e => e.revisionId === o.revisionId);
    if (a) {
      if (function (e, n, r) {
        let {
          details: o
        } = e;
        return o != null && !!o.turnInto && o.turnIntoFrom === n && o.turnIntoTo === r;
      }(a, r, i)) {
        snapshotRevisionUtils.removeRevision(e, n.record, a);
        return;
      }
      let l = deepCloneWrapper_1.deepClone(a.details);
      l.turnIntoTo = r;
      o.details = l;
    } else {
      let {
        snapshot: e
      } = n;
      let c = {
        turnInto: true,
        turnIntoFrom: n.type,
        turnIntoTo: r
      };
      if (i === docBlockTypeConstants.blockTypeConstants.TODO) {
        if (!isUndefinedCheck.isUndefined(e.done)) {
          safeObjectSetWrapper.safeObjectSet(c, ["turnIntoData", "done"], e.done);
        }
      } else if (docBlockTypeConstants.orderedHeadingTypes.includes(i)) {
        if (!isUndefinedCheck.isUndefined(e.seq)) {
          safeObjectSetWrapper.safeObjectSet(c, ["turnIntoData", "seq"], e.seq);
        }
        if (!isUndefinedCheck.isUndefined(e.seq_level)) {
          safeObjectSetWrapper.safeObjectSet(c, ["turnIntoData", "seq_level"], e.seq_level);
        }
      } else if (i === docBlockTypeConstants.blockTypeConstants.CODE) {
        if (!isUndefinedCheck.isUndefined(e.language)) {
          safeObjectSetWrapper.safeObjectSet(c, ["turnIntoData", "language"], e.language);
        }
      }
      o.details = c;
    }
    snapshotRevisionUtils.upsertRevision(e, n.record, o);
  }
  function A(e, n) {
    if (!e.config.get("revising") || !docxRevisionFeatureCheckers.isRevisionCardEnabled()) {
      return null;
    }
    let r = editorRevisionOperations.createFormatRevision(e, {
      details: {
        formattedAttributePairs: []
      }
    });
    let o = n.map(e => ({
      id: e.id,
      type: editorTypeConstants.blockTypes.BLOCK
    }));
    let i = editorRevisionSelectionUtils.findRevisionInSelections(e, o, e => e.type === r.type && e.userId === r.userId);
    if (i && editorRevisionUtilities.parseJsonSafe(i[1])) {
      r.revisionId = editorRevisionUtilities.stripRevIdString(i[0]);
    }
    return r;
  }
  function L(e, n, r, o, i, u) {
    if (!o) {
      return;
    }
    let s = function (e, n) {
      var o;
      let u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      let s = n.revisions;
      let d = deepCloneWrapper_1.deepClone(s == null ? undefined : s.find(n => n.revisionId === e.revisionId));
      if (!d) {
        e.details = {};
        e.details.formattedAttributePairs = u.map(e => {
          let [r] = e;
          let o = n[r];
          if (r !== "done" || o) {
            if (isUndefinedCheck.isUndefined(o)) {
              return [r, "null"];
            } else {
              return [r, JSON.stringify(o ?? "")];
            }
          } else {
            return [r, "false"];
          }
        });
        return [editorRevisionUtilities.formatRevisionId(e.revisionId), JSON.stringify(e)];
      }
      if (editorRevisionUtilities.hasTurnIntoDetail(d) && !((o = d.details) === null || o === undefined ? undefined : o.formattedAttributePairs?.length)) {
        d.details.formattedAttributePairs = u.map(e => {
          let [o] = e;
          return [o, JSON.stringify(n[o]) ?? ""];
        });
        return [editorRevisionUtilities.formatRevisionId(d.revisionId), JSON.stringify(d)];
      }
      let f = d.details?.formattedAttributePairs || [];
      let h = throttledArrayIntersection_1.throttledIntersect(f, u, (e, n) => {
        let [r] = e;
        let [o] = n;
        return r === o;
      });
      let _ = new Map(f);
      let p = new Map(u);
      if (h.length) {
        if (!h.every(e => p.get(e[0]) === _.get(e[0]))) {
          return null;
        }
        for (let [e] of h) {
          _.delete(e);
        }
        d.details.formattedAttributePairs = [..._.entries()];
        if (d.details.formattedAttributePairs.length === 0) {
          delete d.details.formattedAttributePairs;
          if (editorRevisionUtilities.hasTurnIntoDetail(d)) {
            return [d.revisionId, JSON.stringify(d)];
          } else {
            return [d.revisionId, ""];
          }
        }
      } else {
        d.details.formattedAttributePairs = [...f, ...u];
      }
      return [d.revisionId, JSON.stringify(d)];
    }(o, u, i);
    if (!s) {
      N(e, o.revisionId);
      return;
    }
    let [d, f] = s;
    let h = editorRevisionUtilities.stripRevIdString(d);
    if (!f) {
      let e = (u.revisions || []).find(e => e.revisionId === h);
      if (e) {
        snapshotRevisionUtils.removeRevision(n, r.record, e);
      }
      return;
    }
    let _ = editorRevisionUtilities.parseJsonSafe(f);
    if (_) {
      snapshotRevisionUtils.upsertRevision(n, r.record, _);
      N(e, _.revisionId);
    }
  }
  function N(e, n) {
    let r = e.editorAPI.getService(revisionConnectorServiceToken.revisionConnectorToken, {
      dynamic: true
    }).get();
    if (r && (browserEnvironmentDetectionUtils.browserDetector.isPcWeb || browserEnvironmentDetectionUtils.browserDetector.isIPadApp && (r == null ? undefined : r.isCommentInAsideMode))) {
      setTimeout(() => {
        let {
          activeRevisionId: e
        } = r;
        if (e !== n) {
          r.activateRevision({
            revisionId: n
          });
        }
      });
    }
  }
  function B(e) {
    let n = e.snapshot.revisions;
    if (n == null ? undefined : n.length) {
      return n.reduce((e, n) => editorRevisionUtilities.hasFormatAttrs(n) && (!e || n.createTime > e.createTime) ? n : e, null);
    } else {
      return null;
    }
  }
  require.d(exports, {
    syncFormatRevision: function () {
      return L;
    },
    getBlockFormatRev: function () {
      return A;
    },
    getLatestRevision: function () {
      return B;
    },
    getFormatRevision: function () {
      return R;
    },
    getTurnIntoRevision: function () {
      return O;
    },
    updateTurnIntoRev: function () {
      return S;
    },
    applyFormatRevision: function () {
      return y;
    }
  });
}