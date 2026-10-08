// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'VFile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 579776
         */
module.exports = function (module, exports, require) {
  var sourceLocationError = require("source-location-error") /*id: 643059*/;
  let r = {
    basename: function (t, e) {
      let i;
      if (e !== undefined && typeof e != "string") {
        throw TypeError("\"ext\" argument must be a string");
      }
      s(t);
      let n = 0;
      let r = -1;
      let o = t.length;
      if (e === undefined || e.length === 0 || e.length > t.length) {
        while (o--) {
          if (t.codePointAt(o) === 47) {
            if (i) {
              n = o + 1;
              break;
            }
          } else if (r < 0) {
            i = true;
            r = o + 1;
          }
        }
        if (r < 0) {
          return "";
        } else {
          return t.slice(n, r);
        }
      }
      if (e === t) {
        return "";
      }
      let a = -1;
      let l = e.length - 1;
      while (o--) {
        if (t.codePointAt(o) === 47) {
          if (i) {
            n = o + 1;
            break;
          }
        } else {
          if (a < 0) {
            i = true;
            a = o + 1;
          }
          if (l > -1) {
            if (t.codePointAt(o) === e.codePointAt(l--)) {
              if (l < 0) {
                r = o;
              }
            } else {
              l = -1;
              r = a;
            }
          }
        }
      }
      if (n === r) {
        r = a;
      } else if (r < 0) {
        r = t.length;
      }
      return t.slice(n, r);
    },
    dirname: function (t) {
      let e;
      s(t);
      if (t.length === 0) {
        return ".";
      }
      let i = -1;
      let n = t.length;
      while (--n) {
        if (t.codePointAt(n) === 47) {
          if (e) {
            i = n;
            break;
          }
        } else {
          e ||= true;
        }
      }
      if (i < 0) {
        if (t.codePointAt(0) === 47) {
          return "/";
        } else {
          return ".";
        }
      } else if (i === 1 && t.codePointAt(0) === 47) {
        return "//";
      } else {
        return t.slice(0, i);
      }
    },
    extname: function (t) {
      let e;
      s(t);
      let i = t.length;
      let n = -1;
      let r = 0;
      let o = -1;
      let a = 0;
      while (i--) {
        let s = t.codePointAt(i);
        if (s === 47) {
          if (e) {
            r = i + 1;
            break;
          }
          continue;
        }
        if (n < 0) {
          e = true;
          n = i + 1;
        }
        if (s === 46) {
          if (o < 0) {
            o = i;
          } else if (a !== 1) {
            a = 1;
          }
        } else if (o > -1) {
          a = -1;
        }
      }
      if (o < 0 || n < 0 || a === 0 || a === 1 && o === n - 1 && o === r + 1) {
        return "";
      } else {
        return t.slice(o, n);
      }
    },
    join: function (...t) {
      let e;
      let i = -1;
      while (++i < t.length) {
        s(t[i]);
        if (t[i]) {
          e = e === undefined ? t[i] : e + "/" + t[i];
        }
      }
      if (e === undefined) {
        return ".";
      } else {
        return function (t) {
          s(t);
          let e = t.codePointAt(0) === 47;
          let i = function (t, e) {
            let i;
            let n;
            let r = "";
            let s = 0;
            let o = -1;
            let a = 0;
            let l = -1;
            while (++l <= t.length) {
              if (l < t.length) {
                i = t.codePointAt(l);
              } else if (i === 47) {
                break;
              } else {
                i = 47;
              }
              if (i === 47) {
                if (o === l - 1 || a === 1) ;else if (o !== l - 1 && a === 2) {
                  if (r.length < 2 || s !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
                    if (r.length > 2) {
                      if ((n = r.lastIndexOf("/")) !== r.length - 1) {
                        if (n < 0) {
                          r = "";
                          s = 0;
                        } else {
                          s = (r = r.slice(0, n)).length - 1 - r.lastIndexOf("/");
                        }
                        o = l;
                        a = 0;
                        continue;
                      }
                    } else if (r.length > 0) {
                      r = "";
                      s = 0;
                      o = l;
                      a = 0;
                      continue;
                    }
                  }
                  if (e) {
                    r = r.length > 0 ? r + "/.." : "..";
                    s = 2;
                  }
                } else {
                  if (r.length > 0) {
                    r += "/" + t.slice(o + 1, l);
                  } else {
                    r = t.slice(o + 1, l);
                  }
                  s = l - o - 1;
                }
                o = l;
                a = 0;
              } else if (i === 46 && a > -1) {
                a++;
              } else {
                a = -1;
              }
            }
            return r;
          }(t, !e);
          if (i.length === 0 && !e) {
            i = ".";
          }
          if (i.length > 0 && t.codePointAt(t.length - 1) === 47) {
            i += "/";
          }
          if (e) {
            return "/" + i;
          } else {
            return i;
          }
        }(e);
      }
    },
    sep: "/"
  };
  function s(t) {
    if (typeof t != "string") {
      throw TypeError("Path must be a string. Received " + JSON.stringify(t));
    }
  }
  let o = {
    cwd: function () {
      return "/";
    }
  };
  function a(t) {
    return t !== null && typeof t == "object" && !!("href" in t) && !!t.href && !!("protocol" in t) && !!t.protocol && t.auth === undefined;
  }
  let l = ["history", "path", "basename", "stem", "extname", "dirname"];
  class u {
    constructor(t) {
      var e;
      let i;
      let n;
      i = t ? a(t) ? {
        path: t
      } : typeof t == "string" || (e = t) && typeof e == "object" && "byteLength" in e && "byteOffset" in e ? {
        value: t
      } : t : {};
      this.cwd = "cwd" in i ? "" : o.cwd();
      this.data = {};
      this.history = [];
      this.messages = [];
      this.value;
      this.map;
      this.result;
      this.stored;
      let r = -1;
      while (++r < l.length) {
        let t = l[r];
        if (t in i && i[t] !== undefined && i[t] !== null) {
          this[t] = t === "history" ? [...i[t]] : i[t];
        }
      }
      for (n in i) {
        if (!l.includes(n)) {
          this[n] = i[n];
        }
      }
    }
    get basename() {
      if (typeof this.path == "string") {
        return r.basename(this.path);
      } else {
        return undefined;
      }
    }
    set basename(t) {
      c(t, "basename");
      h(t, "basename");
      this.path = r.join(this.dirname || "", t);
    }
    get dirname() {
      if (typeof this.path == "string") {
        return r.dirname(this.path);
      } else {
        return undefined;
      }
    }
    set dirname(t) {
      d(this.basename, "dirname");
      this.path = r.join(t || "", this.basename);
    }
    get extname() {
      if (typeof this.path == "string") {
        return r.extname(this.path);
      } else {
        return undefined;
      }
    }
    set extname(t) {
      h(t, "extname");
      d(this.dirname, "extname");
      if (t) {
        if (t.codePointAt(0) !== 46) {
          throw Error("`extname` must start with `.`");
        }
        if (t.includes(".", 1)) {
          throw Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = r.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(t) {
      if (a(t)) {
        t = function (t) {
          if (typeof t == "string") {
            t = new URL(t);
          } else if (!a(t)) {
            let e = TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + t + "`");
            e.code = "ERR_INVALID_ARG_TYPE";
            throw e;
          }
          if (t.protocol !== "file:") {
            let t = TypeError("The URL must be of scheme file");
            t.code = "ERR_INVALID_URL_SCHEME";
            throw t;
          }
          return function (t) {
            if (t.hostname !== "") {
              let t = TypeError("File URL host must be \"localhost\" or empty on darwin");
              t.code = "ERR_INVALID_FILE_URL_HOST";
              throw t;
            }
            let e = t.pathname;
            let i = -1;
            while (++i < e.length) {
              if (e.codePointAt(i) === 37 && e.codePointAt(i + 1) === 50) {
                let t = e.codePointAt(i + 2);
                if (t === 70 || t === 102) {
                  let t = TypeError("File URL path must not include encoded / characters");
                  t.code = "ERR_INVALID_FILE_URL_PATH";
                  throw t;
                }
              }
            }
            return decodeURIComponent(e);
          }(t);
        }(t);
      }
      c(t, "path");
      if (this.path !== t) {
        this.history.push(t);
      }
    }
    get stem() {
      if (typeof this.path == "string") {
        return r.basename(this.path, this.extname);
      } else {
        return undefined;
      }
    }
    set stem(t) {
      c(t, "stem");
      h(t, "stem");
      this.path = r.join(this.dirname || "", t + (this.extname || ""));
    }
    fail(t, e, i) {
      let n = this.message(t, e, i);
      n.fatal = true;
      throw n;
    }
    info(t, e, i) {
      let n = this.message(t, e, i);
      n.fatal = undefined;
      return n;
    }
    message(t, e, i) {
      let r = new sourceLocationError.SourceLocationError(t, e, i);
      if (this.path) {
        r.name = this.path + ":" + r.name;
        r.file = this.path;
      }
      r.fatal = false;
      this.messages.push(r);
      return r;
    }
    toString(t) {
      if (this.value === undefined) {
        return "";
      } else if (typeof this.value == "string") {
        return this.value;
      } else {
        return new TextDecoder(t || undefined).decode(this.value);
      }
    }
  }
  function h(t, e) {
    if (t && t.includes(r.sep)) {
      throw Error("`" + e + "` cannot be a path: did not expect `" + r.sep + "`");
    }
  }
  function c(t, e) {
    if (!t) {
      throw Error("`" + e + "` cannot be empty");
    }
  }
  function d(t, e) {
    if (!t) {
      throw Error("Setting `" + e + "` requires `path` to be set too");
    }
  }
  require.d(exports, {
    VFile: function () {
      return u;
    }
  });
}