// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 129659
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  exports.default = function (t, e = 60) {
    var n = null;
    return function () {
      var i = this;
      var r = arguments.length;
      var o = Array(r);
      var a = 0;
      for (; a < r; a++) {
        o[a] = arguments[a];
      }
      clearTimeout(n);
      n = setTimeout(function () {
        t.apply(i, o);
      }, e);
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}