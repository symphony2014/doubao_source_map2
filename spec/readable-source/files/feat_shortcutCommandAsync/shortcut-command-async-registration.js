// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'o' to 'docEditorActionMap'
// - Resolved require(987175) to 'doc-editor-action-map'
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'd' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'c' to 'docSelectionActionHandler'
// - Resolved require(844209) to 'doc-selection-action-handler'
// - Renamed variable 'a' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'u' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 's' to 'bookmarkLinkMetadataProcessor_1'
// - Resolved require(339633) to 'bookmark-link-metadata-processor_1'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'v1' to 'headingTypeArray' (module 433991)
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'jY' to 'turnIntoQuoteContainer' (module 293676)
// - Updated imported property 'ez' to 'turnIntoTask' (module 293676)
// - Updated imported property 'XC' to 'modelsTurnIntoCommand' (module 293676)
// - Updated imported property 'uK' to 'minusCommand' (module 293676)
// - Updated imported property 'dR' to 'setInitialSelection' (module 844209)
// - Updated imported property 'qG' to 'updateTextSelection' (module 844209)
// - Updated imported property 'NO' to 'commandActionMap' (module 987175)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'ZP' to 'globalEventBus' (module 267720)
// - Updated imported property 'U3' to 'eventConstants' (module 267720)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 334046
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  var docSelectionActionHandler = require("doc-selection-action-handler") /*id: 844209*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  let p = [docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE];
  let f = shortcutCommandGuard.createCommandGuard();
  let g = e => {
    let {
      currentTargetViewFilterEmpty: i,
      blockManager: l,
      cmdInfo: n
    } = e;
    let d = n.name;
    if (d === docEditorCommandConstants.turnIntoQuoteContainer) {
      return {
        value1: docSelectionActionHandler.setInitialSelection(i, l)(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) ? "false" : "true"
      };
    }
    let a = docEditorActionMap.commandActionMap[d];
    let s = a == null ? undefined : a.split("_").pop();
    let p = docSelectionActionHandler.updateTextSelection(i);
    let f = s && p(s);
    let g = i.every(e => docBlockTypeConstants.headingTypeArray.includes(e.type) && e.record.snapshot.seq) && s === docBlockTypeConstants.blockTypeConstants.ORDERED;
    return {
      value1: f || g ? "false" : "true"
    };
  };
  let y = function (e, i = {}) {
    return async l => {
      let {
        blockManager: o,
        selectionAPI: r,
        preventDefaultAndStopEventImmediate: d,
        extraInfo: c,
        collector: u
      } = l;
      d();
      let p = o.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      await p.handleTurnInto({
        triggerKey: e,
        knownContext: i,
        ...c
      });
      if (browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && r.getSelection().length > 0 && r.isBlockSelection()) {
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
          await new Promise(e => window.setTimeout(() => {
            e();
          }));
        } else {
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.HIDE_BLOCK_MENU);
        }
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
      }
      if (u) {
        u.setExtraData({
          action_value: g(l)
        }, true);
      }
    };
  };
  let v = () => [...p.map(e => [docEditorCommandConstants.turnIntoTask(e), [y(e), [f]]]), [docEditorCommandConstants.modelsTurnIntoCommand, [e => {
    let {
      blockManager: i,
      extraInfo: l,
      preventDefaultAndStopEventImmediate: n
    } = e;
    n();
    return i.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H).handleModelsTurnInto(l);
  }]], [docEditorCommandConstants.minusCommand, [y(docBlockTypeConstants.blockTypeConstants.BULLET), [f]], {
    selectionType: "block"
  }]];
  let T = () => [...v()];
  var B = T();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return B;
    },
    getAsyncCommandRegisterConfigs: function () {
      return T;
    }
  });
}