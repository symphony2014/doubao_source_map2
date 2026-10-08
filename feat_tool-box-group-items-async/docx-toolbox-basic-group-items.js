// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'editorConstantsEnums'
// - Resolved require(47828) to 'editor-constants-enums'
// - Renamed variable 'r' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'i' to 'editorUiComponentConstants'
// - Resolved require(516341) to 'editor-ui-component-constants'
// - Renamed variable 'a' to 'docxSlashCommandMenuUtils'
// - Resolved require(856066) to 'docx-slash-command-menu-utils'
// - Renamed variable 'c' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'u' to 'docxToolboxMenuItemGenerator'
// - Resolved require(473143) to 'docx-toolbox-menu-item-generator'
// - Renamed variable 'd' to 'turnIntoMenuItemsGenerator'
// - Resolved require(973878) to 'turn-into-menu-items-generator'
// - Updated imported property 'w' to 'uiComponentTypes' (module 516341)
// - Updated imported property 'b' to 'uiComponentConstants' (module 516341)
// - Updated imported property 'iY' to 'agendaCodeTypes' (module 433991)
// - Updated imported property 'v$' to 'calloutOnlyTypes' (module 433991)
// - Updated imported property 'vf' to 'filterValidMenuItems' (module 856066)
// - Updated imported property 'Z' to 'generateToolboxMenuItems' (module 473143)
// - Updated imported property 'bL' to 'MenuItemTypes' (module 47828)
// - Updated imported property 'ZP' to 'generateTurnIntoMenuItems' (module 973878)
// - Updated imported property 'Bg' to 'blockTypeCategory' (module 914193)
// - Updated imported property 'ao' to 'blockInsertPanelCategories' (module 914193)
// - Updated imported property 'W3' to 'blockOperationMenuTypes' (module 914193)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 488207
         */
module.exports = function (module, exports, require) {
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docxSlashCommandMenuUtils = require("docx-slash-command-menu-utils") /*id: 856066*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxMenuItemGenerator = require("docx-toolbox-menu-item-generator") /*id: 473143*/;
  var turnIntoMenuItemsGenerator = require("turn-into-menu-items-generator") /*id: 973878*/;
  let s = [{
    shouldBreak: e => {
      let {
        options: l,
        context: o
      } = e;
      return (l == null ? undefined : l.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu && (l == null || !l.isAppend) && (!o.blocks.some(e => [...docBlockTypeConstants.agendaCodeTypes, ...docBlockTypeConstants.calloutOnlyTypes].includes(e.type)) || !!(l == null ? undefined : l.isTableBlockMenu));
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.BlockMenu, editorUiComponentConstants.uiComponentTypes.Add, editorUiComponentConstants.uiComponentTypes.Slash],
    group: e => {
      let {
        context: l,
        options: o
      } = e;
      return {
        key: editorUiComponentConstants.uiComponentConstants.Basic,
        groupName: t("CreationDoc_DocX_Basic_Title"),
        children: function (e, l) {
          let o = editorUiComponentConstants.uiComponentConstants.Basic;
          let {
            panelType: r = editorUiComponentConstants.uiComponentTypes.BlockMenu,
            isAppend: c
          } = l;
          if (r === editorUiComponentConstants.uiComponentTypes.Slash) {
            return docxSlashCommandMenuUtils.filterValidMenuItems([docxToolboxMenuItemGenerator.generateToolboxMenuItems], e, l);
          } else {
            return [{
              name: editorUiComponentConstants.uiComponentConstants.Basic,
              type: editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems,
              canSelected: false,
              children: r !== editorUiComponentConstants.uiComponentTypes.BlockMenu || c ? docxToolboxMenuItemGenerator.generateToolboxMenuItems(e, {
                ...l,
                panelType: r,
                showTooltip: true,
                category: o
              }) : turnIntoMenuItemsGenerator.generateTurnIntoMenuItems(e, {
                ...l,
                panelType: r,
                showTooltip: true,
                supportToggle: true,
                category: o
              })
            }];
          }
        }(l, {
          ...o,
          category: editorUiComponentConstants.uiComponentConstants.Basic
        })
      };
    },
    slashPriority: docxEditorConstantsConfig_1.blockTypeCategory.BASIC,
    addPriority: docxEditorConstantsConfig_1.blockInsertPanelCategories.BASIC,
    blockMenuPriority: docxEditorConstantsConfig_1.blockOperationMenuTypes.BASIC
  }];
  exports.default = s;
  require.r(exports);
}