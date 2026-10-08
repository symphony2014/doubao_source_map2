// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPatternParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 790770
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return function (t) {
      var n;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = i.width;
      var o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth];
      var s = t.match(o);
      if (!s) {
        return null;
      }
      var l = s[0];
      var a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth];
      var c = Array.isArray(a) ? function (e, t) {
        for (var n = 0; n < e.length; n++) {
          if (t(e[n])) {
            return n;
          }
        }
      }(a, function (e) {
        return e.test(l);
      }) : function (e, t) {
        for (var n in e) {
          if (e.hasOwnProperty(n) && t(e[n])) {
            return n;
          }
        }
      }(a, function (e) {
        return e.test(l);
      });
      n = e.valueCallback ? e.valueCallback(c) : c;
      return {
        value: n = i.valueCallback ? i.valueCallback(n) : n,
        rest: t.slice(l.length)
      };
    };
  }
  require.d(exports, {
    createPatternParser: function () {
      return i;
    }
  });
}