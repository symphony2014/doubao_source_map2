// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'layoutResizableConstants'
// - Resolved require(216694) to 'layout-resizable-constants'
// - Renamed variable 'a' to 'docxEditorConstantsConfig'
// - Resolved require(302915) to 'docx-editor-constants-config'
// - Renamed variable 'l' to 'docxRootEditableProvider'
// - Resolved require(728331) to 'docx-root-editable-provider'
// - Renamed variable 's' to 'tableDraggableUiConstants'
// - Resolved require(886815) to 'table-draggable-ui-constants'
// - Renamed variable 'c' to 'tableResizerProviderNames'
// - Resolved require(26263) to 'table-resizer-provider-names'
// - Renamed variable 'd' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'u' to 'docBlockMenuLayoutConstants'
// - Resolved require(166815) to 'doc-block-menu-layout-constants'
// - Renamed variable 'h' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'p' to 'docPreviewSyncGetter'
// - Resolved require(243296) to 'doc-preview-sync-getter'
// - Renamed variable 'g' to 'docxBlockValidatorUtils_1'
// - Resolved require(869432) to 'docx-block-validator-utils_1'
// - Renamed variable 'f' to 'docTaskBlockFlags'
// - Resolved require(46259) to 'doc-task-block-flags'
// - Renamed variable 'm' to 'docxClickBetweenBlockProvider'
// - Resolved require(795381) to 'docx-click-between-block-provider'
// - Renamed variable 'v' to 'docxClickBottomProvider'
// - Resolved require(600088) to 'docx-click-bottom-provider'
// - Renamed variable 'b' to 'docxDragDropConstants'
// - Resolved require(253882) to 'docx-drag-drop-constants'
// - Renamed variable 'y' to 'getProviderName'
// - Resolved require(804610) to 'get-provider-name'
// - Renamed variable 'k' to 'docComponentFeatureFlags'
// - Resolved require(475581) to 'doc-component-feature-flags'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'v1' to 'headingTypeArray' (module 433991)
// - Updated imported property '$' to 'getSyncedRefBlock' (module 243296)
// - Updated imported property 'dT' to 'dragClassName' (module 253882)
// - Updated imported property 'BH' to 'draggableProvider' (module 253882)
// - Updated imported property 'Oc' to 'menuTriggerClass' (module 166815)
// - Updated imported property 'd6' to 'tableMenuTriggerClass' (module 166815)
// - Updated imported property 'Y' to 'resizableDragging' (module 216694)
// - Updated imported property 'RM' to 'isFeishuTodoEnabled' (module 46259)
// - Updated imported property 'Yl' to 'isTaskIndentEnabled' (module 46259)
// - Updated imported property 'cd' to 'isListBlockType' (module 869432)
// - Updated imported property 'R0' to 'maxUndoSteps' (module 302915)
// - Updated imported property 'bO' to 'lineHeightLarge' (module 302915)
// - Updated imported property 'iC' to 'updateGlobalExts' (module 135760)
// - Updated imported property 'W' to 'getDocxRootProvider' (module 728331)
// - Updated imported property 'fA' to 'draggableProviderName' (module 886815)
// - Updated imported property 'M' to 'tablePageResizerProviderName' (module 26263)
// - Updated imported property 'F' to 'clickBottomProvider' (module 600088)
// - Updated imported property 'e' to 'clickBetweenBlockName' (module 795381)
// - Updated imported property 'l' to 'getProviderName' (module 804610)
// - Updated imported property 'Bn' to 'inlineTriggerProvider' (module 914193)
// - Updated imported property 'yO' to 'okrxSearchProvider' (module 914193)
// - Updated imported property 'YD' to 'okrSearchProvider' (module 914193)
// - Updated imported property 'qr' to 'templateSearchProvider_1' (module 914193)
// - Updated imported property 'J2' to 'isSyncedBlockOpt3' (module 475581)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 129009
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutResizableConstants = require("layout-resizable-constants") /*id: 216694*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxRootEditableProvider = require("docx-root-editable-provider") /*id: 728331*/;
  var tableDraggableUiConstants = require("table-draggable-ui-constants") /*id: 886815*/;
  var tableResizerProviderNames = require("table-resizer-provider-names") /*id: 26263*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docBlockMenuLayoutConstants = require("doc-block-menu-layout-constants") /*id: 166815*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docPreviewSyncGetter = require("doc-preview-sync-getter") /*id: 243296*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var docxClickBetweenBlockProvider = require("docx-click-between-block-provider") /*id: 795381*/;
  var docxClickBottomProvider = require("docx-click-bottom-provider") /*id: 600088*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var getProviderName = require("get-provider-name") /*id: 804610*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  let I = [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
  function E(e, r) {
    let i = docPreviewSyncGetter.getSyncedRefBlock(r.config);
    let E = {
      dragCls: [docxDragDropConstants.dragClassName, docBlockMenuLayoutConstants.menuTriggerClass, "selected:not(.table-cell-block-host)", docBlockMenuLayoutConstants.tableMenuTriggerClass],
      disabledAncestorSelectors: [".docx-history-container", ".xgplayer-slider", ".drive-cover-dialog-mask", ".drive-cover-dialog-mask-close", `.${layoutResizableConstants.resizableDragging}`, ".is-in-css-full-screen", ".preview-card-with-video-dialog"],
      container: {
        [docBlockTypeConstants.blockTypeConstants.PAGE]: "all",
        [docBlockTypeConstants.blockTypeConstants.GRID]: "all",
        [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN]: {
          excludes: [docBlockTypeConstants.blockTypeConstants.OKRX]
        },
        [docBlockTypeConstants.blockTypeConstants.CALLOUT]: "all",
        [docBlockTypeConstants.blockTypeConstants.TABLE]: "all",
        [docBlockTypeConstants.blockTypeConstants.CELL]: "all",
        [docBlockTypeConstants.blockTypeConstants.OKR]: "all",
        [docBlockTypeConstants.blockTypeConstants.OKRX]: "all",
        [docBlockTypeConstants.blockTypeConstants.OBJECTIVE]: "all",
        [docBlockTypeConstants.blockTypeConstants.KEY_RESULT]: "all",
        [docBlockTypeConstants.blockTypeConstants.PROGRESS]: "all",
        [docBlockTypeConstants.blockTypeConstants.AGENDA]: "all",
        [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM]: {
          excludes: [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM]
        },
        [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT]: "all",
        [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]: {
          excludes: [docBlockTypeConstants.blockTypeConstants.CALLOUT]
        },
        [docBlockTypeConstants.blockTypeConstants.TASK]: "all",
        [docBlockTypeConstants.blockTypeConstants.AI]: "all",
        [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]: {
          excludes: I
        },
        [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE]: {
          excludes: I
        }
      },
      unDraggable: [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.GRID],
      unDroppable: [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT],
      gap: 36,
      isDraggingMenuTrigger: e => !!e && !!e.className && !!e.className.includes(docBlockMenuLayoutConstants.menuTriggerClass),
      canDropToChild: e => !!docTaskBlockFlags.isFeishuTodoEnabled() && !!docTaskBlockFlags.isTaskIndentEnabled() && e.type === docBlockTypeConstants.blockTypeConstants.TASK || (![docBlockTypeConstants.blockTypeConstants.TEXT, ...docBlockTypeConstants.headingTypeArray].includes(e.type) || e.children.length !== 0 || !!docxBlockValidatorUtils_1.isListBlockType(e.parent.type)) && docxBlockValidatorUtils_1.isListBlockType(e.type),
      pageTop: docxEditorConstantsConfig.maxUndoSteps,
      pageLeft: docxEditorConstantsConfig.lineHeightLarge
    };
    docxEditorCore.updateGlobalExts([...(i ? [] : [docxRootEditableProvider.getDocxRootProvider]), [docxDragDropConstants.draggableProvider, E], [tableDraggableUiConstants.draggableProviderName, {
      dragCls: ["table-header--selected"],
      gap: 36,
      pageTop: docxEditorConstantsConfig.maxUndoSteps,
      pageLeft: docxEditorConstantsConfig.lineHeightLarge
    }], tableResizerProviderNames.tablePageResizerProviderName, docxClickBottomProvider.clickBottomProvider, docxClickBetweenBlockProvider.clickBetweenBlockName, getProviderName.getProviderName, docxEditorConstantsConfig_1.inlineTriggerProvider, docxEditorConstantsConfig_1.okrxSearchProvider, docxEditorConstantsConfig_1.okrSearchProvider, ...(docComponentFeatureFlags.isSyncedBlockOpt3() ? [] : [docxEditorConstantsConfig_1.templateSearchProvider_1])]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return E;
    }
  });
}