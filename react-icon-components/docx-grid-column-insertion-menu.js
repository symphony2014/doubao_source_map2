// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'getGridColumnInsertionMenu'
// - Renamed export 'fR' to 'isInGridColumn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 412986
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var docxAiGridPicker = require("docx-ai-grid-picker") /*id: 832681*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var turnIntoGrid = require("turn-into-grid") /*id: 518915*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = (e, r) => {
    let o = e.parentId;
    if (!o) {
      return false;
    }
    let l = r.getBlockViewByBlockIdNotCheck(o);
    return !!l && (l.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN || w(l, r));
  };
  function T(e, {
    category: r,
    panelType: o
  } = {}) {
    let {
      blockManager: w,
      blocks: T,
      extraProps: k
    } = e;
    let [Z] = T;
    if (!Z) {
      return [];
    }
    let y = true;
    let E = null;
    let I = o === editorUiComponentConstants.uiComponentTypes.Slash;
    let B = e => {
      if (!I) {
        return;
      }
      let r = editorZoneRangeUtils.createEditorRange(Z, k.mark);
      let o = Z.model.zoneState.remove(r).toAttributeText();
      flowSyncDeltaOperations.editWithLineManager(e, Z.record, o);
    };
    let A = async function (e = 2) {
      w.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_add_panel_click", {
        click: "block_action",
        target: "none",
        category: r,
        action_type: `add_${docBlockTypeConstants.blockTypeConstants.GRID_COLUMN}`,
        action_value: JSON.stringify({
          value1: e
        }),
        object_block_data: docxEditorBlockMetadataUtils.getMultipleBlockInfo([Z.id], w)
      });
      return turnIntoGrid.turnIntoGrid({
        blocks: T,
        blockManager: w,
        mark: k.mark,
        panelType: o,
        columnNum: e
      });
    };
    let M = async (o, l, n) => {
      docEditorActionMap.collectBlockEvent({
        selectionAPI: e.selectionAPI,
        source: n,
        blockManager: e.blockManager,
        actionType: docEditorActionMap.actionConstants.add_grid_column,
        blocks: T,
        category: r,
        mark: k == null ? undefined : k.mark
      });
      if (E) {
        await gridColumnLayoutUtils.addGridColumn({
          blockManager: w,
          gridBlockId: E.parent.id,
          columnIndex: E.position + 1,
          transactionName: "addGridColumnBySlash",
          beforeCreate: B,
          highlight: true
        });
        return;
      }
      A();
    };
    let {
      parentGridIsFull: L,
      defaultColCount: O,
      parentColumn: N
    } = function (e, r) {
      let {
        parentId: o
      } = e;
      let l = null;
      let n = 1;
      let a = false;
      let i = [docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE];
      while (o && r.hasBlockModelByBlockId(o)) {
        let e = r.getBlockModelByBlockId(o);
        let c = e.record.snapshot.type;
        if (i.includes(c)) {
          let o = gridColumnLayoutUtils.getGridColumnAncestry(e.id, r);
          if (o) {
            l = o.gridColumnBlock;
            a = true;
            break;
          }
        }
        if (e.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          a = (n = (l = e).parent.children.length) >= docxLayoutConstants_1.configMarginMin;
          break;
        }
        o = e.parent ? e.parent.id : undefined;
      }
      if (syncedReferenceBlockUtils.isSyncedReferenceBlock(r.editorAPI)) {
        let e = syncedReferenceBlockUtils.getSyncedReferenceBlockId(r.editorAPI);
        let o = syncedReferenceBlockUtils.getMainDocxBlockManager(r.editorAPI);
        if (e && o) {
          let r = gridColumnLayoutUtils.getGridColumnAncestry(e, o);
          if (r) {
            l = r.gridColumnBlock;
            a = true;
          }
        }
      }
      return {
        parentGridIsFull: a,
        defaultColCount: n,
        parentColumn: l
      };
    }(Z, w);
    E = N;
    if (!!N && !!L) {
      return [];
    }
    let R = I || O > 1;
    let j = O > 1 ? t("CreationDoc_DocX_Menu_Insert_column_option") : docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.GRID);
    if (R) {
      return [{
        name: "slash grid",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: j,
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.ADD_COLUMN],
        icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.AddColumn],
        action: M,
        key: editorConstantsEnums.BlockTypes.Grid
      }];
    } else {
      return [{
        name: "slash grid",
        type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: j,
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.ADD_COLUMN],
        icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.AddColumn],
        key: editorConstantsEnums.BlockTypes.Grid,
        component: e => reactJsxRuntimeCoreReexport.jsx(docxAiGridPicker.GridDimensionPicker, {
          title: t("CreationDoc_DocX_Column_select"),
          rowSize: 1,
          colSize: 5,
          defaultRowCount: 1,
          defaultColCount: O,
          getContentText: e => String(e),
          ...e,
          onInsert: function () {
            if (arguments.length > 0 && arguments[0] !== undefined) {
              arguments[0];
            }
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            A(e);
          }
        })
      }];
    }
  }
  require.d(exports, {
    getGridColumnInsertionMenu: function () {
      return T;
    },
    isInGridColumn: function () {
      return w;
    }
  });
}