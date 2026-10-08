// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 456614
         */
module.exports = function (module, exports, require) {
  var r = "";
  function n(e) {
    return ("000" + parseInt(e, 2).toString(16)).slice(-4);
  }
  function o(e) {
    if (!e) {
      return "00000000000000000000000000000000";
    }
    var t = e.split(/\./).map(function (e) {
      return (Array(8).join("0") + parseInt(e, 10).toString(2)).slice(-8);
    });
    var r = [];
    r[0] = n(t[0] + t[1]);
    r[1] = n(t[2] + t[3]);
    return ["0000", "0000", "0000", "0000", "0000", "ffff", r[0], r[1]].join("");
  }
  exports.genLogID = function (e) {
    var t = "" + Date.now();
    var n = "";
    if (e) {
      r = n = o(e);
    } else {
      n = r ||= o(function () {
        var e = [];
        var t = 0;
        for (; t < 4; t++) {
          e.push(Math.floor(Math.random() * 256));
        }
        return e.join(".");
      }());
    }
    return "02" + t + n + Math.random().toString(16).slice(-6);
  };
}