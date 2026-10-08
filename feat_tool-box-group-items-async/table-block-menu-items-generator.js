// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateTableBlockMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 586852
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxAiGridPicker = require("docx-ai-grid-picker") /*id: 832681*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  var docxTableDistributeTool = require("docx-table-distribute-tool") /*id: 333822*/;
  var tableHeaderActions = require("table-header-actions") /*id: 698908*/;
  var asyncToolboxGroupItemsHandler = require("async-toolbox-group-items-handler") /*id: 75033*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function C(e, l = {}) {
    let {
      panelType: o,
      isAppend: C,
      isInlineInput: f,
      isTableBlockMenu: y
    } = l;
    if (o === editorUiComponentConstants.uiComponentTypes.BlockMenu && !C && !f && y) {
      return function (e, l = {}) {
        let {
          blocks: o
        } = e;
        let i = [];
        if (o.length !== 1 || o[0].type !== docBlockTypeConstants.blockTypeConstants.TABLE || !o[0].id) {
          return null;
        }
        let a = o[0].id;
        [tableLayoutConstants.layoutDirection.ROW, tableLayoutConstants.layoutDirection.COLUMN].forEach(l => {
          let {
            behavior: r,
            curHeaderValue: c,
            icon: u,
            text: p,
            defaultAction: b,
            guideInfo: h
          } = tableHeaderActions.getTableHeaderConfig(e, a, l);
          i.push({
            name: `table-header-${l}`,
            type: editorConstantsEnums.MenuItemTypes.MenuItemWithSwitch,
            extra: {
              behavior: r
            },
            text: p,
            icon: u,
            checked: c,
            action: () => {
              b();
              docEditorActionMap.collectBlockEvent({
                selectionAPI: e.selectionAPI,
                blocks: o,
                blockManager: e.blockManager,
                source: docEditorActionMap.uiComponentTypes.web_menu_panel,
                click: docEditorActionMap.uiActionTypes.block_action,
                actionType: docEditorActionMap.layoutHeaderMap[l],
                actionValue: {
                  value1: String(!c)
                }
              });
            },
            onSwitch: emptyExportFunction.emptyFunction,
            closeAfterClick: false,
            guideInfo: h
          });
        });
        let c = docxTableDistributeTool.tableDistributeTool(e, l);
        if (c) {
          i.push(c);
        }
        return i;
      }(e, l);
    } else {
      return function (e, {
        panelType: l,
        isAppend: o,
        isInlineInput: n,
        isTableBlockMenu: k,
        category: m
      } = {}) {
        let {
          blockManager: g,
          blocks: C,
          extraProps: f
        } = e;
        let y = docBlockViewUtils.getBlockEdge(C, o);
        if (!y || docxTableLayoutUtils.isInCellParent(y, g) && (!o && !n || !k) || docQuoteContainerOps.findParentQuote(g, y.id)) {
          return null;
        }
        let I = l === editorUiComponentConstants.uiComponentTypes.Slash;
        let B = null;
        let x = async function (e = 2, r = 3) {
          let i = n ? editorZoneRangeUtils.getBlockMarkRange({
            blocks: C,
            isAppend: o,
            mark: f.mark
          }) : undefined;
          if (B) {
            B.send();
          }
          B = null;
          await asyncToolboxGroupItemsHandler.handleToolboxGroupItems({
            blocks: C,
            blockManager: g,
            panelType: l,
            eRange: i,
            mark: f.mark,
            ranks: {
              rowCount: e,
              colCount: r
            }
          });
        };
        let w = function (l, o = false) {
          B = docEditorActionMap.collectBlockEvent({
            actionType: docEditorActionMap.actionConstants.add_table,
            blocks: C,
            blockManager: e.blockManager,
            source: l,
            click: docEditorActionMap.uiActionTypes.block_action,
            selectionAPI: e.selectionAPI,
            sendImmediately: o,
            category: m,
            mark: f == null ? undefined : f.mark
          });
        };
        let M = docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.TABLE);
        let A = docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.TABLE];
        if (I) {
          return {
            name: "table",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.InsertBlock
            },
            text: M,
            icon: A,
            keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.TABLE],
            action: (e, l, o) => {
              if (o) {
                w(o, true);
              }
              x();
            }
          };
        }
        let E = () => {
          var e;
          w(l === editorUiComponentConstants.uiComponentTypes.Add ? docEditorActionMap.uiComponentTypes.add_panel : docEditorActionMap.uiComponentTypes.web_menu_panel, true);
          if ((e = g.events) !== null && e !== undefined) {
            e.emit("behavior.block-menu-item-click", {
              name: "table"
            });
          }
        };
        return {
          name: "table",
          type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent,
          extra: {
            behavior: editorConstantsEnums.EditorActions.InsertBlock
          },
          text: M,
          icon: A,
          keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.TABLE],
          onHover: w,
          component: e => reactJsxRuntimeCoreReexport.jsx(docxAiGridPicker.GridDimensionPicker, {
            title: t("editorbar.table.des"),
            ...e,
            onClick: E,
            onInsert: x
          })
        };
      }(e, l);
    }
  }
  require.d(exports, {
    generateTableBlockMenuItems: function () {
      return C;
    }
  });
}