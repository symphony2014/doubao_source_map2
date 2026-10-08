// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getObjectPathString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 965758
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let s = e => t => {
    let n = objectPathGetDefault.getObjectPathDefault(t, e);
    if (isStringTypeCheck.isString(n)) {
      return n;
    } else {
      return "";
    }
  };
  require.d(exports, {
    getObjectPathString: function () {
      return s;
    }
  });
}