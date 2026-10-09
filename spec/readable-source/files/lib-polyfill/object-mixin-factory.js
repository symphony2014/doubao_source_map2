// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 851798
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  module.exports = function (t, r, e) {
    return function () {
      var o = new t();
      var i = arguments.length;
      var a = 0;
      for (; a < i; a++) {
        var u = arguments[a];
        if (e) {
          r(o, requireObjectOrThrowTypeError_1(u)[0], u[1]);
        } else {
          r(o, u);
        }
      }
      return o;
    };
  };
}