// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getOwnKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 365656
         */
module.exports = function (module, exports, require) {
  var prototypeChecker = require("prototype-checker") /*id: 411247*/;
  var i = require("function-composition-util") /*id: 396862*/.compose(Object.keys, Object);
  var o = Object.prototype.hasOwnProperty;
  function a(e) {
    if (!prototypeChecker.isPrototype(e)) {
      return i(e);
    }
    var t = [];
    for (var n in Object(e)) {
      if (o.call(e, n) && n != "constructor") {
        t.push(n);
      }
    }
    return t;
  }
  require.d(exports, {
    getOwnKeys: function () {
      return a;
    }
  });
}