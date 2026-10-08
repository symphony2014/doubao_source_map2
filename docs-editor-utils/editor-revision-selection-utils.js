// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kk' to 'findRevisionInSelections'
// - Renamed export 'kW' to 'findLatestTurnIntoRevision'
// - Renamed export 'mZ' to 'findRevisionInBlock'
// - Renamed export 'qT' to 'findUserAddRevisionInSelections'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 421120
         */
module.exports = function (module, exports, require) {
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  function g(e, n) {
    return n.map(n => {
      let r = new activeEditorRange.ActiveEditorRange({
        editor: e.editor,
        state: e.model.zoneState,
        start: n.start,
        end: n.end
      }).toPosition();
      let i = e.model.zoneState.getLine(n.start.line);
      let l = false;
      if (i) {
        l = n.end.offset === i.length() - 1;
      }
      return {
        isLineEnd: l,
        start: r.start,
        end: r.start + r.len
      };
    });
  }
  function E(e, n = editorRevisionUtilities.isRevisionIdString) {
    return (r, o) => {
      if (!n(r)) {
        return false;
      }
      let i = editorRevisionUtilities.parseJsonSafe(o);
      return !!i && e(i);
    };
  }
  function m(e) {
    return e.revisions?.length && e.revisions.slice().sort((e, n) => n.createTime - e.createTime).find(e => editorRevisionUtilities.hasTurnIntoDetail(e)) || null;
  }
  function b(e, n, r) {
    let o;
    if (typeof r == "function") {
      o = r;
    } else {
      let e = isStringTypeCheck.isString(r) ? editorRevisionUtilities.parseJsonSafe(r) : r;
      if (!e) {
        return;
      }
      o = n => editorRevisionUtilities.compareRevDetails(e, n);
    }
    for (let r of n) {
      let n = e.getBlockViewByBlockIdNotCheck(r.id);
      if (!n) {
        return;
      }
      if (editorTextBlockUtilities.isEditorInstance(n) && r.type === editorTypeConstants.blockTypes.TEXT) {
        var u;
        let {
          zoneState: e
        } = n.model;
        let i = e.getModelText().length;
        if (r.selection?.start === i - 1 && r.selection?.end === i) {
          let e = (u = n.snapshot.revisions) === null || u === undefined ? undefined : u.find(o);
          if (e) {
            return [editorRevisionUtilities.formatRevisionId(e == null ? undefined : e.revisionId), JSON.stringify(e)];
          }
        }
        let a = editorRevisionUtilities.getSelectionRange(n, r);
        let s = editorRangeUtilities.convertRangeWithZone(n, [a.start, a.end]);
        let f = E(o);
        let h = n.model.zoneState.getEntities(s, f);
        if (h.length) {
          let {
            attributes: e
          } = h[0];
          let n = Object.keys(e).find(n => f(n, e[n]));
          if (n) {
            return [n, e[n]];
          }
        }
      } else {
        let e = (n.model.snapshot.revisions || []).find(o);
        if (e) {
          return [e.revisionId, JSON.stringify(e)];
        }
      }
    }
  }
  function v(e, n, r) {
    let o;
    let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let a = arrayFirstElement.getFirstElement(n);
    if (!a || editorSelectionUtilities.isCollapsedTextSelection(n) || !e.getBlockViewByBlockIdNotCheck(a.id)) {
      return;
    }
    let m = function (e, n, r) {
      let o = [];
      let i = e.getBlockViewByBlockIdNotCheck(n.id);
      if (!i) {
        return o;
      }
      if (editorTextBlockUtilities.isEditorInstance(i) && n.type === editorTypeConstants.blockTypes.TEXT) {
        let e = editorRevisionUtilities.getSelectionRange(i, n);
        if (e.start === e.end) {
          return o;
        }
        let l = editorRangeUtilities.convertRangeWithZone(i, [e.start, e.start + 1]);
        let c = E(r);
        let u = i.model.zoneState.getEntities(l, c);
        if (u.length) {
          o = Object.entries(u[0].attributes).filter(e => {
            let [n, r] = e;
            return c(n, r);
          });
        }
      } else {
        o = (i.model.snapshot.revisions || []).filter(r).map(e => [editorRevisionUtilities.formatRevisionId(e.revisionId), editorRevisionUtilities.stringifyRevOmitId(e)]);
      }
      return o;
    }(e, a, o = typeof r == "function" ? r : e => !r || editorRevisionUtilities.compareRevDetails(r, e));
    if (!m.length) {
      return;
    }
    let {
      isCompleteWithinSelectionsOnly: b,
      isCompleteWithTextualParagraph: v
    } = i;
    for (let r of m) {
      let [l, a] = r;
      let d = editorRevisionUtilities.stripRevIdString(l);
      let f = editorRevisionUtilities.parseJsonSafe(a);
      let m = i.isEqualRevisionValue || deepEqualUtil_1.deepEqual;
      let T = E(e => !!f && m(throttledOmitPathStringify.omitPathStringify(f, "createTime"), throttledOmitPathStringify.omitPathStringify(e, "createTime")), e => e === l);
      let C = false;
      if (b) {
        C = n.every(n => {
          let r = e.getBlockViewByBlockIdNotCheck(n.id);
          if (!r) {
            return false;
          }
          if (!editorTextBlockUtilities.isEditorInstance(r) || n.type !== editorTypeConstants.blockTypes.TEXT) {
            return editorRevisionUtilities.hasRevisionInModel(r, d, o);
          }
          {
            let e = editorRevisionUtilities.getSelectionRange(r, n);
            let o = r.model.zoneState.getEntities(T);
            let i = function (e, n, r) {
              let o = function (e, n) {
                let r = g(e, n);
                if (!r.length) {
                  return null;
                }
                let o = 0;
                let i = 0;
                let l = [];
                for (let e = 0; e < r.length; e++) {
                  let {
                    start: n,
                    end: c
                  } = r[e];
                  if (e === 0) {
                    o = n;
                    i = c;
                    continue;
                  }
                  if (n !== (r[e - 1].isLineEnd ? i + 1 : i)) {
                    l.push({
                      start: o,
                      end: i
                    });
                    o = n;
                    i = c;
                    continue;
                  }
                  i = c;
                }
                l.push({
                  start: o,
                  end: i
                });
                return l;
              }(e, n);
              return o != null && !!o.length && o.some(e => r.start >= e.start && r.end <= e.end);
            }(r, o, e);
            if (v) {
              return i && editorRevisionUtilities.hasRevisionInModel(r, d, editorRevisionUtilities.isParagraphDetail);
            } else {
              return i;
            }
          }
        });
      } else {
        if (!function (e, n, r) {
          let o = e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).getRecordIdsByRevisionId(editorRevisionUtilities.stripRevIdString(n));
          return o.size === r.length && r.every(n => {
            let i = e.getRecordByBlockId(n.id)?.id;
            return i && o.has(i);
          });
        }(e, d, n)) {
          continue;
        }
        C = n.every(n => {
          let r = e.getBlockViewByBlockIdNotCheck(n.id);
          if (!r) {
            return false;
          }
          if (!editorTextBlockUtilities.isEditorInstance(r) || n.type !== editorTypeConstants.blockTypes.TEXT) {
            return editorRevisionUtilities.hasRevisionInModel(r, d, o);
          }
          {
            let e = editorRevisionUtilities.getSelectionRange(r, n);
            let o = r.model.zoneState.getEntities(T);
            let i = function (e, n, r) {
              let o = function (e, n) {
                let r = g(e, n);
                if (!r.length) {
                  return null;
                }
                let o = 0;
                let i = 0;
                for (let e = 0; e < r.length; e++) {
                  let {
                    start: n,
                    end: l
                  } = r[e];
                  if (e === 0) {
                    o = n;
                    i = l;
                    continue;
                  }
                  if (n !== (r[e - 1].isLineEnd ? i + 1 : i)) {
                    return null;
                  }
                  i = l;
                }
                return {
                  start: o,
                  end: i
                };
              }(e, n);
              return !!o && r.start === o.start && r.end === o.end;
            }(r, o, e);
            if (v) {
              return i && editorRevisionUtilities.hasRevisionInModel(r, d, editorRevisionUtilities.isParagraphDetail);
            } else {
              return i;
            }
          }
        });
      }
      if (C) {
        return r;
      }
    }
  }
  function T(e, n, r = {
    isCompleteWithinSelectionsOnly: true
  }) {
    return v(e, n, e => e.userId === userEnvironmentUtils.getUserInfo().userId && editorRevisionUtilities.isAddOperation(e), r);
  }
  require.d(exports, {
    findRevisionInSelections: function () {
      return v;
    },
    findLatestTurnIntoRevision: function () {
      return m;
    },
    findRevisionInBlock: function () {
      return b;
    },
    findUserAddRevisionInSelections: function () {
      return T;
    }
  });
}