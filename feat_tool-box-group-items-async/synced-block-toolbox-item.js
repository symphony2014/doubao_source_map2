// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getSyncedBlockItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 642507
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var i = require.p + "static/image/annotation.c5ea060c.png";
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docsHelpCenterLinks = require("docs-help-center-links") /*id: 338838*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var creationDocNetworkErrorHandler = require("creation-doc-network-error-handler") /*id: 687201*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockPositionUtils = require("doc-block-position-utils") /*id: 116715*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let M = e => {
    let l = "";
    switch (e) {
      case editorUiComponentConstants.uiComponentTypes.Slash:
        l = "ccm_doc_slash_panel_click";
        break;
      case editorUiComponentConstants.uiComponentTypes.BlockMenu:
        l = "ccm_doc_web_menu_panel_click";
        break;
      default:
        l = "ccm_doc_add_panel_click";
    }
    return l;
  };
  let A = e => {
    let {
      block: l,
      blockManager: o,
      isAppend: r
    } = e;
    if (!r && (docxSyncedBlockUtils.hasExcludedDesc(l.model) || aiBlockTypeUtils.isAiBlock(l)) || !r && docxSyncedBlockUtils.checkBlockExclusion(l.model.snapshot, o)) {
      return false;
    }
    let {
      model: i,
      id: a
    } = l;
    return !docHostTypeChecker.isSheetHost(o.config) && !docxSyncedBlockUtils.isSyncedReference(i, o) && !aiBlockTypeUtils.hasAiBlockInPath(o, a) && !platformDocUtils.xgt();
  };
  function E(e, {
    panelType: l,
    isAppend: o,
    showTooltip: n
  } = {}) {
    let u = l === editorUiComponentConstants.uiComponentTypes.BlockMenu;
    let {
      blockManager: T,
      blocks: C,
      selectionAPI: E,
      extraProps: D = {}
    } = e;
    let O = docBlockViewUtils.getBlockEdge(C, o);
    if (!A({
      block: O,
      blockManager: T,
      isAppend: o
    })) {
      return null;
    }
    let L = async (e, n, r) => {
      if (creationDocNetworkErrorHandler.handleCreationDocNetworkError()) {
        return;
      }
      let i = [];
      let a = E.getSelection();
      let c = T.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      if (u && !o && a.length > 1 && a.some(e => e.id === O.id)) {
        i = a.map(e => T.getBlockModelByBlockIdNotCheck(e.id)).filter(e => !!e);
      } else {
        let [e] = await docBlockPositionUtils.calculateBlockPosition({
          blockManager: T,
          blocks: [O],
          extraProps: D,
          isAppend: o
        });
        editorBlockUtilities.clearMarkOrRange({
          block: C[0],
          mark: D.mark,
          notFocus: true
        });
        i = [e.model];
        if (stubBooleanFunctions.alwaysFalseCheck(l)) {
          stubBooleanFunctions.emptyStubFunc(T, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, e);
          return;
        }
      }
      let d = E.isCollapsedTextSelection();
      await c.handleModelsTurnInto({
        models: i,
        triggerKey: docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE,
        knownContext: {
          toggle: false,
          useModelSelection: false
        }
      });
      if (d) {
        (function (e, l) {
          if (e.length === 0) {
            return;
          }
          let o = e[e.length - 1];
          if (docBlockEditActions.isTextBlock(o)) {
            let e = o.zoneState.totalWidth();
            l.setSelection([{
              id: o.id,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: e,
                end: e
              }
            }]);
          } else {
            l.setSelection([{
              id: o.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            }]);
          }
        })(i, E);
      }
      if (i.length) {
        let e = i.map(e => e.id);
        let o = docxEditorBlockMetadataUtils.getMultipleBlockInfo(e, T);
        let n = {
          action_type: `turn_into_${docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE}`,
          object_block_data: o,
          action_value: {
            value1: true
          }
        };
        T.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(M(l), n);
      }
    };
    let P = docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
    let S = blockTypeIconMapping.blockIcons[docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE];
    if (u && !o) {
      if (docxBlockUtils_1.isTextBlock(O)) {
        return null;
      }
      S = blockTypeIconMapping.blockIcons[blockTypeIconMapping.syncedBlockColorfulKey];
    }
    return {
      name: "synced block",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      text: P,
      icon: S,
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.SYNCED],
      action: L,
      tip: n ? reactJsxRuntimeCoreReexport.jsx("div", {
        children: P
      }) : undefined,
      key: editorConstantsEnums.BlockTypes.SyncedBlock,
      guideInfo: {
        imgUrl: i,
        desc: t("LarkCCM_Docs_SyncBlock_Collaboration_Onboarding"),
        onHover: () => {
          T.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_block_template_onboarding_view", {
            onboarding_type: "save_onboarding"
          });
        },
        helpLink: docsHelpCenterLinks.getEnvHelpUrl(docsHelpCenterLinks.helpCenterLinks.SYNC_GUIDE_PANEL)
      }
    };
  }
  require.d(exports, {
    getSyncedBlockItem: function () {
      return E;
    }
  });
}