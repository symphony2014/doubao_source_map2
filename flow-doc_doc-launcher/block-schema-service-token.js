// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'blockSchemaService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 918119
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("block-schema-service");
  require.d(exports, {
    blockSchemaService: function () {
      return r;
    }
  });
}