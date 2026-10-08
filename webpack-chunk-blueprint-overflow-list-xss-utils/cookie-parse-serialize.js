// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 978997
         */
module.exports = function (module, exports, require) {
  exports.parse = function (e, t) {
    if (typeof e != "string") {
      throw TypeError("argument str must be a string");
    }
    var n = {};
    var i = e.length;
    if (i < 2) {
      return n;
    }
    var o = t && t.decode || l;
    var a = 0;
    var s = 0;
    var f = 0;
    do {
      if ((s = e.indexOf("=", a)) === -1) {
        break;
      }
      if ((f = e.indexOf(";", a)) === -1) {
        f = i;
      } else if (s > f) {
        a = e.lastIndexOf(";", s - 1) + 1;
        continue;
      }
      var h = u(e, a, s);
      var d = c(e, s, h);
      var p = e.slice(h, d);
      if (!r.call(n, p)) {
        var g = u(e, s + 1, f);
        var v = c(e, f, g);
        if (e.charCodeAt(g) === 34 && e.charCodeAt(v - 1) === 34) {
          g++;
          v--;
        }
        var m = e.slice(g, v);
        n[p] = function (e, t) {
          try {
            return t(e);
          } catch (t) {
            return e;
          }
        }(m, o);
      }
      a = f + 1;
    } while (a < i);
    return n;
  };
  exports.serialize = function (e, t, r) {
    var u = r && r.encode || encodeURIComponent;
    if (typeof u != "function") {
      throw TypeError("option encode is invalid");
    }
    if (!i.test(e)) {
      throw TypeError("argument name is invalid");
    }
    var c = u(t);
    if (!o.test(c)) {
      throw TypeError("argument val is invalid");
    }
    var l = e + "=" + c;
    if (!r) {
      return l;
    }
    if (r.maxAge != null) {
      var f = Math.floor(r.maxAge);
      if (!isFinite(f)) {
        throw TypeError("option maxAge is invalid");
      }
      l += "; Max-Age=" + f;
    }
    if (r.domain) {
      if (!a.test(r.domain)) {
        throw TypeError("option domain is invalid");
      }
      l += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!s.test(r.path)) {
        throw TypeError("option path is invalid");
      }
      l += "; Path=" + r.path;
    }
    if (r.expires) {
      var h;
      var d = r.expires;
      h = d;
      if (n.call(h) !== "[object Date]" || isNaN(d.valueOf())) {
        throw TypeError("option expires is invalid");
      }
      l += "; Expires=" + d.toUTCString();
    }
    if (r.httpOnly) {
      l += "; HttpOnly";
    }
    if (r.secure) {
      l += "; Secure";
    }
    if (r.partitioned) {
      l += "; Partitioned";
    }
    if (r.priority) {
      switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
          l += "; Priority=Low";
          break;
        case "medium":
          l += "; Priority=Medium";
          break;
        case "high":
          l += "; Priority=High";
          break;
        default:
          throw TypeError("option priority is invalid");
      }
    }
    if (r.sameSite) {
      switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case true:
        case "strict":
          l += "; SameSite=Strict";
          break;
        case "lax":
          l += "; SameSite=Lax";
          break;
        case "none":
          l += "; SameSite=None";
          break;
        default:
          throw TypeError("option sameSite is invalid");
      }
    }
    return l;
  };
  var n = Object.prototype.toString;
  var r = Object.prototype.hasOwnProperty;
  var i = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  var o = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
  var a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  var s = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function u(e, t, n) {
    do {
      var r = e.charCodeAt(t);
      if (r !== 32 && r !== 9) {
        return t;
      }
    } while (++t < n);
    return n;
  }
  function c(e, t, n) {
    while (t > n) {
      var r = e.charCodeAt(--t);
      if (r !== 32 && r !== 9) {
        return t + 1;
      }
    }
    return n;
  }
  function l(e) {
    if (e.indexOf("%") !== -1) {
      return decodeURIComponent(e);
    } else {
      return e;
    }
  }
}