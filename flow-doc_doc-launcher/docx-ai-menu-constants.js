// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Au' to 'enterItemClass'
// - Renamed export 'H6' to 'leaveItemClass'
// - Renamed export 'Vd' to 'menuSelectors'
// - Renamed export 'dK' to 'menuConstant100'
// - Renamed export 'eH' to 'paddingConstant'
// - Renamed export 'fl' to 'offsetArray'
// - Renamed export 'fo' to 'wrapperClass'
// - Renamed export 'jT' to 'arrowClass'
// - Renamed export 'qU' to 'widthConstant'
// - Renamed export 'tW' to 'keyCodes'
// - Renamed export 'vI' to 'sizeConstant'
// - Renamed export 'wR' to 'spaceConstant'
// - Renamed export 'z8' to 'arrowIconClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 255694
         */
module.exports = function (module, exports, require) {
  var aiPromptClassNames = require("ai-prompt-class-names") /*id: 994243*/;
  var copilotClassConstants = require("copilot-class-constants") /*id: 753500*/;
  let l = {
    RETURN: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  let a = 155;
  let c = 8;
  let u = "enterItem";
  let s = "leaveItem";
  let d = "item-arrow";
  let h = "docx-menu-wrapper";
  let f = 8;
  let p = [8, 0];
  let g = 100;
  let m = 8;
  let v = "item-arrow";
  let b = [`.${v}`, `.${aiPromptClassNames.toolbarPromptSubmenu}`, `.${h} .${copilotClassConstants.copilotBase}__ai-menu`];
  require.d(exports, {
    enterItemClass: function () {
      return u;
    },
    leaveItemClass: function () {
      return s;
    },
    menuSelectors: function () {
      return b;
    },
    menuConstant100: function () {
      return g;
    },
    paddingConstant: function () {
      return f;
    },
    offsetArray: function () {
      return p;
    },
    wrapperClass: function () {
      return h;
    },
    arrowClass: function () {
      return v;
    },
    widthConstant: function () {
      return a;
    },
    keyCodes: function () {
      return l;
    },
    sizeConstant: function () {
      return c;
    },
    spaceConstant: function () {
      return m;
    },
    arrowIconClass: function () {
      return d;
    }
  });
}