// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'StyledLoadingView'
// - Renamed export 'n' to 'StyledLayoutWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 706922
         */
module.exports = function (module, exports, require) {
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var loadingComponent = require("loading-component") /*id: 666260*/;
  let r = styledComponentsCore.default.div`
  position: ${e => e.isFullscreen ? "fixed" : "relative"};
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  button,
  input {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
  let s = styledComponentsCore.default(loadingComponent.LoadingComponent)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;
  require.d(exports, {
    StyledLoadingView: function () {
      return s;
    },
    StyledLayoutWrapper: function () {
      return r;
    }
  });
}