// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isPlainObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 435967
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var prototypeCompositionUtil = require("prototype-composition-util") /*id: 507931*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var a = Object.prototype;
  var s = Function.prototype.toString;
  var u = a.hasOwnProperty;
  var c = s.call(Object);
  exports.isPlainObject = function (e) {
    if (!objectTypeCheck.isNonNullObject(e) || baseGetTag.baseGetTag(e) != "[object Object]") {
      return false;
    }
    var t = prototypeCompositionUtil.getPrototype(e);
    if (t === null) {
      return true;
    }
    var n = u.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && s.call(n) == c;
  };
}