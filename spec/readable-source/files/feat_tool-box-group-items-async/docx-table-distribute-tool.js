// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'tableDistributeTool'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 333822
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e) {
    let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      extraProps: {
        popoverStatus: h,
        cellBlocks: k
      }
    } = e;
    let {
      panelType: m
    } = o;
    let {
      blockManager: v,
      blocks: g,
      selectionAPI: T
    } = e;
    let _ = docxTableLayoutUtils.findClosestTable(v, g[0].id);
    if (h === tableLayoutConstants.layoutDirection.ROW || !_ || docxTableLayoutUtils.isSameColumn(k)) {
      return null;
    }
    let C = v.getRecordByBlockId(_)?.snapshot;
    let f = e => {
      let l = 0;
      let o = Object.keys(e);
      o.forEach(o => {
        let n = e[o][tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH];
        l += n;
      });
      let n = Math.ceil(l / o.length);
      return o.reduce((e, l) => {
        e[l] = {
          [tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH]: n
        };
        return e;
      }, {});
    };
    let y = (e, l) => {
      let o = Object.keys(e);
      if (l.size === o.length) {
        return f(e);
      }
      let r = o.reduce((o, n) => {
        if (l.has(n)) {
          o[n] = {
            [tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH]: e[n][tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH]
          };
        }
        return o;
      }, {});
      return Object.assign(deepCloneWrapper_1.deepClone(e), f(r));
    };
    let I = () => {
      let {
        [tableLayoutConstants.blockPropertyKeys.COLUMN_SET]: e
      } = C;
      let l = new Set();
      if (k) {
        k.forEach(e => {
          let [, o] = docxTableLayoutUtils.splitCellId(e.cellId);
          l.add(o);
        });
      }
      let o = y(e, l);
      tableActionHelper.resizeTableColumns({
        blockId: _,
        blockManager: v,
        [tableLayoutConstants.blockPropertyKeys.COLUMN_SET]: o
      });
    };
    let B = m === editorUiComponentConstants.uiComponentTypes.PopoverMenu;
    let x = {
      name: "tableDistributeColumn",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.TableDistributeColumn
      },
      icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.DistributeColumn],
      action: () => {
        I();
        docEditorActionMap.collectBlockEvent({
          selectionAPI: T,
          blocks: [{
            id: _
          }],
          blockManager: v,
          source: B ? docEditorActionMap.uiComponentTypes.web_block_bubble_toolbar : docEditorActionMap.uiComponentTypes.web_menu_panel,
          click: docEditorActionMap.uiActionTypes.block_action,
          actionType: docEditorActionMap.actionConstants.equalize_table_column_width,
          target: "none"
        });
      }
    };
    if (B) {
      x.tip = reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: t("LarkCCM_Docx_Table_DistributeColumn_Tooltip")
        })
      });
    } else {
      x.text = t("LarkCCM_Docx_Table_DistributeColumn_Menu");
    }
    return x;
  }
  require.d(exports, {
    tableDistributeTool: function () {
      return h;
    }
  });
}