// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'getTableHeaderConfig'
// - Renamed export 'Z' to 'createHeaderMenuItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 698908
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var n = require.p + "static/image/table-header-column.5de7aded.png";
  var r = require.p + "static/image/table-header-row.3360c936.png";
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = function (e, l, o = tableLayoutConstants.layoutDirection.COLUMN) {
    let {
      blockManager: a,
      extraProps: {
        popoverStatus: p
      }
    } = e;
    if (p) {
      o = p;
    }
    let b = o === tableLayoutConstants.layoutDirection.COLUMN;
    let h = a.getRecordByBlockId(l).snapshot;
    let k = {
      [tableLayoutConstants.layoutDirection.COLUMN]: t("LarkCCM_Docx_Table_CancelHeaderColumn_Tooltip"),
      [tableLayoutConstants.layoutDirection.ROW]: t("LarkCCM_Docx_Table_CancelHeaderRow_Tooltip")
    };
    let m = {
      [tableLayoutConstants.layoutDirection.COLUMN]: t("LarkCCM_Docx_Table__SetHeaderColumn_Tooltip"),
      [tableLayoutConstants.layoutDirection.ROW]: t("LarkCCM_Docx_Table_SetHeaderRow_Tooltip")
    };
    let v = {
      [tableLayoutConstants.layoutDirection.COLUMN]: t("LarkCCM_Docx_Table_HeaderColumn_Switch"),
      [tableLayoutConstants.layoutDirection.ROW]: t("LarkCCM_Docx_Table_HeaderRow_Switch")
    };
    let g = {
      [tableLayoutConstants.layoutDirection.COLUMN]: t("LarkCCM_Docx_Table_HeaderColumn_Onboarding"),
      [tableLayoutConstants.layoutDirection.ROW]: t("LarkCCM_Docx_Table_HeaderRow_Onboarding")
    };
    let T = v[o];
    let _ = b ? !!h[tableLayoutConstants.blockPropertyKeys.HEADER_COL] : !!h[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
    let C = b ? docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.HeaderColumn] : docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.HeaderRow];
    let f = b ? editorConstantsEnums.EditorActions.TableSwitchHeaderCol : editorConstantsEnums.EditorActions.TableSwitchHeaderRow;
    let y = _ ? k[o] : m[o];
    return {
      behavior: f,
      curHeaderValue: _,
      icon: C,
      toolTip: y,
      text: T,
      defaultAction: () => tableActionHelper.setTableHeaderLine({
        blockManager: a,
        tableId: l,
        lineType: o,
        newValue: !_
      }),
      guideInfo: {
        imgUrl: b ? n : r,
        desc: g[o]
      }
    };
  };
  function k(e, l) {
    if (l === "") {
      return null;
    }
    let {
      blockManager: o,
      extraProps: {
        cellBlocks: n,
        popoverStatus: r
      },
      selectionAPI: c
    } = e;
    let u = [];
    let d = [];
    let {
      columns_id: k,
      rows_id: m
    } = o.getRecordByBlockId(l).snapshot;
    for (let e = 0; e < n.length; e++) {
      let {
        cellId: l
      } = n[e].props.cellInfo;
      let [o, r] = docxTableLayoutUtils.splitCellId(l);
      let i = k.indexOf(r);
      let a = m.indexOf(o);
      u.push(i);
      d.push(a);
    }
    let v = Array.from(new Set(u));
    let g = Array.from(new Set(d));
    let T = r === "column" ? tableLayoutConstants.layoutDirection.COLUMN : tableLayoutConstants.layoutDirection.ROW;
    let {
      curHeaderValue: _,
      icon: C,
      behavior: f,
      toolTip: y,
      defaultAction: I
    } = h(e, l);
    if ((T !== tableLayoutConstants.layoutDirection.COLUMN || v.length !== 1 || v[0] !== 0) && (T !== tableLayoutConstants.layoutDirection.ROW || g.length !== 1 || g[0] !== 0)) {
      return null;
    } else {
      return {
        name: `table-header-${T}`,
        className: `table-set-header-${T}-button`,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: f
        },
        tip: reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            children: y
          })
        }),
        icon: C,
        active: _,
        closeAfterClick: false,
        action: () => {
          I();
          docEditorActionMap.collectBlockEvent({
            selectionAPI: c,
            blocks: n,
            blockManager: o,
            source: docEditorActionMap.uiComponentTypes.web_block_bubble_toolbar,
            click: docEditorActionMap.uiActionTypes.block_action,
            actionType: docEditorActionMap.layoutHeaderMap[T],
            actionValue: {
              value1: String(!_)
            }
          });
        }
      };
    }
  }
  require.d(exports, {
    getTableHeaderConfig: function () {
      return h;
    },
    createHeaderMenuItem: function () {
      return k;
    }
  });
}