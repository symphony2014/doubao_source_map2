// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qu' to 'applyTextHighlight'
// - Renamed export 'hp' to 'createDocComment'
// - Renamed export 'TF' to 'triggerTextToolbar'
// - Renamed export 'as' to 'handleBackspaceKey'
// - Renamed export 'dY' to 'handleAddLinkMobile'
// - Renamed export 'n2' to 'handleTabKey'
// - Renamed export 'OW' to 'executeUntab'
// - Renamed export 'ES' to 'moveCursorToEnd'
// - Renamed export 'sj' to 'handleUntabKey'
// - Renamed export 'Xd' to 'moveBlockDown'
// - Renamed export 'r' to 'moveBlockUp'
// - Renamed export 'um' to 'selectToEnd'
// - Renamed export 'TL' to 'selectFromStart'
// - Renamed export 'IO' to 'handleEnterKey'
// - Renamed export 'qm' to 'applyInlineCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 521599
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docLauncherBlockNavigation = require("doc-launcher-block-navigation") /*id: 470930*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var textHighlightColors = require("text-highlight-colors") /*id: 514350*/;
  var textHighlightColorUtils = require("text-highlight-color-utils") /*id: 229338*/;
  var shortcutCommandConstants = require("shortcut-command-constants") /*id: 159374*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docBlockTraversalUtils = require("doc-block-traversal-utils") /*id: 680152*/;
  var blockTipsConstants = require("block-tips-constants") /*id: 574715*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var translationSelectionUtils = require("translation-selection-utils") /*id: 632706*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  var docxIndentAndFormattingHelper = require("docx-indent-and-formatting-helper") /*id: 436394*/;
  var docxEditorSelectionUtils = require("docx-editor-selection-utils") /*id: 258370*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var blockStateManager = require("block-state-manager") /*id: 9156*/;
  var docxIndentValidationAndTips = require("docx-indent-validation-and-tips") /*id: 434696*/;
  let N = (e, i) => {
    emptyExportFunction.emptyFunction(e, i);
  };
  let D = () => false;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  async function G(e) {
    var l;
    var o;
    let r;
    let c;
    let {
      blockManager: a,
      currentTargetViewFilterEmpty: s,
      selectionAPI: p,
      editorContextService: f
    } = e;
    let {
      fold: T
    } = f;
    let S = documentViewUtils.mapToParentViews(s, a.editorAPI);
    let h = S[0].id;
    let C = a.getBlockModelByBlockId(h);
    let A = C.parent?.id;
    if (((l = C.parent) === null || l === undefined ? undefined : l.record.snapshot.type) === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      let {
        prev: e,
        prevSibling: i
      } = docxEditorSelectionUtils.getPrevSiblingInfo(S, a, A);
      r = e;
      c = i;
    } else if (docQuoteContainerOps.isOnlyChildInQuote(h, a)) {
      r = C.parent.previous;
      c = C.parent.previousSibling;
    } else {
      r = C.previous;
      c = C.previousSibling;
    }
    e.preventDefaultAndStopEventImmediate();
    let x = null;
    if (!e.shortcutContext) {
      let e = S.filter(e => a.hasBlockViewByBlockId(e.id));
      if (e.length > 0) {
        x = e.map(e => ({
          id: e.id,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        }));
      }
    }
    if (A) {
      let i;
      let l = a.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
        optional: true
      });
      if (l && !S.every(e => {
        let o = a.getBlockModelByBlockId(e.id);
        let r = l.canBlockEditAndTryApply(o.parent?.record, o.type, {
          type: "DELETE_CHILD",
          index: o.position
        });
        if (!r) {
          i = o.record;
        }
        return r;
      })) {
        docPreEditChangeIntercept.reportUserOperation({
          op_source: e.shortcutContext ? "keyboard" : docEditorActionMap.uiComponentTypes.add_panel,
          op_type: e.shortcutContext ? "backspace" : "delete",
          edit_type: "DELETE_CHILD",
          interceptedRecord: i
        }, a);
        return;
      }
      let u = a.config.get("revising");
      let s = null;
      let f = null;
      if (u) {
        [s, f] = editorRevisionDeleteOperations.processDeleteRevision(a, S, p);
      }
      let g = false;
      let v = {
        undoSelection: x,
        revisionContext: f,
        applyContext: {
          selectionBeforeApply: p.getSelection()
        }
      };
      if (!u) {
        p.removeAllSelection();
      }
      await a.applyTransaction("keyevent:block:backspace", e => {
        if (u && s) {
          editorRevisionDeleteOperations.createDeleteRevisionWithSelection(a, e, s);
          return;
        }
        g = true;
        S.forEach(i => {
          documentBlockOperations.removeBlockItems(e, [i.model]);
        });
      }, {
        from: collaborativeEditingFlowSyncModule.kq.LOCAL,
        extra: v
      });
      if (u && !g && s) {
        editorRevisionDeleteOperations.applyDeleteRevision(a, p, s);
        return;
      }
      if (r) {
        let e = r.id;
        let i = [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.OKR];
        let l = T.getFoldStateById(e);
        if (l && l.foldedBy) {
          e = l.foldedBy;
        }
        if (c && i.includes((c == null ? undefined : (o = c.record.snapshot.type) === null || o === undefined ? undefined : o.toString()) || "")) {
          e = c.id;
        }
        if (r.type === docBlockTypeConstants.blockTypeConstants.AGENDA && r.previous) {
          e = r.previous.id;
        }
        let d = a.getBlockViewByBlockId(e);
        while (docBlockTraversalUtils.isSpecialBlockType(d.type)) {
          let e = d.id;
          let {
            parentId: i
          } = a.getBlockViewByBlockId(e).props;
          d = a.getBlockViewByBlockId(i);
        }
        while (translationSuffixUtils.isTranslated(d.record.id)) {
          let e = a.getBlockModelByBlockId(d.id).previous;
          if (e) {
            d = a.getBlockViewByBlockId(e.id);
          } else {
            break;
          }
        }
        if (editorTextBlockUtilities.isTextEditable(d) && !editorTextBlockUtilities.isFoldedCodeBlock(d)) {
          let e = d.model.zoneState.totalWidth() - 1;
          p.setSelection([{
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            id: d.id,
            selection: {
              start: e,
              end: e
            }
          }]);
          if (browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
            window.flow.biz.util.showKeyBoard({
              callback: emptyExportFunction.emptyFunction
            });
          }
        } else {
          if ([docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.AGENDA].includes(d.type)) {
            return;
          }
          p.setSelection([{
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK,
            id: d.id
          }]);
        }
        setTimeout(() => {
          docxEditorEventConstantsAndManager.globalEventBus.trigger(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.SCROLL_TO_VIEW, [false]);
        }, 200);
      }
    }
    docxEditorSelectionUtils.setCollectorData(e, shortcutCommandConstants.commandTypes.deleteBlock);
  }
  async function H(e) {
    let {
      currentTargetViewFilterEmpty: i,
      blockManager: l,
      selectionAPI: n
    } = e;
    let o = documentViewUtils.mapToParentViews(i, l.editorAPI);
    let r = [...o].reverse().find(e => !editorTextBlockUtilities.isFoldedCodeBlock(e) && editorTextBlockUtilities.isTextEditable(e));
    if (r) {
      let i = r.model.zoneState.getModelText().length;
      r.model.setSelection({
        start: i,
        len: 0
      }, true);
      e.preventDefault();
    } else {
      let i = l.getBlockModelByBlockId(o[o.length - 1].id);
      let r = i.parent;
      if (!r) {
        return;
      }
      e.preventDefault();
      let d = i.position + 1;
      if (r.type === docBlockTypeConstants.blockTypeConstants.AGENDA) {
        let e = o[o.length - 1].model.children[0];
        if (!e) {
          return;
        }
        let i = e.getText().length;
        n.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          id: e.id,
          selection: {
            start: i,
            end: i
          }
        }]);
        return;
      }
      await l.applyTransaction("keyevent:block:enter", e => {
        documentBlockOperations.insertNewChildren(e, r.recordId, d, [l.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT)]);
      });
      let c = l.getBlockViewByBlockId(r.children[d].id);
      if (editorTextBlockUtilities.isTextEditable(c)) {
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.HIDE_BLOCK_MENU);
        n.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          id: c.id,
          selection: {
            start: 0,
            end: 0
          }
        }]);
      }
    }
  }
  async function X(e, i) {
    e.preventDefault();
    let {
      currentTargetViewFilterEmpty: l,
      blockManager: n,
      selectionAPI: o,
      shortcutContext: r
    } = e;
    let d = documentViewUtils.mapToParentViews(i || l, n.editorAPI);
    let [a] = d;
    let u = docxIndentValidationAndTips.validateIndentOperation(a, {
      mouse: !r
    });
    let s = shortcutCommandConstants.commandTypes.blockTab;
    let p = u === docxIndentValidationAndTips.IndentErrorTypes.BLOCK_INDENT ? "true" : "false";
    if (u === docxIndentValidationAndTips.IndentErrorTypes.BLOCK_INDENT || u === docxIndentValidationAndTips.IndentErrorTypes.INNER_TAB) {
      docLauncherBlockNavigation.indentBlockWithTab(n, o, d);
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
        click: "double_tab_brother_block"
      });
    } else {
      let e = blockStateManager.blockStateStore();
      let {
        showingTips: i,
        blockId: l,
        prevBrotherBlockIds: r
      } = e.getState();
      if (i && l === a.id) {
        n.dispatch(blockTipsConstants.closeBlockTips, [a.id]);
        let i = d.map(e => e.id);
        let l = [...r.reverse(), ...i].map(e => n.getBlockViewByBlockId(e));
        docLauncherBlockNavigation.indentBlockWithTab(n, o, l);
        e.reset();
      } else {
        docxIndentAndFormattingHelper.handleBlockIndent(a, n, u);
      }
    }
    docxEditorSelectionUtils.setCollectorData(e, s, p);
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.TAB_STATUS_CHANGE);
  }
  async function Z(e, i) {
    let {
      parent: o
    } = i[0];
    let r = o == null ? undefined : o.parent;
    if (!o || !r) {
      return {
        result: docStructEnums.BlockStatus.NO_PARENT_OR_GRANDPARENT
      };
    }
    if (!docBlockTypeConstants.getAllowedBlockTypes().includes(o.type)) {
      return {
        result: docStructEnums.BlockStatus.NOT_NESTABLE_BLOCK
      };
    }
    let d = i.map(e => e.record.id);
    let c = i[i.length - 1];
    let u = c.parent;
    let s = [];
    if (u) {
      s = u.children.slice(c.position + 1);
    }
    let p = o.struct;
    let f = o.nextSibling?.struct;
    let g = o.position + 1;
    let {
      blockManager: y,
      editorContextService: {
        fold: v
      }
    } = e;
    await y.applyTransaction("keyevent:block:untab", e => {
      documentBlockOperations.removeBlockItems(e, i);
      documentBlockOperations.removeBlockItems(e, s);
      documentBlockOperations.moveChildren(e, r.record.id, g, d);
      if (s.length > 0) {
        if (docBlockTypeConstants.getAllowedBlockTypes().includes(c.type)) {
          documentBlockOperations.moveChildren(e, c.record.id, c.children.length, s.map(e => e.record.id));
        } else {
          documentBlockOperations.moveChildren(e, r.record.id, g + d.length, s.map(e => e.record.id));
        }
      }
    });
    v.handleBlockShow({
      topAffectedSib: p,
      midAffectedSib: r.children[g]?.struct,
      btmAffectedSib: f
    });
    let T = r.children.slice(g, g + d.length).map(e => e.id);
    return {
      result: docStructEnums.BlockStatus.SUCCESS,
      resultIds: T
    };
  }
  async function z(e) {
    e.preventDefault();
    let {
      blockManager: i,
      selectionAPI: l,
      currentTargetViewFilterEmpty: n
    } = e;
    let o = l.getSelection();
    i.dispatch(blockTipsConstants.closeBlockTips, [n[0].id]);
    let {
      result: r,
      resultIds: d
    } = await Z(e, n.map(e => docxIndentValidationAndTips.getIndentResult(e.model)));
    if (r !== docStructEnums.BlockStatus.SUCCESS) {
      docxEditorSelectionUtils.setCollectorData(e, shortcutCommandConstants.commandTypes.blockTab, "false");
      return;
    }
    docLauncherBlockNavigation.updateSelection(l, i, true, o, d);
    docxEditorSelectionUtils.setCollectorData(e, shortcutCommandConstants.commandTypes.blockTab, "true");
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.TAB_STATUS_CHANGE);
    return Promise.resolve();
  }
  function K(e, i) {
    let {
      blockManager: l,
      selectionAPI: n,
      currentTargetViewFilterEmpty: d
    } = e;
    let c = syncUrlBlockUtils.resolveBlockId(l);
    let {
      children: a
    } = l.getBlockModelByBlockId(c);
    let u = (i ? lastElementHelper.getLastElement(d) : arrayFirstElement.getFirstElement(d)).model;
    while (u.parent && u.parent.id !== c) {
      u = u.parent;
    }
    let p = i ? a.slice(0, u.position + 1) : a.slice(u.position);
    let f = docBlockTraversalUtils.flattenBlockIds(p.map(e => e.id), l);
    docxEditorSelectionUtils.toggleBlockMenu(() => {
      n.setSelection(f);
    }, n);
  }
  function W(e) {
    return K(e, true);
  }
  function $(e) {
    return K(e, false);
  }
  function J(e) {
    e.preventDefault();
    let {
      selectionAPI: i,
      blockManager: l
    } = e;
    let n = l.editorAPI.getService(flowCommentServiceToken.commentServiceToken);
    if (!n.getCommentable()) {
      return;
    }
    let o = i.getSelection();
    let r = translationSelectionUtils.adjustSelectionForTranslation(o, l);
    n.handleCreateDocComment({
      type: contentCommentTypes.CommentType.ContentComment,
      selectedBlocks: r
    });
    i.removeAllSelection();
  }
  function j(e, i) {
    e.preventDefault();
    let l = e.currentTargetViewFilterEmpty.filter(e => editorTextBlockUtilities.isTextEditable(e));
    docxEditorSelectionUtils.applyBlockFormat(e, l, i);
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig_1.textToolbarConstants.TEXT_BLOCK_TOOLBAR);
  }
  function q(e) {
    e.preventDefault();
    let {
      currentTargetViewFilterEmpty: l
    } = e;
    let n = l.filter(e => editorTextBlockUtilities.isTextEditable(e));
    let o = window.User?.id || "";
    let {
      color: r,
      backgroundColor: d
    } = textHighlightColorUtils.getHighlightColorFromSelection(o);
    docxEditorSelectionUtils.applyMultiFormat(e, n, {
      [textHighlightColors.textHighlightBg]: d,
      [textHighlightColors.textHighlight]: r
    }, docxEditorConstantsConfig_1.equationRendererKey);
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig_1.textToolbarConstants.TEXT_BLOCK_TOOLBAR);
  }
  function Q(e) {
    let {
      currentTargetViewFilterEmpty: i
    } = e;
    let l = i.filter(e => editorTextBlockUtilities.isTextEditable(e));
    docxEditorSelectionUtils.applyBlockFormat(e, l, "inlineCode", "true", docxEditorConstantsConfig_1.equationRendererKey);
    docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig_1.textToolbarConstants.TEXT_BLOCK_TOOLBAR);
  }
  function Y(e) {
    let {
      currentTargetViewFilterEmpty: i
    } = e;
    let l = i.filter(e => editorTextBlockUtilities.isTextEditable(e));
    if (l.length > 0) {
      let e = lastElementHelper.getLastElement(l);
      let i = e.model.zoneState.totalWidth();
      e.model.setSelection({
        start: i,
        len: 0
      }, true);
    }
  }
  function ee(e) {
    let {
      blockManager: n,
      selectionAPI: d,
      currentTargetViewFilterEmpty: a,
      editorContextService: {
        fold: u,
        viewport: s
      }
    } = e;
    let [p, f] = docLauncherBlockNavigation.validateSelection(d, a);
    let g = docxEditorSelectionUtils.getBlockModels(a);
    let y = g.map(e => {
      return e.parent?.id;
    });
    let v = arrayFirstElement.getFirstElement(g);
    let T = v.parent;
    let B = lastElementHelper.getLastElement(g);
    let k = T.recordId;
    let m = B.nextSibling?.struct;
    let b = v.previousSibling?.struct;
    let S = Math.max(0, v.position - 1);
    if (!k || Array.from(new Set(y)).length !== 1) {
      return;
    }
    let E = n.applyTransaction("moveblock", e => {
      documentBlockOperations.removeBlockItems(e, g);
      documentBlockOperations.moveChildren(e, k, S, g.map(e => e.recordId));
    });
    u.handleBlockShow({
      topAffectedSib: b,
      midAffectedSib: b,
      btmAffectedSib: m
    });
    let I = T.children.slice(S, S + g.length).map(e => e.id);
    docLauncherBlockNavigation.updateSelection(d, n, f, p, I);
    if (s != null) {
      s.scrollToBlock(arrayFirstElement.getFirstElement(I));
    }
    return E;
  }
  function et(e) {
    let {
      blockManager: n,
      selectionAPI: d,
      currentTargetViewFilterEmpty: a,
      editorContextService: {
        fold: u,
        viewport: s
      }
    } = e;
    let [p, f] = docLauncherBlockNavigation.validateSelection(d, a);
    let g = docxEditorSelectionUtils.getBlockModels(a);
    let y = g.map(e => {
      return e.parent?.id;
    });
    let v = arrayFirstElement.getFirstElement(g);
    let T = v.parent;
    let B = T.recordId;
    let k = Math.min(T.children.length - g.length, v.position + 1);
    if (!B || Array.from(new Set(y)).length !== 1) {
      return;
    }
    let m = lastElementHelper.getLastElement(g).nextSibling?.struct;
    let b = v.previousSibling?.struct;
    let S = n.applyTransaction("moveblock", e => {
      g.forEach(i => {
        e.removeChildren(i.parent.recordId, [i.recordId]);
      });
      e.insertChildren(B, k, g.map(e => e.recordId));
    });
    u.handleBlockShow({
      midAffectedSib: b,
      btmAffectedSib: m
    });
    let E = T.children.slice(k, k + g.length).map(e => e.id);
    docLauncherBlockNavigation.updateSelection(d, n, f, p, E);
    if (s != null) {
      s.scrollToBlock(lastElementHelper.getLastElement(E));
    }
    return S;
  }
  async function ei(e) {
    let {
      selectionAPI: i,
      blockManager: l
    } = e;
    let o = i.getSelection();
    let r = o[0];
    let d = l.getBlockViewByBlockIdNotCheck(r.id);
    if (browserEnvironmentDetectionUtils.browserDetector.isIPad && D() && o.length === 1 && d && d.record.id !== l.rootRecordId) {
      let e = i.isCursor();
      if (e) {
        N(l, i);
      } else {
        emptyExportFunction.emptyFunction(l, i);
      }
      docEditorActionMap.collectBlockEvent({
        actionType: shortcutCommandConstants.commandTypes.addLink,
        sendImmediately: true,
        target: "ccm_doc_mobile_link_edit_page_view",
        blocks: [],
        blockManager: l,
        selectionAPI: i,
        source: docEditorActionMap.uiComponentTypes.content_page,
        click: docEditorActionMap.uiActionTypes.hotkey_action,
        actionObject: docBlockConstants.scopeTypes.BLOCK,
        actionValue: {
          value1: e ? "set_cursor" : "select_area"
        }
      });
    }
  }
  require.d(exports, {
    applyTextHighlight: function () {
      return q;
    },
    createDocComment: function () {
      return J;
    },
    triggerTextToolbar: function () {
      return j;
    },
    handleBackspaceKey: function () {
      return G;
    },
    handleAddLinkMobile: function () {
      return ei;
    },
    handleTabKey: function () {
      return X;
    },
    executeUntab: function () {
      return z;
    },
    moveCursorToEnd: function () {
      return Y;
    },
    handleUntabKey: function () {
      return Z;
    },
    moveBlockDown: function () {
      return et;
    },
    moveBlockUp: function () {
      return ee;
    },
    selectToEnd: function () {
      return $;
    },
    selectFromStart: function () {
      return W;
    },
    handleEnterKey: function () {
      return H;
    },
    applyInlineCode: function () {
      return Q;
    }
  });
}