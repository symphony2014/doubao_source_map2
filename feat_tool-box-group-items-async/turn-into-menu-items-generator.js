// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'generateTurnIntoMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 973878
         */
module.exports = function (module, exports, require) {
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var headingTurnIntoMenuGenerator = require("heading-turn-into-menu-generator") /*id: 892196*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  var docSelectionActionHandler = require("doc-selection-action-handler") /*id: 844209*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var docSyncedBlockUtils = require("doc-synced-block-utils") /*id: 478237*/;
  function g(e, l = {}) {
    let o = function (e) {
      let {
        panelType: r,
        useModelSelection: a,
        showTooltip: v,
        category: g
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        blockManager: T,
        selectionAPI: _,
        blocks: C
      } = e;
      let f = T.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      let y = editorUiComponentConstants.uiComponentTypes.BlockMenu === r && !a;
      let I = f.getTurnIntoTargetModelsWithSelObjects(y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined);
      let B = f.isAllBlockModelsMatchTriggerKey(I, docBlockTypeConstants.blockTypeConstants.TEXT);
      let x = y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined;
      let w = (x == null ? undefined : x.length) === 1 && arrayFirstElement.getFirstElement(x).id === arrayFirstElement.getFirstElement(C)?.id && arrayFirstElement.getFirstElement(C)?.type === docBlockTypeConstants.blockTypeConstants.CALLOUT;
      return {
        name: "text",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoText
        },
        text: t("slide.insertText.default"),
        active: B,
        icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.TEXT],
        action: (e, l, o) => docSelectionActionHandler.handleBlockAction({
          assignedSelection: x,
          turnIntoService: f,
          context: {
            toggle: false,
            updateSelection: !y
          },
          triggerKey: docBlockTypeConstants.blockTypeConstants.TEXT,
          isToggle: false,
          source: o,
          blockManager: T,
          selectionAPI: _,
          blocks: C,
          category: g,
          notNeedUpdateSelectionAfterTurnInto: w
        }),
        tip: v ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoText,
            panelType: r
          })
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.TEXT
      };
    }(e, l);
    let g = headingTurnIntoMenuGenerator.generateHeadingTurnIntoMenuItems(e, l);
    let T = function (e, {
      panelType: l,
      supportToggle: o = false,
      useModelSelection: r,
      showTooltip: m,
      category: v
    } = {}) {
      let {
        blockManager: g,
        selectionAPI: T,
        blocks: _
      } = e;
      let C = g.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      let f = editorUiComponentConstants.uiComponentTypes.BlockMenu === l && !r;
      let y = C.getTurnIntoTargetModelsWithSelObjects(f ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined);
      let I = e => C.isAllBlockModelsMatchTriggerKey(y, e);
      let B = e => (l, n, r) => {
        let u = o && I(e);
        let s = f ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined;
        let p = (s == null ? undefined : s.length) === 1 && arrayFirstElement.getFirstElement(s).id === arrayFirstElement.getFirstElement(_)?.id && arrayFirstElement.getFirstElement(_)?.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && e !== docBlockTypeConstants.blockTypeConstants.CALLOUT;
        return docSelectionActionHandler.handleBlockAction({
          assignedSelection: s,
          turnIntoService: C,
          context: {
            toggle: u,
            updateSelection: !f
          },
          triggerKey: e,
          isToggle: u,
          source: r,
          blockManager: g,
          selectionAPI: T,
          blocks: _,
          category: v,
          notNeedUpdateSelectionAfterTurnInto: p
        });
      };
      return [{
        name: "ordered",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoOrder
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.ORDERED),
        active: I(docBlockTypeConstants.blockTypeConstants.ORDERED),
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.ORDERED],
        action: B(docBlockTypeConstants.blockTypeConstants.ORDERED),
        tip: m ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoOrdered,
            panelType: l
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: 1. ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.ORDERED
      }, {
        name: "bullet",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoBullet
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.BULLET),
        active: I(docBlockTypeConstants.blockTypeConstants.BULLET),
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.BULLET],
        action: B(docBlockTypeConstants.blockTypeConstants.BULLET),
        tip: m ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoBullet,
            panelType: l
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: - ", t("help.siderbar.space"), " ", t("help.siderbar.or"), " * ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.BULLET
      }];
    }(e, l);
    let _ = [...g, ...T, function (e) {
      let l;
      let {
        panelType: o,
        supportToggle: r = false,
        useModelSelection: m,
        showTooltip: v = false,
        category: g
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        blockManager: T,
        selectionAPI: _,
        blocks: C
      } = e;
      let f = T.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      let y = editorUiComponentConstants.uiComponentTypes.BlockMenu === o && !m;
      let I = f.getTurnIntoTargetModelsWithSelObjects(y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined);
      let B = e => f.isAllBlockModelsMatchTriggerKey(I, e);
      let x = docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.TODO);
      return {
        name: "todo",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoTodo
        },
        text: x,
        active: B(docBlockTypeConstants.blockTypeConstants.TODO),
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.TODO],
        action: (l = docBlockTypeConstants.blockTypeConstants.TODO, (e, o, n) => {
          let u = r && B(l);
          let s = y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined;
          let p = (s == null ? undefined : s.length) === 1 && arrayFirstElement.getFirstElement(s).id === arrayFirstElement.getFirstElement(C)?.id && arrayFirstElement.getFirstElement(C)?.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && l !== docBlockTypeConstants.blockTypeConstants.CALLOUT;
          return docSelectionActionHandler.handleBlockAction({
            assignedSelection: s,
            turnIntoService: f,
            context: {
              toggle: u,
              updateSelection: !y
            },
            triggerKey: l,
            isToggle: u,
            source: n,
            blockManager: T,
            selectionAPI: _,
            blocks: C,
            category: g,
            notNeedUpdateSelectionAfterTurnInto: p
          });
        }),
        tip: v ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoTodo,
            panelType: o
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: [] ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.TODO
      };
    }(e, l), ...function (e) {
      let l;
      let {
        panelType: o,
        supportToggle: r = false,
        useModelSelection: g,
        inTextualToolbar: T,
        showTooltip: _,
        category: C
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        blockManager: f,
        selectionAPI: y,
        blocks: I
      } = e;
      let B = editorUiComponentConstants.uiComponentTypes.BlockMenu === o && !g;
      let x = f.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      let w = y.getSelection();
      if (o === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar) {
        l = docSyncedBlockUtils.filterNonSyncedBlocks(w, f);
      }
      let M = x.getTurnIntoTargetModelsWithTriggerKeyAndSelObjects(docBlockTypeConstants.blockTypeConstants.CODE, B ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : l);
      let A = x.getTurnIntoTargetModelsWithSelObjects(B ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : l, true);
      let E = !B && y.isTextSelectionAcrossBlocks(w) ? w.reduce((e, l) => {
        let o = f.getBlockModelByBlockIdNotCheck(l.id);
        if (o && !docSyncedBlockUtils.isBlockSyncedSource(l.id, f)) {
          e.push(o);
        }
        return e;
      }, []) : A;
      let D = e => async (l, o, n) => {
        let u = r && o.active;
        let s = B ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined;
        let p = (s == null ? undefined : s.length) === 1 && arrayFirstElement.getFirstElement(s).id === arrayFirstElement.getFirstElement(I)?.id && arrayFirstElement.getFirstElement(I)?.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && e !== docBlockTypeConstants.blockTypeConstants.CALLOUT;
        await docSelectionActionHandler.handleBlockAction({
          assignedSelection: s,
          turnIntoService: x,
          context: {
            toggle: u,
            updateSelection: !B || e === docBlockTypeConstants.blockTypeConstants.CALLOUT && u,
            useModelSelection: B && !u && e === docBlockTypeConstants.blockTypeConstants.CODE
          },
          triggerKey: e,
          isToggle: u,
          source: n,
          blockManager: f,
          selectionAPI: y,
          blocks: I,
          category: C,
          notNeedUpdateSelectionAfterTurnInto: p
        });
      };
      let O = x.canModelsDoTurnInto(A, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
      let L = {
        name: "code",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoCode
        },
        text: t("LarkCCM_Docs_Menu_CodeBlock"),
        active: x.isAllBlockModelsMatchTriggerKey(M, docBlockTypeConstants.blockTypeConstants.CODE),
        icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.CODE],
        action: D(docBlockTypeConstants.blockTypeConstants.CODE),
        tip: _ ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoCode,
            panelType: o
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: ", t("CreationDoc_Docs_Codeblock_HotKey_Tab")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.CODE
      };
      let P = {
        name: "quote",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoQuote
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER),
        active: x.isAllBlockModelsMatchTriggerKey(A, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER),
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER],
        action: D(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER),
        tip: _ ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoQuoteContainer,
            panelType: o
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: > ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER
      };
      let S = {
        name: "callout",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoCallout
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.CALLOUT),
        active: x.isAllBlockModelsMatchTriggerKey(A, docBlockTypeConstants.blockTypeConstants.CALLOUT),
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.CALLOUT],
        action: D(docBlockTypeConstants.blockTypeConstants.CALLOUT),
        tip: _ ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: t("CreationDoc_Docs_CalloutBlock_Tab")
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.CALLOUT,
        closeAfterClick: true
      };
      editorConstantsEnums.MenuItemTypes.MenuItemNormal;
      editorConstantsEnums.EditorActions.TurnIntoCallout;
      editorConstantsEnums.BlockTypes.Synced;
      docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
      x.isAllBlockModelsMatchTriggerKey(A, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
      blockTypeIconMapping.blockIcons[blockTypeIconMapping.syncedBlockColorfulKey];
      D(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
      if (_) {
        t("LarkCCM_Docs_SyncBlock_Button");
      }
      docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
      if (o === editorUiComponentConstants.uiComponentTypes.BlockMenu) {
        let e = [];
        if (x.canModelsDoTurnInto(M, docBlockTypeConstants.blockTypeConstants.CODE)) {
          e.push(L);
        }
        if (O) {
          e.push(P);
        }
        if (x.canModelsDoTurnInto(A, docBlockTypeConstants.blockTypeConstants.CALLOUT)) {
          e.push(S);
        }
        return e;
      }
      if (T && o !== editorUiComponentConstants.uiComponentTypes.TableCell) {
        let e = false;
        let l = {
          name: "divider",
          type: editorConstantsEnums.MenuItemTypes.Divider,
          canSelected: false
        };
        let o = [];
        if (O) {
          if (!e) {
            e = true;
            o.push(l);
          }
          o.push(P);
        }
        if (x.canModelsDoTurnInto(M, docBlockTypeConstants.blockTypeConstants.CODE)) {
          o.unshift(L);
        }
        if (x.canModelsDoTurnInto(E, docBlockTypeConstants.blockTypeConstants.CALLOUT)) {
          if (!e) {
            e = true;
            o.push(l);
          }
          o.push(S);
        }
        return o;
      }
      if (o === editorUiComponentConstants.uiComponentTypes.TableCell && x.canModelsDoTurnInto(M, docBlockTypeConstants.blockTypeConstants.CODE)) {
        return [L];
      } else {
        return [];
      }
    }(e, l)];
    if (l.panelType === editorUiComponentConstants.uiComponentTypes.Add) {
      return _;
    } else {
      return [o, ..._];
    }
  }
  require.d(exports, {
    generateTurnIntoMenuItems: function () {
      return g;
    }
  });
}