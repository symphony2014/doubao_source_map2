// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'isDocxSidebarOpened'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 885927
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let o = e => objectPathGetDefault.getObjectPathDefault(e, ["docx", "sidebar", "opened"]);
  require.d(exports, {
    isDocxSidebarOpened: function () {
      return o;
    }
  });
}