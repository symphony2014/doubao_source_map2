// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'createErrorWrapper'
// - Renamed export 'W' to 'ErrorLevel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 161088
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  function o(t) {
    return function (e) {
      return function (n, r, i) {
        var o = i.value;
        i.value = function () {
          var n = [];
          var r = 0;
          for (; r < arguments.length; r++) {
            n[r] = arguments[r];
          }
          try {
            return o.apply(this, n);
          } catch (n) {
            if (t) {
              t.call(this, {
                e: n,
                level: e,
                message: n.message
              });
            }
          }
        };
      };
    };
  }
  (i = r ||= {})[i.FATAL = 0] = "FATAL";
  i[i.ERROR = 1] = "ERROR";
  require.d(exports, {
    createErrorWrapper: function () {
      return o;
    },
    ErrorLevel: function () {
      return r;
    }
  });
}