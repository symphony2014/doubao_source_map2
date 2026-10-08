// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27522.8630c8d9.js
         * chunkId: 27522
         * moduleId: 3434
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var a = r("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}");
  var i = r("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}");
  var o = r("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent");
  var s = /[+\-*&%=<>!?:\/|]/;
  function l(e, t, n) {
    t.tokenize = n;
    return n(e, t);
  }
  function u(e, t) {
    var n = t.beforeParams;
    t.beforeParams = false;
    var r = e.next();
    if (r == "'" && !t.inString && t.inParams) {
      t.lastTokenWasBuiltin = false;
      return l(e, t, f(r));
    }
    if (r == "\"") {
      t.lastTokenWasBuiltin = false;
      if (t.inString) {
        t.inString = false;
        return "string";
      }
      if (t.inParams) {
        return l(e, t, f(r));
      }
    } else {
      if (/[\[\]{}\(\),;\.]/.test(r)) {
        if (r == "(" && n) {
          t.inParams = true;
        } else if (r == ")") {
          t.inParams = false;
          t.lastTokenWasBuiltin = true;
        }
        return null;
      }
      if (/\d/.test(r)) {
        t.lastTokenWasBuiltin = false;
        e.eatWhile(/[\w\.]/);
        return "number";
      }
      if (r == "#" && e.eat("*")) {
        t.lastTokenWasBuiltin = false;
        return l(e, t, c);
      }
      if (r == "#" && e.match(/ *\[ *\[/)) {
        t.lastTokenWasBuiltin = false;
        return l(e, t, k);
      }
      if (r == "#" && e.eat("#")) {
        t.lastTokenWasBuiltin = false;
        e.skipToEnd();
        return "comment";
      }
      if (r == "$") {
        e.eat("!");
        e.eatWhile(/[\w\d\$_\.{}-]/);
        if (o && o.propertyIsEnumerable(e.current())) {
          return "keyword";
        } else {
          t.lastTokenWasBuiltin = true;
          t.beforeParams = true;
          return "builtin";
        }
      }
      if (s.test(r)) {
        t.lastTokenWasBuiltin = false;
        e.eatWhile(s);
        return "operator";
      }
      e.eatWhile(/[\w\$_{}@]/);
      var u = e.current();
      if (a && a.propertyIsEnumerable(u)) {
        return "keyword";
      } else if (i && i.propertyIsEnumerable(u) || e.current().match(/^#@?[a-z0-9_]+ *$/i) && e.peek() == "(" && (!i || !i.propertyIsEnumerable(u.toLowerCase()))) {
        t.beforeParams = true;
        t.lastTokenWasBuiltin = false;
        return "keyword";
      } else if (t.inString) {
        t.lastTokenWasBuiltin = false;
        return "string";
      } else if (e.pos > u.length && e.string.charAt(e.pos - u.length - 1) == "." && t.lastTokenWasBuiltin) {
        return "builtin";
      } else {
        t.lastTokenWasBuiltin = false;
        return null;
      }
    }
  }
  function f(e) {
    return function (t, n) {
      var r;
      var a = false;
      var i = false;
      while ((r = t.next()) != null) {
        if (r == e && !a) {
          i = true;
          break;
        }
        if (e == "\"" && t.peek() == "$" && !a) {
          n.inString = true;
          i = true;
          break;
        }
        a = !a && r == "\\";
      }
      if (i) {
        n.tokenize = u;
      }
      return "string";
    };
  }
  function c(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "#" && r) {
        t.tokenize = u;
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  function k(e, t) {
    var n;
    var r = 0;
    while (n = e.next()) {
      if (n == "#" && r == 2) {
        t.tokenize = u;
        break;
      }
      if (n == "]") {
        r++;
      } else if (n != " ") {
        r = 0;
      }
    }
    return "meta";
  }
  let m = {
    name: "velocity",
    startState: function () {
      return {
        tokenize: u,
        beforeParams: false,
        inParams: false,
        inString: false,
        lastTokenWasBuiltin: false
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      } else {
        return t.tokenize(e, t);
      }
    },
    languageData: {
      commentTokens: {
        line: "##",
        block: {
          open: "#*",
          close: "*#"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    velocity: function () {
      return m;
    }
  });
}