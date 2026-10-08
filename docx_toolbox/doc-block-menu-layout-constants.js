// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CL' to 'menuTriggerDelay'
// - Renamed export 'DX' to 'iconSize'
// - Renamed export 'EN' to 'supportedBlockTypes'
// - Renamed export 'Oc' to 'menuTriggerClass'
// - Renamed export 'Po' to 'positionOffsets'
// - Renamed export 'RL' to 'overlayContainerSelector'
// - Renamed export 'ci' to 'hoverIconContainerClass'
// - Renamed export 'd6' to 'tableMenuTriggerClass'
// - Renamed export 'i2' to 'triggerHeight'
// - Renamed export 'kP' to 'positionAlignTypes'
// - Renamed export 'pg' to 'dragIconClass'
// - Renamed export 'uj' to 'hoverDelay'
// - Renamed export 'xy' to 'triggerWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 166815
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  let l = "menu-trigger";
  let a = "table-menu-trigger";
  let c = 300;
  let u = 200;
  let s = 26;
  let d = 26;
  let h = 40;
  let f = [docBlockTypeConstants.blockTypeConstants.QUOTE, docBlockTypeConstants.blockTypeConstants.CODE];
  let p = ".overlay-container.block-menu-overlay";
  let g = "hover-block-type-icon-container";
  let m = "has-drag-icon";
  let v = [uiLayoutPositionEnums.positionAlignTypes.LeftCenter, uiLayoutPositionEnums.positionAlignTypes.BottomLeft, uiLayoutPositionEnums.positionAlignTypes.TopLeft, uiLayoutPositionEnums.positionAlignTypes.RightCenter];
  let b = {
    [uiLayoutPositionEnums.positionAlignTypes.LeftCenter]: [4, 0],
    [uiLayoutPositionEnums.positionAlignTypes.RightCenter]: [4, 0],
    [uiLayoutPositionEnums.positionAlignTypes.BottomLeft]: [0, 4],
    [uiLayoutPositionEnums.positionAlignTypes.TopLeft]: [0, 4]
  };
  require.d(exports, {
    menuTriggerDelay: function () {
      return c;
    },
    iconSize: function () {
      return d;
    },
    supportedBlockTypes: function () {
      return f;
    },
    menuTriggerClass: function () {
      return l;
    },
    positionOffsets: function () {
      return b;
    },
    overlayContainerSelector: function () {
      return p;
    },
    hoverIconContainerClass: function () {
      return g;
    },
    tableMenuTriggerClass: function () {
      return a;
    },
    triggerHeight: function () {
      return h;
    },
    positionAlignTypes: function () {
      return v;
    },
    dragIconClass: function () {
      return m;
    },
    hoverDelay: function () {
      return u;
    },
    triggerWidth: function () {
      return s;
    }
  });
}