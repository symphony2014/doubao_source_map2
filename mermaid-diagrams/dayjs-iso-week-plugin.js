// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20443.e36932c3.js
         * chunkId: 20443
         * moduleId: 902980
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    return function (t, e, i) {
      function r(t) {
        return t.add(4 - t.isoWeekday(), "day");
      }
      var n = e.prototype;
      n.isoWeekYear = function () {
        return r(this).year();
      };
      n.isoWeek = function (t) {
        if (!this.$utils().u(t)) {
          return this.add((t - this.isoWeek()) * 7, "day");
        }
        var e;
        var n;
        var s;
        var a = r(this);
        e = this.isoWeekYear();
        s = 4 - (n = (this.$u ? i.utc : i)().year(e).startOf("year")).isoWeekday();
        if (n.isoWeekday() > 4) {
          s += 7;
        }
        var o = n.add(s, "day");
        return a.diff(o, "week") + 1;
      };
      n.isoWeekday = function (t) {
        if (this.$utils().u(t)) {
          return this.day() || 7;
        } else {
          return this.day(this.day() % 7 ? t : t - 7);
        }
      };
      var s = n.startOf;
      n.startOf = function (t, e) {
        var i = this.$utils();
        var r = !!i.u(e) || e;
        if (i.p(t) === "isoweek") {
          if (r) {
            return this.date(this.date() - (this.isoWeekday() - 1)).startOf("day");
          } else {
            return this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day");
          }
        } else {
          return s.bind(this)(t, e);
        }
      };
    };
  };
  module.exports = e();
}