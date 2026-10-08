// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aU' to 'dataPlaceholder'
// - Renamed export '_t' to 'showInlineTrigger'
// - Renamed export 'so' to 'triggerVisibilityTypes'
// - Renamed export 'eK' to 'triggerWidth'
// - Renamed export 'kw' to 'triggerConfig'
// - Renamed export 'Y2' to 'hideInlineTrigger'
// - Renamed export 'l1' to 'triggerHeight'
// - Renamed export 'WI' to 'triggerMaxWidth'
// - Renamed export 'aC' to 'triggerMaxHeight'
// - Renamed export 'aj' to 'emptyArray'
// - Renamed export '_H' to 'inlineTrigger'
// - Renamed export 'g6' to 'positionAlignTypes'
// - Renamed export 'th' to 'placeHolderClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 116204
         */
module.exports = function (module, exports, require) {
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  let o = [];
  let l = {};
  let a = "SHOW_INLINE_TRIGGER";
  let s = "HIDE_INLINE_TRIGGER";
  let c = [uiLayoutPositionEnums.positionAlignTypes.BottomLeft, uiLayoutPositionEnums.positionAlignTypes.TopLeft];
  let u = [0, 2];
  let d = 240;
  let h = 220;
  let f = 160;
  let g = 420;
  let p = "inline-trigger-place-holder";
  let m = "inline-trigger";
  let v = "data-placeholder";
  require.d(exports, {
    dataPlaceholder: function () {
      return v;
    },
    showInlineTrigger: function () {
      return a;
    },
    triggerVisibilityTypes: function () {
      return u;
    },
    triggerWidth: function () {
      return d;
    },
    triggerConfig: function () {
      return l;
    },
    hideInlineTrigger: function () {
      return s;
    },
    triggerHeight: function () {
      return f;
    },
    triggerMaxWidth: function () {
      return h;
    },
    triggerMaxHeight: function () {
      return g;
    },
    emptyArray: function () {
      return o;
    },
    inlineTrigger: function () {
      return m;
    },
    positionAlignTypes: function () {
      return c;
    },
    placeHolderClass: function () {
      return p;
    }
  });
}