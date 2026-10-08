// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'dx' to 'getDocxWidthMode'
// - Renamed export 'nC' to 'isValidSizeMode'
// - Renamed export 'wS' to 'createDocxGetter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 337143
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var booleanConstantUtils = require("boolean-constant-utils") /*id: 143711*/;
  let u = e => n => objectPathGetDefault.getObjectPathDefault(n, ["docx", "documentConfig", e]);
  let c = [docxWidthModeConstants.sizeModes.FULL, docxWidthModeConstants.sizeModes.LARGE, docxWidthModeConstants.sizeModes.STANDARD];
  let _ = e => c.includes(e);
  let l = e => {
    if (booleanConstantUtils.constantFalse()) {
      return docxWidthModeConstants.sizeModes.FULL;
    }
    let n = objectPathGetDefault.getObjectPathDefault(e, ["docx", "documentConfig", docxWidthModeConstants.attrNames.WIDTH_MODE]);
    if (_(n)) {
      return n;
    } else {
      return docxWidthModeConstants.sizeModes.STANDARD;
    }
  };
  require.d(exports, {
    getDocxWidthMode: function () {
      return l;
    },
    isValidSizeMode: function () {
      return _;
    },
    createDocxGetter: function () {
      return u;
    }
  });
}