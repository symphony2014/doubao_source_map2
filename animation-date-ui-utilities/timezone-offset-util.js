// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(804609) to 'date-time-parts-util'
// - Resolved require(336563) to 'create-utc-date'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 877320
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n) {
    if (!e || (a = o.exec(e))) {
      return 0;
    }
    if (a = s.exec(e)) {
      if (d(h = parseInt(a[1], 10))) {
        return -(h * 3600000);
      } else {
        return NaN;
      }
    }
    if (a = l.exec(e)) {
      h = parseInt(a[1], 10);
      var a;
      var i;
      var h;
      var f = parseInt(a[2], 10);
      if (d(h, f)) {
        i = Math.abs(h) * 3600000 + f * 60000;
        if (h > 0) {
          return -i;
        } else {
          return i;
        }
      } else {
        return NaN;
      }
    }
    if (function (e) {
      if (c[e]) {
        return true;
      }
      try {
        new Intl.DateTimeFormat(undefined, {
          timeZone: e
        });
        c[e] = true;
        return true;
      } catch (e) {
        return false;
      }
    }(e)) {
      t = new Date(t || Date.now());
      var p;
      var g = u(n ? t : (p = t, r.default(p.getFullYear(), p.getMonth(), p.getDate(), p.getHours(), p.getMinutes(), p.getSeconds(), p.getMilliseconds())), e);
      return -(n ? g : function (e, t, n) {
        var a = e.getTime() - t;
        var r = u(new Date(a), n);
        if (t === r) {
          return t;
        }
        var i = u(new Date(a -= r - t), n);
        if (r === i) {
          return r;
        } else {
          return Math.max(r, i);
        }
      }(t, g, e));
    }
    return NaN;
  };
  var a = i(require("date-time-parts-util") /*id: 804609*/);
  var r = i(require("create-utc-date") /*id: 336563*/);
  function i(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  var o = /^(Z)$/;
  var s = /^([+-]\d{2})$/;
  var l = /^([+-]\d{2}):?(\d{2})$/;
  function u(e, t) {
    var n = a.default(e, t);
    var i = r.default(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
    var o = e.getTime();
    var s = o % 1000;
    return i - (o -= s >= 0 ? s : 1000 + s);
  }
  function d(e, t) {
    return e >= -23 && e <= 23 && (t == null || t >= 0 && t <= 59);
  }
  var c = {};
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}