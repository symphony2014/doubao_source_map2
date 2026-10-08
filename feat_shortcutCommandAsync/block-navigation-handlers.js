// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P9' to 'handleDownArrow'
// - Renamed export 'ai' to 'handleUpArrow'
// - Renamed export 'bE' to 'handleLeftArrow'
// - Renamed export 'x4' to 'handleRightArrow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 225248
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var uiInlineTriggerConstants = require("ui-inline-trigger-constants") /*id: 116204*/;
  var docLauncherBlockNavigation = require("doc-launcher-block-navigation") /*id: 470930*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  async function p(e) {
    let {
      preventDefault: i,
      shouldPropagation: l,
      blockManager: n,
      targetViewFilterEmpty: o
    } = e;
    let r = o[0];
    let d = await v(r, false, n);
    if (d && !docBlockEditActions.checkBlockAction(e, false)) {
      l();
      return;
    }
    if (d) {
      docBlockEditActions.resolveNavTarget(e, r, docStructEnums.DirectionType.UP);
      i();
    }
  }
  async function f(e) {
    let {
      preventDefault: i,
      shouldPropagation: l,
      blockManager: n,
      currentTargetViewFilterEmpty: r,
      targetViewFilterEmpty: a,
      extraInfo: u,
      selectionAPI: p,
      editorContextService: f
    } = e;
    let {
      viewport: g
    } = f;
    let y = a[0];
    let T = r[0];
    let B = await v(y, true, n);
    let {
      isLastNoEmptyBlock: k,
      blockId: m
    } = docLauncherBlockNavigation.getBlockNavStatus(T.id, n);
    if (B && k) {
      docxBlockUtils_1.insertNewLine({
        blockManager: n,
        selectionAPI: p,
        viewport: g,
        blockId: m
      });
      i();
      return;
    }
    if (u.propagationToTableCell || B && !docBlockEditActions.checkBlockAction(e, true)) {
      l();
      return;
    }
    if (B) {
      docBlockEditActions.resolveNavTarget(e, T, docStructEnums.DirectionType.DOWN);
      i();
    }
  }
  function g(e) {
    let {
      targetViewFilterEmpty: i,
      currentTargetViewFilterEmpty: l,
      preventDefault: n,
      shouldPropagation: o
    } = e;
    let r = i[0];
    let d = l[0];
    if (r.id === d.id && !docBlockEditActions.checkBlockAction(e, false)) {
      o();
      return;
    }
    docBlockEditActions.resolveNavTarget(e, d, docStructEnums.DirectionType.LEFT);
    n();
  }
  function y(e) {
    let {
      currentTargetViewFilterEmpty: i,
      targetViewFilterEmpty: l,
      blockManager: n,
      preventDefault: o,
      shouldPropagation: d,
      extraInfo: a
    } = e;
    let u = l[0];
    let p = i[0];
    if (a.propagationToTableCell || u.id === p.id && !docBlockEditActions.checkBlockAction(e, true)) {
      d();
      return;
    }
    n.dispatch(uiInlineTriggerConstants.hideInlineTrigger);
    if (!document.querySelector(".docx-menu-wrapper")) {
      docBlockEditActions.resolveNavTarget(e, p, docStructEnums.DirectionType.RIGHT);
    }
    o();
  }
  async function v(e, i, l) {
    let o = e.model.getSelection();
    if (!o) {
      return false;
    }
    if (!e.blockManager.editable || !editorRangeUtilities.isZoneVertical(o)) {
      return true;
    }
    let r = !i && editorRangeUtilities.isAtFirstLine(o);
    let d = i && editorRangeUtilities.isAtLastLine(o);
    if (o.isCollapsed() && (i ? !d && editorRangeUtilities.isCaretAtEnd(o) : r) && editorRangeUtilities.isCaretVertical(o)) {
      await collaborativeEditingFlowSyncModule._v(0);
      let i = window.getSelection();
      let o = (i == null ? undefined : i.anchorNode) && docxBlockUtils_2.getBlockIdFromNode(i.anchorNode);
      return !o || l.getBlockModelByBlockId(o).recordId !== e.record.id;
    }
    return r || d;
  }
  require.d(exports, {
    handleDownArrow: function () {
      return f;
    },
    handleUpArrow: function () {
      return p;
    },
    handleLeftArrow: function () {
      return g;
    },
    handleRightArrow: function () {
      return y;
    }
  });
}