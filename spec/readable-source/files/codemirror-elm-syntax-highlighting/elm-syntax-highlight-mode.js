// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 77244.61311ba7.js
         * chunkId: 77244
         * moduleId: 683651
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
    t(n);
    return n(e, t);
  }
  var i = /[a-z]/;
  var o = /[A-Z]/;
  var a = /[a-zA-Z0-9_]/;
  var u = /[0-9]/;
  var f = /[0-9A-Fa-f]/;
  var s = /[-&*+.\\/<>=?^|:]/;
  var l = /[(),[\]{}]/;
  var c = /[ \v\f]/;
  function m() {
    return function (e, t) {
      if (e.eatWhile(c)) {
        return null;
      }
      var n = e.next();
      if (l.test(n)) {
        if (n === "{" && e.eat("-")) {
          return r(e, t, function e(t) {
            if (t == 0) {
              return m();
            } else {
              return function (n, r) {
                while (!n.eol()) {
                  var i = n.next();
                  if (i == "{" && n.eat("-")) {
                    ++t;
                  } else if (i == "-" && n.eat("}") && --t == 0) {
                    r(m());
                    return "comment";
                  }
                }
                r(e(t));
                return "comment";
              };
            }
          }(1));
        } else if (n === "[" && e.match("glsl|")) {
          return r(e, t, h);
        } else {
          return "builtin";
        }
      }
      if (n === "'") {
        return r(e, t, _);
      }
      if (n === "\"") {
        if (e.eat("\"")) {
          if (e.eat("\"")) {
            return r(e, t, p);
          } else {
            return "string";
          }
        } else {
          return r(e, t, k);
        }
      }
      if (o.test(n)) {
        e.eatWhile(a);
        return "type";
      }
      if (i.test(n)) {
        var x = e.pos === 1;
        e.eatWhile(a);
        if (x) {
          return "def";
        } else {
          return "variable";
        }
      }
      if (u.test(n)) {
        if (n === "0") {
          if (e.eat(/[xX]/)) {
            e.eatWhile(f);
            return "number";
          }
        } else {
          e.eatWhile(u);
        }
        if (e.eat(".")) {
          e.eatWhile(u);
        }
        if (e.eat(/[eE]/)) {
          e.eat(/[-+]/);
          e.eatWhile(u);
        }
        return "number";
      }
      if (s.test(n)) {
        if (n === "-" && e.eat("-")) {
          e.skipToEnd();
          return "comment";
        } else {
          e.eatWhile(s);
          return "keyword";
        }
      } else if (n === "_") {
        return "keyword";
      } else {
        return "error";
      }
    };
  }
  function p(e, t) {
    while (!e.eol()) {
      if (e.next() === "\"" && e.eat("\"") && e.eat("\"")) {
        t(m());
        break;
      }
    }
    return "string";
  }
  function k(e, t) {
    while (e.skipTo("\\\"")) {
      e.next();
      e.next();
    }
    if (e.skipTo("\"")) {
      e.next();
      t(m());
      return "string";
    } else {
      e.skipToEnd();
      t(m());
      return "error";
    }
  }
  function _(e, t) {
    while (e.skipTo("\\'")) {
      e.next();
      e.next();
    }
    if (e.skipTo("'")) {
      e.next();
      t(m());
      return "string";
    } else {
      e.skipToEnd();
      t(m());
      return "error";
    }
  }
  function h(e, t) {
    while (!e.eol()) {
      if (e.next() === "|" && e.eat("]")) {
        t(m());
        break;
      }
    }
    return "string";
  }
  var x = {
    case: 1,
    of: 1,
    as: 1,
    if: 1,
    then: 1,
    else: 1,
    let: 1,
    in: 1,
    type: 1,
    alias: 1,
    module: 1,
    where: 1,
    import: 1,
    exposing: 1,
    port: 1
  };
  let d = {
    name: "elm",
    startState: function () {
      return {
        f: m()
      };
    },
    copyState: function (e) {
      return {
        f: e.f
      };
    },
    token: function (e, t) {
      var n = t.f(e, function (e) {
        t.f = e;
      });
      var r = e.current();
      if (x.hasOwnProperty(r)) {
        return "keyword";
      } else {
        return n;
      }
    },
    languageData: {
      commentTokens: {
        line: "--"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    elm: function () {
      return d;
    }
  });
}