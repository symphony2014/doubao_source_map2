// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'createCopyAnchorLinkAction'
// - Renamed export 'a5' to 'isTextualToolbar'
// - Renamed export 'jP' to 'copyAnchorLink'
// - Renamed export 'Nc' to 'getCopyLinkIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 957321
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docSyncedBlockUtils = require("doc-synced-block-utils") /*id: 478237*/;
  var resourceTypeEnum = require("resource-type-enum") /*id: 342261*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var docAnchorCollabUtilities = require("doc-anchor-collab-utilities") /*id: 762610*/;
  var docBlockEventTracker = require("doc-block-event-tracker") /*id: 497225*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var clipboardUtils = require("clipboard-utils") /*id: 411076*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var toolbarEventReporter = require("toolbar-event-reporter") /*id: 635395*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxToolboxStub = require("docx-toolbox-stub") /*id: 896100*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var anchorBuilderToken = require("anchor-builder-token") /*id: 729431*/;
  var docNetworkStateCollector = require("doc-network-state-collector") /*id: 193991*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var docxGetFoldedBlocksFilter = require("docx-get-folded-blocks-filter") /*id: 199369*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorTranslationCheck = require("editor-translation-check") /*id: 518289*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function j(e) {
    return e && [editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar, editorUiComponentConstants.uiComponentTypes.BlockMenu, editorUiComponentConstants.uiComponentTypes.TableCell].includes(e);
  }
  function S() {
    return docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.CopyLink];
  }
  var D = (e, r) => {
    let o;
    let {
      selectionAPI: n,
      blockManager: i,
      blocks: c
    } = e;
    let s = function (e) {
      var r;
      let o = t("common.copy_anchor_link");
      if (e && (r = e) && [editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar, editorUiComponentConstants.uiComponentTypes.BlockToolbar, editorUiComponentConstants.uiComponentTypes.TableCell].includes(r)) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            children: o
          })
        });
      } else {
        return undefined;
      }
    }(r == null ? undefined : r.panelType);
    if (docxFeatureFlags.isErAndEn()) {
      let e = n.getSelection();
      let l = (r == null ? undefined : r.panelType) && [editorUiComponentConstants.uiComponentTypes.BlockMenu].includes(r.panelType);
      if ((r == null ? undefined : r.panelType) === editorUiComponentConstants.uiComponentTypes.BlockToolbar || l) {
        e = c.map(e => ({
          id: e.id,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        }));
      }
      let a = i.editorAPI.config.get("translatedOnlyTranslation");
      let d = editorTranslationCheck.isTranslationActive(e, i);
      o = a || d;
      if (a) {
        s = t("LarkCCM_Docs_Toolbar_Share_CopyUnavailableInTranslationOnly_Tooltip");
      } else if (d) {
        s = t("LarkCCM_Docs_Toolbar_Share_CopyLinkUnavailableForTranslation_Tooltip");
      }
    }
    return {
      key: editorConstantsEnums.BlockTypes.CopyAnchorLink,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      text: function (e, r = false) {
        if (e) {
          if (docxFeatureFlags.isWEnabled() && [editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar].includes(e)) {
            return t("LarkCCM_Docs_Toolbar_CopyLinkToSelection_Menu");
          }
          if ([editorUiComponentConstants.uiComponentTypes.BlockToolbar].includes(e) && !r) {
            return;
          }
        }
        return t("LarkCCM_DocxIM_SharePart_CopyLink_Button");
      }(r == null ? undefined : r.panelType, r == null ? undefined : r.isSubmenu),
      name: "copyAnchorLink",
      extra: {
        behavior: editorConstantsEnums.EditorActions.CreateNoOps
      },
      closeAfterClick: true,
      icon: S(),
      disabled: o,
      tip: s,
      forceShowTip: o,
      action: async (o, l, n) => {
        let {
          blocks: a,
          selectionAPI: i
        } = e;
        let c = i.getSelection();
        if ((r == null ? undefined : r.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu && a.length !== 1) {
          c = a.map(e => ({
            id: e.id,
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK
          }));
        }
        P(e, c, l, n, r);
      }
    };
  };
  async function P(e, r, o, l, g) {
    let {
      blocks: S,
      blockManager: D
    } = e;
    let {
      editorAPI: P
    } = D;
    let H = P.getService(selectionServiceProviderName.selectionServiceKey);
    let G = S[0].id || r[0]?.id;
    let V = await P.getService(anchorBuilderToken.anchorBuilderToken, {
      async: true
    });
    let F = D.getBlockViewByBlockId(G);
    let U = D.getRootRecordId();
    let $ = F.record.id;
    let W = syncedReferenceBlockUtils.isSyncedReferenceBlock(P);
    if (W) {
      $ = syncedReferenceBlockUtils.getSyncedReferencePageId(P) || $;
      U = (syncedReferenceBlockUtils.getMainDocxBlockManager(P) || D).getRootRecordId();
    }
    let K = (e, r) => {
      let n = r ? docEditorActionMap.actionConstants.copy_multi_block_anchor : docEditorActionMap.actionConstants.copy_anchor_link;
      if (e === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        docBlockEventTracker.handleBlockClick(n, F, D, {
          triggerType: docBlockConstants.selectionModes.HOVER_RIGHT
        });
        return;
      }
      if (l) {
        docEditorActionMap.collectBlockEvent({
          actionType: n,
          blocks: [F],
          blockManager: D,
          source: l,
          click: docEditorActionMap.uiActionTypes.block_action,
          selectionAPI: H
        }, toolbarEventReporter.getMoreMenuStatus(o));
      }
    };
    let Y = docAnchorCollabUtilities.isCollabAvailable();
    let X = false;
    if (!W && Y && j(g == null ? undefined : g.panelType) && ((g == null ? undefined : g.panelType) !== editorUiComponentConstants.uiComponentTypes.BlockMenu || S.length !== 1)) {
      X = true;
    }
    let z = true;
    try {
      let e = docxFeatureFlags.isAlwaysFalseU();
      let o = editorTranslationCheck.isTranslationActive(r, D);
      let l = F.type === docBlockTypeConstants.blockTypeConstants.PAGE || F.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && syncUrlBlockUtils.isSyncingActive();
      let c = Y && e && !o && !l;
      let s = r;
      if ((g == null ? undefined : g.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu || (g == null ? undefined : g.panelType) === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        s = docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks;
      }
      let d = syncedReferenceBlockUtils.wrapBlockActionsWithReferBlockId(D, s);
      if ((g == null ? undefined : g.panelType) === editorUiComponentConstants.uiComponentTypes.BlockMenu && docxFeatureFlags.isLyEnabled()) {
        let e = docxGetFoldedBlocksFilter.getFoldedBlocksFilter(d, D);
        let r = d[0]?.referBlockId;
        for (let o of e) {
          d.push({
            id: o,
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK,
            referBlockId: r
          });
        }
      }
      let u = browserEnvironmentDetectionUtils.browserDetector.isSafari || browserEnvironmentDetectionUtils.browserDetector.isIPadBrowser;
      if (c && !u) {
        let e = await docNetworkStateCollector.collectNetworkState.createRangeAnchor(F.record.id, false, docSyncedBlockUtils.filterNonSyncedBlocks(d, D), anchorConstantsConfig.anchorType.textCardAnchor);
        if (docAnchorCollabUtilities.isTextCardAnchorKey(e)) {
          $ = e;
        }
      }
      if (F.type === docBlockTypeConstants.blockTypeConstants.WHITEBOARD && !docAnchorCollabUtilities.isTextCardAnchorKey($)) {
        let {
          buildShareLink: e
        } = docxToolboxStub.returnNull();
        if (e) {
          clipboardUtils.copyWithToast(e($, F.record.snapshot.token, U));
          H.removeAllSelection();
          K(g == null ? undefined : g.panelType, false);
          return;
        }
      }
      await clipboardUtils.copyToClipboardAsync(() => c && u ? docNetworkStateCollector.collectNetworkState.createRangeAnchor(F.record.id, false, docSyncedBlockUtils.filterNonSyncedBlocks(d, D), anchorConstantsConfig.anchorType.textCardAnchor).then(e => {
        if (docAnchorCollabUtilities.isTextCardAnchorKey(e)) {
          $ = e;
        }
        return V.getAnchor({
          docxRecord: $
        });
      }) : !X || c ? V.getAnchor({
        docxRecord: $
      }) : docNetworkStateCollector.collectNetworkState.createRangeAnchor(F.record.id, false, r).then(e => {
        if (!e) {
          throw Error("anchor is empty");
        }
        return V.getAnchor({
          docxRecord: e
        });
      }));
    } catch (e) {
      z = false;
    }
    docxImageViewerUtils.showImageToast(z ? docxImageViewerUtils.getImageText.success : docxImageViewerUtils.getImageText.error);
    if (z && Y && !X) {
      (function (e) {
        if (!docAnchorCollabUtilities.isCollabAvailable()) {
          return;
        }
        let r = new FormData();
        r.append("obj_token", docTokenHelperUtils.resolveDocToken());
        r.append("obj_type", `${resourceTypeEnum.ResourceType.DOCX}`);
        r.append("scene", "3");
        r.append("is_async", "true");
        r.append("block_id", e);
        apiClientInstance.apiClient({
          method: "post",
          url: apiEndpointConstants.apiEndpoints.thumbnailGenerate,
          baseURL: spaceApiConfig.getSpaceApiBase,
          data: r,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      })($);
    }
    H.removeAllSelection();
    K(g == null ? undefined : g.panelType, X);
  }
  require.d(exports, {
    createCopyAnchorLinkAction: function () {
      return D;
    },
    isTextualToolbar: function () {
      return S;
    },
    copyAnchorLink: function () {
      return P;
    },
    getCopyLinkIcon: function () {
      return j;
    }
  });
}