// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'handleEnterKey'
// - Renamed export 'u' to 'handleShortcutEnter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 519795
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var shortcutCommandHandler = require("shortcut-command-handler") /*id: 849511*/;
  var docKeyboardEnterHandler = require("doc-keyboard-enter-handler") /*id: 96380*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionUtils = require("editor-revision-utils") /*id: 465369*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  async function B(e) {
    let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    e.preventDefault();
    let {
      blockManager: l,
      selectionAPI: n,
      currentTargetViewFilterEmpty: o
    } = e;
    let d = o[0];
    shortcutCommandHandler.executeShortcut(e);
    let {
      parent: c
    } = l.getBlockModelByBlockId(d.id);
    if (!c) {
      return;
    }
    let s = {
      knownContext: {
        toggle: false,
        updateSelection: i
      },
      selObjects: docBlockEditActions.getDeleteTargets(n.getSelection(), l)
    };
    let p = l.editorAPI.getService(commandServiceProviderName.commandServiceName, {
      optional: true
    });
    await (p == null ? undefined : p.triggerCommand(docEditorCommandConstants.turnIntoText, {
      extraInfo: s
    }));
  }
  async function k(e) {
    e.preventDefault();
    let i = e.currentTargetViewFilterEmpty.find(e => !!e);
    let {
      model: l
    } = i;
    let {
      parent: r
    } = l;
    let B = r == null ? undefined : r.parent;
    if (!r || docKeyboardEnterHandler.triggerEnterEvent(i.editor, e.shortcutContext)) {
      return;
    }
    let {
      blockManager: k,
      editorContextService: {
        fold: m
      }
    } = e;
    let {
      zoneState: b
    } = i.model;
    let S = k.getBlockViewByBlockId(r.id);
    let E = docxBlockValidatorUtils_1.isListBlockType(S.type) || S.type === docBlockTypeConstants.blockTypeConstants.TASK;
    let I = docBlockTypeConstants.pageGridBlockTypes.includes(S.type);
    let h = i.id;
    let w = r.position + 1;
    let {
      isEmpty: C
    } = i.model;
    if (C && E && B) {
      await k.applyTransaction("keyevent:list:enter", e => {
        let i = r.children.slice(l.position + 1);
        documentBlockOperations.removeBlockItems(e, [l, ...i]);
        documentBlockOperations.moveChildren(e, l.recordId, l.children.length, i.map(e => e.recordId));
        documentBlockOperations.moveChildren(e, B.recordId, w, [l.recordId]);
      });
      h = B.children[w].id;
    } else if (C && I) {
      var O;
      if ((O = k.editorAPI.getService(commandServiceProviderName.commandServiceName, {
        optional: true
      })) !== null && O !== undefined) {
        O.triggerCommand(docEditorCommandConstants.turnIntoText, {
          extraInfo: {
            knownContext: {
              toggle: false
            }
          }
        });
      }
    } else {
      let n = i.model.getSelection();
      if (!n) {
        return;
      }
      let o = b.split(n);
      let r = [o[0].toAttributeText(), o[1].toAttributeText()];
      let d = editorRangeUtilities.isAtStart(n);
      let a = "";
      let u = {};
      let y = {
        extra: {
          applyContext: u
        }
      };
      let [B, E] = editorRevisionUtils.createRevisionInfo(k, e.selectionAPI);
      if (B && E) {
        editorRevisionUtilities.addRevisionContext(y, E);
      }
      await k.applyTransaction("keyevent:list:enter", e => {
        if (d) {
          let n = {};
          if (orderedBlockUtils.isBlockHeader(l)) {
            Object.assign(n, {
              seq: l.record.get(["seq"])
            });
          }
          let o = k.createSnapshot(i.type, {
            text: r[0],
            ...n
          });
          if (orderedBlockUtils.isOrderedBlock(l)) {
            e.replace(l.recordId, ["seq"], "auto");
            orderedBlockUtils.getUnorderedBlocks(k, i.id, orderedBlockConstants.OrderDirection.DOWN).forEach(i => {
              let l = k.getRecordByBlockId(i.blockId);
              e.replace(l.id, ["seq"], "auto");
            });
          }
          if (B) {
            o.revisions = [B];
          }
          e.replace(l.recordId, ["text"], r[1]);
          editorTextBlockUtilities.insertBlockWithMarks(e, S.record.id, l.position, o);
        } else {
          u.isListEnterAtMiddle = true;
          a = docBlockEditActions.handleEnterInsert({
            blockManager: k,
            model: l,
            op: e,
            fold: m,
            splitedData: r,
            applyContext: u
          }).newRecordId;
          if (B) {
            editorRevisionUtils.upsertRevision(k, e, l.record, B);
          }
        }
      }, {
        ...y
      });
      if (a) {
        h = k.getBlockIdsByRecordId(a)[0];
      }
    }
    docKeyboardEnterHandler.afterEnterHandler(e, h, true);
  }
  require.d(exports, {
    handleEnterKey: function () {
      return k;
    },
    handleShortcutEnter: function () {
      return B;
    }
  });
}