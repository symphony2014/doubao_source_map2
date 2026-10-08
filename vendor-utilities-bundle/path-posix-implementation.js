// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 987157
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  function o(e) {
    if (typeof e != "string") {
      throw TypeError("Path must be a string. Received " + JSON.stringify(e));
    }
  }
  function s(e, a) {
    var i;
    var n = "";
    var o = 0;
    var s = -1;
    var t = 0;
    var c = 0;
    for (; c <= e.length; ++c) {
      if (c < e.length) {
        i = e.charCodeAt(c);
      } else if (i === 47) {
        break;
      } else {
        i = 47;
      }
      if (i === 47) {
        if (s === c - 1 || t === 1) ;else if (s !== c - 1 && t === 2) {
          if (n.length < 2 || o !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var r = n.lastIndexOf("/");
              if (r !== n.length - 1) {
                if (r === -1) {
                  n = "";
                  o = 0;
                } else {
                  o = (n = n.slice(0, r)).length - 1 - n.lastIndexOf("/");
                }
                s = c;
                t = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "";
              o = 0;
              s = c;
              t = 0;
              continue;
            }
          }
          if (a) {
            if (n.length > 0) {
              n += "/..";
            } else {
              n = "..";
            }
            o = 2;
          }
        } else {
          if (n.length > 0) {
            n += "/" + e.slice(s + 1, c);
          } else {
            n = e.slice(s + 1, c);
          }
          o = c - s - 1;
        }
        s = c;
        t = 0;
      } else if (i === 46 && t !== -1) {
        ++t;
      } else {
        t = -1;
      }
    }
    return n;
  }
  var t = {
    resolve: function () {
      var e;
      var a;
      var i = "";
      var t = false;
      var c = arguments.length - 1;
      for (; c >= -1 && !t; c--) {
        if (c >= 0) {
          a = arguments[c];
        } else {
          if (e === undefined) {
            e = processBrowserShim.cwd();
          }
          a = e;
        }
        o(a);
        if (a.length !== 0) {
          i = a + "/" + i;
          t = a.charCodeAt(0) === 47;
        }
      }
      i = s(i, !t);
      if (t) {
        if (i.length > 0) {
          return "/" + i;
        } else {
          return "/";
        }
      } else if (i.length > 0) {
        return i;
      } else {
        return ".";
      }
    },
    normalize: function (e) {
      o(e);
      if (e.length === 0) {
        return ".";
      }
      var a = e.charCodeAt(0) === 47;
      var i = e.charCodeAt(e.length - 1) === 47;
      if ((e = s(e, !a)).length === 0 && !a) {
        e = ".";
      }
      if (e.length > 0 && i) {
        e += "/";
      }
      if (a) {
        return "/" + e;
      } else {
        return e;
      }
    },
    isAbsolute: function (e) {
      o(e);
      return e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length == 0) {
        return ".";
      }
      var e;
      var a = 0;
      for (; a < arguments.length; ++a) {
        var i = arguments[a];
        o(i);
        if (i.length > 0) {
          if (e === undefined) {
            e = i;
          } else {
            e += "/" + i;
          }
        }
      }
      if (e === undefined) {
        return ".";
      } else {
        return t.normalize(e);
      }
    },
    relative: function (e, a) {
      o(e);
      o(a);
      if (e === a || (e = t.resolve(e)) === (a = t.resolve(a))) {
        return "";
      }
      for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i);
      var n = e.length;
      var s = n - i;
      var c = 1;
      for (; c < a.length && a.charCodeAt(c) === 47; ++c);
      var r = a.length - c;
      var p = s < r ? s : r;
      var l = -1;
      var u = 0;
      for (; u <= p; ++u) {
        if (u === p) {
          if (r > p) {
            if (a.charCodeAt(c + u) === 47) {
              return a.slice(c + u + 1);
            }
            if (u === 0) {
              return a.slice(c + u);
            }
          } else if (s > p) {
            if (e.charCodeAt(i + u) === 47) {
              l = u;
            } else if (u === 0) {
              l = 0;
            }
          }
          break;
        }
        var m = e.charCodeAt(i + u);
        if (m !== a.charCodeAt(c + u)) {
          break;
        }
        if (m === 47) {
          l = u;
        }
      }
      var d = "";
      for (u = i + l + 1; u <= n; ++u) {
        if (u === n || e.charCodeAt(u) === 47) {
          if (d.length === 0) {
            d += "..";
          } else {
            d += "/..";
          }
        }
      }
      if (d.length > 0) {
        return d + a.slice(c + l);
      } else {
        c += l;
        if (a.charCodeAt(c) === 47) {
          ++c;
        }
        return a.slice(c);
      }
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      o(e);
      if (e.length === 0) {
        return ".";
      }
      var a = e.charCodeAt(0);
      var i = a === 47;
      var n = -1;
      var s = true;
      var t = e.length - 1;
      for (; t >= 1; --t) {
        if ((a = e.charCodeAt(t)) === 47) {
          if (!s) {
            n = t;
            break;
          }
        } else {
          s = false;
        }
      }
      if (n === -1) {
        if (i) {
          return "/";
        } else {
          return ".";
        }
      } else if (i && n === 1) {
        return "//";
      } else {
        return e.slice(0, n);
      }
    },
    basename: function (e, a) {
      if (a !== undefined && typeof a != "string") {
        throw TypeError("\"ext\" argument must be a string");
      }
      o(e);
      var i;
      var n = 0;
      var s = -1;
      var t = true;
      if (a !== undefined && a.length > 0 && a.length <= e.length) {
        if (a.length === e.length && a === e) {
          return "";
        }
        var c = a.length - 1;
        var r = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var p = e.charCodeAt(i);
          if (p === 47) {
            if (!t) {
              n = i + 1;
              break;
            }
          } else {
            if (r === -1) {
              t = false;
              r = i + 1;
            }
            if (c >= 0) {
              if (p === a.charCodeAt(c)) {
                if (--c == -1) {
                  s = i;
                }
              } else {
                c = -1;
                s = r;
              }
            }
          }
        }
        if (n === s) {
          s = r;
        } else if (s === -1) {
          s = e.length;
        }
        return e.slice(n, s);
      }
      for (i = e.length - 1; i >= 0; --i) {
        if (e.charCodeAt(i) === 47) {
          if (!t) {
            n = i + 1;
            break;
          }
        } else if (s === -1) {
          t = false;
          s = i + 1;
        }
      }
      if (s === -1) {
        return "";
      } else {
        return e.slice(n, s);
      }
    },
    extname: function (e) {
      o(e);
      var a = -1;
      var i = 0;
      var n = -1;
      var s = true;
      var t = 0;
      var c = e.length - 1;
      for (; c >= 0; --c) {
        var r = e.charCodeAt(c);
        if (r === 47) {
          if (!s) {
            i = c + 1;
            break;
          }
          continue;
        }
        if (n === -1) {
          s = false;
          n = c + 1;
        }
        if (r === 46) {
          if (a === -1) {
            a = c;
          } else if (t !== 1) {
            t = 1;
          }
        } else if (a !== -1) {
          t = -1;
        }
      }
      if (a === -1 || n === -1 || t === 0 || t === 1 && a === n - 1 && a === i + 1) {
        return "";
      } else {
        return e.slice(a, n);
      }
    },
    format: function (e) {
      var a;
      var i;
      if (e === null || typeof e != "object") {
        throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
      }
      a = e.dir || e.root;
      i = e.base || (e.name || "") + (e.ext || "");
      if (a) {
        if (a === e.root) {
          return a + i;
        } else {
          return a + "/" + i;
        }
      } else {
        return i;
      }
    },
    parse: function (e) {
      o(e);
      var a;
      var i = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (e.length === 0) {
        return i;
      }
      var n = e.charCodeAt(0);
      var s = n === 47;
      if (s) {
        i.root = "/";
        a = 1;
      } else {
        a = 0;
      }
      var t = -1;
      var c = 0;
      var r = -1;
      var p = true;
      var l = e.length - 1;
      var u = 0;
      for (; l >= a; --l) {
        if ((n = e.charCodeAt(l)) === 47) {
          if (!p) {
            c = l + 1;
            break;
          }
          continue;
        }
        if (r === -1) {
          p = false;
          r = l + 1;
        }
        if (n === 46) {
          if (t === -1) {
            t = l;
          } else if (u !== 1) {
            u = 1;
          }
        } else if (t !== -1) {
          u = -1;
        }
      }
      if (t === -1 || r === -1 || u === 0 || u === 1 && t === r - 1 && t === c + 1) {
        if (r !== -1) {
          if (c === 0 && s) {
            i.base = i.name = e.slice(1, r);
          } else {
            i.base = i.name = e.slice(c, r);
          }
        }
      } else {
        if (c === 0 && s) {
          i.name = e.slice(1, t);
          i.base = e.slice(1, r);
        } else {
          i.name = e.slice(c, t);
          i.base = e.slice(c, r);
        }
        i.ext = e.slice(t, r);
      }
      if (c > 0) {
        i.dir = e.slice(0, c - 1);
      } else if (s) {
        i.dir = "/";
      }
      return i;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  t.posix = t;
  module.exports = t;
}