// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'splitBlockByRange'
// - Renamed export 'i' to 'convertToTextBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 18066
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var authorRenderer = require("author-renderer") /*id: 937435*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var revisionMapUtils = require("revision-map-utils") /*id: 246069*/;
  function v(e, r, o, l, n) {
    let {
      zoneState: a
    } = o;
    let {
      hasBeforeText: i,
      hasAfterText: c
    } = function (e, r) {
      let o = e.pointToOffset(r.start) || 0;
      let l = e.pointToOffset(r.end) || 0;
      let [n, a] = e.split([o, l]);
      return {
        hasBeforeText: !n.isEmpty(),
        hasAfterText: !a.isEmpty()
      };
    }(a, l);
    let d = a.getModelText().length;
    if (i) {
      let e = a.pointToOffset(l.start);
      let n = a.remove([e || 0, d - 1]).toAttributeText();
      r.replace(o.record.id, ["text"], n);
    } else {
      documentBlockOperations.removeBlockItems(r, [o]);
    }
    let f = o.parent.recordId;
    let v = i ? o.position + 1 : o.position;
    let [_] = documentBlockOperations.insertNewChildren(r, f, v, [n]);
    let g = function (e, r) {
      let {
        zoneState: o,
        snapshot: l
      } = e;
      return Array.from(new Set([...docxCommentUtils.getCommentIdsFromAttributes(o, r), ...docxCommentUtils.isSyncedCell(l)].filter(e => !docxCommentUtils.getCommentsWithoutHighlight(e))));
    }(o, l);
    r.replace(_, ["comments"], g);
    let b = editorRevisionUtilities.getRevisionAttrs(a, l);
    r.replace(_, ["revisions"], b);
    r.replace(_, ["align"], o.record.snapshot.align || "");
    if (c) {
      let o = a.offsetToPoint(a.totalWidth());
      let n = a.slice(l.end, o).toAttributeText();
      editorTextBlockUtilities.insertBlockWithMarks(r, f, v + 1, e.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
        text: n
      }));
    }
    return _;
  }
  function _(e, r, o, h, v = {}) {
    documentBlockOperations.removeBlockItems(r, [o]);
    let _ = o.record.snapshot.comments || [];
    if (_.length > 0) {
      r.replace(o.recordId, ["comments"], []);
    }
    let g = revisionMapUtils.createFlagMap(_);
    let b = o.record.snapshot.revisions || [];
    if (b.length) {
      r.replace(o.recordId, ["revisions"], []);
    }
    let C = editorRevisionUtilities.mapRevsToAttrs(b);
    let x = {
      [authorRenderer.AuthorRenderer.KEY]: userEnvironmentUtils.getUserInfo().userId || "",
      ...g,
      ...C,
      ...v
    };
    let w = new contentStructureDelta.ContentDelta({
      zoneId: zeroConstantModule_1.versionValue
    }).insert(h, x);
    let T = new deltaSetCore.DeltaSet({
      [zeroConstantModule_1.versionValue]: w
    });
    let k = deltaSetChangesetConverter_1.extractAttributedTexts(T);
    let Z = o.parent.recordId;
    let {
      position: y
    } = o;
    let E = o.record.snapshot.align || undefined;
    return editorTextBlockUtilities.insertBlockWithMarks(r, Z, y, e.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
      comments: _,
      text: k,
      align: E
    }));
  }
  require.d(exports, {
    splitBlockByRange: function () {
      return v;
    },
    convertToTextBlock: function () {
      return _;
    }
  });
}