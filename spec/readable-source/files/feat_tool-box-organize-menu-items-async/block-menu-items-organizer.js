// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'a' to 'editorUiComponentConstants'
// - Resolved require(516341) to 'editor-ui-component-constants'
// - Renamed variable 'r' to 'docxToolboxItemGrouper'
// - Resolved require(942452) to 'docx-toolbox-item-grouper'
// - Renamed variable 'i' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 't' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 's' to 'stubBooleanFunctions'
// - Resolved require(871839) to 'stub-boolean-functions'
// - Renamed variable 'h' to 'blockToolboxConfigFilter'
// - Resolved require(169537) to 'block-toolbox-config-filter'
// - Updated imported property 'gB' to 'blockMenuEventConstants' (module 914193)
// - Updated imported property 'w' to 'uiComponentTypes' (module 516341)
// - Updated imported property 'Ul' to 'globalEditorState' (module 267720)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'b' to 'getToolboxGroups' (module 942452)
// - Updated imported property 'Tb' to 'alwaysFalseStub' (module 871839)
// - Updated imported property 'F' to 'filterToolboxByConfig' (module 169537)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-organize-menu-items-async.3c482f1d.js
         * chunkId: 57049
         * moduleId: 481294
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docxToolboxItemGrouper = require("docx-toolbox-item-grouper") /*id: 942452*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  let b = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: l,
        context: n,
        panelType: o,
        options: b
      } = e;
      if (o === editorUiComponentConstants.uiComponentTypes.Add) {
        l.toolboxGroups = function (e, l) {
          let {
            blocks: n
          } = e;
          if (n.length) {
            if (!(l == null ? undefined : l.isAppend)) {
              docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks = n.map(e => ({
                id: e.id,
                type: docxBlockSelectionHandler_1.blockTypes.TEXT,
                selection: {
                  start: 0,
                  end: 0
                }
              }));
            }
            return docxToolboxItemGrouper.getToolboxGroups({
              context: e,
              options: {
                ...l,
                panelType: (l == null ? undefined : l.isAppend) ? editorUiComponentConstants.uiComponentTypes.BlockMenu : editorUiComponentConstants.uiComponentTypes.Add
              },
              sort: (e, l) => (e.addPriority || 0) - (l.addPriority || 0),
              panelType: editorUiComponentConstants.uiComponentTypes.Add
            });
          } else {
            return [];
          }
        }(n, b);
        l.menuProps = {
          showIconColor: true,
          closeAfterMouseLeave: true
        };
      }
    },
    options: {}
  }];
  let d = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: l,
        context: n,
        panelType: o,
        options: b
      } = e;
      if (o === editorUiComponentConstants.uiComponentTypes.BlockMenu) {
        l.toolboxGroups = function (e, l) {
          let {
            blocks: n
          } = e;
          if (n.length === 0) {
            return [];
          } else {
            docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks = n.map(e => ({
              id: e.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            }));
            return docxToolboxItemGrouper.getToolboxGroups({
              context: e,
              options: {
                ...l,
                panelType: editorUiComponentConstants.uiComponentTypes.BlockMenu
              },
              sort: (e, l) => (e.blockMenuPriority || 0) - (l.blockMenuPriority || 0),
              panelType: editorUiComponentConstants.uiComponentTypes.BlockMenu
            });
          }
        }(n, {
          ...b,
          panelType: o
        });
        l.menuProps = {
          showIconColor: false,
          closeAfterMouseLeave: true
        };
      }
    },
    options: {}
  }];
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var blockToolboxConfigFilter = require("block-toolbox-config-filter") /*id: 169537*/;
  let u = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: l,
        context: n,
        panelType: o,
        options: i
      } = e;
      if (o === editorUiComponentConstants.uiComponentTypes.Slash) {
        l.toolboxGroups = docxToolboxItemGrouper.getToolboxGroups({
          context: n,
          options: {
            ...i,
            panelType: editorUiComponentConstants.uiComponentTypes.Slash
          },
          sort: (e, l) => (e.slashPriority || 0) - (l.slashPriority || 0),
          panelType: editorUiComponentConstants.uiComponentTypes.Slash
        });
        l.menuProps = {
          showIconColor: true,
          autoSelect: true
        };
        if (stubBooleanFunctions.alwaysFalseStub()) {
          l.toolboxGroups = blockToolboxConfigFilter.filterToolboxByConfig(l.toolboxGroups);
          l.menuProps.style = {
            overscrollBehaviorY: "contain"
          };
        }
      }
    },
    options: {}
  }];
  var p = [...b, ...d, ...u, {
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: l,
        context: n,
        panelType: o,
        options: i
      } = e;
      if (o === editorUiComponentConstants.uiComponentTypes.PopoverMenu) {
        l.toolboxGroups = docxToolboxItemGrouper.getToolboxGroups({
          context: n,
          options: {
            ...i,
            panelType: editorUiComponentConstants.uiComponentTypes.PopoverMenu
          },
          sort: (e, l) => (e.tablePopoverMenuPriority || 0) - (l.tablePopoverMenuPriority || 0),
          panelType: editorUiComponentConstants.uiComponentTypes.PopoverMenu
        });
      }
    },
    options: {}
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}