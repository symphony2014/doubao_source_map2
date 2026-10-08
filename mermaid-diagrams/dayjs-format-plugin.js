// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20443.e36932c3.js
         * chunkId: 20443
         * moduleId: 260904
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    return function (t, e) {
      var i = e.prototype;
      var r = i.format;
      i.format = function (t) {
        var e = this;
        var i = this.$locale();
        if (!this.isValid()) {
          return r.bind(this)(t);
        }
        var n = this.$utils();
        var s = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (t) {
          switch (t) {
            case "Q":
              return Math.ceil((e.$M + 1) / 3);
            case "Do":
              return i.ordinal(e.$D);
            case "gggg":
              return e.weekYear();
            case "GGGG":
              return e.isoWeekYear();
            case "wo":
              return i.ordinal(e.week(), "W");
            case "w":
            case "ww":
              return n.s(e.week(), t === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return n.s(e.isoWeek(), t === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return n.s(String(e.$H === 0 ? 24 : e.$H), t === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(e.$d.getTime() / 1000);
            case "x":
              return e.$d.getTime();
            case "z":
              return "[" + e.offsetName() + "]";
            case "zzz":
              return "[" + e.offsetName("long") + "]";
            default:
              return t;
          }
        });
        return r.bind(this)(s);
      };
    };
  };
  module.exports = e();
}