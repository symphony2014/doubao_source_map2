// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 307673
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t = 0;
    var r = 0;
    var n = 0;
    var i = 0;
    return e.map(function (e) {
      var o = (e = e.slice())[0];
      var a = o.toUpperCase();
      if (o != a) {
        e[0] = a;
        switch (o) {
          case "a":
            e[6] += n;
            e[7] += i;
            break;
          case "v":
            e[1] += i;
            break;
          case "h":
            e[1] += n;
            break;
          default:
            for (var s = 1; s < e.length;) {
              e[s++] += n;
              e[s++] += i;
            }
        }
      }
      switch (a) {
        case "Z":
          n = t;
          i = r;
          break;
        case "H":
          n = e[1];
          break;
        case "V":
          i = e[1];
          break;
        case "M":
          n = t = e[1];
          i = r = e[2];
          break;
        default:
          n = e[e.length - 2];
          i = e[e.length - 1];
      }
      return e;
    });
  };
}