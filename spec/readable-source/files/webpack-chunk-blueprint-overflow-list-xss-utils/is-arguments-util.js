// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isArguments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 13977
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  function o(e) {
    return objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object Arguments]";
  }
  var a = Object.prototype;
  var s = a.hasOwnProperty;
  var u = a.propertyIsEnumerable;
  var c = o(function () {
    return arguments;
  }()) ? o : function (e) {
    return objectTypeCheck.isNonNullObject(e) && s.call(e, "callee") && !u.call(e, "callee");
  };
  require.d(exports, {
    isArguments: function () {
      return c;
    }
  });
}