// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'insertBlockHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 235064
         */
module.exports = function (module, exports, require) {
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var documentBlockInsertHandler = require("document-block-insert-handler") /*id: 285269*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  let u = e => [editorUiComponentConstants.uiComponentTypes.Slash, editorUiComponentConstants.uiComponentTypes.MENTION, editorUiComponentConstants.uiComponentTypes.LINK_TRANSFORM].includes(e);
  let h = e => browserDetectUtils.platformInfo.mobile ? stubBooleanFunctions.alwaysFalseCheck(e) ? e : editorUiComponentConstants.uiComponentTypes.MOBILE_ADD_MENU : e;
  let f = async e => {
    let {
      blocks: n,
      isTurnIntoBlock: i,
      blockData: o,
      transactionOptions: l
    } = e;
    let f = docBlockViewUtils.getEffectiveView(n, e.panelType === editorUiComponentConstants.uiComponentTypes.BlockMenu);
    if (!f) {
      editorBlockUtilities.logInsertBlockFailure(docxEditorConstantsConfig_1.noBlockConstants.NO_BLOCK);
      return [undefined, []];
    }
    let {
      model: {
        position: v,
        parent: p
      },
      blockManager: g
    } = f;
    if (!p) {
      editorBlockUtilities.logInsertBlockFailure(docxEditorConstantsConfig_1.noBlockConstants.NO_PARENT, g);
      return [undefined, []];
    }
    let {
      panelType: m,
      mark: S,
      focusType: y,
      createDataCallback: w,
      afterTransactionApplied: I,
      afterTransactionAccepted: B,
      eRange: k
    } = e;
    let b = h(m);
    let C = editorBlockUtilities.getAdjustedMarkRange(f, b === editorUiComponentConstants.uiComponentTypes.MENTION, k, S);
    let E = editorBlockUtilities.shouldShowPlaceholder(f, C, i, b);
    let _ = !!b && !!u(b) && (!!k || !!S);
    let T = i && b === editorUiComponentConstants.uiComponentTypes.Slash ? [f.model.recordId] : undefined;
    if (b === editorUiComponentConstants.uiComponentTypes.LINK_TRANSFORM) {
      editorBlockUtilities.setSelectionToBlock(g, f.id, [C[1], C[1]], true);
    }
    let [N, O] = await documentBlockInsertHandler.calculateFocusTarget({
      block: f,
      parentModel: p,
      position: E ? v : v + 1,
      eRange: C,
      isCurrentLine: E,
      isClearRange: _,
      createDataCallback: w,
      afterTransactionApplied: I,
      afterTransactionAccepted: B,
      focusType: y,
      childRecordIds: T,
      blockData: o,
      transactionOptions: l
    });
    return [N, O];
  };
  require.d(exports, {
    insertBlockHandler: function () {
      return f;
    }
  });
}