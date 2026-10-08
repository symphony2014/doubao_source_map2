// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KT' to 'tooltipConfig'
// - Renamed export 'UX' to 'tooltipPrefix'
// - Renamed export 'j2' to 'tooltipOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 736928
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-tooltip`
  };
  let o = {
    POSITION_SET: ["top", "topLeft", "topRight", "left", "leftTop", "leftBottom", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "leftTopOver", "rightTopOver", "leftBottomOver", "rightBottomOver"],
    TRIGGER_SET: ["hover", "focus", "click", "custom", "contextMenu"],
    STATUS_DISABLED: "disabled",
    STATUS_LOADING: "loading"
  };
  let s = {
    ARROW_BOUNDING: {
      offsetX: 0,
      offsetY: 2,
      width: 24,
      height: 7
    },
    DEFAULT_Z_INDEX: 1060,
    MOUSE_ENTER_DELAY: 50,
    MOUSE_LEAVE_DELAY: 50,
    SPACING: 8,
    MARGIN: 0
  };
  require.d(exports, {
    tooltipConfig: function () {
      return s;
    },
    tooltipPrefix: function () {
      return r;
    },
    tooltipOptions: function () {
      return o;
    }
  });
}