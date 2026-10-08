// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isRegExp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 600396
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var nodeUtilTypesDetector = require("node-util-types-detector") /*id: 500199*/;
  var o = nodeUtilTypesDetector.nodeUtilTypes && nodeUtilTypesDetector.nodeUtilTypes.isRegExp;
  var c = o ? identityWrapper.createWrapper(o) : function (e) {
    return objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object RegExp]";
  };
  require.d(exports, {
    isRegExp: function () {
      return c;
    }
  });
}