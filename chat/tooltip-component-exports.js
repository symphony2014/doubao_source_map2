// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'tooltipComponent'
// - Resolved require(258571) to 'tooltip-component'
// - Renamed variable 'r' to 'popupContainerContext'
// - Resolved require(648908) to 'popup-container-context'
// - Updated imported property 'P' to 'Tooltip' (module 258571)
// - Updated imported property 'p' to 'PopupContainerCtx' (module 648908)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 341865
         */
module.exports = function (module, exports, require) {
  var tooltipComponent = require("tooltip-component") /*id: 258571*/;
  var popupContainerContext = require("popup-container-context") /*id: 648908*/;
  require.r(exports);
  require.d(exports, {
    DbxTooltip: function () {
      return tooltipComponent.Tooltip;
    },
    TooltipProvider: function () {
      return popupContainerContext.PopupContainerCtx;
    }
  });
}