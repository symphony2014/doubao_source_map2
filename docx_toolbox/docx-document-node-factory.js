// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IG' to 'createDefaultFileNode'
// - Renamed export 'QF' to 'createFileNode'
// - Renamed export 'pm' to 'createDocumentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 52340
         */
module.exports = function (module, exports, require) {
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var documentNodeFactoryWrapper = require("document-node-factory-wrapper") /*id: 6829*/;
  function l(e, n) {
    let {
      size: r,
      mime_type: l,
      name: a,
      token: c,
      status: u
    } = e;
    let s = {
      token: n ? c : docxViewConfigConstants.emptyString,
      mimeType: l,
      size: r,
      name: a
    };
    if (u !== undefined) {
      s.status = u;
    }
    return documentNodeFactoryWrapper.createDocumentNodeWrapper({
      file: s
    }, docxViewConfigConstants.viewTypeFile);
  }
  function a() {
    return documentNodeFactoryWrapper.createDocumentNodeWrapper({
      file: {
        token: "",
        mimeType: "",
        name: "",
        size: 1,
        width: 240,
        height: 240
      }
    });
  }
  require.d(exports, {
    createDefaultFileNode: function () {
      return a;
    },
    createFileNode: function () {
      return l;
    },
    createDocumentNode: function () {
      return documentNodeFactoryWrapper.createDocumentNodeWrapper;
    }
  });
}