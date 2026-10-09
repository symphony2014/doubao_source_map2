// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd7' to 'handleAddRevision'
// - Renamed export 'eu' to 'handleFormatRev'
// - Renamed export 'lb' to 'handleTextRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 977441
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxRevisionFeatureCheckers = require("docx-revision-feature-checkers") /*id: 964037*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  let c = e => {
    let n = editorRevisionOperations.createAddRevision(e);
    let i = {
      type: n.type,
      revisionId: n.revisionId
    };
    return [n, i];
  };
  let u = (e, n, i, o) => {
    let l;
    let r;
    if (!e.config.get("revising")) {
      return;
    }
    if (o) {
      r = {
        type: (l = o).type,
        revisionId: l.revisionId
      };
    } else {
      [l, r] = c(e);
    }
    if (Array.isArray(n)) {
      n.forEach(e => e.revisions = [l]);
    } else {
      n.revisions = [l];
    }
    let a = i.extra || {};
    a.revisionContext = r;
    i.extra = a;
  };
  let h = (e, n, i, o) => {
    if (!e.config.get("revising")) {
      return;
    }
    let l = editorRevisionOperations.createFormatRevision(e, {
      details: {
        turnInto: true,
        turnIntoFrom: docBlockTypeConstants.blockTypeConstants.TEXT,
        turnIntoTo: n
      }
    });
    let a = {
      type: l.type,
      revisionId: l.revisionId
    };
    if (Array.isArray(i.revisions)) {
      i.revisions.push(l);
    } else {
      i.revisions = [l];
    }
    let d = o.extra || {};
    d.revisionContext = a;
    o.extra = d;
  };
  function f(e, n, i, r) {
    if (!e.config.get("revising")) {
      return n;
    }
    let [s, u] = c(e);
    let h = editorRevisionUtilities.formatRevisionId(s.revisionId);
    let f = editorRevisionUtilities.stringifyRevOmitId(s);
    let v = deltaSetChangesetConverter_1.attributedTextToDeltaSet(n.initialAttributedTexts, n.apool);
    v.get("0").forEach(e => {
      if (deltaSetCore.isInsertString(e)) {
        e.attributes ||= {};
        e.attributes[h] = f;
        return e;
      }
    });
    let p = deltaSetChangesetConverter_1.extractAttributedTexts(v, {
      filterInitialAttributedText: true
    });
    let g = {
      isParagraph: true
    };
    if (docxRevisionFeatureCheckers.isRevisionCardEnabled()) {
      g.isBlock = true;
    }
    i.revisions = [{
      ...s,
      details: g
    }];
    let m = r.extra || {};
    m.revisionContext = u;
    r.extra = m;
    return p;
  }
  require.d(exports, {
    handleAddRevision: function () {
      return u;
    },
    handleFormatRev: function () {
      return h;
    },
    handleTextRevision: function () {
      return f;
    }
  });
}