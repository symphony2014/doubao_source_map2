// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LanguageDetector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 643576
         */
module.exports = function (module, exports, require) {
  let {
    slice: r,
    forEach: i
  } = [];
  let o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  let a = function (e, t, n = {
    path: "/"
  }) {
    let r = encodeURIComponent(t);
    let i = `${e}=${r}`;
    if (n.maxAge > 0) {
      let e = n.maxAge - 0;
      if (Number.isNaN(e)) {
        throw Error("maxAge should be a Number");
      }
      i += `; Max-Age=${Math.floor(e)}`;
    }
    if (n.domain) {
      if (!o.test(n.domain)) {
        throw TypeError("option domain is invalid");
      }
      i += `; Domain=${n.domain}`;
    }
    if (n.path) {
      if (!o.test(n.path)) {
        throw TypeError("option path is invalid");
      }
      i += `; Path=${n.path}`;
    }
    if (n.expires) {
      if (typeof n.expires.toUTCString != "function") {
        throw TypeError("option expires is invalid");
      }
      i += `; Expires=${n.expires.toUTCString()}`;
    }
    if (n.httpOnly) {
      i += "; HttpOnly";
    }
    if (n.secure) {
      i += "; Secure";
    }
    if (n.sameSite) {
      switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case true:
        case "strict":
          i += "; SameSite=Strict";
          break;
        case "lax":
          i += "; SameSite=Lax";
          break;
        case "none":
          i += "; SameSite=None";
          break;
        default:
          throw TypeError("option sameSite is invalid");
      }
    }
    if (n.partitioned) {
      i += "; Partitioned";
    }
    return i;
  };
  let s = {
    create(e, t, n, r, i = {
      path: "/",
      sameSite: "strict"
    }) {
      if (n) {
        i.expires = new Date();
        i.expires.setTime(i.expires.getTime() + n * 60000);
      }
      if (r) {
        i.domain = r;
      }
      document.cookie = a(e, t, i);
    },
    read(e) {
      let t = `${e}=`;
      let n = document.cookie.split(";");
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        while (r.charAt(0) === " ") {
          r = r.substring(1, r.length);
        }
        if (r.indexOf(t) === 0) {
          return r.substring(t.length, r.length);
        }
      }
      return null;
    },
    remove(e, t) {
      this.create(e, "", -1, t);
    }
  };
  var u = {
    name: "cookie",
    lookup(e) {
      let {
        lookupCookie: t
      } = e;
      if (t && typeof document != "undefined") {
        return s.read(t) || undefined;
      }
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: i,
        cookieOptions: o
      } = t;
      if (n && typeof document != "undefined") {
        s.create(n, e, r, i, o);
      }
    }
  };
  var c = {
    name: "querystring",
    lookup(e) {
      let t;
      let {
        lookupQuerystring: n
      } = e;
      if (typeof window != "undefined") {
        var r;
        let {
          search: e
        } = window.location;
        if (!window.location.search && ((r = window.location.hash) === null || r === undefined ? undefined : r.indexOf("?")) > -1) {
          e = window.location.hash.substring(window.location.hash.indexOf("?"));
        }
        let i = e.substring(1).split("&");
        for (let e = 0; e < i.length; e++) {
          let r = i[e].indexOf("=");
          if (r > 0 && i[e].substring(0, r) === n) {
            t = i[e].substring(r + 1);
          }
        }
      }
      return t;
    }
  };
  var l = {
    name: "hash",
    lookup(e) {
      let t;
      let {
        lookupHash: n,
        lookupFromHashIndex: r
      } = e;
      if (typeof window != "undefined") {
        let {
          hash: e
        } = window.location;
        if (e && e.length > 2) {
          let o = e.substring(1);
          if (n) {
            let e = o.split("&");
            for (let r = 0; r < e.length; r++) {
              let i = e[r].indexOf("=");
              if (i > 0 && e[r].substring(0, i) === n) {
                t = e[r].substring(i + 1);
              }
            }
          }
          if (t) {
            return t;
          }
          if (!t && r > -1) {
            var i;
            let t = e.match(/\/([a-zA-Z-]*)/g);
            if (!Array.isArray(t)) {
              return;
            }
            if ((i = t[typeof r == "number" ? r : 0]) === null || i === undefined) {
              return undefined;
            } else {
              return i.replace("/", "");
            }
          }
        }
      }
      return t;
    }
  };
  let f = null;
  let h = () => {
    if (f !== null) {
      return f;
    }
    try {
      if (!(f = typeof window != "undefined" && window.localStorage !== null)) {
        return false;
      }
      let e = "i18next.translate.boo";
      window.localStorage.setItem(e, "foo");
      window.localStorage.removeItem(e);
    } catch (e) {
      f = false;
    }
    return f;
  };
  var d = {
    name: "localStorage",
    lookup(e) {
      let {
        lookupLocalStorage: t
      } = e;
      if (t && h()) {
        return window.localStorage.getItem(t) || undefined;
      }
    },
    cacheUserLanguage(e, t) {
      let {
        lookupLocalStorage: n
      } = t;
      if (n && h()) {
        window.localStorage.setItem(n, e);
      }
    }
  };
  let p = null;
  let g = () => {
    if (p !== null) {
      return p;
    }
    try {
      if (!(p = typeof window != "undefined" && window.sessionStorage !== null)) {
        return false;
      }
      let e = "i18next.translate.boo";
      window.sessionStorage.setItem(e, "foo");
      window.sessionStorage.removeItem(e);
    } catch (e) {
      p = false;
    }
    return p;
  };
  var v = {
    name: "sessionStorage",
    lookup(e) {
      let {
        lookupSessionStorage: t
      } = e;
      if (t && g()) {
        return window.sessionStorage.getItem(t) || undefined;
      }
    },
    cacheUserLanguage(e, t) {
      let {
        lookupSessionStorage: n
      } = t;
      if (n && g()) {
        window.sessionStorage.setItem(n, e);
      }
    }
  };
  var m = {
    name: "navigator",
    lookup(e) {
      let t = [];
      if (typeof navigator != "undefined") {
        let {
          languages: e,
          userLanguage: n,
          language: r
        } = navigator;
        if (e) {
          for (let n = 0; n < e.length; n++) {
            t.push(e[n]);
          }
        }
        if (n) {
          t.push(n);
        }
        if (r) {
          t.push(r);
        }
      }
      if (t.length > 0) {
        return t;
      } else {
        return undefined;
      }
    }
  };
  var y = {
    name: "htmlTag",
    lookup(e) {
      let t;
      let {
        htmlTag: n
      } = e;
      let r = n || (typeof document != "undefined" ? document.documentElement : null);
      if (r && typeof r.getAttribute == "function") {
        t = r.getAttribute("lang");
      }
      return t;
    }
  };
  var b = {
    name: "path",
    lookup(e) {
      var t;
      let {
        lookupFromPathIndex: n
      } = e;
      if (typeof window == "undefined") {
        return;
      }
      let r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (Array.isArray(r)) {
        if ((t = r[typeof n == "number" ? n : 0]) === null || t === undefined) {
          return undefined;
        } else {
          return t.replace("/", "");
        }
      }
    }
  };
  var _ = {
    name: "subdomain",
    lookup(e) {
      var t;
      var n;
      let {
        lookupFromSubdomainIndex: r
      } = e;
      let i = typeof window != "undefined" && ((n = window.location) === null || n === undefined ? undefined : (t = n.hostname) === null || t === undefined ? undefined : t.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
      if (i) {
        return i[typeof r == "number" ? r + 1 : 1];
      }
    }
  };
  let w = false;
  try {
    document.cookie;
    w = true;
  } catch (e) {}
  let E = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
  if (!w) {
    E.splice(1, 1);
  }
  let S = () => ({
    order: E,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: e => e
  });
  class x {
    init(e = {
      languageUtils: {}
    }, t = {}, n = {}) {
      this.services = e;
      this.options = function (e) {
        i.call(r.call(arguments, 1), t => {
          if (t) {
            for (let n in t) {
              if (e[n] === undefined) {
                e[n] = t[n];
              }
            }
          }
        });
        return e;
      }(t, this.options || {}, S());
      if (typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
        this.options.convertDetectedLanguage = e => e.replace("-", "_");
      }
      if (this.options.lookupFromUrlIndex) {
        this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      }
      this.i18nOptions = n;
      this.addDetector(u);
      this.addDetector(c);
      this.addDetector(d);
      this.addDetector(v);
      this.addDetector(m);
      this.addDetector(y);
      this.addDetector(b);
      this.addDetector(_);
      this.addDetector(l);
    }
    addDetector(e) {
      this.detectors[e.name] = e;
      return this;
    }
    detect(e = this.options.order) {
      let t = [];
      e.forEach(e => {
        if (this.detectors[e]) {
          let n = this.detectors[e].lookup(this.options);
          if (n && typeof n == "string") {
            n = [n];
          }
          if (n) {
            t = t.concat(n);
          }
        }
      });
      t = t.filter(e => e != null && (typeof e != "string" || ![/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(t => t.test(e)))).map(e => this.options.convertDetectedLanguage(e));
      if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) {
        return t;
      } else if (t.length > 0) {
        return t[0];
      } else {
        return null;
      }
    }
    cacheUserLanguage(e, t = this.options.caches) {
      if (t) {
        if (!this.options.excludeCacheFor || !(this.options.excludeCacheFor.indexOf(e) > -1)) {
          t.forEach(t => {
            if (this.detectors[t]) {
              this.detectors[t].cacheUserLanguage(e, this.options);
            }
          });
        }
      }
    }
    constructor(e, t = {}) {
      this.type = "languageDetector";
      this.detectors = {};
      this.init(e, t);
    }
  }
  x.type = "languageDetector";
  require.d(exports, {
    LanguageDetector: function () {
      return x;
    }
  });
}