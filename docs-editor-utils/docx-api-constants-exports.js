// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ef' to 'fileTypes'
// - Renamed export 'Gx' to 'driveErrors'
// - Renamed export 'MU' to 'statusCodes'
// - Renamed export 'NV' to 'capacityLimitCodes'
// - Renamed export 'Rw' to 'specificErrorCodes'
// - Renamed export 'W6' to 'capacityLimits'
// - Renamed export 'ZP' to 'docxApiService'
// - Renamed export 'aY' to 'operationStatus'
// - Renamed export 'zN' to 'referenceTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 81404
         */
module.exports = function (module, exports, require) {
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  require.d(exports, {
    fileTypes: function () {
      return docApiConstants.fileTypes;
    },
    driveErrors: function () {
      return docApiConstants.driveErrors;
    },
    statusCodes: function () {
      return docApiConstants.statusCodes;
    },
    capacityLimitCodes: function () {
      return docApiConstants.capacityLimitCodes;
    },
    specificErrorCodes: function () {
      return docApiConstants.specificErrorCodes;
    },
    capacityLimits: function () {
      return docApiConstants.capacityLimits;
    },
    docxApiService: function () {
      return docxClientVarsService.docxApiService;
    },
    operationStatus: function () {
      return docApiConstants.operationStatus;
    },
    referenceTypes: function () {
      return docApiConstants.referenceTypes;
    }
  });
}