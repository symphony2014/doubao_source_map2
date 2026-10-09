// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'browserEnvDetectionUtil'
// - Resolved require(355358) to 'browser-env-detection-util'
// - Renamed variable 'o' to 'docxBlockUtils_1'
// - Resolved require(138224) to 'docx-block-utils_1'
// - Renamed variable 'r' to 'editorUiComponentConstants'
// - Resolved require(516341) to 'editor-ui-component-constants'
// - Renamed variable 'd' to 'docBlockViewUtils'
// - Resolved require(521101) to 'doc-block-view-utils'
// - Renamed variable 'c' to 'blockInsertionHandler'
// - Resolved require(235064) to 'block-insertion-handler'
// - Renamed variable 'a' to 'blockFocusStates'
// - Resolved require(324508) to 'block-focus-states'
// - Renamed variable 'u' to 'aiBlockTypeUtils'
// - Resolved require(173943) to 'ai-block-type-utils'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'p' to 'documentNodeFactory_1'
// - Resolved require(877890) to 'document-node-factory_1'
// - Renamed variable 'f' to 'syncUrlBlockUtils'
// - Resolved require(299195) to 'sync-url-block-utils'
// - Renamed variable 'g' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'y' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'v' to 'docxShortcutCommandUtils'
// - Resolved require(804220) to 'docx-shortcut-command-utils'
// - Renamed variable 'T' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'B' to 'editorRevisionHandlers'
// - Resolved require(977441) to 'editor-revision-handlers'
// - Updated imported property 'S7' to 'addDividerCommand' (module 293676)
// - Updated imported property 'Nz' to 'isEditorInstance' (module 469443)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'UN' to 'isSyncingActive' (module 299195)
// - Updated imported property 'IW' to 'hasAiBlockInPath' (module 173943)
// - Updated imported property 'Xg' to 'hasParentOfBlockType' (module 138224)
// - Updated imported property 'ZP' to 'browserDetector' (module 355358)
// - Updated imported property 'bO' to 'resolveBlockView' (module 804220)
// - Updated imported property 'jy' to 'getEffectiveView' (module 521101)
// - Updated imported property 'd7' to 'handleAddRevision' (module 977441)
// - Updated imported property 'p' to 'insertBlockHandler' (module 235064)
// - Updated imported property 'w' to 'uiComponentTypes' (module 516341)
// - Updated imported property 'w' to 'focusStates' (module 324508)
// - Updated imported property 'X' to 'createDocumentNode' (module 877890)
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 706287
         */
module.exports = function (module, exports, require) {
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeFactory_1 = require("document-node-factory_1") /*id: 877890*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var docxShortcutCommandUtils = require("docx-shortcut-command-utils") /*id: 804220*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  let k = () => [[docEditorCommandConstants.addDividerCommand, [e => {
    let {
      preventDefaultAndStopEventImmediate: i,
      currentTargetViewFilterEmpty: l,
      selectionAPI: y,
      blockManager: T
    } = e;
    i();
    let k = l[0];
    if (!editorTextBlockUtilities.isEditorInstance(k) || k.type === docBlockTypeConstants.blockTypeConstants.CODE || k.type === docBlockTypeConstants.blockTypeConstants.PAGE || syncUrlBlockUtils.isSyncingActive() && k.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE || aiBlockTypeUtils.hasAiBlockInPath(T, k.id) || [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.PROGRESS].find(e => docxBlockUtils_1.hasParentOfBlockType(k.id, T, e)) && !browserEnvDetectionUtil.browserDetector.isMobile && !browserEnvDetectionUtil.browserDetector.isIPad) {
      return;
    }
    let m = y.isCursor();
    let b = docxShortcutCommandUtils.resolveBlockView(docBlockViewUtils.getEffectiveView(l, true), e);
    let S = {};
    let E = {};
    editorRevisionHandlers.handleAddRevision(T, E, S);
    blockInsertionHandler.insertBlockHandler({
      blocks: [b],
      panelType: m ? editorUiComponentConstants.uiComponentTypes.Add : editorUiComponentConstants.uiComponentTypes.BlockMenu,
      focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      blockData: documentNodeFactory_1.createDocumentNode(E),
      transactionOptions: S
    });
  }, [shortcutCommandGuard.createCommandGuard()]]]];
  let m = () => [...k()];
  var b = m();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    },
    getAsyncCommandRegisterConfigs: function () {
      return m;
    }
  });
}