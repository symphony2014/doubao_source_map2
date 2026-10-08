// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pR' to 'isValidClientId'
// - Renamed export 'Jg' to 'hasInsertId'
// - Renamed export 'ps' to 'isValidSessionId'
// - Renamed export 'eV' to 'isWildcardInsert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 735530
         */
module.exports = function (module, exports, require) {
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  function o(t) {
    return t.indexOf("rs") === 0 && t.length === 34;
  }
  function i(t) {
    return t.indexOf("cs") === 0 && t.length === 34;
  }
  function u(t) {
    return t.insert === documentOperationConstants.wildcardChar && !!t.attributes && !!t.attributes.lmkr;
  }
  function a(t) {
    return typeof t.insert == "object" && t.insert.id;
  }
  require.d(exports, {
    isValidClientId: function () {
      return i;
    },
    hasInsertId: function () {
      return a;
    },
    isValidSessionId: function () {
      return o;
    },
    isWildcardInsert: function () {
      return u;
    }
  });
}