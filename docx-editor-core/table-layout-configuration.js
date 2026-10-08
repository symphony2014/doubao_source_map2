// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'tableLayoutConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 647875
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  let l = {
    minRightPadding: Math.max(tableLayoutConstants_1.tableConstant4, tableLayoutConstants_1.tableConstant3b),
    historyScrollableOptions: {
      subScrollerLeftOffset: 0
    },
    equalPanelShowDelayed: true,
    hoverTableSetThrottled: true
  };
  let a = browserEnvironmentDetectionUtils.browserEnv.isIPadBrowser;
  let s = {
    ...l,
    showShadow: true,
    enableOperation: true,
    enableCreation: true,
    enableResizerButton: false,
    enableDragRowOrCol: true,
    enableResizerLine: true,
    enableResizeAdsorp: true,
    enableCellSelect: true,
    isHeaderInScroller: false,
    isHeaderAndInsertBarInSlot: a,
    disableOperationBarOnSelected: false,
    leftExtending: 20,
    leftPadding: 0,
    rightPadding: l.minRightPadding,
    scrollableOptions: {
      scrollbarToBlock: 3,
      subScrollerLeftOffset: 0,
      enableNativeSubScroll: false,
      ignoreScrollClasses: tableLayoutConstants_1.tableHeaderArray,
      nestedScrollClasses: tableLayoutConstants_1.codeBlockZoneArray,
      isClipLeft: a,
      enableRightShadow: true
    }
  };
  require.d(exports, {
    tableLayoutConfig: function () {
      return s;
    }
  });
}