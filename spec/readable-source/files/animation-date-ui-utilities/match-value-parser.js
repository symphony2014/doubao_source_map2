// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 914011
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    return function (t) {
      var n;
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = a.width;
      var i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth];
      var o = t.match(i);
      if (!o) {
        return null;
      }
      var s = o[0];
      var l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth];
      var u = Array.isArray(l) ? function (e, t) {
        for (var n = 0; n < e.length; n++) {
          if (t(e[n])) {
            return n;
          }
        }
      }(l, function (e) {
        return e.test(s);
      }) : function (e, t) {
        for (var n in e) {
          if (e.hasOwnProperty(n) && t(e[n])) {
            return n;
          }
        }
      }(l, function (e) {
        return e.test(s);
      });
      n = e.valueCallback ? e.valueCallback(u) : u;
      return {
        value: n = a.valueCallback ? a.valueCallback(n) : n,
        rest: t.slice(s.length)
      };
    };
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}