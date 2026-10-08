// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 101131
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n) {
    var a;
    var r;
    var i;
    var o;
    var s = function (e, t, n) {
      if (n && !n.code) {
        throw Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");
      }
      return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : undefined, {
        timeZone: t,
        timeZoneName: e
      });
    }(e, n.timeZone, n.locale);
    if (s.formatToParts) {
      return function (e, t) {
        var n = e.formatToParts(t);
        var a = n.length - 1;
        for (; a >= 0; --a) {
          if (n[a].type === "timeZoneName") {
            return n[a].value;
          }
        }
      }(s, t);
    } else {
      a = s;
      r = t;
      i = a.format(r).replace(/\u200E/g, "");
      if (o = / [\w-+ ]+$/.exec(i)) {
        return o[0].substr(1);
      } else {
        return "";
      }
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}