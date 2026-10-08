// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 329788
         */
module.exports = function (module, exports, require) {
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var nodeUtilTypesDetector = require("node-util-types-detector") /*id: 500199*/;
  var s = nodeUtilTypesDetector.nodeUtilTypes && nodeUtilTypesDetector.nodeUtilTypes.isMap;
  var u = s ? identityWrapper.createWrapper(s) : function (e) {
    return objectTypeCheck.isNonNullObject(e) && nativeBaseGetTagFix.getBaseGetTag(e) == "[object Map]";
  };
  require.d(exports, {
    isMap: function () {
      return u;
    }
  });
}