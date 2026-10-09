// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'createTodoMenuItem'
// - Renamed export 'Z' to 'generateToolboxMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 473143
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var slashCalloutMenuItemGenerator = require("slash-callout-menu-item-generator") /*id: 749485*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var syncedBlockToolboxItem = require("synced-block-toolbox-item") /*id: 642507*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var docxEditorLinkMenuItemFactory = require("docx-editor-link-menu-item-factory") /*id: 912539*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxShortcutCommandUtils = require("docx-shortcut-command-utils") /*id: 804220*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRevisionManager = require("editor-revision-manager") /*id: 835310*/;
  async function L(e) {
    let {
      blockManager: l,
      triggerKey: o,
      addBlockParams: {
        blocks: n,
        blockData: r
      },
      isAppend: i,
      isSlash: a,
      beforeTurnIntoParams: {
        block: u,
        mark: d
      },
      collectParams: {
        source: s,
        category: p
      }
    } = e;
    if (s) {
      docEditorActionMap.collectBlockEvent({
        actionType: docEditorActionMap.blockTransformMap[o],
        blocks: n,
        blockManager: l,
        source: s,
        click: docEditorActionMap.uiActionTypes.block_action,
        actionValue: {
          value1: "true"
        },
        category: p,
        mark: d
      });
    }
    if (i) {
      if (docBlockTypeConstants.calloutQuoteTypes.includes(o)) {
        let e = await documentBlockInsertUtil.insertBlocks({
          blockManager: l,
          blocks: n,
          newBlockType: docBlockTypeConstants.blockTypeConstants.TEXT
        });
        if (e) {
          let n = {
            knownContext: {
              toggle: false
            },
            selObjects: [{
              id: e.id,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: 0,
                end: 0
              }
            }]
          };
          let r = docxShortcutCommandUtils.turnIntoTaskCmd(o);
          l.editorAPI.getService(commandServiceProviderName.commandServiceName).triggerCommand(r, {
            extraInfo: n
          });
          return;
        }
      }
      let e = {};
      let i = {};
      if (o !== docBlockTypeConstants.blockTypeConstants.TEXT) {
        editorRevisionHandlers.handleFormatRev(l, o, r || e, i);
      }
      return documentBlockInsertUtil.insertBlocks({
        blockManager: l,
        blocks: n,
        newBlockType: o,
        blockData: r,
        options: e,
        transactionOptions: i
      });
    }
    let b = editorZoneRangeUtils.createEditorRange(u, d);
    let k = {};
    if (a) {
      editorRevisionManager.getRevisionEntities(u, editorRangeUtilities.getStartLenArray(b), k);
    }
    let v = a ? e => {
      let {
        record: l,
        model: {
          zoneState: o
        }
      } = u;
      let n = o.remove(b).toAttributeText();
      flowSyncDeltaOperations.editWithLineManager(e, l, n);
    } : undefined;
    let {
      start: g
    } = b.toPosition();
    let T = {
      knownContext: {
        toggle: false,
        beforeTurnInto: v,
        beforeTurnIntoApplyOptions: k
      },
      selObjects: [{
        id: u.id,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: g,
          end: g
        }
      }]
    };
    let _ = docxShortcutCommandUtils.turnIntoTaskCmd(o);
    await l.editorAPI.getService(commandServiceProviderName.commandServiceName).triggerCommand(_, {
      extraInfo: T
    });
  }
  var headingLevelSliceUtil = require("heading-level-slice-util") /*id: 627464*/;
  var headingTurnIntoMenuGenerator = require("heading-turn-into-menu-generator") /*id: 892196*/;
  function N(e, l) {
    let {
      turnIntoHandler: o,
      showTooltip: n
    } = l;
    return {
      name: `slash ${e}`,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.TurnIntoHeading
      },
      text: headingTurnIntoMenuGenerator.headingDisplayNames[e],
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[e],
      icon: blockTypeIconMapping.blockIcons[e],
      action: o(e),
      active: false,
      closeAfterClick: true,
      tip: n ? headingTurnIntoMenuGenerator.headingTooltipRenderers[e]() : undefined,
      tipPlacement: "right",
      blockType: e
    };
  }
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  function H(e, {
    panelType: l,
    isAppend: o,
    showTooltip: n,
    category: i
  } = {}) {
    let {
      blockManager: c,
      blocks: u,
      extraProps: s = {}
    } = e;
    let p = docBlockViewUtils.getBlockEdge(u, o);
    if (!p) {
      return null;
    }
    let m = async (e, n) => L({
      blockManager: c,
      triggerKey: e,
      addBlockParams: {
        blocks: u
      },
      isAppend: o,
      isSlash: l === editorUiComponentConstants.uiComponentTypes.Slash,
      beforeTurnIntoParams: {
        block: p,
        mark: s.mark
      },
      collectParams: {
        source: n,
        category: i
      }
    });
    let g = docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.TODO);
    return {
      name: `slash ${docBlockTypeConstants.blockTypeConstants.TODO}`,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      text: g,
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.TODO],
      icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.TODO],
      action: (e, l, o) => m(docBlockTypeConstants.blockTypeConstants.TODO, o),
      active: false,
      closeAfterClick: true,
      tip: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
          handler: docEditorCommandConstants.turnIntoTodo
        }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
          children: ["Markdown: [] ", t("help.siderbar.space")]
        })]
      }) : undefined,
      tipPlacement: "right",
      blockType: docBlockTypeConstants.blockTypeConstants.TODO
    };
  }
  function G(e, l = {}) {
    let o = function (e, {
      isAppend: l,
      showTooltip: o,
      category: n
    } = {}) {
      let {
        blockManager: r,
        blocks: i,
        extraProps: c = {}
      } = e;
      let s = docBlockViewUtils.getBlockEdge(i, l);
      if (!s) {
        return null;
      }
      let p = async (e, o) => L({
        blockManager: r,
        triggerKey: e,
        addBlockParams: {
          blocks: i
        },
        isAppend: l,
        isSlash: true,
        beforeTurnIntoParams: {
          block: s,
          mark: c.mark
        },
        collectParams: {
          source: o,
          category: n
        }
      });
      return {
        name: "slash text",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: t("etherpad.text"),
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.TEXT],
        icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.TEXT],
        action: (e, l, o) => p(docBlockTypeConstants.blockTypeConstants.TEXT, o),
        active: false,
        closeAfterClick: true,
        tip: o ? reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoText
          })
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.TEXT
      };
    }(e, l);
    let B = function (e, {
      panelType: l,
      isAppend: o,
      showTooltip: n,
      category: i
    } = {}) {
      let {
        blockManager: a,
        blocks: c,
        extraProps: u = {}
      } = e;
      let d = docBlockViewUtils.getBlockEdge(c, o);
      if (!d) {
        return [];
      }
      let s = async (e, n) => L({
        blockManager: a,
        triggerKey: e,
        addBlockParams: {
          blocks: c
        },
        isAppend: o,
        isSlash: l === editorUiComponentConstants.uiComponentTypes.Slash,
        beforeTurnIntoParams: {
          block: d,
          mark: u.mark
        },
        collectParams: {
          source: n,
          category: i
        }
      });
      let p = e => (l, o, n) => s(e, n);
      let b = [docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9].map(e => N(e, {
        showTooltip: n,
        turnIntoHandler: p
      }));
      let k = headingLevelSliceUtil.sliceByHeadingLevel(a, b);
      return [...[docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3].map(e => N(e, {
        showTooltip: n,
        turnIntoHandler: p
      })), ...k];
    }(e, l);
    let x = function (e, {
      panelType: l,
      isAppend: o,
      showTooltip: n,
      category: i
    } = {}) {
      let {
        blockManager: c,
        blocks: u,
        extraProps: s = {}
      } = e;
      let p = docBlockViewUtils.getBlockEdge(u, o);
      if (!p) {
        return [];
      }
      let m = async (e, n) => L({
        blockManager: c,
        triggerKey: e,
        addBlockParams: {
          blocks: u
        },
        isAppend: o,
        isSlash: l === editorUiComponentConstants.uiComponentTypes.Slash,
        beforeTurnIntoParams: {
          block: p,
          mark: s.mark
        },
        collectParams: {
          source: n,
          category: i
        }
      });
      return [{
        name: `slash ${docBlockTypeConstants.blockTypeConstants.ORDERED}`,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.ORDERED),
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.ORDERED],
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.ORDERED],
        action: (e, l, o) => m(docBlockTypeConstants.blockTypeConstants.ORDERED, o),
        active: false,
        closeAfterClick: true,
        tip: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoOrdered
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: 1. ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.ORDERED
      }, {
        name: `slash ${docBlockTypeConstants.blockTypeConstants.BULLET}`,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.BULLET),
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.BULLET],
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.BULLET],
        action: (e, l, o) => m(docBlockTypeConstants.blockTypeConstants.BULLET, o),
        active: false,
        closeAfterClick: true,
        tip: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoBullet
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: - ", t("help.siderbar.space"), " ", t("help.siderbar.or"), " * ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.BULLET
      }];
    }(e, l);
    let w = H(e, l);
    let M = function (e, {
      showTooltip: l,
      category: o,
      panelType: n
    } = {}) {
      let {
        blockManager: r,
        blocks: i,
        extraProps: g = {}
      } = e;
      if (i.length < 1) {
        return null;
      } else {
        return {
          name: "slash divider",
          type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
          extra: {
            behavior: editorConstantsEnums.EditorActions.InsertBlock
          },
          text: t("common.divider"),
          keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.DIVIDER],
          icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.DIVIDER],
          action: (l, a, u) => {
            docEditorActionMap.collectBlockEvent({
              selectionAPI: e.selectionAPI,
              source: u,
              blockManager: r,
              actionType: docEditorActionMap.actionConstants.add_divider,
              blocks: i,
              category: o,
              mark: g.mark
            });
            let d = {};
            let b = r.createSnapshot(docBlockTypeConstants.blockTypeConstants.DIVIDER);
            editorRevisionHandlers.handleAddRevision(r, b, d);
            blockInsertionHandler.insertBlockHandler({
              blocks: i,
              panelType: n,
              mark: g == null ? undefined : g.mark,
              focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
              blockData: b,
              transactionOptions: d
            });
          },
          active: false,
          tip: l ? reactJsxRuntimeCoreReexport.jsxs("div", {
            children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
              handler: docEditorCommandConstants.addDividerCommand
            }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
              children: ["Markdown: --- ", t("help.siderbar.or"), " ***"]
            })]
          }) : undefined,
          tipPlacement: "right",
          blockType: docBlockTypeConstants.blockTypeConstants.DIVIDER
        };
      }
    }(e, l);
    let A = slashCalloutMenuItemGenerator.generateCalloutMenuItem(e, l);
    let E = syncedBlockToolboxItem.getSyncedBlockItem(e, l);
    let D = function (e, {
      panelType: l,
      isAppend: o,
      showTooltip: n,
      category: i
    } = {}) {
      let {
        blockManager: c,
        blocks: u,
        extraProps: s = {}
      } = e;
      let p = docBlockViewUtils.getBlockEdge(u, o);
      if (docBlockTreeUtils.hasParentOfType(p.model, [docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]) || !o && docQuoteContainerOps.isQuoteSupported(p.model)) {
        return null;
      }
      let m = async (e, n) => {
        L({
          blockManager: c,
          triggerKey: e,
          addBlockParams: {
            blocks: u
          },
          isAppend: o,
          isSlash: l === editorUiComponentConstants.uiComponentTypes.Slash,
          beforeTurnIntoParams: {
            block: p,
            mark: s.mark
          },
          collectParams: {
            source: n,
            category: i
          }
        });
      };
      return {
        name: `slash ${docBlockTypeConstants.blockTypeConstants.QUOTE}`,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER),
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.QUOTE],
        icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER],
        action: (e, l, o) => m(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, o),
        active: false,
        closeAfterClick: true,
        tip: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoQuoteContainer
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: > ", t("help.siderbar.space")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.QUOTE
      };
    }(e, l);
    let O = function (e, {
      panelType: l,
      isAppend: o,
      showTooltip: n,
      category: i
    } = {}) {
      let {
        blockManager: c,
        blocks: s,
        extraProps: p = {}
      } = e;
      let m = docBlockViewUtils.getBlockEdge(s, o);
      let g = async (e, n) => {
        if (stubBooleanFunctions.alwaysFalseCheck(l)) {
          var a;
          p.mark;
          return;
        }
        return L({
          blockManager: c,
          triggerKey: e,
          addBlockParams: {
            blocks: s,
            blockData: docxCodeBlockUtils.createCodeBlockNode({})
          },
          isAppend: o,
          isSlash: l === editorUiComponentConstants.uiComponentTypes.Slash,
          beforeTurnIntoParams: {
            block: m,
            mark: p.mark
          },
          collectParams: {
            source: n,
            category: i
          }
        });
      };
      return {
        name: `slash ${docBlockTypeConstants.blockTypeConstants.CODE}`,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.InsertBlock
        },
        text: t("LarkCCM_Docs_Menu_CodeBlock"),
        keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.CODE],
        icon: blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.CODE],
        action: (e, l, o) => g(docBlockTypeConstants.blockTypeConstants.CODE, o),
        active: false,
        closeAfterClick: true,
        tip: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
            handler: docEditorCommandConstants.turnIntoCode
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), reactJsxRuntimeCoreReexport.jsxs("span", {
            children: ["Markdown: ", t("CreationDoc_Docs_Codeblock_HotKey_Tab")]
          })]
        }) : undefined,
        tipPlacement: "right",
        blockType: docBlockTypeConstants.blockTypeConstants.CODE
      };
    }(e, l);
    let S = docxEditorLinkMenuItemFactory.createLinkMenuItem(e, l);
    if ((l == null ? undefined : l.panelType) === editorUiComponentConstants.uiComponentTypes.Add) {
      return [...B, ...x, w, O, D, A, syncedBlockFeatureFlags.isSyncedBlockEnabled() ? E : null, M, S].filter(Boolean);
    } else {
      return [o, ...B, ...x, !browserEnvironmentDetectionUtils.browserDetector.isOpenDoc && docTaskBlockFlags.isFeishuTodoEnabled() && docTaskBlockFlags.isTaskInsertEnabled() ? w : null, O, D, (l == null ? undefined : l.isAppend) && (l == null ? undefined : l.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu ? A : null, (l == null ? undefined : l.isAppend) && (l == null ? undefined : l.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu && syncedBlockFeatureFlags.isSyncedBlockEnabled() ? E : null, M, S].filter(Boolean);
    }
  }
  require.d(exports, {
    createTodoMenuItem: function () {
      return H;
    },
    generateToolboxMenuItems: function () {
      return G;
    }
  });
}