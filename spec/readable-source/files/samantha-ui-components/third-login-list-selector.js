// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getLoginList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 98586
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var thirdLoginStore = require("third-login-store") /*id: 730252*/;
  let o = () => thirdLoginStore.selectLoginList();
  require.d(exports, {
    getLoginList: function () {
      return o;
    }
  });
}