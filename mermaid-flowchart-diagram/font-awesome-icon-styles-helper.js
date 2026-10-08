// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getIconStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16090.35eabcc9.js
         * chunkId: 16090
         * moduleId: 878353
         */
module.exports = function (module, exports, require) {
  var n = require("logger-level-utils") /*id: 696754*/.setFunctionName(() => `
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`, "getIconStyles");
  require.d(exports, {
    getIconStyles: function () {
      return n;
    }
  });
}