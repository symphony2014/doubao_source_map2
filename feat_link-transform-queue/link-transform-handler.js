// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x0' to 'handleLinkDisplay'
// - Renamed export 'do' to 'getIframeConfig'
// - Renamed export 'Et' to 'getOverlayPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-transform-queue.7e909584.js
         * chunkId: 1321
         * moduleId: 294261
         */
module.exports = function (module, exports, require) {
  require("bool-default-getter-util") /*id: 855627*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var docUrlExtractUtils = require("doc-url-extract-utils") /*id: 846285*/;
  var linkPastePanelUtils = require("link-paste-panel-utils") /*id: 474492*/;
  require("calendar-event-block-link-transformer") /*id: 384975*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_1 = require("document-node-utils_1") /*id: 759829*/;
  var urlValidationUtils_1 = require("url-validation-utils_1") /*id: 233855*/;
  var iframeLinkEmbedHandler = require("iframe-link-embed-handler") /*id: 14207*/;
  require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("document-block-insert") /*id: 297162*/;
  require("lark-ccm-owner-expired-constants") /*id: 442235*/;
  require("synced-ref-block-token-getter") /*id: 766560*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  require("synced-reference-block-constants") /*id: 19241*/;
  require("api-client-instance") /*id: 22981*/;
  require("error-status-codes") /*id: 187285*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var clientsideLinkExports = require("clientside-link-exports") /*id: 751953*/;
  require("compatible-editor-context_1") /*id: 2711*/;
  require("compat-browser-selection-service_1") /*id: 22128*/;
  var editorRevisionManager = require("editor-revision-manager") /*id: 835310*/;
  var linkDisplayOptionsMenuItems = require("link-display-options-menu-items") /*id: 334029*/;
  let m = async e => {
    let {
      block: t,
      text: n,
      revision: l,
      linkRange: a
    } = e;
    if (!urlValidationUtils_1.isValidUrl(n) || urlValidationUtils_1.isApplinkUrl(n)) {
      return;
    }
    let s = (await iframeLinkEmbedHandler.createIframeSnapshot(n)) || {};
    let p = {};
    if (l) {
      editorRevisionHandlers.handleAddRevision(t.blockManager, s, p, l);
    }
    await blockInsertionHandler.insertBlockHandler({
      blocks: [t],
      panelType: editorUiComponentConstants.uiComponentTypes.LINK_TRANSFORM,
      eRange: a,
      focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      blockData: documentNodeUtils_1.createDocNode(s),
      transactionOptions: p
    });
  };
  let E = e => {
    let {
      menuItemName: t,
      block: n,
      text: i,
      linkId: r,
      revision: l,
      linkRange: s
    } = e;
    let {
      blockManager: c
    } = n;
    switch (t) {
      case linkDisplayOptionsMenuItems.linkDisplayOptions.Title:
        {
          let e = {};
          let t = {};
          editorRevisionManager.setRevisionContext(e, t, l);
          linkPastePanelUtils.insertLinkBookmark({
            block: n,
            linkRange: s,
            url: i,
            attributes: e,
            applyOptions: t
          });
          break;
        }
      case linkDisplayOptionsMenuItems.linkDisplayOptions.Card:
        linkPastePanelUtils.handleLinkPaste({
          blockManager: c,
          blocks: [n],
          mark: {
            [clientsideLinkExports.linkId]: r
          },
          url: i,
          panelType: editorUiComponentConstants.uiComponentTypes.LINK_TRANSFORM,
          revision: l
        });
        break;
      case linkDisplayOptionsMenuItems.linkDisplayOptions.Preview:
        m(e);
        break;
      case linkDisplayOptionsMenuItems.linkDisplayOptions.Link:
        linkPastePanelUtils.setEditorSelection(n, s[1]);
    }
  };
  let b = {
    [docBlockTypeConstants.blockTypeConstants.TABLE]: ".table-block",
    [docBlockTypeConstants.blockTypeConstants.IFRAME]: ".iframe-container",
    [docBlockTypeConstants.blockTypeConstants.IMAGE]: ".image-block-width-wrapper",
    [docBlockTypeConstants.blockTypeConstants.FILE]: ".docx-file-block-inner-container",
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: ".whiteboard-block_container",
    [docBlockTypeConstants.blockTypeConstants.CHAT_CARD]: ".chat-card-clip-container"
  };
  function I(e) {
    let {
      isBlockSelection: t,
      blockManager: n,
      blockId: o,
      range: i,
      blockRect: r
    } = e;
    let l = n.getBlockViewByBlockIdNotCheck(o);
    if (!t || !l) {
      return {
        left: undefined,
        top: undefined,
        overlayTarget: i
      };
    }
    if (!syncedBlockFeatureFlags.isMultiSelectPasteSyncEnabled() && r.bottom + 120 > window.innerHeight) {
      l.hostElement.scrollIntoView();
    }
    let a = l.getHostRect();
    let c = l.hostElement;
    return function (e) {
      let t = e.hostElement;
      let n = b[e.type];
      let o = e.getHostRect();
      let i = n && e.hostElement.querySelector(n);
      let r = i instanceof HTMLElement && i.getBoundingClientRect();
      if (i && r) {
        if (e.hostElement.clientWidth > i.clientWidth) {
          t = i;
        }
        let n = r.right > o.right ? o.right : r.right;
        let l = r.bottom > o.bottom ? o.bottom : r.bottom;
        if (syncedBlockFeatureFlags.isMultiSelectPasteSyncEnabled() || e.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
          return {
            left: n,
            top: l + 10,
            overlayTarget: t
          };
        }
      }
      return null;
    }(l) || {
      left: a.right,
      top: a.bottom + 10,
      overlayTarget: c
    };
  }
  let v = async e => {
    let t = Promise.all([require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("clipboard_module") /*id: 40603*/]).then(require.bind(require, "iframe-region-config-validator") /*id: 473081*/);
    let {
      isCanIframeExtract: o
    } = await docUrlExtractUtils.checkUrlExtraction(e, true);
    if (o) {
      return (await t).getIframeConfigType(e);
    }
  };
  require.d(exports, {
    handleLinkDisplay: function () {
      return E;
    },
    getIframeConfig: function () {
      return v;
    },
    getOverlayPosition: function () {
      return I;
    }
  });
}