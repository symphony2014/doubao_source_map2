// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 391053
         */
module.exports = function (module, exports, require) {
  var n;
  var r = Object.prototype.hasOwnProperty;
  function i(t) {
    try {
      return decodeURIComponent(t.replace(/\+/g, " "));
    } catch (t) {
      return null;
    }
  }
  function o(t) {
    try {
      return encodeURIComponent(t);
    } catch (t) {
      return null;
    }
  }
  exports.stringify = function (t, e) {
    var i;
    var s;
    var a = [];
    if (typeof (e = e || "") != "string") {
      e = "?";
    }
    for (s in t) {
      if (r.call(t, s)) {
        if (!(i = t[s]) && (i === null || i === n || isNaN(i))) {
          i = "";
        }
        s = o(s);
        i = o(i);
        if (s === null || i === null) {
          continue;
        }
        a.push(s + "=" + i);
      }
    }
    if (a.length) {
      return e + a.join("&");
    } else {
      return "";
    }
  };
  exports.parse = function (t) {
    var e;
    var n = /([^=?#&]+)=?([^&]*)/g;
    var r = {};
    while (e = n.exec(t)) {
      var o = i(e[1]);
      var s = i(e[2]);
      if (o !== null && s !== null && !(o in r)) {
        r[o] = s;
      }
    }
    return r;
  };
}