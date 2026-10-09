// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'sortMessageList'
// - Renamed export 'Z' to 'compareIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 730204
         */
module.exports = function (module, exports, require) {
  var timestampNormalizer = require("timestamp-normalizer") /*id: 950098*/;
  function r(e, t) {
    return Number((e == null ? undefined : e.index) ?? Infinity) - Number((t == null ? undefined : t.index) ?? Infinity);
  }
  let o = (e, t) => {
    e.sort((e, n) => {
      if (!e.isLocalMessage && !n.isLocalMessage) {
        return r(t(e), t(n));
      }
      if (e.isLocalMessage && n.isLocalMessage) {
        var o;
        var a;
        o = t(e);
        a = t(n);
        return (timestampNormalizer.normalizeTimestamp(Number(o == null ? undefined : o.create_time)) || 0) - (timestampNormalizer.normalizeTimestamp(Number(a == null ? undefined : a.create_time)) || 0);
      }
      if (e.isLocalMessage && !n.isLocalMessage || !e.isLocalMessage && n.isLocalMessage) {
        let i = e.isLocalMessage && !n.isLocalMessage;
        let o = n.isLocalMessage && !e.isLocalMessage;
        let a = i ? t(e) : t(n);
        let l = o ? t(e) : t(n);
        if (a && "index" in a) {
          if (i) {
            return r(a, l);
          } else {
            return r(l, a);
          }
        } else if (i) {
          return r(undefined, l);
        } else {
          return r(l, undefined);
        }
      }
      return 0;
    });
  };
  require.d(exports, {
    sortMessageList: function () {
      return o;
    },
    compareIndex: function () {
      return r;
    }
  });
}