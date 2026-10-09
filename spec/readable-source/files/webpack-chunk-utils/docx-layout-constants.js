// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Tr' to 'layoutConstants'
// - Renamed export 'sI' to 'isDebugLayoutEnabled'
// - Renamed export 'sp' to 'isCommentPanelShownDefault'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 907285
         */
module.exports = function (module, exports, require) {
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  let u = {
    AUTHOR_AREA_WIDTH: docxEditorConstantsConfig.toolbarHeight,
    CATALOGUE_MIN_WIDTH: docxEditorConstantsConfig.inputFontSize,
    CATALOGUE_RESPONSE_END_WIDTH: docxEditorConstantsConfig.maxCanvasWidth,
    CATALOGUE_RESPONSE_MAX_WIDTH: docxEditorConstantsConfig.panelWidthDefault,
    CATALOGUE_RESPONSE_MIN_WIDTH: docxEditorConstantsConfig.gridSizeDefault,
    CATALOGUE_RESPONSE_WIKI_WIDTH: docxEditorConstantsConfig.maxZIndexValue,
    CATALOGUE_SM_RESPONSE_MAX_WIDTH: docxEditorConstantsConfig.tooltipPosition,
    CATALOGUE_ITEM_PADDING_BOTTOM: docxEditorConstantsConfig.minGapSize,
    CATALOGUE_UL_PADDING_BOTTOM: docxEditorConstantsConfig.debounceDelay,
    CATALOGUE_PIN_HEIGHT: docxEditorConstantsConfig.minBlockHeight,
    COMMENT_SIDEBAR_WIDTH: docxEditorConstantsConfig.maxTooltipWidth,
    SUGGESTION_SIDEBAR_WIDTH: docxEditorConstantsConfig.maxBlockWidth,
    HELP_SIDEBAR_FULL_WIDTH: docxEditorConstantsConfig.scrollThreshold,
    EDITOR_LEFT_WIDTH: docxEditorConstantsConfig.toolbarIndex,
    EDITOR_RIGHT_WIDTH: docxEditorConstantsConfig.lineHeightBase,
    EDITOR_NORMAL_WIDTH: docxEditorConstantsConfig.maxEditorWidth,
    EDITOR_NORMAL_WIDTH_WITH_PADDING: docxEditorConstantsConfig.pageHeightA4,
    EDITOR_PADDING: docxEditorConstantsConfig.paddingSizeSmall,
    EDITOR_RESPONSE_START_WIDTH: docxEditorConstantsConfig.maxDocumentWidth,
    PAGE_MAIN_PADDING: docxEditorConstantsConfig.headerHeight,
    NARROW_PAGE_MAIN_PADDING: docxEditorConstantsConfig.sidebarWidth,
    NARROW_PAGE_ROOMS_MAIN_PADDING: docxEditorConstantsConfig.iconSizeSmall,
    WEB_HEADER_HEIGHT: docxEditorConstantsConfig.borderRadiusBase,
    CHILDREN_PADDING: docxEditorConstantsConfig.defaultItemCount,
    HYDRATE_SCROLL_LAYOUT: docxEditorConstantsConfig.hydrateScrollLayout,
    NESTABLE_BLOCK_GROUP: docBlockTypeConstants.getAllowedBlockTypes,
    WIDTH_MODE_STANDARD: docxWidthModeConstants.sizeModes.STANDARD,
    WIDTH_MODE_FULL: docxWidthModeConstants.sizeModes.FULL,
    WIDTH_MODE_LARGE: docxWidthModeConstants.sizeModes.LARGE,
    CATALOGUE_MAX_UNFOLD_WIDTH: docxEditorConstantsConfig.editorHeightDefault,
    EDITOR_MIN_EXTRUDING_WIDTH: docxEditorConstantsConfig.conditionalEditorWidth,
    EDITOR_MIN_EXTRUDING_WIDTH_ORIGINAL: docxEditorConstantsConfig.conditionalEditorWidth,
    EDITOR_MIN_EXTRUDING_WIDTH_PHOENIX: docxEditorConstantsConfig.editorWidthDefault,
    PAGE_MAIN_COMMENT_BUBBLE_WIDTH: docxEditorConstantsConfig.iconSizeDefault,
    debug: typeof window != "undefined" && c(window.localStorage)
  };
  function c(e) {
    let n = String(e.getItem("debug")).trim().split(",");
    return n.includes("layout") || n.includes("*");
  }
  function _() {
    if (typeof window == "undefined") {
      return;
    }
    let e = window._commentPanelShownDefaultInLark;
    if (e === undefined) {
      e = !!document.querySelector("#ssrBox.has-comment") || !!document.querySelector("#ssrMsgBox");
      window._commentPanelShownDefaultInLark = e;
    }
    return e;
  }
  require.d(exports, {
    layoutConstants: function () {
      return u;
    },
    isDebugLayoutEnabled: function () {
      return c;
    },
    isCommentPanelShownDefault: function () {
      return _;
    }
  });
}