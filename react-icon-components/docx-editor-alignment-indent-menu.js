// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getAlignmentAndIndentMenuItems'
// - Renamed export 'e' to 'getIndentTips'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 869372
         */
module.exports = function (module, exports, require) {
  var leftAlignmentOutlinedIcon = require("left-alignment-outlined-icon") /*id: 734392*/;
  var centerAlignIconComponent = require("center-align-icon-component") /*id: 869195*/;
  var reactRightAlignmentIcon = require("react-right-alignment-icon") /*id: 723852*/;
  var increaseIndentIcon = require("increase-indent-icon") /*id: 637008*/;
  var maybeOutlinedIcon = require("maybe-outlined-icon") /*id: 48253*/;
  var iconReduceIndentOutlined = require("icon-reduce-indent-outlined") /*id: 713067*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxIndentValidationAndTips = require("docx-indent-validation-and-tips") /*id: 434696*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var getEditorBlockModels = require("get-editor-block-models") /*id: 796769*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSelectionValidation = require("block-selection-validation") /*id: 72949*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function y(e, r) {
    let o;
    let l = e && r.getBlockViewByBlockIdNotCheck(e);
    let n = "";
    let a = false;
    if (l) {
      let i = docxIndentValidationAndTips.validateIndentOperation(l, {
        mouse: true
      });
      let c = docxIndentValidationAndTips.isTextIndentEnabled({
        blockManager: r,
        indentResult: i,
        blockId: e,
        source: docxIndentValidationAndTips.checkListBlockAbove.web_menu_panel,
        needShowBlockTips: false,
        withAnimation: false
      });
      if (c) {
        n = c.tips;
        a = c.showTips;
        o = c.collectorParams;
      }
    }
    return {
      indentTips: n,
      shouldShowIndentTips: a,
      toastViewCollectorParams: o
    };
  }
  function E(e, r = {}) {
    let {
      blockManager: o,
      fold: u
    } = e;
    let {
      panelType: E,
      notShowTab: I,
      isPageTitle: B
    } = r;
    let A = getEditorBlockModels.getBlockModels(e, E);
    if (!A.length) {
      return [];
    }
    let M = blockSelectionValidation.excludeSpecialTypes({
      blocks: A,
      blockManager: o,
      recursive: !B,
      fold: u
    });
    let L = blockSelectionValidation.excludeCellTypes({
      blocks: A,
      blockManager: o,
      recursive: !B,
      fold: u
    });
    let O = function (e, {
      panelType: r,
      isPageTitle: o,
      category: i,
      showTooltip: c
    } = {}) {
      let {
        blockManager: s,
        selectionAPI: u,
        fold: h
      } = e;
      let v = getEditorBlockModels.getBlockModels(e, r);
      let x = blockSelectionValidation.excludeSpecialTypes({
        blocks: v,
        blockManager: s,
        recursive: !o,
        fold: h
      });
      let T = e => {
        let r = false;
        for (let o of x) {
          if (o.record.snapshot.align !== e && o.record.snapshot.type !== docBlockTypeConstants.blockTypeConstants.PENDING) {
            s.applyTransaction("changeAlign", r => {
              r.replace(o.record.id, ["align"], e);
            });
            r = true;
          }
        }
        return r;
      };
      let k = e => (r, o, l) => {
        if (T(e)) {
          docEditorActionMap.collectBlockEvent({
            source: l,
            actionObject: docxEditorBlockMetadataUtils.getSelectionScopeType(u),
            blockManager: s,
            actionType: `text_align_${e}`,
            blocks: x.map(e => ({
              id: e.id
            })),
            category: i
          });
        }
      };
      let y = x.filter(e => s.hasBlockViewByBlockId(e.id)).map(e => s.getBlockViewByBlockId(e.id));
      let E = blockSelectionValidation.getBlockAlignments(y);
      let I = blockSelectionValidation.getCommonValue(E);
      return [{
        name: "align left",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.AlignLeft
        },
        tip: c ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.textAlignLeft
          })
        }) : undefined,
        tipPlacement: o ? "top" : "right",
        text: blockSelectionValidation.filterBlockToolbar(t("editorbar.align_left"), r, o),
        active: I === docBlockTypeConstants.alignmentConstants.LEFT,
        closeAfterClick: !docxEditorConstantsConfig_1.blockToolbarComponentTypes.has(r),
        icon: reactJsxRuntimeCoreReexport.jsx(leftAlignmentOutlinedIcon.LeftAlignmentOutlinedIcon, {}),
        action: k(docBlockTypeConstants.alignmentConstants.LEFT)
      }, {
        name: "align center",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.AlignCenter
        },
        tip: c ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.textAlignCenter
          })
        }) : undefined,
        tipPlacement: o ? "top" : "right",
        text: blockSelectionValidation.filterBlockToolbar(t("editorbar.align_center"), r, o),
        active: I === docBlockTypeConstants.alignmentConstants.CENTER,
        closeAfterClick: !docxEditorConstantsConfig_1.blockToolbarComponentTypes.has(r),
        icon: reactJsxRuntimeCoreReexport.jsx(centerAlignIconComponent.CenterAlignIcon, {}),
        action: k(docBlockTypeConstants.alignmentConstants.CENTER)
      }, {
        name: "align right",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.AlignRight
        },
        tip: c ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.textAlignRight
          })
        }) : undefined,
        text: blockSelectionValidation.filterBlockToolbar(t("editorbar.align_right"), r, o),
        tipPlacement: o ? "top" : "right",
        active: I === docBlockTypeConstants.alignmentConstants.RIGHT,
        closeAfterClick: !docxEditorConstantsConfig_1.blockToolbarComponentTypes.has(r),
        icon: reactJsxRuntimeCoreReexport.jsx(reactRightAlignmentIcon.RightAlignmentIcon, {}),
        action: k(docBlockTypeConstants.alignmentConstants.RIGHT)
      }];
    }(e, r);
    let N = function (e) {
      let {
        panelType: o,
        showTooltip: l
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        blockManager: n,
        selectionAPI: a
      } = e;
      let u = getEditorBlockModels.getBlockModels(e, o);
      let m = [editorUiComponentConstants.uiComponentTypes.Add, editorUiComponentConstants.uiComponentTypes.BlockMenu].includes(o);
      let f = blockSelectionValidation.canInsertBefore(u);
      let {
        indentTips: b,
        shouldShowIndentTips: E,
        toastViewCollectorParams: I
      } = y(u[0]?.id, n);
      let B = (e, r) => {
        let o = m ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : a.getSelection();
        let l = e ? docEditorCommandConstants.commandTab : docEditorCommandConstants.unTabCommand;
        let i = docEditorActionMap.commandActionMap[l];
        let c = o.filter(e => n.hasBlockViewByBlockId(e.id)).map(e => n.getBlockViewByBlockId(e.id));
        n.editorAPI.getService(commandServiceProviderName.commandServiceName).triggerCommand(l, {
          selection: o
        });
        docEditorActionMap.collectBlockEvent({
          actionType: i,
          blocks: c,
          blockManager: n,
          source: r,
          click: docEditorActionMap.uiActionTypes.block_action,
          actionObject: a.isSingleTextSelection(o) ? docBlockConstants.scopeTypes.TEXT : docBlockConstants.scopeTypes.BLOCK,
          actionValue: {
            value1: "true"
          }
        });
      };
      return [{
        name: "increase indentation",
        closeBeforeClick: true,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.IncreaseIndentation
        },
        text: t("CreationDoc_Docs_Tool_promote"),
        icon: reactJsxRuntimeCoreReexport.jsx(increaseIndentIcon.IncreaseIndentIcon, {}),
        tip: f ? l && reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.commandTab
          })
        }) : E && b,
        tipPlacement: "right",
        forceShowTip: f && l || E,
        suffix: E && reactJsxRuntimeCoreReexport.jsx("span", {
          className: "panel-menu-item-question__container",
          children: reactJsxRuntimeCoreReexport.jsx(maybeOutlinedIcon.MaybeOutlinedIcon, {
            className: "panel-menu-item-icon__question"
          })
        }),
        action: (e, r, o) => B(true, o),
        disabled: !f,
        onMouseEnter: () => {
          if (b) {
            n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_view", I);
          }
        }
      }, {
        name: "reduce indentation",
        closeBeforeClick: true,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.ReduceIndentation
        },
        text: t("CreationDoc_Docs_Tool_demote"),
        icon: reactJsxRuntimeCoreReexport.jsx(iconReduceIndentOutlined.ReduceIndentIcon, {}),
        tip: l ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.unTabCommand
          })
        }) : undefined,
        tipPlacement: "right",
        action: (e, r, o) => B(false, o),
        disabled: !blockSelectionValidation.canInsertBlock(u)
      }];
    }(e, r);
    if (E === editorUiComponentConstants.uiComponentTypes.BlockToolbar || I || B) {
      return O;
    } else if (M.length === 0 && L.length !== 0) {
      return N;
    } else {
      return [...O, {
        name: "align divider",
        type: editorConstantsEnums.MenuItemTypes.Divider,
        canSelected: false
      }, ...N];
    }
  }
  require.d(exports, {
    getAlignmentAndIndentMenuItems: function () {
      return E;
    },
    getIndentTips: function () {
      return y;
    }
  });
}