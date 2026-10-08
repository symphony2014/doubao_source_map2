// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KT' to 'tooltipLayout'
// - Renamed export 'UX' to 'popoverClasses'
// - Renamed export 'j2' to 'tooltipOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 126132
         */
module.exports = function (module, exports, require) {
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let o = {
    PREFIX: `${semiIdentifier.semiIdentifier}-popover`,
    ARROW: `${semiIdentifier.semiIdentifier}-popover-icon-arrow`
  };
  let s = {
    POSITION_SET: ["top", "topLeft", "topRight", "left", "leftTop", "leftBottom", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "leftTopOver", "rightTopOver"],
    TRIGGER_SET: ["hover", "focus", "click", "custom", "contextMenu"],
    DEFAULT_ARROW_STYLE: {
      borderOpacity: "1",
      backgroundColor: "var(--semi-color-bg-3)",
      borderColor: "var(--semi-color-border)"
    }
  };
  let a = {
    ARROW_BOUNDING: Object.assign(Object.assign({}, tooltipConstants.tooltipConfig.ARROW_BOUNDING), {
      offsetY: 6,
      offsetX: 0,
      height: 8
    }),
    SPACING: 4,
    SPACING_WITH_ARROW: 10,
    DEFAULT_Z_INDEX: 1030
  };
  require.d(exports, {
    tooltipLayout: function () {
      return a;
    },
    popoverClasses: function () {
      return o;
    },
    tooltipOptions: function () {
      return s;
    }
  });
}