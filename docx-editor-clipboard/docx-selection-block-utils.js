// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JB' to 'createBlockSelectionMap'
// - Renamed export 'QR' to 'filterSelectedBlockIds'
// - Renamed export 'eD' to 'trimEmptyLastTextBlock'
// - Renamed export 'gq' to 'createActiveEditorRangeResolver'
// - Renamed export 'it' to 'createBlockSelectionFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 43039
         */
module.exports = function (module, exports, require) {
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docBlockTraversalUtils = require("doc-block-traversal-utils") /*id: 680152*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  function v(e, n, r = false) {
    let o = new Set(n);
    return n.filter(n => {
      let i = e.getBlockModelByBlockId(n);
      while (i && i.parent) {
        let e = i.parent;
        if (r && e.type === docBlockTypeConstants.blockTypeConstants.PAGE || e.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && syncUrlBlockUtils.isSyncingActive()) {
          break;
        }
        if (o.has(e.id)) {
          return false;
        }
        i = e;
      }
      return true;
    });
  }
  function b(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let l = arguments.length > 3 ? arguments[3] : undefined;
    let c = n.map(e => e.id);
    let u = {
      newSelectedBlockIds: c,
      rangeMap: {},
      blockIdMap: {}
    };
    let [f] = collectionPartitionFactory.partitionCollection(c, n => docxBlockUtils_1.isTextBlock(e.getBlockViewByBlockId(n)));
    f.forEach(o => {
      let f = e.getBlockModelByBlockId(o);
      let m = n[0].id === f.id;
      let v = n[n.length - 1].id === f.id;
      let b = deepCloneWrapper_1.deepClone(f.record);
      let y = syncUrlBlockUtils.isSyncingActive() && f.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
      if (y) {
        b.snapshot.type = docBlockTypeConstants.blockTypeConstants.TEXT;
      }
      if (r && (m || v)) {
        let r = e.getBlockViewByBlockId(o);
        let i = n.find(e => {
          let {
            id: n
          } = e;
          return n === f.id;
        });
        if (i == null ? undefined : i.selection) {
          let {
            start: e,
            end: n
          } = i.selection;
          let l = editorRangeUtilities.createRangeWithZone(r.model.zoneState, [e, n]);
          let c = new activeEditorRange.ActiveEditorRange({
            start: l.start,
            end: l.end,
            editor: r.editor,
            state: r.model.zoneState
          });
          u.rangeMap[o] = c;
          b.snapshot.text = r.model.zoneState.slice(c.start, c.end).toAttributeText();
        }
      }
      let _ = (!y && b.snapshot.children || []).reduce((n, r) => {
        let o = e.getBlockModelsByRecordId(r)[0];
        while (docBlockTraversalUtils.isSpecialBlockType(o.type) && !c.includes(o.id)) {
          o = o.next;
        }
        if (c.includes(o.id)) {
          n.push(r);
          let e = c.indexOf(o.id);
          if (!!(e >= 0) && (!l || !l(o.id))) {
            c.splice(e, 1);
          }
        }
        return n;
      }, []);
      b.snapshot.children = _;
      b.snapshot.text = editorTextBlockUtilities.processDocMentionsInText(b.snapshot.text, e);
      b.snapshot.text = editorTextBlockUtilities.stripAiExtraAttributes(b.snapshot.text);
      u.blockIdMap[o] = {
        id: b.id,
        snapshot: b.snapshot
      };
    });
    return u;
  }
  function y(e, n, r, o = {}) {
    return i => {
      if (o[i]) {
        return o[i];
      }
      let l = n.isSingleTextSelection(r);
      let c = e.getBlockModelByBlockIdNotCheck(i);
      let u = c.getSelection();
      if (l && u) {
        return new activeEditorRange.ActiveEditorRange({
          ...u,
          editor: u.editor,
          state: c.zoneState
        });
      }
      let s = e.getBlockModelByBlockId(i);
      let h = e.editorAPI.getService(docxEditorKitProviders.editorKitProviderName);
      let {
        zoneState: p
      } = s;
      return new activeEditorRange.ActiveEditorRange({
        ...editorRangeUtilities.createRangeWithZone(p, [0, p.totalWidth()]),
        editor: h,
        state: p
      });
    };
  }
  function _(e, n, r) {
    let o = [];
    let i = n.isTextSelectionAcrossBlocks(r);
    if (i) {
      o = r.reduce((n, r) => {
        let {
          id: o
        } = r;
        if (o === e.rootBlockId) {
          let {
            children: r
          } = e.getBlockModelByBlockId(e.rootBlockId);
          let i = r.map(e => e.id);
          n.push(o);
          return n.concat(i);
        }
        let i = e.getBlockPath(o);
        if (i.length > 1) {
          n.push(...i);
        }
        if (r.type === editorTypeConstants.blockTypes.BLOCK) {
          let o = new Set();
          e.traverse(r.id, e => !o.has(e) && (o.add(e), true));
          n = n.concat(Array.from(o));
        }
        n.push(o);
        return n;
      }, []);
    }
    return e => !i || o.includes(e);
  }
  function E(e) {
    if (editorSelectionUtilities.hasTextSelection(e)) {
      let o = lastElementHelper.getLastElement(e);
      if (o.type === editorTypeConstants.blockTypes.TEXT && o.selection?.start === 0 && o.selection?.end === 0) {
        return e.slice(0, e.length - 1);
      }
    }
    return e;
  }
  require.d(exports, {
    createBlockSelectionMap: function () {
      return b;
    },
    filterSelectedBlockIds: function () {
      return v;
    },
    trimEmptyLastTextBlock: function () {
      return E;
    },
    createActiveEditorRangeResolver: function () {
      return y;
    },
    createBlockSelectionFilter: function () {
      return _;
    }
  });
}