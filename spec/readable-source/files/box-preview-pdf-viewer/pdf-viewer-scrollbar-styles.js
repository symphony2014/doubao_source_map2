// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'scrollbarStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 669645
         */
module.exports = function (module, exports, require) {
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let r = (0, styledComponentsCore.css)`
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: transparent;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(var(--N900-raw), 0.3);
    width: 8px;
    border-radius: 6px;
    display: block;
    min-height: 38px;
    box-shadow: 0 0 0 2px rgba(var(--N100-raw), 0.3) inset;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    display: block;
  }
`;
  require.d(exports, {
    scrollbarStyles: function () {
      return r;
    }
  });
}