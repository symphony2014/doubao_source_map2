// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 995978
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    return function (t, n = {}) {
      var a = t.match(e.matchPattern);
      if (!a) {
        return null;
      }
      var r = a[0];
      var i = t.match(e.parsePattern);
      if (!i) {
        return null;
      }
      var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
      return {
        value: o = n.valueCallback ? n.valueCallback(o) : o,
        rest: t.slice(r.length)
      };
    };
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}