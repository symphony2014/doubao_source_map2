// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 331357
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  function n(e, t) {
    switch (e) {
      case "P":
        return t.date({
          width: "short"
        });
      case "PP":
        return t.date({
          width: "medium"
        });
      case "PPP":
        return t.date({
          width: "long"
        });
      default:
        return t.date({
          width: "full"
        });
    }
  }
  function a(e, t) {
    switch (e) {
      case "p":
        return t.time({
          width: "short"
        });
      case "pp":
        return t.time({
          width: "medium"
        });
      case "ppp":
        return t.time({
          width: "long"
        });
      default:
        return t.time({
          width: "full"
        });
    }
  }
  exports.default = {
    p: a,
    P: function (e, t) {
      var r;
      var i = e.match(/(P+)(p+)?/) || [];
      var o = i[1];
      var s = i[2];
      if (!s) {
        return n(e, t);
      }
      switch (o) {
        case "P":
          r = t.dateTime({
            width: "short"
          });
          break;
        case "PP":
          r = t.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          r = t.dateTime({
            width: "long"
          });
          break;
        default:
          r = t.dateTime({
            width: "full"
          });
      }
      return r.replace("{{date}}", n(o, t)).replace("{{time}}", a(s, t));
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}