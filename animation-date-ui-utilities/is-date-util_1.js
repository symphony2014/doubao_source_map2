// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 650513
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var nodeUtilTypesDetector = require("node-util-types-detector") /*id: 500199*/;
  var c = nodeUtilTypesDetector.nodeUtilTypes && nodeUtilTypesDetector.nodeUtilTypes.isDate;
  var u = c ? identityWrapper.createWrapper(c) : function (t) {
    return objectTypeCheck.isNonNullObject(t) && baseGetTag.baseGetTag(t) == "[object Date]";
  };
  require.d(exports, {
    isDate: function () {
      return u;
    }
  });
}