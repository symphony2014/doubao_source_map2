// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'uriUtils'
// - Renamed export 'o' to 'Uri'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 851891
         */
module.exports = function (module, exports, require) {
  var n;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  function a(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  (() => {
    var e = {
      470: e => {
        function t(e) {
          if (typeof e != "string") {
            throw TypeError("Path must be a string. Received " + JSON.stringify(e));
          }
        }
        function r(e, t) {
          var r;
          var n = "";
          var i = 0;
          var a = -1;
          var s = 0;
          var o = 0;
          for (; o <= e.length; ++o) {
            if (o < e.length) {
              r = e.charCodeAt(o);
            } else {
              if (r === 47) {
                break;
              }
              r = 47;
            }
            if (r === 47) {
              if (a === o - 1 || s === 1) ;else if (a !== o - 1 && s === 2) {
                if (n.length < 2 || i !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                  if (n.length > 2) {
                    var l = n.lastIndexOf("/");
                    if (l !== n.length - 1) {
                      if (l === -1) {
                        n = "";
                        i = 0;
                      } else {
                        i = (n = n.slice(0, l)).length - 1 - n.lastIndexOf("/");
                      }
                      a = o;
                      s = 0;
                      continue;
                    }
                  } else if (n.length === 2 || n.length === 1) {
                    n = "";
                    i = 0;
                    a = o;
                    s = 0;
                    continue;
                  }
                }
                if (t) {
                  if (n.length > 0) {
                    n += "/..";
                  } else {
                    n = "..";
                  }
                  i = 2;
                }
              } else {
                if (n.length > 0) {
                  n += "/" + e.slice(a + 1, o);
                } else {
                  n = e.slice(a + 1, o);
                }
                i = o - a - 1;
              }
              a = o;
              s = 0;
            } else if (r === 46 && s !== -1) {
              ++s;
            } else {
              s = -1;
            }
          }
          return n;
        }
        var n = {
          resolve: function () {
            var e;
            var n;
            var a = "";
            var s = false;
            var o = arguments.length - 1;
            for (; o >= -1 && !s; o--) {
              if (o >= 0) {
                e = arguments[o];
              } else {
                if (n === undefined) {
                  n = processBrowserShim.cwd();
                }
                e = n;
              }
              t(e);
              if (e.length !== 0) {
                a = e + "/" + a;
                s = e.charCodeAt(0) === 47;
              }
            }
            a = r(a, !s);
            if (s) {
              if (a.length > 0) {
                return "/" + a;
              } else {
                return "/";
              }
            } else if (a.length > 0) {
              return a;
            } else {
              return ".";
            }
          },
          normalize: function (e) {
            t(e);
            if (e.length === 0) {
              return ".";
            }
            var n = e.charCodeAt(0) === 47;
            var i = e.charCodeAt(e.length - 1) === 47;
            if ((e = r(e, !n)).length === 0 && !n) {
              e = ".";
            }
            if (e.length > 0 && i) {
              e += "/";
            }
            if (n) {
              return "/" + e;
            } else {
              return e;
            }
          },
          isAbsolute: function (e) {
            t(e);
            return e.length > 0 && e.charCodeAt(0) === 47;
          },
          join: function () {
            if (arguments.length == 0) {
              return ".";
            }
            var e;
            var r = 0;
            for (; r < arguments.length; ++r) {
              var i = arguments[r];
              t(i);
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
              return n.normalize(e);
            }
          },
          relative: function (e, r) {
            t(e);
            t(r);
            if (e === r || (e = n.resolve(e)) === (r = n.resolve(r))) {
              return "";
            }
            for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i);
            var a = e.length;
            var s = a - i;
            var o = 1;
            for (; o < r.length && r.charCodeAt(o) === 47; ++o);
            var l = r.length - o;
            var u = s < l ? s : l;
            var c = -1;
            var d = 0;
            for (; d <= u; ++d) {
              if (d === u) {
                if (l > u) {
                  if (r.charCodeAt(o + d) === 47) {
                    return r.slice(o + d + 1);
                  }
                  if (d === 0) {
                    return r.slice(o + d);
                  }
                } else if (s > u) {
                  if (e.charCodeAt(i + d) === 47) {
                    c = d;
                  } else if (d === 0) {
                    c = 0;
                  }
                }
                break;
              }
              var h = e.charCodeAt(i + d);
              if (h !== r.charCodeAt(o + d)) {
                break;
              }
              if (h === 47) {
                c = d;
              }
            }
            var f = "";
            for (d = i + c + 1; d <= a; ++d) {
              if (d === a || e.charCodeAt(d) === 47) {
                if (f.length === 0) {
                  f += "..";
                } else {
                  f += "/..";
                }
              }
            }
            if (f.length > 0) {
              return f + r.slice(o + c);
            } else {
              o += c;
              if (r.charCodeAt(o) === 47) {
                ++o;
              }
              return r.slice(o);
            }
          },
          _makeLong: function (e) {
            return e;
          },
          dirname: function (e) {
            t(e);
            if (e.length === 0) {
              return ".";
            }
            var r = e.charCodeAt(0);
            var n = r === 47;
            var i = -1;
            var a = true;
            var s = e.length - 1;
            for (; s >= 1; --s) {
              if ((r = e.charCodeAt(s)) === 47) {
                if (!a) {
                  i = s;
                  break;
                }
              } else {
                a = false;
              }
            }
            if (i === -1) {
              if (n) {
                return "/";
              } else {
                return ".";
              }
            } else if (n && i === 1) {
              return "//";
            } else {
              return e.slice(0, i);
            }
          },
          basename: function (e, r) {
            if (r !== undefined && typeof r != "string") {
              throw TypeError("\"ext\" argument must be a string");
            }
            t(e);
            var n;
            var i = 0;
            var a = -1;
            var s = true;
            if (r !== undefined && r.length > 0 && r.length <= e.length) {
              if (r.length === e.length && r === e) {
                return "";
              }
              var o = r.length - 1;
              var l = -1;
              for (n = e.length - 1; n >= 0; --n) {
                var u = e.charCodeAt(n);
                if (u === 47) {
                  if (!s) {
                    i = n + 1;
                    break;
                  }
                } else {
                  if (l === -1) {
                    s = false;
                    l = n + 1;
                  }
                  if (o >= 0) {
                    if (u === r.charCodeAt(o)) {
                      if (--o == -1) {
                        a = n;
                      }
                    } else {
                      o = -1;
                      a = l;
                    }
                  }
                }
              }
              if (i === a) {
                a = l;
              } else if (a === -1) {
                a = e.length;
              }
              return e.slice(i, a);
            }
            for (n = e.length - 1; n >= 0; --n) {
              if (e.charCodeAt(n) === 47) {
                if (!s) {
                  i = n + 1;
                  break;
                }
              } else if (a === -1) {
                s = false;
                a = n + 1;
              }
            }
            if (a === -1) {
              return "";
            } else {
              return e.slice(i, a);
            }
          },
          extname: function (e) {
            t(e);
            var r = -1;
            var n = 0;
            var i = -1;
            var a = true;
            var s = 0;
            var o = e.length - 1;
            for (; o >= 0; --o) {
              var l = e.charCodeAt(o);
              if (l !== 47) {
                if (i === -1) {
                  a = false;
                  i = o + 1;
                }
                if (l === 46) {
                  if (r === -1) {
                    r = o;
                  } else if (s !== 1) {
                    s = 1;
                  }
                } else if (r !== -1) {
                  s = -1;
                }
              } else if (!a) {
                n = o + 1;
                break;
              }
            }
            if (r === -1 || i === -1 || s === 0 || s === 1 && r === i - 1 && r === n + 1) {
              return "";
            } else {
              return e.slice(r, i);
            }
          },
          format: function (e) {
            var t;
            var r;
            if (e === null || typeof e != "object") {
              throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
            }
            t = e.dir || e.root;
            r = e.base || (e.name || "") + (e.ext || "");
            if (t) {
              if (t === e.root) {
                return t + r;
              } else {
                return t + "/" + r;
              }
            } else {
              return r;
            }
          },
          parse: function (e) {
            t(e);
            var r = {
              root: "",
              dir: "",
              base: "",
              ext: "",
              name: ""
            };
            if (e.length === 0) {
              return r;
            }
            var n;
            var i = e.charCodeAt(0);
            var a = i === 47;
            if (a) {
              r.root = "/";
              n = 1;
            } else {
              n = 0;
            }
            var s = -1;
            var o = 0;
            var l = -1;
            var u = true;
            var c = e.length - 1;
            var d = 0;
            for (; c >= n; --c) {
              if ((i = e.charCodeAt(c)) !== 47) {
                if (l === -1) {
                  u = false;
                  l = c + 1;
                }
                if (i === 46) {
                  if (s === -1) {
                    s = c;
                  } else if (d !== 1) {
                    d = 1;
                  }
                } else if (s !== -1) {
                  d = -1;
                }
              } else if (!u) {
                o = c + 1;
                break;
              }
            }
            if (s === -1 || l === -1 || d === 0 || d === 1 && s === l - 1 && s === o + 1) {
              if (l !== -1) {
                r.base = r.name = o === 0 && a ? e.slice(1, l) : e.slice(o, l);
              }
            } else {
              if (o === 0 && a) {
                r.name = e.slice(1, s);
                r.base = e.slice(1, l);
              } else {
                r.name = e.slice(o, s);
                r.base = e.slice(o, l);
              }
              r.ext = e.slice(s, l);
            }
            if (o > 0) {
              r.dir = e.slice(0, o - 1);
            } else if (a) {
              r.dir = "/";
            }
            return r;
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null
        };
        n.posix = n;
        e.exports = n;
      }
    };
    var t = {};
    function r(n) {
      var i = t[n];
      if (i !== undefined) {
        return i.exports;
      }
      var a = t[n] = {
        exports: {}
      };
      e[n](a, a.exports, r);
      return a.exports;
    }
    r.d = (e, t) => {
      for (var n in t) {
        if (r.o(t, n) && !r.o(e, n)) {
          Object.defineProperty(e, n, {
            enumerable: true,
            get: t[n]
          });
        }
      }
    };
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    r.r = e => {
      if (typeof Symbol != "undefined" && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      });
    };
    var s = {};
    (() => {
      let e;
      r.r(s);
      r.d(s, {
        URI: () => c,
        Utils: () => $
      });
      if (typeof processBrowserShim == "object") {
        e = processBrowserShim.platform === "win32";
      } else if (typeof navigator == "object") {
        e = navigator.userAgent.indexOf("Windows") >= 0;
      }
      let t = /^\w[\w\d+.-]*$/;
      let n = /^\//;
      let o = /^\/\//;
      function l(e, r) {
        if (!e.scheme && r) {
          throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
        }
        if (e.scheme && !t.test(e.scheme)) {
          throw Error("[UriError]: Scheme contains illegal characters.");
        }
        if (e.path) {
          if (e.authority) {
            if (!n.test(e.path)) {
              throw Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
            }
          } else if (o.test(e.path)) {
            throw Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
          }
        }
      }
      let u = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class c {
        static isUri(e) {
          return e instanceof c || !!e && typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
        }
        get fsPath() {
          return g(this, false);
        }
        with(e) {
          if (!e) {
            return this;
          }
          let {
            scheme: t,
            authority: r,
            path: n,
            query: i,
            fragment: a
          } = e;
          if (t === undefined) {
            t = this.scheme;
          } else if (t === null) {
            t = "";
          }
          if (r === undefined) {
            r = this.authority;
          } else if (r === null) {
            r = "";
          }
          if (n === undefined) {
            n = this.path;
          } else if (n === null) {
            n = "";
          }
          if (i === undefined) {
            i = this.query;
          } else if (i === null) {
            i = "";
          }
          if (a === undefined) {
            a = this.fragment;
          } else if (a === null) {
            a = "";
          }
          if (t === this.scheme && r === this.authority && n === this.path && i === this.query && a === this.fragment) {
            return this;
          } else {
            return new h(t, r, n, i, a);
          }
        }
        static parse(e, t = false) {
          let r = u.exec(e);
          if (r) {
            return new h(r[2] || "", v(r[4] || ""), v(r[5] || ""), v(r[7] || ""), v(r[9] || ""), t);
          } else {
            return new h("", "", "", "", "");
          }
        }
        static file(t) {
          let r = "";
          if (e) {
            t = t.replace(/\\/g, "/");
          }
          if (t[0] === "/" && t[1] === "/") {
            let e = t.indexOf("/", 2);
            if (e === -1) {
              r = t.substring(2);
              t = "/";
            } else {
              r = t.substring(2, e);
              t = t.substring(e) || "/";
            }
          }
          return new h("file", r, t, "", "");
        }
        static from(e) {
          let t = new h(e.scheme, e.authority, e.path, e.query, e.fragment);
          l(t, true);
          return t;
        }
        toString(e = false) {
          return y(this, e);
        }
        toJSON() {
          return this;
        }
        static revive(e) {
          if (e) {
            if (e instanceof c) {
              return e;
            }
            {
              let t = new h(e);
              t._formatted = e.external;
              t._fsPath = e._sep === d ? e.fsPath : null;
              return t;
            }
          }
          return e;
        }
        constructor(e, t, r, n, i, s = false) {
          a(this, "scheme", undefined);
          a(this, "authority", undefined);
          a(this, "path", undefined);
          a(this, "query", undefined);
          a(this, "fragment", undefined);
          if (typeof e == "object") {
            this.scheme = e.scheme || "";
            this.authority = e.authority || "";
            this.path = e.path || "";
            this.query = e.query || "";
            this.fragment = e.fragment || "";
          } else {
            this.scheme = e || s ? e : "file";
            this.authority = t || "";
            this.path = function (e, t) {
              switch (e) {
                case "https":
                case "http":
                case "file":
                  if (t) {
                    if (t[0] !== "/") {
                      t = "/" + t;
                    }
                  } else {
                    t = "/";
                  }
              }
              return t;
            }(this.scheme, r || "");
            this.query = n || "";
            this.fragment = i || "";
            l(this, s);
          }
        }
      }
      let d = e ? 1 : undefined;
      class h extends c {
        get fsPath() {
          this._fsPath ||= g(this, false);
          return this._fsPath;
        }
        toString(e = false) {
          if (e) {
            return y(this, true);
          } else {
            this._formatted ||= y(this, false);
            return this._formatted;
          }
        }
        toJSON() {
          let e = {
            $mid: 1
          };
          if (this._fsPath) {
            e.fsPath = this._fsPath;
            e._sep = d;
          }
          if (this._formatted) {
            e.external = this._formatted;
          }
          if (this.path) {
            e.path = this.path;
          }
          if (this.scheme) {
            e.scheme = this.scheme;
          }
          if (this.authority) {
            e.authority = this.authority;
          }
          if (this.query) {
            e.query = this.query;
          }
          if (this.fragment) {
            e.fragment = this.fragment;
          }
          return e;
        }
        constructor(...e) {
          super(...e);
          a(this, "_formatted", null);
          a(this, "_fsPath", null);
        }
      }
      let f = {
        58: "%3A",
        47: "%2F",
        63: "%3F",
        35: "%23",
        91: "%5B",
        93: "%5D",
        64: "%40",
        33: "%21",
        36: "%24",
        38: "%26",
        39: "%27",
        40: "%28",
        41: "%29",
        42: "%2A",
        43: "%2B",
        44: "%2C",
        59: "%3B",
        61: "%3D",
        32: "%20"
      };
      function p(e, t, r) {
        let n;
        let i = -1;
        for (let a = 0; a < e.length; a++) {
          let s = e.charCodeAt(a);
          if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || s === 45 || s === 46 || s === 95 || s === 126 || t && s === 47 || r && s === 91 || r && s === 93 || r && s === 58) {
            if (i !== -1) {
              n += encodeURIComponent(e.substring(i, a));
              i = -1;
            }
            if (n !== undefined) {
              n += e.charAt(a);
            }
          } else {
            if (n === undefined) {
              n = e.substr(0, a);
            }
            let t = f[s];
            if (t !== undefined) {
              if (i !== -1) {
                n += encodeURIComponent(e.substring(i, a));
                i = -1;
              }
              n += t;
            } else if (i === -1) {
              i = a;
            }
          }
        }
        if (i !== -1) {
          n += encodeURIComponent(e.substring(i));
        }
        if (n !== undefined) {
          return n;
        } else {
          return e;
        }
      }
      function m(e) {
        let t;
        for (let r = 0; r < e.length; r++) {
          let n = e.charCodeAt(r);
          if (n === 35 || n === 63) {
            if (t === undefined) {
              t = e.substr(0, r);
            }
            t += f[n];
          } else if (t !== undefined) {
            t += e[r];
          }
        }
        if (t !== undefined) {
          return t;
        } else {
          return e;
        }
      }
      function g(t, r) {
        let n;
        n = t.authority && t.path.length > 1 && t.scheme === "file" ? `//${t.authority}${t.path}` : t.path.charCodeAt(0) === 47 && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && t.path.charCodeAt(2) === 58 ? r ? t.path.substr(1) : t.path[1].toLowerCase() + t.path.substr(2) : t.path;
        if (e) {
          n = n.replace(/\//g, "\\");
        }
        return n;
      }
      function y(e, t) {
        let r = t ? m : p;
        let n = "";
        let {
          scheme: i,
          authority: a,
          path: s,
          query: o,
          fragment: l
        } = e;
        if (i) {
          n += i;
          n += ":";
        }
        if (a || i === "file") {
          n += "/";
          n += "/";
        }
        if (a) {
          let e = a.indexOf("@");
          if (e !== -1) {
            let t = a.substr(0, e);
            a = a.substr(e + 1);
            if ((e = t.lastIndexOf(":")) === -1) {
              n += r(t, false, false);
            } else {
              n += r(t.substr(0, e), false, false);
              n += ":";
              n += r(t.substr(e + 1), false, true);
            }
            n += "@";
          }
          if ((e = (a = a.toLowerCase()).lastIndexOf(":")) === -1) {
            n += r(a, false, true);
          } else {
            n += r(a.substr(0, e), false, true);
            n += a.substr(e);
          }
        }
        if (s) {
          if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
            let e = s.charCodeAt(1);
            if (e >= 65 && e <= 90) {
              s = `/${String.fromCharCode(e + 32)}:${s.substr(3)}`;
            }
          } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
            let e = s.charCodeAt(0);
            if (e >= 65 && e <= 90) {
              s = `${String.fromCharCode(e + 32)}:${s.substr(2)}`;
            }
          }
          n += r(s, true, false);
        }
        if (o) {
          n += "?";
          n += r(o, false, false);
        }
        if (l) {
          n += "#";
          n += t ? l : p(l, false, false);
        }
        return n;
      }
      let T = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function v(e) {
        if (e.match(T)) {
          return e.replace(T, e => function e(t) {
            try {
              return decodeURIComponent(t);
            } catch {
              if (t.length > 3) {
                return t.substr(0, 3) + e(t.substr(3));
              } else {
                return t;
              }
            }
          }(e));
        } else {
          return e;
        }
      }
      var R;
      var $;
      var E = r(470);
      let A = E.posix || E;
      (R = $ ||= {}).joinPath = function (e) {
        var t = arguments.length;
        var r = Array(t > 1 ? t - 1 : 0);
        var n = 1;
        for (; n < t; n++) {
          r[n - 1] = arguments[n];
        }
        return e.with({
          path: A.join(e.path, ...r)
        });
      };
      R.resolvePath = function (e) {
        var t = arguments.length;
        var r = Array(t > 1 ? t - 1 : 0);
        var n = 1;
        for (; n < t; n++) {
          r[n - 1] = arguments[n];
        }
        let i = e.path;
        let a = false;
        if (i[0] !== "/") {
          i = "/" + i;
          a = true;
        }
        let s = A.resolve(i, ...r);
        if (a && s[0] === "/" && !e.authority) {
          s = s.substring(1);
        }
        return e.with({
          path: s
        });
      };
      R.dirname = function (e) {
        if (e.path.length === 0 || e.path === "/") {
          return e;
        }
        let t = A.dirname(e.path);
        if (t.length === 1 && t.charCodeAt(0) === 46) {
          t = "";
        }
        return e.with({
          path: t
        });
      };
      R.basename = function (e) {
        return A.basename(e.path);
      };
      R.extname = function (e) {
        return A.extname(e.path);
      };
    })();
    n = s;
  })();
  let {
    URI: s,
    Utils: o
  } = n;
  require.d(exports, {
    uriUtils: function () {
      return o;
    },
    Uri: function () {
      return s;
    }
  });
}