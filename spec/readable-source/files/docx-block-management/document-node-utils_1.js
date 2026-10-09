// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'createDocNode'
// - Renamed export 'u' to 'getDocNodeAsync'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 759829
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var urlValidationUtils_1 = require("url-validation-utils_1") /*id: 233855*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function a(e, n = docBlockTypeConstants.blockTypeConstants.IFRAME) {
    return documentNodeFactory_2.createDocumentNode(e, n);
  }
  function d(e, n, i, o) {
    return new Promise(r => {
      (async () => {
        if (!urlValidationUtils_1.isValidUrl(e) || urlValidationUtils_1.isApplinkUrl(e) || o && !(n == null ? undefined : n.hasBlockModelByBlockId(o))) {
          return r(null);
        }
        let d = await i(e);
        if (d) {
          return r(a(d));
        } else {
          return r(null);
        }
      })();
    });
  }
  require.d(exports, {
    createDocNode: function () {
      return a;
    },
    getDocNodeAsync: function () {
      return d;
    }
  });
}