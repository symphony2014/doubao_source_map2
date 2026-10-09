// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toPrimitiveValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 481732
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  function i(e) {
    var t = function (e, t) {
      if (typeofHelper.getType(e) !== "object" || e === null) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeofHelper.getType(i) !== "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(e, "string");
    if (typeofHelper.getType(t) === "symbol") {
      return t;
    } else {
      return String(t);
    }
  }
  require.d(exports, {
    toPrimitiveValue: function () {
      return i;
    }
  });
}