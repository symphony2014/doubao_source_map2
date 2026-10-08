// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KT' to 'spacingConstants'
// - Renamed export 'UX' to 'dropdownClassNames'
// - Renamed export 'j2' to 'tooltipOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 657784
         */
module.exports = function (module, exports, require) {
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let a = {
    PREFIX: `${semiIdentifier.semiIdentifier}-dropdown`,
    SELECTED: `${semiIdentifier.semiIdentifier}-dropdown-item-selected`,
    DISABLED: `${semiIdentifier.semiIdentifier}-dropdown-item-disabled`
  };
  let l = {
    POSITION_SET: tooltipConstants.tooltipOptions.POSITION_SET,
    TRIGGER_SET: ["hover", "focus", "click", "custom", "contextMenu"],
    DEFAULT_LEAVE_DELAY: 100,
    ITEM_TYPE: ["primary", "secondary", "tertiary", "warning", "danger"]
  };
  let r = {
    SPACING: 4,
    NESTED_SPACING: 2
  };
  require.d(exports, {
    spacingConstants: function () {
      return r;
    },
    dropdownClassNames: function () {
      return a;
    },
    tooltipOptions: function () {
      return l;
    }
  });
}