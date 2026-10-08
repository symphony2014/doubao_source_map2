// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapObjectKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 975446
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var constantCreator = require("constant-creator") /*id: 851378*/;
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var u = Object.prototype.toString;
  n = function (t, e, r) {
    if (e != null && typeof e.toString != "function") {
      e = u.call(e);
    }
    t[e] = r;
  };
  o = constantCreator.createConstant(identityFunctionUtil_1.identity);
  function l(t, e) {
    var r;
    var a;
    r = o(e);
    a = {};
    objectForeachHelper.createObjectForEach(t, function (t, e, o) {
      n(a, r(t), e, o);
    });
    return a;
  }
  require.d(exports, {
    mapObjectKeys: function () {
      return l;
    }
  });
}