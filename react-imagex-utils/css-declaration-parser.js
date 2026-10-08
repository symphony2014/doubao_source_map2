// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 789062
         */
module.exports = function (module, exports, require) {
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  var n = /\n/g;
  var r = /^\s*/;
  var i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var o = /^:\s*/;
  var a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var l = /^[;\s]*/;
  var s = /^\s+|\s+$/g;
  function c(e) {
    if (e) {
      return e.replace(s, "");
    } else {
      return "";
    }
  }
  module.exports = function (e, s) {
    if (typeof e != "string") {
      throw TypeError("First argument must be a string");
    }
    if (!e) {
      return [];
    }
    s = s || {};
    var u = 1;
    var p = 1;
    function h(e) {
      var t = e.match(n);
      if (t) {
        u += t.length;
      }
      var r = e.lastIndexOf("\n");
      p = ~r ? e.length - r : p + e.length;
    }
    function d() {
      var e = {
        line: u,
        column: p
      };
      return function (t) {
        t.position = new A(e);
        m(r);
        return t;
      };
    }
    function A(e) {
      this.start = e;
      this.end = {
        line: u,
        column: p
      };
      this.source = s.source;
    }
    A.prototype.content = e;
    var f = [];
    function g(t) {
      var n = Error(s.source + ":" + u + ":" + p + ": " + t);
      n.reason = t;
      n.filename = s.source;
      n.line = u;
      n.column = p;
      n.source = e;
      if (s.silent) {
        f.push(n);
      } else {
        throw n;
      }
    }
    function m(t) {
      var n = t.exec(e);
      if (n) {
        var r = n[0];
        h(r);
        e = e.slice(r.length);
        return n;
      }
    }
    function y(e) {
      var t;
      for (e = e || []; t = b();) {
        if (t !== false) {
          e.push(t);
        }
      }
      return e;
    }
    function b() {
      var t = d();
      if (e.charAt(0) == "/" && e.charAt(1) == "*") {
        for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) {
          ++n;
        }
        n += 2;
        if (e.charAt(n - 1) === "") {
          return g("End of comment missing");
        }
        var r = e.slice(2, n - 2);
        p += 2;
        h(r);
        e = e.slice(n);
        p += 2;
        return t({
          type: "comment",
          comment: r
        });
      }
    }
    m(r);
    return function () {
      var e;
      var n = [];
      for (y(n); e = function () {
        var e = d();
        var n = m(i);
        if (n) {
          b();
          if (!m(o)) {
            return g("property missing ':'");
          }
          var r = m(a);
          var s = e({
            type: "declaration",
            property: c(n[0].replace(t, "")),
            value: r ? c(r[0].replace(t, "")) : ""
          });
          m(l);
          return s;
        }
      }();) {
        if (e !== false) {
          n.push(e);
          y(n);
        }
      }
      return n;
    }();
  };
}