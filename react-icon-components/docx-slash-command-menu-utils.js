// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nA' to 'createNoResultMenuItems'
// - Renamed export 'tn' to 'getSavePartialTplStatus'
// - Renamed export 'vf' to 'filterValidMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 856066
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxAiDropdownMenu_1 = require("docx-ai-dropdown-menu_1") /*id: 679475*/;
  var flowPermissionSelectorFactory = require("flow-permission-selector-factory") /*id: 953431*/;
  function p() {
    let e = flowPermissionSelectorFactory.createCopyableSelector()(reduxStoreInitializer.reduxStore.getState());
    return docActionManager.getActionStatus(e, docActionManager.actionTypes.SAVE_PARTIAL_TPL);
  }
  function h(e, r, o) {
    return safeArrayFlattenUtil.safeFlattenArray(e.map(e => e ? e(r, o) : null)).filter(e => !!e && (e.type !== editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren || safeArrayFlattenUtil.safeFlattenArray(e.children).length > 0));
  }
  function m(e) {
    return [{
      key: editorUiComponentConstants.uiComponentConstants.NoResult,
      groupName: "noResult",
      children: [{
        title: "slash no results",
        name: "slash no results",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.CreateNoOps
        },
        canSelected: false,
        text: reactCoreLibraryReexport.createElement("span", {
          className: "search-no-result"
        }, reactCoreLibraryReexport.createElement("div", {}, e ? t("LarkCCM_Docs_SlashCmd_SearchTemplate") : t("CreationDoc_Docs_DocXBlock_NoMatchedResults_Toast")), e ? reactCoreLibraryReexport.createElement(docxAiDropdownMenu_1.AiMenuButton) : null)
      }]
    }];
  }
  require.d(exports, {
    createNoResultMenuItems: function () {
      return m;
    },
    getSavePartialTplStatus: function () {
      return p;
    },
    filterValidMenuItems: function () {
      return h;
    }
  });
}