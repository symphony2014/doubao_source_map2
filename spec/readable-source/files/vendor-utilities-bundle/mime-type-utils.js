// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'mimeTypesDatabaseLoader'
// - Resolved require(242850) to 'mime-types-database-loader'
// - Resolved require(987157) to 'path-posix-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 857103
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var s;
  var mimeTypesDatabaseLoader = require("mime-types-database-loader") /*id: 242850*/;
  var c = require("path-posix-implementation") /*id: 987157*/.extname;
  var r = /^\s*([^;\s]*)(?:;|\s|$)/;
  var p = /^text\//i;
  function l(e) {
    if (!e || typeof e != "string") {
      return false;
    }
    var a = r.exec(e);
    var i = a && mimeTypesDatabaseLoader[a[1].toLowerCase()];
    if (i && i.charset) {
      return i.charset;
    } else {
      return !!a && !!p.test(a[1]) && "UTF-8";
    }
  }
  exports.charset = l;
  exports.charsets = {
    lookup: l
  };
  exports.contentType = function (e) {
    if (!e || typeof e != "string") {
      return false;
    }
    var i = e.indexOf("/") === -1 ? exports.lookup(e) : e;
    if (!i) {
      return false;
    }
    if (i.indexOf("charset") === -1) {
      var n = exports.charset(i);
      if (n) {
        i += "; charset=" + n.toLowerCase();
      }
    }
    return i;
  };
  exports.extension = function (e) {
    if (!e || typeof e != "string") {
      return false;
    }
    var i = r.exec(e);
    var n = i && exports.extensions[i[1].toLowerCase()];
    return !!n && !!n.length && n[0];
  };
  exports.extensions = Object.create(null);
  exports.lookup = function (e) {
    if (!e || typeof e != "string") {
      return false;
    }
    var i = c("x." + e).toLowerCase().substr(1);
    return !!i && (exports.types[i] || false);
  };
  exports.types = Object.create(null);
  n = exports.extensions;
  o = exports.types;
  s = ["nginx", "apache", undefined, "iana"];
  Object.keys(mimeTypesDatabaseLoader).forEach(function (e) {
    var a = mimeTypesDatabaseLoader[e];
    var i = a.extensions;
    if (i && i.length) {
      n[e] = i;
      for (var c = 0; c < i.length; c++) {
        var r = i[c];
        if (o[r]) {
          var p = s.indexOf(mimeTypesDatabaseLoader[o[r]].source);
          var l = s.indexOf(a.source);
          if (o[r] !== "application/octet-stream" && (p > l || p === l && o[r].substr(0, 12) === "application/")) {
            continue;
          }
        }
        o[r] = e;
      }
    }
  });
}