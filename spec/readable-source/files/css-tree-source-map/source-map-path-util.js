// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 919725
         */
module.exports = function (module, exports, require) {
  exports.getArg = function (e, t, n) {
    if (t in e) {
      return e[t];
    }
    if (arguments.length == 3) {
      return n;
    }
    throw Error("\"" + t + "\" is a required argument.");
  };
  var n;
  var r;
  var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var o = /^data:.+\,.+$/;
  function a(e) {
    var t = e.match(i);
    if (t) {
      return {
        scheme: t[1],
        auth: t[2],
        host: t[3],
        port: t[4],
        path: t[5]
      };
    } else {
      return null;
    }
  }
  function s(e) {
    var t = "";
    if (e.scheme) {
      t += e.scheme + ":";
    }
    t += "//";
    if (e.auth) {
      t += e.auth + "@";
    }
    if (e.host) {
      t += e.host;
    }
    if (e.port) {
      t += ":" + e.port;
    }
    if (e.path) {
      t += e.path;
    }
    return t;
  }
  exports.urlParse = a;
  exports.urlGenerate = s;
  n = function (e) {
    var n = e;
    var r = a(e);
    if (r) {
      if (!r.path) {
        return e;
      }
      n = r.path;
    }
    var i = exports.isAbsolute(n);
    var o = [];
    var l = 0;
    var c = 0;
    while (true) {
      l = c;
      if ((c = n.indexOf("/", l)) === -1) {
        o.push(n.slice(l));
        break;
      }
      for (o.push(n.slice(l, c)); c < n.length && n[c] === "/";) {
        c++;
      }
    }
    var u;
    var h = 0;
    var c = o.length - 1;
    for (; c >= 0; c--) {
      if ((u = o[c]) === ".") {
        o.splice(c, 1);
      } else if (u === "..") {
        h++;
      } else if (h > 0) {
        if (u === "") {
          o.splice(c + 1, h);
          h = 0;
        } else {
          o.splice(c, 2);
          h--;
        }
      }
    }
    if ((n = o.join("/")) === "") {
      n = i ? "/" : ".";
    }
    if (r) {
      r.path = n;
      return s(r);
    } else {
      return n;
    }
  };
  r = [];
  function l(e) {
    for (var t = 0; t < r.length; t++) {
      if (r[t].input === e) {
        var i = r[0];
        r[0] = r[t];
        r[t] = i;
        return r[0].result;
      }
    }
    var o = n(e);
    r.unshift({
      input: e,
      result: o
    });
    if (r.length > 32) {
      r.pop();
    }
    return o;
  }
  function c(e, t) {
    if (e === "") {
      e = ".";
    }
    if (t === "") {
      t = ".";
    }
    var n = a(t);
    var r = a(e);
    if (r) {
      e = r.path || "/";
    }
    if (n && !n.scheme) {
      if (r) {
        n.scheme = r.scheme;
      }
      return s(n);
    }
    if (n || t.match(o)) {
      return t;
    }
    if (r && !r.host && !r.path) {
      r.host = t;
      return s(r);
    }
    var i = t.charAt(0) === "/" ? t : l(e.replace(/\/+$/, "") + "/" + t);
    if (r) {
      r.path = i;
      return s(r);
    } else {
      return i;
    }
  }
  exports.normalize = l;
  exports.join = c;
  exports.isAbsolute = function (e) {
    return e.charAt(0) === "/" || i.test(e);
  };
  exports.relative = function (e, t) {
    if (e === "") {
      e = ".";
    }
    e = e.replace(/\/$/, "");
    var n = 0;
    for (; t.indexOf(e + "/") !== 0;) {
      var r = e.lastIndexOf("/");
      if (r < 0 || (e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) {
        return t;
      }
      ++n;
    }
    return Array(n + 1).join("../") + t.substr(e.length + 1);
  };
  var u = !("__proto__" in Object.create(null));
  function h(e) {
    return e;
  }
  function p(e) {
    if (!e) {
      return false;
    }
    var t = e.length;
    if (t < 9 || e.charCodeAt(t - 1) !== 95 || e.charCodeAt(t - 2) !== 95 || e.charCodeAt(t - 3) !== 111 || e.charCodeAt(t - 4) !== 116 || e.charCodeAt(t - 5) !== 111 || e.charCodeAt(t - 6) !== 114 || e.charCodeAt(t - 7) !== 112 || e.charCodeAt(t - 8) !== 95 || e.charCodeAt(t - 9) !== 95) {
      return false;
    }
    for (var n = t - 10; n >= 0; n--) {
      if (e.charCodeAt(n) !== 36) {
        return false;
      }
    }
    return true;
  }
  function d(e, t) {
    if (e === t) {
      return 0;
    } else if (e === null) {
      return 1;
    } else if (t === null) {
      return -1;
    } else if (e > t) {
      return 1;
    } else {
      return -1;
    }
  }
  exports.toSetString = u ? h : function (e) {
    if (p(e)) {
      return "$" + e;
    } else {
      return e;
    }
  };
  exports.fromSetString = u ? h : function (e) {
    if (p(e)) {
      return e.slice(1);
    } else {
      return e;
    }
  };
  exports.compareByOriginalPositions = function (e, t, n) {
    var r = d(e.source, t.source);
    if (r !== 0 || (r = e.originalLine - t.originalLine) != 0 || (r = e.originalColumn - t.originalColumn) != 0 || n || (r = e.generatedColumn - t.generatedColumn) != 0 || (r = e.generatedLine - t.generatedLine) != 0) {
      return r;
    } else {
      return d(e.name, t.name);
    }
  };
  exports.compareByOriginalPositionsNoSource = function (e, t, n) {
    var r;
    if ((r = e.originalLine - t.originalLine) != 0 || (r = e.originalColumn - t.originalColumn) != 0 || n || (r = e.generatedColumn - t.generatedColumn) != 0 || (r = e.generatedLine - t.generatedLine) != 0) {
      return r;
    } else {
      return d(e.name, t.name);
    }
  };
  exports.compareByGeneratedPositionsDeflated = function (e, t, n) {
    var r = e.generatedLine - t.generatedLine;
    if (r !== 0 || (r = e.generatedColumn - t.generatedColumn) != 0 || n || (r = d(e.source, t.source)) !== 0 || (r = e.originalLine - t.originalLine) != 0 || (r = e.originalColumn - t.originalColumn) != 0) {
      return r;
    } else {
      return d(e.name, t.name);
    }
  };
  exports.compareByGeneratedPositionsDeflatedNoLine = function (e, t, n) {
    var r = e.generatedColumn - t.generatedColumn;
    if (r !== 0 || n || (r = d(e.source, t.source)) !== 0 || (r = e.originalLine - t.originalLine) != 0 || (r = e.originalColumn - t.originalColumn) != 0) {
      return r;
    } else {
      return d(e.name, t.name);
    }
  };
  exports.compareByGeneratedPositionsInflated = function (e, t) {
    var n = e.generatedLine - t.generatedLine;
    if (n !== 0 || (n = e.generatedColumn - t.generatedColumn) != 0 || (n = d(e.source, t.source)) !== 0 || (n = e.originalLine - t.originalLine) != 0 || (n = e.originalColumn - t.originalColumn) != 0) {
      return n;
    } else {
      return d(e.name, t.name);
    }
  };
  exports.parseSourceMapInput = function (e) {
    return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
  };
  exports.computeSourceURL = function (e, t, n) {
    t = t || "";
    if (e) {
      if (e[e.length - 1] !== "/" && t[0] !== "/") {
        e += "/";
      }
      t = e + t;
    }
    if (n) {
      var r = a(n);
      if (!r) {
        throw Error("sourceMapURL could not be parsed");
      }
      if (r.path) {
        var i = r.path.lastIndexOf("/");
        if (i >= 0) {
          r.path = r.path.substring(0, i + 1);
        }
      }
      t = c(s(r), t);
    }
    return l(t);
  };
}