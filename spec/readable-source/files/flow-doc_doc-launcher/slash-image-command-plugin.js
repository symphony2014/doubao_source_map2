// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getImageCommand'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 568974
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var docImageUploadHandler = require("doc-image-upload-handler") /*id: 929679*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxFileCoverUtils = require("docx-file-cover-utils") /*id: 326877*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  async function v(e) {
    let {
      blocks: i,
      mark: n,
      selectionAPI: r,
      blockManager: o,
      source: l,
      category: s,
      panelType: c,
      isAppend: d
    } = e;
    docEditorActionMap.collectBlockEvent({
      selectionAPI: r,
      source: l,
      blockManager: o,
      actionType: docEditorActionMap.actionConstants.add_image,
      blocks: i,
      category: s,
      mark: n
    });
    return docImageUploadHandler.uploadImageBlocks({
      blocks: i,
      panelType: c,
      mark: n,
      blockManager: o,
      selectionAPI: r,
      isAppend: d
    });
  }
  function m(e, {
    isAppend: i,
    isAnonymous: n,
    category: a,
    panelType: u,
    overideText: m,
    overideIconClassName: b,
    onAfterAction: _
  } = {}) {
    if (n) {
      return null;
    }
    let {
      blockManager: y,
      selectionAPI: k,
      blocks: S,
      extraProps: E
    } = e;
    let C = diContainerInstance.diContainer.get(docUiServiceSymbols.IconUploadImageIcon);
    return {
      name: "slash image",
      key: editorConstantsEnums.BlockTypes.Image,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      text: m || docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.IMAGE),
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeConstants.blockTypeConstants.IMAGE],
      icon: reactJsxRuntimeCoreReexport.jsx(C, {
        className: isUndefinedCheck.isUndefined(b) ? `${themeColorManagerFacade.menuIconClassName} universe-icon color-y-500` : b
      }),
      disabled: docxFileCoverUtils.isFeatureSupported(),
      tip: docxFileCoverUtils.isFeatureSupported() ? t("CreationDoc_ECM_AdminDisableToast") : null,
      tipPlacement: "right",
      forceShowTip: docxFileCoverUtils.isFeatureSupported(),
      action: (n, r, o) => {
        v({
          blocks: S,
          mark: E.mark,
          selectionAPI: k,
          blockManager: y,
          source: o,
          category: a,
          isAppend: i,
          panelType: u
        });
        if (_ != null) {
          _(e);
        }
      }
    };
  }
  require.d(exports, {
    getImageCommand: function () {
      return m;
    }
  });
}