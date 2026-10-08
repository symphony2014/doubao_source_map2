// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Wq' to 'headingDisplayNames'
// - Renamed export 'ZP' to 'generateHeadingTurnIntoMenuItems'
// - Renamed export 'zv' to 'headingTooltipRenderers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 892196
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var headingLevelSliceUtil = require("heading-level-slice-util") /*id: 627464*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  var docSelectionActionHandler = require("doc-selection-action-handler") /*id: 844209*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = {
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: t("common.first_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: t("common.second_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: t("common.third_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: t("common.forth_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: t("common.fifth_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: t("common.sixth_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: t("common.seventh_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: t("common.eighth_level_heading"),
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: t("common.ninth_level_heading")
  };
  let v = {
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading1,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: # ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading2,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ## ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading3,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ### ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading4,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: #### ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading5,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ##### ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading6,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ###### ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading7,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ####### ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading8,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ######## ", t("help.siderbar.space")]
      })]
    }),
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: e => reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
        handler: docEditorCommandConstants.turnIntoHeading9,
        panelType: e
      }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
        children: ["Markdown: ######### ", t("help.siderbar.space")]
      })]
    })
  };
  function g(e, {
    panelType: l,
    showHn: o = false,
    supportToggle: u = false,
    useModelSelection: s,
    showTooltip: k,
    category: g
  } = {}) {
    let {
      blockManager: T,
      selectionAPI: _,
      blocks: C
    } = e;
    let f = T.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
    let y = editorUiComponentConstants.uiComponentTypes.BlockMenu === l && !s;
    let I = f.getTurnIntoTargetModelsWithSelObjects(y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined);
    let B = e => f.isAllBlockModelsMatchTriggerKey(I, e);
    let x = e => (l, o, r) => {
      let c = u && B(e);
      let s = y ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : undefined;
      let p = (s == null ? undefined : s.length) === 1 && arrayFirstElement.getFirstElement(s).id === arrayFirstElement.getFirstElement(C)?.id && arrayFirstElement.getFirstElement(C)?.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && e !== docBlockTypeConstants.blockTypeConstants.CALLOUT;
      return docSelectionActionHandler.handleBlockAction({
        assignedSelection: s,
        turnIntoService: f,
        context: {
          toggle: c,
          updateSelection: !y
        },
        triggerKey: e,
        isToggle: c,
        source: r,
        blockManager: T,
        selectionAPI: _,
        blocks: C,
        category: g,
        notNeedUpdateSelectionAfterTurnInto: p
      });
    };
    let w = e => function (e, l) {
      let {
        isActive: o,
        turnIntoHandler: n,
        panelType: a,
        showTooltip: c
      } = l;
      return {
        name: e,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.TurnIntoHeading
        },
        text: m[e],
        icon: blockTypeIconMapping.blockIcons[e],
        active: o(e),
        action: n(e),
        tip: c ? v[e](a) : undefined,
        tipPlacement: "right",
        blockType: e
      };
    }(e, {
      isActive: B,
      turnIntoHandler: x,
      showTooltip: k,
      panelType: l
    });
    let M = [docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3].map(w);
    let A = [docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9].map(w);
    let E = o ? A : headingLevelSliceUtil.sliceByHeadingLevel(T, A);
    if (o && E.length > 0) {
      return [...M, {
        name: docBlockTypeConstants.blockTypeConstants.HEADINGN,
        type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren,
        extra: {
          behavior: editorConstantsEnums.EditorActions.DisplaySubMenu
        },
        text: t("CreationDoc_Docs_OtherHeadings_Options"),
        icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.HEADINGN],
        blockType: docBlockTypeConstants.blockTypeConstants.HEADINGN,
        children: E,
        menuProps: {
          closeAfterMouseLeave: true,
          forbiddenInactiveOnMouseLeave: true
        }
      }];
    } else {
      return [...M, ...E];
    }
  }
  require.d(exports, {
    headingDisplayNames: function () {
      return m;
    },
    generateHeadingTurnIntoMenuItems: function () {
      return g;
    },
    headingTooltipRenderers: function () {
      return v;
    }
  });
}