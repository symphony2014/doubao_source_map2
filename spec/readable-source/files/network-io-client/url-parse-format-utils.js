// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'punycodeLib'
// - Resolved require(663890) to 'punycode-lib'
// - Renamed variable 'i' to 'typeCheckUtils_1'
// - Resolved require(377642) to 'type-check-utils_1'
// - Renamed variable 'm' to 'queryStringUtils_3_1'
// - Resolved require(626733) to 'query-string-utils_3_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 224643
         */
module.exports = function (module, exports, require) {
  var punycodeLib = require("punycode-lib") /*id: 663890*/;
  var typeCheckUtils_1 = require("type-check-utils_1") /*id: 377642*/;
  function s() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  exports.parse = b;
  exports.resolve = w;
  exports.resolveObject = k;
  exports.format = O;
  exports.Url = s;
  var o = /^([a-z0-9.+-]+:)/i;
  var a = /:[0-9]*$/;
  var c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
  var l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]));
  var h = ["%", "/", "?", ";", "#"].concat(l);
  var u = ["/", "?", "#"];
  var f = 255;
  var p = /^[+a-z0-9A-Z_-]{0,63}$/;
  var d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var y = {
    javascript: true,
    "javascript:": true
  };
  var g = {
    javascript: true,
    "javascript:": true
  };
  var v = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  var queryStringUtils_3_1 = require("query-string-utils_3_1") /*id: 626733*/;
  function b(e, t, r) {
    if (e && typeCheckUtils_1.isObject(e) && e instanceof s) {
      return e;
    }
    var n = new s();
    n.parse(e, t, r);
    return n;
  }
  function O(e) {
    if (typeCheckUtils_1.isString(e)) {
      e = b(e);
    }
    if (e instanceof s) {
      return e.format();
    } else {
      return s.prototype.format.call(e);
    }
  }
  function w(e, t) {
    return b(e, false, true).resolve(t);
  }
  function k(e, t) {
    if (e) {
      return b(e, false, true).resolveObject(t);
    } else {
      return t;
    }
  }
  s.prototype.parse = function (e, t, r) {
    if (!typeCheckUtils_1.isString(e)) {
      throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    }
    var s = e.indexOf("?");
    var a = s !== -1 && s < e.indexOf("#") ? "?" : "#";
    var b = e.split(a);
    var O = /\\/g;
    b[0] = b[0].replace(O, "/");
    var w = e = b.join(a);
    w = w.trim();
    if (!r && e.split("#").length === 1) {
      var k = c.exec(w);
      if (k) {
        this.path = w;
        this.href = w;
        this.pathname = k[1];
        if (k[2]) {
          this.search = k[2];
          if (t) {
            this.query = queryStringUtils_3_1.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (t) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var E = o.exec(w);
    if (E) {
      var S = (E = E[0]).toLowerCase();
      this.protocol = S;
      w = w.substr(E.length);
    }
    if (r || E || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var I = w.substr(0, 2) === "//";
      if (I && (!E || !g[E])) {
        w = w.substr(2);
        this.slashes = true;
      }
    }
    if (!g[E] && (I || E && !v[E])) {
      var T;
      var x;
      var A = -1;
      var C = 0;
      for (; C < u.length; C++) {
        var _ = w.indexOf(u[C]);
        if (_ !== -1 && (A === -1 || _ < A)) {
          A = _;
        }
      }
      if ((x = A === -1 ? w.lastIndexOf("@") : w.lastIndexOf("@", A)) !== -1) {
        T = w.slice(0, x);
        w = w.slice(x + 1);
        this.auth = decodeURIComponent(T);
      }
      A = -1;
      for (var C = 0; C < h.length; C++) {
        var _ = w.indexOf(h[C]);
        if (_ !== -1 && (A === -1 || _ < A)) {
          A = _;
        }
      }
      if (A === -1) {
        A = w.length;
      }
      this.host = w.slice(0, A);
      w = w.slice(A);
      this.parseHost();
      this.hostname = this.hostname || "";
      var N = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!N) {
        var j = this.hostname.split(/\./);
        var C = 0;
        var P = j.length;
        for (; C < P; C++) {
          var R = j[C];
          if (R && !R.match(p)) {
            var $ = "";
            var L = 0;
            var B = R.length;
            for (; L < B; L++) {
              if (R.charCodeAt(L) > 127) {
                $ += "x";
              } else {
                $ += R[L];
              }
            }
            if (!$.match(p)) {
              var F = j.slice(0, C);
              var M = j.slice(C + 1);
              var H = R.match(d);
              if (H) {
                F.push(H[1]);
                M.unshift(H[2]);
              }
              if (M.length) {
                w = "/" + M.join(".") + w;
              }
              this.hostname = F.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > f) {
        this.hostname = "";
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!N) {
        this.hostname = punycodeLib.toASCII(this.hostname);
      }
      var D = this.port ? ":" + this.port : "";
      var q = this.hostname || "";
      this.host = q + D;
      this.href += this.host;
      if (N) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (w[0] !== "/") {
          w = "/" + w;
        }
      }
    }
    if (!y[S]) {
      var C = 0;
      var P = l.length;
      for (; C < P; C++) {
        var U = l[C];
        if (w.indexOf(U) !== -1) {
          var J = encodeURIComponent(U);
          if (J === U) {
            J = escape(U);
          }
          w = w.split(U).join(J);
        }
      }
    }
    var Z = w.indexOf("#");
    if (Z !== -1) {
      this.hash = w.substr(Z);
      w = w.slice(0, Z);
    }
    var V = w.indexOf("?");
    if (V !== -1) {
      this.search = w.substr(V);
      this.query = w.substr(V + 1);
      if (t) {
        this.query = queryStringUtils_3_1.parse(this.query);
      }
      w = w.slice(0, V);
    } else if (t) {
      this.search = "";
      this.query = {};
    }
    if (w) {
      this.pathname = w;
    }
    if (v[S] && this.hostname && !this.pathname) {
      this.pathname = "/";
    }
    if (this.pathname || this.search) {
      var D = this.pathname || "";
      var z = this.search || "";
      this.path = D + z;
    }
    this.href = this.format();
    return this;
  };
  s.prototype.format = function () {
    var e = this.auth || "";
    e &&= (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@";
    var t = this.protocol || "";
    var r = this.pathname || "";
    var n = this.hash || "";
    var s = false;
    var o = "";
    if (this.host) {
      s = e + this.host;
    } else if (this.hostname) {
      s = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        s += ":" + this.port;
      }
    }
    if (this.query && typeCheckUtils_1.isObject(this.query) && Object.keys(this.query).length) {
      o = queryStringUtils_3_1.stringify(this.query);
    }
    var a = this.search || o && "?" + o || "";
    if (t && t.substr(-1) !== ":") {
      t += ":";
    }
    if (this.slashes || (!t || v[t]) && s !== false) {
      s = "//" + (s || "");
      if (r && r.charAt(0) !== "/") {
        r = "/" + r;
      }
    } else {
      s ||= "";
    }
    if (n && n.charAt(0) !== "#") {
      n = "#" + n;
    }
    if (a && a.charAt(0) !== "?") {
      a = "?" + a;
    }
    return t + s + (r = r.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    })) + (a = a.replace("#", "%23")) + n;
  };
  s.prototype.resolve = function (e) {
    return this.resolveObject(b(e, false, true)).format();
  };
  s.prototype.resolveObject = function (e) {
    if (typeCheckUtils_1.isString(e)) {
      var t = new s();
      t.parse(e, false, true);
      e = t;
    }
    var r = new s();
    var n = Object.keys(this);
    var o = 0;
    for (; o < n.length; o++) {
      var a = n[o];
      r[a] = this[a];
    }
    r.hash = e.hash;
    if (e.href === "") {
      r.href = r.format();
      return r;
    }
    if (e.slashes && !e.protocol) {
      var c = Object.keys(e);
      var l = 0;
      for (; l < c.length; l++) {
        var h = c[l];
        if (h !== "protocol") {
          r[h] = e[h];
        }
      }
      if (v[r.protocol] && r.hostname && !r.pathname) {
        r.path = r.pathname = "/";
      }
      r.href = r.format();
      return r;
    }
    if (e.protocol && e.protocol !== r.protocol) {
      if (!v[e.protocol]) {
        var u = Object.keys(e);
        var f = 0;
        for (; f < u.length; f++) {
          var p = u[f];
          r[p] = e[p];
        }
        r.href = r.format();
        return r;
      }
      r.protocol = e.protocol;
      if (e.host || g[e.protocol]) {
        r.pathname = e.pathname;
      } else {
        for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
        e.host ||= "";
        e.hostname ||= "";
        if (d[0] !== "") {
          d.unshift("");
        }
        if (d.length < 2) {
          d.unshift("");
        }
        r.pathname = d.join("/");
      }
      r.search = e.search;
      r.query = e.query;
      r.host = e.host || "";
      r.auth = e.auth;
      r.hostname = e.hostname || e.host;
      r.port = e.port;
      if (r.pathname || r.search) {
        var y = r.pathname || "";
        var m = r.search || "";
        r.path = y + m;
      }
      r.slashes = r.slashes || e.slashes;
      r.href = r.format();
      return r;
    }
    var b = r.pathname && r.pathname.charAt(0) === "/";
    var O = e.host || e.pathname && e.pathname.charAt(0) === "/";
    var w = O || b || r.host && e.pathname;
    var k = w;
    var E = r.pathname && r.pathname.split("/") || [];
    var d = e.pathname && e.pathname.split("/") || [];
    var S = r.protocol && !v[r.protocol];
    if (S) {
      r.hostname = "";
      r.port = null;
      if (r.host) {
        if (E[0] === "") {
          E[0] = r.host;
        } else {
          E.unshift(r.host);
        }
      }
      r.host = "";
      if (e.protocol) {
        e.hostname = null;
        e.port = null;
        if (e.host) {
          if (d[0] === "") {
            d[0] = e.host;
          } else {
            d.unshift(e.host);
          }
        }
        e.host = null;
      }
      w = w && (d[0] === "" || E[0] === "");
    }
    if (O) {
      r.host = e.host || e.host === "" ? e.host : r.host;
      r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname;
      r.search = e.search;
      r.query = e.query;
      E = d;
    } else if (d.length) {
      E ||= [];
      E.pop();
      E = E.concat(d);
      r.search = e.search;
      r.query = e.query;
    } else if (!typeCheckUtils_1.isNullOrUndefined(e.search)) {
      if (S) {
        r.hostname = r.host = E.shift();
        var I = !!r.host && !!(r.host.indexOf("@") > 0) && r.host.split("@");
        if (I) {
          r.auth = I.shift();
          r.host = r.hostname = I.shift();
        }
      }
      r.search = e.search;
      r.query = e.query;
      if (!typeCheckUtils_1.isNull(r.pathname) || !typeCheckUtils_1.isNull(r.search)) {
        r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "");
      }
      r.href = r.format();
      return r;
    }
    if (!E.length) {
      r.pathname = null;
      if (r.search) {
        r.path = "/" + r.search;
      } else {
        r.path = null;
      }
      r.href = r.format();
      return r;
    }
    var T = E.slice(-1)[0];
    var x = (r.host || e.host || E.length > 1) && (T === "." || T === "..") || T === "";
    var A = 0;
    var C = E.length;
    for (; C >= 0; C--) {
      if ((T = E[C]) === ".") {
        E.splice(C, 1);
      } else if (T === "..") {
        E.splice(C, 1);
        A++;
      } else if (A) {
        E.splice(C, 1);
        A--;
      }
    }
    if (!w && !k) {
      for (; A--; A) {
        E.unshift("..");
      }
    }
    if (w && E[0] !== "" && (!E[0] || E[0].charAt(0) !== "/")) {
      E.unshift("");
    }
    if (x && E.join("/").substr(-1) !== "/") {
      E.push("");
    }
    var _ = E[0] === "" || E[0] && E[0].charAt(0) === "/";
    if (S) {
      r.hostname = r.host = _ ? "" : E.length ? E.shift() : "";
      var I = !!r.host && !!(r.host.indexOf("@") > 0) && r.host.split("@");
      if (I) {
        r.auth = I.shift();
        r.host = r.hostname = I.shift();
      }
    }
    if ((w = w || r.host && E.length) && !_) {
      E.unshift("");
    }
    if (E.length) {
      r.pathname = E.join("/");
    } else {
      r.pathname = null;
      r.path = null;
    }
    if (!typeCheckUtils_1.isNull(r.pathname) || !typeCheckUtils_1.isNull(r.search)) {
      r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "");
    }
    r.auth = e.auth || r.auth;
    r.slashes = r.slashes || e.slashes;
    r.href = r.format();
    return r;
  };
  s.prototype.parseHost = function () {
    var e = this.host;
    var t = a.exec(e);
    if (t) {
      if ((t = t[0]) !== ":") {
        this.port = t.substr(1);
      }
      e = e.substr(0, e.length - t.length);
    }
    if (e) {
      this.hostname = e;
    }
  };
}