// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protocolPortCheck'
// - Resolved require(676076) to 'protocol-port-check'
// - Renamed variable 'i' to 'queryStringUtils_1'
// - Resolved require(391053) to 'query-string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 589701
         */
module.exports = function (module, exports, require) {
  var protocolPortCheck = require("protocol-port-check") /*id: 676076*/;
  var queryStringUtils_1 = require("query-string-utils_1") /*id: 391053*/;
  var o = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
  var s = /[\n\r\t]/g;
  var a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
  var u = /:\d+$/;
  var c = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
  var l = /^[a-zA-Z]:/;
  function p(t) {
    return (t || "").toString().replace(o, "");
  }
  var h = [["#", "hash"], ["?", "query"], function (t, e) {
    if (v(e.protocol)) {
      return t.replace(/\\/g, "/");
    } else {
      return t;
    }
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d*)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
  var f = {
    hash: 1,
    query: 1
  };
  function d(t) {
    var e;
    var r;
    var i = (typeof window != "undefined" ? window : require.g !== undefined ? require.g : typeof self != "undefined" ? self : {}).location || {};
    var o = {};
    var s = typeof (t = t || i);
    if (t.protocol === "blob:") {
      o = new g(unescape(t.pathname), {});
    } else if (s === "string") {
      o = new g(t, {});
      for (r in f) {
        delete o[r];
      }
    } else if (s === "object") {
      for (r in t) {
        if (!(r in f)) {
          o[r] = t[r];
        }
      }
      if (o.slashes === undefined) {
        o.slashes = a.test(t.href);
      }
    }
    return o;
  }
  function v(t) {
    return t === "file:" || t === "ftp:" || t === "http:" || t === "https:" || t === "ws:" || t === "wss:";
  }
  function y(t, e) {
    t = (t = p(t)).replace(s, "");
    e = e || {};
    var n;
    var r = c.exec(t);
    var i = r[1] ? r[1].toLowerCase() : "";
    var o = !!r[2];
    var a = !!r[3];
    var u = 0;
    if (o) {
      if (a) {
        n = r[2] + r[3] + r[4];
        u = r[2].length + r[3].length;
      } else {
        n = r[2] + r[4];
        u = r[2].length;
      }
    } else if (a) {
      n = r[3] + r[4];
      u = r[3].length;
    } else {
      n = r[4];
    }
    if (i === "file:") {
      if (u >= 2) {
        n = n.slice(2);
      }
    } else if (v(i)) {
      n = r[4];
    } else if (i) {
      if (o) {
        n = n.slice(2);
      }
    } else if (u >= 2 && v(e.protocol)) {
      n = r[4];
    }
    return {
      protocol: i,
      slashes: o || v(i),
      slashesCount: u,
      rest: n
    };
  }
  function g(t, e, n) {
    t = (t = p(t)).replace(s, "");
    if (!(this instanceof g)) {
      return new g(t, e, n);
    }
    var o;
    var a;
    var u;
    var c;
    var f;
    var _;
    var m = h.slice();
    var b = typeof e;
    var E = 0;
    if (b !== "object" && b !== "string") {
      n = e;
      e = null;
    }
    if (n && typeof n != "function") {
      n = queryStringUtils_1.parse;
    }
    o = !(a = y(t || "", e = d(e))).protocol && !a.slashes;
    this.slashes = a.slashes || o && e.slashes;
    this.protocol = a.protocol || e.protocol || "";
    t = a.rest;
    if (a.protocol === "file:" && (a.slashesCount !== 2 || l.test(t)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !v(this.protocol))) {
      m[3] = [/(.*)/, "pathname"];
    }
    for (; E < m.length; E++) {
      if (typeof (c = m[E]) == "function") {
        t = c(t, this);
        continue;
      }
      u = c[0];
      _ = c[1];
      if (u != u) {
        this[_] = t;
      } else if (typeof u == "string") {
        if (~(f = u === "@" ? t.lastIndexOf(u) : t.indexOf(u))) {
          if (typeof c[2] == "number") {
            this[_] = t.slice(0, f);
            t = t.slice(f + c[2]);
          } else {
            this[_] = t.slice(f);
            t = t.slice(0, f);
          }
        }
      } else if (f = u.exec(t)) {
        this[_] = f[1];
        t = t.slice(0, f.index);
      }
      this[_] = this[_] || o && c[3] && e[_] || "";
      if (c[4]) {
        this[_] = this[_].toLowerCase();
      }
    }
    if (n) {
      this.query = n(this.query);
    }
    if (o && e.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || e.pathname !== "")) {
      this.pathname = function (t, e) {
        if (t === "") {
          return e;
        }
        var n = (e || "/").split("/").slice(0, -1).concat(t.split("/"));
        var r = n.length;
        var i = n[r - 1];
        var o = false;
        var s = 0;
        while (r--) {
          if (n[r] === ".") {
            n.splice(r, 1);
          } else if (n[r] === "..") {
            n.splice(r, 1);
            s++;
          } else if (s) {
            if (r === 0) {
              o = true;
            }
            n.splice(r, 1);
            s--;
          }
        }
        if (o) {
          n.unshift("");
        }
        if (i === "." || i === "..") {
          n.push("");
        }
        return n.join("/");
      }(this.pathname, e.pathname);
    }
    if (this.pathname.charAt(0) !== "/" && v(this.protocol)) {
      this.pathname = "/" + this.pathname;
    }
    if (!protocolPortCheck(this.port, this.protocol)) {
      this.host = this.hostname;
      this.port = "";
    }
    this.username = this.password = "";
    if (this.auth) {
      if (~(f = this.auth.indexOf(":"))) {
        this.username = this.auth.slice(0, f);
        this.username = encodeURIComponent(decodeURIComponent(this.username));
        this.password = this.auth.slice(f + 1);
        this.password = encodeURIComponent(decodeURIComponent(this.password));
      } else {
        this.username = encodeURIComponent(decodeURIComponent(this.auth));
      }
      this.auth = this.password ? this.username + ":" + this.password : this.username;
    }
    this.origin = this.protocol !== "file:" && v(this.protocol) && this.host ? this.protocol + "//" + this.host : "null";
    this.href = this.toString();
  }
  g.prototype = {
    set: function (t, e, n) {
      switch (t) {
        case "query":
          if (typeof e == "string" && e.length) {
            e = (n || queryStringUtils_1.parse)(e);
          }
          this[t] = e;
          break;
        case "port":
          this[t] = e;
          if (protocolPortCheck(e, this.protocol)) {
            if (e) {
              this.host = this.hostname + ":" + e;
            }
          } else {
            this.host = this.hostname;
            this[t] = "";
          }
          break;
        case "hostname":
          this[t] = e;
          if (this.port) {
            e += ":" + this.port;
          }
          this.host = e;
          break;
        case "host":
          this[t] = e;
          if (u.test(e)) {
            e = e.split(":");
            this.port = e.pop();
            this.hostname = e.join(":");
          } else {
            this.hostname = e;
            this.port = "";
          }
          break;
        case "protocol":
          this.protocol = e.toLowerCase();
          this.slashes = !n;
          break;
        case "pathname":
        case "hash":
          if (e) {
            var o = t === "pathname" ? "/" : "#";
            this[t] = e.charAt(0) !== o ? o + e : e;
          } else {
            this[t] = e;
          }
          break;
        case "username":
        case "password":
          this[t] = encodeURIComponent(e);
          break;
        case "auth":
          var s = e.indexOf(":");
          if (~s) {
            this.username = e.slice(0, s);
            this.username = encodeURIComponent(decodeURIComponent(this.username));
            this.password = e.slice(s + 1);
            this.password = encodeURIComponent(decodeURIComponent(this.password));
          } else {
            this.username = encodeURIComponent(decodeURIComponent(e));
          }
      }
      for (var a = 0; a < h.length; a++) {
        var c = h[a];
        if (c[4]) {
          this[c[1]] = this[c[1]].toLowerCase();
        }
      }
      this.auth = this.password ? this.username + ":" + this.password : this.username;
      this.origin = this.protocol !== "file:" && v(this.protocol) && this.host ? this.protocol + "//" + this.host : "null";
      this.href = this.toString();
      return this;
    },
    toString: function (t) {
      if (!t || typeof t != "function") {
        t = queryStringUtils_1.stringify;
      }
      var e;
      var n = this.host;
      var r = this.protocol;
      if (r && r.charAt(r.length - 1) !== ":") {
        r += ":";
      }
      var o = r + (this.protocol && this.slashes || v(this.protocol) ? "//" : "");
      if (this.username) {
        o += this.username;
        if (this.password) {
          o += ":" + this.password;
        }
        o += "@";
      } else if (this.password) {
        o += ":" + this.password;
        o += "@";
      } else if (this.protocol !== "file:" && v(this.protocol) && !n && this.pathname !== "/") {
        o += "@";
      }
      if (n[n.length - 1] === ":" || u.test(this.hostname) && !this.port) {
        n += ":";
      }
      o += n + this.pathname;
      if (e = typeof this.query == "object" ? t(this.query) : this.query) {
        o += e.charAt(0) !== "?" ? "?" + e : e;
      }
      if (this.hash) {
        o += this.hash;
      }
      return o;
    }
  };
  g.extractProtocol = y;
  g.location = d;
  g.trimLeft = p;
  g.qs = queryStringUtils_1;
  module.exports = g;
}