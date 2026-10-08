// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 180323
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var i = [];
    e.replace(r, function (e, r, o) {
      var a;
      var s = r.toLowerCase();
      o = (a = o.match(n)) ? a.map(Number) : [];
      if (s == "m" && o.length > 2) {
        i.push([r].concat(o.splice(0, 2)));
        s = "l";
        r = r == "m" ? "l" : "L";
      }
      while (true) {
        if (o.length == t[s]) {
          o.unshift(r);
          return i.push(o);
        }
        if (o.length < t[s]) {
          throw Error("malformed path data");
        }
        i.push([r].concat(o.splice(0, t[s])));
      }
    });
    return i;
  };
  var t = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  };
  var r = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
  var n = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
}