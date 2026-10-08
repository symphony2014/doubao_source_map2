// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'getFirstCharLength'
// - Renamed export 'j' to 'getLastCharLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 832308
         */
module.exports = function (module, exports, require) {
  var i = RegExp("[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff\\ufe0e\\ufe0f]");
  var o = "\uD800-\uDFFF";
  var r = "[\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]";
  var s = "\uD83C[\uDFFB-\uDFFF]";
  var l = "[^" + o + "]";
  var a = "(?:\uD83C[\uDDE6-\uDDFF]){2}";
  var u = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
  var d = "(?:" + r + "|" + s + ")?";
  var c = "[\\ufe0e\\ufe0f]?";
  var h = "(?:\\u200d(?:" + [l, a, u].join("|") + ")" + (c + d) + ")*";
  var f = RegExp(s + "(?=" + s + ")|" + ("(?:" + ["" + l + r + "?", r, a, u, "[" + o + "]"].join("|") + ")") + (c + d + h), "g");
  function g(e) {
    if (i.test(e)) {
      return e.match(f) || [];
    } else {
      return e.split("");
    }
  }
  function v(e) {
    return (e.length < 2 ? e : g(e)[0]).length;
  }
  function p(e) {
    if (e.length < 2) {
      return e.length;
    } else {
      return (e = g(e))[e.length - 1].length;
    }
  }
  require.d(exports, {
    getFirstCharLength: function () {
      return v;
    },
    getLastCharLength: function () {
      return p;
    }
  });
}