// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getIconStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 988348
         */
module.exports = function (module, exports, require) {
  var a = require("mermaid-config-utils") /*id: 101498*/.setName(() => `
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
      return a;
    }
  });
}