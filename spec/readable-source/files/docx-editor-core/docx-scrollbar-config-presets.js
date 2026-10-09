// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'sidebarScrollConfig'
// - Renamed export 'Bz' to 'zeroMarginScrollCfg'
// - Renamed export 'H3' to 'feedHeaderScrollCfg'
// - Renamed export 'WR' to 'minIconScrollConfig'
// - Renamed export 'bD' to 'smallIconScrollCfg'
// - Renamed export 'bv' to 'headerScrollConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 105735
         */
module.exports = function (module, exports, require) {
  var numericConstantsMap = require("numeric-constants-map") /*id: 65456*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  let a = {
    leftMargin: browserEnvironmentDetectionUtils.browserEnv.isFeed ? docxEditorConstantsConfig.headerHeight : numericConstantsMap.constValue106,
    rightMargin: browserEnvironmentDetectionUtils.browserEnv.isFeed ? numericConstantsMap.constValue98 : numericConstantsMap.constValue40,
    showScrollbarOnHover: true,
    sliderHeight: numericConstantsMap.constValue7,
    sliderMinWidth: numericConstantsMap.constValue24,
    sliderToBottom: numericConstantsMap.constValue3,
    enableSliderDragging: true
  };
  let s = {
    leftMargin: docxEditorConstantsConfig.headerHeight,
    rightMargin: docxEditorConstantsConfig.headerHeight,
    showScrollbarOnHover: true,
    sliderHeight: numericConstantsMap.constValue7,
    sliderMinWidth: numericConstantsMap.constValue24,
    sliderToBottom: numericConstantsMap.constValue3,
    enableSliderDragging: true
  };
  let c = {
    leftMargin: docxEditorConstantsConfig.sidebarWidth,
    rightMargin: docxEditorConstantsConfig.sidebarWidth,
    showScrollbarOnHover: true,
    sliderHeight: numericConstantsMap.constValue7,
    sliderMinWidth: numericConstantsMap.constValue24,
    sliderToBottom: numericConstantsMap.constValue3,
    enableSliderDragging: true
  };
  let u = {
    leftMargin: docxEditorConstantsConfig.iconSizeSmall,
    rightMargin: docxEditorConstantsConfig.iconSizeSmall,
    showScrollbarOnHover: true,
    sliderHeight: numericConstantsMap.constValue7,
    sliderMinWidth: numericConstantsMap.constValue24,
    sliderToBottom: numericConstantsMap.constValue3,
    enableSliderDragging: true
  };
  let d = {
    leftMargin: docxEditorConstantsConfig.minIconSize,
    rightMargin: docxEditorConstantsConfig.minIconSize,
    showScrollbarOnHover: false,
    sliderHeight: 0,
    sliderMinWidth: 0,
    sliderToBottom: 0,
    enableSliderDragging: true
  };
  let h = {
    leftMargin: 0,
    rightMargin: 0
  };
  require.d(exports, {
    sidebarScrollConfig: function () {
      return c;
    },
    zeroMarginScrollCfg: function () {
      return h;
    },
    feedHeaderScrollCfg: function () {
      return a;
    },
    minIconScrollConfig: function () {
      return d;
    },
    smallIconScrollCfg: function () {
      return u;
    },
    headerScrollConfig: function () {
      return s;
    }
  });
}