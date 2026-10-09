// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 310289
         */
module.exports = function (module, exports, require) {
  function e() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  var r = /^([a-z0-9.+-]+:)/i;
  var n = /:[0-9]*$/;
  var i = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
  var o = ["%", "/", "?", ";", "#"].concat(["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"])));
  var s = ["/", "?", "#"];
  var a = /^[+a-z0-9A-Z_-]{0,63}$/;
  var c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var l = {
    javascript: true,
    "javascript:": true
  };
  var u = {
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
  e.prototype.parse = function (t, e) {
    var n;
    var h;
    var p;
    var f;
    var d;
    var g = t;
    g = g.trim();
    if (!e && t.split("#").length === 1) {
      var m = i.exec(g);
      if (m) {
        this.pathname = m[1];
        if (m[2]) {
          this.search = m[2];
        }
        return this;
      }
    }
    var _ = r.exec(g);
    if (_) {
      p = (_ = _[0]).toLowerCase();
      this.protocol = _;
      g = g.substr(_.length);
    }
    if ((e || _ || g.match(/^\/\/[^@\/]+@[^@\/]+/)) && (d = g.substr(0, 2) === "//") && (!_ || !l[_])) {
      g = g.substr(2);
      this.slashes = true;
    }
    if (!l[_] && (d || _ && !u[_])) {
      var v;
      var b;
      var k = -1;
      for (n = 0; n < s.length; n++) {
        if ((f = g.indexOf(s[n])) !== -1 && (k === -1 || f < k)) {
          k = f;
        }
      }
      if ((b = k === -1 ? g.lastIndexOf("@") : g.lastIndexOf("@", k)) !== -1) {
        v = g.slice(0, b);
        g = g.slice(b + 1);
        this.auth = v;
      }
      k = -1;
      n = 0;
      for (; n < o.length; n++) {
        if ((f = g.indexOf(o[n])) !== -1 && (k === -1 || f < k)) {
          k = f;
        }
      }
      if (k === -1) {
        k = g.length;
      }
      if (g[k - 1] === ":") {
        k--;
      }
      var y = g.slice(0, k);
      g = g.slice(k);
      this.parseHost(y);
      this.hostname = this.hostname || "";
      var C = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!C) {
        var x = this.hostname.split(/\./);
        n = 0;
        h = x.length;
        for (; n < h; n++) {
          var w = x[n];
          if (w && !w.match(a)) {
            var A = "";
            var E = 0;
            var D = w.length;
            for (; E < D; E++) {
              if (w.charCodeAt(E) > 127) {
                A += "x";
              } else {
                A += w[E];
              }
            }
            if (!A.match(a)) {
              var S = x.slice(0, n);
              var I = x.slice(n + 1);
              var Z = w.match(c);
              if (Z) {
                S.push(Z[1]);
                I.unshift(Z[2]);
              }
              if (I.length) {
                g = I.join(".") + g;
              }
              this.hostname = S.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > 255) {
        this.hostname = "";
      }
      if (C) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    var F = g.indexOf("#");
    if (F !== -1) {
      this.hash = g.substr(F);
      g = g.slice(0, F);
    }
    var L = g.indexOf("?");
    if (L !== -1) {
      this.search = g.substr(L);
      g = g.slice(0, L);
    }
    if (g) {
      this.pathname = g;
    }
    if (u[p] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  };
  e.prototype.parseHost = function (t) {
    var e = n.exec(t);
    if (e) {
      if ((e = e[0]) !== ":") {
        this.port = e.substr(1);
      }
      t = t.substr(0, t.length - e.length);
    }
    if (t) {
      this.hostname = t;
    }
  };
  module.exports = function (t, r) {
    if (t && t instanceof e) {
      return t;
    }
    var n = new e();
    n.parse(t, r);
    return n;
  };
}