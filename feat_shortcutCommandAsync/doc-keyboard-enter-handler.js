// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'sc' to 'insertTextBlock'
// - Renamed export 'Ld' to 'triggerEnterEvent'
// - Renamed export 'nm' to 'handleEnterKey'
// - Renamed export 'mI' to 'afterEnterHandler'
// - Renamed export 'BP' to 'handleEnterIos'
// - Renamed export 'nq' to 'handleEnterStandard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 96380
         */
module.exports = function (module, exports, require) {
  var n;
  var keyboardSyntheticEventClass_1 = require("keyboard-synthetic-event-class_1") /*id: 886246*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  function s(e, i, l) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var l = e[Symbol.toPrimitive];
      if (l !== undefined) {
        var n = l.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = l;
    }
    return e;
  }
  (n = {})[n.System = 0] = "System";
  n[n.Handware = 1] = "Handware";
  n[n.CustomInput = 2] = "CustomInput";
  let p = n;
  var f = new class {
    constructor() {
      s(this, "status", p.System);
      s(this, "keyboardStatusChange", e => {
        if (e) {
          this.status = e.keyBoardType;
        }
      });
      s(this, "getStatus", () => this.status);
      s(this, "isIPadLarkHandware", () => !!browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && !!browserEnvironmentDetectionUtils.browserDetector.isIPad && this.getStatus() === p.Handware);
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
        window.flow.biz.keyboard.getType({
          callback: this.keyboardStatusChange
        });
      }
    }
  }();
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var keyboardActionConstants = require("keyboard-action-constants") /*id: 171499*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorRevisionUtils = require("editor-revision-utils") /*id: 465369*/;
  var editorRevisionOperationsHelper = require("editor-revision-operations-helper") /*id: 882925*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  async function x(e) {
    if (browserEnvironmentDetectionUtils.browserDetector.isIOS || browserEnvironmentDetectionUtils.browserDetector.isIPad && !f.isIPadLarkHandware()) {
      await R(e);
      return;
    }
    await _(e);
  }
  async function _(e) {
    let {
      blockManager: i,
      currentTargetViewFilterEmpty: l,
      selectionAPI: n,
      shortcutContext: d
    } = e;
    let c = l[0];
    let {
      model: a
    } = c;
    let u = c.model.getSelection();
    if (!u) {
      return;
    }
    if (c.revising) {
      if (u.isCollapsed()) {
        let e = n.getSelection();
        let l = editorRevisionAddHandler.getInheritRevision(i, e);
        if (l) {
          let [e, i] = l;
          let n = editorRevisionUtilities.stripRevIdString(e);
          c.model.replaceEditorText(u, "\n", {
            [e]: i
          }, {
            extra: {
              revisionContext: {
                revisionId: n,
                type: editorRevisionConstants.diffOperationMap.ADD
              }
            }
          });
        }
      } else {
        let e = [editorRangeUtilities.toSelectionObject(u)];
        let {
          revision: l,
          completeAdditiveRevision: n,
          hasCompleteAdditiveRevision: o
        } = editorRevisionOperationsHelper.getRevisionInfo(i, e);
        if (o) {
          let [e, i] = n;
          let l = editorRevisionUtilities.stripRevIdString(e);
          let o = editorRevisionUtilities.parseJsonSafe(i);
          if (o) {
            c.model.replaceEditorText(u, "\n", {
              [e]: i
            }, editorRevisionUtilities.createRevContext(l, o.type));
          }
        } else {
          let [e, i] = l;
          let n = editorRevisionUtilities.stripRevIdString(e);
          let o = editorRevisionUtilities.parseJsonSafe(i);
          if (o) {
            c.model.setAttributes(u, {
              [e]: i
            }, {
              withEnter: true,
              ...editorRevisionUtilities.createRevContext(n, o.type)
            });
            let [l, d] = editorRevisionOperationsHelper.createReplaceAddOpEntry(n);
            let a = new contentStructureDelta.ContentDelta({
              zoneId: c.model.zoneId
            }).retain(u.start.offset).insert("\n", {
              [l]: d
            });
            c.model.apply(a, editorRevisionUtilities.createRevContext(n, o.type));
          }
        }
      }
    } else {
      c.model.replaceEditorText(u, "\n", {});
    }
    let s = u.toPosition();
    await c.blockManager.layoutManager.waitForNextPaint();
    a.setSelection({
      ...s,
      start: s.start + 1,
      len: 0
    }, true);
    let p = d == null ? undefined : d.event;
    if (!p) {
      return;
    }
    let f = new keyboardSyntheticEventClass_1.KeyboardSyntheticEvent(p, p.target);
    c.editor.triggerEditorEvent(keyboardActionConstants.KeyboardActions.AFTER_SHIFT_ENTER, f);
  }
  function L(e, i) {
    if (!i || !i.event) {
      throw Error("KeyboardEvent 不能为空");
    }
    let l = i.event;
    let n = new keyboardSyntheticEventClass_1.KeyboardSyntheticEvent(l, l.target);
    let {
      shouldStop: r,
      shouldPrevent: d
    } = e.triggerEditorEvent(keyboardActionConstants.KeyboardActions.ENTER, n);
    return r && d;
  }
  function M(e, i, l = false, n = false) {
    let {
      blockManager: r,
      selectionAPI: d,
      shortcutContext: c,
      currentTargetViewFilterEmpty: [a]
    } = e;
    if (i) {
      let e = r.getBlockViewByBlockId(i);
      if (editorTextBlockUtilities.isTextEditable(e)) {
        d.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          id: i,
          selection: {
            start: 0,
            end: 0
          }
        }]);
        if (l) {
          e.focus();
        }
        if (n) {
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.ADJUST_VIEWPORT);
        }
      }
    }
    let u = c.event;
    let s = new keyboardSyntheticEventClass_1.KeyboardSyntheticEvent(u, u.target);
    a.editor.triggerEditorEvent(keyboardActionConstants.KeyboardActions.AFTER_ENTER, s);
  }
  async function R(e) {
    let i;
    let {
      currentTargetViewFilterEmpty: l,
      shortcutContext: n,
      blockManager: o,
      preventDefault: r,
      editorContextService: a,
      selectionAPI: s
    } = e;
    let {
      fold: p
    } = a;
    let f = l[0];
    let {
      model: v
    } = f;
    let {
      parent: m
    } = v;
    let b = m == null ? undefined : m.parent;
    if (!m || L(f.editor, n)) {
      return;
    }
    r();
    let S = f.id;
    let E = o.getBlockViewByBlockId(m.id);
    if (m.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER && v.zoneState.isEmpty() && m.children[m.children.length - 1].id === f.id) {
      var C;
      await ((C = o.editorAPI.getService(commandServiceProviderName.commandServiceName, {
        optional: true
      })) === null || C === undefined ? undefined : C.triggerCommand(docEditorCommandConstants.turnIntoQuoteContainer, {
        extraInfo: {
          knownContext: {
            toggle: true
          }
        }
      }));
      return;
    }
    let A = docBlockTypeConstants.getAllowedBlockTypes().includes(E.type);
    let {
      zoneState: x
    } = v;
    let _ = !v.children.length && x.isEmpty();
    let R = !v.nextSibling && v.previousSibling;
    if (_ && R && A && b) {
      i = o.applyTransaction("keyevent:text:enter", e => {
        documentBlockOperations.removeBlockItems(e, [f.model]);
        documentBlockOperations.moveChildren(e, b.recordId, m.position + 1, [f.record.id]);
      });
      S = b.children[m.position + 1].id;
    } else {
      let e;
      let l;
      let n;
      let r = f.model.getSelection();
      if (!r) {
        return;
      }
      let a = x.split(r);
      let g = [a[0].toAttributeText(), a[1].toAttributeText()];
      if (editorRangeUtilities.isAtStart(r)) {
        e = documentNodeUtils_2.createDocumentNode({
          text: g[0]
        });
      }
      let B = {};
      let [k, b] = editorRevisionUtils.createRevisionInfo(o, s, {
        allowNonCursorSelection: true
      });
      if (k && b) {
        editorRevisionUtilities.addRevisionContext(B, b);
      }
      let E = "";
      if (!r.isCollapsed()) {
        [l, n] = editorRevisionDeleteOperations.processDeleteRevision(o, [f], s, {
          isSingleTextSelection: s.isSingleTextSelection()
        });
        if (n) {
          editorRevisionUtilities.addRevisionContext(B, n);
        }
      }
      i = o.applyTransaction("keyevent:text:enter", i => {
        if (l) {
          editorRevisionDeleteOperations.createDeleteRevisionWithSelection(o, i, l, {
            useTextApply: true
          });
          let e = new activeEditorRange.ActiveEditorRange({
            editor: f.editor,
            start: r.start,
            end: r.start,
            state: x
          });
          let n = f.model.zoneState.split(e);
          g = [n[0].toAttributeText(), n[1].toAttributeText()];
        }
        if (e) {
          if (k) {
            e.revisions = [k];
          }
          flowSyncDeltaOperations.editWithLineManager(i, v.record, g[1]);
          documentBlockOperations.insertNewChildren(i, m.recordId, v.position, [e]);
          E = v.recordId;
        } else {
          E = docBlockEditActions.handleEnterInsert({
            blockManager: o,
            model: v,
            op: i,
            fold: p,
            splitedData: g
          }).newRecordId;
          if (k) {
            editorRevisionUtils.upsertRevision(o, i, v.record, k);
          }
        }
      }, {
        ...B
      });
      S = o.getBlockIdsByRecordId(E)[0];
    }
    await i;
    M(e, S, false, true);
  }
  async function P(e, i) {
    let {
      currentTargetViewFilterEmpty: l,
      blockManager: n,
      preventDefault: o
    } = e;
    let r = l[0];
    if (docBlockTypeConstants.codeOnlyTypes.includes(r.type)) {
      return;
    }
    o();
    let {
      model: d
    } = r;
    let {
      parent: a,
      position: u
    } = d;
    if (a && docBlockTypeConstants.gridTableTypes.includes(a.type)) {
      return;
    }
    let s = [...docBlockTypeConstants.listBlockTypes, docBlockTypeConstants.blockTypeConstants.QUOTE].includes(r.type);
    if (a) {
      let e = "";
      await n.applyTransaction("keyevent:text:inserttext", l => {
        [e] = documentBlockOperations.insertNewChildren(l, a.record.id, u + i, [n.createSnapshot(s ? r.type : docBlockTypeConstants.blockTypeConstants.TEXT)]);
      });
      let l = n.getBlockViewsByRecordId(e)[0];
      if (l && editorTextBlockUtilities.isTextEditable(l)) {
        l.focus();
      }
    }
  }
  require.d(exports, {
    insertTextBlock: function () {
      return P;
    },
    triggerEnterEvent: function () {
      return L;
    },
    handleEnterKey: function () {
      return x;
    },
    afterEnterHandler: function () {
      return M;
    },
    handleEnterIos: function () {
      return R;
    },
    handleEnterStandard: function () {
      return _;
    }
  });
}