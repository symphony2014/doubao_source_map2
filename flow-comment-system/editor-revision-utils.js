// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cz' to 'upsertRevision'
// - Renamed export 'HF' to 'createRevisionInfo'
// - Renamed export 'bB' to 'onRevisionBackspace'
// - Renamed export 'm6' to 'getPreviousRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 465369
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var asyncTickHelper = require("async-tick-helper") /*id: 954555*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var snapshotRevisionUtils = require("snapshot-revision-utils") /*id: 696424*/;
  function m(e, i, n = {
    allowNonCursorSelection: false
  }) {
    if (!e.config.get("revising")) {
      return [];
    }
    let o = i.getSelection();
    if ((n == null ? undefined : n.allowNonCursorSelection) && o.length === 1 && o[0].selection) {
      o[0].selection.end = o[0].selection?.start;
    }
    let l = editorRevisionAddHandler.getInheritRevision(e, o);
    if (!l) {
      return [];
    }
    let [a, d] = l;
    let u = editorRevisionUtilities.stripRevIdString(a);
    let m = editorRevisionUtilities.parseJsonSafe(d);
    if (!m) {
      return [];
    }
    let v = editorRevisionOperations.createRevisionObject({
      revisionId: u,
      type: m.type,
      details: Object.assign((m == null ? undefined : m.details) || {}, {
        isParagraph: true
      })
    });
    let f = editorRevisionUtilities.parseJsonSafe(d);
    return [v, {
      type: m.type,
      revisionId: u,
      revision: f || undefined
    }];
  }
  function v(e, i, n, o) {
    if (e.config.get("revising")) {
      snapshotRevisionUtils.upsertRevision(i, n, o);
    }
  }
  function f(e) {
    let o = e.previous || (e.parent?.isRoot ? e.parent : null);
    return ((o == null ? undefined : o.snapshot?.revisions) || []).find(e => editorRevisionUtilities.isParagraphDetail(e)) || null;
  }
  async function g(e, i, n, s) {
    var m;
    var v;
    if (!e.config.get("revising")) {
      return;
    }
    let {
      record: f,
      id: g,
      model: p
    } = n;
    m = e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
    };
    let b = ((v = f.snapshot.revisions) === null || v === undefined ? undefined : v.find(e => editorRevisionUtilities.isParagraphDetail(e) && m(e))) || null;
    let k = p.zoneState.totalWidth() - 1;
    let y = {
      id: g,
      type: docxBlockSelectionHandler_1.blockTypes.TEXT,
      selection: {
        start: k,
        end: k
      }
    };
    if (b) {
      let {
        revisionId: o
      } = b;
      e.applyTransaction("keyevent:text:backspace:revision", e => {
        snapshotRevisionUtils.removeRevision(e, f, b);
      }, {
        extra: {
          revisionContext: {
            type: editorRevisionConstants.diffOperationMap.ADD,
            revisionId: o,
            revision: b
          }
        }
      });
      await (s == null ? undefined : s());
      await asyncTickHelper.waitForTick();
      i.setSelection([y], {
        source: docxBlockSelectionHandler_1.commandTypes.Backspace
      });
      n.removeRevisionHighlight(o, {
        onlyParagraph: true
      });
      return;
    }
    let [C, S] = function (e, i) {
      let n = i.getSelection();
      let o = editorRevisionDeleteOperations.getDeleteRevision(e, n);
      if (!o.revision) {
        return [];
      }
      let [r, l] = o.revision;
      let a = editorRevisionUtilities.stripRevIdString(r);
      let s = editorRevisionUtilities.parseJsonSafe(l);
      if (!s) {
        return [];
      }
      let u = editorRevisionOperations.createRevisionObject({
        revisionId: a,
        type: s.type,
        details: Object.assign((s == null ? undefined : s.details) || {}, {
          isParagraph: true
        })
      });
      let m = editorRevisionUtilities.parseJsonSafe(l);
      return [u, {
        type: s.type,
        revisionId: a,
        revision: m || undefined
      }];
    }(e, i);
    if (C && S) {
      e.applyTransaction("keyevent:text:backspace:revision", e => {
        snapshotRevisionUtils.upsertRevision(e, f, C);
      }, {
        extra: {
          revisionContext: S
        }
      });
      await asyncTickHelper.waitForTick();
      i.setSelection([y], {
        source: docxBlockSelectionHandler_1.commandTypes.Backspace
      });
    }
  }
  require.d(exports, {
    upsertRevision: function () {
      return v;
    },
    createRevisionInfo: function () {
      return m;
    },
    onRevisionBackspace: function () {
      return g;
    },
    getPreviousRevision: function () {
      return f;
    }
  });
}