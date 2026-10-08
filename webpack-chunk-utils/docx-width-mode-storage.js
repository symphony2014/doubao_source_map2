// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getDocxWidthMode'
// - Renamed export 'qA' to 'setDocxWidthMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 851483
         */
module.exports = function (module, exports, require) {
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  function o(e) {
    if (e === undefined) {
      return "DOCX_CATALOGUE_OPEN_STATUS";
    } else if (e) {
      return "DOCX_CATALOGUE_OPEN_STATUS_ON_SIDEBAR_OPENED";
    } else {
      return "DOCX_CATALOGUE_OPEN_STATUS_ON_SIDEBAR_CLOSED";
    }
  }
  let a = (e, n) => {
    try {
      localStorage.setItem(o(e), n.toString());
    } catch (e) {}
  };
  let u = e => {
    let n = localStorage.getItem(o(e));
    if (n || e !== false) {
      if (n || e !== true) {
        if (n === "false") {
          return docxWidthModeConstants.statusModes.CLOSE;
        } else {
          return docxWidthModeConstants.statusModes.NONE;
        }
      } else {
        return docxWidthModeConstants.statusModes.CLOSE;
      }
    } else {
      return docxWidthModeConstants.statusModes.NONE;
    }
  };
  require.d(exports, {
    getDocxWidthMode: function () {
      return u;
    },
    setDocxWidthMode: function () {
      return a;
    }
  });
}